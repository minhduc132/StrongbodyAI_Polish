import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PartnersCTA = () => {
    return (
        <section className="py-20" style={{ background: 'var(--brand-gradient)' }}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold !text-white mb-4">
                    Dołącz do rekrutacji partnerskiej — Stany Zjednoczone
                </h2>
                <p className="text-lg text-white font-medium mb-10 max-w-2xl mx-auto">
                    Zrób pierwszy krok w kierunku rozszerzenia swojego zasięgu zawodowego dzięki StrongBody AI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg flex items-center justify-center gap-2">
                        Prześlij wyrażenie zainteresowania <ArrowRight size={16} />
                    </Link>
                    <Link href="/contact" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                        Poproś o dokumentację partnerską
                    </Link>
                    <Link href="/contact" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                        Umów się na konsultację
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PartnersCTA;
