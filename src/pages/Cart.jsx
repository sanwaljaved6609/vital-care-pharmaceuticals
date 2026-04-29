import React from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

function Cart() {
    const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

    if (cart.length === 0) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-32 pb-20 px-6 flex items-center justify-center">
                <AnimatedSection className="text-center max-w-md">
                    <div className="w-24 h-24 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                        <ShoppingBag size={40} className="text-slate-400" />
                    </div>
                    <h2 className="text-3xl font-bold dark:text-white mb-4">Your cart is empty</h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-8">
                        Looks like you haven't added anything to your cart yet. Explore our products and find what you need.
                    </p>
                    <Link
                        to="/products"
                        className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95"
                    >
                        Browse Products
                    </Link>
                </AnimatedSection>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-bold dark:text-white mb-4">Shopping Cart</h1>
                        <p className="text-slate-600 dark:text-slate-400">
                            Review your selected pharmaceutical products before proceeding to checkout.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-6">
                        {cart.map((item, i) => (
                            <AnimatedSection key={item.id} delay={i * 0.1}>
                                <div className="bg-white dark:bg-slate-800 rounded-[32px] p-6 border border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row items-center gap-6">
                                    <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    
                                    <div className="flex-grow text-center sm:text-left">
                                        <h3 className="text-xl font-bold dark:text-white mb-1">{item.name}</h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{item.tag}</p>
                                        <div className="flex items-center justify-center sm:justify-start gap-4">
                                            <div className="flex items-center bg-slate-100 dark:bg-slate-700 rounded-xl p-1">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="w-8 h-8 flex items-center justify-center hover:bg-white dark:hover:bg-slate-600 rounded-lg transition-colors"
                                                >
                                                    <Minus size={16} className="dark:text-white" />
                                                </button>
                                                <span className="w-10 text-center font-bold dark:text-white">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="w-8 h-8 flex items-center justify-center hover:bg-white dark:hover:bg-slate-600 rounded-lg transition-colors"
                                                >
                                                    <Plus size={16} className="dark:text-white" />
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-red-500 hover:text-red-600 p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div className="text-right shrink-0">
                                        <p className="text-lg font-black text-primary">Rs. {item.price * item.quantity}</p>
                                        <p className="text-xs text-slate-400">Rs. {item.price} / unit</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Summary */}
                    <div className="lg:col-span-1">
                        <AnimatedSection delay={0.3}>
                            <div className="bg-white dark:bg-slate-800 rounded-[32px] p-8 border border-slate-100 dark:border-slate-700 sticky top-32">
                                <h3 className="text-2xl font-bold dark:text-white mb-6">Order Summary</h3>
                                
                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between text-slate-600 dark:text-slate-400">
                                        <span>Subtotal</span>
                                        <span>Rs. {getCartTotal()}</span>
                                    </div>
                                    <div className="flex justify-between text-slate-600 dark:text-slate-400">
                                        <span>Shipping</span>
                                        <span className="text-green-500 font-bold">Free</span>
                                    </div>
                                    <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-end">
                                        <span className="font-bold dark:text-white">Total</span>
                                        <span className="text-3xl font-black text-primary">Rs. {getCartTotal()}</span>
                                    </div>
                                </div>
                                
                                <Link
                                    to="/checkout"
                                    className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-95 shadow-lg shadow-primary/20"
                                >
                                    <span>Proceed to Checkout</span>
                                    <ArrowRight size={20} />
                                </Link>
                                
                                <Link
                                    to="/products"
                                    className="w-full mt-4 py-4 rounded-2xl font-bold text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center justify-center transition-all"
                                >
                                    Continue Shopping
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
