'use client';

import Link from 'next/link';
import { Calendar } from 'lucide-react';

interface BlogCardProps {
    post: {
        id: string;
        slug: string;
        image: string;
        date: string;
        title: string;
        excerpt: string;
    };
    locale: string;
}

export default function BlogCard({ post, locale }: BlogCardProps) {
    return (
        <Link href={`/${locale}/blog/${post.slug}`}>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group border border-zinc-100">
                <div className="relative h-64 overflow-hidden">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                    <div className="flex items-center gap-2 text-zinc-500 text-sm mb-3">
                        <Calendar size={16} className="text-amber-600" />
                        <span>{new Date(post.date).toLocaleDateString(locale)}</span>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-amber-600 transition-colors">
                        {post.title}
                    </h3>
                    <p className="text-zinc-600 line-clamp-3">
                        {post.excerpt}
                    </p>
                </div>
            </div>
        </Link>
    );
}
