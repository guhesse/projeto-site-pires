"use client";

import { DoorOpen, PlaneTakeoff, ConciergeBell, ArrowRight } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

/**
 * Curadoria de Locais — fiel ao Figma node 4:19087 (Group 6)
 * Refinado: fontes menores, peso mais leve, mais whitespace, animações
 */

const features = [
  {
    icon: DoorOpen,
    title: "Destino Estratégico",
    description:
      "Encontramos o local perfeito com base no perfil do seu público e nos objetivos do seu evento.",
  },
  {
    icon: PlaneTakeoff,
    title: "Logística Sob Medida",
    description:
      "Análise técnica de malha aérea e infraestrutura para garantir acesso facilitado e conforto.",
  },
  {
    icon: ConciergeBell,
    title: "Expertise de Mercado",
    description:
      "30 anos de relacionamento para garantir as melhores condições e o melhor custo-benefício.",
  },
];

export default function TerceirizacaoComercial() {
  return (
    <section id="para-seu-espaco" className="flex justify-center px-6 pb-8">
      {/* ── Frame 34 (card container) ── */}
      <div
        className="w-full max-w-[1380px] rounded-[25px] bg-[#F0EBEE]
                   flex flex-col
                   px-6 lg:px-[54px] py-12 lg:py-[80px]"
      >
        {/* ── Frame 33 (inner) ── */}
        <div className="flex flex-col gap-12 lg:gap-[100px]">
          {/* Heading */}
          <FadeIn>
            <div className="flex flex-col gap-4">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 self-start rounded-full border border-[#A01259]/20 bg-[#A01259]/10 px-4 py-1.5 text-[13px] font-medium text-[#A01259]">
                Para organizadores de eventos
              </span>
              <h2 className="text-[28px] lg:text-[48px] leading-[1.15] font-light tracking-tight text-[#3A0814] max-w-[887px]">
                Curadoria de Locais:
                <br />
                Para quem organiza eventos
              </h2>
            </div>
          </FadeIn>

          {/* ── Frame 32 (features row) ── */}
          <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <FadeIn key={feature.title} delay={i * 120}>
                  <div className="flex flex-col gap-[24px] flex-1 rounded-[20px] bg-[#E2D8DA] p-6 lg:p-8">
                    {/* Ícone — container 64×64, stroke #3A0814, peso leve */}
                    <div className="w-[64px] h-[64px] flex items-center justify-center">
                      <Icon className="w-[52px] h-[50px] text-[#3A0814]" strokeWidth={1.2} />
                    </div>

                    {/* Título — Sofia Pro 26px/light */}
                    <h3 className="text-[20px] lg:text-[26px] font-light text-[#3A0814]">
                      {feature.title}
                    </h3>

                    {/* Descrição — Sofia Pro 18px/light */}
                    <p className="text-[14px] lg:text-[18px] leading-[1.55] font-light text-[#A78991]">
                      {feature.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* CTA */}
          <FadeIn delay={360}>
            <Link
              href="/locais"
              className="inline-flex items-center gap-2 self-start rounded-full bg-[#A01259] px-6 py-3 text-[15px] font-medium text-white hover:bg-[#8a0f4d] transition-colors"
            >
              Ver locais disponíveis
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
