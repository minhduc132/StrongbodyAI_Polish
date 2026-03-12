import React from "react";
import Link from "next/link";
import { Search, MessageSquare, FileCheck, ShieldCheck, Play } from "lucide-react";
import Container from "@/components/layout/Container";
import { Reveal, FadeIn } from "@/components/animations/Reveal";

const steps = [
    {
        num: "01",
        title: "Pobierz i zaloguj się",
        desc: "Zainstaluj MultiMe AI → zaloguj się za pomocą konta StrongBody (automatycznie połączone).",
        icon: <Search size={26} />,
    },
    {
        num: "02",
        title: "Odkryj i czatuj głosowo",
        desc: "Znajdź ekspertów w Malezji lub na całym świecie → czatuj głosowo z tłumaczeniem w czasie rzeczywistym.",
        icon: <MessageSquare size={26} />,
    },
    {
        num: "03",
        title: "Otrzymaj przejrzystą ofertę",
        desc: "Ekspert tworzy szczegółową ofertę bezpośrednio w czacie (cena, pakiet, warunki).",
        icon: <FileCheck size={26} />,
    },
    {
        num: "04",
        title: "Bezpieczna realizacja",
        desc: "Zapłać przez Escrow → otrzymaj usługę → wystaw opinię → środki zostaną automatycznie zwolnione.",
        icon: <ShieldCheck size={26} />,
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 bg-secondary text-white overflow-hidden relative">
            <Container>
                <div className="text-center mb-16">

                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
                        Proces
                    </span>


                    <h2 className="text-3xl md:text-5xl font-bold !text-white mb-6">Jak to działa</h2>

                    <p className="text-lg !text-white/70 max-w-2xl mx-auto leading-relaxed">
                        Dostęp do globalnej wiedzy medycznej jest teraz tak prosty, jak wiadomość głosowa.
                        Postępuj zgodnie z naszym usprawnionym procesem, aby rozpocząć swoją podróż po zdrowie.
                    </p>
                    <p className="text-base text-white/70 font-medium max-w-2xl mx-auto mb-10">
                        Od odkrycia po realizację — każdy krok jest przejrzysty, bezpieczny i wspierany przez AI w aplikacji MultiMe AI.
                    </p>

                    {/* Demo Video Button */}
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-white/20 hover:border-white/30 transition-all shadow-sm"
                    >
                        <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center">
                            <Play size={14} fill="currentColor" />
                        </div>
                        Obejrzyj krótki film demonstracyjny
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, idx) => (
                        <Reveal
                            key={idx}
                            delay={idx * 0.1}
                            className="h-full"
                        >
                            <div className="bg-white/5 backdrop-blur-sm p-7 rounded-2xl border border-white/10 shadow-sm hover:shadow-lg hover:border-white/30 transition-all group relative h-full text-left">
                                <div className="text-4xl font-bold text-white/10 absolute top-5 right-5 group-hover:text-white/20 transition-colors">
                                    {step.num}
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-white/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all">
                                    {step.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-white/60 font-medium leading-relaxed text-sm">{step.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

            </Container>
        </section>
    );
};


export default HowItWorks;
