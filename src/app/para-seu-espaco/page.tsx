import Navbar from "@/components/Navbar";
import TerceirizacaoComercialSection from "@/components/sections/TerceirizacaoComercialSection";
import PortfolioCTA from "@/components/sections/PortfolioCTA";
import FooterSection from "@/components/sections/FooterSection";

/**
 * Para seu espaço — Figma frame "Para seu espaço" (40:809)
 *
 * Navbar (ativo: "Para seu espaço") → Terceirização Comercial → CTA Comercial → Footer
 */

export default function ParaSeuEspacoPage() {
  return (
    <main className="min-h-screen bg-[#E2D8DA]">
      <Navbar />

      <div className="flex flex-col gap-6 pt-[130px] pb-6">
        <TerceirizacaoComercialSection />
        <PortfolioCTA variant="espaco" />
        <FooterSection />
      </div>
    </main>
  );
}
