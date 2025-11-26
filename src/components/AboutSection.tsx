'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Utensils, Eye, Award } from 'lucide-react';

export default function AboutSection() {
    const t = useTranslations('About');

    const features = [
        { icon: <Eye size={32} />, title: t('features.view') },
        { icon: <Utensils size={32} />, title: t('features.food') },
        { icon: <Award size={32} />, title: t('features.service') },
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl font-bold mb-6 text-zinc-900">{t('title')}</h2>
                    <p className="text-lg text-zinc-600 leading-relaxed">
                        {t('description')}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-zinc-50 p-8 rounded-2xl text-center hover:bg-zinc-100 transition-colors border border-zinc-100"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600 mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-zinc-900">{feature.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
