import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { generalMessage, whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Políticas da loja",
  description: "Como funcionam compras, trocas, privacidade e atendimento na Divino Look.",
  alternates: { canonical: "politicas/" },
};

const sections = [
  {
    id: "compras",
    title: "Compras e pagamento",
    body: "Os pedidos montados no site são finalizados pelo WhatsApp. Disponibilidade, formas de pagamento, frete e prazo são confirmados diretamente com a equipe da loja antes de qualquer cobrança. Este site não processa pagamentos.",
  },
  {
    id: "trocas",
    title: "Trocas e devoluções",
    body: "As condições de troca e devolução são informadas pela loja no atendimento. Em compras feitas fora do estabelecimento, valem os direitos previstos no Código de Defesa do Consumidor.",
  },
  {
    id: "privacidade",
    title: "Privacidade",
    body: "A sacola e os favoritos ficam salvos apenas no seu navegador (armazenamento local) e não são enviados a nenhum servidor. O formulário de novidades é demonstrativo e não envia nem armazena e-mails. Ao clicar em um botão do WhatsApp, a conversa acontece no aplicativo do WhatsApp, sob a política de privacidade dele.",
  },
  {
    id: "precos",
    title: "Preços e imagens",
    body: "Nesta versão do site, preços, estoques, tamanhos e fotografias são demonstrativos. Os valores oficiais são sempre os informados pela loja no atendimento.",
  },
];

export default function PoliticasPage() {
  return (
    <div className="frame pt-10 pb-[clamp(96px,12vw,180px)]">
      <div className="grid grid-cols-12 gap-x-6 gap-y-10">
        <div className="col-span-12 lg:col-span-4">
          <h1 className="font-display text-[3rem] leading-[0.95] tracking-[-0.03em] md:text-[4.2rem]">Políticas da loja</h1>
          <p className="mt-4 max-w-[36ch] text-muted">
            Texto-base demonstrativo. A versão final deve ser revisada e aprovada pela Divino Look.
          </p>
          <nav aria-label="Seções" className="mt-6">
            <ul className="space-y-1.5">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="link-underline">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="col-span-12 flex flex-col gap-10 lg:col-span-7 lg:col-start-6">
          {sections.map((s) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-t`}>
              <h2 id={`${s.id}-t`} className="font-display text-[1.625rem] leading-tight">
                {s.title}
              </h2>
              <p className="mt-3 max-w-[64ch]">{s.body}</p>
            </section>
          ))}
          <div className="bg-sand p-6">
            <p className="font-semibold">Dúvidas?</p>
            <p className="mt-1">
              Fale com a loja pelo{" "}
              <a href={whatsappLink(generalMessage)} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                WhatsApp
              </a>{" "}
              ou visite {siteConfig.address.street}, {siteConfig.address.city}–{siteConfig.address.state}.
            </p>
            <Link href="/produtos" className="btn btn-dark mt-5">
              Voltar ao catálogo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
