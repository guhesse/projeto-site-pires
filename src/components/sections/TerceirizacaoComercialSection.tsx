"use client";

import { Banknote, UsersRound, Store } from "lucide-react";
import FadeIn from "@/components/FadeIn";

/**
 * Terceirização Comercial — Figma Group 8 (4:19093)
 *
 * 1380×625, bg #F0EBED, rounded-25, pad 72/130/72/54
 * Heading: "Terceirização Comercial:\nInteligência para o seu Espaço" — 48px, #3A0814
 * 3 features: icon 71×71, title 32px → 28px, desc 24px → 20px, #A78991
 * Icons: Banknote, UsersRound, Store (Lucide)
 */

const features = [
    {
        icon: Banknote,
        title: "Redução de Custos",
        description:
            "Substitua equipes comerciais fixas por um modelo sob demanda. Menos custos operacionais, mais inteligência aplicada.",
    },
    {
        icon: UsersRound,
        title: "Máxima Ocupação",
        description:
            "Prospecção ativa e relacionamento contínuo com organizadores de eventos para manter seu espaço sempre produtivo.",
    },
    {
        icon: Store,
        title: "Marketplace Comercial.",
        description:
            "Seu espaço passa a integrar uma rede de alta visibilidade, conectado a quem realmente decide no mercado de eventos.",
    },
];

export default function TerceirizacaoComercialSection() {
    return (
        <section className="flex justify-center px-6">
            <div
                className="w-full max-w-[1380px] rounded-[25px] bg-[#F0EBED]
                   flex flex-col
                   px-6 lg:px-[54px] py-12 lg:py-[72px]"
            >
        <div className="flex flex-col gap-12 lg:gap-[100px]">
                    {/* Heading */}
                    <FadeIn>
                        <div className="flex flex-col gap-4">
                            {/* Badge */}
                            <span className="inline-flex items-center gap-2 self-start rounded-full border border-[#A01259]/20 bg-[#A01259]/10 px-4 py-1.5 text-[13px] font-medium text-[#A01259]">
                                Para proprietários de espaços
                            </span>
                            <h2 className="text-[28px] lg:text-[48px] leading-[1.15] font-light tracking-tight text-[#3A0814] max-w-[887px]">
                                Terceirização Comercial:
                                <br />
                                Inteligência para o seu Espaço
                            </h2>
                        </div>
                    </FadeIn>

                    {/* Features row */}
                    <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
                        {features.map((feature, i) => {
                            const Icon = feature.icon;
                            return (
                                <FadeIn key={feature.title} delay={i * 120}>
                                    <div className="flex flex-col gap-[24px] flex-1 rounded-[20px] bg-[#E2D8DA] p-6 lg:p-8">
                                        {/* Icon 71×71 */}
                                        <div className="w-[64px] h-[64px] flex items-center justify-center">
                                            <Icon
                                                className="w-[52px] h-[50px] text-[#3A0814]"
                                                strokeWidth={1.2}
                                            />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-[20px] lg:text-[28px] font-light text-[#3A0814]">
                                            {feature.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-[14px] lg:text-[20px] leading-[1.55] font-light text-[#A78991]">
                                            {feature.description}
                                        </p>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
