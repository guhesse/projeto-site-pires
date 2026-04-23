import Navbar from "@/components/Navbar";
import ContatoForm from "@/components/sections/ContatoForm";
import FooterSection from "@/components/sections/FooterSection";

/**
 * Contato — página dedicada para o formulário
 * Acessada via CTA "Falar com um especialista" da Navbar
 */

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-[#E2D8DA]">
      <Navbar />

      <div className="flex flex-col gap-6 pt-[130px] pb-6">
        <ContatoForm />
        <FooterSection />
      </div>
    </main>
  );
}
