/* ── Hotel data model & utility functions ── */

export type SalaTipo =
    | "auditório"
    | "coquetel"
    | "banquete"
    | "boardroom"
    | "apoio"
    | "configuração"
    | "outro";

/** Espaço/sala individual de um hotel */
export interface Sala {
    nome: string;
    /** Capacidade em pax (0 = desconhecida) */
    pax: number;
    tipo: SalaTipo;
}

export interface HotelRaw {
    hotel: string;
    imagem?: string | null;
    Localização: string;
    "Quantidade de aptos": string;
    "Configuração dos aptos": string;
    "Número de leitos (capacidade máxima de hóspedes)": string;
    "Tipos de pensão": string;
    "Principais Distâncias": string;
    Restaurantes: string;
    "Estrutura de Lazer": string;
    "Atrações turísticas regionais": string;
    "Principais concorrentes": string;
    /** Array estruturado de salas/espaços de eventos */
    salas: Sala[];
    /** Capacidade máxima de evento exibida no card (sobrescreve soma calculada) */
    maxPax?: number;
    /** Total de salas exibido no card (sobrescreve contagem calculada) */
    totalSalas?: number;
}

export interface HotelTag {
    label: string;
    type: "capacity" | "pension" | "feature" | "location" | "rooms";
}

export interface Hotel {
    slug: string;
    name: string;
    location: string;
    /** Estado extraído (ex: "SP", "SC", "RJ") */
    state: string;
    /** Cidade extraída */
    city: string;
    rooms: string;
    roomConfig: string;
    maxGuests: string;
    pensionTypes: string[];
    /** Capacidade do maior espaço — derivado do array salas */
    auditoriumCapacity: number;
    /** Soma de pax de todas as salas */
    totalPax: number;
    /** Array estruturado de salas/espaços */
    salas: Sala[];
    distances: string;
    restaurants: string;
    leisure: string;
    attractions: string;
    competitors: string;
    tags: HotelTag[];
    /** Image placeholder — could be replaced with real images */
    image: string | null;
}

/** Gera slug a partir do nome do hotel */
export function toSlug(name: string): string {
    return name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

/** Extrai estado do campo Localização */
function extractState(location: string): string {
    // Match patterns like "/SC", "/ SC", "/SP"
    const match = location.match(/\/\s*([A-Z]{2})\s*$/);
    return match ? match[1] : "";
}

/** Extrai cidade do campo Localização */
function extractCity(location: string): string {
    // Remove estado e limpa
    return location
        .replace(/\/\s*[A-Z]{2}\s*$/, "")
        .replace(/,\s*$/, "")
        .trim();
}

/** Extrai pensões como array */
function extractPensions(raw: string): string[] {
    if (!raw || raw === "-") return [];
    return raw
        .split("\n")
        .map((l) => l.trim())
        .filter((l) => l && !l.startsWith("*"));
}

/** Soma de pax de todas as salas */
function parseTotalPax(salas: Sala[]): number {
    if (!salas || salas.length === 0) return 0;
    return salas.reduce((sum, s) => sum + (s.pax || 0), 0);
}

/** Gera tags automaticamente — 3 fixas + pension opcional */
function generateTags(raw: HotelRaw): HotelTag[] {
    const tags: HotelTag[] = [];
    const pensions = raw["Tipos de pensão"] || "";
    const rooms = parseInt(raw["Quantidade de aptos"]?.replace(/\D/g, ""), 10);
    const salas = raw.salas ?? [];

    // Tipos que contam como "salas" para o chip de contagem
    const TIPOS_SALA: SalaTipo[] = ["auditório", "boardroom", "apoio"];
    const salasCount = raw.totalSalas ?? salas.filter((s) => TIPOS_SALA.includes(s.tipo)).length;

    // Capacidade exibida no card: usa maxPax explícito ou soma calculada
    const displayPax = raw.maxPax ?? parseTotalPax(salas);

    // Tag 1 — Nº de apartamentos (sempre)
    if (!isNaN(rooms) && rooms > 0) {
        tags.push({ label: `${rooms} aptos`, type: "rooms" });
    }

    // Tag 2 — Capacidade (sempre que houver salas ou maxPax)
    if (displayPax > 0) {
        tags.push({
            label: `${displayPax.toLocaleString("pt-BR")} pax`,
            type: "capacity",
        });
    }

    // Tag 3 — Nº de salas (sempre que houver)
    if (salasCount > 0) {
        tags.push({
            label: salasCount === 1 ? "1 sala" : `${salasCount} salas`,
            type: "capacity",
        });
    }

    // Tag opcional — Pensão
    if (pensions.toLowerCase().includes("all inclusive")) {
        tags.push({ label: "All Inclusive", type: "pension" });
    } else if (pensions.toLowerCase().includes("pensão completa")) {
        tags.push({ label: "Pensão completa", type: "pension" });
    } else if (pensions.toLowerCase().includes("meia pensão")) {
        tags.push({ label: "Meia pensão", type: "pension" });
    }

    return tags;
}

/** Transforma o JSON raw em Hotel tipado */
export function parseHotel(raw: HotelRaw): Hotel {
    return {
        slug: toSlug(raw.hotel),
        name: raw.hotel,
        location: raw["Localização"],
        state: extractState(raw["Localização"]),
        city: extractCity(raw["Localização"]),
        rooms: raw["Quantidade de aptos"],
        roomConfig: raw["Configuração dos aptos"],
        maxGuests: raw["Número de leitos (capacidade máxima de hóspedes)"],
        pensionTypes: extractPensions(raw["Tipos de pensão"]),
        auditoriumCapacity: raw.salas?.length ? Math.max(...raw.salas.map((s) => s.pax)) : 0,
        totalPax: raw.maxPax ?? parseTotalPax(raw.salas ?? []),
        salas: raw.salas ?? [],
        distances: raw["Principais Distâncias"],
        restaurants: raw.Restaurantes,
        leisure: raw["Estrutura de Lazer"],
        attractions: raw["Atrações turísticas regionais"],
        competitors: raw["Principais concorrentes"],
        tags: generateTags(raw),
        image: raw.imagem || null,
    };
}

/* ── Categorias de filtro disponíveis ── */

export interface FilterOption {
    id: string;
    label: string;
    category: string;
}

export function getAllFilterOptions(hotels: Hotel[]): {
    categories: { id: string; label: string; options: FilterOption[] }[];
} {
    const states = [...new Set(hotels.map((h) => h.state).filter(Boolean))].sort();
    const cities = [...new Set(hotels.map((h) => h.city).filter(Boolean))].sort();

    return {
        categories: [
            {
                id: "state",
                label: "Estado",
                options: states.map((s) => ({ id: `state:${s}`, label: s, category: "state" })),
            },
            {
                id: "city",
                label: "Cidade",
                options: cities.map((c) => ({ id: `city:${c}`, label: c, category: "city" })),
            },
            {
                id: "pension",
                label: "Tipo de pensão",
                options: [
                    { id: "pension:cafe", label: "Café da manhã", category: "pension" },
                    { id: "pension:meia", label: "Meia pensão", category: "pension" },
                    { id: "pension:completa", label: "Pensão completa", category: "pension" },
                    { id: "pension:allinclusive", label: "All Inclusive", category: "pension" },
                ],
            },
            {
                id: "feature",
                label: "Estrutura",
                options: [
                    { id: "feature:piscina", label: "Com piscina", category: "feature" },
                    { id: "feature:spa", label: "Spa", category: "feature" },
                    { id: "feature:academia", label: "Academia", category: "feature" },
                ],
            },
        ],
    };
}

/** Retorna a maior capacidade total (totalPax) entre todos os hotéis */
export function getMaxCapacity(hotels: Hotel[]): number {
    if (!hotels.length) return 0;
    return Math.max(...hotels.map((h) => h.totalPax));
}

/** Aplica filtros ativos aos hotéis */
export function filterHotels(hotels: Hotel[], activeFilters: string[], capacityMin = 0): Hotel[] {
    return hotels.filter((hotel) => {
        // Filtro de capacidade mínima via slider
        if (capacityMin > 0 && hotel.totalPax < capacityMin) return false;

        if (activeFilters.length === 0) return true;

        return activeFilters.every((filter) => {
            const [category, value] = filter.split(":");

            switch (category) {
                case "state":
                    return hotel.state === value;
                case "city":
                    return hotel.city === value;
                case "pension": {
                    const pensions = hotel.pensionTypes.join(" ").toLowerCase();
                    if (value === "cafe") return pensions.includes("café") || pensions.includes("cafe");
                    if (value === "meia") return pensions.includes("meia");
                    if (value === "completa") return pensions.includes("pensão completa");
                    if (value === "allinclusive") return pensions.includes("all inclusive");
                    return false;
                }
                case "feature": {
                    const leisure = hotel.leisure.toLowerCase();
                    if (value === "piscina") return leisure.includes("piscina");
                    if (value === "spa") return leisure.includes("spa");
                    if (value === "academia") return leisure.includes("academia") || leisure.includes("fitness");
                    return false;
                }
                default:
                    return true;
            }
        });
    });
}
