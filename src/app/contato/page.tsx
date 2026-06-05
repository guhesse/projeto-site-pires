import Navbar from "@/components/Navbar";
import ContatoForm from "@/components/sections/ContatoForm";
import FooterSection from "@/components/sections/FooterSection";

export const metadata = {
  title: "Contato | Pires Destinos e Eventos",
  description:
    "Fale com um especialista da Pires. Encontre o hotel ou espaço ideal para o seu evento, ou conheça a terceirização comercial para o seu espaço.",
  alternates: { canonical: "/contato" },
  openGraph: {
    title: "Contato | Pires Destinos e Eventos",
    description:
      "Fale com um especialista da Pires. Encontre o hotel ou espaço ideal para o seu evento.",
    url: "https://piresdestinoseventos.com.br/contato",
    siteName: "Pires Destinos e Eventos",
    locale: "pt_BR",
    type: "website",
  },
};

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
