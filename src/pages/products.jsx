import React, { useState } from 'react';
import products from "../data/products";
import AnimatedSection from "../components/AnimatedSection";
import { Info, ShoppingCart, Check } from "lucide-react";
import ProductModal from "../components/ProductModal";
import { useCart } from "../context/CartContext";

function Products() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [viewingProduct, setViewingProduct] = useState(null);
    const [addedIds, setAddedIds] = useState(new Set());
    const { addToCart } = useCart();

    const categories = ["All", ...products.map(p => p.category)];

    const filteredProducts = selectedCategory === "All"
        ? products.flatMap(p => p.items)
        : products.find(p => p.category === selectedCategory)?.items || [];

    const handleAddToCart = (product) => {
        addToCart(product);
        setAddedIds(prev => new Set(prev).add(product.id));
        setTimeout(() => {
            setAddedIds(prev => {
                const next = new Set(prev);
                next.delete(product.id);
                return next;
            });
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-bold dark:text-white mb-4 text-center md:text-left">Our Products</h1>
                        <p className="text-slate-600 dark:text-slate-400 max-w-xl text-center md:text-left">
                            Explore our comprehensive range of pharmaceutical solutions across multiple specialized categories.
                        </p>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex overflow-x-auto pb-2 gap-2 no-scrollbar justify-center md:justify-end">
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
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredProducts.map((product, i) => (
                        <AnimatedSection key={product.id} delay={i * 0.05}>
                            <div className="group bg-white dark:bg-slate-800 rounded-[32px] overflow-hidden border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
                                {/* Image Container */}
                                <div className="relative h-72 overflow-hidden shrink-0">
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
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setViewingProduct(product); }}
                                            className="w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
                                            title="Quick View"
                                        >
                                            <Info size={20} />
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}
                                            className={`w-12 h-12 ${addedIds.has(product.id) ? 'bg-green-500' : 'bg-primary'} rounded-full flex items-center justify-center text-white transition-all hover:scale-110 shadow-lg`}
                                            title="Add to Cart"
                                        >
                                            {addedIds.has(product.id) ? <Check size={20} /> : <ShoppingCart size={20} />}
                                        </button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-3 gap-2">
                                        <h3 className="text-2xl font-bold dark:text-white line-clamp-1">{product.name}</h3>
                                        <span className="text-xl font-black text-primary whitespace-nowrap">Rs. {product.price}</span>
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mb-6">
                                        {product.description}
                                    </p>
                                    
                                    <div className="mt-auto pt-6 border-t border-slate-50 dark:border-slate-700 flex flex-col gap-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Premium Quality</span>
                                            <button
                                                onClick={() => setViewingProduct(product)}
                                                className="text-primary font-black text-sm hover:underline tracking-tight"
                                            >
                                                View Details
                                            </button>
                                        </div>
                                        
                                        <button
                                            onClick={() => handleAddToCart(product)}
                                            className={`w-full py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 ${
                                                addedIds.has(product.id) 
                                                ? 'bg-green-500 text-white shadow-lg shadow-green-500/20' 
                                                : 'bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 active:scale-95'
                                            }`}
                                        >
                                            {addedIds.has(product.id) ? (
                                                <>
                                                    <Check size={20} />
                                                    <span>Added to Cart</span>
                                                </>
                                            ) : (
                                                <>
                                                    <ShoppingCart size={20} />
                                                    <span>Add to Cart</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>

            {/* Product Detail Modal */}
            {viewingProduct && (
                <ProductModal
                    product={viewingProduct}
                    onClose={() => setViewingProduct(null)}
                />
            )}
        </div>
    );
}

export default Products;


