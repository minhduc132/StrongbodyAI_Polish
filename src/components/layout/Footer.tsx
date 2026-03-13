import React from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { Mail, Phone, MapPin } from "lucide-react";

const platformLinks = [
    { name: "Strona główna", href: "/" },
    { name: "O nas", href: "/about" },
    { name: "Jak to działa", href: "/how-it-works" },
];

const userLinks = [
    { name: "Dla Klientów", href: "/for-clients" },
    { name: "Dla Partnerów", href: "/for-partners" },
    { name: "FAQ", href: "/faq" },
    { name: "Kontakt", href: "/contact" },
];

const legalLinks = [
    { name: "Zaufanie i zgodność", href: "/legal" },
    { name: "Polityka prywatności", href: "/legal" },
    { name: "Warunki korzystania", href: "/legal" },
    { name: "Zastrzeżenie dotyczące zgodności", href: "/legal" },
];

const Footer = ({ settings }: { settings?: any }) => {
    const siteTitle = settings?.site_title || "StrongBody AI";
    const siteDescription = settings?.meta_description || settings?.site_tagline || "Natywny dla AI rynek usług zdrowotnych łączący zweryfikowanych profesjonalistów i klientów w Stanach Zjednoczonych i poza nimi.";
    const contactEmail = settings?.contact_email || "customercare@strongbody.ai";
    return (
        <footer className="bg-grey-50 text-grey-900 pt-20 pb-10 border-t border-grey-200">
            <Container>
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-2 space-y-5">
                        <p className="text-grey-700 text-sm font-medium leading-relaxed max-w-sm">
                            {siteDescription}
                        </p>
                        <div className="space-y-2.5 text-sm text-grey-600 font-medium">
                            <div className="flex items-center gap-2">
                                <Mail size={14} className="text-primary" />
                                <a href={`mailto:${contactEmail}`} className="hover:text-primary transition-colors">{contactEmail}</a>
                            </div>
                            {/* <div className="flex items-center gap-2">
                                <Phone size={14} className="text-primary" />
                                <a href="tel:+18001234567" className="hover:text-primary transition-colors">+1 (800) 123-4567</a>
                            </div> */}
                            <div className="flex items-center gap-2">
                                <MapPin size={14} className="text-primary" />
                                <span>StrongBody SG PTE. LTD., Singapore</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 pt-2">
                            {/* App Badges */}
                            <a href="https://apps.apple.com/us/app/multime-ai/id6748796219" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-10 w-auto" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.multime.app.prod" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-10 w-auto" />
                            </a>
                        </div>
                    </div>

                    {/* Platform */}
                    <div>
                        <h4 className="text-xs font-bold tracking-widest uppercase text-grey-700 mb-5">Platforma</h4>
                        <ul className="space-y-3">
                            {platformLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-grey-600 hover:text-primary font-medium transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* For You */}
                    <div>
                        <h4 className="text-xs font-bold tracking-widest uppercase text-grey-700 mb-5">Dla Ciebie</h4>
                        <ul className="space-y-3">
                            {userLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-grey-600 hover:text-primary font-medium transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-xs font-bold tracking-widest uppercase text-grey-700 mb-5">Prawo</h4>
                        <ul className="space-y-3">
                            {legalLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-grey-600 hover:text-primary font-medium transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-grey-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-grey-500 text-xs font-medium text-center md:text-left">
                        © {new Date().getFullYear()} {siteTitle} – Zasilane przez MultiMe AI – Globalna platforma z Singapuru. Wszelkie prawa zastrzeżone.
                    </p>
                    <p className="text-grey-600 text-[10px] font-medium max-w-md text-center md:text-right">
                        StrongBody AI to technologiczna platforma handlowa. Nie świadczymy bezpośrednio usług medycznych. Wszystkie usługi są świadczone przez niezależnych, zweryfikowanych partnerów.
                    </p>
                </div>

            </Container>
        </footer>
    );
};

export default Footer;
