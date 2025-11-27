'use client';

import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import siteInfo from '@/data/site-info.json';

export default function FloatingCallButton() {
    return (
        <motion.a
            href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: 'spring' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-amber-600 text-white w-16 h-16 rounded-full shadow-lg hover:bg-amber-700 transition-colors flex items-center justify-center group"
            aria-label="Call Us"
        >
            <div className="absolute inset-0 rounded-full bg-amber-600 animate-ping opacity-20 group-hover:opacity-40" />
            <Phone size={24} className="relative z-10" />
        </motion.a>
    );
}
