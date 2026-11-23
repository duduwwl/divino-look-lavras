import { getDb } from "@/db/client";
import { hashIp, hitRateLimit, json } from "@/lib/api-guard";
import { verifyMercadoPagoSignature } from "@/lib/checkout";
import { MercadoPagoError, syncPayment } from "@/lib/mercadopago";
import { readLimitedJson } from "@/lib/request-security";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const url = new URL(request.url);
  const body = (await readLimitedJson(request, 8192).catch(() => null)) as { type?: string; data?: { id?: unknown } } | null;
  const type = url.searchParams.get("type") ?? body?.type;
  const dataId = url.searchParams.get("data.id") ?? String(body?.data?.id ?? "");

  // Só pagamentos interessam; outros tópicos recebem 200 para o Mercado Pago não reenviar.
  if (type !== "payment" || !dataId) return json({ ok: true });

  const secret = process.env.MERCADOPAGO_WEBHOOK_SECRET;
  if (secret) {
    const valid = verifyMercadoPagoSignature({
      signature: request.headers.get("x-signature"),
      requestId: request.headers.get("x-request-id"),
      dataId,
      secret,
    });
    if (!valid) return json({ ok: false }, { status: 401 });
  }

  const db = getDb();
  if (!db) return json({ ok: false }, { status: 503 });
  if (!secret) {
    // Ainda é seguro processar: o status vem sempre da API com o nosso token, nunca do corpo recebido.
    // Sem assinatura, limita por IP para ninguém usar o webhook para disparar consultas em massa.
    console.warn("MERCADOPAGO_WEBHOOK_SECRET ausente; assinatura do webhook não verificada.");
    const ipHash = hashIp(request, "webhook:");
    if (ipHash && (await hitRateLimit(db, ipHash).catch(() => 0)) > 60) return json({ ok: false }, { status: 429 });
  }
  try {
    await syncPayment(db, dataId);
    return json({ ok: true });
  } catch (error) {
    // Pagamento inexistente: não adianta o Mercado Pago reenviar.
    if (error instanceof MercadoPagoError && (error.status === 404 || error.status === 400)) return json({ ok: true });
    console.error("Falha ao processar webhook do Mercado Pago.", error instanceof Error ? error.message : "Erro desconhecido");
    // 500 faz o Mercado Pago tentar de novo mais tarde.
    return json({ ok: false }, { status: 500 });
  }
}
