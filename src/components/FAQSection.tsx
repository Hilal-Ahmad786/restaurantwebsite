'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
    const t = useTranslations('FAQ');
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        { q: t('q1'), a: t('a1') },
        { q: t('q2'), a: t('a2') },
        { q: t('q3'), a: t('a3') },
        { q: t('q4'), a: t('a4') },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-4xl font-bold text-center mb-12 text-zinc-900">{t('title')}</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-zinc-200 rounded-lg overflow-hidden bg-zinc-50">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex justify-between items-center p-6 text-left hover:bg-zinc-100 transition-colors"
                            >
                                <span className="font-semibold text-zinc-900">{faq.q}</span>
                                <ChevronDown className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''} text-amber-600`} />
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-6 text-zinc-600">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
