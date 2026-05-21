"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Users, Bed } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { parseHotel, type HotelRaw, type Hotel } from "@/lib/hotels";
import rawHoteis from "@/data/hoteis.json";

/**
 * RelatedHotels — variante do carrossel PortfolioCards
 * usada na página de detalhe de cada hotel.
 *
 * Exibe todos os hotéis parceiros, excluindo o hotel atual.
 */

interface Props {
    currentSlug: string;
}

export default function RelatedHotels({ currentSlug }: Props) {
    const all: Hotel[] = (rawHoteis as HotelRaw[]).map(parseHotel);
    const hotels = all.filter((h) => h.slug !== currentSlug);

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
        el.scrollBy({ left: direction === "left" ? -400 : 400, behavior: "smooth" });
    };

    return (
        <section className="flex justify-center px-6">
            <div
                className="w-full max-w-[1380px] rounded-[25px] bg-[#F0EBED]
                   flex flex-col
                   px-6 lg:px-[54px] pt-10 lg:pt-[60px] pb-6"
            >
                {/* Header */}
                <FadeIn>
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 mb-8 lg:mb-[46px]">
                        <div>
                            <p className="text-[13px] lg:text-[14px] font-light text-[#A78991] uppercase tracking-widest mb-2">
                                Explore mais
                            </p>
                            <h2 className="text-[28px] lg:text-[40px] leading-[1.15] font-light tracking-tight text-[#3A0814]">
                                Outros destinos
                                <br />
                                <span className="text-[#A01259]">parceiros.</span>
                            </h2>
                        </div>
                        <Link
                            href="/locais"
                            className="flex items-center gap-2 text-[16px] font-light text-[#A78991] hover:text-[#3A0814] transition-colors shrink-0"
                        >
                            Ver todos os hotéis
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </FadeIn>

                {/* Carousel */}
                <FadeIn delay={100}>
                    <div className="relative">
                        <div
                            ref={scrollRef}
                            className="flex gap-4 lg:gap-[18px] overflow-x-auto scroll-smooth pb-2
                         snap-x snap-mandatory lg:snap-none"
                            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                            {hotels.map((hotel) => (
                                <RelatedCard key={hotel.slug} hotel={hotel} />
                            ))}
                        </div>

                        {canScrollLeft && (
                            <button
                                onClick={() => scroll("left")}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3
                           w-10 h-10 rounded-full bg-[#53212D] hover:bg-[#3A0814]
                           flex items-center justify-center transition-all duration-300
                           shadow-lg z-10"
                                aria-label="Anterior"
                            >
                                <ArrowLeft className="w-4 h-4 text-[#F0EBED]" />
                            </button>
                        )}
                        {canScrollRight && (
                            <button
                                onClick={() => scroll("right")}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3
                           w-10 h-10 rounded-full bg-[#53212D] hover:bg-[#3A0814]
                           flex items-center justify-center transition-all duration-300
                           shadow-lg z-10"
                                aria-label="Próximo"
                            >
                                <ArrowRight className="w-4 h-4 text-[#F0EBED]" />
                            </button>
                        )}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

/* ── Card compacto para o carrossel de relacionados ── */

function RelatedCard({ hotel }: { hotel: Hotel }) {
    const visibleTags = hotel.tags.slice(0, 2);

    return (
        <Link
            href={`/locais/${hotel.slug}`}
            className="relative rounded-[20px] overflow-hidden group/card cursor-pointer shrink-0 block
                 w-[72vw] sm:w-[300px] lg:w-[260px] lg:hover:w-[400px]
                 h-[380px] lg:h-[440px]
                 snap-center lg:snap-align-none
                 transition-[width] duration-500 ease-in-out"
        >
            {/* Background */}
            {hotel.image ? (
                <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover transition-transform duration-500 lg:group-hover/card:scale-105"
                />
            ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#53212D] via-[#6D0026] to-[#3A0814]" />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-[rgba(7,0,0,0.45)] lg:group-hover/card:bg-[rgba(7,0,0,0.55)] transition-colors duration-500" />

            {/* Content */}
            <div className="absolute inset-0 p-5 flex flex-col justify-between">
                {/* Tags */}
                <div
                    className="flex flex-wrap gap-2 justify-end
                     opacity-100 lg:opacity-0 lg:group-hover/card:opacity-100
                     translate-y-0 lg:-translate-y-2 lg:group-hover/card:translate-y-0
                     transition-all duration-500 ease-out"
                >
                    {visibleTags.map((tag, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-1.5 bg-[#A01259] rounded-[25px] px-3 h-[36px] shrink-0"
                        >
                            {tag.type === "capacity" && (
                                <Users className="w-3.5 h-3.5 text-[#F8EAF1]" strokeWidth={1.5} />
                            )}
                            {tag.type === "rooms" && (
                                <Bed className="w-3.5 h-3.5 text-[#F8EAF1]" strokeWidth={1.5} />
                            )}
                            <span className="text-[13px] font-light text-[#F8EAF1] whitespace-nowrap">
                                {tag.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="flex flex-col gap-2">
                    <div>
                        <h3 className="text-[20px] lg:text-[22px] leading-[1.15] font-light tracking-tight text-[#F8EAF1]">
                            {hotel.name}
                        </h3>
                        <p className="text-[14px] lg:text-[16px] leading-[1.15] font-light text-[#F0EBED]/80">
                            {hotel.location}
                        </p>
                    </div>

                    {/* CTA */}
                    <div
                        className="group/btn flex items-center justify-between bg-[#F0EBED] rounded-[25px]
                       px-4 py-2.5
                       opacity-100 lg:opacity-0 lg:group-hover/card:opacity-100
                       translate-y-0 lg:translate-y-4 lg:group-hover/card:translate-y-0
                       transition-all duration-500 ease-out
                       hover:bg-white hover:shadow-md"
                    >
                        <span
                            className="text-[13px] font-medium text-[#53212D] group-hover/btn:text-[#A01259] transition-colors duration-300"
                            style={{ fontFamily: "Geist, sans-serif" }}
                        >
                            Ver detalhes
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#53212D] group-hover/btn:text-[#A01259] transition-all duration-300 group-hover/btn:translate-x-1" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
