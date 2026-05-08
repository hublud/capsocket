"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";

const steps = [
  {
    title: "Flexible Structure",
    desc: "A scalable, asset-light structure designed to support efficiency and rapid growth.",
  },
  {
    title: "Strategic Sourcing",
    desc: "Coordinating with third-party suppliers and aggregators across key regional markets.",
  },
  {
    title: "Operational Logistics",
    desc: "Working alongside logistics providers to support efficient commodity movement.",
  },
  {
    title: "Market Distribution",
    desc: "Supporting large-scale distribution activities for international commercial partners.",
  },
];

export function OperatingModel() {
  return (
    <Section id="operating-model" dark className="relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
        <div className="lg:col-span-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-heading font-semibold uppercase tracking-wider mb-4"
          >
            Our Operating Model
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold mb-8 text-white"
          >
            Efficiency Driven Excellence
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/70 text-lg leading-relaxed mb-8"
          >
            CapSocket Holdings Limited operates a scalable, asset-light structure designed to support flexibility, efficiency, and growth across agricultural markets.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/70 text-lg leading-relaxed"
          >
            Where appropriate, the business may also support strategic operating and infrastructure initiatives through commercial partnership arrangements.
          </motion.p>
        </div>

        <div className="lg:col-span-3 space-y-8 relative">
          <div className="absolute left-8 top-8 bottom-8 w-px bg-white/10 hidden md:block" />
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-0 md:pl-20"
            >
              <div className="hidden md:flex absolute left-4 top-1 w-8 h-8 rounded-full bg-primary items-center justify-center text-white font-bold z-10 border-4 border-charcoal">
                {index + 1}
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all">
                <h4 className="text-xl font-heading font-bold mb-2 text-white">{step.title}</h4>
                <p className="text-white/50">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
