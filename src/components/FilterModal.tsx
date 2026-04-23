"use client";

import { useEffect, useRef } from "react";
import { X, Check } from "lucide-react";
import type { FilterOption } from "@/lib/hotels";

/**
 * FilterModal — Tela de seleção de filtros
 *
 * Segue o design system Pires:
 * - bg #F0EBED (brand-card), rounded-25
 * - Overlay para fechar
 * - Categorias em seções
 * - Opções com checkbox visual
 * - Botão "Aplicar" bg #A01259 e "Limpar" bg transparent
 */

interface FilterCategory {
  id: string;
  label: string;
  options: FilterOption[];
}

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  categories: FilterCategory[];
  selectedFilters: string[];
  onToggleFilter: (id: string) => void;
  onApply: () => void;
  onClear: () => void;
}

export default function FilterModal({
  isOpen,
  onClose,
  categories,
  selectedFilters,
  onToggleFilter,
  onApply,
  onClear,
}: FilterModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // Prevent scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className="relative w-full max-w-[680px] max-h-[85vh] mx-4
                   bg-[#F0EBED] rounded-[25px] shadow-2xl
                   flex flex-col overflow-hidden
                   animate-[scaleIn_0.3s_cubic-bezier(0.16,1,0.3,1)_forwards]"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 lg:px-10 pt-8 lg:pt-10 pb-4 lg:pb-6">
          <h2 className="text-[26px] lg:text-[32px] font-light tracking-tight text-[#3A0814]">
            Filtrar locais
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#E2D8DA] flex items-center justify-center
                       hover:bg-[#D3C4C8] transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5 text-[#3A0814]" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-6 lg:px-10 pb-6 space-y-8">
          {categories.map((cat) => (
            <div key={cat.id}>
              <h3 className="text-[20px] font-light text-[#A78991] mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.options.map((opt) => {
                  const isSelected = selectedFilters.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => onToggleFilter(opt.id)}
                      className={`flex items-center gap-2 rounded-[20px] px-4 py-2.5
                                 text-[16px] font-light transition-all duration-200
                                 ${
                                   isSelected
                                     ? "bg-[#6D0026] text-[#F8EAF1] shadow-md"
                                     : "bg-[#E2D8DA] text-[#53212D] hover:bg-[#D3C4C8]"
                                 }`}
                    >
                      {isSelected && (
                        <Check className="w-4 h-4" strokeWidth={2.5} />
                      )}
                      <span>{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 lg:px-10 py-4 lg:py-6 border-t border-[#D3C4C8]">
          <button
            onClick={onClear}
            className="text-[16px] font-light text-[#A78991] hover:text-[#3A0814] transition-colors"
          >
            Limpar filtros
          </button>
          <button
            onClick={onApply}
            className="bg-[#A01259] hover:bg-[#8a0f4e] text-[#F0EBED]
                       rounded-[25px] px-8 py-3 text-[16px] font-medium transition-colors"
            style={{ fontFamily: "Geist, sans-serif" }}
          >
            Aplicar filtros
            {selectedFilters.length > 0 && (
              <span className="ml-2 bg-white/20 rounded-full px-2 py-0.5 text-[13px]">
                {selectedFilters.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
