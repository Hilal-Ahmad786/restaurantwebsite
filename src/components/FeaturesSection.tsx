'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Utensils, Sunset, HeartHandshake } from 'lucide-react';

export default function FeaturesSection() {
    const t = useTranslations('Features');

    const features = [
        {
            id: 1,
            icon: <Utensils size={48} className="text-amber-600 mb-4" />,
            title: t('f1_title'),
            description: t('f1_desc')
        },
        {
            id: 2,
            icon: <Sunset size={48} className="text-amber-600 mb-4" />,
            title: t('f2_title'),
            description: t('f2_desc')
        },
        {
            id: 3,
            icon: <HeartHandshake size={48} className="text-amber-600 mb-4" />,
            title: t('f3_title'),
            description: t('f3_desc')
        }
    ];

    return (
        <section className="py-20 bg-zinc-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <span className="text-amber-600 text-xl mb-2 block">{t('subtitle')}</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 max-w-2xl mx-auto">
                            {t('title')}
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-zinc-100 text-center group"
                        >
                            <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 font-bold text-xl mx-auto mb-6">
                                {feature.id}
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 mb-4">{feature.title}</h3>
                            <p className="text-zinc-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

