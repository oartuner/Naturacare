'use client';

import { LessonCard } from "@/components/academy/lesson-card";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, GraduationCap, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function AcademyPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("Tümü");

    const lessons = [
        {
            title: "AKUT Homeopati 2026",
            description: "Defne Tahtakıran rehberliğinde; 50 temel remediyi, potens-doz protokollerini ve vaka analizlerini kapsayan derinlemesine sertifika programı.",
            category: "Eğitim" as const,
            duration: "45 Saat Canlı",
            image: "/images/academy/akut-homeopati-2026.jpg",
            slug: "akut-homeopati-2026",
            instructor: "Defne Tahtakıran"
        },
        {
            title: "Veteriner Hekimler için Akut Homeopati",
            description: "Klinik vaka örnekleri, temel homeopati prensipleri ve veteriner pratikte akut hastalık remedileri üzerine uzmanlık eğitimi.",
            category: "Eğitim" as const,
            duration: "6 Gün / Yoğun",
            image: "/images/academy/veteriner-homeopati.jpg",
            slug: "veteriner-homeopati",
            instructor: "Defne Tahtakıran"
        },
        {
            title: "Mevsimsel Şifa Ritüelleri",
            description: "Doğanın döngüleriyle uyumlu, mevsim geçişlerinde bağışıklık ve ruhsal dengeyi koruyan kadim uygulama rehberleri.",
            category: "Ritüel" as const,
            duration: "20 dk Okuma",
            image: "/images/academy/seasonal-rituals.jpg",
            slug: "seasonal-rituals"
        },
        {
            title: "Aromaterapi Temelleri 101",
            description: "Uçucu yağların kimyası, güvenli kullanım protokolleri ve günlük yaşamda aromaterapi uygulamaları başlangıç programı.",
            category: "Eğitim" as const,
            duration: "120 dk Video",
            image: "/images/academy/aromatherapy-basics.png",
            slug: "aromatherapy-basics"
        },
        {
            title: "Evde Doğal Ecza Dolabı",
            description: "Acil durumlarda homeopatik remediler ve aromaterapi ile hızlı, yan etkisiz çözümler oluşturma rehberi.",
            category: "Rehber" as const,
            duration: "35 dk Okuma",
            image: "/images/academy/natural-first-aid.jpg",
            slug: "natural-first-aid"
        },
        {
            title: "Bütüncül Detoks Programı",
            description: "Vücudun doğal detoks mekanizmalarını destekleyen mineraller, bitkisel kürler ve yaşam tarzı düzenlemeleri.",
            category: "Ritüel" as const,
            duration: "15 Günlük Plan",
            image: "/images/academy/holistic-detox.jpg",
            slug: "holistic-detox"
        }
    ];

    const categories = ["Tümü", "Eğitim", "Rehber", "Ritüel"];
    const filteredLessons = selectedCategory === "Tümü"
        ? lessons
        : lessons.filter(l => l.category === selectedCategory);

    return (
        <div className="min-h-screen bg-clinical-white pt-32 pb-20 overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Hero section */}
                <div className="max-w-4xl mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 text-primary-500 font-extrabold tracking-[0.2em] text-xs uppercase mb-6"
                    >
                        <GraduationCap size={16} /> Şifa Akademisi
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-[7rem] font-serif font-extrabold text-primary-950 mb-10 leading-[0.85] tracking-tight"
                    >
                        Şifanın Bilgisiyle <br />
                        <span className="italic text-primary-600">Ustalaşın</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-primary-950/80 font-normal max-w-3xl leading-relaxed"
                    >
                        Anatolia Şifa Akademisi’nin uzmanlığıyla doğal tıp dünyasında derinleşin. Homeopatiden aromaterapiye, bilimin ve doğanın buluştuğu eğitimler.
                    </motion.p>
                </div>

                {/* Categories & Search (Refined style) */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 px-4">
                    <div className="flex items-center gap-6 text-xs font-extrabold uppercase tracking-widest text-primary-900/40 overflow-x-auto scrollbar-hide w-full md:w-auto">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={cn(
                                    "pb-1 transition-all whitespace-nowrap",
                                    selectedCategory === cat
                                        ? "text-primary-950 border-b-2 border-primary-950 px-2"
                                        : "hover:text-primary-950 hover:px-2"
                                )}
                            >
                                {cat === "Tümü" ? "Tüm Eğitimler" :
                                    cat === "Eğitim" ? "Videolar & Kurslar" : cat + "ler"}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredLessons.map((lesson) => (
                            <LessonCard key={lesson.slug} {...lesson} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Newsletter / Stay Updated - Premium Overhaul */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-48 relative rounded-[4rem] overflow-hidden bg-primary-950 text-white p-12 md:p-24 text-center border border-white/10 shadow-3xl"
                >
                    {/* Background Accents */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500/0 via-accent-300 to-accent-500/0" />
                        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[100px]" />
                        <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[100px]" />
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto backdrop-blur-md p-10 rounded-[3rem] bg-white/[0.03] border border-white/5 shadow-inner">
                        <Sparkles className="mx-auto mb-10 text-accent-400 animate-pulse" size={56} />
                        <h3 className="text-4xl md:text-6xl font-serif font-extrabold text-white mb-8 leading-tight tracking-tight">Yeni Atölyelerden <br /> Haberdar Olun</h3>
                        <p className="text-lg md:text-xl text-primary-100/70 font-normal mb-14 max-w-xl mx-auto leading-relaxed">
                            Ayda bir kez yayınladığımız bültenimizde özel indirimler, yeni eğitimler ve mevsimsel sağlık ipuçlarını paylaşıyoruz.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="E-posta adresiniz"
                                className="w-full h-16 px-10 rounded-full bg-white/5 border border-white/10 focus:border-accent-500/50 focus:ring-4 focus:ring-accent-500/10 outline-none transition-all text-white placeholder:text-white/20 text-lg"
                            />
                            <Button className="h-16 px-12 rounded-full bg-white text-primary-950 hover:bg-accent-50 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-black/20 whitespace-nowrap font-extrabold text-lg">
                                Kayıt Ol
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
