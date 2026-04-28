import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Notification = () => {
  const { notification, showNotification } = useApp();

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 50, x: '-50%' }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] glass dark:bg-slate-800/90 p-4 pr-12 rounded-2xl shadow-2xl flex items-center space-x-4 border border-primary/20"
        >
          <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
            <CheckCircle size={20} />
          </div>
          <p className="font-bold text-slate-800 dark:text-white">{notification}</p>
          <button 
            onClick={() => showNotification(null)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
