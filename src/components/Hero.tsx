'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero({ locale }: { locale: string }) {
    const t = useTranslations('Hero');

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Video with Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="absolute inset-0 pointer-events-none">
                    <iframe
                        src="https://www.youtube.com/embed/URLp5hPu_WE?rel=0&autoplay=1&mute=1&enablejsapi=1&controls=0&loop=1&playlist=URLp5hPu_WE&fs=0&enablejsapi=1"
                        className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-screen min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 object-cover"
                        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-20 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-amber-500">
                        {t('welcome')}
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-zinc-200">
                        {t('subtitle')}
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link
                            href={`/${locale}/menu`}
                            className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-semibold transition-colors text-lg"
                        >
                            {t('cta')}
                        </Link>
                        <Link
                            href={`/${locale}/contact`}
                            className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white rounded-full font-semibold transition-colors text-lg"
                        >
                            {t('book')}
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
