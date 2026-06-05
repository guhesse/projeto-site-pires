import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { parseHotel, type HotelRaw } from "@/lib/hotels";
import rawHoteis from "@/data/hoteis.json";

export const dynamic = "force-static";

/**
 * sitemap.xml — gerado estaticamente no build (output: export).
 * Inclui páginas principais + todas as páginas de hotéis.
 */
export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const staticPages: MetadataRoute.Sitemap = [
        { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
        { url: `${SITE_URL}/locais/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
        { url: `${SITE_URL}/para-quem-organiza/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${SITE_URL}/para-seu-espaco/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${SITE_URL}/quem-somos/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${SITE_URL}/contato/`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    ];

    const hotelPages: MetadataRoute.Sitemap = (rawHoteis as HotelRaw[])
        .map(parseHotel)
        .map((hotel) => ({
            url: `${SITE_URL}/locais/${hotel.slug}/`,
            lastModified: now,
            changeFrequency: "monthly" as const,
            priority: 0.7,
        }));

    return [...staticPages, ...hotelPages];
}
