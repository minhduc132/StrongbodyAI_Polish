import FAQSection from "@/components/sections/marketplace/FAQSection";
import PageHeader from "@/components/layout/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ | Centrum Pomocy StrongBody AI",
    description: "Uzyskaj odpowiedzi na najczęściej zadawane pytania dotyczące rynku StrongBody AI, płatności, weryfikacji specjalistów i tego, jak zacząć.",
    keywords: ["StrongBody AI FAQ", "pytania o rynek zdrowia", "FAQ płatności escrow", "FAQ zweryfikowani lekarze", "jak korzystać ze StrongBody AI"],
    alternates: {
        canonical: "https://strongbody.ai/faq",
    },
    openGraph: {
        title: "FAQ | Centrum Pomocy StrongBody AI",
        description: "Wszystko, co musisz wiedzieć o korzystaniu ze StrongBody AI — płatności, weryfikacja specjalistów, opieka transgraniczna i rozstrzyganie sporów.",
        url: "https://strongbody.ai/faq",
        siteName: "StrongBody AI",
        images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "StrongBody AI FAQ" }],
        locale: "pl_PL",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "FAQ | Centrum Pomocy StrongBody AI",
        description: "Odpowiedzi na pytania dotyczące płatności, weryfikacji specjalistów, opieki transgranicznej i nie tylko.",
        images: ["/images/og-image.png"],
    },
};


export default function FAQPage() {
    return (
        <main className="bg-white">
            <PageHeader
                title="FAQ i Centrum Pomocy"
                description="Wszystko, co musisz wiedzieć o korzystaniu z rynku StrongBody AI, płatnościach i weryfikacji specjalistów."
                breadcrumb="FAQ"
            />
            <FAQSection />
            <div className="bg-white py-12"></div>
        </main>
    );
}
