"use client";

import { PRODUCTS } from "@/data/products";
import { notFound } from "next/navigation";
import { ProductDetailView } from "@/components/boutique/product-detail-view";
import { use } from "react";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const product = PRODUCTS.find(p => p.slug === resolvedParams.slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-clinical-white pt-32 pb-20 px-6">
            <div className="container mx-auto">
                <ProductDetailView product={product} isPage />
            </div>
        </div>
    );
}
