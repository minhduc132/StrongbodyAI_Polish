import React from "react";
import { FAQAccordion } from "./FAQAccordion";

interface FAQItem {
    q: string;
    a: string;
}

const FAQSection = async () => {
    const clientFAQs: FAQItem[] = [
        {
            q: "Czy StrongBody AI to szpital?",
            a: "Nie. StrongBody AI to platforma technologiczna typu marketplace, która łączy klientów z niezależnie zweryfikowanymi specjalistami ds. zdrowia. Zapewniamy infrastrukturę – nie świadczymy usług medycznych."
        },
        {
            q: "Jak płacić za usługi?",
            a: "Za pośrednictwem naszego bezpiecznego systemu escrow. Środki są bezpiecznie przechowywane i zwalniane dla specjalisty dopiero po potwierdzeniu wykonania usługi."
        },
        {
            q: "Czy mogę wybrać specjalistę z innego kraju?",
            a: "Tak. StrongBody AI umożliwia globalne połączenia. Możesz przeglądać i konsultować się ze specjalistami z całego świata dzięki tłumaczowi AI w czasie rzeczywistym."
        },
        {
            q: "Co jeśli dojdzie do sporu?",
            a: "Nasz przejrzysty system rozstrzygania sporów wspiera obie strony. Środki w systemie escrow są zamrożone do czasu sprawiedliwego rozwiązania sprawy."
        }
    ];

    const partnerFAQs: FAQItem[] = [
        {
            q: "Jakie są wymagania, aby dołączyć?",
            a: "Musisz posiadać ważną licencję zawodową, przejść nasz proces weryfikacji poświadczeń i zgodzić się na standardy etyczne naszej platformy w drodze selektywnego przeglądu."
        },
        {
            q: "Jakie są opłaty platformowe?",
            a: "Opłaty platformowe są konkurencyjne i dotyczą wyłącznie zrealizowanych transakcji. Nie ma żadnych opłat wstępnych ani ukrytych kosztów."
        },
        {
            q: "Czy StrongBody AI weryfikuje poświadczenia?",
            a: "Tak. Każdy partner przechodzi rygorystyczną weryfikację uprawnień i licencji w ramach naszego procesu selektywnej rekrutacji."
        },
        {
            q: "Czy mam pełną kontrolę nad swoimi cenami?",
            a: "Absolutnie. Sam ustalasz opłaty za swoje usługi i konfigurujesz własne Oferty. Pełna autonomia w zakresie wyceny i świadczenia usług."
        }
    ];

    return (
        <section className="py-24 bg-white border-t border-grey-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-14">
                    <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
                        Pomoc
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-p">
                        Najczęściej zadawane pytania
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-sm font-bold text-text-p mb-4 flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            Dla Klientów
                        </h3>
                        <FAQAccordion items={clientFAQs} />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-text-p mb-4 flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            Dla Partnerów
                        </h3>
                        <FAQAccordion items={partnerFAQs} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;


