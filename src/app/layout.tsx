import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HubSumples | Método Hub Sumples - Presença Digital de Autoridade",
  description: "Pare de brigar por preço e comece a escalar sua autoridade. Conheça o Método Hub Sumples e construa uma base digital de alta conversão para o seu negócio.",
  keywords: ["marketing digital", "presença online", "autoridade digital", "método hub sumples", "hubsumples"],
  openGraph: {
    type: "website",
    title: "HubSumples | Método Hub Sumples",
    description: "A base digital dos líderes de mercado.",
    images: ["https://i.imgur.com/GZVo03w.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} bg-brand-navy text-white min-h-screen antialiased selection:bg-brand-main selection:text-white`}>
        <div className="bg-grid fixed inset-0 z-[-1]" />
        {children}
      </body>
    </html>
  );
}
