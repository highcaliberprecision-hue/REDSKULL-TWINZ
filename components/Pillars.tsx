"use client";
import React from "react";
import { motion } from "framer-motion";

const Pillar = ({ index, title, description }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    className="group relative h-full bg-glacier-slate/50 border border-white/5 p-8 md:p-12 hover:bg-glacier-blue/10 hover:border-glacier-blue/50 transition-all duration-700 overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-4 text-glacier-white/10 group-hover:text-glacier-blue/20 transition-colors duration-700 font-industrial font-black text-6xl md:text-8xl leading-none">
      0{index}
    </div>
    
    <div className="relative z-10">
      <h3 className="text-glacier-white font-industrial font-black text-2xl md:text-3xl mb-6 uppercase tracking-tight group-hover:text-glacier-blue transition-colors duration-500">
        {title}
      </h3>
      
      <p className="text-glacier-chrome/60 font-industrial text-lg leading-relaxed font-light mb-8 max-w-sm">
        {description}
      </p>
      
      <div className="w-12 h-[2px] bg-glacier-blue group-hover:w-full transition-all duration-700" />
    </div>
  </motion.div>
);

const Pillars = () => {
  const data = [
    {
      title: "Digital Foundation",
      description: "Porsche-grade web engines (React PWAs) and high-status brand tokens. We replace commodity sites with industrial assets."
    },
    {
      title: "Acquisition Cartel",
      description: "24/7 Oracle scraping and untraceable Android sniper nodes for outbound B2B dominance. We fill your chair on demand."
    },
    {
      title: "Autonomous Engine",
      description: "Vapi AI Receptionist, n8n orchestration, and custom dispatch portals. The business runs while you sleep."
    },
    {
      title: "Enterprise Infrastructure",
      description: "The 'Black Box.' Client data sovereignty hosted on dedicated Apple Silicon nodes. Absolute data sovereignty with kill-switch."
    }
  ];

  return (
    <section className="bg-glacier-black py-24 md:py-48 px-4">
      <div className="max-w-7xl mx-auto mb-24 md:mb-32">
        <h2 className="text-glacier-white font-industrial font-black text-4xl md:text-6xl uppercase tracking-tighter mb-8 max-w-2xl leading-[0.9]">
          The 4 Pillars of <br />
          <span className="text-glacier-blue">Proprietary Dominance.</span>
        </h2>
        <p className="text-glacier-chrome/40 font-industrial text-xl max-w-xl font-light">
          No competitor in the SMB/trades vertical bundles all four. We don’t sell services; we implement infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 max-w-7xl mx-auto shadow-2xl">
        {data.map((item, i) => (
          <Pillar key={i} index={i + 1} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Pillars;
