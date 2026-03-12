import React from "react";
import { Quote } from "lucide-react";
import Container from "@/components/layout/Container";
import { Reveal } from "@/components/animations/Reveal";

const testimonials = [
    {
        quote: "Platforma całkowicie zmieniła sposób, w jaki obsługujemy skierowania pacjentów i konsultacje eksperckie. Wnioski AI to przełom.",
        author: "Użytkownik Platformy",
        role: "Administrator Zdrowia"
    },
    {
        quote: "Bycie częścią tego ekosystemu pozwala mi skuteczniej docierać do pacjentów, zachowując przy tym najwyższe standardy opieki.",
        author: "Dr Chin",
        role: "Pediatra"
    },
    {
        quote: "StrongBody AI zapewnia bezpieczeństwo i przejrzystość, których potrzebujemy do współpracy w tak wrażliwej na dane branży jak farmacja.",
        author: "Menedżer Biznesowy",
        role: "Amazing Pharma"
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 relative overflow-hidden" style={{ background: 'var(--brand-gradient)' }}>
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-white font-bold tracking-wider uppercase text-sm mb-3">Społeczność</h2>
                    <p className="text-4xl font-extrabold text-white mb-4">Co mówi nasza społeczność</p>
                    <div className="w-20 h-1.5 bg-white mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <Reveal
                            key={index}
                            delay={index * 0.1}
                            className="h-full"
                        >
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow relative h-full">
                                <Quote className="text-primary-text/20 absolute top-4 right-4 w-12 h-12 -z-0" />
                                <div className="relative z-10 flex flex-col h-full">
                                    <p className="text-slate-600 italic mb-6 leading-relaxed flex-1">"{t.quote}"</p>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{t.author}</h4>
                                        <p className="text-sm text-slate-500">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Testimonials;
