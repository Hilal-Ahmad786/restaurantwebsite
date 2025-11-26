'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header({ locale }: { locale: string }) {
    const t = useTranslations('Navigation');
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const switchLocale = (newLocale: string) => {
        const path = pathname.split('/').slice(2).join('/');
        router.push(`/${newLocale}/${path}`);
    };

    const navLinks = [
        { name: t('home'), href: `/${locale}` },
        { name: t('menu'), href: `/${locale}/menu` },
        { name: t('about'), href: `/${locale}/about` },
        { name: t('blog'), href: `/${locale}/blog` },
        { name: t('gallery'), href: `/${locale}/gallery` },
        { name: t('contact'), href: `/${locale}/contact` },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center relative">
                {/* Logo - Left */}
                <Link href={`/${locale}`} className="z-50">
                    <img src="/logo.webp" alt="My Terrace Logo" className="h-12 w-auto object-contain" />
                </Link>

                {/* Desktop Nav - Absolute Center */}
                <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white hover:text-amber-500 transition-colors font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Language Switcher - Right */}
                <div className="hidden md:block z-50">
                    <div className="relative group">
                        <button
                            className="flex items-center gap-1 text-white hover:text-amber-500 py-2"
                        >
                            <Globe size={20} />
                            <span className="uppercase">{locale}</span>
                        </button>
                        <div className="absolute right-0 top-full pt-2 w-24 hidden group-hover:block hover:block">
                            <div className="bg-zinc-900 rounded-md shadow-lg overflow-hidden border border-zinc-800">
                                {['tr', 'en', 'ar', 'de'].map((l) => (
                                    <button
                                        key={l}
                                        onClick={() => switchLocale(l)}
                                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-zinc-800 ${locale === l ? 'text-amber-500' : 'text-white'
                                            }`}
                                    >
                                        {l.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-zinc-900 border-t border-zinc-800"
                    >
                        <nav className="flex flex-col p-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="py-3 text-white hover:text-amber-500 border-b border-zinc-800 last:border-0"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex gap-4 py-4 justify-center">
                                {['tr', 'en', 'ar', 'de'].map((l) => (
                                    <button
                                        key={l}
                                        onClick={() => {
                                            switchLocale(l);
                                            setIsOpen(false);
                                        }}
                                        className={`uppercase ${locale === l ? 'text-amber-500 font-bold' : 'text-zinc-400'
                                            }`}
                                    >
                                        {l}
                                    </button>
                                ))}
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
