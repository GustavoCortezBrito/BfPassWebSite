import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bf-pass-web-site.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BF-Pass — Seu passaporte para o bem-estar",
    template: "%s | BF-Pass",
  },
  description: "Mais saúde, mais economia, mais você. Acesse cupons exclusivos de parceiros, treinos personalizados e e-books nutricionais em um só lugar.",
  keywords: ["clube de benefícios", "treinos", "cupons de desconto", "nutrição", "saúde", "bem-estar", "BF-Pass", "Barretos"],
  authors: [{ name: "BF-Pass" }],
  creator: "BF-Pass",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "BF-Pass",
    title: "BF-Pass — Seu passaporte para o bem-estar",
    description: "Cupons exclusivos, treinos personalizados e e-books nutricionais. O clube de benefícios completo para sua saúde e economia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BF-Pass — Seu passaporte para o bem-estar",
    description: "Cupons exclusivos, treinos personalizados e e-books nutricionais. O clube de benefícios completo.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col antialiased`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
