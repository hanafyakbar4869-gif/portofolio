'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center bg-[radial-gradient(#cbc3d7_1px,transparent_1px)] [background-size:24px_24px]"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotate: 10 }}
            transition={{ type: 'spring', bounce: 0.5, duration: 0.6 }}
            className="bg-surface-container-low p-8 rounded-3xl border-2 border-on-surface shadow-[8px_8px_0px_#1E293B] text-center relative"
          >
            {/* Decorative dots */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-secondary-container rounded-full border-2 border-on-surface shadow-pop-sm animate-bounce" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary-container rounded-full border-2 border-on-surface shadow-pop-sm animate-pulse" />
            
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
              className="flex justify-center mb-6"
            >
              <Image 
                src="/images/logo.svg" 
                alt="Logo" 
                width={64} 
                height={64}
                priority
              />
            </motion.div>
            
            <h1 className="font-display-lg-mobile text-on-surface font-black tracking-tight mb-4 text-4xl">
              LOADING<span className="text-primary animate-pulse">...</span>
            </h1>
            
            <div className="w-48 h-4 bg-surface rounded-full overflow-hidden mx-auto border-2 border-on-surface shadow-[2px_2px_0px_#1E293B] relative">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
