"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const commodities = ["Rice", "Maize", "Soybeans", "Cocoa", "Sesame Seed"];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-charcoal">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-charcoal/80 via-charcoal/40 to-charcoal" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-primary font-heading font-semibold tracking-wider uppercase mb-4 text-sm md:text-base">
            Agricultural Commodity Sourcing & Trade
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
            Connecting Agricultural Supply to <span className="text-primary">Global Markets</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
            CapSocket Holdings Limited is a UK-registered company focused on the sourcing, coordination, and wholesale distribution of agricultural commodities across African and international markets.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Button size="lg" className="px-10" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="px-10 border-white text-white hover:bg-white/10" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Us
            </Button>
          </div>

          <div className="flex flex-wrap gap-3">
            {commodities.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium text-white/90"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block opacity-20">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="199.5" stroke="white" strokeDasharray="10 10" />
        </svg>
      </div>
    </section>
  );
}
