'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Magnetic from '@/components/Magnetic';

// Reveal Component for scroll animations
const Reveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      
      {/* Heritage Section */}
      <section id="about" className="py-40 relative">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <Reveal>
                <span className="text-primary uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block">Our Legacy & Vision</span>
                <h2 className="text-6xl md:text-8xl font-serif text-white mb-12 leading-tight">
                  The Fabric of <br/>
                  <span className="italic text-primary">Our Soul.</span>
                </h2>
              </Reveal>
              
              <Reveal delay={0.2}>
                <div className="space-y-10 text-lg text-muted font-light leading-relaxed max-w-xl">
                  <p>
                    Lampung Fashion Tendance (LFT) is a movement spearheaded by <span className="text-white font-medium">APPMI Lampung</span>. 
                    We serve as the definitive platform for preserving and evolving the rich textile heritage of our region.
                  </p>
                  <p>
                    From the intricate weaves of **Tapis** to the delicate artistry of 
                    **Sulam Usus**, we bridge the gap between ancestral craftsmanship and 
                    contemporary high fashion.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="pt-12 mt-12 border-t border-white/5 flex items-center gap-16">
                  <div>
                    <span className="block text-white text-4xl font-serif mb-1">2024</span>
                    <span className="text-[9px] uppercase tracking-[3px] text-muted">Current Edition</span>
                  </div>
                  <div className="w-[1px] h-12 bg-white/10"></div>
                  <div>
                    <span className="block text-white text-4xl font-serif mb-1">50+</span>
                    <span className="text-[9px] uppercase tracking-[3px] text-muted">Local Artisans</span>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="relative">
              <Reveal delay={0.3}>
                <div className="aspect-[3/4] relative overflow-hidden group">
                  <img 
                    src="/about-new.jpg" 
                    alt="Lampung Fashion Tendance Event" 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 border-[30px] border-black/90 pointer-events-none group-hover:border-black/20 transition-all duration-1000"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <span className="text-primary font-serif italic text-4xl whitespace-nowrap">Authentic Heritage</span>
                  </div>
                </div>
              </Reveal>
              {/* Floating Decorative Box */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-12 -right-12 w-48 h-48 border border-primary/20 -z-10" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lookbook / Collection Section */}
      <section id="products" className="py-40 bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
            <div className="max-w-2xl">
              <Reveal>
                <span className="text-primary uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block">Exquisite Curation</span>
                <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">The 2024 <br />Masterpieces</h2>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <p className="text-muted md:text-right max-w-sm font-light leading-loose text-sm uppercase tracking-widest">
                Explore our most exclusive designs, each narrating a story of Lampung’s cultural identity.
              </p>
            </Reveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              { name: "Sulam Usus Premium", category: "Handmade Art", img: "/gallery-2.jpg" },
              { name: "Gold Thread Tapis", category: "Royal Weaving", img: "/gallery-1.jpg" },
              { name: "Jelujur Avant-Garde", category: "Modern Concept", img: "/hero-woman.jpg" }
            ].map((product, i) => (
              <Reveal key={i} delay={i * 0.2}>
                <div className="group relative">
                  <div className="aspect-[4/5] bg-surface overflow-hidden relative">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[1.5s]" 
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Magnetic>
                        <a 
                          href={`https://wa.me/6281234567890?text=Halo LFT, saya tertarik dengan ${product.name}.`}
                          target="_blank"
                          className="bg-white text-black px-8 py-4 text-[10px] font-bold uppercase tracking-widest"
                        >
                          Enquire Now
                        </a>
                      </Magnetic>
                    </div>
                  </div>
                  <div className="mt-8">
                    <span className="text-[9px] uppercase tracking-[4px] text-primary mb-2 block">{product.category}</span>
                    <h3 className="text-2xl font-serif text-white group-hover:italic transition-all">{product.name}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Moments Section */}
      <section id="gallery" className="py-40">
        <div className="container mx-auto px-8">
          <div className="text-center mb-32">
            <Reveal>
              <span className="text-primary uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block">Visual Journey</span>
              <h2 className="text-5xl md:text-8xl font-serif text-white">Moments of Glory</h2>
            </Reveal>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative overflow-hidden group bg-surface break-inside-avoid">
                  <img 
                    src={i % 2 === 0 ? "/gallery-1.jpg" : (i % 3 === 0 ? "/hero-man.jpg" : "/gallery-2.jpg")} 
                    alt={`Moment ${i}`} 
                    className="w-full h-auto object-cover transition-all duration-1000 scale-110 group-hover:scale-100" 
                  />
                  <div className="absolute inset-0 border border-white/5 pointer-events-none"></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Footer */}
      <footer className="bg-[#020202] py-40 border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-24">
            <div className="lg:col-span-2">
              <Reveal>
                <img src="/logo.png" alt="LFT" className="w-20 h-20 object-contain mb-12" />
                <p className="text-muted text-xl font-light leading-relaxed max-w-md">
                  Representing the pinnacle of Lampung's fashion industry. Dedicated to the promotion 
                  of traditional artisans and the nurturing of future design icons.
                </p>
              </Reveal>
            </div>
            
            <div>
              <Reveal delay={0.2}>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-white mb-12">Navigate</h4>
                <ul className="flex flex-col gap-8">
                  {['Home', 'Legacy', 'Collection', 'Gallery'].map(item => (
                    <li key={item}>
                      <Link href={`#${item.toLowerCase()}`} className="text-muted hover:text-primary transition-colors tracking-[0.3em] text-[10px] uppercase">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div>
              <Reveal delay={0.4}>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-white mb-12">Presence</h4>
                <p className="text-muted text-[10px] leading-loose tracking-[0.2em] uppercase mb-12">
                  Bandar Lampung, <br />Lampung Province, <br />Indonesia
                </p>
                <div className="flex gap-8">
                  {['IG', 'FB', 'YT'].map(social => (
                    <Magnetic key={social}>
                      <a href="#" className="text-muted hover:text-white transition-colors text-[10px] font-bold tracking-widest">{social}</a>
                    </Magnetic>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          <div className="mt-40 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-[9px] text-muted uppercase tracking-[0.4em]">
            <p>&copy; {new Date().getFullYear()} Lampung Fashion Tendance. Excellence in Craftsmanship.</p>
            <div className="flex gap-16">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Luxury</a>
            </div>
          </div>
        </div>
        
        {/* Abstract Glow */}
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]"></div>
      </footer>
    </main>
  );
}
