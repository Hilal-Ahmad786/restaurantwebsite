'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import siteInfo from '@/data/site-info.json';

export default function Footer({ locale }: { locale: string }) {
    const t = useTranslations('Footer');
    const nav = useTranslations('Navigation');

    return (
        <footer className="bg-zinc-50 text-zinc-600 py-12 border-t border-zinc-200">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-zinc-900 mb-4">My Terrace</h3>
                        <p className="text-zinc-500 mb-4">
                            {siteInfo.description}
                        </p>
                        <div className="flex gap-4">
                            <a href={siteInfo.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-amber-600 transition-colors">
                                <Instagram size={24} />
                            </a>
                            <a href={siteInfo.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-amber-600 transition-colors">
                                <Facebook size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-zinc-900 mb-4">{t('quickLinks')}</h4>
                        <ul className="space-y-2">
                            <li><Link href={`/${locale}`} className="hover:text-amber-600 transition-colors">{nav('home')}</Link></li>
                            <li><Link href={`/${locale}/menu`} className="hover:text-amber-600 transition-colors">{nav('menu')}</Link></li>
                            <li><Link href={`/${locale}/about`} className="hover:text-amber-600 transition-colors">{nav('about')}</Link></li>
                            <li><Link href={`/${locale}/blog`} className="hover:text-amber-600 transition-colors">{nav('blog')}</Link></li>
                            <li><Link href={`/${locale}/gallery`} className="hover:text-amber-600 transition-colors">{nav('gallery')}</Link></li>
                            <li><Link href={`/${locale}/contact`} className="hover:text-amber-600 transition-colors">{nav('contact')}</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold text-zinc-900 mb-4">{t('contact')}</h4>
                        <div className="space-y-2 text-zinc-500">
                            <div className="flex items-start gap-2">
                                <MapPin size={20} className="shrink-0 mt-1 text-amber-600" />
                                <p>{siteInfo.address}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone size={20} className="text-amber-600" />
                                <a href={`tel:${siteInfo.phone}`} className="hover:text-amber-600 transition-colors">
                                    {siteInfo.phone}
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail size={20} className="text-amber-600" />
                                <a href={`mailto:${siteInfo.email}`} className="hover:text-amber-600 transition-colors">
                                    {siteInfo.email}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="text-lg font-semibold text-zinc-900 mb-4">{t('hours')}</h4>
                        <div className="flex items-center gap-2 text-zinc-500">
                            <Clock size={20} className="text-amber-600" />
                            <p>Everyday: {siteInfo.openingHours}</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-zinc-200 pt-8 text-center text-zinc-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} {siteInfo.name}. {t('rights')}</p>
                    <div className="mt-2 flex justify-center items-center gap-2">
                        <a
                            href="https://paksoft.com.tr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center group"
                        >
                            <span className="text-zinc-500 mr-2 group-hover:text-amber-600 transition-colors">Developed by</span>
                            <div className="flex items-center text-amber-600 group-hover:text-amber-500 transition-colors">
                                {/* Custom Crescent Icon */}
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -rotate-12">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.08-1.38-.7.13-1.42.21-2.16.21-5.52 0-10-4.48-10-10S9.42 2.83 14.92 2.83c.74 0 1.46.08 2.16.21C15.58 2.5 13.85 2 12 2z" />
                                </svg>
                                <span className="font-bold text-lg tracking-wide">PakSoft</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
