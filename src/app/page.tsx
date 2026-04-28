import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import CuradoriaLocais from "@/components/sections/CuradoriaLocais";
import PortfolioCards from "@/components/sections/PortfolioCards";
import Lideranca from "@/components/sections/Lideranca";
import HomeCTA from "@/components/sections/HomeCTA";
import ContatoForm from "@/components/sections/ContatoForm";
import FooterSection from "@/components/sections/FooterSection";

/**
 * Home — Figma frame "Home" (1:3)
 *
 * Seções exatas do Figma:
 * 1. Navbar
 * 2. Session 1 — Hero (4:19085)
 * 3. Session 2 — Estatísticas (4:19086)
 * 4. Session 3 — Portfolio Cards (5:18)
 * 5. Session 4 — Liderança (15:2931)
 * 6. Session 5 — Formulário de Contato (15:2956)
 * 7. Footer (15:3002)
 */

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E2D8DA]">
      <Navbar />

      <div className="flex flex-col gap-6 pb-6">
        <Hero />
        <CuradoriaLocais />
        <PortfolioCards />
        <Lideranca />
        <HomeCTA />
        <ContatoForm />
        <FooterSection />
      </div>
    </main>
  );
}
