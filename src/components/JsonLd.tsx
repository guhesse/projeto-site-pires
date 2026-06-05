import { SITE_URL, SITE_NAME, NAV_LINKS } from "@/lib/seo";

/**
 * JsonLd — dados estruturados (schema.org) para o Google entender a marca
 * e exibir sitelinks (links da navegação) nos resultados de busca.
 *
 * Inclui:
 * - Organization: identidade da marca, logo e contato
 * - WebSite: nome e URL canônica do site
 * - ItemList de SiteNavigationElement: itens da navbar
 */
export default function JsonLd() {
    const organization = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        alternateName: "Pires",
        url: SITE_URL,
        logo: `${SITE_URL}/images/logo-pires.svg`,
        description:
            "+ de 33 anos de atuação no mercado nacional e internacional. Curadoria de hotéis e espaços de eventos e terceirização comercial para hotelaria.",
        email: "contato@piresdestinoseventos.com.br",
        areaServed: "BR",
        knowsLanguage: ["pt-BR"],
    };

    const website = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: "pt-BR",
        publisher: { "@id": `${SITE_URL}/#organization` },
    };

    const navigation = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Navegação principal",
        itemListElement: NAV_LINKS.map((link, i) => ({
            "@type": "SiteNavigationElement",
            position: i + 1,
            name: link.label,
            url: `${SITE_URL}${link.href === "/" ? "" : link.href}`,
        })),
    };

    const graph = [organization, website, navigation];

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
    );
}
