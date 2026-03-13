import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});


import { generateUnifiedMetadata } from "@/utils/seo";
import { fetchSiteSettings } from "@/app/api";

export async function generateMetadata(): Promise<Metadata> {
  return generateUnifiedMetadata();
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await fetchSiteSettings();
  const siteTitle = settings?.site_title || "StrongBody AI";
  const siteDescription = settings?.meta_description || settings?.site_tagline || "StrongBody AI";
  const logoUrl = settings?.logo_url || "https://strongbody.com.pl/images/logo.png";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteTitle,
    url: "https://strongbody.com.pl",
    logo: logoUrl,
    description: siteDescription,
    sameAs: [
      "https://apps.apple.com/us/app/multime-ai/id6748796219",
      "https://play.google.com/store/apps/details?id=com.multime.app.prod"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Support",
      email: settings?.contact_email || "info@strongbody.com.pl",
      url: "https://strongbody.com.pl/contact",
    },
  };

  return (
    <html lang="pl" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${jakarta.variable} font-sans antialiased text-slate-900 bg-white`}>
        <Navbar settings={settings} />
        {children}
        <Footer settings={settings} />
      </body>
    </html>
  );
}
