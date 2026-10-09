'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CalendarHeart, PartyPopper, Building2, Church, Cake, Star, CheckCircle2, ArrowRight, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fadeInUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const eventTypes = [
  { icon: CalendarHeart, title: 'Wedding & Reception', desc: 'Bulk water supply for wedding ceremonies, catering counters, and guest banquets.', color: 'from-[#052E2B] to-[#00A99D]' },
  { icon: Cake, title: 'Birthday & Anniversary', desc: 'Water cans and customized 250ml bottles for birthday parties of any size.', color: 'from-[#00A99D] to-[#36D399]' },
  { icon: PartyPopper, title: 'Party & Social Gathering', desc: 'House parties, kitty parties, and club get-togethers with chilled dispenser boxes.', color: 'from-[#36D399] to-[#00A99D]' },
  { icon: Building2, title: 'Corporate Conference', desc: 'Formal business conferences, annual meetings, and team offsites.', color: 'from-[#052E2B] to-[#00A99D]' },
  { icon: Church, title: 'Religious Function & Pooja', desc: 'Bhandaras, temple events, prayer meets, and community langars.', color: 'from-[#00A99D] to-[#36D399]' },
  { icon: Star, title: 'Sports & Cultural Events', desc: 'Marathons, tournaments, exhibitions, and charity celebrations.', color: 'from-[#36D399] to-[#052E2B]' },
];

export default function EventWaterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#E8FFFA] selection:text-[#00A99D]">
      <Header />

      <main className="overflow-hidden">
        <section className="relative bg-[#052E2B] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-radial-at-t from-[#00A99D]/20 via-[#052E2B] to-[#03211F] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div {...fadeInUp} className="max-w-3xl mx-auto space-y-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#36D399] border border-[#36D399]/30">
                <PartyPopper className="w-3.5 h-3.5" /> Event Water Supply
              </span>
              <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight">
                Water for Every <span className="text-[#36D399]">Occasion</span>
              </h1>
              <p className="text-base sm:text-lg text-[#E8FFFA]/80 max-w-xl mx-auto leading-relaxed">
                Weddings, banquets, corporate summits, and religious feasts — we deliver bulk water directly to your South Delhi venue on exact schedule.
              </p>
              <div className="pt-2">
                <Link
                  href="/book-event"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold bg-[#36D399] text-[#052E2B] hover:bg-white transition-all shadow-xl shadow-[#36D399]/20"
                >
                  <span>Book Event Water</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A99D]">
                Specialized Solutions
              </span>
              <h2 className="text-3xl font-black text-[#052E2B] mt-2">Events We Serve</h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventTypes.map((event, i) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-[#F4FCFA] rounded-3xl p-7 border border-[#00A99D]/20 card-hover group"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${event.color} text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                    <event.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#052E2B] mb-2">{event.title}</h3>
                  <p className="text-xs sm:text-sm text-[#4B6E6A] leading-relaxed">{event.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#E8FFFA] py-20 border-y border-[#00A99D]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A99D]">
                Event Package Amenities
              </span>
              <h2 className="text-3xl font-black text-[#052E2B] mt-2">What We Provide</h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                'Bulk quantity up to 300+ cans',
                'Venue scheduled morning delivery',
                'Multiple staggered delivery batches',
                '250ml sealed guest bottles',
                'Dedicated venue setup support',
                'Insulated chilled ice boxes',
                '100% refund on unopened cans',
                'Instant quote within 1 hour'
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-[#00A99D]/20 shadow-xs">
                  <Check className="w-4 h-4 text-[#36D399] shrink-0 stroke-[3]" />
                  <span className="text-xs font-bold text-[#052E2B]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#052E2B] py-16 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white">Plan Your Event Water Requirement</h2>
            <p className="text-[#E8FFFA]/70 text-sm max-w-md mx-auto">Fill out our event planner form and receive a customized quote with free venue delivery.</p>
            <div className="pt-2">
              <Link
                href="/book-event"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#36D399] text-[#052E2B] font-bold text-xs sm:text-sm hover:bg-white transition-all shadow-lg"
              >
                <span>Book Event Water Online</span>
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
