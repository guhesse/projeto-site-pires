import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import ContatoForm from "@/components/sections/ContatoForm";
import FadeIn from "@/components/FadeIn";
import {
    Anchor,
    TrendingUp,
    Cpu,
    Globe,
    Building2,
    Star,
    ArrowRight,
    Handshake,
    Lightbulb,
} from "lucide-react";

export const metadata = {
    title: "Quem Somos | Pires",
    description:
        "Três gerações de tradição, expertise em captação de eventos e inovação com a Orçamenta.ai. Conheça a história da Pires.",
    openGraph: {
        title: "Quem Somos | Pires",
        description:
            "Três gerações de tradição, expertise em captação de eventos e inovação com a Orçamenta.ai. Conheça a história da Pires.",
        url: "https://pires.tur.br/quem-somos",
        siteName: "Pires",
        images: [
            {
                url: "/images/hotels/royal-palm-hall.jpg",
                width: 1200,
                height: 630,
                alt: "Pires — Uma jornada de tradição, inovação e legado",
            },
        ],
        locale: "pt_BR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Quem Somos | Pires",
        description:
            "Três gerações de tradição, expertise em captação de eventos e inovação com a Orçamenta.ai.",
        images: ["/images/hotels/royal-palm-hall.jpg"],
    },
};

/* ── Stats ── */
const stats = [
    { value: "3", label: "Gerações" },
    { value: "+30", label: "Anos de mercado" },
    { value: "+200", label: "Eventos realizados" },
    { value: "2", label: "Continentes" },
];

/* ── Timeline ── */
const generations = [
    {
        icon: Anchor,
        era: "1ª Geração — Fundação",
        name: "Anita Pires",
        title: "Fundadora",
        description:
            "Visionária pioneira, Anita lançou as bases da empresa com projetos de intercâmbio econômico entre Brasil e Itália. Sua inteligência de mercado e capacidade de inovar criaram o alicerce de décadas de crescimento.",
        accent: "#A01259",
    },
    {
        icon: TrendingUp,
        era: "2ª Geração — Expansão",
        name: "Pires Destinos e Eventos",
        title: "Consolidação Nacional",
        description:
            "A empresa diversificou sua atuação em turismo corporativo, captação de eventos e representação comercial de grandes resorts como o Costão do Santinho. Parcerias estratégicas com Royal Palm, Vila Galé, RB Hotelaria e outras redes solidificaram a presença nacional e internacional.",
        accent: "#6D3B47",
    },
    {
        icon: Cpu,
        era: "3ª Geração — Inovação",
        name: "Orçamenta.ai",
        title: "Tecnologia & Futuro",
        description:
            "Mantendo a essência familiar, a empresa avança com a Orçamenta.ai — plataforma que integra automação e inteligência artificial para otimizar orçamentos no setor hoteleiro e de eventos.",
        accent: "#3A0814",
    },
];

/* ── Parceiros ── */
const partners = [
    "Costão do Santinho Resort Golf & Spa",
    "Complexo Royal Palm Hotels & Resorts",
    "Rede Vila Galé",
    "RB Hotelaria",
];

/* ── Pilares ── */
const pillars = [
    {
        icon: Star,
        title: "Tradição",
        description: "Décadas de relacionamentos sólidos com os maiores destinos e redes do Brasil.",
    },
    {
        icon: Globe,
        title: "Alcance Global",
        description: "Promoção internacional do Brasil e conexão com mercados da Europa e América Latina.",
    },
    {
        icon: Handshake,
        title: "Parcerias Estratégicas",
        description: "Representação comercial de destinos premium com resultados comprovados.",
    },
    {
        icon: Lightbulb,
        title: "Inovação Contínua",
        description: "Integração de tecnologia de ponta para criar soluções ágeis e inteligentes.",
    },
];

export default function QuemSomosPage() {
    return (
        <main className="min-h-screen bg-[#E2D8DA]">
            <Navbar />

            <div className="flex flex-col gap-6 pt-[130px] pb-6">

                {/* ── HERO ── */}
                <section className="flex justify-center px-6">
                    <FadeIn className="w-full max-w-[1380px]">
                        <div
                            className="w-full rounded-[25px] bg-[#3A0814]
                         px-6 lg:px-[72px] py-12 lg:py-[80px]
                         flex flex-col gap-8 lg:gap-12 overflow-hidden relative"
                        >
                            {/* Decorative circle */}
                            <div className="absolute -right-24 -top-24 w-[400px] h-[400px] rounded-full bg-[#A01259]/20 pointer-events-none" />
                            <div className="absolute -left-16 -bottom-16 w-[300px] h-[300px] rounded-full bg-[#6D3B47]/20 pointer-events-none" />

                            {/* Badge */}
                            <span className="inline-flex items-center gap-2 bg-[#A01259]/20 border border-[#A01259]/30 text-[#F0EBED] rounded-full px-4 py-1.5 text-[12px] lg:text-[13px] font-light tracking-widest uppercase w-fit">
                                <Anchor className="w-3.5 h-3.5" />
                                Nossa História
                            </span>

                            {/* Heading */}
                            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 relative">
                                <h1 className="text-[30px] lg:text-[56px] leading-[1.1] font-light tracking-tight text-[#F0EBED] max-w-[780px]">
                                    Uma jornada de{" "}
                                    <span className="text-[#F8C8DE]">tradição</span>,{" "}
                                    inovação e legado.
                                </h1>
                                <p className="text-[14px] lg:text-[17px] leading-relaxed font-light text-[#C4A0B0] max-w-[380px] lg:text-right">
                                    Três gerações construindo pontes entre destinos,
                                    eventos e pessoas — do Brasil para o mundo.
                                </p>
                            </div>

                            {/* Stats row */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 relative">
                                {stats.map((s) => (
                                    <div
                                        key={s.label}
                                        className="rounded-[20px] bg-[#F0EBED]/8 border border-[#F0EBED]/10 px-6 py-5"
                                    >
                                        <p className="text-[32px] lg:text-[48px] font-light text-[#F8C8DE] leading-none">
                                            {s.value}
                                        </p>
                                        <p className="text-[12px] lg:text-[14px] font-light text-[#C4A0B0] mt-1 tracking-wide">
                                            {s.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </section>

                {/* ── TRÊS GERAÇÕES ── */}
                <section className="flex justify-center px-6">
                    <div className="w-full max-w-[1380px] flex flex-col gap-4">
                        <FadeIn>
                            <div className="rounded-[25px] bg-[#F0EBED] px-6 lg:px-[54px] py-10 lg:py-[60px]">
                                <p className="text-[12px] lg:text-[13px] font-light text-[#A78991] uppercase tracking-widest mb-3">
                                    Legado familiar
                                </p>
                                <h2 className="text-[28px] lg:text-[48px] leading-[1.1] font-light tracking-tight text-[#3A0814] max-w-[600px]">
                                    Três gerações de excelência.
                                </h2>
                            </div>
                        </FadeIn>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            {generations.map((gen, i) => {
                                const Icon = gen.icon;
                                return (
                                    <FadeIn key={gen.era} delay={i * 80}>
                                        <div className="h-full rounded-[25px] bg-[#F0EBED] px-6 lg:px-[36px] py-8 lg:py-[48px] flex flex-col gap-6">
                                            {/* Icon */}
                                            <div
                                                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                                                style={{ backgroundColor: gen.accent + "1A" }}
                                            >
                                                <Icon className="w-5 h-5" style={{ color: gen.accent }} strokeWidth={1.5} />
                                            </div>

                                            {/* Era label */}
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[11px] font-light text-[#A78991] uppercase tracking-widest">
                                                    {gen.era}
                                                </span>
                                                <h3 className="text-[20px] lg:text-[24px] font-light text-[#3A0814] leading-tight">
                                                    {gen.name}
                                                </h3>
                                                <span
                                                    className="text-[13px] font-light"
                                                    style={{ color: gen.accent }}
                                                >
                                                    {gen.title}
                                                </span>
                                            </div>

                                            {/* Description */}
                                            <p className="text-[14px] lg:text-[16px] font-light text-[#A78991] leading-relaxed">
                                                {gen.description}
                                            </p>
                                        </div>
                                    </FadeIn>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── NOSSOS PILARES ── */}
                <section className="flex justify-center px-6">
                    <FadeIn className="w-full max-w-[1380px]">
                        <div className="rounded-[25px] bg-[#F0EBED] px-6 lg:px-[54px] py-12 lg:py-[72px]">
                            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12">
                                <div className="flex flex-col gap-4 lg:max-w-[480px]">
                                    <p className="text-[12px] lg:text-[13px] font-light text-[#A78991] uppercase tracking-widest">
                                        O que nos guia
                                    </p>
                                    <h2 className="text-[28px] lg:text-[48px] leading-[1.1] font-light tracking-tight text-[#3A0814]">
                                        Os pilares que sustentam cada projeto.
                                    </h2>
                                </div>
                                <p className="text-[14px] lg:text-[18px] font-light text-[#A78991] leading-relaxed lg:self-end max-w-[480px]">
                                    Da fundação à vanguarda tecnológica, nossos valores permanecem
                                    os mesmos: inteligência, relacionamento e entrega.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {pillars.map((p, i) => {
                                    const Icon = p.icon;
                                    return (
                                        <FadeIn key={p.title} delay={i * 60}>
                                            <div className="rounded-[20px] bg-[#E2D8DA] p-6 flex flex-col gap-4 h-full">
                                                <div className="w-10 h-10 rounded-full bg-[#A01259]/10 flex items-center justify-center">
                                                    <Icon className="w-4.5 h-4.5 text-[#A01259]" strokeWidth={1.5} />
                                                </div>
                                                <h3 className="text-[18px] lg:text-[20px] font-light text-[#3A0814]">
                                                    {p.title}
                                                </h3>
                                                <p className="text-[13px] lg:text-[14px] font-light text-[#A78991] leading-relaxed">
                                                    {p.description}
                                                </p>
                                            </div>
                                        </FadeIn>
                                    );
                                })}
                            </div>
                        </div>
                    </FadeIn>
                </section>

                {/* ── PARCERIAS ── */}
                <section className="flex justify-center px-6">
                    <FadeIn className="w-full max-w-[1380px]">
                        <div className="rounded-[25px] bg-[#3A0814] px-6 lg:px-[54px] py-12 lg:py-[72px] flex flex-col lg:flex-row gap-10 lg:gap-20 relative overflow-hidden">
                            {/* Decorative circles */}
                            <div className="absolute -right-16 -top-16 w-[300px] h-[300px] rounded-full bg-[#A01259]/15 pointer-events-none" />
                            <div className="absolute -left-12 -bottom-12 w-[220px] h-[220px] rounded-full bg-[#6D3B47]/20 pointer-events-none" />

                            {/* Left */}
                            <div className="flex flex-col gap-6 lg:max-w-[420px] shrink-0 relative">
                                <p className="text-[12px] font-light text-[#C4A0B0] uppercase tracking-widest">
                                    Representação comercial
                                </p>
                                <h2 className="text-[28px] lg:text-[40px] leading-[1.1] font-light tracking-tight text-[#F0EBED]">
                                    Parcerias que constroem o mercado.
                                </h2>
                                <p className="text-[14px] lg:text-[16px] font-light text-[#C4A0B0] leading-relaxed">
                                    Mais de duas décadas representando os maiores nomes
                                    do setor hoteleiro e de eventos no Brasil — nacionais
                                    e internacionalmente.
                                </p>
                            </div>

                            {/* Right — partner list */}
                            <div className="flex flex-col gap-3 w-full">
                                {partners.map((partner, i) => (
                                    <FadeIn key={partner} delay={i * 60}>
                                        <div className="flex items-center gap-4 rounded-[16px] bg-[#F0EBED]/6 border border-[#F0EBED]/10 px-5 py-4">
                                            <div className="w-9 h-9 rounded-full bg-[#A01259]/20 flex items-center justify-center shrink-0">
                                                <Building2 className="w-4 h-4 text-[#F8C8DE]" strokeWidth={1.5} />
                                            </div>
                                            <span className="text-[14px] lg:text-[16px] font-light text-[#F0EBED]">
                                                {partner}
                                            </span>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </section>

                {/* ── ORÇAMENTA.AI ── */}
                <section className="flex justify-center px-6">
                    <FadeIn className="w-full max-w-[1380px]">
                        <div className="rounded-[25px] bg-[#A01259] px-6 lg:px-[54px] py-12 lg:py-[72px] flex flex-col lg:flex-row gap-8 lg:gap-16 items-center overflow-hidden relative">
                            {/* Decorative */}
                            <div className="absolute -right-20 -top-20 w-[300px] h-[300px] rounded-full bg-white/5 pointer-events-none" />
                            <div className="absolute -left-16 -bottom-16 w-[240px] h-[240px] rounded-full bg-[#3A0814]/30 pointer-events-none" />

                            {/* Text */}
                            <div className="flex flex-col gap-6 lg:max-w-[540px] shrink-0 relative">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                                        <Cpu className="w-5 h-5 text-white" strokeWidth={1.5} />
                                    </div>
                                    <span className="text-[12px] font-light text-[#F8C8DE] uppercase tracking-widest">
                                        Terceira geração
                                    </span>
                                </div>

                                <h2 className="text-[28px] lg:text-[48px] leading-[1.1] font-light tracking-tight text-white">
                                    Orçamenta.ai — a inovação que o setor esperava.
                                </h2>

                                <p className="text-[14px] lg:text-[18px] font-light text-[#F8C8DE] leading-relaxed">
                                    Desenvolvida para otimizar o processo de orçamentos em hotelaria
                                    e eventos, a Orçamenta.ai une automação e inteligência artificial
                                    para que a tradição Pires se expresse também na velocidade e precisão
                                    das soluções modernas.
                                </p>

                                <a
                                    href="https://orcamenta.ai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white text-[#A01259] rounded-[30px]
                             px-6 py-3 text-[14px] lg:text-[16px] font-medium transition-all
                             hover:bg-[#F0EBED] w-fit"
                                >
                                    Conhecer a Orçamenta.ai
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                </section>

                {/* ── CONTATO + FOOTER ── */}
                <ContatoForm />
                <FooterSection />
            </div>
        </main>
    );
}
