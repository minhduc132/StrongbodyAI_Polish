import React from "react";
import Container from "@/components/layout/Container";
import { Smartphone, Globe, Shield, MessageSquare, ArrowRight, Download, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Reveal, FadeIn, ScaleIn } from "@/components/animations/Reveal";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aplikacja MultiMe AI | Jedna aplikacja, 40 języki, niekończąca się opieka zdrowotna",
    description: "Pobierz aplikację MultiMe AI, aby uzyskać dostęp do globalnych ekspertów zdrowia, tłumaczenia głosowego AI w czasie rzeczywistym, bezpiecznych płatności escrow i spersonalizowanej opieki w Twoim języku.",
    keywords: ["MultiMe AI", "aplikacja zdrowotna", "tłumaczenie głosowe AI", "aplikacja do telekonsultacji", "globalne zdrowie", "aplikacja StrongBody AI", "pobierz aplikację zdrowotną"],
    alternates: {
        canonical: "https://strongbody.com.pl/multime",
    },
    openGraph: {
        title: "Aplikacja MultiMe AI | Jedna aplikacja, 40 języki, niekończąca się opieka zdrowotna",
        description: "Pobierz MultiMe AI, aby połączyć się ze zweryfikowanymi globalnymi ekspertami zdrowia, tłumaczyć konsultacje w czasie rzeczywistym i otrzymywać opiekę we własnym języku.",
        url: "https://strongbody.com.pl/multime",
        siteName: "StrongBody AI",
        images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Aplikacja MultiMe AI od StrongBody AI" }],
        locale: "pl_PL",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "MultiMe AI | Jedna aplikacja, 40 języki, niekończąca się opieka",
        description: "Pobierz aplikację MultiMe AI — czatuj z globalnymi ekspertami zdrowia w swoim języku dzięki tłumaczeniu AI w czasie rzeczywistym.",
        images: ["/images/og-image.png"],
    },
};
const MultiMePage = () => {
    return (
        <main className="min-h-screen pt-24 pb-16 bg-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-20">
                <div className="absolute top-0 right-0 w-1/2 h-[600px] bg-primary/5 rounded-bl-[100px] -z-10 animate-pulse"></div>
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <Reveal>
                            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Super Aplikacja MultiMe AI</span>
                            <h1 className="text-4xl md:text-6xl font-bold !text-grey-900 mb-6 leading-tight">
                                Jedna aplikacja. <span className="text-primary">40 języki.</span> Niekończąca się opieka.
                            </h1>
                            <p className="text-lg text-grey-600 font-medium mb-10 leading-relaxed max-w-xl">
                                Pobierz aplikację MultiMe AI, aby odblokować pełną moc StrongBody AI. Czatuj z globalnymi ekspertami, korzystaj z tłumaczenia głosowego w czasie rzeczywistym i zarządzaj swoją podróżą po zdrowie we własnym języku.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://apps.apple.com/us/app/multime-ai/id6748796219" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-secondary text-white px-8 py-4 rounded-2xl font-bold hover:bg-secondary/90 transition-all shadow-xl">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-6" />
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.multime.app.prod" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-secondary text-white px-8 py-4 rounded-2xl font-bold hover:bg-secondary/90 transition-all shadow-xl">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-6" />
                                </a>
                            </div>
                        </Reveal>

                        <div className="relative">
                            <ScaleIn>
                                <div className="relative z-10 mx-auto w-[280px] h-[580px] bg-secondary rounded-[3rem] border-[8px] border-secondary shadow-2xl overflow-hidden">
                                    <div className="absolute top-0 inset-x-0 h-6 bg-secondary rounded-b-xl mx-auto w-1/3 z-20"></div>
                                    <img
                                        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
                                        alt="App Interface"
                                        className="w-full h-full object-cover opacity-90"
                                    />
                                </div>
                                {/* Floating Elements */}
                                <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>
                            </ScaleIn>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Features */}
            <section className="py-24 bg-grey-50">
                <Container>
                    <div className="text-center mb-16">
                        <Reveal>
                            <h2 className="text-3xl md:text-4xl font-bold !text-grey-900 mb-4">Wewnątrz aplikacji MultiMe AI</h2>
                            <p className="text-grey-500 font-medium">Wszystko, czego potrzebujesz w swojej globalnej podróży po zdrowie.</p>
                        </Reveal>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Globe className="text-primary" />,
                                title: "Tłumaczenie głosowe AI",
                                desc: "Mów naturalnie w swoim języku. Eksperci słyszą Cię w swoim. W czasie rzeczywistym, bez barier."
                            },
                            {
                                icon: <Shield className="text-primary" />,
                                title: "Bezpieczny Escrow",
                                desc: "Twoje płatności są chronione. Środki są zwalniane dopiero, gdy jesteś zadowolony z usługi."
                            },
                            {
                                icon: <MessageSquare className="text-primary" />,
                                title: "Bezpośredni czat w Hubie",
                                desc: "Konsultacje jeden na jeden ze zweryfikowanymi lekarzami, farmaceutami i specjalistami z całego świata."
                            }
                        ].map((feature, idx) => (
                            <Reveal key={idx} delay={idx * 0.1}>
                                <div className="bg-white p-8 rounded-[2rem] border border-grey-100 shadow-sm hover:shadow-xl transition-all duration-300">
                                    <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center mb-6">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold !text-grey-900 mb-3">{feature.title}</h3>
                                    <p className="text-grey-600 font-medium leading-relaxed">{feature.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Call to Action */}
            <section className="py-24">
                <Container>
                    <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold !text-white mb-6">Doświadcz przyszłości już dziś.</h2>
                            <p className="text-white/80 text-lg font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
                                Darmowe pobieranie. Darmowe dołączenie. Płać tylko za wybrane usługi zdrowotne.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link
                                    href="https://www.strongbody.ai/signup"
                                    className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-grey-50 transition-all flex items-center gap-2 shadow-xl shadow-white/10"
                                >
                                    Stwórz darmowe konto <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
};

export default MultiMePage;
