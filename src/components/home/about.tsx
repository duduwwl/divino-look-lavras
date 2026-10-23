import Image from "next/image";
import { siteConfig } from "@/config/site";
import { photo } from "@/lib/photos";
import { InView } from "@/components/motion-primitives/in-view";
import { whatsappLink } from "@/lib/whatsapp";

const passes = [
  {
    img: photo("1769107805412-90d9191d53e9", "4:5"),
    alt: "Interior de boutique com araras de roupas e acessórios",
    title: "Curadoria",
    text: "Peças escolhidas uma a uma para combinar entre si. Assim fica fácil montar a produção inteira.",
    align: "md:ml-[8%]",
  },
  {
    img: photo("1769107805465-bfd41863f1a0", "4:5"),
    alt: "Arara com vestidos em tons neutros",
    title: "Atendimento próximo",
    text: "Ajuda com tamanho, caimento e combinações, na loja ou pelo WhatsApp, no seu tempo.",
    align: "md:ml-auto md:mr-[4%]",
  },
  {
    img: photo("1726128449240-6569b63355d2", "4:5"),
    alt: "Loja de roupas com espelho e araras",
    title: "Novo endereço",
    text: "Agora na Rua Santana, 208, Loja 1, no centro de Lavras. Passe para provar com calma.",
    align: "md:ml-[16%]",
  },
];

/** Pinned title, pictures pass: the street name stays while the store's promises scroll by. */
export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="frame pt-[clamp(96px,12vw,200px)]">
      <div className="grid grid-cols-12 gap-x-6 gap-y-12">
        <div className="col-span-12 lg:col-span-5">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+8vh)]">
            <h2 id="sobre-titulo" className="font-display text-[15vw] leading-[0.86] tracking-[-0.04em] sm:text-[4.6rem] lg:text-[clamp(64px,5.8vw,104px)]">
              Rua Santana, 208
            </h2>
            <p className="mt-6 max-w-[44ch] text-[1.125rem]">
              A Divino Look é uma boutique de moda feminina no centro de Lavras. Reunimos vestidos, conjuntos, blusas, calças,
              saias e moda fitness pensando no look completo, para você se vestir bem do jeito que é.
            </p>
            <p className="mt-3 max-w-[44ch] text-[1.125rem]">
              Atendemos na loja física e pelo WhatsApp, com envio para todo o Brasil.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <a href={siteConfig.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                Conhecer a loja
              </a>
              <a
                href={whatsappLink("Olá, Divino Look! Quero saber o horário de atendimento da loja.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sand"
              >
                Perguntar horários
              </a>
            </div>
          </div>
        </div>

        <ul className="col-span-12 flex flex-col gap-16 lg:col-span-7 lg:gap-[10vh] lg:pt-[6vh]">
          {passes.map((p) => (
            <li key={p.title} className={`w-full md:w-[62%] ${p.align}`}>
              <InView
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewOptions={{ once: true, margin: "0px 0px -15% 0px" }}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                  <Image src={p.img} alt={p.alt} fill sizes="(min-width: 1024px) 30vw, (min-width: 768px) 60vw, 100vw" className="object-cover" />
                </div>
                <h3 className="mt-4 text-[1.125rem] font-semibold">{p.title}</h3>
                <p className="mt-1 max-w-[34ch]">{p.text}</p>
              </InView>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
