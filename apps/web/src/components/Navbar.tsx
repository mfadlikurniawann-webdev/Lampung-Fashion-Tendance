'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Legacy', href: '#about' },
    { name: 'Moments', href: '#gallery' },
    { name: 'Collection', href: '#products' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-1000 ease-in-out ${isScrolled ? 'py-4 glass' : 'py-10 bg-transparent'}`}>
      <div className="container mx-auto px-8 flex justify-between items-center w-full">
        <Magnetic>
          <Link href="/" className="relative z-10">
            <img src="/logo.png" alt="LFT Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
          </Link>
        </Magnetic>

        <ul className="hidden md:flex gap-16 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Magnetic>
                <Link 
                  href={link.href} 
                  className="text-[10px] font-medium tracking-[0.4em] uppercase text-muted hover:text-primary transition-colors duration-500"
                >
                  {link.name}
                </Link>
              </Magnetic>
            </li>
          ))}
          <li>
            <Magnetic>
              <a 
                href="#contact" 
                className="bg-primary text-black px-8 py-3 text-[9px] font-bold tracking-[3px] uppercase hover:bg-white transition-all duration-500"
              >
                Inquiry
              </a>
            </Magnetic>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-[1001] relative flex flex-col gap-1.5 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <motion.span 
            animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0 }}
            className="w-8 h-[1px] bg-white"
          />
          <motion.span 
            animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
            className="w-8 h-[1px] bg-primary"
          />
          <motion.span 
            animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 0 }}
            className="w-8 h-[1px] bg-white"
          />
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-black z-[1000] flex flex-col items-center justify-center"
            >
              <ul className="flex flex-col gap-12 text-center">
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link 
                      href={link.href} 
                      className="text-4xl font-serif italic text-white hover:text-primary transition-colors" 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
