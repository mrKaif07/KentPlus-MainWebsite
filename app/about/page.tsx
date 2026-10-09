'use client';

import { motion } from 'framer-motion';
import {
  Droplets, Target, Eye, Heart, Truck, Cpu, MapPin, Shield, Waves,
  Award, Sparkles, CheckCircle2, ArrowRight, Check, Users, Clock, Flame
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fadeInUp = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#E8FFFA] selection:text-[#00A99D]">
      <Header />

      <main className="overflow-hidden">
        {/* 1. Hero */}
        <section className="relative bg-[#052E2B] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-radial-at-t from-[#00A99D]/20 via-[#052E2B] to-[#03211F] pointer-events-none" />
          <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#36D399]/10 blur-[120px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <motion.div {...fadeInUp} className="max-w-3xl mx-auto space-y-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#36D399] border border-[#36D399]/30">
                <Waves className="w-3.5 h-3.5" /> Our Journey of Purity
              </span>
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                The Kent Plus <span className="text-[#36D399]">Brand Story</span>
              </h1>
              <p className="text-base sm:text-lg text-[#E8FFFA]/80 leading-relaxed font-normal">
                Combining traditional doorstep neighborhood service with certified laboratory-grade purification across South Delhi since 2024.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. Our Story (Alternating: Text -> Visual Card) */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <motion.div {...fadeInUp} className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A99D]">
                  Our Origin
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#052E2B] tracking-tight">
                  Pure Water. <span className="gradient-text">Reliable Delivery.</span>
                </h2>
                <p className="text-base text-[#4B6E6A] leading-relaxed">
                  Kent Plus was founded with a straightforward conviction: clean, pure drinking water should be effortless, completely transparent, and backed by accountable local supply.
                </p>
                <p className="text-base text-[#4B6E6A] leading-relaxed">
                  What began as a localized community supply run in Saket has expanded into a reputable network serving over 542 active households and offices across 8 sectors, delivering more than 10,000 cans every single month.
                </p>
                <div className="pt-2 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#E8FFFA] text-[#00A99D] flex items-center justify-center font-bold text-lg">
                    2+
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#052E2B] block">Years of Daily Consistency</span>
                    <span className="text-xs text-[#4B6E6A]">Serving Saket, GK, Hauz Khas & South Delhi</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-6"
              >
                <div className="bg-[#F4FCFA] rounded-[2.5rem] p-8 sm:p-10 border border-[#00A99D]/20 shadow-xl">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { value: '542+', label: 'Active Customers' },
                      { value: '1,284', label: 'Daily Jars Delivered' },
                      { value: '8', label: 'South Delhi Sectors' },
                      { value: '99.8%', label: 'On-time Route Rate' },
                    ].map((stat, i) => (
                      <div key={stat.label} className="bg-white p-5 rounded-2xl border border-[#00A99D]/15 text-center shadow-xs">
                        <p className="text-3xl font-black text-[#052E2B] tracking-tight">{stat.value}</p>
                        <p className="text-xs font-semibold text-[#00A99D] mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. Our Plant & Purification Process (Alternating: Visual Card -> Text) */}
        <section className="py-20 lg:py-28 bg-[#E8FFFA] border-y border-[#00A99D]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-6"
              >
                <div className="bg-[#052E2B] rounded-[2.5rem] p-8 text-white space-y-6 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#00A99D]/20 rounded-full blur-3xl pointer-events-none" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#36D399]">
                    Facility Infrastructure
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    South Delhi Purification Facility
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm text-[#E8FFFA]/80">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#36D399] shrink-0 mt-0.5" />
                      <span>316L Food-Grade Stainless Steel multi-barrier vessels</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#36D399] shrink-0 mt-0.5" />
                      <span>High-throughput Reverse Osmosis membrane demineralization</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#36D399] shrink-0 mt-0.5" />
                      <span>Continuous ultraviolet disinfection & ozonation loop</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#36D399] shrink-0 mt-0.5" />
                      <span>Automated 4-stage steam jet can washing before every refill</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A99D]">
                  Purification Standards
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#052E2B] tracking-tight">
                  Certified Laboratory <span className="gradient-text">Rigour</span>
                </h2>
                <p className="text-base text-[#4B6E6A] leading-relaxed">
                  Unlike conventional unmonitored tanker suppliers, Kent Plus operations follow strict BIS IS:14543 packaged drinking water standards with daily in-house laboratory testing.
                </p>
                <p className="text-base text-[#4B6E6A] leading-relaxed">
                  Every batch is calibrated to retain 110 to 140 PPM TDS with optimal Magnesium, Calcium, and Copper electrolytes, delivering crisp taste and vital biological hydration.
                </p>
                <div className="pt-2">
                  <Link
                    href="/book-water"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#00A99D] hover:bg-[#36D399] hover:text-[#052E2B] text-white transition-all shadow-md"
                  >
                    <span>Start Daily Home Supply</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. Values (What Drives Us) */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A99D]">
                Core Principles
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#052E2B] mt-2 tracking-tight">
                What <span className="gradient-text">Drives Us</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { icon: Heart, title: 'Customer First', desc: 'No locked contracts, transparent ledger tracking, and one-click holiday pause anytime.' },
                { icon: Truck, title: '6:30 AM Delivery', desc: 'Rain or shine, our dedicated morning route drivers reach your doorstep before your day begins.' },
                { icon: Shield, title: 'BPA-Free Virgin Cans', desc: 'We only refill certified food-grade polycarbonate containers, replaced every 90 cycles.' },
                { icon: Cpu, title: 'Smart App Ledger', desc: 'Real-time SMS alerts, OTP verification, and consolidated monthly invoices in your portal.' },
              ].map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#F4FCFA] rounded-3xl p-7 border border-[#00A99D]/20 card-hover text-center group"
                >
                  <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-white text-[#00A99D] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#00A99D] group-hover:text-white transition-all duration-300">
                    <val.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-[#052E2B] mb-2">{val.title}</h3>
                  <p className="text-xs sm:text-sm text-[#4B6E6A] leading-relaxed">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Final About CTA */}
        <section className="bg-[#052E2B] py-20 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Experience the Purity of <span className="text-[#36D399]">Kent Plus</span>
            </h2>
            <p className="text-[#E8FFFA]/70 text-sm sm:text-base max-w-xl mx-auto">
              Try our complimentary 20L trial can on day one with zero security risk.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/book-water"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold bg-[#36D399] text-[#052E2B] hover:bg-white transition-all shadow-xl shadow-[#36D399]/25"
              >
                <span>Order Water Online</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold bg-white/10 hover:bg-white/20 text-[#E8FFFA] border border-[#E8FFFA]/30 transition-all"
              >
                <span>Talk to Local Coordinator</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
