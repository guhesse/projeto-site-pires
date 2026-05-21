"use client";

import FadeIn from "@/components/FadeIn";

/**
 * Seção Estatísticas — fiel ao Figma node 4:19086 (Group 5)
 * Refinado: fontes menores, peso mais leve, mais whitespace, animações
 */

const stats = [
  {
    number: "+10.000",
    description:
      "Contatos estratégicos. Uma rede qualificada e atualizada para gerar conexões reais com quem decide o mercado",
  },
  {
    number: "+5.000",
    description:
      "Congressos mapeados. Inteligência de mercado completa com os principais eventos monitorados em tempo real.",
  },
  {
    number: "90M",
    description:
      "Milhões em Negócios Gerados.\nVolume expressivo de oportunidades concretas convertidas para nossa rede de parceiros.",
  },
];

export default function CuradoriaLocais() {
  return (
    <section id="para-quem-organiza" className="flex justify-center px-6 ">
      {/* ── Frame 36 (card container) ── */}
      <div
        className="w-full max-w-[1380px] rounded-[25px] bg-[#F0EBEE]
                   flex flex-col
                   px-6 lg:px-[54px] py-12 lg:py-[80px]"
      >
        {/* ── Frame 35 (inner) ── */}
        <div className="flex flex-col gap-12 lg:gap-[100px]">
          {/* Heading */}
          <FadeIn>
            <h2 className="text-[28px] lg:text-[48px] leading-[1.15] font-light tracking-tight text-[#3A0814] max-w-[887px]">
              + de 30 anos de atuação no mercado
              nacional e internacional.
            </h2>
          </FadeIn>

          {/* ── Frame 2 (stats row) ── */}
          <div className="flex flex-col md:flex-row gap-10 lg:gap-[74px]">
            {stats.map((stat, i) => (
              <FadeIn key={stat.number} delay={i * 120}>
                <div className="flex flex-col max-w-[363px] relative">
                  {/* Divisor vertical — apenas desktop, exceto último item */}
                  {i < stats.length - 1 && (
                    <div className="hidden md:block absolute -right-[37px] top-0 bottom-0 w-px bg-[#C4B5BB]/50" />
                  )}
                  {/* Número grande — acento de cor */}
                  <span className="text-[48px] lg:text-[80px] leading-[1.1] font-light text-[#A01259]">
                    {stat.number}
                  </span>

                  {/* Descrição */}
                  <p className="text-[14px] lg:text-[20px] leading-[1.5] font-light text-[#A78991] whitespace-pre-line mt-2">
                    {stat.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
