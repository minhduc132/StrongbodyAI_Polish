import PageHeader from "@/components/layout/PageHeader";
import UseCases from "@/components/sections/marketplace/UseCases";
import ServiceCards from "@/components/sections/marketplace/ServiceCards";
import { Quote } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Przykłady użycia w świecie rzeczywistym | StrongBody AI w akcji",
    description: "Zobacz, jak szpitale, kliniki, apteki i indywidualni praktycy wykorzystują StrongBody AI, aby zwiększyć zasięg, zabezpieczyć przychody i zapewniać lepsze wyniki leczenia pacjentów na całym świecie.",
    keywords: ["przykłady użycia w opiece zdrowotnej", "studia przypadków StrongBody AI", "cyfrowe rozwiązania zdrowotne", "wdrożenie telemedycyny", "ROI w opiece zdrowotnej AI"],
    alternates: {
        canonical: "https://strongbody.ai/use-cases",
    },
    openGraph: {
        title: "Przykłady użycia w świecie rzeczywistym | StrongBody AI w akcji",
        description: "Dowiedz się, jak różne organizacje zajmujące się opieką zdrowotną wykorzystują StrongBody AI, aby zapewniać lepsze wyniki leczenia pacjentów i odblokowywać globalne przychody.",
        url: "https://strongbody.ai/use-cases",
        siteName: "StrongBody AI",
        images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Przykłady użycia StrongBody AI" }],
        locale: "pl_PL",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Prawdziwe przykłady użycia technologii zdrowotnych | StrongBody AI",
        description: "Jak szpitale, kliniki i specjaliści wykorzystują StrongBody AI, aby rozwijać się globalnie i służyć większej liczbie pacjentów.",
        images: ["/images/og-image.png"],
    },
};

export default function UseCasesPage() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="Prawdziwe przykłady użycia"
                description="Zobacz, jak StrongBody AI jest wykorzystywane w różnych skalach i sektorach opieki zdrowotnej."
                breadcrumb="Wpływ"
            />

            <UseCases />

            {/* Testimonial / Story Section */}
            <section className="py-24 bg-primary text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                    <Quote size={200} />
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12">Historia sukcesu: Metro General Hospital</h2>
                    <blockquote className="text-2xl md:text-3xl italic font-serif leading-relaxed mb-10">
                        "Wdrożenie StrongBody AI skróciło czas oczekiwania na diagnozę o 40% i otworzyło nowy strumień przychodów dzięki sieci konsultacji eksperckich. To była najbardziej wpływowa inwestycja technologiczna, jakiej dokonaliśmy w tej dekadzie."
                    </blockquote>
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 bg-white rounded-full mb-4 flex items-center justify-center text-primary font-bold text-2xl shadow-xl">
                            JD
                        </div>
                        <div className="text-xl font-bold">Dr James Doe</div>
                        <div className="text-red-300">Szef Innowacji, Metro General</div>
                    </div>
                </div>
            </section>

            <div className="bg-slate-50 py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-0 mt-12">
                        <h2 className="text-3xl font-bold text-slate-900">Powiązane modele</h2>
                    </div>
                </div>
                <ServiceCards />
            </div>
        </main>
    );
}
