import React from 'react';
import { motion } from 'framer-motion';
import { generateWhatsAppLink } from '../../../utils/whatsapplink';

export default function AboutPurpose() {
  const easeEasing = [0.16, 1, 0.3, 1];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: easeEasing }
    }
  };

  const imageRevealVariant = {
    hidden: { opacity: 0, scale: 1.04 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: easeEasing }
    }
  };

  const purposePillars = [
    { id: 'tribal', label: 'Tribal Farmer Directed', desc: 'Sourcing primarily from native groups, ensuring generational seed lines remain locally governed[cite: 1, 2].' },
    { id: 'shg', label: 'SHG Local Processing', desc: 'Partnering with rural women collectives to process grains using traditional methods[cite: 1, 2].' },
    { id: 'knowledge', label: 'Heritage Preservation', desc: 'Documenting and sustaining native crop systems to prevent corporate crop standardization[cite: 1].' },
    { id: 'community', label: 'Empowering Communities', desc: 'Redirecting value straight back to the fields to create reliable, clean economies[cite: 1].' }
  ];

  return (
    <section id="story" className="w-full bg-brand-cream py-24 md:py-36 px-6 md:px-12 border-b border-black/[0.03]">
      <div className="max-w-7xl mx-auto">
        
        {/* Asymmetrical Apple-meets-Agriculture Framework Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Column A: Cinematic Watermark Asset Frame Wrapper */}
          <div className="lg:col-span-5 w-full">
            <motion.div 
              variants={imageRevealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative w-full h-[340px] sm:h-[480px] lg:h-[600px] rounded-3xl overflow-hidden bg-brand-forest shadow-premium group"
            >
              {/* Dynamic Sourcing Visual Asset Block Mapping */}
              <img 
                src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=1200&q=80" 
                alt="Odisha traditional agricultural parameters landscape canvas" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-103"
              />
              {/* Deep Sage Color Overlay Burn matching Apple brand aesthetics */}
              <div className="absolute inset-0 bg-brand-forest/10 mix-blend-color" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 text-left">
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-brand-gold bg-brand-forest/40 backdrop-blur-md px-3 py-1 rounded-md">
                  Odisha Sourcing Node
                </span>
              </div>
            </motion.div>
          </div>

          {/* Column B: Editorial Sourcing Manifesto Copy Frame */}
          <div className="lg:col-span-7 w-full text-left">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } }
              }}
              className="flex flex-col"
            >
              <motion.span variants={fadeUpVariant} className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-4 block">
                Our Foundational Promise
              </motion.span>
              
              <motion.h2 variants={fadeUpVariant} className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-forest leading-[1.12] mb-6">
                Preserving heritage crops. Empowering traditional communities[cite: 1].
              </motion.h2>

              <motion.p variants={fadeUpVariant} className="font-sans text-base sm:text-lg text-brand-forest/70 font-light leading-relaxed mb-8">
                Industrial monoculture is quickly replacing deep agricultural diversity[cite: 1]. Mye Farm exists to change this path. We function as a high-integrity sourcing framework connecting families directly with the tribal farmers and women-led processing cells preserving Odisha’s heirloom grains[cite: 1, 2].
              </motion.p>

              {/* Sub-Manifesto Framework Index Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-brand-forest/10 pt-8 mb-10">
                {purposePillars.map((pillar) => (
                  <motion.div 
                    variants={fadeUpVariant}
                    key={pillar.id} 
                    className="flex flex-col"
                  >
                    <h3 className="font-serif text-base font-bold text-brand-forest mb-1">
                      {pillar.label}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-brand-forest/60 font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Premium Startup Micro-Interactive Button Trigger Core Link */}
              <motion.div variants={fadeUpVariant}>
                <motion.a 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  href={generateWhatsAppLink('Manifesto Sourcing Inquire')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-brand-sage hover:bg-brand-forest text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-apple transition-colors duration-300"
                >
                  Message Sourcing Desk
                </motion.a>
              </motion.div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}