import React from "react";
import { Server, Scale, ShieldCheck, AlertTriangle } from "lucide-react";
import Container from "@/components/layout/Container";
import { Reveal, FadeIn } from "@/components/animations/Reveal";

const items = [
    { icon: <Server size={22} />, title: "Zgodność z ochroną danych", desc: "Przestrzeganie RODO i obowiązujących lokalnych przepisów o ochronie danych." },
    { icon: <Scale size={22} />, title: "Świadomość lokalnych regulacji", desc: "Aktywne monitorowanie zmieniających się przepisów dotyczących opieki zdrowotnej w poszczególnych jurysdykcjach." },
    { icon: <ShieldCheck size={22} />, title: "Bezpieczna infrastruktura płatnicza", desc: "Płatności Escrow za pośrednictwem zaufanych dostawców zgodnie ze standardem PCI DSS." },
];

const TrustSection = () => {
    return (
        <section className="py-24 bg-grey-50">
            <Container>
                <div className="text-center mb-14">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
                        Zgodność
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4">
                        Zaufanie, prawo i zgodność
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-5 mb-8">
                    {items.map((item, idx) => (
                        <Reveal
                            key={idx}
                            delay={idx * 0.08}
                            className="h-full"
                        >
                            <div className="bg-white p-7 rounded-2xl border border-grey-100 shadow-sm h-full">
                                <div className="w-11 h-11 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-4">
                                    {item.icon}
                                </div>
                                <h4 className="text-base font-bold text-grey-900 mb-2">{item.title}</h4>
                                <p className="text-sm text-grey-500 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Platform Disclaimer */}
                <Reveal delay={0.3}>
                    <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                            <AlertTriangle size={20} />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-grey-900 mb-1">Zastrzeżenie platformy</h4>
                            <p className="text-sm text-grey-600 font-medium leading-relaxed">
                                Ważne zastrzeżenie: StrongBody AI i MultiMe AI to platformy technologiczne łączące użytkowników z niezależnymi licencjonowanymi specjalistami. Nie świadczymy usług medycznych samodzielnie. Cała odpowiedzialność kliniczna spoczywa na zweryfikowanych Partnerach Strategicznych.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </Container>
        </section>
    );
};


export default TrustSection;
