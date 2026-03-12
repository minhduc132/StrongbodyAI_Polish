import React from "react";
import Link from "next/link";
import { ShieldCheck, DollarSign, Users, Globe2, Activity, Star, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { Reveal, FadeIn } from "@/components/animations/Reveal";

const benefits = [
    { icon: <Users size={22} />, title: "Spersonalizowany Zespół Opieki", desc: "Zbuduj własny Osobisty Zespół Opieki — lekarzy, farmaceutów, specjalistów medycyny estetycznej, dietetyków, trenerów..." },
    { icon: <Activity size={22} />, title: "Elastyczne wsparcie online", desc: "Korzytaj z elastycznych konsultacji i wsparcia online w zakresie zdrowia i wellness – o każdej porze, bez czekania." },
    { icon: <Globe2 size={22} />, title: "Niedrodzy globalni eksperci", desc: "Uzyskaj dostęp do wysokiej jakości usług w przystępnych cenach od globalnych ekspertów." },
    { icon: <Star size={22} />, title: "Komunikacja w ojczystym języku", desc: "Komunikuj się bez wysiłku w swoim ojczystym języku dzięki AI Voice Translate." },
    { icon: <DollarSign size={22} />, title: "Przejrzyste oferty", desc: "Porównaj przejrzyste oferty przed podjęciem decyzji o swojej opiece." },
    { icon: <ShieldCheck size={22} />, title: "Bezpieczne Escrow i historia", desc: "Bezpieczne Escrow – płać tylko, gdy jesteś zadowolony. Pełna historia konsultacji bezpiecznie przechowywana." },
];

const ForClients = () => {
    return (
        <section id="for-clients" className="py-24 bg-grey-50">
            <Container>
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
                        Dla Klientów
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4">
                        Dlaczego mieszkańcy kochają StrongBody AI na MultiMe
                    </h2>
                    <p className="text-base text-grey-600 font-medium max-w-2xl mx-auto mb-6">
                        Jesteś idealnym kandydatem, jeśli chcesz doświadczyć opieki zdrowotnej bez granic, bez barier językowych, wysokich kosztów czy kompromisów w jakości.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                    {benefits.map((b, idx) => (
                        <Reveal key={idx} delay={idx * 0.05} className="h-full">
                            <div className="p-6 rounded-2xl bg-white border border-grey-100 hover:shadow-xl hover:border-primary/20 transition-all group h-full">
                                <div className="w-11 h-11 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                                    {b.icon}
                                </div>
                                <h4 className="text-base font-bold text-grey-900 mb-2">{b.title}</h4>
                                <p className="text-sm text-grey-500 font-medium leading-relaxed">{b.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/multime"
                        className="inline-flex items-center justify-center gap-2 bg-primary text-white px-7 py-4 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] transition-all"
                    >
                        Pobierz MultiMe AI i zbuduj swój Osobisty Zespół Opieki <ArrowRight size={16} />
                    </Link>
                </div>
            </Container>
        </section>
    );
};

export default ForClients;
