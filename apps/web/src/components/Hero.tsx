import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-black">
      {/* Background Split Screen */}
      <div className="absolute inset-0 flex flex-col md:flex-row">
        <div className="relative flex-1 h-1/2 md:h-full group overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
          <img 
            src="/hero-woman.jpg" 
            alt="Elegance" 
            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[3s] ease-out opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        <div className="relative flex-1 h-1/2 md:h-full group overflow-hidden">
          <img 
            src="/hero-man.jpg" 
            alt="Heritage" 
            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[3s] ease-out opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-8 relative z-20 flex flex-col items-center text-center">
        <div className="max-w-4xl">
          <span className="block font-sans text-[10px] md:text-xs uppercase tracking-[8px] text-primary mb-6 animate-fade-in opacity-0">
            Established 2024 • Lampung Indonesia
          </span>
          <h1 className="text-5xl md:text-9xl font-serif text-white mb-8 leading-tight animate-fade-in delay-200 opacity-0">
            Elegance <br />
            <span className="font-script text-primary text-6xl md:text-[10rem] italic">Redefined.</span>
          </h1>
          <p className="text-sm md:text-base text-muted max-w-xl mx-auto mb-12 animate-fade-in delay-500 opacity-0 leading-relaxed tracking-wide">
            A prestigious annual showcase by APPMI Lampung. Merging ancestral Tapis craftsmanship 
            with avant-garde fashion design. Preserving legacy, defining the future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 animate-fade-in delay-700 opacity-0">
            <a href="#products" className="group relative px-10 py-5 overflow-hidden border border-primary text-white font-bold uppercase tracking-[4px] text-[10px] transition-all">
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">View Collection</span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
            </a>
            <a href="#about" className="group relative px-10 py-5 overflow-hidden border border-white/20 text-white font-bold uppercase tracking-[4px] text-[10px] transition-all">
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">Our Heritage</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 left-12 hidden lg:block animate-fade-in delay-1000 opacity-0">
        <div className="flex flex-col gap-6">
          <span className="text-[10px] uppercase tracking-[4px] text-muted vertical-text">Follow Us</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent mx-auto"></div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 hidden lg:block animate-fade-in delay-1000 opacity-0">
        <div className="text-right">
          <span className="text-[10px] uppercase tracking-[4px] text-white">Annual Event</span>
          <p className="text-primary font-script text-2xl mt-2">2024 Edition</p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-4">
          <span className="text-[9px] uppercase tracking-[4px] text-muted">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
