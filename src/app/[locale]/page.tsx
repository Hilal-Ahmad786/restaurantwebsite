import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return (
        <>
            <Hero locale={locale} />
            {/* We can keep sections on home page as teasers or full sections as per preference.
          For a restaurant, a single page scroll is often nice, but since we have dedicated pages now,
          we can keep the home page as a "Hub".
          Let's keep the sections for now as they serve as good content for the landing page.
      */}
            <AboutSection />
            <MenuSection locale={locale} />
            <FAQSection />
            <ContactSection />
        </>
    );
}
