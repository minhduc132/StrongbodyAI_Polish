import PageHeader from "@/components/layout/PageHeader";
import { ArrowRight, Building2, UserPlus, Zap } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Modele Partnerstwa | Współpraca ze StrongBody AI",
    description: "Poznaj elastyczne modele partnerskie dla szpitali, klinik, marek farmaceutycznych i organizacji danych, aby wykorzystać cyfrową infrastrukturę zdrowotną i globalny zasięg StrongBody AI.",
    keywords: ["modele partnerstwa zdrowotnego", "partnerstwo ze szpitalem", "współpraca z kliniką", "cyfrowe zdrowie w farmacji", "StrongBody AI B2B", "partnerstwo w infrastrukturze zdrowotnej"],
    alternates: {
        canonical: "https://strongbody.ai/partnership-models",
    },
    openGraph: {
        title: "Modele Partnerstwa | StrongBody AI",
        description: "Elastyczne struktury współpracy dla szpitali, klinik, firm farmaceutycznych i organizacji zdrowotnych w celu skalowania globalnego poprzez infrastrukturę StrongBody AI.",
        url: "https://strongbody.ai/partnership-models",
        siteName: "StrongBody AI",
        images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Modele Partnerstwa StrongBody AI" }],
        locale: "pl_PL",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Modele Partnerstwa | StrongBody AI",
        description: "Elastyczne modele współpracy B2B dla szpitali, klinik i organizacji zdrowotnych.",
        images: ["/images/og-image.png"],
    },
};


export default function PartnershipModelsPage() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="Modele Partnerstwa"
                description="Elastyczne struktury współpracy zaprojektowane tak, aby pasowały do celów i skali Twojej organizacji."
                breadcrumb="Partnerstwo"
            />

            {/* Path to Partnership */}
            <section className="py-24 text-white rounded-[4rem] mx-4 my-12 overflow-hidden relative" style={{ background: 'var(--brand-gradient)' }}>
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-16">Jak zostać partnerem</h2>

                    <div className="grid md:grid-cols-3 gap-12 text-left">
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                                <Building2 className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">1. Zgłoszenie</h3>
                            <p className="text-white text-lg">Prześlij szczegóły swojej organizacji i cele za pośrednictwem naszego portalu zgłoszeniowego.</p>
                        </div>

                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-primary-text rounded-2xl flex items-center justify-center shadow-lg shadow-primary-text/20">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">2. Integracja</h3>
                            <p className="text-white text-lg">Nasz zespół techniczny pomaga w połączeniu Twoich istniejących systemów ze StrongBody AI.</p>
                        </div>

                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                                <UserPlus className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">3. Start</h3>
                            <p className="text-white text-lg">Uruchom swoje zweryfikowane konto i zacznij łączyć użytkowników z ekspertami opieki zdrowotnej.</p>
                        </div>
                    </div>

                    <div className="mt-20">
                        <Link href="/contact" className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-primary/90 transition-all">
                            Rozpocznij swoje zgłoszenie <ArrowRight className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
