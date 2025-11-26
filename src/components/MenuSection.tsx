'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import menuData from '@/data/menu.json';

export default function MenuSection({ locale }: { locale: string }) {
    const t = useTranslations('Menu');
    const [activeCategory, setActiveCategory] = useState(menuData.categories[0].id);

    return (
        <section id="menu" className="py-20 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-amber-500">{t('title')}</h2>
                    <p className="text-zinc-400">{t('subtitle')}</p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {menuData.categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-2 rounded-full transition-all ${activeCategory === category.id
                                ? 'bg-amber-600 text-white'
                                : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
                                }`}
                        >
                            {category.name[locale as keyof typeof category.name]}
                        </button>
                    ))}
                </div>

                {/* Menu Items */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto justify-items-center">
                    {menuData.categories
                        .find((c) => c.id === activeCategory)
                        ?.items.map((item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className="flex gap-4 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 hover:border-amber-500/30 transition-colors group w-full max-w-lg"
                            >
                                <div className="w-24 h-24 shrink-0 bg-zinc-800 rounded-lg overflow-hidden">
                                    {/* Placeholder for image if not present, or use item.image */}
                                    <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-600">
                                        Img
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-bold group-hover:text-amber-500 transition-colors">
                                            {item.name[locale as keyof typeof item.name]}
                                        </h3>
                                        <span className="text-amber-500 font-bold text-lg">
                                            {item.price} ₺
                                        </span>
                                    </div>
                                    <p className="text-sm text-zinc-400">
                                        {item.description[locale as keyof typeof item.description]}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                </div>
            </div>
        </section>
    );
}
