"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";

type State = "idle" | "error" | "sending" | "done";
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");
  const id = useId();

  const [company, setCompany] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAIL.test(email.trim())) {
      setState("error");
      setError("Digite um e-mail válido, como nome@exemplo.com.");
      return;
    }
    if (!consent) {
      setState("error");
      setError("Marque a caixa de consentimento para continuar.");
      return;
    }
    setState("sending");
    setError("");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), consent, company }),
      });
      const result = (await response.json()) as { ok?: boolean; message?: string };
      if (!response.ok || !result.ok) throw new Error(result.message || "Não foi possível concluir o cadastro.");
      setState("done");
    } catch (submissionError) {
      setState("error");
      setError(submissionError instanceof Error ? submissionError.message : "Não foi possível concluir o cadastro.");
    }
  };

  return (
    <section aria-labelledby="news-titulo" className="frame pt-[clamp(96px,12vw,200px)]">
      <div className="grid grid-cols-12 gap-x-6 gap-y-8 bg-sand px-5 py-10 sm:px-10 lg:py-16">
        <div className="col-span-12 lg:col-span-5">
          <h2 id="news-titulo" className="font-display text-[2rem] leading-tight tracking-[-0.015em] md:text-[2.6rem]">
            Novidades por e-mail
          </h2>
          <p className="mt-3 max-w-[42ch]">
            Receba os lançamentos e as dicas de look da Divino Look. Sem excesso de mensagens.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <AnimatePresence mode="wait" initial={false}>
            {state === "done" ? (
              <motion.div
                key="done"
                role="status"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                className="bg-paper p-6"
              >
                <p className="flex items-center gap-2 font-semibold">
                  <Check className="size-5 text-brown" aria-hidden /> Cadastro realizado
                </p>
                <p className="mt-2 text-[1rem]">
                  Pronto! O e-mail <strong>{email}</strong> foi cadastrado para receber as novidades da Divino Look.
                </p>
                <button type="button" className="mt-4 text-[1rem] underline underline-offset-4" onClick={() => { setState("idle"); setEmail(""); setConsent(false); }}>
                  Voltar ao formulário
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                noValidate
                onSubmit={onSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                aria-describedby={`${id}-privacy`}
              >
                <div className="absolute -left-[10000px] top-auto size-px overflow-hidden" aria-hidden="true">
                  <label htmlFor={`${id}-company`}>Empresa</label>
                  <input id={`${id}-company`} name="company" tabIndex={-1} autoComplete="off" value={company} onChange={(e) => setCompany(e.target.value)} />
                </div>
                <label htmlFor={`${id}-email`} className="text-[1rem] font-semibold">
                  Seu e-mail
                </label>
                <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                  <input
                    id={`${id}-email`}
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (state === "error") setState("idle");
                    }}
                    aria-invalid={state === "error" && !EMAIL.test(email.trim())}
                    aria-describedby={state === "error" ? `${id}-err` : undefined}
                    placeholder="nome@exemplo.com"
                    className="h-12 min-w-0 flex-1 bg-paper px-4 text-[1rem] outline-none placeholder:text-muted focus-visible:outline-2 focus-visible:outline-brown"
                  />
                  <button type="submit" className="btn btn-primary" disabled={state === "sending"}>
                    {state === "sending" ? "Cadastrando…" : "Quero receber"}
                  </button>
                </div>
                <label className="mt-3 flex cursor-pointer items-start gap-3 text-[1rem]">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 size-[18px] accent-[#805247]"
                  />
                  Aceito receber comunicações da Divino Look e sei que posso cancelar quando quiser.
                </label>
                {state === "error" ? (
                  <p id={`${id}-err`} role="alert" className="mt-3 text-[1rem] font-semibold text-[#8a2d22]">
                    {error}
                  </p>
                ) : null}
                <p id={`${id}-privacy`} className="mt-3 text-[0.875rem] text-muted">
                  Usamos seu e-mail somente para comunicações da loja. Você pode solicitar o cancelamento a qualquer momento.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
