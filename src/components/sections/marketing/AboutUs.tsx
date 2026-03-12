import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { Reveal, FadeIn } from "@/components/animations/Reveal";
import Link from "next/link";

const AboutSection = () => {
    return (
        <section id="multime-ai-app" className="pt-12 pb-24 bg-white">
            <Container>
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Aplikacja MultiMe AI</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4 leading-tight">
                        Dlaczego warto pobrać aplikację MultiMe AI?
                    </h2>
                    <h3 className="text-xl font-bold text-grey-700 mb-4">
                        Jedyna aplikacja, której potrzebujesz, aby w pełni korzystać z StrongBody AI.
                    </h3>
                    <p className="text-base text-grey-600 mb-8 leading-relaxed font-medium max-w-2xl mx-auto">
                        Jedno konto – bezproblemowy dostęp do tłumaczenia głosowego, ofert, escrow i Twojego Osobistego Zespołu Opieki.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Block 1 */}
                    <Reveal delay={0.1}>
                        <div className="p-8 rounded-3xl bg-grey-50 border border-grey-100 h-full flex flex-col">
                            <h4 className="text-xl font-bold text-grey-900 mb-4">
                                Dla Klientów – Otrzymaj opiekę światowej klasy w swoim własnym języku
                            </h4>
                            <p className="text-sm font-bold text-grey-600 mb-6">Otrzymujesz:</p>
                            <ul className="space-y-4 mb-8 flex-1">
                                {[
                                    "Tłumaczenie głosowe AI w czasie rzeczywistym: Mów w swoim lokalnym języku – eksperci słyszą i odpowiadają w swoim natychmiastowo.",
                                    "Zbuduj swój spersonalizowany Osobisty Zespół Opieki w kilka minut (lekarze + farmaceuci + dietetycy + trenerzy + specjaliści medycyny estetycznej…).",
                                    "Porównuj przejrzyste oferty od tysięcy globalnych ekspertów.",
                                    "Bezpieczne płatności Escrow – pieniądze są zwalniane dopiero, gdy jesteś w 100% zadowolony.",
                                    "Zarządzaj pełną historią konsultacji, wynikami i zespołem opieki w jednej aplikacji.",
                                    "Elastyczne usługi 24/7 w przystępnych cenach (często o 40-70% taniej niż lokalne opcje)."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm text-grey-600 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/multime"
                                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all shadow-lg hover:shadow-primary/30"
                            >
                                Pobierz MultiMe AI i zbuduj swój Osobisty Zespół Opieki
                            </Link>
                        </div>
                    </Reveal>

                    {/* Block 2 */}
                    <Reveal delay={0.2}>
                        <div className="p-8 rounded-3xl text-white h-full flex flex-col bg-secondary border border-grey-800 shadow-xl">
                            <h4 className="text-xl font-bold mb-4 !text-white">
                                Dla Specjalistów Zdrowia – Zamień swoją wiedzę w globalne przychody
                            </h4>
                            <p className="text-sm font-bold text-white/70 mb-6">Zyskujesz możliwość natychmiastowej globalizacji sprzedaży swoich usług:</p>
                            <ul className="space-y-4 mb-8 flex-1">
                                {[
                                    "Dotrzyj do dziesiątek milionów dobrze płacących klientów z USA, Wielkiej Brytanii, UE, Kanady, Australii… bez wydawania na reklamy.",
                                    "Tłumaczenie głosowe AI sprawia, że klienci międzynarodowi rozumieją Cię idealnie – nawet jeśli mówisz tylko w swoim lokalnym języku.",
                                    "Twórz profesjonalne oferty (cena, pakiet, harmonogram, warunki) bezpośrednio podczas rozmów głosowych.",
                                    "Otrzymuj bezpieczne płatności Escrow – wypłacaj środki na swoje konto w zaledwie 30 minut.",
                                    "Buduj silną markę osobistą poprzez Voice Hub – Twoją osobistą „stację radiową” automatycznie tłumaczoną na 194 języki.",
                                    "Zatrzymaj 80% przychodów (tylko 20% opłaty platformowej) od klientów premium z całego świata.",
                                    "Aktywnie docieraj do potencjalnych klientów poprzez Active Message + Voice Hub – sprzedawaj usługi globalnie 24/7 prosto z domu."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                                        <span className="text-sm text-white/90 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/multime"
                                className="w-full inline-flex items-center justify-center gap-2 bg-white text-secondary px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all shadow-lg hover:bg-white/90"
                            >
                                Pobierz MultiMe AI i zacznij obsługiwać globalnych klientów
                            </Link>
                        </div>
                    </Reveal>
                </div>

            </Container>
        </section>
    );
};

export default AboutSection;
