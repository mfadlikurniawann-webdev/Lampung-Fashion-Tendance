'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Magnetic from './Magnetic';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Parallax Background Images */}
      <div className="absolute inset-0 flex flex-col md:flex-row opacity-40">
        <motion.div style={{ y: y1 }} className="relative flex-1 h-1/2 md:h-full border-r border-white/5 overflow-hidden">
          <img 
            src="/hero-woman.jpg" 
            alt="Elegance" 
            className="w-full h-full object-cover transition-all duration-[3s] scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </motion.div>
        <motion.div style={{ y: y2 }} className="relative flex-1 h-1/2 md:h-full overflow-hidden">
          <img 
            src="/hero-man.jpg" 
            alt="Heritage" 
            className="w-full h-full object-cover transition-all duration-[3s] scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </motion.div>
      </div>

      {/* Hero Content */}
      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-8 relative z-20 flex flex-col items-center text-center"
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="block font-sans text-[10px] md:text-xs uppercase tracking-[0.6em] text-primary mb-8"
        >
          Established 2024 • Lampung Indonesia
        </motion.span>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-[12vw] md:text-[10vw] lg:text-[160px] font-serif text-white mb-6 leading-[0.9] flex flex-col">
            <span className="block">Traditional</span>
            <span className="font-serif italic text-primary md:-mt-4">Elegance</span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xs md:text-sm text-muted max-w-lg mx-auto mb-16 leading-relaxed tracking-[0.2em] uppercase font-light"
        >
          Merging ancestral Tapis craftsmanship with avant-garde fashion design. 
          Preserving legacy, defining the future.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Magnetic>
              <a href="#products" className="group relative block px-12 py-5 border border-primary text-white font-bold uppercase tracking-[4px] text-[10px] overflow-hidden">
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">View Collection</span>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Magnetic>
              <a href="#about" className="group relative block px-12 py-5 border border-white/20 text-white font-bold uppercase tracking-[4px] text-[10px] overflow-hidden">
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">Our Heritage</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Floating Labels */}
      <div className="absolute bottom-12 left-12 hidden lg:block overflow-hidden">
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex flex-col gap-8 items-center"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-muted vertical-text opacity-50">Follow Us</span>
          <div className="w-[1px] h-24 bg-gradient-to-b from-primary to-transparent"></div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 right-12 hidden lg:block text-right">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-white opacity-40">Annual Event</span>
          <p className="text-primary font-serif italic text-3xl mt-2">2024 Edition</p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <span className="text-[8px] uppercase tracking-[4px] text-muted font-bold">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
