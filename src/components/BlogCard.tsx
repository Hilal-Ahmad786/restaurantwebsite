'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface BlogPost {
    id: string;
    slug: string;
    image: string;
    date: string;
    title: { [key: string]: string };
    excerpt: { [key: string]: string };
}

export default function BlogCard({ post, locale }: { post: BlogPost; locale: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-amber-500/50 transition-colors group"
        >
            <Link href={`/${locale}/blog/${post.slug}`}>
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={post.image}
                        alt={post.title[locale]}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="p-6">
                    <div className="flex items-center gap-2 text-zinc-400 text-sm mb-3">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-500 transition-colors line-clamp-2">
                        {post.title[locale]}
                    </h3>
                    <p className="text-zinc-400 line-clamp-3 mb-4">
                        {post.excerpt[locale]}
                    </p>
                    <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
                        Read More &rarr;
                    </span>
                </div>
            </Link>
        </motion.div>
    );
}
