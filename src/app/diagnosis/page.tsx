import { DiagnosisWizard } from "@/components/diagnosis/diagnosis-wizard";
import { motion } from "framer-motion";
import { Activity, Sparkles } from "lucide-react";

export default function DiagnosisPage() {
    return (
        <div className="min-h-screen bg-clinical-white pt-40 pb-32 relative overflow-hidden">
            {/* Premium Background Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-100/50 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary-900/5 text-primary-900 text-xs font-extrabold tracking-[0.2em] uppercase">
                        <Activity size={14} className="text-primary-500" /> Kişisel Şifa Rehberi
                    </div>
                    <h1 className="text-6xl md:text-7xl font-serif font-extrabold text-primary-950 mb-8 tracking-tighter">
                        Vücudunu <span className="italic text-primary-600">Dinle</span>
                    </h1>
                    <p className="text-xl text-primary-950 max-w-2xl mx-auto font-normal leading-relaxed">
                        Vücudunuz sizinle semptomlar aracılığıyla konuşur. Birkaç basit soruyu yanıtlayın, bunları size özel bir iyileşme ritüeline dönüştürelim.
                    </p>
                </div>

                <DiagnosisWizard />

                {/* Trust Footer */}
                <div className="mt-24 text-center">
                    <p className="text-xs text-primary-900/30 font-extrabold uppercase tracking-[0.3em] flex items-center justify-center gap-2">
                        <Sparkles size={14} /> Uzman Formüller • Analizli İçerikler • Bütüncül Yaklaşım
                    </p>
                </div>
            </div>
        </div>
    );
}
