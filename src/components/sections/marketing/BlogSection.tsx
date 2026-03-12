import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Container from "@/components/layout/Container";
import { Reveal, ScaleIn } from "@/components/animations/Reveal";

import { fetchBlogPostsByWidget, fetchBlogsByCategory } from "@/app/api";

interface BlogSectionProps {
    source?: 'widget' | 'category';
    category?: string;
    widgetCode?: string;
}

const BlogSection = async ({
    source = 'widget',
    category = 'blogs',
    widgetCode = 'list-blog'
}: BlogSectionProps) => {
    let posts = [];

    if (source === 'category') {
        posts = await fetchBlogsByCategory(category);
    } else {
        // First try the specific widget code
        posts = await fetchBlogPostsByWidget(widgetCode);

        // Fallback for safety if requested widget is empty
        if (!posts || posts.length === 0) {
            posts = await fetchBlogPostsByWidget("blogs");
        }
        if (!posts || posts.length === 0) {
            posts = await fetchBlogPostsByWidget("blog");
        }
    }

    if (posts && posts.length > 0) {
        posts = posts.slice(0, 3);
    }

    // No posts? Don't show anything to avoid confusion
    if (posts.length === 0) return null;

    return (
        <section className="py-24 bg-grey-50 relative overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
                            Najnowsze wpisy
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-grey-900 mb-6">
                            Blog o zdrowiu i technologii
                        </h2>
                        <p className="text-lg text-grey-600 font-medium leading-relaxed">
                            Bądź na bieżąco z najnowszymi innowacjami w opiece zdrowotnej, aktualizacjami platformy i spostrzeżeniami ekspertów z StrongBody AI.
                        </p>
                    </div>
                    <Reveal delay={0.2}>
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 bg-white text-grey-900 border border-grey-200 px-6 py-3 rounded-xl font-bold hover:border-primary hover:text-primary transition-all shadow-sm"
                        >
                            Zobacz wszystkie artykuły <ArrowRight size={18} />
                        </Link>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post: any, idx: number) => {
                        const formatDate = (dateStr: string) => {
                            try {
                                if (!dateStr) return "Health Insight";
                                const d = new Date(dateStr);
                                if (isNaN(d.getTime())) return "Health Insight";
                                return d.toLocaleDateString('pl-PL', { month: 'short', day: 'numeric', year: 'numeric' });
                            } catch (e) {
                                return "Wgląd w zdrowie";
                            }
                        };

                        return (
                            <ScaleIn key={post.id} delay={idx * 0.1}>
                                <Link
                                    href={`/${post.slug}`}
                                    className="group bg-white rounded-[2rem] border border-grey-100 overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full"
                                >
                                    <div className="relative h-56 overflow-hidden bg-grey-50">
                                        {post.image ? (
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center opacity-20">
                                                <Calendar className="text-grey-400" size={64} />
                                            </div>
                                        )}
                                        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                            {post.category}
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-grey-900/60 via-grey-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col">
                                        <div className="flex items-center gap-4 text-xs text-grey-500 font-medium mb-4">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar size={14} className="text-primary" />
                                                {formatDate(post.date)}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Clock size={14} className="text-primary" />
                                                {post.readTime || "5 min czytania"}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-grey-900 mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-grey-600 font-medium leading-relaxed mb-6 line-clamp-3 flex-1">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-end mt-auto pt-6 border-t border-grey-100">
                                            <div className="w-8 h-8 rounded-full bg-grey-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors text-grey-400">
                                                <ArrowRight size={14} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </ScaleIn>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};


export default BlogSection;
