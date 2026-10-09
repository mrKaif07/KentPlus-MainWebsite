'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Droplets, Truck, Clock, Shield, CreditCard, MapPin, Headphones,
  ArrowRight, Star, ChevronDown, Users, Building2, PartyPopper,
  GlassWater, CheckCircle2, Sparkles, CalendarHeart, Package, Play,
  Waves, MessageCircle, X, Check, Award, Flame, RefreshCw, CheckCheck,
  Factory, Heart, Cake, Briefcase
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { testimonials, faqItems } from '@/lib/mock-data';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true },
};

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [bottleFillPercent, setBottleFillPercent] = useState(75);
  const [galleryCategory, setGalleryCategory] = useState<'all' | 'plant' | 'purification' | 'bottling' | 'delivery'>('all');

  // Event Calculator State
  const [calcGuests, setCalcGuests] = useState(250);
  const [calcEventType, setCalcEventType] = useState('Wedding');
  const [calcHours, setCalcHours] = useState(6);
  const [calcArea, setCalcArea] = useState('Saket');

  // Real requirement calculation logic
  const calculatedCans = Math.max(8, Math.ceil((calcGuests * (calcHours / 4) * 1.6) / 20));
  const calculatedBottles = Math.ceil(calcGuests * 1.5);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  // Gallery items with real plant context
  const galleryItems = [
    {
      id: 1,
      category: 'plant',
      title: 'South Delhi Central Purification Plant',
      desc: 'Stainless steel 316L multi-stage filtration vessels',
      tag: 'Water Plant',
      color: 'from-[#052E2B] to-[#00A99D]'
    },
    {
      id: 2,
      category: 'purification',
      title: '7-Stage Reverse Osmosis & UV sterilization',
      desc: 'Continuous real-time TDS and micro-contaminant monitoring',
      tag: 'Purification',
      color: 'from-[#00A99D] to-[#36D399]'
    },
    {
      id: 3,
      category: 'bottling',
      title: 'Automated 4-Jet Can Sterilization & Bottling',
      desc: 'Zero-human-touch pressurized steam wash & sanitary sealing',
      tag: 'Bottling',
      color: 'from-[#052E2B] to-[#03211F]'
    },
    {
      id: 4,
      category: 'delivery',
      title: 'Dedicated Morning Fleet Dispatch',
      desc: 'Covering 8 key South Delhi areas before 9:30 AM',
      tag: 'Delivery',
      color: 'from-[#00A99D] to-[#052E2B]'
    },
    {
      id: 5,
      category: 'plant',
      title: 'Batch Lab & Mineral Enrichment Chamber',
      desc: 'Essential Magnesium & Copper mineral re-infusion testing',
      tag: 'Plant Lab',
      color: 'from-[#36D399] to-[#00A99D]'
    },
    {
      id: 6,
      category: 'bottling',
      title: 'Food-Grade 20L Polycarbonate Cans',
      desc: '100% BPA-free virgin containers with tamper-proof seal caps',
      tag: 'Storage',
      color: 'from-[#052E2B] to-[#00A99D]'
    },
  ];

  const filteredGallery = galleryCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === galleryCategory);

  return (
    <>
      <Header />
      <main className="overflow-hidden">

        {/* ═══════════════════════════════════════════════════════
            SECTION 8: HERO SECTION ("PURE + NATURAL")
        ═══════════════════════════════════════════════════════ */}
        <section
          ref={heroRef}
          className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-[#052E2B] text-white overflow-hidden"
        >
          {/* Subtle water ambient glow & organic gradient */}
          <div className="absolute inset-0 bg-radial-at-t from-[#00A99D]/20 via-[#052E2B] to-[#03211F] pointer-events-none" />
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#36D399]/10 blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#00A99D]/15 blur-[140px] pointer-events-none" />

          {/* Floating water drops / subtle liquid bubbles */}
          <motion.div
            animate={{ y: [-10, -40, -10], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-10 w-4 h-4 rounded-full bg-[#36D399]/30 blur-xs"
          />
          <motion.div
            animate={{ y: [15, -25, 15], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-[#00A99D]/30 blur-xs"
          />
          <motion.div
            animate={{ y: [-5, -35, -5], opacity: [0.25, 0.65, 0.25] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-1/4 left-1/3 w-5 h-5 rounded-full bg-[#E8FFFA]/20 blur-xs"
          />

          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10"
          >
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Typography & CTAs */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-7 space-y-7 text-center lg:text-left"
              >
                {/* Pill Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[#36D399]/30 shadow-md">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#36D399] animate-pulse" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E8FFFA]">
                    PURE + NATURAL • SOUTH DELHI SUPPLY
                  </span>
                </div>

                {/* Hero Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-[3.85rem] font-black leading-[1.1] tracking-tight text-white">
                  PURE WATER.{' '}
                  <span className="gradient-text">DELIVERED WITH TRUST.</span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-[#E8FFFA]/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  Reliable purified drinking water supply for homes, businesses, marriages, functions, and large events across South Delhi. Zero delays, crystal purity.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      href="/book-water"
                      className="inline-flex items-center gap-2 px-8 py-4 text-sm sm:text-base font-bold text-[#052E2B] rounded-full bg-[#36D399] hover:bg-white transition-all shadow-xl shadow-[#36D399]/25 hover:shadow-[#36D399]/40"
                    >
                      <Droplets className="w-4 h-4 fill-[#052E2B]" />
                      <span>Order Water</span>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      href="/book-event"
                      className="inline-flex items-center gap-2 px-8 py-4 text-sm sm:text-base font-bold text-[#E8FFFA] rounded-full bg-white/10 hover:bg-white/20 border border-[#E8FFFA]/30 backdrop-blur-sm transition-all"
                    >
                      <CalendarHeart className="w-4 h-4 text-[#36D399]" />
                      <span>Bulk / Event Booking</span>
                    </Link>
                  </motion.div>
                </div>

                {/* Micro Trust Indicators */}
                <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#E8FFFA]/70 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#36D399]" />
                    <span>Same-day South Delhi Dispatch</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#36D399]" />
                    <span>BIS IS:14543 Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#36D399]" />
                    <span>100% BPA-Free Cans</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Hero Visual with Water Specialist & Floating Badges */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-5 relative"
              >
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Outer organic aura */}
                  <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-[#00A99D]/30 to-[#36D399]/20 blur-2xl transform scale-95" />

                  {/* Main Visual Card (Mockup style from reference image) */}
                  <div className="relative rounded-[2.5rem] bg-gradient-to-b from-[#00A99D]/20 to-[#052E2B]/80 border border-[#00A99D]/40 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
                    {/* Ripple pattern */}
                    <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-[#36D399]/20" />
                    <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full border border-[#36D399]/30" />

                    {/* Central Water Specialist Visual */}
                    <div className="relative z-10 text-center py-4">
                      {/* Water Bottle Graphic / Delivery Graphic */}
                      <div className="relative w-48 h-56 mx-auto mb-6 flex items-center justify-center">
                        {/* Realistic 20L Water Can representation */}
                        <motion.div
                          animate={{ y: [-6, 6, -6] }}
                          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                          className="relative w-36 h-48 rounded-3xl bg-gradient-to-b from-[#E8FFFA]/90 via-[#00A99D]/80 to-[#052E2B] border-2 border-white/60 shadow-2xl shadow-[#00A99D]/50 flex flex-col items-center justify-between p-3 overflow-hidden"
                        >
                          {/* Can neck */}
                          <div className="w-12 h-4 rounded-t-lg bg-white/80 border border-[#00A99D]/40 -mt-2" />
                          {/* Ribbed lines on 20L water can */}
                          <div className="w-full space-y-2 opacity-50 my-auto">
                            <div className="w-full h-1 bg-white/40 rounded-full" />
                            <div className="w-full h-1 bg-white/40 rounded-full" />
                            <div className="w-full h-1 bg-white/40 rounded-full" />
                          </div>
                          {/* Purity badge on can */}
                          <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md flex flex-col items-center justify-center shadow-lg">
                            <Droplets className="w-6 h-6 text-[#00A99D]" />
                            <span className="text-[9px] font-black text-[#052E2B]">20L</span>
                          </div>
                          {/* Water level indicator */}
                          <div className="w-full text-center">
                            <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                              Kent Plus Pure
                            </span>
                          </div>
                        </motion.div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1">
                        Delivered to Your Doorstep
                      </h3>
                      <p className="text-xs text-[#E8FFFA]/70 max-w-xs mx-auto">
                        Pure mineral-rich drinking water with dedicated morning route timings across South Delhi.
                      </p>
                    </div>

                    {/* Floating Pill Badge 1: Check Availability */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute -top-3 left-4 bg-white text-[#052E2B] rounded-2xl shadow-xl p-3 border border-[#E8FFFA] flex items-center gap-3 text-left max-w-[210px]"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#E8FFFA] text-[#00A99D] flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-[#052E2B] block leading-tight">
                          South Delhi Ready
                        </span>
                        <span className="text-[10px] text-[#4B6E6A]">8 Active Sectors</span>
                      </div>
                    </motion.div>

                    {/* Floating Pill Badge 2: Delivery on time */}
                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                      className="absolute -bottom-3 right-4 bg-white text-[#052E2B] rounded-2xl shadow-xl p-3 border border-[#E8FFFA] flex items-center gap-3 text-left"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#36D399]/20 text-[#00A99D] flex items-center justify-center shrink-0">
                        <CheckCheck className="w-4 h-4 text-[#00A99D]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-[#052E2B] block leading-tight">
                          6:30 AM Morning Slot
                        </span>
                        <span className="text-[10px] text-[#4B6E6A]">On-time Guarantee</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-14 text-center hidden md:block"
            >
              <div className="inline-flex flex-col items-center gap-2 text-xs text-[#E8FFFA]/60 hover:text-white transition-colors cursor-pointer"
                onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}>
                <span>Scroll to explore</span>
                <ChevronDown className="w-4 h-4 text-[#36D399]" />
              </div>
            </motion.div>
          </motion.div>
        </section>


        {/* ═══════════════════════════════════════════════════════
            SECTION 9: TRUST STATISTICS
        ═══════════════════════════════════════════════════════ */}
        <section className="relative bg-[#E8FFFA] py-16 lg:py-20 border-y border-[#00A99D]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A99D]">
                Verified Business Metrics
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#052E2B] mt-2">
                Trusted by Households &amp; Events Across South Delhi
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { count: '542+', label: 'Active Subscribers', detail: 'Homes & Offices', icon: Users },
                { count: '10K+', label: 'Monthly Deliveries', detail: 'Fresh 20L Cans', icon: Package },
                { count: '120+', label: 'Weddings & Events', detail: 'Bulk Supply Delivered', icon: CalendarHeart },
                { count: '4.9', suffixIcon: Star, label: 'Customer Rating', detail: 'Google & Portal Verified', icon: Star },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="bg-white rounded-3xl p-6 sm:p-8 text-center border border-[#00A99D]/15 shadow-lg shadow-[#00A99D]/5 card-hover group"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#E8FFFA] text-[#00A99D] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00A99D] group-hover:text-white transition-all duration-300">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <p className="text-3xl sm:text-4xl font-black text-[#052E2B] tracking-tight group-hover:text-[#00A99D] transition-colors inline-flex items-center justify-center gap-1">
                    <span>{stat.count}</span>
                    {stat.suffixIcon && (
                      <stat.suffixIcon className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400 fill-amber-400 inline" />
                    )}
                  </p>
                  <p className="text-sm font-bold text-[#052E2B] mt-1">{stat.label}</p>
                  <p className="text-xs text-[#4B6E6A] mt-0.5">{stat.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════
            SECTION 10: SERVICES ("WATER FOR EVERY OCCASION")
        ═══════════════════════════════════════════════════════ */}
        <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00A99D] bg-[#E8FFFA] px-4 py-1.5 rounded-full border border-[#00A99D]/20">
                <Waves className="w-3.5 h-3.5" /> Pure Solutions
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#052E2B] mt-4 tracking-tight">
                WATER FOR <span className="gradient-text">EVERY OCCASION</span>
              </h2>
              <p className="text-sm sm:text-base text-[#4B6E6A] mt-3 leading-relaxed">
                Tailored drinking water supply backed by dedicated delivery associates, flexible billing, and emergency top-ups.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  icon: GlassWater,
                  title: 'Daily Water Supply',
                  subtitle: 'Regular Household Supply',
                  desc: 'Doorstep 20L can delivery every morning. Set your quantity, pick your delivery slot, and enjoy transparent monthly ledgers.',
                  features: ['Daily 6:30 AM - 9:30 AM', '1 to 10 Cans flexible', 'Free dispenser on trial'],
                  href: '/services/daily-water',
                  color: 'from-[#00A99D] to-[#36D399]'
                },
                {
                  icon: CalendarHeart,
                  title: 'Marriage & Functions',
                  subtitle: 'Weddings & Celebrations',
                  desc: 'Bulk water arrangements for marriages, receptions, and parties. We deliver up to 200+ cans with venue setup and chilled ice boxes.',
                  features: ['Venue schedule coordination', 'Bottles 250ml + 20L cans', '100% unused return refund'],
                  href: '/book-event',
                  color: 'from-[#052E2B] to-[#00A99D]'
                },
                {
                  icon: Building2,
                  title: 'Corporate & Offices',
                  subtitle: 'Commercial Workplaces',
                  desc: 'Keep staff hydrated with scheduled daily pantry water deliveries, hot & cold dispensers, and single monthly GST input tax credit invoices.',
                  features: ['GST compliant invoices', 'Hot & cold dispensers', 'Emergency priority top-up'],
                  href: '/services/office-water',
                  color: 'from-[#00A99D] to-[#052E2B]'
                },
                {
                  icon: Package,
                  title: 'Bulk Orders',
                  subtitle: 'Large-Volume Requirements',
                  desc: 'High-volume water supply for societies, RWA agreements, construction sites, and catering partners with dedicated pricing.',
                  features: ['Subsidized bulk rates', 'Direct truck dispatch', 'Dedicated account manager'],
                  href: '/contact',
                  color: 'from-[#36D399] to-[#00A99D]'
                },
              ].map((svc, i) => (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="rounded-3xl bg-[#F4FCFA] border border-[#00A99D]/20 p-7 flex flex-col justify-between card-hover card-glow group relative overflow-hidden"
                >
                  {/* Subtle top gradient accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${svc.color}`} />

                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-white text-[#00A99D] shadow-md border border-[#00A99D]/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#00A99D] group-hover:text-white transition-all duration-300">
                      <svc.icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold text-[#00A99D] uppercase tracking-wider block mb-1">
                      {svc.subtitle}
                    </span>
                    <h3 className="text-xl font-black text-[#052E2B] mb-3 group-hover:text-[#00A99D] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4B6E6A] leading-relaxed mb-6">
                      {svc.desc}
                    </p>
                    <div className="space-y-2 mb-6 pt-4 border-t border-[#00A99D]/15">
                      {svc.features.map(f => (
                        <div key={f} className="flex items-center gap-2 text-xs font-semibold text-[#052E2B]">
                          <Check className="w-3.5 h-3.5 text-[#36D399] shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#00A99D] group-hover:text-[#052E2B] transition-colors"
                  >
                    <span>View Plan Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════
            SECTION 11: "FROM OUR PLANT TO YOUR DOOR" (PROCESS)
        ═══════════════════════════════════════════════════════ */}
        <section className="relative bg-[#052E2B] py-20 lg:py-28 text-white overflow-hidden">
          <div className="absolute inset-0 bg-radial-at-c from-[#00A99D]/15 to-transparent pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#36D399]">
                Continuous Journey of Purity
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
                FROM OUR PLANT <span className="text-[#36D399]">TO YOUR DOOR</span>
              </h2>
              <p className="text-sm sm:text-base text-[#E8FFFA]/70 mt-3">
                How every drop is treated, certified, bottled in sanitized polycarbonate jars, and delivered on schedule.
              </p>
            </motion.div>

            {/* Stages Grid with Teal Connecting Flow */}
            <div className="relative">
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-[#00A99D] via-[#36D399] to-[#00A99D] -translate-y-8 z-0 opacity-40" />

              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
                {[
                  { step: '01', title: 'Purification', desc: 'Pre-filtration through micron sediment & activated charcoal', icon: Droplets },
                  { step: '02', title: 'Filtration', desc: 'Reverse Osmosis membrane processing to remove all heavy metals', icon: Waves },
                  { step: '03', title: 'Quality Check', desc: 'Daily batch TDS (110-140) & pH testing with mineral re-infusion', icon: Award },
                  { step: '04', title: 'Bottling', desc: 'Automated 4-stage high-pressure steam jet sanitization of 20L cans', icon: Sparkles },
                  { step: '05', title: 'Delivery', desc: 'Direct doorstep dispatch by dedicated South Delhi route drivers', icon: Truck },
                ].map((stage, idx) => (
                  <motion.div
                    key={stage.step}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.12, duration: 0.6 }}
                    className="bg-[#03211F]/90 rounded-3xl p-6 border border-[#00A99D]/30 backdrop-blur-md text-center hover:border-[#36D399] transition-colors group"
                  >
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-[#052E2B] to-[#00A99D] border border-[#36D399]/40 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-lg shadow-[#00A99D]/20">
                      <stage.icon className="w-7 h-7 text-[#36D399]" />
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-black bg-[#00A99D]/20 text-[#36D399] mb-3">
                      STAGE {stage.step}
                    </span>
                    <h3 className="text-lg font-black text-white mb-2">{stage.title}</h3>
                    <p className="text-xs text-[#E8FFFA]/70 leading-relaxed">{stage.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════
            SECTION 12: INTERACTIVE WATER BOTTLE ANIMATION
        ═══════════════════════════════════════════════════════ */}
        <section className="relative bg-[#F4FCFA] py-20 lg:py-28 overflow-hidden border-b border-[#00A99D]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Interactive Bottle Controls & Info */}
              <motion.div {...fadeInUp} className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A99D]">
                  Purity Visualization
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-[#052E2B] tracking-tight">
                  100% Pure Minerals in <span className="gradient-text">Every Drop</span>
                </h2>
                <p className="text-sm sm:text-base text-[#4B6E6A] leading-relaxed">
                  Adjust the volume capacity below to observe our balanced mineral enrichment — balanced between 110–140 PPM TDS with optimal Magnesium, Calcium, and Copper electrolytes.
                </p>

                {/* Interactive Slider */}
                <div className="bg-white p-6 rounded-3xl border border-[#00A99D]/20 shadow-md space-y-4">
                  <div className="flex justify-between items-center text-sm font-bold text-[#052E2B]">
                    <span>Hydration Fill Level:</span>
                    <span className="text-[#00A99D] text-lg font-black">{bottleFillPercent}% Filled</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="5"
                    value={bottleFillPercent}
                    onChange={(e) => setBottleFillPercent(Number(e.target.value))}
                    className="w-full h-2.5 bg-[#E8FFFA] rounded-lg appearance-none cursor-pointer accent-[#00A99D]"
                  />
                  <div className="flex justify-between text-[11px] text-[#4B6E6A] font-semibold">
                    <span>25% Light</span>
                    <span>50% Balanced</span>
                    <span>75% Optimal</span>
                    <span>100% Full 20L Can</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-[#00A99D]/20">
                    <span className="text-xs text-[#4B6E6A] block">Tested TDS Level:</span>
                    <span className="text-xl font-black text-[#00A99D]">125 PPM</span>
                    <span className="text-[10px] text-[#052E2B] block font-semibold">Compliant with BIS IS:14543</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-[#00A99D]/20">
                    <span className="text-xs text-[#4B6E6A] block">Alkaline pH Balance:</span>
                    <span className="text-xl font-black text-[#36D399]">7.4 pH</span>
                    <span className="text-[10px] text-[#052E2B] block font-semibold">Mildly sweet taste</span>
                  </div>
                </div>
              </motion.div>

              {/* Water Bottle Graphic filling up dynamically */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-6 flex justify-center"
              >
                <div className="relative w-64 h-96 rounded-[3rem] bg-white border-4 border-[#00A99D]/30 shadow-2xl p-4 flex flex-col justify-end overflow-hidden">
                  {/* Bottle Neck Cap */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#00A99D] rounded-t-xl shadow-md flex items-center justify-center">
                    <span className="text-[9px] font-bold text-white uppercase tracking-wider">Sealed Cap</span>
                  </div>

                  {/* Water Liquid Filling dynamically based on state */}
                  <motion.div
                    className="w-full rounded-b-[2.5rem] bg-gradient-to-t from-[#052E2B] via-[#00A99D] to-[#36D399] relative overflow-hidden transition-all duration-500 shadow-inner"
                    style={{ height: `${bottleFillPercent}%` }}
                  >
                    {/* Animated bubbles inside water */}
                    <motion.div
                      animate={{ y: [40, -40], opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                      className="absolute bottom-4 left-6 w-3 h-3 rounded-full bg-white/40"
                    />
                    <motion.div
                      animate={{ y: [60, -60], opacity: [0, 1, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
                      className="absolute bottom-8 right-8 w-4 h-4 rounded-full bg-white/50"
                    />
                    <motion.div
                      animate={{ y: [30, -50], opacity: [0, 1, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut', delay: 1 }}
                      className="absolute bottom-2 left-1/2 w-2 h-2 rounded-full bg-white/60"
                    />

                    {/* Water top wave surface */}
                    <div className="absolute top-0 left-0 right-0 h-3 bg-white/40 blur-xs" />
                  </motion.div>

                  {/* Badge over bottle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#00A99D]/30 shadow-xl text-center">
                    <span className="text-xs font-black text-[#052E2B] block">
                      {bottleFillPercent}% Purified
                    </span>
                    <span className="text-[9px] font-bold text-[#00A99D]">
                      20L Can Capacity
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════
            SECTION 13: PLANT VIDEO SECTION
        ═══════════════════════════════════════════════════════ */}
        <section className="relative bg-[#052E2B] py-24 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div {...fadeInUp} className="max-w-3xl mx-auto space-y-4 mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#36D399]">
                Cinematic Plant Tour
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                SEE WHERE YOUR <span className="text-[#36D399]">WATER COMES FROM</span>
              </h2>
              <p className="text-sm sm:text-base text-[#E8FFFA]/70">
                Take a 90-second virtual walk-through of our South Delhi purification facility, automated washing line, and quality laboratory.
              </p>
            </motion.div>

            {/* Video Preview Card with Pulsating Play Button */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative max-w-4xl mx-auto rounded-[2.5rem] bg-gradient-to-tr from-[#03211F] to-[#00A99D]/20 border border-[#00A99D]/40 p-8 sm:p-16 shadow-2xl overflow-hidden cursor-pointer group"
              onClick={() => setVideoModalOpen(true)}
            >
              {/* Ambient backdrop */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00A99D]/20 via-[#052E2B]/80 to-[#03211F] opacity-90" />

              <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
                {/* Play Button */}
                <motion.div
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#00A99D] hover:bg-[#36D399] text-white hover:text-[#052E2B] flex items-center justify-center shadow-2xl shadow-[#00A99D]/50 transition-all duration-300"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 fill-current" />
                </motion.div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Watch Plant Purification Process
                  </h3>
                  <span className="text-xs text-[#36D399] font-semibold mt-1 block">
                    Click to view video preview (1:30 min)
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Video Modal */}
        <AnimatePresence>
          {videoModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setVideoModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#052E2B] border border-[#00A99D] rounded-3xl p-6 max-w-2xl w-full text-white relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setVideoModalOpen(false)}
                  className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#36D399]">
                    <Sparkles className="w-4 h-4" /> Kent Plus Plant Production Line
                  </div>
                  <h3 className="text-2xl font-bold">Facility Purification &amp; Hygiene Standards</h3>
                  <div className="aspect-video rounded-2xl bg-black/60 border border-white/10 flex flex-col items-center justify-center p-6 text-center">
                    <Droplets className="w-12 h-12 text-[#36D399] mb-3 animate-bounce" />
                    <p className="text-sm text-[#E8FFFA]/80 font-medium">
                      Live Stream / Plant Demo Feed Available
                    </p>
                    <p className="text-xs text-white/50 mt-1 max-w-sm">
                      Our facility operates under BIS IS:14543 certification with automated steam sterilization.
                    </p>
                  </div>
                  <div className="flex justify-between items-center text-xs text-[#E8FFFA]/60 pt-2">
                    <span>Facility Location: South Delhi Hub</span>
                    <button
                      onClick={() => setVideoModalOpen(false)}
                      className="text-[#36D399] font-bold hover:underline"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>


        {/* ═══════════════════════════════════════════════════════
            SECTION 14: EVENT & MARRIAGE SECTION ("YOUR EVENT. OUR WATER.")
        ═══════════════════════════════════════════════════════ */}
        <section className="relative bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A99D] bg-[#E8FFFA] px-4 py-1.5 rounded-full border border-[#00A99D]/20">
                Bulk Function Logistics
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#052E2B] mt-4 tracking-tight">
                YOUR EVENT. <span className="gradient-text">OUR WATER.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#4B6E6A] mt-3">
                Planning a marriage, reception, party, or corporate summit? We deliver bulk quantities on your exact venue schedule with free unopened return refund.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6">
              {[
                { name: 'Marriage', icon: Heart, desc: 'Weddings & Sangeet', count: '100–300 Cans' },
                { name: 'Reception', icon: Sparkles, desc: 'Evening Banquets', count: '50–200 Cans' },
                { name: 'Engagement', icon: PartyPopper, desc: 'Intimate Ceremonies', count: '20–60 Cans' },
                { name: 'Birthday', icon: Cake, desc: 'Parties & Gatherings', count: '10–30 Cans' },
                { name: 'Corporate Event', icon: Briefcase, desc: 'Conferences & Summits', count: '40–150 Cans' },
                { name: 'Religious Function', icon: Flame, desc: 'Bhandaras & Poojas', count: '50–250 Cans' },
              ].map((evt, i) => (
                <motion.div
                  key={evt.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="bg-[#F4FCFA] rounded-3xl p-5 text-center border border-[#00A99D]/20 card-hover group"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-[#E8FFFA] text-[#00A99D] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00A99D] group-hover:text-white transition-all duration-300">
                    <evt.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#052E2B] mb-1">
                    {evt.name}
                  </h3>
                  <span className="text-[11px] text-[#4B6E6A] block leading-tight">{evt.desc}</span>
                  <span className="mt-3 inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white text-[#00A99D] border border-[#00A99D]/20">
                    {evt.count}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════
            SECTION 15: INTERACTIVE EVENT WATER CALCULATOR
        ═══════════════════════════════════════════════════════ */}
        <section className="relative bg-[#E8FFFA] py-20 lg:py-24 border-y border-[#00A99D]/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A99D]">
                Interactive Requirement Planner
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#052E2B] mt-2">
                Calculate Water for Your Gathering
              </h2>
              <p className="text-xs sm:text-sm text-[#4B6E6A] mt-2">
                Instant algorithm calculation for buffet hydration, guest bottles, and buffer safety.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-[#00A99D]/25 shadow-xl grid md:grid-cols-12 gap-8 items-center"
            >
              {/* Form Inputs */}
              <div className="md:col-span-7 space-y-5">
                <div>
                  <div className="flex justify-between items-center text-xs font-bold text-[#052E2B] mb-2">
                    <span>Number of Guests:</span>
                    <span className="text-base text-[#00A99D] font-extrabold">{calcGuests} Attendees</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="1500"
                    step="20"
                    value={calcGuests}
                    onChange={(e) => setCalcGuests(Number(e.target.value))}
                    className="w-full h-2.5 bg-[#E8FFFA] rounded-lg appearance-none cursor-pointer accent-[#00A99D]"
                  />
                  <div className="flex justify-between text-[10px] text-[#4B6E6A] mt-1 font-semibold">
                    <span>30 Guests</span>
                    <span>500 Guests</span>
                    <span>1,500 Guests</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#052E2B] mb-1.5">Occasion Type</label>
                    <select
                      value={calcEventType}
                      onChange={(e) => setCalcEventType(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#00A99D]/30 bg-[#F4FCFA] text-xs font-semibold text-[#052E2B] outline-none"
                    >
                      <option value="Wedding">Wedding / Reception</option>
                      <option value="Corporate">Corporate Conference</option>
                      <option value="Birthday">Birthday / Anniversary</option>
                      <option value="Religious">Pooja / Bhandara</option>
                      <option value="Party">Private Gathering</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#052E2B] mb-1.5">Event Duration</label>
                    <select
                      value={calcHours}
                      onChange={(e) => setCalcHours(Number(e.target.value))}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#00A99D]/30 bg-[#F4FCFA] text-xs font-semibold text-[#052E2B] outline-none"
                    >
                      <option value={4}>4 Hours (Half Day)</option>
                      <option value={6}>6 Hours (Evening Function)</option>
                      <option value={10}>10 Hours (Full Day)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#052E2B] mb-1.5">Delivery Area in Delhi</label>
                  <select
                    value={calcArea}
                    onChange={(e) => setCalcArea(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#00A99D]/30 bg-[#F4FCFA] text-xs font-semibold text-[#052E2B] outline-none"
                  >
                    <option value="Saket">Saket & Mehrauli</option>
                    <option value="Chattarpur">Chattarpur Farm Houses</option>
                    <option value="GK">Greater Kailash</option>
                    <option value="Vasant Kunj">Vasant Kunj Banquets</option>
                    <option value="Other">Other South Delhi Locality</option>
                  </select>
                </div>
              </div>

              {/* Real-time Calculation Result Card */}
              <div className="md:col-span-5 bg-gradient-to-br from-[#052E2B] to-[#00A99D] rounded-2xl p-6 sm:p-7 text-white text-center space-y-4 shadow-lg">
                <span className="text-[11px] uppercase tracking-widest font-bold text-[#36D399]">
                  Estimated Requirement
                </span>
                <div className="py-2 border-y border-white/10">
                  <span className="text-4xl sm:text-5xl font-black text-white block">
                    {calculatedCans} Cans
                  </span>
                  <span className="text-xs text-[#E8FFFA]/70 font-medium">
                    20-Litre Purified Jars ({calculatedCans * 20} Litres)
                  </span>
                </div>
                <div className="text-xs text-[#E8FFFA]/80 space-y-1">
                  <p>+ {calculatedBottles} Sealed 250ml Guest Bottles</p>
                  <p className="text-[11px] text-[#36D399] font-semibold">100% credit on unopened returned cans</p>
                </div>
                <Link
                  href={`/book-event?guests=${calcGuests}&cans=${calculatedCans}`}
                  className="block w-full py-3 rounded-full text-xs font-bold bg-[#36D399] text-[#052E2B] hover:bg-white transition-all shadow-md"
                >
                  Request Bulk Event Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════
            SECTION 16: PLANT GALLERY
        ═══════════════════════════════════════════════════════ */}
        <section className="relative bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A99D]">
                Transparency &amp; Hygiene
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#052E2B] mt-2 tracking-tight">
                OUR PLANT &amp; <span className="gradient-text">OPERATIONS</span>
              </h2>
              <p className="text-sm text-[#4B6E6A] mt-2">
                Explore our real filtration systems, automatic sterilization bays, and delivery dispatch.
              </p>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
                {(['all', 'plant', 'purification', 'bottling', 'delivery'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setGalleryCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold capitalize transition-all ${
                      galleryCategory === cat
                        ? 'bg-[#00A99D] text-white shadow-md'
                        : 'bg-[#E8FFFA] text-[#052E2B] hover:bg-[#00A99D]/20'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Gallery Grid with Hover Mask Reveals */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredGallery.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl bg-[#052E2B] text-white p-6 relative overflow-hidden h-72 flex flex-col justify-between group shadow-lg cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-tr ${item.color} opacity-40 group-hover:opacity-75 transition-opacity duration-500`} />
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/20 text-[#E8FFFA] backdrop-blur-md">
                      {item.tag}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#36D399] group-hover:text-[#052E2B] transition-colors">
                      <Droplets className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="relative z-10 space-y-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#36D399] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#E8FFFA]/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════
            SECTION 17: CUSTOMER TESTIMONIALS
        ═══════════════════════════════════════════════════════ */}
        <section className="relative bg-[#F4FCFA] py-20 lg:py-28 border-y border-[#00A99D]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A99D]">
                Customer Reviews
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#052E2B] mt-2 tracking-tight">
                TRUSTED BY <span className="gradient-text">542+ RESIDENTS</span>
              </h2>
              <p className="text-sm text-[#4B6E6A] mt-2">
                Real feedback from South Delhi homeowners, event planners, and corporate offices.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="bg-white rounded-3xl p-7 border border-[#00A99D]/20 shadow-md card-hover flex flex-col justify-between"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-[#052E2B]/85 leading-relaxed mb-6 italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-[#E8FFFA]">
                    <div className="w-10 h-10 rounded-full bg-[#00A99D] text-white font-bold flex items-center justify-center text-sm shadow-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#052E2B]">{t.name}</p>
                      <p className="text-xs text-[#00A99D] font-semibold">{t.area}, South Delhi</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════
            SECTION 18: SERVICE AREA NETWORK (CENTRAL HUB VISUAL)
        ═══════════════════════════════════════════════════════ */}
        <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A99D] bg-[#E8FFFA] px-4 py-1.5 rounded-full border border-[#00A99D]/20">
                Delivery Coverage
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#052E2B] mt-4 tracking-tight">
                OUR SOUTH DELHI <span className="gradient-text">DELIVERY NETWORK</span>
              </h2>
              <p className="text-sm text-[#4B6E6A] mt-2">
                Our central plant in South Delhi powers rapid morning delivery routes across all key neighborhoods.
              </p>
            </motion.div>

            {/* Network representation */}
            <div className="bg-[#052E2B] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#36D399]/20 border border-[#36D399]/40 text-[#36D399] font-bold text-xs uppercase tracking-wider">
                  <Factory className="w-4 h-4 text-[#36D399]" />
                  <span>Central Plant Hub (South Delhi)</span>
                </div>
              </div>

              {/* Branching sectors */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 relative z-10">
                {[
                  { name: 'Saket', pincode: '110017', time: '< 60 mins' },
                  { name: 'Malviya Nagar', pincode: '110017', time: '< 60 mins' },
                  { name: 'Greater Kailash', pincode: '110048', time: '< 90 mins' },
                  { name: 'Hauz Khas', pincode: '110016', time: '< 60 mins' },
                  { name: 'Vasant Kunj', pincode: '110070', time: '< 90 mins' },
                  { name: 'Lajpat Nagar', pincode: '110024', time: '< 90 mins' },
                  { name: 'South Extension', pincode: '110049', time: '< 90 mins' },
                  { name: 'Chirag Delhi', pincode: '110017', time: '< 60 mins' },
                ].map((sec, i) => (
                  <motion.div
                    key={sec.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-center hover:border-[#36D399] transition-colors"
                  >
                    <div className="w-8 h-8 mx-auto rounded-full bg-[#00A99D]/40 text-[#36D399] flex items-center justify-center mb-2">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <p className="text-sm font-bold text-white">{sec.name}</p>
                    <p className="text-[10px] text-[#E8FFFA]/60">{sec.pincode} • {sec.time}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center pt-6 border-t border-white/10">
                <Link
                  href="/service-areas"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#36D399] hover:underline"
                >
                  <span>Check specific society coverage details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════
            SECTION: FAQ ACCORDION (PRESERVED & RESTYLED)
        ═══════════════════════════════════════════════════════ */}
        <section className="bg-[#F4FCFA] py-20 border-t border-[#00A99D]/20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A99D]">
                Got Questions?
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#052E2B] mt-2">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </motion.div>

            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-[#00A99D]/20 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left font-bold text-sm text-[#052E2B]"
                  >
                    <span>{item.question}</span>
                    <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }}>
                      <ChevronDown className="w-4 h-4 text-[#00A99D]" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 pt-1 text-xs text-[#4B6E6A] leading-relaxed border-t border-[#E8FFFA]">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════
            SECTION 19: FINAL CTA ("PURE + NATURAL")
        ═══════════════════════════════════════════════════════ */}
        <section className="relative bg-[#052E2B] py-20 lg:py-28 text-white overflow-hidden">
          <div className="absolute inset-0 bg-radial-at-c from-[#00A99D]/20 to-transparent pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-6">
            <motion.div {...fadeInUp}>
              <div className="w-16 h-16 mx-auto rounded-3xl bg-[#00A99D] text-white flex items-center justify-center mb-6 shadow-xl shadow-[#00A99D]/30">
                <Droplets className="w-8 h-8 fill-current" />
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                NEED WATER? <span className="text-[#36D399]">WE&apos;VE GOT YOU COVERED.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#E8FFFA]/80 max-w-xl mx-auto mt-3">
                Daily household supply, corporate office contracts, and event bulk deliveries starting tomorrow.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                  <Link
                    href="/book-water"
                    className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-sm font-bold bg-[#36D399] text-[#052E2B] hover:bg-white transition-all shadow-xl shadow-[#36D399]/30"
                  >
                    <span>Order Water</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-sm font-bold bg-white/10 hover:bg-white/20 text-[#E8FFFA] border border-[#E8FFFA]/30 backdrop-blur-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-[#36D399]" />
                    <span>WhatsApp Us</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
