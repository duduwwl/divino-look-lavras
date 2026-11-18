// shortcut: frete do envio é combinado pelo WhatsApp; quando entrar a API de fretes, calcular aqui e somar ao pedido.
export const deliveryOptions = {
  retirada: "Retirada na loja (Rua Santana, 208 · Lavras–MG)",
  envio: "Envio para todo o Brasil (frete combinado pelo WhatsApp)",
} as const;
export type Delivery = keyof typeof deliveryOptions;
