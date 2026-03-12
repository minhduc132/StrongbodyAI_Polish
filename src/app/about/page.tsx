import AboutSection from "@/components/sections/marketing/AboutUs";
import { Metadata } from "next";

import { generateUnifiedMetadata } from "@/utils/seo";

export async function generateMetadata(): Promise<Metadata> {
    return generateUnifiedMetadata(undefined, {
        title: "O naszej misji",
    });
}


export default function AboutPage() {
    return (
        <main className="min-h-screen pt-20">
            <AboutSection />
        </main>
    );
}
