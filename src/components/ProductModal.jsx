import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Activity, ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductModal = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-white dark:bg-slate-800 rounded-[40px] shadow-2xl overflow-hidden overflow-y-auto max-h-[90vh]"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:rotate-90 transition-transform"
          >
            <X size={24} />
          </button>

          <div className="grid md:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-80 md:h-full min-h-[400px]">
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-primary text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  {product.tag}
                </span>
              </div>
            </div>

            {/* Details Side */}
            <div className="p-8 md:p-12 space-y-8">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-3xl md:text-4xl font-bold dark:text-white">{product.name}</h2>
                </div>
                <div className="flex items-center space-x-4 text-primary font-bold text-sm uppercase tracking-widest mb-4">
                  <span>Premium Care</span>
                  <span className="w-1 h-1 bg-primary rounded-full" />
                  <span>ISO Certified</span>
                </div>
                <p className="text-3xl font-black text-primary">Rs. {product.price}</p>
              </div>

              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                {product.description}
                <br /><br />
                This medication is manufactured under strict global standards, ensuring the highest level of purity and efficacy for patient care.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-2xl">
                  <ShieldCheck className="text-primary" />
                  <span className="text-xs font-bold dark:text-white uppercase tracking-wider">Quality Verified</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-2xl">
                  <Activity className="text-accent" />
                  <span className="text-xs font-bold dark:text-white uppercase tracking-wider">High Efficacy</span>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  className={`flex-grow py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                    isAdded 
                    ? 'bg-green-500 text-white shadow-lg shadow-green-500/20' 
                    : 'bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 active:scale-95'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check size={24} />
                      <span>Added to Cart</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={24} />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>
                <button 
                  onClick={onClose}
                  className="px-8 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white py-5 rounded-2xl font-bold text-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-all active:scale-95"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProductModal;

