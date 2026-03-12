import React from "react";
import { Plane, Microscope, Shield, HeartPulse, Sparkles, Globe2, ChevronRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { Reveal, ScaleIn, FadeIn } from "@/components/animations/Reveal";

const useCases = [
    {
        title: "Turystyka Medyczna",
        desc: "Bezproblemowo organizuj złożone procedury w Korei lub zabiegi spa w Bangkoku ze zweryfikowanymi lokalnymi ekspertami.",
        icon: Plane,
        color: "from-primary to-primary-text"
    },
    {
        title: "Dostęp do ekspertów",
        desc: "Połącz się z dietetykami dziecięcymi lub trenerami fitness w dowolnym miejscu na świecie, natychmiast za pośrednictwem czatu AI.",
        icon: HeartPulse,
        color: "from-primary-text to-primary"
    },
    {
        title: "Bezpieczna Terapia",
        desc: "Bezpieczne, szyfrowane środowisko do szukania pomocy u zdalnych terapeutów przy zachowaniu całkowitej prywatności i dyskrecji.",
        icon: Shield,
        color: "from-primary to-primary-text"
    },
    {
        title: "Badania",
        desc: "Centra medyczne zwiększające zasięg w celu komercjalizacji przełomowych produktów na międzynarodowych rynkach docelowych.",
        icon: Microscope,
        color: "from-primary to-primary-text"
    },
    {
        title: "Opieka Kulturowa",
        desc: "Znajdź pracowników służby zdrowia o określonym pochodzeniu kulturowym, aby uzyskać dopasowane, pełne empatii wsparcie.",
        icon: Globe2,
        color: "from-primary-text to-primary"
    },
    {
        title: "Persona AI",
        desc: "Partnerzy odpowiedzialni za wyniki i doradcy ds. wellness dopasowani do Twoich celów zdrowotnych i wzorców stylu życia.",
        icon: Sparkles,
        color: "from-primary to-primary-text"
    }
];

const UseCases = () => {
    return (
        <section id="use-cases" className="py-32 bg-white relative overflow-hidden">
            <Container className="relative z-10">
                <div className="text-center mb-24">
                    <FadeIn>
                        <span className="inline-block text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4">
                            Zastosowania
                        </span>
                    </FadeIn>
                    <Reveal delay={0.1}>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8">
                            Realny wpływ
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2} className="flex justify-center">
                        <div className="h-1.5 w-20 bg-primary rounded-full" />
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {useCases.map((useCase, index) => (
                        <ScaleIn
                            key={index}
                            delay={index * 0.1}
                            className="h-full"
                        >
                            <div className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 relative flex flex-col items-start h-full">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg shadow-primary/10`}>
                                    <useCase.icon size={28} />
                                </div>

                                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-[#1c906c] transition-colors tracking-tight italic uppercase">{useCase.title}</h3>
                                <p className="text-[#1c906c] font-medium leading-relaxed mb-8 flex-grow">
                                    {useCase.desc}
                                </p>

                                <button className="flex items-center gap-2 text-[10px] font-black tracking-widest text-[#1c906c] uppercase group-hover:gap-4 transition-all">
                                    ZOBACZ SZCZEGÓŁY <ChevronRight size={14} />
                                </button>
                            </div>
                        </ScaleIn>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default UseCases;
