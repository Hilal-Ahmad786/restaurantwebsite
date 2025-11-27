'use client';

import FloatingCallButton from './FloatingCallButton';
import FloatingWhatsApp from './FloatingWhatsApp';

export default function FloatingButtons() {
    return (
        <div className="fixed z-50 flex gap-0 
            bottom-0 left-0 right-0 w-full flex-row p-0 border-none bg-transparent
            md:bottom-6 md:right-6 md:left-auto md:flex-col md:gap-4 md:items-end md:w-auto">
            <FloatingCallButton />
            <FloatingWhatsApp />
        </div>
    );
}
