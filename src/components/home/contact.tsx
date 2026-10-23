import { siteConfig } from "@/config/site";
import { generalMessage, whatsappLink } from "@/lib/whatsapp";

const phoneDisplay = (n: string) => {
  const d = n.replace(/^55/, "");
  return d.length === 11 ? `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}` : n;
};

/** The number as display type: the WhatsApp line set large, in the inverse colours. */
export function Contact() {
  const phone = phoneDisplay(siteConfig.whatsappNumber);
  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="on-dark relative mt-[clamp(96px,12vw,200px)] flex min-h-[86svh] flex-col bg-ink text-paper md:min-h-[100svh]"
    >
      <div className="frame pt-12 lg:pt-16">
        <h2 id="contato-titulo" className="max-w-[26ch] font-display text-[1.6rem] leading-snug md:text-[2rem]">
          Fale com a gente para reservar uma peça, tirar dúvidas de tamanho ou combinar a entrega.
        </h2>
      </div>

      <div className="frame mt-auto pb-[8svh]">
        <p className="text-[0.95rem] opacity-80">WhatsApp da loja</p>
        <a
          href={whatsappLink(generalMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 block font-display text-[13.2vw] leading-[0.95] tracking-[-0.04em] whitespace-nowrap transition-colors duration-300 hover:text-champagne md:text-[11.4vw]"
        >
          {phone}
        </a>
      </div>

      <div className="frame flex flex-col gap-3 pb-8 text-[0.95rem] sm:flex-row sm:items-end sm:justify-between">
        <address className="not-italic opacity-90">
          {siteConfig.address.street} · {siteConfig.address.district}
          <br />
          {siteConfig.address.city}–{siteConfig.address.state}
        </address>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="link-underline">
            Instagram
          </a>
          <a href={siteConfig.whatsappGroup} target="_blank" rel="noopener noreferrer" className="link-underline">
            Grupo VIP
          </a>
          <a href={siteConfig.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-underline">
            Como chegar
          </a>
        </div>
      </div>
    </section>
  );
}
