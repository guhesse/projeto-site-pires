"use client";

import { useState, useMemo, useCallback } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import HotelCard from "@/components/HotelCard";
import FilterChips from "@/components/FilterChips";
import FilterModal from "@/components/FilterModal";
import FadeIn from "@/components/FadeIn";
import {
    parseHotel,
    filterHotels,
    getAllFilterOptions,
    getMaxCapacity,
    type HotelRaw,
} from "@/lib/hotels";
import { MapPin, SlidersHorizontal } from "lucide-react";

import rawHoteis from "@/data/hoteis.json";

/**
 * Locais — Figma frame "Locais" (40:22) — reescrito como e-commerce
 *
 * Layout: Navbar → Header + FilterChips → Grid de HotelCards (2 cols) → Footer
 * bg #F0EBED, rounded-25, pad 72/0/24/54
 */

const hotels = (rawHoteis as HotelRaw[]).map(parseHotel);
const capacityMax = getMaxCapacity(hotels);

export default function LocaisPage() {
    const [activeFilters, setActiveFilters] = useState<string[]>([]);
    const [activeCapacityMin, setActiveCapacityMin] = useState(0);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [pendingFilters, setPendingFilters] = useState<string[]>([]);
    const [pendingCapacityMin, setPendingCapacityMin] = useState(0);

    const { categories } = useMemo(() => getAllFilterOptions(hotels), []);

    const filteredHotels = useMemo(
        () => filterHotels(hotels, activeFilters, activeCapacityMin),
        [activeFilters, activeCapacityMin]
    );

    /* ── Label map for chips ── */
    const filterLabelMap = useMemo(() => {
        const map: Record<string, string> = {};
        for (const cat of categories) {
            for (const opt of cat.options) {
                map[opt.id] = opt.label;
            }
        }
        return map;
    }, [categories]);

    const handleRemoveFilter = useCallback((id: string) => {
        if (id === "__capacity__") {
            setActiveCapacityMin(0);
        } else {
            setActiveFilters((prev) => prev.filter((f) => f !== id));
        }
    }, []);

    const handleOpenFilters = useCallback(() => {
        setPendingFilters(activeFilters);
        setPendingCapacityMin(activeCapacityMin);
        setIsFilterOpen(true);
    }, [activeFilters, activeCapacityMin]);

    const handleTogglePending = useCallback((id: string) => {
        setPendingFilters((prev) =>
            prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
        );
    }, []);

    const handleApply = useCallback(() => {
        setActiveFilters(pendingFilters);
        setActiveCapacityMin(pendingCapacityMin);
        setIsFilterOpen(false);
    }, [pendingFilters, pendingCapacityMin]);

    const handleClear = useCallback(() => {
        setPendingFilters([]);
        setPendingCapacityMin(0);
    }, []);

    return (
        <main className="min-h-screen bg-[#E2D8DA]">
            <Navbar />

            <div className="flex flex-col gap-6 pt-[130px] pb-6">
                {/* ── Portfolio section (replicating Figma Group 13 layout) ── */}
                <section className="flex justify-center px-6">
                    <div
                        className="w-full max-w-[1380px] rounded-[25px] bg-[#F0EBED]
                       flex flex-col
                       px-6 lg:px-[54px] pt-12 lg:pt-[72px] pb-[24px]"
                    >
                        <div className="flex flex-col gap-[46px]">
                            {/* Header row */}
                            <FadeIn>
                                <div className="flex flex-col lg:flex-row justify-between gap-6">
                                    <div className="flex flex-col gap-3">
                                        {/* Badge de contexto */}
                                        <span className="inline-flex items-center gap-2 bg-[#A01259]/10 border border-[#A01259]/20 text-[#A01259] rounded-full px-4 py-1.5 text-[11px] lg:text-[12px] font-light tracking-widest uppercase w-fit">
                                            <MapPin className="w-3.5 h-3.5" />
                                            {hotels.length} locais
                                        </span>
                                        <h1 className="text-[36px] lg:text-[48px] leading-[1.15] font-light tracking-tight text-[#3A0814] max-w-[675px]">
                                            Um Portfólio Selecionado
                                            <br />
                                            para o seu Sucesso.
                                        </h1>
                                    </div>
                                    <p className="text-[18px] lg:text-[20px] leading-[1.15] font-light text-[#A78991] max-w-[417px]">
                                        De parcerias de décadas a novos destinos estratégicos, nossa
                                        rede oferece as melhores opções de logística e infraestrutura no
                                        Brasil e no exterior.
                                    </p>
                                </div>
                            </FadeIn>

                            {/* Filter chips + contador */}
                            <FadeIn delay={100}>
                                <div className="flex flex-col gap-3">
                                    <FilterChips
                                        activeFilters={[
                                            ...(activeCapacityMin > 0
                                                ? [{ id: "__capacity__", label: `Mín. ${activeCapacityMin.toLocaleString("pt-BR")} pax` }]
                                                : []),
                                            ...activeFilters.map((id) => ({
                                                id,
                                                label: filterLabelMap[id] || id,
                                            })),
                                        ]}
                                        onRemoveFilter={handleRemoveFilter}
                                        onOpenFilters={handleOpenFilters}
                                    />
                                    {/* Contador — acima do grid, visível após filtrar */}
                                    <p className="text-[13px] lg:text-[14px] font-light text-[#A78991]">
                                        <span className="text-[#3A0814] font-normal">{filteredHotels.length}</span>
                                        {" "}de{" "}
                                        <span className="text-[#3A0814] font-normal">{hotels.length}</span>
                                        {" "}locais encontrados
                                    </p>
                                </div>
                            </FadeIn>

                            {/* Hotel grid */}
                            <FadeIn delay={150}>
                                {filteredHotels.length > 0 ? (
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[18px]">
                                        {filteredHotels.map((hotel, i) => (
                                            <FadeIn key={hotel.slug} delay={50 * Math.min(i, 8)}>
                                                <HotelCard hotel={hotel} />
                                            </FadeIn>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-20 gap-6">
                                        <div className="w-16 h-16 rounded-full bg-[#E2D8DA] flex items-center justify-center">
                                            <SlidersHorizontal className="w-7 h-7 text-[#A78991]" strokeWidth={1.5} />
                                        </div>
                                        <div className="flex flex-col items-center gap-2 text-center">
                                            <p className="text-[20px] lg:text-[24px] font-light text-[#3A0814]">
                                                Nenhum local encontrado.
                                            </p>
                                            <p className="text-[14px] lg:text-[16px] font-light text-[#A78991] max-w-[360px]">
                                                Tente ajustar ou limpar os filtros para ver todos os {hotels.length} locais disponíveis.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => { setActiveFilters([]); setActiveCapacityMin(0); }}
                                            className="inline-flex items-center gap-2 text-[14px] lg:text-[16px] font-light text-[#A01259] hover:text-[#6D0026] transition-colors"
                                        >
                                            Limpar todos os filtros
                                        </button>
                                    </div>
                                )}
                            </FadeIn>

                        </div>
                    </div>
                </section>

                <FooterSection />
            </div>

            {/* Filter modal */}
            <FilterModal
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                categories={categories}
                selectedFilters={pendingFilters}
                onToggleFilter={handleTogglePending}
                onApply={handleApply}
                onClear={handleClear}
                capacityMin={pendingCapacityMin}
                onCapacityChange={setPendingCapacityMin}
                capacityMax={capacityMax}
            />
        </main>
    );
}
