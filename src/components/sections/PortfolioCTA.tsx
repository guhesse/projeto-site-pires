"use client";

import FadeIn from "@/components/FadeIn";

const WHATSAPP_NUMBER = "5548996267846";

/**
 * Portfolio CTA (seção escura) — Figma Group 14 (8:2803) / Group 9 (4:19098)
 *
 * 1380×555, bg #53212D, rounded-25, pad 72/71/72/54
 * Heading: Sofia Pro 56px/400 → refinado 48px, #F0EBED
 * CTA: Geist 20/500, bg #EAC0D5, text #54000D, rounded-30
 * 3 steps: Sofia Pro 32px → refinado 28px, #F0EBED
 */

interface PortfolioCTAProps {
  variant?: "organiza" | "espaco";
}

const variants = {
  organiza: {
    heading:
      "O local ideal para o seu evento, escolhido por quem entende do mercado.",
    cta: "Quero encontrar meu local",
    whatsappMsg: encodeURIComponent(
      "Olá! Quero encontrar o local ideal para o meu evento. Podem me ajudar?"
    ),
    steps: [
      "Briefing do Evento",
      "Análise de Viabilidade",
      "Apresentação de Destinos",
    ],
  },
  espaco: {
    heading:
      "Transforme seus custos fixos em resultados variáveis agora mesmo.",
    cta: "Solicitar consultoria comercial",
    whatsappMsg: encodeURIComponent(
      "Olá! Gostaria de solicitar uma consultoria comercial para o meu espaço. Podem me dar mais detalhes?"
    ),
    steps: [
      "Contato em até 24h",
      "Diagnóstico do Espaço",
      "Início da Prospecção Ativa",
    ],
  },
};

export default function PortfolioCTA({
  variant = "organiza",
}: PortfolioCTAProps) {
  const data = variants[variant];

  return (
    <section className="flex justify-center px-6">
      <div
        className="w-full max-w-[1380px] rounded-[25px] bg-[#53212D]
                   flex flex-col
                   px-6 lg:px-[54px] py-12 lg:py-[72px]
                   relative overflow-hidden"
      >
        {/* Decorative circles */}
        <div className="absolute -right-20 -top-20 w-[350px] h-[350px] rounded-full bg-[#A01259]/20 pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-[250px] h-[250px] rounded-full bg-[#3A0814]/30 pointer-events-none" />

        <div className="flex flex-col gap-12 lg:gap-[78px] relative">
          {/* Heading */}
          <FadeIn>
            <h2 className="text-[28px] lg:text-[48px] leading-[1.15] font-light tracking-tight text-[#F0EBED] max-w-[580px]">
              {data.heading}
            </h2>
          </FadeIn>

          {/* Bottom row: CTA + 3 steps */}
          <FadeIn delay={150}>
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
              {/* CTA Button */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${data.whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2
                           bg-[#EAC0D5] hover:bg-[#ddb0c5] text-[#54000D]
                           rounded-[30px] px-[28px] py-[12px]
                           text-[18px] font-medium tracking-wide transition-all duration-300
                           hover:shadow-lg shrink-0"
                style={{ fontFamily: "Geist, sans-serif" }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {data.cta}
              </a>

              {/* Steps */}
              <div className="flex flex-col gap-[15px]">
                {data.steps.map((step, i) => (
                  <span
                    key={i}
                    className="text-[20px] lg:text-[28px] font-light tracking-tight text-[#F0EBED]"
                  >
                    {step}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
