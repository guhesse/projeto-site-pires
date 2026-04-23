"use client";

import Link from "next/link";
import { ArrowRight, LayoutGrid } from "lucide-react";
import type { Hotel } from "@/lib/hotels";

/**
 * HotelCard — Figma card (40:108)
 *
 * 623×614, rounded-20, image bg + dark overlay rgba(7,0,0,0.51)
 * Tags: top-right, bg #A01259, rounded-25, padding 4/12
 * Info: bottom-left, hotel name 32px #F8EAF1, location 24px #F0EBED
 * Button: full-width bg #F0EBED, rounded-25, "Mais detalhes" Geist 14/500 #53212D + arrow
 */

interface HotelCardProps {
    hotel: Hotel;
}

export default function HotelCard({ hotel }: HotelCardProps) {
    // Limita a 3 tags visíveis no card
    const visibleTags = hotel.tags.slice(0, 3);

    return (
        <Link
            href={`/locais/${hotel.slug}`}
            className="relative rounded-[20px] overflow-hidden group cursor-pointer
                 w-full h-[500px] lg:h-[614px] block"
        >
            {/* Background — placeholder gradient se sem imagem */}
            {hotel.image ? (
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${hotel.image})` }}
                />
            ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#53212D] via-[#6D0026] to-[#3A0814] transition-transform duration-500 group-hover:scale-105" />
            )}

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[rgba(7,0,0,0.51)]" />

            {/* Content */}
            <div className="absolute inset-0 p-[24px] pt-[36px] flex flex-col justify-between">
                {/* Tags — top right */}
                {visibleTags.length > 0 ? (
                    <div className="flex flex-wrap gap-[8px] justify-end">
                        {visibleTags.map((tag, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-[6px] bg-[#A01259] rounded-[25px] px-[12px] h-[49px] shrink-0"
                            >
                                {tag.type === "capacity" && (
                                    <Users className="w-[20px] h-[20px] text-[#F8EAF1]" strokeWidth={1.5} />
                                )}
                                <span className="text-[16px] lg:text-[18px] font-light text-[#F8EAF1] whitespace-nowrap">
                                    {tag.label}
                                </span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div />
                )}

                {/* Bottom — name + location + button */}
                <div className="flex flex-col gap-[8px]">
                    <div>
                        <h3 className="text-[28px] lg:text-[32px] leading-[1.15] font-light tracking-tight text-[#F8EAF1]">
                            {hotel.name}
                        </h3>
                        <p className="text-[20px] lg:text-[24px] leading-[1.15] font-light text-[#F0EBED]">
                            {hotel.location}
                        </p>
                    </div>

                    {/* Button bar — Figma: full-width, bg #F0EBED, rounded-25, pad 12/16 */}
                    <div
                        className="flex items-center justify-between bg-[#F0EBED] rounded-[25px]
                       px-[16px] py-[12px] transition-colors group-hover:bg-white"
                    >
                        <span
                            className="text-[14px] font-medium text-[#53212D]"
                            style={{ fontFamily: "Geist, sans-serif" }}
                        >
                            Mais detalhes
                        </span>
                        <ArrowRight className="w-[16px] h-[16px] text-[#53212D]" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
