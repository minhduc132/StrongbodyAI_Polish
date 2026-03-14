import React from "react";
import { Cpu, FileText, Smartphone, Globe2, BarChart3 } from "lucide-react";
import Container from "@/components/layout/Container";
import { Reveal, FadeIn } from "@/components/animations/Reveal";

const differentiators = [
    {
        icon: <Cpu size={26} />,
        title: "Prawdziwe AI-Native doświadczenie głosowe od pierwszego dnia",
        desc: "Zbudowane wokół tłumaczenia głosowego AI — mów naturalnie w dowolnym języku.",
    },
    {
        icon: <FileText size={26} />,
        title: "Handel oparty na ofertach i Escrow",
        desc: "Unikalne w aplikacjach czatowych: płynne profesjonalne transakcje połączone z żelazną ochroną Escrow.",
    },
    {
        icon: <Smartphone size={26} />,
        title: "Jedno konto, jedna aplikacja",
        desc: "StrongBody + Globalna Sieć Głosowa — zarządzaj wszystkim z jednego bezpiecznego konta.",
    },
    {
        icon: <Globe2 size={26} />,
        title: "Moc ponadgraniczna",
        desc: "Eksperci w Malezji docierają do klientów premium z całego świata łatwo i skutecznie.",
    },
    {
        icon: <BarChart3 size={26} />,
        title: "Ustrukturyzowana reputacja",
        desc: "Budowana poprzez głos i prawdziwe opinie, utrzymująca wysoki poziom zaufania w czasie.",
    }
];

const WhyDifferent = () => {
    return (
        <section className="py-24 text-white overflow-hidden relative bg-secondary">
            <div className="absolute top-0 right-0 w-[60%] h-full bg-white/5 skew-x-12 translate-x-1/3"></div>

            <Container className="relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
                        Różnica
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Dlaczego StrongBody AI jest wyjątkowe
                    </h2>
                    <p className="text-base text-white font-medium max-w-2xl mx-auto">
                        Nie jesteśmy kolejnym katalogiem placówek medycznych. StrongBody AI to kompletna infrastruktura handlowa zaprojektowana dla nowoczesnych usług zdrowotnych.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
                    {differentiators.map((item, idx) => (
                        <Reveal
                            key={idx}
                            delay={idx * 0.06}
                            className="h-full"
                        >
                            <div className="p-7 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all group h-full">
                                <div className="w-12 h-12 rounded-xl bg-white/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg font-bold mb-2 text-white">{item.title}</h4>
                                <p className="text-sm text-white font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
};


export default WhyDifferent;
