"use client";
import React from "react";
import { motion } from "framer-motion";

const PricingCard = ({ tier, build, monthly, annual, target, features, popular = false }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`relative bg-glacier-black border ${popular ? 'border-glacier-blue/50 ring-1 ring-glacier-blue/50' : 'border-white/10'} p-10 md:p-14 transition-all duration-700 hover:border-glacier-blue group overflow-hidden shadow-2xl`}
  >
    {popular && (
      <div className="absolute top-10 right-0 bg-glacier-blue text-white px-6 py-2 font-industrial font-black uppercase text-[10px] tracking-widest -rotate-0 rounded-l-full shadow-2xl">
        Elite Implementation
      </div>
    )}

    <div className="relative z-10 mb-12">
      <h3 className="text-glacier-chrome/40 font-industrial font-black text-xs uppercase tracking-widest mb-4">
        {tier}
      </h3>
      <div className="text-glacier-white font-industrial font-black text-5xl md:text-7xl mb-4 leading-none tracking-tighter">
        ${build}<span className="text-glacier-chrome/10 text-xl font-light">.00</span>
      </div>
      <p className="text-glacier-chrome/60 font-industrial text-lg font-light mb-8">
        Build Fee + <span className="text-glacier-white font-bold">${monthly}/mo</span> Retainer
      </p>
      <div className="inline-block px-4 py-2 border border-glacier-blue/20 bg-glacier-blue/5 text-glacier-blue font-industrial font-bold uppercase text-[10px] tracking-widest">
        ${annual} Total Annual Value
      </div>
    </div>

    <div className="relative z-10 space-y-4 mb-14">
      <p className="text-glacier-white/40 font-industrial font-black text-[10px] uppercase tracking-widest mb-6">
        Target: {target}
      </p>
      {features.map((feature, i) => (
        <div key={i} className="flex items-center gap-4 group-hover:gap-6 transition-all duration-500">
          <div className="w-1.5 h-1.5 bg-glacier-blue rounded-full group-hover:scale-150 transition-transform duration-500" />
          <span className="text-glacier-chrome/60 font-industrial text-sm font-light">
            {feature}
          </span>
        </div>
      ))}
    </div>

    <button className={`w-full py-5 font-industrial font-black uppercase tracking-widest text-xs transition-all duration-500 shadow-2xl ${popular ? 'bg-glacier-blue text-white hover:bg-white hover:text-glacier-black' : 'border border-white/20 text-glacier-white hover:bg-glacier-blue hover:border-glacier-blue'}`}>
      Initiate Audit
    </button>
  </motion.div>
);

const Pricing = () => {
  const tiers = [
    {
      tier: "Glacier Core",
      build: "7,500",
      monthly: "2,500",
      annual: "37,500",
      target: "$5M–$15M Revenue (HVAC, Dental, Legal)",
      features: [
        "Glacier Elite Web Engine (React PWA)",
        "Vapi Voice AI Receptionist",
        "n8n Backend Orchestration",
        "ManyChat DM Closer Integration",
        "Standard CRM Onboarding"
      ]
    },
    {
      tier: "Glacier Command",
      build: "15,000",
      monthly: "4,500",
      annual: "69,000",
      target: "$15M–$50M Revenue (Fleets, Multi-Location)",
      popular: true,
      features: [
        "Full 4-Pillar Infrastructure Deployment",
        "Oracle Scraper (Autonomous Lead Gen)",
        "The Sniper (SMS/IG/LinkedIn)",
        "Dedicated Mac Mini M4 Pro Node",
        "Private Cloud Data Sovereignty",
        "Glacier Dispatch Board CRM"
      ]
    },
    {
      tier: "Glacier Enterprise",
      build: "25,000",
      monthly: "7,500",
      annual: "115,000",
      target: "$50M+ Enterprise, Franchise networks",
      features: [
        "Full Swarm Mesh (3+ Mac Minis)",
        "31-Node Discord Cartel Access",
        "Custom vertical-specific agent dev",
        "Global ERP/Inventory Deep-Sync",
        "Proprietary AI Logic Training"
      ]
    }
  ];

  return (
    <section className="bg-glacier-black py-24 md:py-48 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-24 md:mb-32 text-center">
        <h2 className="text-glacier-white font-industrial font-black text-5xl md:text-8xl uppercase tracking-tighter mb-8 leading-[0.9]">
          The Investment in <br />
          <span className="text-glacier-blue italic underline decoration-white/10 decoration-[8px]">Dominance.</span>
        </h2>
        <p className="text-glacier-chrome/40 font-industrial text-xl max-w-xl mx-auto font-light leading-relaxed">
          Competitors charge $10k/mo for single pillars. We bundle the entire cartel infrastructure for a lower monthly cost. 
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 max-w-7xl mx-auto shadow-2xl">
        {tiers.map((tier, i) => (
          <PricingCard key={i} {...tier} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
