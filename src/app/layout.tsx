import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pires.tur.br"),
  title: "Pires — Inteligência e Negócios para o seu Espaço ou Evento",
  description:
    "+ de 30 anos de atuação no mercado nacional e internacional. Curadoria de locais e terceirização comercial para espaços e eventos.",
  openGraph: {
    title: "Pires — Inteligência e Negócios para o seu Espaço ou Evento",
    description:
      "+ de 30 anos de atuação no mercado nacional e internacional. Curadoria de locais e terceirização comercial para espaços e eventos.",
    url: "https://pires.tur.br",
    siteName: "Pires",
    images: [
      {
        url: "/images/hotels/royal-palm-hall.jpg",
        width: 1200,
        height: 630,
        alt: "Royal Palm Hall — Pires Inteligência e Negócios",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pires — Inteligência e Negócios para o seu Espaço ou Evento",
    description:
      "+ de 30 anos de atuação no mercado nacional e internacional. Curadoria de locais e terceirização comercial para espaços e eventos.",
    images: ["/images/hotels/royal-palm-hall.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${rubik.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
