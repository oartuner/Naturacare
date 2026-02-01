'use client';

import { useState } from "react";
import Link from 'next/link';
import { ProductCard } from "@/components/boutique/product-card";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ShoppingBag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRODUCTS, Product } from "@/data/products";
import { ProductDetailModal } from "@/components/boutique/product-detail-modal";

const CATEGORIES = ["Tümü", "Uçucu Yağlar", "Sabit Yağlar", "Gıda Takviyesi", "Ritüel", "Homeopati"];

export default function BoutiquePage() {
    const [activeCategory, setActiveCategory] = useState("Tümü");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const filteredProducts = PRODUCTS.filter(p => {
        const matchesCategory = activeCategory === "Tümü" || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-clinical-white pt-32 pb-20 overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Header / Hero Section */}
                <div className="max-w-4xl mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 text-primary-500 font-extrabold tracking-[0.2em] text-xs uppercase mb-6"
                    >
                        <Sparkles size={14} /> Bilinçli Bakım Seçkisi
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-serif font-extrabold text-primary-950 mb-8 leading-[0.9] tracking-tighter"
                    >
                        Butik <br />
                        <span className="italic text-primary-600">Koleksiyon</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-primary-950 font-normal max-w-xl leading-relaxed"
                    >
                        Doğanın en saf özlerini, bilimsel hassasiyetle harmanladık. Sağlığınız ve esenliğiniz için küratörlüğünü yaptığımız özel serimizi keşfedin.
                    </motion.p>
                </div>

                {/* Search & Filter Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-white p-4 rounded-3xl border border-gray-100 shadow-xl shadow-primary-900/5">
                    {/* Categories */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide w-full md:w-auto">
                        <div className="p-2 bg-primary-50 rounded-full mr-2 hidden sm:block">
                            <Filter size={16} className="text-primary-600" />
                        </div>
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "px-6 py-2.5 text-[10px] font-extrabold tracking-[0.1em] uppercase transition-all rounded-full whitespace-nowrap",
                                    activeCategory === cat
                                        ? "bg-primary-900 text-white shadow-lg shadow-primary-900/20"
                                        : "bg-transparent text-primary-900/40 hover:text-primary-900 hover:bg-primary-50"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search Input */}
                    <div className="relative w-full md:w-80">
                        <input
                            type="text"
                            placeholder="Ürün ara..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full h-12 pl-12 pr-6 bg-primary-50 rounded-full border-none focus:ring-2 focus:ring-primary-900 transition-all text-sm text-primary-950 placeholder:text-primary-900/30 font-medium"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-900/30" size={18} />
                    </div>
                </div>

                {/* Product Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <ProductCard key={product.id} {...product} onQuickView={() => setSelectedProduct(product)} />
                            ))
                        ) : (
                            <motion.div
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="col-span-full py-32 text-center"
                            >
                                <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Search size={32} className="text-primary-300" />
                                </div>
                                <h3 className="text-2xl font-serif font-extrabold text-primary-950 mb-2">Sonuç Bulunamadı</h3>
                                <p className="text-primary-800/50 font-normal">Aradığınız kriterlere uygun ürün bulunmuyor. Lütfen filtreleri kontrol edin.</p>
                                <Button variant="outline" className="mt-8 rounded-full border-primary-900 text-primary-900" onClick={() => { setActiveCategory("Tümü"); setSearchQuery(""); }}>
                                    Tümünü Göster
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Support Section (Premium CTA) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-40 relative rounded-[3rem] overflow-hidden bg-primary-950 text-white p-12 md:p-24 text-center border border-white/10 shadow-3xl"
                >
                    {/* Abstract Premium Background Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-accent-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px] mix-blend-screen" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(198,137,88,0.05)_0%,transparent_70%)]" />
                    </div>

                    {/* Content Glassmorphism Container */}
                    <div className="relative z-10 max-w-3xl mx-auto backdrop-blur-sm p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 shadow-2xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="inline-block text-accent-400 font-extrabold tracking-[0.4em] uppercase text-[10px] mb-8 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
                                Kişiselleştirilmiş Bakım
                            </span>
                        </motion.div>

                        <h2 className="text-4xl md:text-7xl font-serif font-extrabold text-white mb-8 leading-tight tracking-tight">
                            Özel Ritüel <br />
                            <span className="italic text-accent-300">Aboneliği</span>
                        </h2>

                        <p className="text-primary-100/80 mb-12 text-lg md:text-xl font-normal leading-relaxed max-w-xl mx-auto">
                            Her ay ihtiyacınıza özel hazırlanan şifa kürlerini, <span className="text-white font-medium">uzman eczacı danışmanlığında</span> kapınızda karşılayın.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button className="group relative bg-white text-primary-950 hover:bg-white/90 rounded-full h-16 px-10 text-lg font-extrabold shadow-2xl transition-all hover:scale-105 active:scale-95 overflow-hidden">
                                <span className="relative z-10">Şimdi Katıl</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-accent-200/0 via-accent-200/20 to-accent-200/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </Button>

                            <Button variant="ghost" className="text-white hover:bg-white/5 rounded-full h-16 px-10 text-lg font-normal border border-white/10 backdrop-blur-md transition-all hover:border-white/20">
                                Nasıl Çalışır?
                            </Button>
                        </div>

                        {/* Micro-indicators */}
                        <div className="mt-12 flex items-center justify-center gap-8 text-[10px] uppercase tracking-[0.2em] text-white/40 font-extrabold">
                            <span className="flex items-center gap-2"><div className="w-1 h-1 bg-accent-500 rounded-full" /> Ücretsiz Kargo</span>
                            <span className="flex items-center gap-2"><div className="w-1 h-1 bg-accent-500 rounded-full" /> İptal Seçeneği</span>
                            <span className="flex items-center gap-2"><div className="w-1 h-1 bg-accent-500 rounded-full" /> Uzman Desteği</span>
                        </div>
                    </div>
                </motion.div>
                <ProductDetailModal
                    product={selectedProduct}
                    isOpen={!!selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            </div>
        </div>
    );
}
