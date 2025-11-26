import MenuSection from '@/components/MenuSection';

export default async function MenuPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return (
        <div className="pt-20">
            <MenuSection locale={locale} />
        </div>
    );
}
