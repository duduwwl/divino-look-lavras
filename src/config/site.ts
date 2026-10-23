/**
 * Store settings. Change these in one place.
 *
 * WhatsApp: set NEXT_PUBLIC_WHATSAPP_NUMBER (only digits, with country and area code,
 * e.g. 5535900000000) in the environment or in the GitHub Actions workflow to override
 * the default below. The default is the "Fale conosco pelo WhatsApp" number published
 * on the store's own Linktree (linktr.ee/lillywhatsapp).
 */
export const siteConfig = {
  name: "Divino Look",
  description:
    "Boutique de moda feminina no centro de Lavras–MG. Looks completos para se vestir bem, com atendimento pelo WhatsApp e envio para todo o Brasil.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://duduwwl.github.io/divino-look-lavras",
  whatsappNumber: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5535988281548").replace(/\D/g, ""),
  whatsappGroup: "https://chat.whatsapp.com/GTR11gQXxAzHqwfnvXnl5e",
  instagram: "https://www.instagram.com/divinolook_lavras/",
  instagramHandle: "@divinolook_lavras",
  linktree: "https://linktr.ee/lillywhatsapp",
  address: {
    street: "Rua Santana, 208, Loja 1",
    district: "Centro",
    city: "Lavras",
    state: "MG",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Santana+208+Centro+Lavras+MG",
  },
} as const;

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
