'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Search, Truck, Clock, Phone, CheckCircle2, ArrowRight, Waves, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AREAS = [
  { name: 'Saket', pincode: '110017', leadTime: 'Same Day (under 90 min)', deliverySlot: '6:30 AM – 9:30 AM & 4:30 PM – 8:30 PM', activeCustomers: '250+', featuredSocieties: ['Saket Block J & M', 'Parijat Apartments', 'Anupam Complex', 'Press Enclave'], status: 'High Availability' },
  { name: 'Malviya Nagar', pincode: '110017', leadTime: 'Same Day (under 60 min)', deliverySlot: '6:30 AM – 9:30 AM & 4:30 PM – 8:30 PM', activeCustomers: '380+', featuredSocieties: ['Corner Market Road', 'Khirki Extension', 'Geetanjali Enclave', 'Shivalik Colony'], status: 'High Availability' },
  { name: 'Lajpat Nagar', pincode: '110024', leadTime: 'Same Day (under 90 min)', deliverySlot: '6:30 AM – 9:30 AM & 4:30 PM – 8:30 PM', activeCustomers: '310+', featuredSocieties: ['Lajpat Nagar I, II, III, IV', 'Vikram Vihar', 'Dayanand Colony', 'National Park'], status: 'High Availability' },
  { name: 'Greater Kailash (GK 1 & 2)', pincode: '110048', leadTime: 'Same Day (under 60 min)', deliverySlot: '6:30 AM – 9:30 AM & 4:30 PM – 8:30 PM', activeCustomers: '420+', featuredSocieties: ['GK 1 M Block', 'GK 2 Masjid Moth', 'Pamposh Enclave', 'Alaknanda'], status: 'High Availability' },
  { name: 'Vasant Kunj', pincode: '110070', leadTime: 'Scheduled Morning & Evening', deliverySlot: '6:30 AM – 9:30 AM & 5:00 PM – 9:00 PM', activeCustomers: '290+', featuredSocieties: ['Sector A, B, C & D Pockets', 'Saraswati Narmada DDA', 'Ganga Apartments'], status: 'Active Route' },
  { name: 'Hauz Khas', pincode: '110016', leadTime: 'Same Day (under 60 min)', deliverySlot: '6:30 AM – 9:30 AM & 4:30 PM – 8:30 PM', activeCustomers: '210+', featuredSocieties: ['Hauz Khas Enclave', 'Kaushalya Park', 'Padmini Enclave', 'SDA Market Area'], status: 'High Availability' },
  { name: 'South Extension (Part 1 & 2)', pincode: '110049', leadTime: 'Same Day (under 90 min)', deliverySlot: '6:30 AM – 9:30 AM & 4:30 PM – 8:30 PM', activeCustomers: '190+', featuredSocieties: ['South Ext Part 1 Block A-H', 'South Ext Part 2 Ring Road', 'Uday Park', 'Neeti Bagh'], status: 'Active Route' },
  { name: 'Chirag Delhi & Panchsheel', pincode: '110017', leadTime: 'Same Day (under 60 min)', deliverySlot: '6:30 AM – 9:30 AM & 4:30 PM – 8:30 PM', activeCustomers: '240+', featuredSocieties: ['Panchsheel Park', 'Panchsheel Enclave', 'Chirag Enclave', 'Soami Nagar'], status: 'High Availability' },
];

export default function ServiceAreasPage() {
  const [search, setSearch] = useState('');

  const filtered = AREAS.filter(
    (a) =>
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.pincode.includes(search) ||
      a.featuredSocieties.some((s) => s.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#E8FFFA] selection:text-[#00A99D]">
      <Header />

      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative bg-[#052E2B] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-radial-at-t from-[#00A99D]/20 via-[#052E2B] to-[#03211F] pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative max-w-4xl mx-auto px-4 text-center z-10 space-y-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#36D399] border border-[#36D399]/30">
              <Truck className="w-3.5 h-3.5" /> South Delhi Rapid Network
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              Kent Plus Service <span className="text-[#36D399]">Areas</span>
            </h1>
            <p className="text-base sm:text-lg text-[#E8FFFA]/80 max-w-2xl mx-auto leading-relaxed">
              We operate dedicated delivery vans and electric three-wheelers across key South Delhi neighborhoods, ensuring pure drinking water reaches your doorstep without delay.
            </p>

            {/* Search Box */}
            <div className="max-w-md mx-auto relative pt-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 mt-2 w-5 h-5 text-[#4B6E6A]" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search locality or pincode (e.g. Saket, 110017)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-full border border-[#00A99D]/30 bg-white text-[#052E2B] shadow-xl text-sm outline-none placeholder:text-[#4B6E6A]/50 focus:ring-2 focus:ring-[#00A99D]"
              />
            </div>
          </motion.div>
        </section>

        {/* Areas Grid */}
        <section className="py-20 bg-[#F4FCFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-10">
              <h2 className="text-2xl font-black text-[#052E2B]">
                Active Delivery Sectors ({filtered.length})
              </h2>
              <span className="text-xs text-[#00A99D] font-bold uppercase tracking-wider bg-[#E8FFFA] px-3.5 py-1 rounded-full border border-[#00A99D]/20">
                Morning &amp; Evening Slots Available
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((area, i) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="bg-white rounded-3xl p-7 border border-[#00A99D]/20 shadow-md card-hover flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-[#E8FFFA] text-[#00A99D] flex items-center justify-center">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#052E2B] text-base leading-tight">{area.name}</h3>
                          <span className="text-xs text-[#4B6E6A] font-semibold">Pin: {area.pincode}</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-[#E8FFFA] text-[#00A99D] border border-[#00A99D]/20">
                        Active
                      </span>
                    </div>

                    <div className="space-y-2 text-xs text-[#4B6E6A] mt-4 border-t border-[#E8FFFA] pt-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#00A99D]" />
                        <span>{area.deliverySlot}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Truck className="w-3.5 h-3.5 text-[#00A99D]" />
                        <span>{area.leadTime}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#E8FFFA]">
                      <span className="text-[11px] font-bold text-[#052E2B] block mb-2">Covered Pockets:</span>
                      <ul className="text-xs text-[#4B6E6A] space-y-1.5">
                        {area.featuredSocieties.map((soc, si) => (
                          <li key={si} className="flex items-center gap-1.5">
                            <Check className="w-3 h-3 text-[#36D399] shrink-0 stroke-[3]" />
                            <span className="truncate">{soc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E8FFFA]">
                    <Link
                      href={`/book-water?area=${encodeURIComponent(area.name)}`}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-[#E8FFFA] hover:bg-[#00A99D] hover:text-white text-[#00A99D] text-xs font-bold transition-all"
                    >
                      <span>Order in {area.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Society callout */}
        <section className="py-20 bg-white border-t border-[#00A99D]/20">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
            <h2 className="text-3xl sm:text-4xl font-black text-[#052E2B]">
              Are you an RWA, Society Manager, or Gym Owner?
            </h2>
            <p className="text-sm text-[#4B6E6A] max-w-xl mx-auto">
              We offer dedicated society distributor agreements with subsidized per-can rates, dedicated lift-delivery boys, and unified monthly invoicing.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#00A99D] hover:bg-[#36D399] hover:text-[#052E2B] text-white font-bold text-xs sm:text-sm shadow-md transition-all"
              >
                <span>Contact RWA Partnership Desk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#00A99D]/30 bg-white text-[#052E2B] hover:bg-[#E8FFFA] font-bold text-xs sm:text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-[#00A99D]" /> Call (+91 98765 43210)
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
