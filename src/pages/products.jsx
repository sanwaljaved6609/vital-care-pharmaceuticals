import React, { useState } from 'react';
import products from "../data/products";
import AnimatedSection from "../components/AnimatedSection";
import { ShoppingCart, Info } from "lucide-react";

function Products() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = ["All", ...products.map(p => p.category)];

    const filteredProducts = selectedCategory === "All"
        ? products.flatMap(p => p.items)
        : products.find(p => p.category === selectedCategory)?.items || [];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-bold dark:text-white mb-4">Our Products</h1>
                        <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                            Explore our comprehensive range of pharmaceutical solutions across multiple specialized categories.
                        </p>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex overflow-x-auto pb-2 gap-2 no-scrollbar">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${selectedCategory === cat
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product, i) => (
                        <AnimatedSection key={product.id} delay={i * 0.05}>
                            <div className="group bg-white dark:bg-slate-800 rounded-[32px] overflow-hidden border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-primary/90 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm">
                                            {product.tag}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                                        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform">
                                            <ShoppingCart size={20} />
                                        </button>
                                        <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                                            <Info size={20} />
                                        </button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <h3 className="text-xl font-bold dark:text-white mb-3">{product.name}</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                                        {product.description}
                                    </p>
                                    <div className="mt-6 pt-6 border-t border-slate-50 dark:border-slate-700 flex justify-between items-center">
                                        <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Premium Quality</span>
                                        <button className="text-primary font-bold text-sm hover:underline">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;
