'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function VideoSection() {
    const t = useTranslations('Video');

    return (
        <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <iframe
                    loading="lazy"
                    className="absolute top-1/2 left-1/2 w-[177.77vh] h-[100vh] min-w-[100vw] min-h-[56.25vw] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    frameBorder="0"
                    aria-label="Background video"
                    src="https://www.youtube.com/embed/0GDNsUiq538?rel=0&autoplay=1&mute=1&enablejsapi=1&controls=0&loop=1&playlist=0GDNsUiq538&fs=0"
                    allow="autoplay; encrypted-media"
                ></iframe>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
                >
                    {t('title')}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-2xl md:text-4xl text-white/90 font-light tracking-wide drop-shadow-md"
                >
                    {t('subtitle')}
                </motion.p>
            </div>
        </section>
    );
}

