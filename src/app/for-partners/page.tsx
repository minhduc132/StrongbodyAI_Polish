import ForPartnersContent from "@/components/sections/partners/ForPartnersContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Zostań Partnerem Strategicznym | Rekrutacja StrongBody AI",
    description: "Zgłoś się, aby dołączyć do ekskluzywnej sieci specjalistów zdrowia StrongBody AI w Stanach Zjednoczonych. Zweryfikowani lekarze, specjaliści i eksperci wellness zarabiają globalnie dzięki naszemu rynkowi opartemu na AI.",
    keywords: ["partnerstwo dla specjalistów zdrowia", "dołącz do StrongBody AI", "partnerstwo lekarskie USA", "rekrutacja partnerów telemedycznych", "sieć specjalistów medycznych", "platforma partnerska dla zdrowia"],
    alternates: {
        canonical: "https://strongbody.com.pl/for-partners",
    },
    openGraph: {
        title: "Zostań Partnerem Strategicznym | StrongBody AI",
        description: "Dołącz do naszej selektywnej sieci zweryfikowanych specjalistów zdrowia. Docieraj do klientów premium z całego świata, zarabiaj w USD i zatrzymuj 80% swoich przychodów.",
        url: "https://strongbody.com.pl/for-partners",
        siteName: "StrongBody AI",
        images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "StrongBody AI Dla Partnerów" }],
        locale: "pl_PL",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Dołącz do StrongBody AI jako Partner Specjalista Zdrowia",
        description: "Docieraj do klientów premium z USA i świata. Zachowaj 80% przychodów. Tłumaczenie oparte na AI. Tylko selektywna rekrutacja.",
        images: ["/images/og-image.png"],
    },
};


export default function ForPartnersPage() {
    return (
        <main className="min-h-screen">
            <ForPartnersContent />
        </main>
    );
}
