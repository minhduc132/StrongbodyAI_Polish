import React from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Star, ShieldCheck, MapPin, Clock } from "lucide-react";
import Container from "@/components/layout/Container";

interface ServiceDetailViewProps {
    service: any;
}

export default function ServiceDetailView({ service }: ServiceDetailViewProps) {
    const title = service.title;
    const content = service.content || service.details?.content || service.desc || "<p>Wkrótce...</p>";
    const image = service.featured_image_url || service.image;
    const tag = service.category?.name || service.tag;

    // JSON-LD for health service
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        name: title,
        description: service.excerpt || service.desc || "",
        image: image || "/images/og-image.png",
        medicalSpecialty: tag || "General Medicine",
        availableService: {
            "@type": "MedicalTherapy",
            name: title,
        },
        provider: {
            "@type": "Organization",
            name: "StrongBody AI",
            url: "https://strongbody.ai",
        },
    };

    return (
        <main className="min-h-screen bg-slate-50 pt-24 pb-24 text-grey-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
            />
            <Container>
                {/* Back Link */}
                <div className="mb-8">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-grey-600 font-bold hover:text-primary transition-colors text-sm"
                    >
                        <ArrowLeft size={16} />
                        Powrót do usług
                    </Link>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Left/Main Content */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-sm mb-8">
                            {tag && (
                                <div className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mb-6">
                                    <Star size={14} className="fill-primary text-primary" />
                                    {tag}
                                </div>
                            )}

                            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                                {title}
                            </h1>

                            <div
                                className="text-lg text-slate-600 font-medium leading-relaxed mb-8 prose prose-lg prose-grey max-w-none"
                                dangerouslySetInnerHTML={{ __html: content }}
                            />

                            {image && (
                                <div className="w-full h-[400px] rounded-2xl overflow-hidden mb-8">
                                    <img src={image} alt={title} className="w-full h-full object-cover" />
                                </div>
                            )}

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-black text-slate-900 mb-4">Czego można się spodziewać</h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Zweryfikowani specjaliści medyczni i wellness z najwyższej półki.",
                                            "Bezpieczna komunikacja i platforma zgodna ze standardami bezpieczeństwa.",
                                            "Przejrzyste ceny dzięki naszemu systemowi płatności chronionemu przez Escrow.",
                                            "Opcja dopasowania wspomaganego przez AI dla znalezienia idealnego specjalisty opieki."
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3 text-slate-600 font-medium">
                                                <CheckCircle2 size={20} className="text-[#1c906c] shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                    <h4 className="text-lg font-bold text-slate-900 mb-2">Nasze zaangażowanie w jakość</h4>
                                    <p className="text-sm text-slate-600 font-medium leading-relaxed">
                                        Każdy specjalista oferujący {title.toLowerCase()} przeszedł rygorystyczny proces weryfikacji. Zapewniamy jakość, bezpieczeństwo i poufność w każdej interakcji za pośrednictwem StrongBody AI.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right/Sidebar Content */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 space-y-6">
                            {/* Booking Widget */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
                                <h3 className="text-2xl font-black text-slate-900 mb-6">Gotowy, aby zacząć?</h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                                            <ShieldCheck size={18} />
                                        </div>
                                        Zweryfikowani specjaliści
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                                            <Clock size={18} />
                                        </div>
                                        Elastyczne planowanie
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                                            <MapPin size={18} />
                                        </div>
                                        Dostępne w ponad 15 stanach
                                    </div>
                                </div>

                                <Link
                                    href="/contact"
                                    className="block w-full text-center bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all mb-4"
                                >
                                    Zarezerwuj konsultację
                                </Link>

                                <p className="text-xs text-center text-slate-500 font-medium">
                                    Zwykle odpowiada w ciągu 2 godzin
                                </p>
                            </div>

                            {/* Need Help */}
                            <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 text-center text-grey-900">
                                <h4 className="text-lg font-black text-slate-900 mb-2">Potrzebujesz pomocy?</h4>
                                <p className="text-sm text-slate-600 font-medium mb-6">
                                    Nasz zespół wsparcia jest tutaj, aby pomóc Ci znaleźć odpowiedniego specjalistę.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-block text-primary font-bold text-sm bg-white px-6 py-2 rounded-full shadow-sm hover:shadow-md transition-all"
                                >
                                    Skontaktuj się ze wsparciem
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}
