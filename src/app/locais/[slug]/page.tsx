import { notFound } from "next/navigation";
import { parseHotel, type HotelRaw } from "@/lib/hotels";
import rawHoteis from "@/data/hoteis.json";
import HotelDetailView from "./HotelDetailView";

const hotels = (rawHoteis as HotelRaw[]).map(parseHotel);

/** Generate static params for all hotels */
export function generateStaticParams() {
  return hotels.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const hotel = hotels.find((h) => h.slug === slug);

  if (!hotel) {
    return { title: "Hotel — Pires", description: "Detalhes do hotel" };
  }

  const capacity =
    hotel.auditoriumCapacity > 0
      ? ` Maior espaço para até ${hotel.auditoriumCapacity.toLocaleString("pt-BR")} pessoas.`
      : "";

  const description =
    `${hotel.name} em ${hotel.location} — hotel com espaço de eventos.` +
    `${hotel.rooms && hotel.rooms !== "-" ? ` ${hotel.rooms} apartamentos.` : ""}` +
    `${capacity} Conheça a estrutura para congressos, convenções e eventos corporativos.`;

  const keywords = [
    `${hotel.name}`,
    `hotel para eventos em ${hotel.city}`,
    `espaço de eventos em ${hotel.city}`,
    `hotéis com espaço de eventos em ${hotel.state}`,
    "hotel para congressos e convenções",
  ];

  const canonical = `/locais/${hotel.slug}`;

  return {
    title: `${hotel.name} — ${hotel.location} | Pires`,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title: `${hotel.name} — ${hotel.location}`,
      description,
      url: `https://piresdestinoseventos.com.br${canonical}`,
      siteName: "Pires Destinos e Eventos",
      images: hotel.image ? [{ url: hotel.image, alt: hotel.name }] : undefined,
      locale: "pt_BR",
      type: "website",
    },
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function HotelDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const hotel = hotels.find((h) => h.slug === slug);

  if (!hotel) {
    notFound();
  }

  return <HotelDetailView hotel={hotel} />;
}
