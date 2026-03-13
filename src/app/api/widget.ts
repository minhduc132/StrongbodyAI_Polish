import { apiFetch } from "@/config/api";

export async function fetchCategories(parentSlug?: string) {
    const endpoint = parentSlug ? `/categories/${parentSlug}` : `/categories`;
    return apiFetch(endpoint);
}

export async function fetchWidgetItems(code: string) {
    const data = await apiFetch(`/widgets/${code}`);
    if (!data && code.includes("-")) {
        const sanitizedCode = code.replace(/-/g, "");
        return apiFetch(`/widgets/${sanitizedCode}`);
    }
    return data;
}

export async function fetchPostDetail(slug: string, language: string = process.env.NEXT_PUBLIC_LANGUAGE || "en") {
    return apiFetch(`/posts/${slug}?language=${language}`);
}

export async function fetchPostsByCategory(category: string, page?: number, limit?: number, language: string = process.env.NEXT_PUBLIC_LANGUAGE || "en") {
    let url = `/posts?category=${category}&language=${language}`;
    if (page) url += `&page=${page}`;
    if (limit) url += `&limit=${limit}`;
    return apiFetch(url);
}
