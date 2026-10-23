import Link from "next/link";

export default function NotFound() {
  return (
    <div className="frame flex min-h-[70svh] flex-col justify-center py-20">
      <p className="wordmark text-[28vw] text-brown md:text-[18vw]">404</p>
      <h1 className="mt-6 font-display text-[2.2rem] leading-tight">Esta página não existe.</h1>
      <p className="mt-2 max-w-[46ch] text-muted">O link pode ter mudado. Volte ao início ou veja todas as peças do catálogo.</p>
      <div className="mt-6 flex flex-wrap gap-2">
        <Link href="/" className="btn btn-dark">
          Ir para o início
        </Link>
        <Link href="/produtos" className="btn btn-sand">
          Ver produtos
        </Link>
      </div>
    </div>
  );
}
