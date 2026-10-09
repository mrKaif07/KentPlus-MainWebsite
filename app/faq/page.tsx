'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ArrowRight, Waves } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FAQS = [
  {
    category: 'Ordering & Delivery',
    items: [
      { q: 'What are your delivery timings in South Delhi?', a: 'We operate two primary delivery slots: Morning slot from 6:30 AM to 9:30 AM (ideal for daily home and office consumption before starting the day) and Evening slot from 4:30 PM to 8:30 PM.' },
      { q: 'How does daily water delivery work?', a: 'When you subscribe, our dedicated route driver delivers your chosen count of 20L jars directly to your doorstep according to your schedule (Daily, Alternate Days, or Weekdays). You can pause, change quantity, or request extra cans at any time through the Kent Plus Customer Portal.' },
      { q: 'What if I live on a higher floor without a lift?', a: 'Our delivery associates are trained and equipped to deliver up to the 4th floor. Please make sure to specify your floor number during registration so we can allocate appropriate route timing.' },
      { q: 'Can I get same-day emergency water deliveries?', a: 'Yes! Active subscribers can request an emergency top-up directly via the customer portal or WhatsApp helpline. If ordered before 3:00 PM, emergency cans are delivered within 90 minutes across all covered South Delhi sectors.' },
    ]
  },
  {
    category: 'Water Quality & Standards',
    items: [
      { q: 'How do you ensure water purity and safety?', a: 'Kent Plus drinking water undergoes a rigorous 7-stage purification process: Micron sediment filtration, activated carbon adsorption, RO membrane demineralization, essential minerals re-infusion (Copper & Magnesium), UV disinfection, and final ozonation. Batch TDS and pH levels are tested daily.' },
      { q: 'Are your 20L jars safe and BPA-free?', a: 'Absolutely. We only use 100% virgin food-grade, BPA-free polycarbonate containers. Every returning jar is sanitized using automated 4-stage high-pressure jet washing and steam sterilization before refilling.' },
      { q: 'What is the TDS and pH level of Kent Plus water?', a: 'We maintain an optimal TDS range between 110 to 140 PPM and a mildly alkaline pH of 7.2 to 7.8, providing a clean, sweet, and crisp drinking experience compliant with BIS IS:14543 standards.' },
    ]
  },
  {
    category: 'Billing & Payments',
    items: [
      { q: 'Is there a security deposit for the 20L jars?', a: 'A refundable container security deposit of ₹150 per jar is charged on your first delivery. When you return the jars or cancel the subscription, the full deposit is immediately refunded to your original payment mode.' },
      { q: 'How does monthly billing work?', a: 'Every delivery is digitally logged by your delivery driver upon OTP confirmation. At the end of the month, a single itemized invoice is generated in your Customer Portal. You can pay via UPI (Google Pay, PhonePe, Paytm), Net Banking, Cards, or cash on delivery.' },
      { q: 'Can I pause my subscription when going on vacation?', a: 'Yes, with one click in your customer portal! You can set pause dates with zero penalties, and billing is paused automatically for those days.' },
    ]
  },
  {
    category: 'Events & Functions',
    items: [
      { q: 'How many days in advance should I book water for weddings or events?', a: 'For orders of 20 to 200 cans, 24 to 48 hours notice is ideal. For larger bulk requirements (200+ cans or custom 250ml/500ml packaged bottles with ice boxes), 3 days notice ensures reserved fleet allocation and dedicated venue staff.' },
      { q: 'Do you provide dispensers, stands, and paper cups for events?', a: 'Yes! We supply tabletop stands, bottom-load hot & cold dispensers, paper cup dispensers, and chilled water boxes based on your package selection.' },
    ]
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
    '0-0': true,
    '1-0': true,
    '2-0': true
  });

  const toggle = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#E8FFFA] selection:text-[#00A99D]">
      <Header />

      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative bg-[#052E2B] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden text-center">
          <div className="absolute inset-0 bg-radial-at-t from-[#00A99D]/20 via-[#052E2B] to-[#03211F] pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative max-w-4xl mx-auto px-4 z-10 space-y-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#36D399] border border-[#36D399]/30">
              <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              Everything You Need to <span className="text-[#36D399]">Know</span>
            </h1>
            <p className="text-base sm:text-lg text-[#E8FFFA]/80 max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about Kent Plus water delivery schedules, quality verification, billing, and event packages.
            </p>
          </motion.div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 bg-[#F4FCFA] flex-1">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {FAQS.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1, duration: 0.6 }}
                className="bg-white p-8 rounded-3xl border border-[#00A99D]/20 shadow-md"
              >
                <h2 className="text-xl font-black text-[#052E2B] mb-6 flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-[#00A99D]" />
                  {category.category}
                </h2>

                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => {
                    const key = `${catIndex}-${itemIndex}`;
                    const isOpen = !!openItems[key];
                    return (
                      <div
                        key={itemIndex}
                        className="border border-[#00A99D]/20 rounded-2xl overflow-hidden transition-colors hover:border-[#00A99D]/50"
                      >
                        <button
                          onClick={() => toggle(key)}
                          className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-[#052E2B] text-sm bg-white hover:bg-[#F4FCFA] transition-colors"
                        >
                          <span>{item.q}</span>
                          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                            <ChevronDown className={`w-4 h-4 shrink-0 ${isOpen ? 'text-[#00A99D]' : 'text-[#4B6E6A]'}`} />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#4B6E6A] leading-relaxed border-t border-[#E8FFFA] bg-[#F4FCFA]/50">
                                {item.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}

            {/* Support Callout */}
            <div className="bg-[#052E2B] rounded-3xl p-8 sm:p-10 text-white text-center space-y-4 shadow-xl">
              <h3 className="text-2xl font-black text-white">Still have questions?</h3>
              <p className="text-xs sm:text-sm text-[#E8FFFA]/70 max-w-md mx-auto">
                Our South Delhi operations team is available 7 days a week from 6:00 AM to 9:00 PM.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-[#36D399] text-[#052E2B] hover:bg-white transition-all shadow-md"
                >
                  <span>Contact Support Desk</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-white/10 hover:bg-white/20 text-[#E8FFFA] border border-[#E8FFFA]/30 transition-all"
                >
                  Call +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
