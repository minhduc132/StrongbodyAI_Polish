"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Scale, Server, AlertTriangle } from "lucide-react";
// Note: metadata cannot be exported from a 'use client' page directly
// SEO is handled via the root layout and page title


const sections = [
    {
        icon: <Server size={24} />,
        title: "Zgodność z ochroną danych",
        content: "StrongBody AI zobowiązuje się do ochrony Twoich danych osobowych. Nasza platforma przestrzega obowiązujących przepisów o ochronie danych w USA, w tym przepisów dotyczących prywatności na poziomie stanowym. Wdrażamy standardowe w branży szyfrowanie, kontrole dostępu i regularne audyty bezpieczeństwa w celu ochrony Twoich informacji."
    },
    {
        icon: <Scale size={24} />,
        title: "Świadomość regulacji lokalnych",
        content: "Aktywnie monitorujemy i dostosowujemy się do zmieniających się przepisów dotyczących opieki zdrowotnej we wszystkich jurysdykcjach, w których działamy. Nasz zespół ds. zgodności dba o to, aby infrastruktura naszego rynku była zgodna z wymogami federalnymi i stanowymi, w tym dotyczącymi usług telemedycznych i cyfrowych usług zdrowotnych."
    },
    {
        icon: <ShieldCheck size={24} />,
        title: "Bezpieczna infrastruktura płatnicza",
        content: "Wszystkie transakcje finansowe w StrongBody AI są przetwarzane za pośrednictwem naszego bezpiecznego systemu płatności escrow. Środki są przetrzymywane na chronionych kontach i zwalniane dopiero po potwierdzeniu wykonania usługi. Nasza infrastruktura płatnicza spełnia standardy zgodności PCI DSS."
    },
    {
        icon: <AlertTriangle size={24} />,
        title: "Zastrzeżenie platformy",
        content: "StrongBody AI to technologiczna platforma handlowa. Nie świadczymy bezpośrednio usług medycznych, porad medycznych ani leczenia klinicznego. Wszystkie usługi zdrowotne wymienione na naszej platformie są świadczone przez niezależnych, zweryfikowanych profesjonalistów, którzy utrzymują własną odpowiedzialność zawodową. StrongBody AI ułatwia nawiązywanie kontaktów, zapewnia infrastrukturę transakcyjną i narzędzia komunikacyjne — profesjonaliści ponoszą wyłączną odpowiedzialność za świadczone przez siebie usługi medyczne."
    },
];

export default function LegalPage() {
    return (
        <main className="min-h-screen pt-20">
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block"
                        >
                            Zgodność
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-black text-slate-900 mb-4"
                        >
                            Zaufanie, Prawo i Zgodność
                        </motion.h1>
                        <p className="text-lg text-slate-500 font-medium max-w-2xl">
                            Przejrzystość i zaufanie są fundamentem naszej platformy. Oto jak chronimy naszych użytkowników i partnerów.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {sections.map((section, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className={`p-8 rounded-2xl border ${idx === sections.length - 1 ? "bg-amber-50 border-amber-100" : "bg-slate-50 border-slate-100"}`}
                            >
                                <div className="flex items-start gap-5">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${idx === sections.length - 1 ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-primary"}`}>
                                        {section.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">{section.title}</h3>
                                        <p className="text-slate-600 font-medium leading-relaxed">{section.content}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
