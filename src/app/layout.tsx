import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Psicóloga Raquel Lopes",
  description: "Atendimento psicológico e neuropsicológico.",
  keywords: ["psicologia", "neuropsicologia", "terapia", "psicóloga"],
  authors: [{ name: "Raquel Lopes" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head><meta name="google-site-verification" content="VKJb4ac7AdudI5tOGDPz0TdR3ZTgyVkgWcm-zHnNLUY" /></head>
      <body
        className={poppins.variable}
      >
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>

    </html>
  );
}
