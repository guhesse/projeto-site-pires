"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const WHATSAPP_NUMBER = "5548996267846";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Quero representar meu espaço com a Pires. Podem me dar mais detalhes?"
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

/**
 * Hero — fiel ao Figma node 4:19085 (Group 4 → Frame40)
 * Refinado: fontes menores, peso mais leve, mais whitespace, animações
 */

const partnerLogos = [
  { name: "Vila Galé", src: "/images/logo-vila-gale.png", w: 68, h: 63 },
  { name: "Sibara", src: "/images/logo-sibara.png", w: 123, h: 40 },
  { name: "Hotel Seven", src: "/images/logo-hotel-seven.png", w: 136, h: 36 },
  { name: "Intercity", src: "/images/logo-intercity.png", w: 183, h: 67 },
  { name: "Oceania", src: "/images/logo-oceania.png", w: 133, h: 91 },

  { name: "Royal Palm", src: "/images/logo-royal-palm.png", w: 107, h: 107 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="flex justify-center pt-[130px] pb-10 px-6"
    >
      {/* ── Frame40 (outer card) ── */}
      <div
        className="w-full max-w-[1380px] rounded-[25px] bg-[#F0EBEE]
                   flex flex-col
                   px-6 lg:px-[54px] pt-12 lg:pt-[80px] pb-10 lg:pb-[48px] gap-[10px]"
      >
        {/* ── Frame39 (inner wrapper) ── */}
        <div className="flex flex-col gap-10 lg:gap-[60px] w-full max-w-[1273px]">
          {/* ── Frame38 (top row: heading + CTA/description) ── */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[88px] items-start">
            {/* Heading */}
            <FadeIn delay={0}>
              <h1 className="text-[44px] lg:text-[48px] leading-[1.15] font-light tracking-tight text-[#3A0814] max-w-[671px] shrink-0">
                Inteligência e Negócios
                <br />
                para o seu Espaço ou Evento.
              </h1>
            </FadeIn>

            {/* Frame37 (CTA + description) */}
            <FadeIn delay={150}>
              <div className="flex flex-col gap-[22px] max-w-[486px] justify-end self-end lg:self-start">
                {/* Button CTA */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2
                             bg-[#A0125A] hover:bg-[#8a0f4e] text-white
                             rounded-[30px] px-[28px] py-[12px]
                             text-[17px] font-normal tracking-wide transition-all duration-300
                             hover:shadow-lg hover:shadow-[#A0125A]/20 w-fit"
                  style={{ fontFamily: "Geist, sans-serif" }}
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Quero representar meu espaço
                </a>

                {/* Description text */}
                <p className="text-[17px] font-light text-[#3A0814]/80 leading-relaxed">
                  30 anos conectando os melhores destinos e espaços
                  <br />
                  aos eventos de sucesso no Brasil e no exterior.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* ── Rectangle1 (hero image) — 1273×627, corner 25 ── */}
          <FadeIn variant="scale" delay={200}>
            <div
              className="w-full aspect-[1273/627] rounded-[25px] overflow-hidden relative"
            >
              <Image
                src="/images/hero-bg-348bbe.jpg"
                alt="Evento em espaço de alto padrão"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 1273px"
              />
            </div>
          </FadeIn>

          {/* ── Frame1 (logos parceiros) — HORIZONTAL gap=60 ── */}
          <div className="flex items-center justify-center gap-6 lg:gap-[60px] flex-wrap py-4">
            {partnerLogos.map((logo, i) => (
              <FadeIn key={logo.name} variant="fade" delay={100 + i * 80}>
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.w}
                  height={logo.h}
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
