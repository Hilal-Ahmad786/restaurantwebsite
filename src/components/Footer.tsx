'use client';

import { useTranslations } from 'next-intl';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import siteInfo from '@/data/site-info.json';

export default function Footer() {
    const t = useTranslations('Footer');
    const c = useTranslations('Contact');

    return (
        <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-900">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
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

                <div className="text-center pt-8 border-t border-zinc-900 text-sm">
                    <p>&copy; {new Date().getFullYear()} My Terrace Cafe Restaurant. {t('rights')}</p>
                </div>
            </div>
        </footer>
    );
}
