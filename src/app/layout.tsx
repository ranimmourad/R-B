import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "R&B Clothing Store — Mode Homme & Femme | Tunisie",
  description:
    "R&B Clothing Store — Mode Homme, Femme & Enfant. Qualité premium, prix imbattables, livraison rapide partout en Tunisie.",
  keywords: [
    "R&B",
    "Clothing Store",
    "Tunisie",
    "Mode",
    "T-Shirts",
    "Vêtements Homme",
    "Vêtements Femme",
    "Mode Tunisie",
  ],
  openGraph: {
    title: "R&B Clothing Store",
    description:
      "Mode Homme & Femme. Qualité premium & prix imbattables. Livraison rapide partout en Tunisie.",
    type: "website",
    locale: "fr_TN",
  },
  icons: {
    icon: "/logo/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="font-sans bg-white text-brand-ink">
        <CartProvider>
          <Header />
          <main className="min-h-[70vh]">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
