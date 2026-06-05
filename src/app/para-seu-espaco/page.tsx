import Navbar from "@/components/Navbar";
import TerceirizacaoComercialSection from "@/components/sections/TerceirizacaoComercialSection";
import ProspeccaoAtiva from "@/components/sections/ProspeccaoAtiva";
import PortfolioCTA from "@/components/sections/PortfolioCTA";
import FooterSection from "@/components/sections/FooterSection";

export const metadata = {
  title: "Para seu espaço | Inteligência comercial para hotéis e espaços de eventos",
  description:
    "Terceirização comercial para hotéis e espaços de eventos. Prospecção ativa, relacionamento contínuo e máxima ocupação para o seu espaço, com + de 33 anos de mercado.",
  alternates: { canonical: "/para-seu-espaco" },
  openGraph: {
    title: "Para seu espaço | Inteligência comercial para hotéis e espaços de eventos",
    description:
      "Terceirização comercial, prospecção ativa e máxima ocupação para o seu hotel ou espaço de eventos.",
    url: "https://piresdestinoseventos.com.br/para-seu-espaco",
    siteName: "Pires Destinos e Eventos",
    locale: "pt_BR",
    type: "website",
  },
};

/**
 * Para seu espaço — Figma frame "Para seu espaço" (40:809)
 *
 * Navbar (ativo: "Para seu espaço") → Terceirização Comercial → Prospecção Ativa → CTA Comercial → Footer
 */

export default function ParaSeuEspacoPage() {
  return (
    <main className="min-h-screen bg-[#E2D8DA]">
      <Navbar />

      <div className="flex flex-col gap-6 pt-[130px] pb-6">
        <TerceirizacaoComercialSection />
        <ProspeccaoAtiva />
        <PortfolioCTA variant="espaco" />
        <FooterSection />
      </div>
    </main>
  );
}
