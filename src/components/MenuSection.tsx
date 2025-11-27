'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import menuData from '@/data/menu.json';

export default function MenuSection({ locale }: { locale: string }) {
    const t = useTranslations('Menu');
    const [activeCategory, setActiveCategory] = useState(menuData.categories[0].id);

    const activeItems = menuData.categories.find((c) => c.id === activeCategory)?.items || [];

    return (
        <section id="menu" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-zinc-900 mb-4">{t('title')}</h2>
                    <p className="text-zinc-600 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {menuData.categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-2 rounded-full transition-all duration-300 ${activeCategory === category.id
                                ? 'bg-amber-600 text-white shadow-lg scale-105'
                                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                                }`}
                        >
                            {category.name[locale as keyof typeof category.name]}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {activeItems.map((item) => (
                        <div key={item.id} className="bg-zinc-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group border border-zinc-100">
                            <div className="p-6 text-center">
                                <h3 className="text-lg font-bold text-zinc-900 mb-2">{item.name[locale as keyof typeof item.name]}</h3>
                                <p className="text-zinc-600 text-sm mb-3 line-clamp-2">{item.description[locale as keyof typeof item.description]}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
