"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-glacier-black flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glacier-blue/5 blur-[120px] rounded-full" />
      
      {/* Visual Centerpiece (Black Box Render Placeholder) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 mb-12 w-full max-w-[500px] aspect-square bg-gradient-to-b from-glacier-slate to-glacier-black border border-white/10 rounded-2xl shadow-2xl flex items-center justify-center group overflow-hidden"
      >
        {/* Placeholder for GAF v2 Render */}
        <div className="text-white/20 uppercase tracking-[0.2em] font-industrial text-sm group-hover:text-glacier-blue/50 transition-colors duration-500">
          Glacier Node 01.
        </div>
        <div className="absolute inset-0 bg-glacier-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      </motion.div>

      <div className="relative z-10 text-center max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-industrial font-black tracking-tight text-glacier-white mb-6 uppercase leading-[0.9]"
        >
          Proprietary <span className="text-glacier-blue">Intelligence</span> <br />
          For the <span className="italic">Industrial Elite.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl font-industrial text-glacier-chrome/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          We don’t build chatbots. We engineer autonomous revenue engines. 
          Stop renting software; start owning your infrastructure.
        </motion.p>

        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-glacier-blue text-white px-10 py-5 font-industrial font-bold uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-glacier-black transition-all duration-300 shadow-[0_0_40px_rgba(0,68,255,0.3)]"
        >
          Apply for Infrastructure Audit
        </motion.button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 hidden md:block opacity-20">
        <div className="text-glacier-white text-[10px] font-mono leading-none tracking-widest uppercase mb-2">
          Lat: 41.8781 | Lon: -87.6298
        </div>
        <div className="text-glacier-white text-[10px] font-mono leading-none tracking-widest uppercase">
          Glacier Systems Management LLC.
        </div>
      </div>
    </section>
  );
};

export default Hero;
