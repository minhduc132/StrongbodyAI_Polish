import HowItWorks from "@/components/sections/marketing/HowItWorks";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jak to działa | Przewodnik krok po kroku StrongBody AI",
    description: "Dowiedz się, jak StrongBody AI łączy klientów z ekspertami opieki zdrowotnej w 4 krokach — pobierz aplikację, rozmawiaj głosowo z ekspertami, otrzymuj przejrzyste oferty i płać bezpiecznie przez escrow.",
    keywords: ["jak działa StrongBody AI", "proces telemedyczny", "kroki konsultacji zdrowotnej", "proces bezpiecznej płatności za zdrowie", "podróż zdrowotna AI"],
    alternates: {
        canonical: "https://strongbody.ai/how-it-works",
    },
    openGraph: {
        title: "Jak to działa | StrongBody AI",
        description: "4 proste kroki: pobierz, rozmawiaj, otrzymaj ofertę, bezpieczna płatność. Globalna opieka zdrowotna nigdy nie była tak prosta.",
        url: "https://strongbody.ai/how-it-works",
        siteName: "StrongBody AI",
        images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Jak działa StrongBody AI" }],
        locale: "pl_PL",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Jak to działa | StrongBody AI",
        description: "4 kroki do dostępu do globalnych ekspertów zdrowia: Pobierz → Rozmawiaj → Oferta → Bezpieczna płatność.",
        images: ["/images/og-image.png"],
    },
};


export default function HowItWorksPage() {
    return (
        <main className="min-h-screen pt-20">
            <HowItWorks />
        </main>
    );
}
