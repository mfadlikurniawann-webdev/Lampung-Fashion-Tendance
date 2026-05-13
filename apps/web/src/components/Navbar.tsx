'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

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
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 h-24 flex items-center z-[1000] transition-all duration-700 ${isScrolled ? 'h-[80px] bg-black/90 backdrop-blur-2xl border-b border-white/5' : 'bg-transparent'}`}>
      <div className="container mx-auto px-8 flex justify-between items-center w-full">
        <Link href="/" className="group">
          <img src="/logo.png" alt="LFT Logo" className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-500" />
        </Link>

        <ul className="hidden md:flex gap-12 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="text-[11px] font-bold tracking-[3px] uppercase text-muted hover:text-white transition-all hover:tracking-[5px]">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <button 
          className="md:hidden flex flex-col gap-2 z-[1001] relative p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-500 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-primary transition-all duration-500 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-500 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-black flex flex-col items-center justify-center transition-all duration-700 md:hidden ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
          <ul className="flex flex-col gap-10 text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-3xl font-serif italic text-white hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
