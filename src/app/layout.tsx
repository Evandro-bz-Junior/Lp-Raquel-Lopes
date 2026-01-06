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
  metadataBase: new URL("https://raquellopes.vercel.app"),

  title: "Raquel Lopes | Psicóloga e Neuropsicóloga em Mossoró",
  description:
    "Atendimento psicológico e avaliações neuropsicológicas para crianças, adolescentes e adultos. Cuidado acolhedor, técnico e individualizado em Mossoró–RN.",

  keywords: [
    "psicóloga em Mossoró",
    "psicóloga infantil",
    "Neuropsicóloga em Mossoró",
    "psicoterapia em Mossoró",
    "psicoterapia infantil",
    "psicoterapia adolescente",
    "psicoterapia adulto",
    "psicoterapia clínica",
    "psicoterapia clínica em Mossoró",
    "psicoterapia clínica RN",
    "neuropsicologia",
    "psicoterapia",
    "TCC",
    "psicóloga",
    "avaliação neuropsicológica",
    "psicologia clínica",
    "psicologia infantil Mossoró",
    "ABA",
    "psicólogo Mossoró RN",
  ],

  authors: [{ name: "Raquel Lopes" }],
  creator: "Raquel Lopes",
  publisher: "Raquel Lopes Psicologia",

  robots: "index, follow",

  alternates: {
    canonical: "https://raquellopes.vercel.app",
  },

  openGraph: {
    title: "Raquel Lopes | Psicóloga e Neuropsicóloga",
    description:
      "Cuidados psicológicos e neuropsicológicos com acolhimento, técnica e individualidade.",
    url: "https://raquellopes.vercel.app",
    siteName: "Raquel Lopes Psicologia",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "https://raquellopes.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Raquel Lopes | Psicóloga e Neuropsicóloga em Mossoró",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Raquel Lopes | Psicóloga e Neuropsicóloga",
    description:
      "Atendimento psicológico e avaliações neuropsicológicas com acolhimento e técnica.",
    images: ["https://raquellopes.vercel.app/images/og-image.png"],
  },

  icons: {
    icon: "/images/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head><meta name="google-site-verification" content="VKJb4ac7AdudI5tOGDPz0TdR3ZTgyVkgWcm-zHnNLUY" />
      </head>
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
