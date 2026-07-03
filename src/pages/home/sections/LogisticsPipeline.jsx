import React from 'react';
import { motion } from 'framer-motion';

export default function LogisticsPipeline() {
  const easeEasing = [0.16, 1, 0.3, 1];

  const scrollContainerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemFadeVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeEasing }
    }
  };

  const logisticsNetworkNodes = [
    {
      id: 'coverage',
      icon: '🇮🇳',
      title: 'Pan-India Distribution',
      description: 'Our sourcing pathways extend across state boundaries, safely delivering rare regional harvests to all major cities and states nationwide[cite: 1, 2].'
    },
    {
      id: 'timeline',
      icon: '⏳',
      title: '7–12 Working Days',
      description: 'A careful, systematic delivery window designed to protect product freshness and ensure batch validation directly at the sourcing origin[cite: 1, 2].'
    },
    {
      id: 'tracking',
      icon: '💬',
      title: 'WhatsApp Live Status',
      description: 'Skip complicated app dashboards. Receive continuous, direct dispatch updates and personal transit notifications straight on WhatsApp[cite: 1, 2].'
    },
    {
      id: 'packaging',
      icon: '🛡️',
      title: 'Secure Eco-Packaging',
      description: 'Harvests are thoroughly checked, safely sealed, and packed to remain perfectly fresh and protected throughout long-distance transit[cite: 1, 2].'
    }
  ];

  return (
    <section id="delivery" className="w-full bg-brand-forest text-brand-cream py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background graphic layout overlay element */}
      <div className="absolute left-0 top-0 -translate-x-1/4 -translate-y-1/4 font-sans text-[20vw] font-bold text-white/[0.01] select-none pointer-events-none leading-none">
        LOGISTICS
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-left max-w-2xl">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-gold block mb-4">
            Fulfillment Framework
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-6">
            Our National Logistics Network
          </h2>
          <p className="font-sans text-base sm:text-lg text-brand-cream/70 font-light leading-relaxed">
            Bringing uncompromised agricultural heritage straight from remote tribal farming networks to your kitchen door[cite: 1, 2].
          </p>
        </div>

        {/* Logistics Grid Architecture with subtle glassmorphism layouts */}
        <motion.div 
          variants={scrollContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {logisticsNetworkNodes.map((node) => (
            <motion.div 
              key={node.id}
              variants={itemFadeVariant}
              className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 backdrop-blur-md hover:bg-white/[0.07] hover:border-brand-gold/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Round icon node primitive indicator */}
                <div className="w-12 h-12 rounded-full bg-white/[0.05] border border-white/[0.1] text-xl flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-brand-forest transition-all duration-500">
                  {node.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2 tracking-tight">
                  {node.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-brand-cream/60 font-light leading-relaxed">
                  {node.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}