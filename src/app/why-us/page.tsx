import PageHeader from "@/components/layout/PageHeader";
import WhyUs from "@/components/sections/marketing/WhyUs";
import MedicalExperts from "@/components/sections/marketplace/MedicalExperts";
import { CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dlaczego StrongBody AI? | Przyszłość usług zdrowotnych",
    description: "Dowiedz się, dlaczego StrongBody AI to najbardziej zaufany rynek usług zdrowotnych oparty na sztucznej inteligencji. Zweryfikowani specjaliści, bezpieczne escrow, tłumaczenie głosowe AI i globalny dostęp — wszystko na jednej platformie.",
    keywords: ["dlaczego StrongBody AI", "najlepsza platforma telemedyczna", "rynek zdrowia AI", "zweryfikowani lekarze online", "bezpieczne płatności za zdrowie", "innowacja w zdrowiu"],
    alternates: {
        canonical: "https://strongbody.ai/why-us",
    },
    openGraph: {
        title: "Dlaczego StrongBody AI? | Przyszłość usług zdrowotnych",
        description: "Zweryfikowani specjaliści, bezpieczne płatności escrow, tłumaczenie głosowe AI i globalny dostęp. Dowiedz się, dlaczego StrongBody AI jest wiodącym rynkiem zdrowia opartym na sztucznej inteligencji.",
        url: "https://strongbody.ai/why-us",
        siteName: "StrongBody AI",
        images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Dlaczego StrongBody AI" }],
        locale: "pl_PL",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Dlaczego StrongBody AI? | Zaufana globalna platforma zdrowia",
        description: "Zweryfikowani specjaliści, bezpieczne escrow, tłumaczenie AI. Rynek usług zdrowotnych oparty na sztucznej inteligencji.",
        images: ["/images/og-image.png"],
    },
};

export default function WhyUsPage() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="Dlaczego StrongBody AI?"
                description="Dowiedz się, jak nasz zaawansowany ekosystem AI przekształca świadczenie opieki zdrowotnej i tworzy zrównoważony wzrost dla naszych partnerów."
                breadcrumb="Dlaczego my"
            />

            <WhyUs />

            {/* Exclusive Benefits Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Ekskluzywne korzyści dla partnerów</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Dołączenie do naszego ekosystemu to coś więcej niż tylko technologia; to przewaga konkurencyjna.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Bezpośrednie strumienie przychodów", desc: "Zarabiaj na swojej bazie użytkowników bezpośrednio poprzez konsultacje eksperckie i usługi zdrowotne." },
                            { title: "Diagnostyka oparta na AI", desc: "Uzyskaj dostęp do najnowocześniejszych narzędzi AI, które pomagają w szybszej i dokładniejszej ocenie stanu zdrowia." },
                            { title: "Globalny dostęp do sieci", desc: "Połącz się z najlepszymi ekspertami medycznymi i instytucjami na całym świecie." },
                            { title: "Efektywność operacyjna", desc: "Automatyzuj rutynowe zadania i usprawniaj przepływy pracy w zarządzaniu pacjentami." },
                            { title: "Bezpieczeństwo danych", desc: "W pełni zgodne z międzynarodowymi standardami danych medycznych i protokołami bezpieczeństwa." },
                            { title: "Skalowalna infrastruktura", desc: "Nasza platforma rośnie wraz z Tobą, wspierając zarówno małe kliniki, jak i potężne sieci szpitali." }
                        ].map((benefit, idx) => (
                            <div key={idx} className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all group">
                                <CheckCircle2 className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                                <p className="text-slate-600">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <MedicalExperts />
        </main>
    );
}
