import React from "react";
import Container from "@/components/layout/Container";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

const PartnershipFramework = () => {
    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Zasady</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-text-p mb-6">Zasady partnerstwa</h2>
                        <p className="text-text-m font-medium mb-8 leading-relaxed">
                            StrongBody AI działa jako dostawca infrastruktury handlowej opartej na technologii. Oto co to oznacza dla naszych partnerów:
                        </p>

                        <div className="space-y-4">
                            <div className="p-5 rounded-2xl bg-grey-50 border border-grey-200">
                                <h4 className="font-bold text-text-p mb-2 text-xl">Partnerzy zachowują pełną niezależność</h4>
                                <ul className="space-y-2 text-sm text-text-m font-medium">
                                    <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /> Pełna autonomia zawodowa w zakresie świadczonych usług</li>
                                    <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /> Całkowita kontrola nad cenami i konfiguracją usług</li>
                                    <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /> Odpowiedzialność zawodowa zgodnie z lokalnymi przepisami</li>
                                </ul>
                            </div>
                            <div className="p-5 rounded-2xl bg-grey-50 border border-grey-200">
                                <h4 className="font-bold text-text-p mb-2">Platforma zapewnia</h4>
                                <ul className="space-y-2 text-sm text-text-m font-medium">
                                    <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /> Infrastrukturę transakcyjną i dostęp do rynku</li>
                                    <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /> Narzędzia do komunikacji i tłumaczenia oparte na AI</li>
                                    <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /> Bezpieczne przetwarzanie płatności escrow</li>
                                    <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /> System zarządzania opiniami i przejrzystością</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Standardy</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-text-p mb-6">Zgodność i standardy zawodowe</h2>
                        <p className="text-text-m font-medium mb-8 leading-relaxed">
                            Wszyscy wybrani partnerzy muszą przestrzegać następujących wymagań:
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Posiadanie ważnej licencji zawodowej uznawanej w Stanach Zjednoczonych",
                                "Zgodność ze wszystkimi obowiązującymi przepisami federalnymi i stanowymi",
                                "Akceptacja mechanizmów przejrzystości i oceny wydajności",
                                "Zgoda na zawodowy kodeks etyczny platformy"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-grey-50 border border-grey-200 shadow-sm">
                                    <ShieldCheck size={18} className="text-primary shrink-0 mt-0.5" />
                                    <span className="text-sm font-bold text-text-p">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PartnershipFramework;
