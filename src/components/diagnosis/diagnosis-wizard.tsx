'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, RefreshCcw, Sparkles, ShoppingBag, ArrowLeft, Moon, Wind, Zap, Brain, Sun, Activity, Cloud, Droplets, Heart } from 'lucide-react';
import Link from 'next/link';

// Updated Mock Data with Turkish Translations & Better Logic
const QUESTIONS = {
    step1: {
        question: "Bugün öncelikli sağlık odak noktanız nedir?",
        options: [
            { id: 'sleep', label: 'Uyku Kalitesi', icon: Moon, color: 'from-indigo-500 to-purple-600' },
            { id: 'stress', label: 'Stres ve Kaygı', icon: Wind, color: 'from-emerald-400 to-teal-600' },
            { id: 'energy', label: 'Düşük Enerji ve Yorgunluk', icon: Zap, color: 'from-amber-400 to-orange-600' },
            { id: 'skin', label: 'Cilt Sağlığı', icon: Sparkles, color: 'from-rose-400 to-pink-600' },
        ]
    },
    step2: {
        sleep: {
            question: "Uyku probleminiz kendisini nasıl gösteriyor?",
            options: [
                { id: 'falling', label: 'Uykuya dalmakta zorluk (Zihin susmuyor)', result: 'bergamot-yagi', icon: Brain, color: 'from-indigo-400 to-purple-500' },
                { id: 'waking', label: 'Sabahları yorgun ve ağır uyanma', result: 'biberiye-yagi', icon: Sun, color: 'from-amber-400 to-orange-500' },
            ]
        },
        stress: {
            question: "Stres sizi en çok nasıl etkiliyor?",
            options: [
                { id: 'panic', label: 'Ani panik veya huzursuzluk', result: 'nane-yagi', icon: Activity, color: 'from-red-400 to-rose-500' },
                { id: 'burnout', label: 'Uzun süreli tükenmişlik hissi', result: 'bergamot-yagi', icon: Cloud, color: 'from-slate-400 to-indigo-500' },
            ]
        },
        energy: {
            question: "Enerjiniz en çok ne zaman düşüyor?",
            options: [
                { id: 'morning', label: 'Sabah mahmurluğu, güne başlayamama', result: 'biberiye-yagi', icon: Sun, color: 'from-orange-400 to-amber-500' },
                { id: 'afternoon', label: 'Öğleden sonra gelen ağırlık (Saat 15:00 suları)', result: 'inatalian-quad4', icon: Moon, color: 'from-indigo-400 to-blue-500' },
            ]
        },
        skin: {
            question: "Cilt durumunuzu en iyi hangisi tanımlar?",
            options: [
                { id: 'dry', label: 'Kuru, nemsiz ve cansız cilt', result: 'argan-yagi', icon: Droplets, color: 'from-blue-400 to-cyan-500' },
                { id: 'spots', label: 'Leke ve cilt tonu eşitsizliği', result: 'iconix-brightening', icon: Sparkles, color: 'from-amber-300 to-orange-400' },
                { id: 'glow', label: 'Yaşlanma belirtileri ve ışıltı kaybı', result: 'iconix-24k-serum', icon: Heart, color: 'from-yellow-400 to-amber-600' },
            ]
        }
    }
};

const RESULTS: Record<string, any> = {
    'bergamot-yagi': {
        name: 'Bergamot Uçucu Yağı',
        tagline: 'Zihinsel Dinginlik',
        description: 'Zihninizin susmadığı anlarda bergamotun ferahlatıcı etkisi sinir sistemini yatıştırır ve uykuya geçişi kolaylaştırır.',
        link: '/boutique/bergamot-yagi'
    },
    'biberiye-yagi': {
        name: 'Biberiye Uçucu Yağı',
        tagline: 'Zihinsel Odak',
        description: 'Sabahları uyanmakta zorlananlar için idealdir. Kan dolaşımını canlandırarak zihni berraklaştırır ve enerji verir.',
        link: '/boutique/biberiye-yagi'
    },
    'nane-yagi': {
        name: 'Nane Uçucu Yağı',
        tagline: 'Anlık Ferahlık',
        description: 'Ani kaygı anlarında nefes almanıza yardımcı olur, serinletici etkisiyle vücudunuzu ve zihninizi topraklatır.',
        link: '/boutique/nane-yagi'
    },
    'inatalian-quad4': {
        name: 'İnatolian Quard4 Şurup',
        tagline: 'Hücresel Güç',
        description: 'Gün ortasındaki yorgunluğu gidermek için hücrelerinize ihtiyacı olan besin desteğini sağlar.',
        link: '/boutique/inatalian-quad4'
    },
    'argan-yagi': {
        name: 'Argan Yağı',
        tagline: 'Güzellik İksiri',
        description: 'Cildinizin bariyerini onarır, derinlemesine nemlendirir ve doğal bir ışıltı kazandırır.',
        link: '/boutique/argan-yagi'
    },
    'amla-yagi': {
        name: 'Amla Yağı',
        tagline: 'Ayurvedik Bakım',
        description: 'Zengin C vitamini içeriğiyle cildi temizler, saçlarınızı ve saç derinizi kökten uca besler.',
        link: '/boutique/amla-yagi'
    },
    'iconix-24k-serum': {
        name: 'İconix 24k Serum',
        tagline: 'Altın Dokunuş',
        description: 'Saf 24 ayar altın parçacıkları ile zenginleştirilmiş bu lüks serum, cildinize ışıltı kazandırırken elastikiyeti artırır.',
        link: '/boutique/iconix-24k-serum'
    },
    'iconix-brightening': {
        name: 'İconix Brightening Serum',
        tagline: 'Leke Karşıtı Güç',
        description: 'Koyu lekelerin görünümünü azaltmaya ve cilt tonunu eşitlemeye yardımcı olan aydınlatıcı özel formül.',
        link: '/boutique/iconix-brightening'
    }
};

export function DiagnosisWizard() {
    const [step, setStep] = useState(1);
    const [category, setCategory] = useState<string | null>(null);
    const [resultId, setResultId] = useState<string | null>(null);

    const handleOptionSelect = (optionId: string, result?: string) => {
        if (step === 1) {
            setCategory(optionId);
            setStep(2);
        } else if (step === 2) {
            if (result) {
                setResultId(result);
                setStep(3);
            }
        }
    };

    const reset = () => {
        setStep(1);
        setCategory(null);
        setResultId(null);
    };

    const renderStep1 = () => (
        <div className="space-y-12 py-6">
            <div className="space-y-4 text-center md:text-left">
                <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-block text-[11px] font-extrabold uppercase tracking-[0.4em] text-accent-600 bg-accent-50 px-4 py-1.5 rounded-full"
                >
                    Adım 01/02
                </motion.span>
                <h2 className="text-4xl md:text-6xl font-serif font-extrabold text-primary-950 leading-[1.1] tracking-tight">
                    Bugün öncelikli <br />
                    <span className="italic text-primary-600">odağınız nedir?</span>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {QUESTIONS.step1.options.map((opt, idx) => (
                    <motion.button
                        key={opt.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        onClick={() => handleOptionSelect(opt.id)}
                        className="group relative p-10 text-left bg-white border border-gray-100/50 hover:border-primary-900 shadow-xl hover:shadow-3xl hover:shadow-primary-900/10 transition-all duration-500 rounded-[3rem] flex flex-col items-start gap-8 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-700">
                            <Sparkles size={120} className="text-primary-900" />
                        </div>
                        <div className="relative">
                            <div className={`absolute inset-0 bg-linear-to-br ${opt.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500 rounded-full`} />
                            <div className={`w-20 h-20 rounded-3xl bg-linear-to-br ${opt.color} p-[1px] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl shadow-primary-900/10`}>
                                <div className="w-full h-full rounded-[1.4rem] bg-white flex items-center justify-center relative overflow-hidden">
                                    <div className={`absolute inset-0 bg-linear-to-br ${opt.color} opacity-5`} />
                                    <opt.icon className={`w-10 h-10 text-primary-900 group-hover:scale-110 transition-transform duration-500 relative z-10`} />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <span className="text-2xl font-extrabold text-primary-950 tracking-tight">{opt.label}</span>
                            <div className="w-10 h-10 rounded-full border border-primary-100 flex items-center justify-center group-hover:bg-primary-900 group-hover:border-primary-900 transition-all duration-500">
                                <ArrowRight className="w-5 h-5 text-primary-900 group-hover:text-white transition-colors" />
                            </div>
                        </div>
                    </motion.button>
                ))}
            </div>
        </div>
    );

    const renderStep2 = () => {
        if (!category || !QUESTIONS.step2[category as keyof typeof QUESTIONS.step2]) return null;
        const data = QUESTIONS.step2[category as keyof typeof QUESTIONS.step2];

        return (
            <div className="space-y-12 py-6">
                <div className="space-y-6">
                    <button
                        onClick={() => setStep(1)}
                        className="group flex items-center text-[11px] font-extrabold uppercase tracking-[0.3em] text-primary-900/40 hover:text-primary-900 transition-all"
                    >
                        <div className="w-8 h-8 rounded-full border border-primary-100 flex items-center justify-center mr-3 group-hover:bg-primary-50 group-hover:border-primary-200 transition-all">
                            <ArrowLeft className="w-3.5 h-3.5" />
                        </div>
                        Geri Dön
                    </button>
                    <div className="space-y-4">
                        <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.4em] text-accent-600 bg-accent-50 px-4 py-1.5 rounded-full">
                            Adım 02/02
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-primary-950 leading-tight tracking-tight">
                            {data.question}
                        </h2>
                    </div>
                </div>
                <div className="space-y-4">
                    {data.options.map((opt, idx) => (
                        <motion.button
                            key={opt.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => handleOptionSelect(opt.id, opt.result)}
                            className="group w-full p-8 text-left bg-white/60 backdrop-blur-md border border-white hover:border-primary-900/30 shadow-lg hover:shadow-2xl hover:shadow-primary-900/5 transition-all duration-500 rounded-3xl flex items-center overflow-hidden relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-50/0 via-primary-50/50 to-primary-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative z-10 flex items-center w-full">
                                <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${opt.color} p-[1px] mr-6 group-hover:scale-110 transition-all duration-500`}>
                                    <div className="w-full h-full rounded-[0.7rem] bg-white flex items-center justify-center">
                                        <opt.icon className="w-6 h-6 text-primary-900" />
                                    </div>
                                </div>
                                <span className="text-xl text-primary-950 font-extrabold tracking-tight flex-1">{opt.label}</span>
                                <div className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                    <Check className="w-5 h-5 text-white" />
                                </div>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>
        );
    };

    const renderResult = () => {
        if (!resultId) return null;
        const result = RESULTS[resultId as keyof typeof RESULTS];

        return (
            <div className="text-center space-y-16 py-12">
                <div className="relative inline-block">
                    <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", damping: 12, stiffness: 100 }}
                        className="w-32 h-32 bg-linear-to-br from-primary-950 to-primary-900 rounded-[2.5rem] mx-auto flex items-center justify-center text-white shadow-3xl shadow-primary-950/20 relative z-10 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-linear-to-t from-accent-500/20 to-transparent" />
                        <Sparkles className="w-16 h-16 text-accent-400 relative z-10" />
                    </motion.div>

                    {/* Animated Rings */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-x-[-15%] inset-y-[-15%] border-2 border-primary-900/10 rounded-[3rem]"
                    />
                    <motion.div
                        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-x-[-30%] inset-y-[-30%] border border-accent-300/10 rounded-[4rem]"
                    />

                    {/* Floating Particles Simulation */}
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    y: [0, -20, 0],
                                    opacity: [0, 1, 0],
                                    scale: [0.5, 1, 0.5]
                                }}
                                transition={{
                                    duration: 3 + i,
                                    repeat: Infinity,
                                    delay: i * 0.5
                                }}
                                className="absolute w-2 h-2 bg-accent-400 rounded-full blur-[1px]"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div className="space-y-8 relative z-10">
                    <div className="space-y-3">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-[11px] tracking-[0.4em] uppercase text-accent-600 font-extrabold bg-accent-50 px-6 py-2 rounded-full"
                        >
                            Size Özel Önerimiz
                        </motion.span>
                        <h2 className="text-5xl md:text-7xl font-serif font-extrabold text-primary-950 leading-tight tracking-tight">
                            {result.name}
                        </h2>
                    </div>

                    <div className="space-y-4 max-w-2xl mx-auto">
                        <p className="text-2xl italic text-primary-600 font-serif leading-relaxed">
                            "{result.tagline}"
                        </p>
                        <p className="text-primary-950/70 leading-relaxed font-normal text-xl px-4 md:px-0">
                            {result.description}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10 pt-4">
                    <Link href={result.link}>
                        <Button className="h-20 px-16 text-xl rounded-full bg-primary-950 hover:bg-black text-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all min-w-[280px] font-extrabold ring-4 ring-white/10 group">
                            Ürünü Keşfet
                            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                        </Button>
                    </Link>
                    <button
                        onClick={reset}
                        className="group flex items-center text-primary-950/40 hover:text-primary-950 text-xs font-extrabold uppercase tracking-widest px-10 py-4 transition-all hover:bg-primary-50 rounded-full"
                    >
                        <RefreshCcw className="w-4 h-4 mr-3 group-hover:rotate-180 transition-transform duration-700" />
                        Yeniden Başla
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="w-full max-w-5xl mx-auto bg-white/40 backdrop-blur-[40px] p-8 md:p-20 rounded-[4rem] shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-white/60 relative overflow-hidden min-h-[650px] flex flex-col justify-center">
            {/* Ambient Background Lights */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-primary-200 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-accent-200 rounded-full blur-[100px]"
                />
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={step + (category || '') + (resultId || '')}
                    initial={{ opacity: 0, y: 30, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 1.02 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10"
                >
                    {step === 1 && renderStep1()}
                    {step === 2 && renderStep2()}
                    {step === 3 && renderResult()}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
