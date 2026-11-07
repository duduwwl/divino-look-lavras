import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { generalMessage, whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Políticas e privacidade",
  description: "Compras, trocas, privacidade e proteção de dados na Divino Look.",
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
    title: "Privacidade e dados coletados",
    body: "A Divino Look é a controladora dos dados tratados neste site. A sacola e os favoritos ficam apenas no armazenamento local do seu navegador. A newsletter coleta somente o e-mail e o registro do consentimento. O site não coleta CPF nem dados de pagamento. Um identificador irreversível do endereço IP é usado em uma janela de 15 minutos para impedir abuso; registros expirados são removidos pelas rotinas de limpeza. Ao abrir o WhatsApp, o tratamento também segue a política dessa plataforma.",
  },
  {
    id: "bases",
    title: "Finalidades e bases legais",
    body: "O e-mail é usado somente para novidades quando houver consentimento. O consentimento pode ser retirado a qualquer momento. Medidas antifraude e registros mínimos de segurança usam o legítimo interesse de proteger o site e seus usuários. Obrigações legais poderão exigir conservação específica, quando aplicável.",
  },
  {
    id: "protecao",
    title: "Proteção, retenção e compartilhamento",
    body: "E-mails e dados pessoais de pedidos são criptografados no banco. O site aplica validação, limitação de requisições, consultas parametrizadas, controle de origem e cabeçalhos de segurança. Dados da newsletter ficam guardados até a retirada do consentimento ou pedido de exclusão. Vercel e Neon processam dados como fornecedores de infraestrutura, inclusive fora do Brasil, com salvaguardas contratuais e técnicas adequadas.",
  },
  {
    id: "direitos",
    title: "Seus direitos pela LGPD",
    body: "Você pode pedir confirmação do tratamento, acesso, correção, anonimização, portabilidade, informação sobre compartilhamento, revisão, exclusão e revogação do consentimento. Fale pelo WhatsApp ou visite a loja. A identidade poderá ser confirmada antes da resposta para evitar entrega de dados a terceiros. Você também pode peticionar à Autoridade Nacional de Proteção de Dados.",
  },
  {
    id: "precos",
    title: "Preços e imagens",
    body: "Nesta versão do site, as fotografias são reais e mostram peças selecionadas pela Divino Look. Preços, estoques, tamanhos e cores permanecem demonstrativos; os dados oficiais são sempre os informados pela loja no atendimento.",
  },
];

export default function PoliticasPage() {
  return (
    <div className="frame pt-10 pb-[clamp(96px,12vw,180px)]">
      <div className="grid grid-cols-12 gap-x-6 gap-y-10">
        <div className="col-span-12 lg:col-span-4">
          <h1 className="font-display text-[3rem] leading-[0.95] tracking-[-0.03em] md:text-[4.2rem]">Políticas e privacidade</h1>
          <p className="mt-4 max-w-[36ch] text-muted">
            Última atualização: 7 de novembro de 2026. Controladora: Divino Look, {siteConfig.address.street}, {siteConfig.address.city}–{siteConfig.address.state}.
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
