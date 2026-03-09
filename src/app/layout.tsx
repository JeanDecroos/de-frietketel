import type { Metadata } from "next";
import { Archivo, JetBrains_Mono, DM_Serif_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "De Frietketel | Verse Frieten in Gent",
    template: "%s | De Frietketel Gent",
  },
  description:
    "De Frietketel — de grootste porties verse frieten van Gent. Papegaaistraat 89, met vegan & veggie opties en huisgemaakte sauzen.",
  keywords: [
    "frituur", "Gent", "frieten", "frietjes", "snacks", "Bicky Burger",
    "Papegaaistraat", "vegan", "veggie", "mitraillette", "afhalen",
    "De Frietketel", "huisgemaakte tartaar", "garnaalkroket",
  ],
  openGraph: {
    title: "De Frietketel | Verse Frieten in Gent",
    description: "De grootste porties van Gent. Verse frieten, vegan opties en huisgemaakte sauzen.",
    url: "https://www.defrietketel.be",
    siteName: "De Frietketel",
    locale: "nl_BE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${archivo.variable} ${jetbrainsMono.variable} ${dmSerifDisplay.variable} font-[family-name:var(--font-archivo)] antialiased`}>
        <Header />
        <main className="overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
