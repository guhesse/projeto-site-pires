/* ── Constantes de SEO compartilhadas ── */

export const SITE_URL = "https://piresdestinoseventos.com.br";
export const SITE_NAME = "Pires Destinos e Eventos";

/** Links principais de navegação (espelham a Navbar) — usados nos sitelinks/JSON-LD */
export const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Locais", href: "/locais" },
    { label: "Para quem organiza", href: "/para-quem-organiza" },
    { label: "Para seu espaço", href: "/para-seu-espaco" },
    { label: "Quem Somos", href: "/quem-somos" },
];

/**
 * Buscas-alvo de SEO local (espaços de eventos por região/cidade).
 * Reaproveitadas como keywords na página de Locais.
 */
export const EVENT_LOCATION_KEYWORDS = [
    "hotéis com espaço de eventos em Florianópolis",
    "hotéis com espaço de eventos em Santa Catarina",
    "hotéis com espaço de eventos em Campinas/SP",
    "hotéis com espaço de eventos em Balneário Camboriú",
    "hotéis com espaço de eventos no Nordeste",
    "hotéis com espaço de eventos no Norte",
    "hotéis com espaço de eventos no Sudeste",
    "hotéis com espaço de eventos no Sul",
    "hotéis para eventos corporativos",
    "espaços para congressos e convenções",
    "resorts para eventos no Brasil",
];
