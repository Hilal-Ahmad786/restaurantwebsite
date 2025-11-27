import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import BlogCard from '@/components/BlogCard';
import FAQSection from '@/components/FAQSection';
import VideoSection from '@/components/VideoSection';
import FeaturesSection from '@/components/FeaturesSection';
import { getBlogPosts } from '@/data/blog';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Blog' });
    const blogPosts = getBlogPosts(locale).slice(0, 3);

    return (
        <main className="min-h-screen bg-white">
            <Hero locale={locale} />

            <FeaturesSection />

            <MenuSection locale={locale} />

            <VideoSection />

            {/* Blog Preview Section */}
            <section className="py-20 bg-zinc-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 text-zinc-900">{t('latestPosts')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <BlogCard key={post.id} post={post} locale={locale} />
                        ))}
                    </div>
                    <div className="text-center mt-16">
                        <Link
                            href={`/${locale}/blog`}
                            className="inline-flex items-center px-8 py-4 bg-amber-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-amber-700 transition-colors duration-300"
                        >
                            {t('viewAll')}
                            <ArrowRight className="ml-3 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            <FAQSection />
        </main>
    );
}

