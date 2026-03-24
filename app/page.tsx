"use client";
import React from "react";
import Hero from "./components/Hero";
import Pillars from "./components/Pillars";
import Pricing from "./components/Pricing";

const GlacierSite = () => {
  return (
    <main className="min-h-screen bg-glacier-black selection:bg-glacier-blue selection:text-white overflow-x-hidden relative">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/videos/mario-3d-scroll.mp4"
        />
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Navigation (Sleek/Minimal) */}
        <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center backdrop-blur-md border-b border-white/5 bg-glacier-black/50">
          <div className="text-glacier-white font-industrial font-black tracking-tighter text-xl uppercase leading-none">
            Glacier <br /> Systems
          </div>
          
          <div className="flex items-center gap-8 md:gap-16">
            <div className="hidden md:flex gap-10">
              {['Pillars', 'Infrastructure', 'Pricing'].map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  className="text-glacier-chrome/40 hover:text-glacier-blue font-industrial font-bold uppercase text-[10px] tracking-widest transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
            <button className="bg-glacier-blue text-white px-6 py-3 font-industrial font-bold uppercase text-[10px] tracking-widest hover:bg-white hover:text-glacier-black transition-all duration-300">
              Initiate Audit
            </button>
          </div>
        </nav>

        <section id="hero">
          <Hero />
        </section>

        <section id="pillars">
          <Pillars />
        </section>

        <section id="pricing">
          <Pricing />
        </section>

        {/* Footer / Contact */}
        <footer className="bg-glacier-black py-24 md:py-48 px-4 border-t border-white/5 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-glacier-white font-industrial font-black text-5xl md:text-9xl uppercase tracking-tighter mb-12 leading-[0.8] opacity-10 select-none pointer-events-none">
              UNTRACEABLE. UNBREAKABLE.
            </h3>
            
            <div className="text-glacier-chrome/40 font-mono text-[10px] tracking-widest uppercase mb-6">
              © 2026 Glacier Systems Management LLC. | America/Chicago
            </div>
            <div className="flex justify-center gap-8 md:gap-16">
              {['Twitter', 'Instagram', 'LinkedIn', 'Terminal'].map((social) => (
                <a key={social} href="#" className="text-glacier-white/20 hover:text-glacier-blue font-industrial font-bold uppercase text-[10px] tracking-widest transition-all duration-300">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default GlacierSite;
