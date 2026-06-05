import type { Metadata } from "next";
import { EVENT_LOCATION_KEYWORDS } from "@/lib/seo";

/**
 * Metadata da listagem de hotéis (/locais).
 * Necessário aqui porque a page.tsx é "use client" e não pode exportar metadata.
 */
export const metadata: Metadata = {
    title: "Hotéis e espaços de eventos no Brasil | Pires Destinos e Eventos",
    description:
        "Encontre hotéis com espaço de eventos em Florianópolis, Santa Catarina, Campinas/SP, Balneário Camboriú e nas regiões Sul, Sudeste, Norte e Nordeste. +23 hotéis parceiros para congressos, convenções e eventos corporativos.",
    keywords: EVENT_LOCATION_KEYWORDS,
    alternates: { canonical: "/locais" },
    openGraph: {
        title: "Hotéis e espaços de eventos no Brasil | Pires Destinos e Eventos",
        description:
            "Hotéis com espaço de eventos em Florianópolis, Santa Catarina, Campinas/SP, Balneário Camboriú e nas regiões Sul, Sudeste, Norte e Nordeste.",
        url: "https://piresdestinoseventos.com.br/locais",
        siteName: "Pires Destinos e Eventos",
        locale: "pt_BR",
        type: "website",
    },
};

export default function LocaisLayout({ children }: { children: React.ReactNode }) {
    return children;
}
