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
    type HotelRaw,
} from "@/lib/hotels";

import rawHoteis from "@/data/hoteis.json";

/**
 * Locais — Figma frame "Locais" (40:22) — reescrito como e-commerce
 *
 * Layout: Navbar → Header + FilterChips → Grid de HotelCards (2 cols) → Footer
 * bg #F0EBED, rounded-25, pad 72/0/24/54
 */

const hotels = (rawHoteis as HotelRaw[]).map(parseHotel);

export default function LocaisPage() {
    const [activeFilters, setActiveFilters] = useState<string[]>([]);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [pendingFilters, setPendingFilters] = useState<string[]>([]);

    const { categories } = useMemo(() => getAllFilterOptions(hotels), []);

    const filteredHotels = useMemo(
        () => filterHotels(hotels, activeFilters),
        [activeFilters]
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
        setActiveFilters((prev) => prev.filter((f) => f !== id));
    }, []);

    const handleOpenFilters = useCallback(() => {
        setPendingFilters(activeFilters);
        setIsFilterOpen(true);
    }, [activeFilters]);

    const handleTogglePending = useCallback((id: string) => {
        setPendingFilters((prev) =>
            prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
        );
    }, []);

    const handleApply = useCallback(() => {
        setActiveFilters(pendingFilters);
        setIsFilterOpen(false);
    }, [pendingFilters]);

    const handleClear = useCallback(() => {
        setPendingFilters([]);
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
                                    <h1 className="text-[36px] lg:text-[48px] leading-[1.15] font-light tracking-tight text-[#3A0814] max-w-[675px]">
                                        Um Portfólio Selecionado
                                        <br />
                                        para o seu Sucesso.
                                    </h1>
                                    <p className="text-[18px] lg:text-[20px] leading-[1.15] font-light text-[#A78991] max-w-[417px]">
                                        De parcerias de décadas a novos destinos estratégicos, nossa
                                        rede oferece as melhores opções de logística e infraestrutura no
                                        Brasil e no exterior.
                                    </p>
                                </div>
                            </FadeIn>

                            {/* Filter chips */}
                            <FadeIn delay={100}>
                                <FilterChips
                                    activeFilters={activeFilters.map((id) => ({
                                        id,
                                        label: filterLabelMap[id] || id,
                                    }))}
                                    onRemoveFilter={handleRemoveFilter}
                                    onOpenFilters={handleOpenFilters}
                                />
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
                                    <div className="flex flex-col items-center justify-center py-20 gap-4">
                                        <p className="text-[24px] font-light text-[#A78991]">
                                            Nenhum local encontrado com esses filtros.
                                        </p>
                                        <button
                                            onClick={() => setActiveFilters([])}
                                            className="text-[16px] font-light text-[#A01259] hover:text-[#6D0026] transition-colors underline"
                                        >
                                            Limpar todos os filtros
                                        </button>
                                    </div>
                                )}
                            </FadeIn>

                            {/* Result count */}
                            <div className="flex items-center justify-between py-3">
                                <p className="text-[16px] font-light text-[#A78991]">
                                    {filteredHotels.length} de {hotels.length} locais
                                </p>
                            </div>
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
            />
        </main>
    );
}
