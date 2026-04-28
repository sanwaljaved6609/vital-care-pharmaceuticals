import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { Sun, Moon, Languages, Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme, language, setLanguage, t } = useApp();
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

    return (
        <nav className="sticky top-0 z-50 glass dark:bg-slate-900/80 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link to="/" className="group flex items-center space-x-2">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">
                        V
                    </div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                        Vital Care
                    </h1>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm font-semibold transition-colors hover:text-primary ${
                                location.pathname === link.path ? 'text-primary' : 'text-slate-600 dark:text-slate-300'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Controls */}
                <div className="hidden md:flex items-center space-x-4">
                    {/* Language Switcher */}
                    <button
                        onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
                        className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
                        title="Switch Language"
                    >
                        <Languages size={20} />
                    </button>

                    {/* Theme Switcher */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>

                    <Link
                        to="/contact"
                        className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
                    >
                        {t.nav.getInTouch}
                    </Link>
                </div>

                {/* Mobile Controls Toggle */}
                <div className="md:hidden flex items-center space-x-2">
                     <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-slate-600 dark:text-slate-300"
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-primary"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
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
                        className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 overflow-hidden"
                    >
                        <div className="px-6 py-8 space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="flex justify-between items-center text-lg font-medium text-slate-800 dark:text-slate-100"
                                >
                                    {link.name}
                                    <ChevronRight size={18} className="text-primary" />
                                </Link>
                            ))}
                            
                            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                                <button
                                    onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
                                    className="flex items-center space-x-2 text-primary font-bold"
                                >
                                    <Languages size={20} />
                                    <span>{language === 'en' ? 'اردو' : 'English'}</span>
                                </button>
                                <Link
                                    to="/contact"
                                    className="bg-primary text-white px-6 py-3 rounded-xl font-bold"
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