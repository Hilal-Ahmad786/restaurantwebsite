'use client';

import FloatingCallButton from './FloatingCallButton';
import FloatingWhatsApp from './FloatingWhatsApp';

export default function FloatingButtons() {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            <FloatingCallButton />
            <FloatingWhatsApp />
        </div>
    );
}
