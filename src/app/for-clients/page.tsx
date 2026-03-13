import ForClients from "@/components/sections/marketing/ForClients";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dla Klientów | Dostęp do światowej klasy usług zdrowotnych | StrongBody AI",
    description: "Znajdź i konsultuj się ze zweryfikowanymi specjalistami zdrowia na całym świecie. Rezerwuj usługi, tłumacz konsultacje w czasie rzeczywistym i płać bezpiecznie dzięki escrow. Dla pacjentów w USA i na całym świecie.",
    keywords: ["usługi zdrowotne dla klientów", "telekonsultacje", "zweryfikowani lekarze USA", "konsultacja lekarska online", "bezpieczne płatności zdrowotne", "osobisty zespół opieki"],
    alternates: {
        canonical: "https://strongbody.com.pl/for-clients",
    },
    openGraph: {
        title: "Dla Klientów | Dostęp do światowej klasy usług zdrowotnych",
        description: "Przeglądaj zweryfikowanych specjalistów zdrowia, konsultuj się w swoim języku dzięki tłumaczeniu AI i płać bezpiecznie. Twoja globalna podróż po zdrowie zaczyna się tutaj.",
        url: "https://strongbody.com.pl/for-clients",
        siteName: "StrongBody AI",
        images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "StrongBody AI Dla Klientów" }],
        locale: "pl_PL",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Dla Klientów Zdrowia | StrongBody AI",
        description: "Połącz się ze zweryfikowanymi globalnymi ekspertami zdrowia w swoim języku. Bezpieczny escrow. Przejrzyste ceny.",
        images: ["/images/og-image.png"],
    },
};


export default function ForClientsPage() {
    return (
        <main className="min-h-screen pt-20">
            <ForClients />
        </main>
    );
}
