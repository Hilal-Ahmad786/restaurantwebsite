import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { ReactNode } from 'react';
import '../globals.css';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'My Terrace Cafe Restaurant',
    description: 'Best restaurant in Sultanahmet with a view.',
    icons: {
        icon: '/logo.webp',
    },
};

import FloatingCallButton from '@/components/FloatingCallButton';

export default async function LocaleLayout({
    children,
    params
}: {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    // Ensure that the incoming `locale` is valid
    if (!['en', 'tr', 'ar', 'de'].includes(locale)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale} className="scroll-smooth">
            <body className="bg-white text-zinc-900 antialiased" suppressHydrationWarning>
                <NextIntlClientProvider messages={messages}>
                    <GoogleAnalytics />
                    <TopBar />
                    <Header locale={locale} />
                    <main className="min-h-screen pt-20">
                        {children}
                    </main>
                    <Footer locale={locale} />
                    <FloatingCallButton />
                </NextIntlClientProvider>
            </body>
        </html>

    );
}
