import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getIconBySlug } from "./constants";
import { ScaleIn } from "@/components/animations/Reveal";

interface ServiceItem {
    id: string;
    slug: string;
    title: string;
    desc: string;
}

const staticServices: ServiceItem[] = [
    {
        id: "1",
        slug: "teleconsultation-and-medical-advice",
        title: "Telekonsultacje i Porady Medyczne",
        desc: "Połącz się zdalnie z licencjonowanymi lekarzami w celu konsultacji, kontroli i uzyskania drugiej opinii."
    },
    {
        id: "2",
        slug: "medical-aesthetic-treatments",
        title: "Zabiegi Medycyny Estetycznej",
        desc: "Uzyskaj dostęp do zweryfikowanych specjalistów medycyny estetycznej i kosmetologii, oferujących zabiegi oparte na wiedzy klinicznej."
    },
    {
        id: "3",
        slug: "rehabilitation-and-physiotherapy",
        title: "Rehabilitacja i Fizjoterapia",
        desc: "Strukturalne plany rehabilitacji opracowane przez certyfikowanych fizjoterapeutów i specjalistów ds. rekonwalescencji."
    },
    {
        id: "4",
        slug: "nutrition-and-lifestyle-planning",
        title: "Planowanie Żywienia i Stylu Życia",
        desc: "Spersonalizowane wskazówki żywieniowe i coaching stylu życia prowadzony przez certyfikowanych dietetyków i ekspertów ds. wellness."
    },
    {
        id: "5",
        slug: "hair-transplant-and-aesthetic-consults",
        title: "Przeszczep Włosów i Konsultacje Estetyczne",
        desc: "Połącz się z najwyżej ocenianymi klinikami przeszczepu włosów i chirurgami, posiadającymi zweryfikowane wyniki przed i po zabiegu."
    },
    {
        id: "6",
        slug: "mental-wellness-and-stress-management",
        title: "Dobrostan Psychiczny i Zarządzanie Stresem",
        desc: "Poufny dostęp do licencjonowanych terapeutów, doradców i specjalistów ds. zdrowia psychicznego."
    }
];

const ServicesGrid = () => {
    return (
        <div className="mb-12">
            <div className="text-center mb-16">
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
                    DOSTĘPNE USŁUGI
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4">
                    Wybrane usługi w Stanach Zjednoczonych
                </h2>
                <p className="text-base text-grey-600 font-medium max-w-2xl mx-auto">
                    Poznaj rosnącą gamę zweryfikowanych usług zdrowotnych dostępnych na naszym rynku.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {staticServices.map((service, idx) => (
                    <ScaleIn
                        key={service.id}
                        delay={idx * 0.06}
                        className="h-full"
                    >
                        <Link
                            href={`/${service.slug}`}
                            className="bg-white p-7 rounded-2xl border border-grey-100 shadow-sm hover:shadow-lg hover:border-primary/10 transition-all group flex flex-col h-full cursor-pointer"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all">
                                {getIconBySlug(service.slug, service.title)}
                            </div>
                            <h3 className="text-lg font-bold text-grey-900 mb-2 group-hover:text-primary transition-colors line-clamp-1">
                                {service.title}
                            </h3>
                            <p className="text-sm text-grey-600 font-medium leading-relaxed mb-5 flex-1 line-clamp-2">
                                {service.desc}
                            </p>
                            <div
                                className="text-grey-900 text-xs font-bold group-hover:text-primary transition-colors inline-flex items-center gap-1 mt-auto"
                            >
                                Dowiedz się więcej <ArrowRight size={12} />
                            </div>
                        </Link>
                    </ScaleIn>
                ))}
            </div>
        </div>
    );
};

export default ServicesGrid;
