import React from "react";
import { Hospital, Pill, HeartPulse, HardDrive, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { Reveal, FadeIn } from "@/components/animations/Reveal";

const models = [
    {
        title: "CARE",
        subtitle: "Szpitale i kliniki",
        description: "Wyposaż swoją placówkę medyczną w narzędzia AI, aby lepiej służyć pacjentom i optymalizować operacje.",
        features: ["Zdalne monitorowanie pacjenta", "Wsparcie diagnostyczne AI"],
        icon: Hospital,
        color: "bg-primary",
        link: "/partnership-models",
        btnText: "Poznaj platformę"
    },
    {
        title: "WELLNESS",
        subtitle: "Farmacja i marki",
        description: "Połącz swoje produkty medyczne z użytkownikami, którzy najbardziej ich potrzebują, za pośrednictwem naszej zweryfikowanej przez ekspertów platformy.",
        features: ["Bezpośrednie kierowanie do użytkowników", "Weryfikacja ekspercka"],
        icon: Pill,
        color: "bg-primary-text",
        link: "/partnership-models",
        btnText: "Dołącz do sieci"
    },
    {
        title: "CARE+",
        subtitle: "Opieka długoterminowa",
        description: "Specjalistyczne rozwiązania dla opieki nad osobami starszymi i zarządzania chorobami przewlekłymi poprzez inteligentny monitoring IoT.",
        features: ["Alerty w czasie rzeczywistym", "Wnioski zdrowotne"],
        icon: HeartPulse,
        color: "bg-primary",
        link: "/partnership-models",
        btnText: "Partneruj teraz"
    },
    {
        title: "DATA",
        subtitle: "Organizacje danych",
        description: "Wykorzystaj anonimizowane dane dotyczące opieki zdrowotnej do budowy modeli i poprawy globalnych wyników zdrowotnych.",
        features: ["Zgodne zestawy danych", "Wnioski badawcze"],
        icon: HardDrive,
        color: "bg-primary",
        link: "/partnership-models",
        btnText: "Uzyskaj dostęp do danych"
    }
];

const ServiceCards = () => {
    return (
        <section id="models" className="py-24 relative overflow-hidden" style={{ background: 'var(--brand-gradient)' }}>
            <Container className="relative z-10">
                <div className="text-center mb-20">
                    <FadeIn>
                        <span className="inline-block text-white font-bold tracking-[0.2em] text-sm uppercase mb-4">
                            Nasz Ekosystem
                        </span>
                    </FadeIn>
                    <Reveal delay={0.1}>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                            Modele Partnerstwa
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2} className="flex justify-center">
                        <div className="h-1.5 w-20 bg-white rounded-full" />
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {models.map((model, index) => (
                        <Reveal
                            key={index}
                            delay={index * 0.1}
                            className="h-full"
                        >
                            <div className="group relative h-full flex flex-col p-10 rounded-[3rem] bg-white border border-slate-100 hover:border-primary/30 transition-all hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.08)]">
                                <div className={`${model.color} w-16 h-16 rounded-3xl flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg shadow-current/20`}>
                                    <model.icon size={30} />
                                </div>

                                <span className="text-[10px] font-black text-[#1c906c] tracking-[0.3em] uppercase mb-2 opacity-70">{model.title}</span>
                                <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight">{model.subtitle}</h4>
                                <p className="text-primary-text text-sm leading-relaxed mb-8 font-medium">
                                    {model.description}
                                </p>

                                <div className="space-y-3 mb-10 mt-auto">
                                    {model.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-xs font-bold text-slate-600">
                                            <div className="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center text-primary-text">
                                                <Check size={12} strokeWidth={4} />
                                            </div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={model.link}
                                    className="inline-flex items-center justify-between w-full bg-slate-50 group-hover:bg-primary group-hover:text-white p-5 rounded-2xl text-primary-text font-black text-sm transition-all"
                                >
                                    {model.btnText} <ArrowUpRight size={18} />
                                </Link>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ServiceCards;
