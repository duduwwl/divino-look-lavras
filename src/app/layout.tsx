import type { Metadata, Viewport } from "next";
import { Albert_Sans, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart/cart-provider";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { siteConfig } from "@/config/site";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
  weight: ["400", "500"],
});

const albert = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url + "/"),
  title: {
    default: "Divino Look — Moda feminina em Lavras–MG",
    template: "%s · Divino Look",
  },
  description: siteConfig.description,
  applicationName: "Divino Look",
  keywords: ["moda feminina", "Lavras", "boutique", "vestidos", "conjuntos", "moda fitness", "Divino Look"],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Divino Look",
    title: "Divino Look — Moda feminina em Lavras–MG",
    description: siteConfig.description,
    url: "./",
    images: [{ url: "og.jpg", width: 1200, height: 630, alt: "Divino Look — moda feminina em Lavras" }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#805247",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${bodoni.variable} ${albert.variable}`}>
      <body>
        <CartProvider>
          <div className="relative z-10 bg-paper">
            <SiteHeader />
            <main id="conteudo" className="min-h-[60svh]">
              {children}
            </main>
          </div>
          <SiteFooter />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
