import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      
      {/* Heritage Section (About) */}
      <section id="about" className="py-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-surface/20 -z-10 translate-x-1/2 rotate-12"></div>
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="reveal">
              <span className="text-primary uppercase tracking-[6px] text-[10px] font-bold mb-6 block">Legacy & Vision</span>
              <h2 className="text-6xl md:text-8xl font-serif text-white mb-10 leading-tight">
                The Fabric of <br/>
                <span className="italic">Our Soul.</span>
              </h2>
              <div className="space-y-8 text-lg text-muted font-light leading-relaxed max-w-xl">
                <p>
                  Lampung Fashion Tendance (LFT) is more than an event; it is a movement. 
                  Spearheaded by **APPMI Lampung**, we serve as the definitive platform for 
                  preserving and evolving the rich textile heritage of our region.
                </p>
                <p>
                  From the intricate weaves of **Tapis** to the delicate artistry of 
                  **Sulam Usus** and **Sulam Jelujur**, we bridge the gap between 
                  ancestral craftsmanship and contemporary high fashion.
                </p>
                <div className="pt-8 border-t border-white/10 flex items-center gap-12">
                  <div>
                    <span className="block text-white text-3xl font-serif">2024</span>
                    <span className="text-[10px] uppercase tracking-[2px]">Year Edition</span>
                  </div>
                  <div className="w-[1px] h-12 bg-white/10"></div>
                  <div>
                    <span className="block text-white text-3xl font-serif">50+</span>
                    <span className="text-[10px] uppercase tracking-[2px]">Designers</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-[3/4] bg-surface border border-white/5 flex items-center justify-center relative overflow-hidden p-4">
                <img 
                  src="/gallery-1.jpg" 
                  alt="Lampung Craftsmanship" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
                />
                <div className="absolute inset-0 border-[20px] border-black/80 pointer-events-none group-hover:border-black/40 transition-all duration-700"></div>
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 font-script text-4xl text-primary -rotate-12 opacity-0 group-hover:opacity-100 transition-opacity delay-300">Preserved.</div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-primary/20 -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection Section */}
      <section id="products" className="py-40 bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary uppercase tracking-[6px] text-[10px] font-bold mb-6 block">Exquisite Curation</span>
              <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">The 2024 <br />Masterpieces</h2>
            </div>
            <p className="text-muted text-right max-w-sm font-light">Explore our most exclusive designs, each narrating a story of Lampung’s cultural identity.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "Sulam Usus Premium", desc: "A masterpiece of silk and symmetry.", img: "/gallery-2.jpg" },
              { name: "Gold Thread Tapis", desc: "Authentic weaving with metallic luster.", img: "/gallery-1.jpg" },
              { name: "Jelujur Avant-Garde", desc: "Pushing the boundaries of tradition.", img: "/hero-woman.jpg" }
            ].map((product, i) => (
              <div key={i} className="group relative bg-surface border border-white/5 overflow-hidden">
                <div className="aspect-[4/5] bg-[#1a1a1a] overflow-hidden">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 group-hover:opacity-100" />
                </div>
                <div className="p-10 absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-serif italic text-white mb-3">{product.name}</h3>
                  <p className="text-sm text-muted mb-8 opacity-0 group-hover:opacity-100 transition-opacity delay-200">{product.desc}</p>
                  <a 
                    href={`https://wa.me/6281234567890?text=Halo LFT, saya sangat tertarik dengan koleksi ${product.name}. Mohon informasi lebih lanjut.`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block border border-primary text-primary px-8 py-3 font-bold uppercase tracking-[3px] text-[9px] hover:bg-primary hover:text-white transition-all"
                  >
                    Private Enquiry
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Moments in Fashion (Gallery) */}
      <section id="gallery" className="py-40 bg-black">
        <div className="container mx-auto px-8">
          <div className="text-center mb-24">
            <span className="text-primary uppercase tracking-[6px] text-[10px] font-bold mb-6 block">Visual Journey</span>
            <h2 className="text-5xl md:text-7xl font-serif text-white">Moments of Glory</h2>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative overflow-hidden group border border-white/5 bg-surface break-inside-avoid">
                <img 
                  src={i % 2 === 0 ? "/gallery-1.jpg" : (i % 3 === 0 ? "/hero-man.jpg" : "/gallery-2.jpg")} 
                  alt={`Moment ${i}`} 
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Footer */}
      <footer className="bg-[#020202] py-32 border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
            <div className="md:col-span-2">
              <div className="mb-10">
                <img src="/logo.png" alt="LFT" className="w-16 h-16 object-contain" />
              </div>
              <p className="text-muted text-lg font-light leading-relaxed max-w-md">
                Representing the pinnacle of Lampung's fashion industry. Dedicated to the promotion 
                of traditional artisans and the nurturing of future design icons.
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[5px] text-white mb-10">Navigation</h4>
              <ul className="flex flex-col gap-6">
                <li><Link href="/" className="text-muted hover:text-primary transition-colors tracking-widest text-sm uppercase">Home</Link></li>
                <li><Link href="#about" className="text-muted hover:text-primary transition-colors tracking-widest text-sm uppercase">Our Legacy</Link></li>
                <li><Link href="#products" className="text-muted hover:text-primary transition-colors tracking-widest text-sm uppercase">Collection</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[5px] text-white mb-10">Global Office</h4>
              <p className="text-muted text-sm leading-relaxed tracking-widest uppercase mb-8">Bandar Lampung, <br />Lampung Province, <br />Indonesia</p>
              <div className="flex gap-6">
                <a href="#" className="text-muted hover:text-white transition-colors">IG</a>
                <a href="#" className="text-muted hover:text-white transition-colors">FB</a>
                <a href="#" className="text-muted hover:text-white transition-colors">YT</a>
              </div>
            </div>
          </div>
          <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] text-muted uppercase tracking-[4px]">
            <p>&copy; {new Date().getFullYear()} Lampung Fashion Tendance. All Rights Reserved.</p>
            <div className="flex gap-12">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Luxury</a>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
      </footer>
    </main>
  );
}
