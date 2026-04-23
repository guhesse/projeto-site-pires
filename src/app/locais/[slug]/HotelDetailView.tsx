"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Users, MapPin, Bed, UtensilsCrossed, Dumbbell, Building2, Trophy } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import ContatoForm from "@/components/sections/ContatoForm";
import FadeIn from "@/components/FadeIn";
import type { Hotel } from "@/lib/hotels";

/**
 * HotelDetailView — Figma frame "Hotel Details" (40:1219)
 *
 * 852×863 layout adapted to full page:
 * - Photo section: top, rounded-t-20, with tags overlay, 588px height
 * - Details section: bottom, bg #E2D8DA, rounded-b-20
 *   - Hotel name 32px #210000, location 24px #53212D
 *   - Description 20px #A78991
 *   - Detailed info grid
 */

interface Props {
  hotel: Hotel;
}

export default function HotelDetailView({ hotel }: Props) {
  return (
    <main className="min-h-screen bg-[#E2D8DA]">
      <Navbar />

      <div className="flex flex-col gap-6 pt-[130px] pb-6">
        <section className="flex justify-center px-6">
          <div className="w-full max-w-[1380px] overflow-hidden rounded-[25px]">
            {/* ── Photo Section (top) ── */}
            <div className="relative h-[350px] lg:h-[588px]">
              {/* Background */}
              {hotel.image ? (
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${hotel.image})` }}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#53212D] via-[#6D0026] to-[#3A0814]" />
              )}

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-[rgba(7,0,0,0.51)]" />

              {/* Content overlay */}
              <div className="absolute inset-0 p-6 lg:p-9 flex flex-col justify-between">
                {/* Tags — top right */}
                <div className="flex flex-wrap gap-2 justify-end">
                  {hotel.tags.slice(0, 5).map((tag, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 bg-[#A01259] rounded-[25px] px-3 h-[49px] shrink-0"
                    >
                      {tag.type === "capacity" && (
                        <Users className="w-5 h-5 text-[#F8EAF1]" strokeWidth={1.5} />
                      )}
                      <span className="text-[16px] lg:text-[20px] font-light text-[#F8EAF1] whitespace-nowrap">
                        {tag.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Back button at bottom-left */}
                <Link
                  href="/locais"
                  className="flex items-center gap-2 text-[#F0EBED] hover:text-white transition-colors w-fit"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span className="text-[16px] font-light">Voltar</span>
                </Link>
              </div>
            </div>

            {/* ── Details Section (bottom) ── */}
            <div className="bg-[#F0EBED] px-8 lg:px-[54px] pt-12 lg:pt-[67px] pb-12 lg:pb-[72px]">
              <FadeIn>
                {/* Name + Location */}
                <div className="mb-6">
                  <h1 className="text-[28px] lg:text-[32px] leading-[1.15] font-light tracking-tight text-[#210000]">
                    {hotel.name}
                  </h1>
                  <p className="text-[20px] lg:text-[24px] leading-[1.15] font-light text-[#53212D] mt-1">
                    {hotel.location}
                  </p>
                </div>

                {/* Description */}
                <p className="text-[16px] lg:text-[20px] leading-[1.15] font-light text-[#A78991] max-w-[900px] mb-10">
                  De parcerias de décadas a novos destinos estratégicos, nossa rede
                  oferece as melhores opções de logística e infraestrutura no Brasil
                  e no exterior.
                </p>
              </FadeIn>

              {/* Info Grid */}
              <FadeIn delay={100}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Apartamentos */}
                  {hotel.rooms && hotel.rooms !== "-" && (
                    <InfoItem
                      icon={<Bed className="w-5 h-5" />}
                      label="Apartamentos"
                      value={`${hotel.rooms} aptos — ${hotel.roomConfig}`}
                    />
                  )}

                  {/* Capacidade */}
                  {hotel.maxGuests && hotel.maxGuests !== "-" && (
                    <InfoItem
                      icon={<Users className="w-5 h-5" />}
                      label="Capacidade máxima"
                      value={`${hotel.maxGuests} hóspedes`}
                    />
                  )}

                  {/* Localização */}
                  <InfoItem
                    icon={<MapPin className="w-5 h-5" />}
                    label="Localização"
                    value={hotel.location}
                  />

                  {/* Auditório */}
                  {hotel.auditoriumCapacity > 0 && (
                    <InfoItem
                      icon={<Building2 className="w-5 h-5" />}
                      label="Maior auditório"
                      value={`${hotel.auditoriumCapacity.toLocaleString("pt-BR")} pax`}
                    />
                  )}

                  {/* Restaurantes */}
                  {hotel.restaurants && hotel.restaurants !== "-" && (
                    <InfoItem
                      icon={<UtensilsCrossed className="w-5 h-5" />}
                      label="Restaurantes"
                      value={hotel.restaurants}
                    />
                  )}

                  {/* Lazer */}
                  {hotel.leisure && hotel.leisure !== "-" && (
                    <InfoItem
                      icon={<Dumbbell className="w-5 h-5" />}
                      label="Estrutura de Lazer"
                      value={hotel.leisure}
                    />
                  )}
                </div>
              </FadeIn>

              {/* Salas de eventos */}
              {hotel.meetingRooms && hotel.meetingRooms !== "-" && (
                <FadeIn delay={150}>
                  <div className="mt-8 p-6 bg-[#E2D8DA] rounded-[20px]">
                    <h3 className="text-[18px] lg:text-[20px] font-light text-[#3A0814] mb-3 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-[#A01259]" />
                      Salas de Eventos
                    </h3>
                    <p className="text-[14px] lg:text-[15px] font-light text-[#53212D] whitespace-pre-line leading-relaxed">
                      {hotel.meetingRooms}
                    </p>
                  </div>
                </FadeIn>
              )}

              {/* Distâncias */}
              {hotel.distances && (
                <FadeIn delay={200}>
                  <div className="mt-6 p-6 bg-[#E2D8DA] rounded-[20px]">
                    <h3 className="text-[18px] lg:text-[20px] font-light text-[#3A0814] mb-3 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#A01259]" />
                      Principais Distâncias
                    </h3>
                    <p className="text-[14px] lg:text-[15px] font-light text-[#53212D] whitespace-pre-line leading-relaxed">
                      {hotel.distances}
                    </p>
                  </div>
                </FadeIn>
              )}

              {/* Atrações */}
              {hotel.attractions && (
                <FadeIn delay={250}>
                  <div className="mt-6 p-6 bg-[#E2D8DA] rounded-[20px]">
                    <h3 className="text-[18px] lg:text-[20px] font-light text-[#3A0814] mb-3 flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-[#A01259]" />
                      Atrações Turísticas
                    </h3>
                    <p className="text-[14px] lg:text-[15px] font-light text-[#53212D] leading-relaxed">
                      {hotel.attractions}
                    </p>
                  </div>
                </FadeIn>
              )}
            </div>
          </div>
        </section>

        {/* ── Contato Form Section ── */}
        <ContatoForm />

        {/* ── Ver todos os locais link ── */}
        <FadeIn>
          <div className="flex justify-center px-6">
            <Link
              href="/locais"
              className="w-full max-w-[1380px] flex items-center justify-between
                         bg-[#F0EBED] hover:bg-[#e8e1e4] rounded-[25px]
                         px-8 lg:px-[54px] py-6 transition-colors group"
            >
              <span className="text-[18px] lg:text-[24px] font-light tracking-tight text-[#3A0814]">
                Ver todos os locais
              </span>
              <div
                className="w-[49px] h-[49px] rounded-full bg-[#6D3B47] group-hover:bg-[#53212D]
                           flex items-center justify-center transition-colors"
              >
                <ArrowRight className="w-4 h-4 text-[#F0EBED]" />
              </div>
            </Link>
          </div>
        </FadeIn>

        <FooterSection />
      </div>
    </main>
  );
}

/* ── Info item sub-component ── */
function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="shrink-0 w-10 h-10 rounded-full bg-[#E2D8DA] flex items-center justify-center text-[#A01259]">
        {icon}
      </div>
      <div>
        <p className="text-[12px] lg:text-[13px] font-light text-[#A78991] uppercase tracking-wider">
          {label}
        </p>
        <p className="text-[14px] lg:text-[15px] font-light text-[#3A0814] mt-0.5">
          {value}
        </p>
      </div>
    </div>
  );
}
