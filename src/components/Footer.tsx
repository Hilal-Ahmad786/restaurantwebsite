'use client';

import { useTranslations } from 'next-intl';
import { Facebook, Instagram, MapPin, Phone, Mail, Moon } from 'lucide-react';
import siteInfo from '@/data/site-info.json';

export default function Footer() {
    const t = useTranslations('Footer');
    const c = useTranslations('Contact');

    return (
        <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-900">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">My Terrace</h3>
                        <p className="mb-4">{siteInfo.description}</p>
                        <div className="flex gap-4">
                            <a href={siteInfo.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">
                                <Instagram size={24} />
                            </a>
                            <a href={siteInfo.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">
                                <Facebook size={24} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/menu" className="hover:text-amber-500 transition-colors">Menu</a></li>
                            <li><a href="/about" className="hover:text-amber-500 transition-colors">About</a></li>
                            <li><a href="/blog" className="hover:text-amber-500 transition-colors">Blog</a></li>
                            <li><a href="/gallery" className="hover:text-amber-500 transition-colors">Gallery</a></li>
                            <li><a href="/contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">{c('title')}</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <MapPin size={20} className="text-amber-500 shrink-0 mt-1" />
                                <span>{siteInfo.address}</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={20} className="text-amber-500 shrink-0" />
                                <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{siteInfo.phone}</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={20} className="text-amber-500 shrink-0" />
                                <a href={`mailto:${siteInfo.email}`} className="hover:text-white transition-colors">{siteInfo.email}</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">{c('hours')}</h3>
                        <p className="text-lg text-white">{siteInfo.openingHours}</p>
                        <p className="mt-2 text-sm">Every Day / Her Gün</p>
                    </div>
                </div>

                <div className="text-center pt-8 border-t border-zinc-900 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} My Terrace Cafe Restaurant. {t('rights')}</p>
                    <a
                        href="https://paksoft.com.tr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center group"
                    >
                        <span className="text-zinc-500 mr-2 group-hover:text-amber-500 transition-colors">Developed by</span>
                        <div className="flex items-center gap-1 text-amber-500 group-hover:text-amber-400 transition-colors">
                            {/* Custom Crescent Icon */}
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -rotate-12">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.08-1.38-.7.13-1.42.21-2.16.21-5.52 0-10-4.48-10-10S9.42 2.83 14.92 2.83c.74 0 1.46.08 2.16.21C15.58 2.5 13.85 2 12 2z" />
                            </svg>
                            <span className="font-bold text-lg tracking-wide">PakSoft</span>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    );
}
