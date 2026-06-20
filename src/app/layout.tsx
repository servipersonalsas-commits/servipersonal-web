import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://servipersonal-web.vercel.app"),
  title: {
    default: "Servipersonal de Colombia S.A.S.",
    template: "%s | Servipersonal de Colombia S.A.S.",
  },
  description:
    "Servicios temporales, selección de talento y administración de nómina para entidades públicas y privadas en Colombia.",
  applicationName: "Servipersonal de Colombia S.A.S.",
  authors: [{ name: "Servipersonal de Colombia S.A.S." }],
  generator: "Next.js",
  keywords: [
    "Servipersonal",
    "talento humano Colombia",
    "servicios temporales",
    "nómina",
    "selección de personal",
    "Montería",
  ],
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Servipersonal de Colombia S.A.S.",
    title: "Servipersonal de Colombia S.A.S.",
    description:
      "Servicios temporales, selección de talento y administración de nómina para entidades públicas y privadas en Colombia.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
