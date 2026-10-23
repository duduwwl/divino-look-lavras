const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

export const formatBRL = (value: number) => brl.format(value);

/** Demonstration instalment line (3x sem juros) — not an official payment policy. */
export const installments = (value: number, times = 3) =>
  `ou ${times}x de ${formatBRL(value / times)}`;
