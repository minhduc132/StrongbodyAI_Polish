import PageHeader from "@/components/layout/PageHeader";
import Ecosystem from "@/components/sections/marketing/Ecosystem";
import WhyUs from "@/components/sections/marketing/WhyUs";
import { Link2, Globe, Sparkles } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Globalny Ekosystem Zdrowia | StrongBody AI",
    description: "Poznaj globalny ekosystem zdrowia StrongBody AI — sieć bez granic łączącą zweryfikowanych specjalistów, szpitale i organizacje zdrowotne z pacjentami w 194 krajach.",
    keywords: ["globalny ekosystem zdrowia", "StrongBody AI", "sieć zdrowia", "cyfrowe zdrowie", "opieka zdrowotna AI", "międzynarodowa medycyna"],
    alternates: {
        canonical: "https://strongbody.ai/ecosystem",
    },
    openGraph: {
        title: "Globalny Ekosystem Zdrowia | StrongBody AI",
        description: "Sieć bez granic łącząca zweryfikowanych specjalistów, szpitale i organizacje zdrowotne z pacjentami w 194 krajach.",
        url: "https://strongbody.ai/ecosystem",
        siteName: "StrongBody AI",
        images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Globalny Ekosystem Zdrowia StrongBody AI" }],
        locale: "pl_PL",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Globalny Ekosystem Zdrowia | StrongBody AI",
        description: "Sieć bez granic łącząca zweryfikowanych specjalistów z pacjentami w 194 krajach.",
        images: ["/images/og-image.png"],
    },
};

export default function EcosystemPage() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="Globalny Ekosystem Zdrowia"
                description="Budujemy fundament dla kolejnej generacji łączności w opiece zdrowotnej."
                breadcrumb="Ekosystem"
            />

            <Ecosystem />

            {/* Network Stats Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <img
                                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200"
                                alt="Globalna Sieć Opieki Zdrowotnej"
                                className="rounded-[3rem] shadow-2xl border-8 border-white"
                            />
                        </div>
                        <div className="order-1 md:order-2 space-y-8">
                            <h2 className="text-4xl font-bold text-slate-900 leading-tight">Sieć doskonałości w opiece zdrowotnej bez granic</h2>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                Nasz ekosystem łączy odrębne organizacje zdrowotne w ujednoliconą, wysokowydajną sieć. Dzieląc się spostrzeżeniami z danych i zasobami eksperckimi, podnosimy standard opieki na całym świecie.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary-text shrink-0">
                                        <Globe size={24} />
                                    </div>
                                    <span className="text-lg font-bold text-slate-800">Działamy w ponad 15+ krajach</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary-text shrink-0">
                                        <Link2 size={24} />
                                    </div>
                                    <span className="text-lg font-bold text-slate-800">Zintegrowani z ponad 200+ systemami EHR</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 shrink-0">
                                        <Sparkles size={24} />
                                    </div>
                                    <span className="text-lg font-bold text-slate-800">Przetworzono ponad 10mln+ diagnoz AI</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WhyUs />
        </main>
    );
}
