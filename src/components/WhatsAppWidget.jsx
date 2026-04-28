import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, QrCode } from 'lucide-react';
import whatsappQr from "../assets/whatsappQr.png";

const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Floating Button */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-500/30 hover:bg-green-600 transition-all group"
                title="Connect on WhatsApp"
            >
                <div className="relative">
                    <MessageCircle size={32} />
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute inset-0 bg-white rounded-full -z-10"
                    />
                    <div className="absolute -top-2 -right-2 bg-white text-green-500 rounded-full p-1 shadow-sm">
                        <QrCode size={14} />
                    </div>
                </div>
            </motion.button>

            {/* Modal Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative bg-white dark:bg-slate-900 w-full max-w-sm rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800"
                        >
                            <div className="p-8 text-center">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
                                >
                                    <X size={24} />
                                </button>

                                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-2xl text-green-500">
                                    <MessageCircle size={32} />
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Connect on WhatsApp</h3>
                                <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm px-4">Scan the QR code below to start a conversation with Vital Care team.</p>

                                <div className="bg-white p-5 rounded-[2rem] shadow-inner inline-block mb-8 border border-slate-100">
                                    <img
                                        src={whatsappQr}
                                        alt="WhatsApp QR Code"
                                        className="w-48 h-48 object-contain"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                        <span className="w-8 h-px bg-slate-200 dark:bg-slate-800"></span>
                                        <span>Ready to Help</span>
                                        <span className="w-8 h-px bg-slate-200 dark:bg-slate-800"></span>
                                    </div>

                                    <p className="text-slate-400 dark:text-slate-500 text-xs font-medium">
                                        Available for medical inquiries and pharmaceutical support.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 text-center border-t border-slate-100 dark:border-slate-800">
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Vital Care Pharmaceutical Excellence</span>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default WhatsAppWidget;
