import Navbar from "@/components/Navbar";
import TerceirizacaoComercial from "@/components/sections/TerceirizacaoComercial";
import PortfolioCTA from "@/components/sections/PortfolioCTA";
import PortfolioCards from "@/components/sections/PortfolioCards";
import FooterSection from "@/components/sections/FooterSection";
import { EVENT_LOCATION_KEYWORDS } from "@/lib/seo";

export const metadata = {
  title: "Para quem organiza | Seleção inteligente de hotéis e espaços de eventos",
  description:
    "Encontramos o hotel ou espaço de eventos ideal para o seu congresso, convenção ou evento corporativo. Curadoria de locais em Florianópolis, Santa Catarina, Campinas, Balneário Camboriú e em todo o Brasil.",
  keywords: EVENT_LOCATION_KEYWORDS,
  alternates: { canonical: "/para-quem-organiza" },
  openGraph: {
    title: "Para quem organiza | Seleção inteligente de hotéis e espaços de eventos",
    description:
      "Curadoria de hotéis e espaços de eventos para congressos, convenções e eventos corporativos em todo o Brasil.",
    url: "https://piresdestinoseventos.com.br/para-quem-organiza",
    siteName: "Pires Destinos e Eventos",
    locale: "pt_BR",
    type: "website",
  },
};

/**
 * Para quem organiza — Figma frame "Para quem organiza" (40:648)
 *
 * Navbar (ativo: "Para quem organiza") → Curadoria de Locais → Portfolio CTA → Portfolio Cards → Footer
 */

export default function ParaQuemOrganizaPage() {
  return (
    <main className="min-h-screen bg-[#E2D8DA]">
      <Navbar />

      <div className="flex flex-col gap-6 pt-[130px] pb-6">
        <TerceirizacaoComercial />
        <PortfolioCTA variant="organiza" />
        <PortfolioCards />
        <FooterSection />
      </div>
    </main>
  );
}
