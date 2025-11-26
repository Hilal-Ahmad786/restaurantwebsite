'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

const images = [
    {
        src: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1000&auto=format&fit=crop",
        alt: "Sultanahmet Square"
    },
    {
        src: "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=1000&auto=format&fit=crop",
        alt: "Hagia Sophia"
    },
    {
        src: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=1000&auto=format&fit=crop",
        alt: "Blue Mosque"
    },
    {
        src: "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=1000&auto=format&fit=crop",
        alt: "Topkapi Palace"
    },
    {
        src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop",
        alt: "Grand Bazaar"
    },
    {
        src: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1000&auto=format&fit=crop",
        alt: "Galata Tower"
    },
    {
        src: "https://images.unsplash.com/photo-1622587853578-dd1bf9608d26?q=80&w=1000&auto=format&fit=crop",
        alt: "Bosphorus View"
    },
    {
        src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop",
        alt: "Turkish Kebab"
    },
    {
        src: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=1000&auto=format&fit=crop",
        alt: "Restaurant Atmosphere"
    }
];

export default function GalleryGrid() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                        onClick={() => setSelectedImage(image.src)}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white font-semibold text-lg">{image.alt}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-amber-500 transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={40} />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Gallery Preview"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg"
                    />
                </div>
            )}
        </>
    );
}
