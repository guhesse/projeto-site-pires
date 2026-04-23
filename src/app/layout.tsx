import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pires — Inteligência e Negócios para o seu Espaço ou Evento",
  description:
    "30 anos de atuação no mercado nacional e internacional. Curadoria de locais e terceirização comercial para espaços e eventos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased scroll-smooth">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.cdnfonts.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/sofia-pro"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
