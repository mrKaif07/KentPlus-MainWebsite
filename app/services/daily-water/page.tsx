'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GlassWater, Clock, CreditCard, Calendar, BarChart3, CheckCircle2, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function DailyWaterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#E8FFFA] selection:text-[#00A99D]">
      <Header />

      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative bg-[#052E2B] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-radial-at-t from-[#00A99D]/20 via-[#052E2B] to-[#03211F] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <motion.div {...fadeInUp} className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#36D399]/30 text-[#36D399] text-xs font-bold uppercase tracking-wider">
                  <GlassWater className="w-3.5 h-3.5" /> Daily Home Delivery Service
                </div>
                <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight">
                  Fresh Water at Your Door, <span className="text-[#36D399]">Every Day</span>
                </h1>
                <p className="text-base sm:text-lg text-[#E8FFFA]/80 max-w-xl leading-relaxed">
                  Get clean, 7-stage purified 20L drinking water cans delivered to your South Delhi home daily. Choose your preferred morning time slot and payment mode.
                </p>
                <div className="pt-2">
                  <Link
                    href="/book-water"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold bg-[#36D399] text-[#052E2B] hover:bg-white transition-all shadow-xl shadow-[#36D399]/20"
                  >
                    <span>Start Daily Supply</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-5"
              >
                <div className="bg-white rounded-3xl p-8 border border-[#00A99D]/20 shadow-2xl text-center text-[#052E2B] space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-[#E8FFFA] text-[#00A99D] flex items-center justify-center shadow-md">
                    <GlassWater className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black">20L Mineral Water Jar</h3>
                    <p className="text-3xl font-black text-[#00A99D] mt-1">₹65<span className="text-xs font-normal text-[#4B6E6A]"> / can</span></p>
                  </div>
                  <div className="space-y-2 text-left pt-2 border-t border-[#E8FFFA]">
                    {[
                      'Daily doorstep 6:30 AM delivery',
                      'Flexible 1–10 cans/trip',
                      '100% refundable deposit',
                      'Pause anytime on vacation',
                      'Dedicated route driver assigned',
                    ].map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs font-semibold text-[#052E2B]">
                        <Check className="w-3.5 h-3.5 text-[#36D399] shrink-0 stroke-[3]" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 bg-[#F4FCFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A99D]">
                Convenience Features
              </span>
              <h2 className="text-3xl font-black text-[#052E2B] mt-2">
                How Daily Home Delivery Works
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Calendar, title: 'Consistent Schedule', desc: 'Water cans placed outside your door before 9:30 AM every morning without fail.' },
                { icon: GlassWater, title: 'Custom Quantity', desc: 'Order 1 to 5 cans per trip. Change your quantity anytime from the customer portal.' },
                { icon: CreditCard, title: 'Simple Billing', desc: 'Pay per delivery or monthly consolidated ledger via UPI, Cards, or Cash.' },
                { icon: Clock, title: 'Morning Slot Guarantee', desc: 'Choose between 6:30–9:30 AM or evening slots to match your household routine.' },
                { icon: BarChart3, title: 'Real-Time Ledger', desc: 'Every jar delivered is logged via SMS OTP so you only pay for what you consume.' },
                { icon: ShieldCheck, title: 'Quality Assurance', desc: 'Every container is sealed with tamper-evident caps and tested for optimal TDS.' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-3xl p-7 border border-[#00A99D]/20 shadow-md card-hover"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#E8FFFA] text-[#00A99D] flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#052E2B] mb-1.5">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#4B6E6A] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#052E2B] py-16 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Start Receiving Pure Water From Tomorrow
            </h2>
            <p className="text-sm text-[#E8FFFA]/70 max-w-lg mx-auto">
              Setup takes under 3 minutes with zero paperwork and instant driver allocation.
            </p>
            <div className="pt-2">
              <Link
                href="/book-water"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#36D399] text-[#052E2B] hover:bg-white transition-all shadow-lg"
              >
                <span>Register for Daily Delivery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
