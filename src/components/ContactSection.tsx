'use client';

import { useTranslations } from 'next-intl';
import siteInfo from '@/data/site-info.json';

export default function ContactSection() {
    const t = useTranslations('Contact');

    return (
        <section id="contact" className="py-20 bg-zinc-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-zinc-900">{t('title')}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
                        <form className="space-y-6" onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.currentTarget);
                            const name = formData.get('name');
                            const email = formData.get('email');
                            const message = formData.get('message');

                            const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
                            const whatsappUrl = `https://wa.me/905359318817?text=${text}`;

                            window.open(whatsappUrl, '_blank');

                            // Optional: Also try to open mail client as a fallback/secondary action if desired, 
                            // but usually one action is better to avoid popup blockers.
                            // window.location.href = `mailto:akdagadnan.34@gmail.com?subject=Contact Form Submission&body=${text}`;
                        }}>
                            <div>
                                <label className="block text-sm font-medium text-zinc-700 mb-2">{t('form.name')}</label>
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:border-amber-600 text-zinc-900 transition-colors"
                                    placeholder={t('form.name')}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-zinc-700 mb-2">{t('form.email')}</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:border-amber-600 text-zinc-900 transition-colors"
                                    placeholder={t('form.email')}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-zinc-700 mb-2">{t('form.message')}</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    required
                                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:border-amber-600 text-zinc-900 transition-colors"
                                    placeholder={t('form.message')}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                {t('form.send')}
                            </button>
                        </form>
                    </div>

                    {/* Map */}
                    <div className="h-[500px] rounded-2xl overflow-hidden border border-zinc-200 shadow-sm">
                        <iframe
                            src={siteInfo.mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
