import { Plus } from "lucide-react";
import { siteConfig } from "@/config/site";
import { generalMessage, whatsappLink } from "@/lib/whatsapp";

const rows: { title: string; body: React.ReactNode }[] = [
  {
    title: "Atendimento personalizado",
    body: "Conte a ocasião, o estilo e o tamanho que costuma usar: a equipe sugere peças e combinações para o seu look.",
  },
  {
    title: "Compra pelo WhatsApp",
    body: (
      <>
        Monte a sacola aqui no site e finalize a conversa pelo WhatsApp. Disponibilidade, formas de pagamento e entrega são
        confirmadas diretamente com a loja.{" "}
        <a className="underline underline-offset-4" href={whatsappLink(generalMessage)} target="_blank" rel="noopener noreferrer">
          Abrir conversa
        </a>
      </>
    ),
  },
  {
    title: "Loja física em Lavras–MG",
    body: (
      <>
        {siteConfig.address.street}, {siteConfig.address.district}.{" "}
        <a className="underline underline-offset-4" href={siteConfig.address.mapsUrl} target="_blank" rel="noopener noreferrer">
          Ver no mapa
        </a>
      </>
    ),
  },
  {
    title: "Envio para todo o Brasil",
    body: "Comprou de outra cidade? A loja envia. Prazos e valores de frete são informados no atendimento, conforme o CEP.",
  },
  {
    title: "Moda feminina selecionada",
    body: "Vestidos, conjuntos, blusas, calças, saias e moda fitness: peças que conversam entre si para facilitar o look completo.",
  },
  {
    title: "Grupo VIP no WhatsApp",
    body: (
      <>
        Novidades e lançamentos chegam primeiro no grupo da loja.{" "}
        <a className="underline underline-offset-4" href={siteConfig.whatsappGroup} target="_blank" rel="noopener noreferrer">
          Entrar no grupo
        </a>
      </>
    ),
  },
];

/** Giant word, filled bar rows: how buying from Divino Look works. */
export function Experience() {
  return (
    <section aria-labelledby="experiencia-titulo" className="frame pt-[clamp(96px,12vw,200px)]">
      <div className="mx-auto w-full max-w-[640px] [container-type:inline-size]">
        <h2
          id="experiencia-titulo"
          className="font-display text-[15.6cqw] leading-[0.82] tracking-[-0.045em] whitespace-nowrap text-brown"
        >
          Atendimento
        </h2>
        <p className="mt-4 max-w-[48ch]">Como é comprar na Divino Look: na loja, pelo site ou pelo WhatsApp.</p>
        <div className="mt-6 flex flex-col gap-1.5">
          {rows.map((r, i) => (
            <details key={r.title} className="group bg-sand open:bg-champagne/60" open={i === 0}>
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-[18px] py-3 font-medium [&::-webkit-details-marker]:hidden">
                {r.title}
                <Plus
                  className="size-[18px] shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-open:rotate-45"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </summary>
              <div className="px-[18px] pb-5 text-[1rem]">{r.body}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
