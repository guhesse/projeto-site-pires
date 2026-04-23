"use client";

import { CircleX } from "lucide-react";

/**
 * FilterChips — Figma Frame 21 (40:311)
 *
 * Horizontal row of chips, gap=16
 * Active filter (destructible): bg #6D0026, text #F8EAF1, rounded-25, h=49, px=12
 *   - Has CircleX icon to remove
 * Inactive filter: bg #A01259, text #F8EAF1
 * "+" button: bg #D3C4C8, rounded-25, h=49, icon #870040
 */

interface FilterChip {
    id: string;
    label: string;
}

interface FilterChipsProps {
    activeFilters: FilterChip[];
    onRemoveFilter: (id: string) => void;
    onOpenFilters: () => void;
}

export default function FilterChips({
    activeFilters,
    onRemoveFilter,
    onOpenFilters,
}: FilterChipsProps) {
    return (
        <div className="flex items-center flex-wrap gap-4">
            {activeFilters.map((chip) => (
                <button
                    key={chip.id}
                    onClick={() => onRemoveFilter(chip.id)}
                    className="flex items-center gap-2 bg-[#6D0026] rounded-[25px] px-3 h-[49px]
                     text-[#F8EAF1] transition-colors hover:bg-[#530020] shrink-0 group"
                >
                    <span className="text-[18px] lg:text-[20px] font-light whitespace-nowrap">
                        {chip.label}
                    </span>
                    <CircleX
                        className="w-6 h-6 text-[#F8EAF1] opacity-70 group-hover:opacity-100 transition-opacity"
                        strokeWidth={1.5}
                    />
                </button>
            ))}

            {/* Add filter button — bg #D3C4C8, text #870040 */}
            <button
                onClick={onOpenFilters}
                className="flex items-center justify-center bg-[#D3C4C8] rounded-[25px] px-5 h-[49px]
                   transition-colors hover:bg-[#C0B0B5] shrink-0"
                aria-label="Adicionar filtros"
            >
                <span className="text-[18px] lg:text-[20px] font-light text-[#870040] whitespace-nowrap">
                    Adicionar filtro
                </span>
            </button>
        </div>
    );
}
