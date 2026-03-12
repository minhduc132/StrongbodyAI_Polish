import {
    Stethoscope, Building2, Sparkles, Wifi, Heart, Briefcase,
    FileText, Search, ShieldCheck, UserCheck, Settings, CheckCircle2, Zap,
    Globe2, CreditCard, MessageSquare, BarChart3
} from "lucide-react";
import React from "react";

export const targetProfiles = [
    { icon: <Stethoscope size={22} />, label: "Licencjonowani specjaliści zdrowia" },
    { icon: <Building2 size={22} />, label: "Akredytowane kliniki i centra medyczne" },
    { icon: <Sparkles size={22} />, label: "Instytucje medycyny estetycznej" },
    { icon: <Wifi size={22} />, label: "Dostawcy telemedycyny" },
    { icon: <Heart size={22} />, label: "Placówki rehabilitacyjne i wellness" },
    { icon: <Briefcase size={22} />, label: "Wyspecjalizowani przedsiębiorcy usług zdrowotnych" },
];

export const values = [
    { icon: <Globe2 size={24} />, title: "Ekspansja rynkowa", desc: "Uzyskaj dostęp do krajowej i zagranicznej sieci klientów dzięki naszej natywnej dla AI infrastrukturze handlowej." },
    { icon: <FileText size={24} />, title: "Ustrukturyzowany handel cyfrowy", desc: "Znormalizowany, przejrzysty system transakcyjny oparty na ofertach dla każdego zlecenia usługi." },
    { icon: <CreditCard size={24} />, title: "Bezpieczne rozliczenia Escrow", desc: "Płatności przetwarzane przez bezpieczną warstwę pośredniczącą, zmniejszającą ryzyko finansowe dla obu stron." },
    { icon: <MessageSquare size={24} />, title: "Komunikacja wspomagana przez AI", desc: "Wielojęzyczna komunikacja w czasie rzeczywistym zasilana przez zaawansowane modele tłumaczeniowe AI." },
    { icon: <BarChart3 size={24} />, title: "Architektura reputacji", desc: "Buduj profesjonalny profil oparty na danych, wykorzystując zweryfikowane opinie i rzeczywiste wskaźniki wydajności." },
    { icon: <Zap size={24} />, title: "Zasięg globalny bez granic", desc: "Rozwijaj swoją praktykę globalnie — obsługuj klientów w dowolnym miejscu dzięki naszemu rynkowi AI bez granic." },
];

export const processSteps = [
    { num: "01", title: "Wyrażenie zainteresowania", desc: "Prześlij swoje zainteresowanie za pomocą naszego formularza zgłoszeniowego dla partnerów.", icon: <FileText size={22} /> },
    { num: "02", title: "Weryfikacja uprawnień", desc: "Weryfikujemy Twoje licencje, certyfikaty i uprawnienia zawodowe.", icon: <Search size={22} /> },
    { num: "03", title: "Przegląd zgodności", desc: "Ocena regulacyjna i zgodności zgodnie ze standardami opieki zdrowotnej w USA.", icon: <ShieldCheck size={22} /> },
    { num: "04", title: "Ocena profesjonalna", desc: "Krótka rozmowa kwalifikacyjna w celu oceny dopasowania do standardów naszej platformy.", icon: <UserCheck size={22} /> },
    { num: "05", title: "Strukturyzacja profilu", desc: "Pomagamy Ci zbudować zoptymalizowany cyfrowy profil profesjonalisty.", icon: <Settings size={22} /> },
    { num: "06", title: "Formalna aktywacja", desc: "Zostajesz aktywowany jako Partner Strategiczny na rynku StrongBody AI.", icon: <CheckCircle2 size={22} /> },
];
