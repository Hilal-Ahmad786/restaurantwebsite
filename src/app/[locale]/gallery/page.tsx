import GalleryGrid from '@/components/GalleryGrid';
import { useTranslations } from 'next-intl';

export default function GalleryPage() {
    const t = useTranslations('Navigation');

    return (
        <div className="pt-32 pb-20 bg-zinc-50 min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-zinc-900">
                    {t('gallery')}
                </h1>
                <GalleryGrid />
            </div>
        </div>
    );
}
