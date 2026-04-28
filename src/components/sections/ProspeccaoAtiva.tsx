import { ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "5548996267846";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Gostaria de iniciar a prospecção ativa para o meu espaço com a Pires. Podem me explicar melhor o processo?"
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Entendemos seu negócio, sua estrutura e seus objetivos comerciais.",
  },
  {
    number: "02",
    title: "Estratégia",
    description:
      "Desenvolvemos um plano de prospecção ativa personalizado para o seu perfil.",
  },
  {
    number: "03",
    title: "Execução",
    description:
      "Nossa equipe especializada inicia a prospecção com metodologia comprovada.",
  },
  {
    number: "04",
    title: "Resultados",
    description:
      "Acompanhamento contínuo, relatórios e ajustes para maximizar conversões.",
  },
];

export default function ProspeccaoAtiva() {
  return (
    <section id="prospeccao" className="px-6 pb-6">
      <div className="w-full max-w-[1380px] mx-auto">
        <div className="rounded-[25px] bg-[#F0EBEE] px-14 py-[72px] flex flex-col gap-10">
          {/* Label */}
          <p className="text-[#A0125A] text-[20px]">Início da Prospecção Ativa</p>

          {/* Heading */}
          <h2 className="text-[28px] lg:text-[56px] leading-[1.1] font-normal max-w-[680px]">
            Como funciona o nosso processo
          </h2>

          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[25px] bg-[#E2D8DA] p-8 flex flex-col gap-4"
              >
                <span className="text-[#A0125A] text-[20px] lg:text-[32px] font-normal">
                  {step.number}
                </span>
                <h3 className="text-[20px] lg:text-[24px] font-normal">{step.title}</h3>
                <p className="text-[14px] lg:text-[16px] text-foreground/70">{step.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#A0125A] text-[20px] font-normal hover:underline w-fit"
          >
            Iniciar prospecção
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
