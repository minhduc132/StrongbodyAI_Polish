import PageHeader from "@/components/layout/PageHeader";
import { Metadata } from "next";
import BlogListClient from "./BlogListClient";
import { fetchAllBlogPosts, fetchBlogsByCategory } from "@/app/api";

import { generateUnifiedMetadata } from "@/utils/seo";

export async function generateMetadata(): Promise<Metadata> {
    return generateUnifiedMetadata(undefined, {
        title: "Porady zdrowotne i aktualności",
    });
}


export default async function BlogPage() {
    // Initial data for "All" tab: Combined list of all blog posts
    // Initial data: Fetch according to the specific category requested
    const initialPosts = await fetchBlogsByCategory("blogs");

    return (
        <main className="min-h-screen">
            <PageHeader
                title="Porady zdrowotne i aktualności"
                description="Bądź na bieżąco z najnowszymi innowacjami w opiece zdrowotnej, aktualizacjami platformy i spostrzeżeniami ekspertów StrongBody AI."
                breadcrumb="Blog"
            />
            <BlogListClient initialPosts={initialPosts} />

        </main>
    );
}
