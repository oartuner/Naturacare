import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Product } from "@/data/products";
import { ProductDetailView } from "./product-detail-view";

interface ProductDetailModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

export function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
    if (!product) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8"
                    >
                        {/* Modal Container */}
                        <motion.div
                            initial={typeof window !== 'undefined' && window.innerWidth < 768 ? { y: '100%' } : { opacity: 0, scale: 0.95, y: 20 }}
                            animate={typeof window !== 'undefined' && window.innerWidth < 768 ? { y: 0 } : { opacity: 1, scale: 1, y: 0 }}
                            exit={typeof window !== 'undefined' && window.innerWidth < 768 ? { y: '100%' } : { opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white w-full max-w-6xl md:max-h-[90vh] h-full md:h-auto rounded-t-[3rem] md:rounded-[3rem] shadow-2xl overflow-hidden relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 z-30 bg-white/80 backdrop-blur-md p-3 md:p-2 rounded-full hover:bg-white transition-colors text-primary-900 shadow-sm"
                            >
                                <X size={20} />
                            </button>

                            <div className="h-full overflow-y-auto custom-scrollbar">
                                <ProductDetailView product={product} />
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
