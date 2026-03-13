import { Metadata } from "next";
import { fetchSiteSettings, fetchPostDetail } from "@/app/api";

export async function generateUnifiedMetadata(
    slug?: string,
    fallback?: { title?: string; description?: string }
): Promise<Metadata> {
    let settings: any = null;
    try {
        settings = await fetchSiteSettings();
    } catch (e) {
        console.error("generateUnifiedMetadata: fetchSiteSettings failed:", e);
        settings = null;
    }

    // 1. Base Metadata from Global Settings
    const siteTitle = settings?.site_title || "StrongBody AI";
    const baseTitle = settings?.meta_title || siteTitle;
    const baseDesc = settings?.meta_description || settings?.site_tagline || "";
    const baseKeywords = settings?.meta_keywords
        ? settings.meta_keywords.split(",").map((k: string) => k.trim())
        : [];
    const baseOgImage = settings?.og_image || "/images/og-image.png";
    const baseOgTitle = settings?.og_title || baseTitle;
    const baseOgDesc = settings?.og_description || baseDesc;
    const favicon = settings?.favicon_url || "/favicon.ico";

    // 2. Page Specific Metadata (if slug exists)
    let pageTitle = fallback?.title;
    let pageDesc = fallback?.description;
    let pageImage = baseOgImage;
    let pageKeywords = [...baseKeywords];
    let isArticle = false;
    let publishedTime: string | undefined;

    if (slug) {
        // Try fetching as a blog post
        const post = await fetchPostDetail(slug);
        if (post) {
            pageTitle = post.seo_title || post.title || pageTitle;
            pageDesc = post.seo_description || post.excerpt || (post.content ? post.content.replace(/<[^>]*>/g, '').substring(0, 160) : "") || pageDesc;
            pageImage = post.featured_image_url || post.image || pageImage;
            publishedTime = post.published_at || post.created_at;
            isArticle = true;

            if (post.categories?.length) {
                const catName = post.categories[0].name;
                if (catName) pageKeywords.unshift(catName);
            }
            pageKeywords.unshift(post.title);
        }
    }

    // 3. Construct Final Metadata
    // For homepage, we might want the absolute title from meta_title
    const finalTitle = pageTitle ? {
        absolute: `${pageTitle} | ${siteTitle}`,
    } : baseTitle;

    const finalDesc = pageDesc || baseDesc;

    return {
        metadataBase: new URL("https://strongbody.com.pl"),
        title: finalTitle,
        description: finalDesc,
        keywords: Array.from(new Set(pageKeywords)),
        authors: [{ name: "StrongBody AI Team" }],
        icons: {
            icon: favicon,
            apple: favicon,
        },
        alternates: {
            canonical: slug ? `https://strongbody.com.pl/${slug}` : "https://strongbody.com.pl",
        },
        openGraph: {
            title: pageTitle || baseOgTitle,
            description: pageDesc || baseOgDesc,
            url: slug ? `https://strongbody.com.pl/${slug}` : "https://strongbody.com.pl",
            siteName: siteTitle,
            images: [{ url: pageImage, width: 1200, height: 630 }],
            locale: "pl_PL",
            type: isArticle ? "article" : "website",
            publishedTime,
        },
        twitter: {
            card: "summary_large_image",
            title: pageTitle || baseOgTitle,
            description: pageDesc || baseOgDesc,
            images: [pageImage],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
    };
}
