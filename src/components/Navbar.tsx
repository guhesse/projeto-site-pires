"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

/**
 * Navbar — fiel ao Figma (Frame 48)
 *
 * Layout: HORIZONTAL, 1380×89, rounded-25, pad 36 L/R 16 T/B
 * justify-between
 *
 * Links: Home | Locais | Para quem organiza | Para seu espaço
 * Active: #3A0814  |  Inactive: #99767E
 * CTA: "Falar com um especialista" — Geist 16/500, bg #A01259, text #F0EBED, rounded-30
 */

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Locais", href: "/locais" },
  { label: "Para quem organiza", href: "/para-quem-organiza" },
  { label: "Para seu espaço", href: "/para-seu-espaco" },
];

const WHATSAPP_NUMBER = "5548996267846";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Encontrei o site da Pires e gostaria de saber mais sobre os serviços de vocês. Podem me dar mais informações?"
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

/* Logo PIRES — SVG real */
function PiresLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo-pires.svg"
      alt="Pires"
      width={126}
      height={37}
      className={className}
      priority
    />
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      <nav
        className="w-full max-w-[1380px] rounded-[25px] bg-[#F0EBEE]/90 backdrop-blur-sm
                   flex items-center justify-between
                   px-4 lg:px-[36px] py-[16px]"
      >
        {/* ── Logo ── */}
        <Link href="/">
          <PiresLogo className="shrink-0" />
        </Link>

        {/* ── Desktop Links (Frame 50: HORIZONTAL gap=52, Sofia Pro 20/400) ── */}
        <ul className="hidden lg:flex items-center gap-[52px]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`text-[18px] font-light tracking-wide transition-colors duration-300 hover:text-[#3A0814]
                    ${isActive ? "text-[#3A0814]" : "text-[#99767E]"}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── CTA Button (Geist 16/500, bg #A01259, text #F0EBED, rounded-30, pad 28/12) ── */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center justify-center gap-2
                     bg-[#A01259] hover:bg-[#8a0f4e] text-[#F0EBED]
                     rounded-[30px] px-[28px] py-[12px]
                     text-[16px] font-medium tracking-wide transition-all duration-300
                     hover:shadow-lg hover:shadow-[#A01259]/20"
          style={{ fontFamily: "Geist, sans-serif" }}
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Falar com um especialista
        </a>

        {/* ── Mobile toggle ── */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[105px] z-40 mx-6">
          <div className="rounded-[25px] bg-[#F0EBEE]/95 backdrop-blur-sm p-8 flex flex-col gap-6 shadow-xl">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-[20px] font-normal transition-colors hover:text-[#3A0814]
                    ${isActive ? "text-[#3A0814]" : "text-[#99767E]"}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-2
                         bg-[#A01259] hover:bg-[#8a0f4e] text-[#F0EBED]
                         rounded-[30px] px-[28px] py-[12px]
                         text-[16px] font-medium transition-colors mt-2"
              style={{ fontFamily: "Geist, sans-serif" }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar com um especialista
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
