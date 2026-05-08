"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Search, Truck, Share2, Handshake } from "lucide-react";

const services = [
  {
    title: "Commodity Sourcing",
    description: "We coordinate sourcing activities through supplier networks, aggregators, and agricultural partners across multiple markets.",
    icon: Search,
  },
  {
    title: "Wholesale Distribution",
    description: "We support bulk commodity supply and distribution for commercial buyers and trading partners.",
    icon: Truck,
  },
  {
    title: "Supply Chain Coordination",
    description: "We work with logistics and processing partners to support efficient product movement and operational continuity.",
    icon: Share2,
  },
  {
    title: "Strategic Partnerships",
    description: "We collaborate with operating partners and commercial counterparties to support long-term agricultural trade and infrastructure development opportunities.",
    icon: Handshake,
  },
];

export function Services() {
  return (
    <Section id="services" className="bg-gray-50">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-heading font-semibold uppercase tracking-wider mb-4"
        >
          What We Do
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-heading font-bold text-charcoal"
        >
          Comprehensive Solutions for Global Agricultural Trade
        </motion.h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <service.icon size={28} className="text-primary group-hover:text-white" />
            </div>
            <h4 className="text-xl font-heading font-bold mb-4 text-charcoal">{service.title}</h4>
            <p className="text-charcoal/60 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
