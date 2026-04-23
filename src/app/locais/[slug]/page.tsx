import { notFound } from "next/navigation";
import { parseHotel, type HotelRaw } from "@/lib/hotels";
import rawHoteis from "@/data/hoteis.json";
import HotelDetailView from "./HotelDetailView";

const hotels = (rawHoteis as HotelRaw[]).map(parseHotel);

/** Generate static params for all hotels */
export function generateStaticParams() {
  return hotels.map((h) => ({ slug: h.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // We need to resolve params synchronously for metadata
  // But since Next.js 15+ params is async, we handle it
  return params.then(({ slug }) => {
    const hotel = hotels.find((h) => h.slug === slug);
    return {
      title: hotel ? `${hotel.name} — Pires` : "Hotel — Pires",
      description: hotel
        ? `${hotel.name} em ${hotel.location}. ${hotel.rooms} apartamentos.`
        : "Detalhes do hotel",
    };
  });
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
