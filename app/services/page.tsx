'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  GlassWater, Building2, CalendarHeart, PartyPopper, Package,
  ArrowRight, CheckCircle2, Waves, Sparkles, Check
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fadeInUp = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const services = [
  {
    icon: GlassWater,
    title: 'Daily Water Supply',
    subtitle: 'Residential Household Deliveries',
    desc: 'Pure 20L drinking water cans delivered to your South Delhi doorstep every morning. Pick your time slot, enjoy flexible quantity, and view your ledger online.',
    features: ['Daily doorstep morning delivery', 'Flexible 1–10 cans/day', 'Pause anytime on vacation', 'Complimentary trial can on day 1'],
    href: '/services/daily-water',
    badge: 'Popular for Homes',
  },
  {
    icon: Building2,
    title: 'Office & Corporate Supply',
    subtitle: 'Workplaces & Commercial Teams',
    desc: 'Keep staff energized with scheduled deliveries before 9:30 AM, hot & cold bottom-load dispensers, and consolidated monthly GST invoices.',
    features: ['Pre-9:30 AM arrival guarantee', 'Hot & cold dispensers included', 'Single monthly GST tax credit invoice', 'Priority same-day top-ups'],
    href: '/services/office-water',
    badge: 'B2B GST Invoicing',
  },
  {
    icon: CalendarHeart,
    title: 'Wedding & Reception Supply',
    subtitle: 'Celebrations & Banquets',
    desc: 'Bulk water arrangements for marriages, receptions, and sangeet ceremonies across South Delhi & Chattarpur farms. Free credit on unopened returns.',
    features: ['Up to 300+ cans capacity', '250ml guest bottles available', 'Venue loading dock coordination', '100% credit on unopened returns'],
    href: '/services/event-water',
    badge: 'Zero Risk Guarantee',
  },
  {
    icon: PartyPopper,
    title: 'Functions & Social Events',
    subtitle: 'Birthdays, Poojas & Seminars',
    desc: 'From private birthdays and club parties to temple bhandaras, we deliver chilled boxes, paper cups, and high-flow dispensers right to your venue.',
    features: ['Quick 24-hr booking turnaround', 'Chilled ice boxes provided', 'Eco-friendly paper cups', 'Multiple delivery batches'],
    href: '/book-event',
    badge: 'Flexible Setup',
  },
  {
    icon: Package,
    title: 'Bulk & Society Supply',
    subtitle: 'RWA & Multi-Tower Agreements',
    desc: 'Subsidized rates and dedicated delivery personnel for apartment complexes, RWAs, gyms, and commercial centers across South Delhi sectors.',
    features: ['Subsidized tiered pricing', 'Dedicated society delivery boy', 'Consolidated society billing', 'Direct truck dispatch'],
    href: '/contact',
    badge: 'Volume Discount',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#E8FFFA] selection:text-[#00A99D]">
      <Header />

      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative bg-[#052E2B] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-radial-at-t from-[#00A99D]/20 via-[#052E2B] to-[#03211F] pointer-events-none" />
          <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#36D399]/10 blur-[120px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <motion.div {...fadeInUp} className="max-w-3xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#36D399] border border-[#36D399]/30">
                <Waves className="w-3.5 h-3.5" /> Tailored Hydration Plans
              </span>
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                Water Supply <span className="text-[#36D399]">Solutions</span>
              </h1>
              <p className="text-base sm:text-lg text-[#E8FFFA]/80 leading-relaxed font-normal">
                From daily family home delivery to 300-can wedding supply, Kent Plus delivers 100% certified mineral water on your exact schedule.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 lg:py-28 bg-[#F4FCFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-[#00A99D]/20 shadow-md card-hover group">
                  <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                      <div className="w-16 h-16 rounded-2xl bg-[#E8FFFA] text-[#00A99D] flex items-center justify-center shrink-0 border border-[#00A99D]/20 group-hover:scale-105 group-hover:bg-[#00A99D] group-hover:text-white transition-all duration-300 shadow-md">
                        <service.icon className="w-8 h-8" />
                      </div>
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-3">
                          <h2 className="text-2xl font-black text-[#052E2B] group-hover:text-[#00A99D] transition-colors">
                            {service.title}
                          </h2>
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E8FFFA] text-[#00A99D] border border-[#00A99D]/20">
                            {service.badge}
                          </span>
                        </div>
                        <p className="text-sm text-[#4B6E6A] max-w-2xl leading-relaxed">
                          {service.desc}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-2.5 pt-2">
                          {service.features.map((feat) => (
                            <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-[#052E2B]">
                              <Check className="w-4 h-4 text-[#36D399] shrink-0 stroke-[3]" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="shrink-0 pt-4 lg:pt-0 w-full lg:w-auto">
                      <Link
                        href={service.href}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#00A99D] hover:bg-[#36D399] hover:text-[#052E2B] text-white transition-all shadow-md shadow-[#00A99D]/20"
                      >
                        <span>Explore &amp; Order</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#052E2B] py-20 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Not sure which water plan fits best?
            </h2>
            <p className="text-[#E8FFFA]/70 text-sm max-w-lg mx-auto">
              Our South Delhi operations team will calculate your ideal can frequency and allocate your nearest route delivery driver.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/book-water"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold bg-[#36D399] text-[#052E2B] hover:bg-white transition-all shadow-xl shadow-[#36D399]/25"
              >
                <span>Book 20L Daily Can</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold bg-white/10 hover:bg-white/20 text-[#E8FFFA] border border-[#E8FFFA]/30 transition-all"
              >
                <span>Call Helpline (+91 98765 43210)</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
