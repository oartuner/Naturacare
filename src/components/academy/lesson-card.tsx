import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle, BookOpen, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface LessonCardProps {
    title: string;
    description: string;
    category: 'Masterclass' | 'Quick Guide' | 'Ritual' | 'Eğitim' | 'Rehber' | 'Ritüel';
    duration?: string;
    image?: string;
    slug: string;
    instructor?: string;
}

export function LessonCard({ title, description, category, duration, image, slug, instructor }: LessonCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex flex-col bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-primary-900/[0.03] hover:shadow-3xl hover:shadow-primary-900/[0.08] transition-all duration-700 overflow-hidden"
        >
            {/* Visual Header */}
            <div className="h-64 w-full relative overflow-hidden bg-primary-50">
                <Image
                    src={image || "https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&q=80&w=800"}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 text-[10px] font-extrabold tracking-[0.2em] uppercase text-primary-950 rounded-full shadow-sm">
                    {category}
                </div>

                <div className="absolute bottom-5 left-5 flex items-center text-[10px] text-white font-extrabold tracking-[0.2em] transition-all translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 uppercase">
                    <Clock className="w-3.5 h-3.5 mr-2 text-accent-400" /> {duration}
                </div>
            </div>

            {/* Content */}
            <div className="p-10 flex flex-col flex-1">
                <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-serif font-extrabold text-primary-950 mb-4 group-hover:text-primary-600 transition-colors leading-[1.1] tracking-tight">
                        {title}
                    </h3>
                    {instructor && (
                        <p className="text-accent-600 text-[10px] font-extrabold uppercase tracking-[0.2em] mb-4">
                            Eğitmen: {instructor}
                        </p>
                    )}
                    <p className="text-primary-950/70 text-base mb-8 leading-relaxed font-normal line-clamp-3">
                        {description}
                    </p>
                </div>

                <div className="flex items-center justify-between border-t border-gray-50 pt-8 mt-auto">
                    <Link href={`/academy/${slug}`} className="w-full">
                        <Button className="w-full group/btn h-14 rounded-full bg-primary-950 text-white hover:bg-primary-900 transition-all font-extrabold text-sm shadow-xl shadow-primary-900/10">
                            <span>Kayıt Ol</span>
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
