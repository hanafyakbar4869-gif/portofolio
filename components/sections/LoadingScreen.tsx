'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
          className="fixed inset-0 z-[100] bg-dark flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-20 h-20 mx-auto mb-4">
              <defs>
                <linearGradient id="codeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee"/>
                  <stop offset="100%" stopColor="#38bdf8"/>
                </linearGradient>
                <linearGradient id="codeGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1"/>
                  <stop offset="100%" stopColor="#22d3ee"/>
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="85" fill="none" stroke="#22d3ee" strokeWidth="1" opacity="0.1"/>
              <path d="M 100 15 L 100 185" stroke="#22d3ee" strokeWidth="0.5" strokeDasharray="5,5" opacity="0.2"/>
              <path d="M 15 100 L 185 100" stroke="#22d3ee" strokeWidth="0.5" strokeDasharray="5,5" opacity="0.2"/>
              <path d="M 75 45 L 45 100 L 75 155" fill="none" stroke="url(#codeGrad1)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M 125 45 L 155 100 L 125 155" fill="none" stroke="url(#codeGrad1)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M 100 55 L 68 120 M 100 55 L 132 120" stroke="url(#codeGrad2)" strokeWidth="12" strokeLinecap="round"/>
              <line x1="80" y1="100" x2="120" y2="100" stroke="url(#codeGrad2)" strokeWidth="10" strokeLinecap="round"/>
              <circle cx="100" cy="55" r="9" fill="#22d3ee"/>
              <circle cx="100" cy="55" r="4" fill="#ffffff"/>
            </svg>
            <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan to-purple rounded-full"
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
