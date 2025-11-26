'use client';

import { useTranslations } from 'next-intl';
import { Star } from 'lucide-react';

export default function TopBar() {
    const t = useTranslations('TopBar');

    return (
        <div className="bg-zinc-900 text-white py-2 text-center text-sm hidden md:block">
            <div className="container mx-auto px-4 flex items-center justify-center gap-2">
                <span>{t('viewText')}</span>
                <Star size={14} className="fill-amber-500 text-amber-500" />
                <span className="font-semibold">{t('rating')}</span>
            </div>
        </div>
    );
}
