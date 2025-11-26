import blogData from './blog.json';

export interface BlogPost {
    id: string;
    slug: string;
    image: string;
    date: string;
    title: string;
    excerpt: string;
    content: string;
}

export function getBlogPosts(locale: string): BlogPost[] {
    return blogData.map(post => ({
        id: post.id,
        slug: post.slug,
        image: post.image,
        date: post.date,
        title: post.title[locale as keyof typeof post.title] || post.title.en,
        excerpt: post.excerpt[locale as keyof typeof post.excerpt] || post.excerpt.en,
        content: post.content[locale as keyof typeof post.content] || post.content.en
    }));
}

export function getBlogPost(slug: string, locale: string): BlogPost | undefined {
    const post = blogData.find(p => p.slug === slug);
    if (!post) return undefined;

    return {
        id: post.id,
        slug: post.slug,
        image: post.image,
        date: post.date,
        title: post.title[locale as keyof typeof post.title] || post.title.en,
        excerpt: post.excerpt[locale as keyof typeof post.excerpt] || post.excerpt.en,
        content: post.content[locale as keyof typeof post.content] || post.content.en
    };
}
