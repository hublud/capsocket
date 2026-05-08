"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";

const partnerships = [
  "Commodity sourcing",
  "Supply chain reliability",
  "Logistics execution",
  "Market access and expansion",
  "Long-term operational growth",
];

export function Partnerships() {
  return (
    <Section id="partnerships" className="relative">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-heading font-semibold uppercase tracking-wider mb-4"
        >
          Markets & Partnerships
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold text-charcoal mb-8"
        >
          A Global Network of Expertise
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-charcoal/60 text-lg leading-relaxed"
        >
          We collaborate with established counterparties and agricultural supply partners to support sourcing, logistics, processing coordination, and distribution activities across African and international markets.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
        {partnerships.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col items-center justify-center text-center group"
          >
            <div className="w-2 h-2 rounded-full bg-primary mb-4 group-hover:scale-150 transition-transform" />
            <span className="font-heading font-semibold text-charcoal">{item}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
