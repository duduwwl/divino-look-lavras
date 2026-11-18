import { getDb } from "@/db/client";
import { json } from "@/lib/api-guard";
import { verifyMercadoPagoSignature } from "@/lib/checkout";
import { syncPayment } from "@/lib/mercadopago";
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
  } else {
    // Ainda é seguro processar: o status vem sempre da API com o nosso token, nunca do corpo recebido.
    console.warn("MERCADOPAGO_WEBHOOK_SECRET ausente; assinatura do webhook não verificada.");
  }

  const db = getDb();
  if (!db) return json({ ok: false }, { status: 503 });
  try {
    await syncPayment(db, dataId);
    return json({ ok: true });
  } catch (error) {
    console.error("Falha ao processar webhook do Mercado Pago.", error instanceof Error ? error.message : "Erro desconhecido");
    // 500 faz o Mercado Pago tentar de novo mais tarde.
    return json({ ok: false }, { status: 500 });
  }
}
