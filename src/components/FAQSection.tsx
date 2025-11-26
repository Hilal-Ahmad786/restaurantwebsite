'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
    const t = useTranslations('FAQ');
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        { id: 'reservation', question: t('q1'), answer: t('a1') },
        { id: 'dietary', question: t('q2'), answer: t('a2') },
        { id: 'view', question: t('q3'), answer: t('a3') },
    ];

    return (
        <section className="py-20 bg-zinc-950 text-white">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-4xl font-bold mb-12 text-center text-amber-500">{t('title')}</h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={faq.id} className="border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900/50">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-zinc-800 transition-colors"
                            >
                                <span className="font-semibold text-lg">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="text-amber-500" />
                                ) : (
                                    <ChevronDown className="text-zinc-400" />
                                )}
                            </button>
                            <motion.div
                                initial={false}
                                animate={{ height: openIndex === index ? 'auto' : 0 }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-4 text-zinc-400 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
