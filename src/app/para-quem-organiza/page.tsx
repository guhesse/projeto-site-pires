import Navbar from "@/components/Navbar";
import TerceirizacaoComercial from "@/components/sections/TerceirizacaoComercial";
import PortfolioCTA from "@/components/sections/PortfolioCTA";
import PortfolioCards from "@/components/sections/PortfolioCards";
import FooterSection from "@/components/sections/FooterSection";

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
