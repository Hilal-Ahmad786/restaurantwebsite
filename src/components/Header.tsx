'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header({ locale }: { locale: string }) {
    const t = useTranslations('Navigation');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-white/95 backdrop-blur-sm shadow-sm py-5'}`}
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
                            className={`transition-colors font-medium ${scrolled ? 'text-zinc-800 hover:text-amber-600' : 'text-zinc-800 hover:text-amber-600'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Language Switcher - Right */}
                <div className="hidden md:block z-50">
                    <div className="relative group">
                        <button
                            className={`flex items-center gap-1 py-2 ${scrolled ? 'text-zinc-800 hover:text-amber-600' : 'text-zinc-800 hover:text-amber-600'}`}
                        >
                            <Globe size={20} />
                            <span className="uppercase">{locale}</span>
                        </button>
                        <div className="absolute right-0 top-full pt-2 w-24 hidden group-hover:block hover:block">
                            <div className="bg-white rounded-md shadow-lg overflow-hidden border border-zinc-200">
                                {['tr', 'en', 'ar', 'de'].map((l) => (
                                    <button
                                        key={l}
                                        onClick={() => switchLocale(l)}
                                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-zinc-100 ${locale === l ? 'text-amber-600 font-bold' : 'text-zinc-800'
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
                    className={`md:hidden z-50 ${scrolled ? 'text-zinc-800' : 'text-white'}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} className="text-zinc-800" /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-zinc-200 p-4 shadow-lg">
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-zinc-800 hover:text-amber-600 transition-colors font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex gap-2 pt-4 border-t border-zinc-200">
                            {['tr', 'en', 'ar', 'de'].map((l) => (
                                <button
                                    key={l}
                                    onClick={() => {
                                        switchLocale(l);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`uppercase ${locale === l ? 'text-amber-600 font-bold' : 'text-zinc-600'
                                        }`}
                                >
                                    {l}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
