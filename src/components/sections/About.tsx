"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";

const stats = [
  { label: "Global Markets", value: "International" },
  { label: "Supply Networks", value: "Verified" },
  { label: "Strategic Partnerships", value: "Reliable" },
];

export function About() {
  return (
    <Section id="about" className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-200 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop"
              alt="Agriculture focus"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Stats Overlay */}
          <div className="absolute -bottom-10 -right-10 hidden md:flex flex-col gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-xl border border-gray-100 min-w-[200px]"
              >
                <div className="text-primary font-bold text-2xl mb-1">{stat.value}</div>
                <div className="text-charcoal/60 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary font-heading font-semibold uppercase tracking-wider mb-4">About Us</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold mb-8 text-charcoal">
            Building Sustainable Supply Chain Growth
          </h3>
          <div className="space-y-6 text-charcoal/70 text-lg leading-relaxed">
            <p>
              CapSocket Holdings Limited operates through a flexible, partnership-driven model within the agricultural commodities and supply chain sector.
            </p>
            <p>
              Our focus is on connecting agricultural production to commercial markets through responsible sourcing, trade coordination, wholesale distribution, and operational partnerships across regional and international markets.
            </p>
            <p>
              By collaborating with established supplier networks, processors, and logistics partners, we help facilitate efficient commodity movement and scalable agricultural trade operations.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
