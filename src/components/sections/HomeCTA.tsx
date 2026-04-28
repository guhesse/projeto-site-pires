import Link from "next/link";
import { ArrowRight, MapPin, TrendingUp } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const WHATSAPP_NUMBER = "5548996267846";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Encontrei o site da Pires e gostaria de saber mais sobre como vocês podem ajudar no meu evento."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

const highlights = [
  {
    icon: MapPin,
    label: "+23 locais curados",
    sublabel: "Do litoral ao interior, Brasil e exterior",
  },
  {
    icon: TrendingUp,
    label: "90M em negócios gerados",
    sublabel: "Para nossa rede de parceiros",
  },
];

export default function HomeCTA() {
  return (
    <section className="flex justify-center px-6">
      <FadeIn className="w-full max-w-[1380px]">
        <div
          className="w-full rounded-[25px] bg-[#3A0814] overflow-hidden relative
                     px-6 lg:px-[72px] py-12 lg:py-[80px]
                     flex flex-col lg:flex-row gap-10 lg:gap-20 items-center"
        >
          {/* Decorative circles */}
          <div className="absolute -right-24 -top-24 w-[400px] h-[400px] rounded-full bg-[#A01259]/20 pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-[280px] h-[280px] rounded-full bg-[#6D3B47]/20 pointer-events-none" />

          {/* Left — copy */}
          <div className="flex flex-col gap-6 lg:max-w-[560px] shrink-0 relative">
            <span className="text-[11px] lg:text-[12px] font-light text-[#C4A0B0] uppercase tracking-widest">
              Pronto para o próximo passo?
            </span>
            <h2 className="text-[28px] lg:text-[48px] leading-[1.1] font-light tracking-tight text-[#F0EBED]">
              Seu espaço ou evento merece
              o melhor da{" "}
              <span className="text-[#F8C8DE]">inteligência de mercado.</span>
            </h2>
            <p className="text-[14px] lg:text-[17px] font-light text-[#C4A0B0] leading-relaxed max-w-[440px]">
              Três décadas de relacionamentos construídos para que cada
              projeto chegue ao nível que ele merece.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2
                           bg-[#A01259] hover:bg-[#8a0f4e] text-[#F0EBED]
                           rounded-[30px] px-6 py-3
                           text-[14px] lg:text-[16px] font-medium transition-all duration-300
                           hover:shadow-lg hover:shadow-[#A01259]/30 whitespace-nowrap"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar com um especialista
              </a>
              <Link
                href="/locais"
                className="inline-flex items-center justify-center gap-2
                           bg-[#F0EBED]/10 hover:bg-[#F0EBED]/15 text-[#F0EBED]
                           border border-[#F0EBED]/20
                           rounded-[30px] px-6 py-3
                           text-[14px] lg:text-[16px] font-light transition-all duration-300
                           whitespace-nowrap"
              >
                Ver locais curados
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right — highlights */}
          <div className="flex flex-col gap-4 w-full relative">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <FadeIn key={h.label} delay={120}>
                  <div className="flex items-center gap-4 rounded-[20px] bg-[#F0EBED]/6 border border-[#F0EBED]/10 px-5 py-5">
                    <div className="w-10 h-10 rounded-full bg-[#A01259]/20 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#F8C8DE]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[16px] lg:text-[18px] font-light text-[#F0EBED]">{h.label}</p>
                      <p className="text-[12px] lg:text-[13px] font-light text-[#C4A0B0]">{h.sublabel}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
