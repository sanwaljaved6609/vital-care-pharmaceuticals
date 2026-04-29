import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { Sun, Moon, Languages, Menu, X, ChevronRight, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme, language, setLanguage, t } = useApp();
    const { getCartCount } = useCart();
    const location = useLocation();

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: t.nav.home, path: "/" },
        { name: t.nav.about, path: "/about" },
        { name: t.nav.products, path: "/products" },
        { name: t.nav.contact, path: "/contact" },
    ];

    const cartCount = getCartCount();

    return (
        <nav className="sticky top-0 z-50 glass dark:bg-slate-900/80 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

                {/* Logo */}
                <Link to="/" className="group flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-2xl group-hover:rotate-12 transition-transform">
                        V
                    </div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent tracking-tight">
                        Vital Care
                    </h1>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-lg font-bold transition-colors hover:text-primary ${
                                location.pathname === link.path ? 'text-primary' : 'text-slate-600 dark:text-slate-300'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Controls */}
                <div className="hidden lg:flex items-center space-x-6">
                    {/* Cart Icon */}
                    <Link
                        to="/cart"
                        className="relative p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
                        title="Shopping Cart"
                    >
                        <ShoppingCart size={22} />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white dark:border-slate-900 animate-in zoom-in">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    {/* Language Switcher */}
                    <button
                        onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
                        className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
                        title="Switch Language"
                    >
                        <Languages size={22} />
                    </button>

                    {/* Theme Switcher */}
                    <button
                        onClick={toggleTheme}
                        className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
                    >
                        {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
                    </button>

                    <Link
                        to="/contact"
                        className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full text-base font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
                    >
                        {t.nav.getInTouch}
                    </Link>
                </div>

                {/* Mobile Controls Toggle */}
                <div className="lg:hidden flex items-center space-x-4">
                    <Link
                        to="/cart"
                        className="relative p-2 rounded-full text-slate-600 dark:text-slate-300"
                    >
                        <ShoppingCart size={22} />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white dark:border-slate-900">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                     <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-slate-600 dark:text-slate-300"
                    >
                        {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-primary"
                    >
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 overflow-hidden"
                    >
                        <div className="px-6 py-10 space-y-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="flex justify-between items-center text-xl font-bold text-slate-800 dark:text-slate-100"
                                >
                                    {link.name}
                                    <ChevronRight size={22} className="text-primary" />
                                </Link>
                            ))}
                            
                            <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                                <button
                                    onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
                                    className="flex items-center space-x-3 text-primary font-black text-lg"
                                >
                                    <Languages size={24} />
                                    <span>{language === 'en' ? 'اردو' : 'English'}</span>
                                </button>
                                <Link
                                    to="/contact"
                                    className="bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-primary/20"
                                >
                                    {t.nav.getInTouch}
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;

