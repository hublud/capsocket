"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { CheckCircle } from "lucide-react";

const points = [
  "International agricultural trade focus",
  "Flexible and scalable operating structure",
  "Strong partnership-driven execution model",
  "Efficient supply chain coordination",
  "Focused agricultural market expertise",
  "Long-term growth-oriented approach",
];

export function WhyUs() {
  return (
    <Section id="why-us" className="bg-charcoal text-white">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-heading font-semibold uppercase tracking-wider mb-4"
        >
          Why CapSocket Holdings
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold mb-8"
        >
          Strategic Advantage in Commodity Trading
        </motion.h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {points.map((point, index) => (
          <motion.div
            key={point}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all hover:shadow-[0_0_30px_rgba(0,94,184,0.1)]"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                <CheckCircle className="text-primary" size={24} />
              </div>
              <h4 className="text-xl font-heading font-semibold leading-snug group-hover:text-primary transition-colors">
                {point}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
