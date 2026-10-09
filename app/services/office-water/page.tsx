'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Building2, ShieldCheck, Clock, Receipt, Users, Award, CheckCircle2, ArrowRight, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OfficeWaterPage() {
  const benefits = [
    {
      icon: Clock,
      title: 'Guaranteed Morning Delivery',
      desc: 'Deliveries completed before 9:30 AM so your office pantry is stocked before staff arrive.'
    },
    {
      icon: Receipt,
      title: 'Consolidated Monthly GST Invoicing',
      desc: 'Single tax invoice at month-end with itemized delivery chits and input tax credit compliance.'
    },
    {
      icon: Users,
      title: 'Custom Dispenser Setups',
      desc: 'Hot & cold bottom-load dispensers provided and maintained for regular corporate plans.'
    },
    {
      icon: Award,
      title: 'Food-Grade Certified Packaging',
      desc: 'Double-sanitized, BPA-free 20L polycarbonate containers tested weekly for TDS & purity.'
    }
  ];

  const packages = [
    {
      name: 'Startup / Small Team',
      teams: '5 - 15 Members',
      cans: '3 - 5 Cans / week',
      price: '₹2,400',
      period: 'per month',
      features: ['20L Cans on alternate days', 'Standard table-top stand', 'Monthly consolidated invoice', 'Digital delivery confirmation'],
      popular: false
    },
    {
      name: 'Growing Corporate',
      teams: '15 - 50 Members',
      cans: '10 - 20 Cans / week',
      price: '₹5,800',
      period: 'per month',
      features: ['Daily fresh delivery (Mon-Sat)', '1 Free Hot & Cold Dispenser', 'Dedicated route driver', 'Priority same-day emergency top-up', 'GST Input Credit Invoice'],
      popular: true
    },
    {
      name: 'Enterprise / Multi-Floor',
      teams: '50+ Members',
      cans: '25+ Cans / week',
      price: 'Custom Quote',
      period: 'volume discount',
      features: ['Multiple dispenser stations', 'Floor-wise distribution', 'Dedicated account manager', 'Free weekly dispenser sanitization', 'Flexible payment terms (Net 30)'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#E8FFFA] selection:text-[#00A99D]">
      <Header />

      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative bg-[#052E2B] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-radial-at-t from-[#00A99D]/20 via-[#052E2B] to-[#03211F] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#36D399] border border-[#36D399]/30">
                <Building2 className="w-3.5 h-3.5" /> B2B Corporate Solutions
              </span>
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                Corporate Water Solutions For Productive Workplaces
              </h1>
              <p className="text-base sm:text-lg text-[#E8FFFA]/80 leading-relaxed font-normal">
                Keep your team energized and hydrated with Kent Plus scheduled morning deliveries, verified drinking water quality, hot & cold dispensers, and transparent GST billing.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/book-water"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold bg-[#36D399] text-[#052E2B] hover:bg-white transition-all shadow-xl shadow-[#36D399]/20"
                >
                  <span>Request Corporate Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold bg-white/10 hover:bg-white/20 text-[#E8FFFA] border border-[#E8FFFA]/30 transition-all"
                >
                  <span>Talk to Corporate Specialist</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-[#F4FCFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A99D]">
                Why Businesses Choose Kent Plus
              </span>
              <h2 className="text-3xl font-black text-[#052E2B] mt-2">
                Zero Pantry Disruption, Zero Invoice Headaches
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-7 rounded-3xl border border-[#00A99D]/20 shadow-md card-hover"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#E8FFFA] text-[#00A99D] flex items-center justify-center mb-4">
                    <b.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#052E2B] mb-2">{b.title}</h3>
                  <p className="text-xs sm:text-sm text-[#4B6E6A] leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing / Packages */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A99D]">
                Transparent Corporate Plans
              </span>
              <h2 className="text-3xl font-black text-[#052E2B] mt-2">Office Water Plans</h2>
              <p className="text-sm text-[#4B6E6A] mt-2">Flexible contracts, pause anytime during office holidays, no lock-in period.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`relative rounded-3xl p-8 border transition-all ${
                    pkg.popular
                      ? 'border-[#00A99D] bg-[#E8FFFA]/40 shadow-xl ring-2 ring-[#00A99D]'
                      : 'border-[#00A99D]/20 bg-white shadow-md'
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00A99D] text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-sm">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-[#052E2B] mb-1">{pkg.name}</h3>
                  <p className="text-xs text-[#4B6E6A] mb-4">{pkg.teams} • {pkg.cans}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-black text-[#052E2B]">{pkg.price}</span>
                    <span className="text-xs text-[#4B6E6A] ml-2">/{pkg.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feat, fi) => (
                      <li key={fi} className="flex items-center gap-2.5 text-xs font-semibold text-[#052E2B]">
                        <Check className="w-4 h-4 text-[#36D399] shrink-0 stroke-[3]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/book-water"
                    className={`block w-full py-3.5 rounded-full text-center font-bold text-xs transition-all ${
                      pkg.popular
                        ? 'bg-[#00A99D] text-white hover:bg-[#36D399] hover:text-[#052E2B] shadow-md shadow-[#00A99D]/20'
                        : 'bg-[#E8FFFA] text-[#052E2B] hover:bg-[#00A99D] hover:text-white'
                    }`}
                  >
                    Choose {pkg.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#052E2B] text-white text-center">
          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Need water across multiple branch offices in Delhi?
            </h2>
            <p className="text-[#E8FFFA]/70 text-sm max-w-xl mx-auto">
              Get centralized corporate billing, multi-location delivery management, and customized SLAs.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#36D399] text-[#052E2B] font-bold text-xs sm:text-sm hover:bg-white transition-all shadow-lg"
              >
                <span>Connect With B2B Sales Manager</span>
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
