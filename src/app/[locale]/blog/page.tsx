import BlogCard from '@/components/BlogCard';
import { getBlogPosts } from '@/data/blog';

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const blogPosts = getBlogPosts(locale);

    return (
        <div className="pt-32 pb-20 bg-zinc-50 min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-zinc-900">
                    Blog
                </h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <BlogCard key={post.id} post={post} locale={locale} />
                    ))}
                </div>
            </div>
        </div>
    );
}
