"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Users, Bed } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { parseHotel, type HotelRaw, type Hotel } from "@/lib/hotels";
import rawHoteis from "@/data/hoteis.json";

/**
 * Portfolio Cards — Carousel com dados reais de hotéis
 *
 * Cards com dois estados:
 * - Idle: 338×613, mostra nome + localização no bottom
 * - Hover: 570×613, expande e revela tags + botão "Mais detalhes"
 *
 * Carrossel horizontal com botões de navegação
 */

const hotels: Hotel[] = (rawHoteis as HotelRaw[]).map(parseHotel);

export default function PortfolioCards() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = useCallback(() => {
        const el = scrollRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 10);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    }, []);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        checkScroll();
        el.addEventListener("scroll", checkScroll, { passive: true });
        window.addEventListener("resize", checkScroll);
        return () => {
            el.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
        };
    }, [checkScroll]);

    const scroll = (direction: "left" | "right") => {
        const el = scrollRef.current;
        if (!el) return;
        const amount = direction === "left" ? -400 : 400;
        el.scrollBy({ left: amount, behavior: "smooth" });
    };

    return (
        <section className="flex justify-center px-6">
            <div
                className="w-full max-w-[1380px] rounded-[25px] bg-[#F0EBED]
                   flex flex-col
                   px-6 lg:px-[54px] pt-12 lg:pt-[72px] pb-6"
            >
                <div className="flex flex-col gap-[46px]">
                    {/* Header row */}
                    <FadeIn>
                        <div className="flex flex-col lg:flex-row justify-between gap-6">
                            <h2 className="text-[28px] lg:text-[48px] leading-[1.15] font-light tracking-tight text-[#3A0814] max-w-[675px]">
                                Um Portfólio Selecionado
                                <br />
                                para o seu Sucesso.
                            </h2>
                            <p className="text-[14px] lg:text-[20px] leading-[1.15] font-light text-[#A78991] max-w-[417px]">
                                De parcerias de décadas a novos destinos estratégicos, nossa
                                rede oferece as melhores opções de logística e infraestrutura no
                                Brasil e no exterior.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Carousel */}
                    <FadeIn delay={150}>
                        <div className="relative">
                            {/* Scroll container */}
                            <div
                                ref={scrollRef}
                                className="flex gap-4 lg:gap-[18px] overflow-x-auto scrollbar-hide scroll-smooth pb-2
                           snap-x snap-mandatory lg:snap-none"
                                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                            >
                                {hotels.map((hotel) => (
                                    <CarouselCard
                                        key={hotel.slug}
                                        hotel={hotel}
                                        image={hotel.image}
                                    />
                                ))}
                            </div>

                            {/* Navigation arrows */}
                            {canScrollLeft && (
                                <button//open.spotify.com/intl-pt/track/3GKmElvQKl7dXCz4NBA669?si=fd811adf2717435e
                                    onClick={() => scroll("left")}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3
                             w-12 h-12 rounded-full bg-[#53212D] hover:bg-[#3A0814]
                             flex items-center justify-center transition-all duration-300
                             shadow-lg z-10"
                                    aria-label="Anterior"
                                >
                                    <ArrowLeft className="w-5 h-5 text-[#F0EBED]" />
                                </button>
                            )}
                            {canScrollRight && (
                                <button
                                    onClick={() => scroll("right")}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3
                             w-12 h-12 rounded-full bg-[#53212D] hover:bg-[#3A0814]
                             flex items-center justify-center transition-all duration-300
                             shadow-lg z-10"
                                    aria-label="Próximo"
                                >
                                    <ArrowRight className="w-5 h-5 text-[#F0EBED]" />
                                </button>
                            )}
                        </div>
                    </FadeIn>

                    {/* "Ver todos" link */}
                    <FadeIn delay={200}>
                        <div className="flex items-center justify-between py-3">
                            <Link
                                href="/locais"
                                className="text-[20px] font-light text-[#A78991] hover:text-[#3A0814] transition-colors"
                            >
                                Ver todos
                            </Link>
                            <Link
                                href="/locais"
                                className="w-[40px] h-[40px] rounded-full bg-[#6D3B47] flex items-center justify-center
                           hover:bg-[#53212D] transition-colors"
                            >
                                <ArrowRight className="w-[14px] h-[14px] text-[#F0EBED]" />
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

/* ── Card do carrossel com estados idle/hover ── */

function CarouselCard({
    hotel,
    image,
}: {
    hotel: Hotel;
    image: string | null;
}) {
    const visibleTags = hotel.tags.slice(0, 3);

    return (
        <Link
            href={`/locais/${hotel.slug}`}
            className="relative rounded-[20px] overflow-hidden group/card cursor-pointer shrink-0 block
                 w-full lg:w-[338px] lg:hover:w-[570px]
                 h-[500px] lg:h-[613px]
                 snap-center lg:snap-align-none
                 transition-[width] duration-500 ease-in-out"
        >
            {/* Background */}
            {image ? (
                <Image
                    src={image}
                    alt={hotel.name}
                    fill
                    className="object-cover transition-transform duration-500 lg:group-hover/card:scale-105"
                />
            ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#53212D] via-[#6D0026] to-[#3A0814]
                        transition-transform duration-500 lg:group-hover/card:scale-105" />
            )}

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[rgba(7,0,0,0.50)] lg:bg-[rgba(7,0,0,0.45)] lg:group-hover/card:bg-[rgba(7,0,0,0.55)] transition-colors duration-500" />

            {/* Content */}
            <div className="absolute inset-0 p-6 pt-9 flex flex-col justify-between">
                {/* Tags — mobile: sempre visíveis / desktop: só no hover do card */}
                <div className="flex flex-wrap gap-2 justify-end
                        opacity-100 lg:opacity-0 lg:group-hover/card:opacity-100
                        translate-y-0 lg:-translate-y-3 lg:group-hover/card:translate-y-0
                        transition-all duration-500 ease-out">
                    {visibleTags.map((tag, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-1.5 bg-[#A01259] rounded-[25px] px-3 h-[42px] shrink-0"
                        >
                            {tag.type === "capacity" && (
                                <Users className="w-4 h-4 text-[#F8EAF1]" strokeWidth={1.5} />
                            )}
                            {tag.type === "rooms" && (
                                <Bed className="w-4 h-4 text-[#F8EAF1]" strokeWidth={1.5} />
                            )}
                            <span className="text-[14px] lg:text-[16px] font-light text-[#F8EAF1] whitespace-nowrap">
                                {tag.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Bottom — nome + localização + botão */}
                <div className="flex flex-col gap-2">
                    <div>
                        <h3 className="text-[24px] lg:text-[28px] leading-[1.15] font-light tracking-tight text-[#F8EAF1]">
                            {hotel.name}
                        </h3>
                        <p className="text-[16px] lg:text-[20px] leading-[1.15] font-light text-[#F0EBED]">
                            {hotel.location}
                        </p>
                    </div>

                    {/* Button bar — mobile: sempre visível / desktop: aparece no hover do card, com hover próprio */}
                    <div
                        className="group/btn flex items-center justify-between bg-[#F0EBED] rounded-[25px]
                       px-4 py-3
                       opacity-100 lg:opacity-0 lg:group-hover/card:opacity-100
                       translate-y-0 lg:translate-y-4 lg:group-hover/card:translate-y-0
                       transition-all duration-500 ease-out
                       hover:bg-white hover:shadow-md"
                    >
                        <span
                            className="text-[14px] font-medium text-[#53212D] group-hover/btn:text-[#A01259] transition-colors duration-300"
                            style={{ fontFamily: "Geist, sans-serif" }}
                        >
                            Mais detalhes
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#53212D] group-hover/btn:text-[#A01259] transition-all duration-300 group-hover/btn:translate-x-1" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
