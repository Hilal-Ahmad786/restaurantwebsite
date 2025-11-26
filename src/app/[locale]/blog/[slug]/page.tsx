import blogData from '@/data/blog.json';
import { notFound } from 'next/navigation';
import { Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default async function BlogPostPage({
    params
}: {
    params: Promise<{ locale: string; slug: string }>
}) {
    const { locale, slug } = await params;
    const post = blogData.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="pt-32 pb-20 bg-black min-h-screen text-white">
            <article className="container mx-auto px-4 max-w-4xl">
                <Link
                    href={`/${locale}/blog`}
                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-amber-500 mb-8 transition-colors"
                >
                    <ArrowLeft size={20} />
                    <span>Back to Blog</span>
                </Link>

                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-8">
                    <img
                        src={post.image}
                        alt={post.title[locale as keyof typeof post.title]}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8">
                        <div className="flex items-center gap-2 text-amber-500 mb-4">
                            <Calendar size={20} />
                            <span>{post.date}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white">
                            {post.title[locale as keyof typeof post.title]}
                        </h1>
                    </div>
                </div>

                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-xl text-zinc-300 leading-relaxed">
                        {post.content[locale as keyof typeof post.content]}
                    </p>
                </div>
            </article>
        </div>
    );
}
