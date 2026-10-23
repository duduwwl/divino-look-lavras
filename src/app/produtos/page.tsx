import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Catalog } from "@/components/products/catalog";
import { TextEffect } from "@/components/motion-primitives/text-effect";

export const metadata: Metadata = {
  title: "Nossa coleção",
  description:
    "Catálogo da Divino Look: vestidos, conjuntos, blusas, calças, saias e moda fitness. Filtre por tamanho, cor, preço e disponibilidade.",
  alternates: { canonical: "produtos/" },
  openGraph: { title: "Nossa coleção · Divino Look", url: "produtos/" },
};

export default function ProdutosPage() {
  return (
    <div className="pb-[clamp(96px,12vw,180px)]">
      <header className="frame pt-6 pb-8 lg:pt-10 lg:pb-12">
        <nav aria-label="Trilha de navegação" className="text-[0.875rem] text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="link-underline">
                Início
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-ink">
              Produtos
            </li>
          </ol>
        </nav>
        <div className="mt-6 grid grid-cols-12 gap-x-6 gap-y-4">
          <TextEffect
            as="h1"
            per="word"
            preset="fade-in-blur"
            className="col-span-12 font-display text-[16vw] leading-[0.86] tracking-[-0.045em] md:text-[11vw] lg:col-span-8 lg:text-[clamp(96px,9.4vw,150px)]"
          >
            Nossa coleção
          </TextEffect>
          <p className="col-span-12 max-w-[46ch] self-end lg:col-span-4 lg:pb-3">
            Peças selecionadas para montar looks completos, do vestido de festa à legging do treino. Combine os filtros,
            compartilhe o link filtrado e finalize pelo WhatsApp.
          </p>
        </div>
        <p className="mt-6 text-[0.875rem] text-muted">
          Catálogo demonstrativo: preços, tamanhos, cores e estoque são ilustrativos e serão substituídos pelos dados da loja.
        </p>
      </header>

      <Suspense fallback={<div className="frame min-h-[60svh] bg-sand/50" aria-busy="true" />}>
        <Catalog />
      </Suspense>
    </div>
  );
}
