import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins", // para usar com Tailwind
});

export const metadata: Metadata = {
  title: "Psicóloga Raquel Lopes",
  description: "Atendimento psicológico e neuropsicológico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header></Header>
      <body
        className={poppins.variable}
      >
        {children}
      </body>
      <Footer></Footer>
    </html>
  );
}
