import BlogCard from '@/components/BlogCard';
import blogData from '@/data/blog.json';

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;

    return (
        <div className="pt-32 pb-20 bg-black min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-amber-500">
                    Blog
                </h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogData.map((post) => (
                        <BlogCard key={post.id} post={post} locale={locale} />
                    ))}
                </div>
            </div>
        </div>
    );
}
