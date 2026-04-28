import React from 'react';
import { motion } from 'framer-motion';
import whatsapp from "../assets/whatsapp.png";

const WhatsAppWidget = () => {
    const phoneNumber = "+923014864882";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-3 rounded-full shadow-2xl shadow-green-500/30 hover:bg-[#128C7E] transition-all flex items-center justify-center group"
            title="Chat on WhatsApp"
        >
            <div className="relative flex items-center justify-center">
                <img
                    src={whatsapp}
                    alt="WhatsApp"
                    className="w-10 h-10 object-contain"
                />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 bg-white rounded-full -z-10"
                />
            </div>
        </motion.a>
    );
};

export default WhatsAppWidget;
