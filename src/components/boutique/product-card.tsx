import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Heart, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
    id: string;
    number?: string;
    name: string;
    benefit?: string;
    price: string;
    category: string;
    slug: string;
    image?: string;
    onQuickView?: () => void;
}

export function ProductCard({ number, name, benefit, price, category, slug, image, onQuickView }: ProductCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-white border border-gray-100 p-4 flex flex-col hover:shadow-2xl hover:shadow-primary-900/5 transition-shadow duration-500 rounded-3xl h-full"
        >
            {/* Image Container */}
            <div className="relative h-72 w-full mb-6 rounded-2xl overflow-hidden bg-white/50 border border-gray-100/50">
                <Image
                    src={image || "/images/placeholder.png"}
                    alt={name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/5 transition-colors" />

                {/* Actions Overlay */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <Button variant="ghost" size="icon" className="bg-white/80 backdrop-blur-md rounded-full text-primary-900 hover:bg-white">
                        <Heart className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onQuickView}
                        className="bg-white/80 backdrop-blur-md rounded-full text-primary-900 hover:bg-white"
                    >
                        <Eye className="h-4 w-4" />
                    </Button>
                </div>

                <div className="absolute bottom-4 left-4 right-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Button variant="outline" className="w-full h-12 rounded-xl bg-white/90 backdrop-blur-md text-primary-900 hover:bg-white font-extrabold border-none">
                        Sepete Ekle
                    </Button>
                </div>

                {number && (
                    <div className="absolute top-4 left-4 bg-primary-900 text-white text-[10px] font-extrabold px-3 py-1 rounded-full">
                        {number}
                    </div>
                )}
            </div>

            <div className="px-2 pb-2">
                <span className="text-[10px] tracking-[0.2em] uppercase text-primary-500 font-extrabold mb-2 block">
                    {category}
                </span>

                <h3 className="text-lg font-serif font-extrabold text-primary-950 mb-1 group-hover:text-primary-600 transition-colors">
                    {name}
                </h3>

                {benefit && (
                    <p className="text-xs text-primary-950 font-normal leading-relaxed italic mb-4 line-clamp-2">
                        {benefit}
                    </p>
                )}

                <div className="mt-auto flex items-center justify-between">
                    <span className="text-lg font-serif text-primary-900 font-extrabold">
                        {price} <span className="text-xs uppercase ml-1">TL</span>
                    </span>
                    <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary-900 group-hover:bg-primary-900 group-hover:text-white transition-all">
                        <ShoppingBag size={14} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
