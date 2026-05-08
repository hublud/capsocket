"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Globe } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" className="pb-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary font-heading font-semibold uppercase tracking-wider mb-4">Contact Us</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-charcoal mb-8">
            Get in Touch with Our Trading Experts
          </h3>
          <p className="text-charcoal/60 text-lg mb-10 leading-relaxed">
            Whether you are looking for a reliable sourcing partner or interested in exploring strategic agricultural partnerships, our team is ready to assist.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-charcoal mb-1">Registered Address</h4>
                <p className="text-charcoal/60">75 Shelton Street, London WC1H 9JQ, United Kingdom</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-charcoal mb-1">Email Address</h4>
                <p className="text-charcoal/60">contact@capsocket.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-charcoal/60 ml-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-charcoal/60 ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-charcoal/60 ml-1">Subject</label>
              <input
                type="text"
                placeholder="Partnership Inquiry"
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-charcoal/60 ml-1">Message</label>
              <textarea
                rows={5}
                placeholder="How can we help you?"
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
              ></textarea>
            </div>
            <Button size="lg" className="w-full py-6 text-lg">Send Message</Button>
          </form>
        </motion.div>
      </div>

      {/* CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-primary rounded-3xl p-12 md:p-20 overflow-hidden text-center translate-y-1/2 z-10"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 relative z-10">
          Ready to scale your agricultural trade operations?
        </h3>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto relative z-10">
          Join our network of partners and suppliers to access global markets and efficient supply chain coordination.
        </p>
        <div className="flex justify-center gap-4 relative z-10">
          <Button variant="light" size="lg">Get Started Now</Button>
        </div>
      </motion.div>
    </Section>
  );
}
