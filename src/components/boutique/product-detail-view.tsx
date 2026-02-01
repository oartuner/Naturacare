"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sparkles, Check, ShoppingBag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";

interface ProductDetailViewProps {
    product: Product;
    isPage?: boolean;
}

export function ProductDetailView({ product, isPage = false }: ProductDetailViewProps) {
    const [activeTab, setActiveTab] = useState<"desc" | "usage" | "ingredients">("desc");

    return (
        <div className={cn(
            "flex flex-col md:flex-row relative w-full h-full",
            isPage ? "max-w-7xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden min-h-[70vh]" : "h-full"
        )}>
            {isPage && (
                <Link href="/boutique" className="absolute top-6 left-6 z-20">
                    <Button variant="ghost" className="bg-white/80 backdrop-blur-md rounded-full text-primary-900 group">
                        <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={18} /> Geri Dön
                    </Button>
                </Link>
            )}

            {/* Left Side: Image */}
            <div className="w-full md:w-1/2 bg-neutral-50 relative min-h-[400px] md:min-h-full p-8 md:p-12 flex items-center justify-center">
                <div className="relative w-full h-full max-h-[600px] aspect-square">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority
                    />
                </div>
                {/* Category Badge */}
                <div className="absolute top-8 right-8 bg-primary-900/5 backdrop-blur-sm px-4 py-2 rounded-full text-primary-900 text-xs font-extrabold tracking-[0.2em] uppercase">
                    {product.category}
                </div>
            </div>

            {/* Right Side: Content */}
            <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col overflow-y-auto custom-scrollbar bg-white">
                <div className="mb-6 md:mb-8">
                    <div className="mb-4 flex items-center gap-2 text-primary-500 font-extrabold tracking-[0.2em] text-[10px] uppercase">
                        <Sparkles size={12} /> Uzman Seçimi
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-primary-950 mb-4 md:mb-6 leading-tight">
                        {product.name}
                    </h2>
                    <div className="flex items-center gap-4">
                        <span className="text-2xl md:text-3xl font-medium text-primary-600">
                            {product.price} <span className="text-sm">TL</span>
                        </span>
                        <div className="px-3 py-1 bg-green-50 text-green-700 text-[10px] font-extrabold rounded-full uppercase tracking-widest">
                            Stokta Var
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 md:gap-8 border-b border-gray-100 mb-8 overflow-x-auto scrollbar-hide">
                    {[
                        { id: "desc", label: "Hikayesi" },
                        { id: "usage", label: "Kullanım" },
                        { id: "ingredients", label: "İçerik" }
                    ].map((tab) => (
                        (tab.id === 'desc' || (product as any)[tab.id]) && (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={cn(
                                    "pb-4 text-xs md:text-sm font-extrabold tracking-widest uppercase transition-all relative whitespace-nowrap",
                                    activeTab === tab.id ? "text-primary-900" : "text-gray-400 hover:text-gray-600"
                                )}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 w-full h-[3px] bg-primary-900 rounded-full" />
                                )}
                            </button>
                        )
                    ))}
                </div>

                {/* Tab Content */}
                <div className="flex-1 mb-10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="text-primary-950 text-lg font-normal leading-relaxed whitespace-pre-wrap"
                        >
                            {activeTab === "desc" && product.description}
                            {activeTab === "usage" && product.usage}
                            {activeTab === "ingredients" && (product as any).ingredients}
                        </motion.div>
                    </AnimatePresence>

                    {/* Features List */}
                    {activeTab === "desc" && product.features && (
                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {product.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-primary-800 text-sm font-medium p-3 bg-neutral-50 rounded-2xl border border-neutral-100">
                                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 shadow-inner">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    {feature}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Actions */}
                <div className="mt-auto border-t border-gray-100 pt-8 flex items-center gap-4">
                    <Button className="flex-1 h-16 rounded-full bg-primary-900 text-white hover:bg-primary-800 text-lg font-extrabold shadow-2xl shadow-primary-900/30 transition-transform active:scale-95">
                        <ShoppingBag className="mr-3" size={24} />
                        Sepete Ekle
                    </Button>
                    <Button variant="outline" className="h-16 w-16 rounded-full border-gray-200 hover:border-primary-900 group transition-all">
                        <Sparkles className="text-primary-400 group-hover:text-primary-600 group-hover:scale-110 transition-transform" size={24} />
                    </Button>
                </div>
            </div>
        </div>
    );
}
