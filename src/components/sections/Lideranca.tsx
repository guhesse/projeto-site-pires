"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

/**
 * Liderança (Session 4) — Figma Group 15 (15:2931)
 *
 * 1380×898, bg #F0EBED, rounded-25, pad 72/130/72/54
 * Two columns: text (647px) + image (589×754, rounded-20)
 * Heading: "Liderança que conhece o mercado e é conhecida por ele." — 48px, #3A0814
 * Description: 24px → 20px, #A78991
 */

export default function Lideranca() {
  return (
    <section className="flex justify-center px-6">
      <div
        className="w-full max-w-[1380px] rounded-[25px] bg-[#F0EBED]
                   flex flex-col
                   px-6 lg:px-[54px] py-12 lg:py-[72px]"
      >
        <div className="flex flex-col gap-12 lg:gap-[121px]">
          <FadeIn>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-[80px]">
              {/* Text column */}
              <div className="flex flex-col justify-between max-w-[647px] shrink-0">
                <div className="flex flex-col gap-[80px]">
                  <h2 className="text-[42px] lg:text-[48px] leading-[1.15] font-light tracking-tight text-[#3A0814] max-w-[887px]">
                    Liderança que conhece
                    <br />
                    o mercado e é conhecida
                    <br />
                    por ele.
                  </h2>

                  <p className="text-[18px] lg:text-[20px] leading-[1.15] font-light text-[#A78991] max-w-[540px]">
                    Sob o comando de Juliana Pires, nossa Diretora Comercial,
                    unimos tradição e inovação para entregar resultados reais.
                    São 30 anos de atuação estratégica, construindo pontes
                    sólidas entre destinos, espaços e os maiores eventos do
                    Brasil e do exterior.
                  </p>
                </div>
              </div>

              {/* Image column */}
              <div className="relative w-full lg:w-[589px] h-[500px] lg:h-[754px] rounded-[20px] overflow-hidden shrink-0">
                <Image
                  src="/images/juliana-pires-388c9e.png"
                  alt="Juliana Pires — Diretora Comercial"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
