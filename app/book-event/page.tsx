'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PartyPopper, Check, ArrowRight, ArrowLeft, MapPin, Calendar,
  Users, GlassWater, ShieldCheck, CheckCircle2, Sparkles, Phone, Package,
  Clock, Waves, Building, Wine, Music, Award, Heart, Briefcase, Flame, Trophy
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EVENT_TYPES = [
  { id: 'Wedding', title: 'Wedding & Reception', icon: Heart, defaultGuests: 350, desc: 'Large guest gatherings & catering' },
  { id: 'Corporate', title: 'Corporate Conference', icon: Briefcase, defaultGuests: 150, desc: 'Summits, seminars & meetings' },
  { id: 'Party', title: 'Private Party / Birthday', icon: PartyPopper, defaultGuests: 80, desc: 'Home and club celebrations' },
  { id: 'Religious', title: 'Pooja / Bhandara', icon: Flame, defaultGuests: 250, desc: 'Devotional feasts & community meals' },
  { id: 'Sports', title: 'Sports Meet / Marathon', icon: Trophy, defaultGuests: 200, desc: 'High-hydration sports stations' }
];

export default function BookEventPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  // Form state (using static default date to prevent Next.js 16 prerender error)
  const [formData, setFormData] = useState({
    organizerName: '',
    phone: '',
    email: '',
    eventType: 'Wedding',
    guestCount: 250,
    eventDate: '2026-10-15',
    eventDurationHours: 6,
    venueName: '',
    venueArea: 'Saket',
    venueAddress: '',
    venueGate: 'Main Gate 1',
    cansQuantity: 25,
    bottles250ml: 300,
    needDispensers: 4,
    needPaperCups: true,
    needChilledIceBoxes: true,
    specialRequests: ''
  });

  // Client-side date initialization
  useEffect(() => {
    try {
      const eventDateCalc = new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0];
      setFormData(prev => ({ ...prev, eventDate: eventDateCalc }));
    } catch {
      // fallback
    }
  }, []);

  // Calculate estimated cans based on guests
  const estimatedCans = Math.max(10, Math.ceil((formData.guestCount * 1.5) / 20));

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    const genId = `EVT-${Math.floor(10000 + Math.random() * 90000)}`;
    setBookingId(genId);

    try {
      const existing = JSON.parse(localStorage.getItem('kentplus_event_bookings') || '[]');
      existing.push({
        id: genId,
        organizer: formData.organizerName,
        phone: formData.phone,
        type: formData.eventType,
        guests: formData.guestCount,
        date: formData.eventDate,
        venue: `${formData.venueName}, ${formData.venueArea}`,
        cans: formData.cansQuantity || estimatedCans,
        status: 'Confirmed - Pending Dispatch',
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('kentplus_event_bookings', JSON.stringify(existing));
    } catch {
      // safe fallback
    }

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#E8FFFA] selection:text-[#00A99D]">
      <Header />

      <main className="flex-1 pt-28 pb-20 relative overflow-hidden bg-gradient-to-b from-[#E8FFFA]/40 via-white to-[#F4FCFA]">
        {/* Ambient background glows */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-r from-[#00A99D]/10 via-[#36D399]/10 to-[#E8FFFA] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#E8FFFA] border border-[#00A99D]/30 text-[#00A99D] mb-3">
              <PartyPopper className="w-3.5 h-3.5" /> Event & Function Logistics
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-[#052E2B] tracking-tight">
              Book Bulk Water for <span className="gradient-text">Your Event</span>
            </h1>
            <p className="text-sm sm:text-base text-[#4B6E6A] mt-2 max-w-xl mx-auto">
              Guaranteed delivery on venue schedule. 20L sanitized jars, 250ml bottled water, and high-flow event dispensers across South Delhi.
            </p>
          </motion.div>

          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl border border-[#00A99D]/20 shadow-2xl shadow-[#00A99D]/10 overflow-hidden"
            >
              {/* Stepper Progress Bar */}
              <div className="bg-[#052E2B] text-white px-6 py-6 border-b border-[#00A99D]/20">
                <div className="flex items-center justify-between max-w-2xl mx-auto text-xs">
                  {['Contact', 'Event Info', 'Venue Location', 'Water Quantity', 'Review & Book'].map((name, i) => {
                    const stepNum = i + 1;
                    const isPassed = step > stepNum;
                    const isCurrent = step === stepNum;
                    return (
                      <div key={name} className="flex items-center gap-2">
                        <div
                          className={`w-9 h-9 rounded-2xl flex items-center justify-center font-bold transition-all duration-300 shadow-sm ${
                            isPassed
                              ? 'bg-[#36D399] text-[#052E2B] font-black'
                              : isCurrent
                              ? 'bg-[#00A99D] text-white ring-4 ring-[#36D399]/30 shadow-lg scale-105'
                              : 'bg-white/10 text-white/50 border border-white/10'
                          }`}
                        >
                          {isPassed ? <Check className="w-4 h-4 stroke-[3]" /> : stepNum}
                        </div>
                        <span className={`hidden md:inline font-semibold tracking-wide transition-colors ${isCurrent ? 'text-white' : isPassed ? 'text-[#36D399]' : 'text-white/40'}`}>
                          {name}
                        </span>
                        {i < 4 && (
                          <div
                            className={`w-4 sm:w-10 lg:w-14 h-1 mx-1 rounded-full transition-all duration-500 hidden sm:block ${
                              step > stepNum ? 'bg-[#36D399]' : 'bg-white/15'
                            }`}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="p-6 sm:p-10">
                <AnimatePresence mode="wait">
                  {/* Step 1: Organizer details */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="border-b border-[#E8FFFA] pb-4">
                        <div className="flex items-center gap-2 text-[#00A99D] text-xs font-bold uppercase tracking-wider mb-1">
                          <Users className="w-3.5 h-3.5" /> Step 1 of 5
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#052E2B]">Organizer & Coordinator Information</h2>
                        <p className="text-xs sm:text-sm text-[#4B6E6A] mt-0.5">Contact details of the caterer, planner, or host coordinating on site.</p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">Organizer / Host Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.organizerName}
                            onChange={(e) => setFormData({ ...formData, organizerName: e.target.value })}
                            placeholder="e.g. Vikram Mehra (Catering Coordinator)"
                            className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] placeholder:text-[#4B6E6A]/50 focus:ring-2 focus:ring-[#00A99D] outline-none"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">Direct Mobile Phone *</label>
                            <input
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="e.g. +91 98222 33445"
                              className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] placeholder:text-[#4B6E6A]/50 focus:ring-2 focus:ring-[#00A99D] outline-none"
                            />
                            <span className="text-[11px] text-[#4B6E6A] mt-1 block">Our dispatch driver will call this number at venue arrival</span>
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">Email Address</label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="vikram@events.com"
                              className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] placeholder:text-[#4B6E6A]/50 focus:ring-2 focus:ring-[#00A99D] outline-none"
                            />
                            <span className="text-[11px] text-[#4B6E6A] mt-1 block">For invoice and dispatch manifest delivery</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Event details */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="border-b border-[#E8FFFA] pb-4">
                        <div className="flex items-center gap-2 text-[#00A99D] text-xs font-bold uppercase tracking-wider mb-1">
                          <Calendar className="w-3.5 h-3.5" /> Step 2 of 5
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#052E2B]">Occasion & Gathering Scale</h2>
                        <p className="text-xs sm:text-sm text-[#4B6E6A] mt-0.5">Select the type of gathering and expected attendance.</p>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#052E2B] mb-3">Event Occasion Type</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {EVENT_TYPES.map((t) => (
                            <button
                              key={t.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, eventType: t.id, guestCount: t.defaultGuests })}
                              className={`p-4 rounded-2xl border text-left text-xs font-semibold transition-all duration-200 ${
                                formData.eventType === t.id
                                  ? 'border-[#00A99D] bg-[#E8FFFA] text-[#052E2B] ring-2 ring-[#00A99D]/30 shadow-md'
                                  : 'border-[#00A99D]/20 bg-white text-[#4B6E6A] hover:bg-[#F4FCFA]'
                              }`}
                            >
                              <div className={`w-10 h-10 rounded-xl mb-2.5 flex items-center justify-center transition-colors ${
                                formData.eventType === t.id
                                  ? 'bg-[#00A99D] text-white shadow-sm'
                                  : 'bg-[#E8FFFA] text-[#00A99D]'
                              }`}>
                                <t.icon className="w-5 h-5" />
                              </div>
                              <span className="text-[#052E2B] font-bold text-sm block mb-1">{t.title}</span>
                              <span className="text-[11px] text-[#4B6E6A] block leading-tight">{t.desc}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">Date of Event *</label>
                          <input
                            type="date"
                            value={formData.eventDate}
                            onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">Expected Guests</label>
                          <input
                            type="number"
                            min="20"
                            max="5000"
                            value={formData.guestCount}
                            onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                            className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">Event Duration (Hours)</label>
                          <select
                            value={formData.eventDurationHours}
                            onChange={(e) => setFormData({ ...formData, eventDurationHours: Number(e.target.value) })}
                            className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none"
                          >
                            <option value={4}>4 Hours (Half Day)</option>
                            <option value={6}>6 Hours (Evening Function)</option>
                            <option value={10}>10 Hours (Full Day Event)</option>
                            <option value={24}>Full 24 Hours / 2-Day Setup</option>
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Venue details */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="border-b border-[#E8FFFA] pb-4">
                        <div className="flex items-center gap-2 text-[#00A99D] text-xs font-bold uppercase tracking-wider mb-1">
                          <MapPin className="w-3.5 h-3.5" /> Step 3 of 5
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#052E2B]">Venue Location & Access Points</h2>
                        <p className="text-xs sm:text-sm text-[#4B6E6A] mt-0.5">Venue directions for unloading trucks and dispenser placement.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">Venue / Banquet Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.venueName}
                            onChange={(e) => setFormData({ ...formData, venueName: e.target.value })}
                            placeholder="e.g. Tivoli Garden Resort / Grand Lawn"
                            className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] placeholder:text-[#4B6E6A]/50 focus:ring-2 focus:ring-[#00A99D] outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">Locality / Sector *</label>
                          <select
                            value={formData.venueArea}
                            onChange={(e) => setFormData({ ...formData, venueArea: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none"
                          >
                            <option value="Saket">Saket</option>
                            <option value="Chattarpur Farm Houses">Chattarpur Farm Houses</option>
                            <option value="Mehrauli / MG Road">Mehrauli / MG Road</option>
                            <option value="Malviya Nagar">Malviya Nagar</option>
                            <option value="Greater Kailash">Greater Kailash</option>
                            <option value="Vasant Kunj Farm / Banquets">Vasant Kunj Farm / Banquets</option>
                            <option value="Lajpat Nagar">Lajpat Nagar</option>
                            <option value="Other Delhi Venue">Other Delhi Location</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">Full Venue Address</label>
                          <input
                            type="text"
                            value={formData.venueAddress}
                            onChange={(e) => setFormData({ ...formData, venueAddress: e.target.value })}
                            placeholder="Gate No., Pillar No. or landmark"
                            className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] placeholder:text-[#4B6E6A]/50 focus:ring-2 focus:ring-[#00A99D] outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">Unloading Entry Gate / Contact</label>
                          <input
                            type="text"
                            value={formData.venueGate}
                            onChange={(e) => setFormData({ ...formData, venueGate: e.target.value })}
                            placeholder="e.g. Service Gate 3 (Kitchen Entry)"
                            className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] placeholder:text-[#4B6E6A]/50 focus:ring-2 focus:ring-[#00A99D] outline-none"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Water Packaging & Quantities */}
                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="border-b border-[#E8FFFA] pb-4">
                        <div className="flex items-center gap-2 text-[#00A99D] text-xs font-bold uppercase tracking-wider mb-1">
                          <Package className="w-3.5 h-3.5" /> Step 4 of 5
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#052E2B]">Water Quantity & Accessories</h2>
                        <p className="text-xs sm:text-sm text-[#4B6E6A] mt-0.5">Based on {formData.guestCount} guests, our algorithm calculates optimal buffer capacity.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-[#E8FFFA] p-5 rounded-2xl border border-[#00A99D]/30">
                          <label className="block text-xs font-bold text-[#052E2B] mb-1">
                            20-Litre Drinking Jars (Calculated: {estimatedCans} cans)
                          </label>
                          <input
                            type="number"
                            min="5"
                            value={formData.cansQuantity || estimatedCans}
                            onChange={(e) => setFormData({ ...formData, cansQuantity: Number(e.target.value) })}
                            className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none mt-2"
                          />
                          <span className="text-[11px] text-[#4B6E6A] mt-1.5 block">For buffet stations, kitchen cooking, and service counters</span>
                        </div>

                        <div className="bg-[#E8FFFA] p-5 rounded-2xl border border-[#00A99D]/30">
                          <label className="block text-xs font-bold text-[#052E2B] mb-1">
                            250ml Bottled Water (Guests tables)
                          </label>
                          <input
                            type="number"
                            min="0"
                            step="50"
                            value={formData.bottles250ml}
                            onChange={(e) => setFormData({ ...formData, bottles250ml: Number(e.target.value) })}
                            className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none mt-2"
                          />
                          <span className="text-[11px] text-[#4B6E6A] mt-1.5 block">Custom sealed packaged mineral water bottles in boxes</span>
                        </div>
                      </div>

                      <div className="space-y-3 pt-2">
                        <h3 className="text-xs font-bold text-[#052E2B] uppercase tracking-wider">Event Equipment Options:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <label className="flex items-center gap-3 p-4 rounded-xl border border-[#00A99D]/20 bg-white hover:bg-[#E8FFFA]/40 cursor-pointer transition-all">
                            <input
                              type="checkbox"
                              checked={formData.needPaperCups}
                              onChange={(e) => setFormData({ ...formData, needPaperCups: e.target.checked })}
                              className="w-4 h-4 text-[#00A99D] rounded focus:ring-[#00A99D]"
                            />
                            <span className="text-xs font-semibold text-[#052E2B]">Biodegradable Paper Cups (500 pcs)</span>
                          </label>
                          <label className="flex items-center gap-3 p-4 rounded-xl border border-[#00A99D]/20 bg-white hover:bg-[#E8FFFA]/40 cursor-pointer transition-all">
                            <input
                              type="checkbox"
                              checked={formData.needChilledIceBoxes}
                              onChange={(e) => setFormData({ ...formData, needChilledIceBoxes: e.target.checked })}
                              className="w-4 h-4 text-[#00A99D] rounded focus:ring-[#00A99D]"
                            />
                            <span className="text-xs font-semibold text-[#052E2B]">Insulated Chilled Storage Boxes</span>
                          </label>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 5: Review & Book */}
                  {step === 5 && (
                    <motion.div
                      key="step5"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="border-b border-[#E8FFFA] pb-4">
                        <div className="flex items-center gap-2 text-[#00A99D] text-xs font-bold uppercase tracking-wider mb-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Step 5 of 5
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#052E2B]">Review Booking Summary</h2>
                        <p className="text-xs sm:text-sm text-[#4B6E6A] mt-0.5">Our event fleet manager will confirm delivery logistics within 1 hour.</p>
                      </div>

                      <div className="bg-[#F4FCFA] p-6 rounded-2xl border border-[#00A99D]/20 space-y-4 text-xs shadow-sm">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-3 border-b border-[#00A99D]/20">
                          <div>
                            <span className="text-[#4B6E6A] block mb-1">Occasion:</span>
                            <span className="font-bold text-[#052E2B] text-sm block">{formData.eventType}</span>
                            <span className="text-[#4B6E6A] mt-0.5">{formData.guestCount} Estimated Attendees</span>
                          </div>
                          <div>
                            <span className="text-[#4B6E6A] block mb-1">Event Date:</span>
                            <span className="font-bold text-[#00A99D] text-base block">{formData.eventDate}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-3 border-b border-[#00A99D]/20">
                          <div>
                            <span className="text-[#4B6E6A] block mb-1">Venue:</span>
                            <span className="font-bold text-[#052E2B] block">{formData.venueName || 'Banquet Hall'}</span>
                            <span className="text-[#4B6E6A] mt-0.5">{formData.venueArea} ({formData.venueGate})</span>
                          </div>
                          <div>
                            <span className="text-[#4B6E6A] block mb-1">Water Order:</span>
                            <span className="font-bold text-[#052E2B] block">{formData.cansQuantity || estimatedCans} × 20L Jars</span>
                            <span className="text-[#4B6E6A] mt-0.5">{formData.bottles250ml} × 250ml Bottles</span>
                          </div>
                        </div>

                        <div>
                          <span className="text-[#4B6E6A] block mb-1">On-Site Coordinator:</span>
                          <span className="font-bold text-[#052E2B]">{formData.organizerName || 'Event Host'} • {formData.phone || '+91 98222 33445'}</span>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#E8FFFA] border border-[#00A99D]/30 text-xs text-[#052E2B] flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-[#00A99D] shrink-0 mt-0.5" />
                        <div>
                          <strong className="block font-semibold mb-0.5">Free Unused Can Return Policy:</strong>
                          Unopened sealed 20L cans exceeding actual consumption can be returned for 100% full credit on the final invoice.
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-8 pt-6 border-t border-[#00A99D]/20 flex items-center justify-between">
                  {step > 1 ? (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={handlePrev}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[#00A99D]/30 bg-white text-[#052E2B] hover:bg-[#E8FFFA] text-xs font-semibold transition-all"
                    >
                      <ArrowLeft className="w-4 h-4" /> Previous Step
                    </motion.button>
                  ) : (
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1.5 text-xs text-[#4B6E6A] hover:text-[#052E2B] font-semibold transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back to Services
                    </Link>
                  )}

                  {step < 5 ? (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#00A99D] hover:bg-[#36D399] hover:text-[#052E2B] text-white text-xs font-bold transition-all shadow-md shadow-[#00A99D]/20"
                    >
                      Continue <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      type="button"
                      onClick={handleSubmit}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#00A99D] hover:bg-[#36D399] hover:text-[#052E2B] text-white text-sm font-bold shadow-xl shadow-[#00A99D]/30 transition-all"
                    >
                      <PartyPopper className="w-4 h-4" /> Confirm Event Water Booking
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl border border-[#00A99D]/30 shadow-2xl p-8 sm:p-12 text-center max-w-2xl mx-auto"
            >
              <div className="w-20 h-20 rounded-3xl bg-[#E8FFFA] text-[#00A99D] flex items-center justify-center mx-auto mb-6 shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <span className="text-xs font-bold text-[#00A99D] bg-[#E8FFFA] px-3.5 py-1 rounded-full border border-[#00A99D]/30">
                Booking Logged
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#052E2B] mt-4 mb-2 tracking-tight">
                Event Water Order <span className="gradient-text">Confirmed!</span>
              </h2>
              <p className="text-sm sm:text-base text-[#4B6E6A] mb-8 max-w-md mx-auto">
                Thank you, {formData.organizerName || 'Host'}. Your booking for the {formData.eventType} on {formData.eventDate} has been dispatched to our South Delhi fleet manager.
              </p>

              <div className="bg-[#F4FCFA] p-6 rounded-2xl border border-[#00A99D]/20 text-left mb-8 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-[#00A99D]/20">
                  <span className="text-[#4B6E6A]">Booking Reference:</span>
                  <span className="font-bold text-[#00A99D] font-mono text-base">{bookingId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4B6E6A]">Venue Destination:</span>
                  <span className="font-semibold text-[#052E2B]">{formData.venueName}, {formData.venueArea}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4B6E6A]">Scheduled Supply:</span>
                  <span className="font-bold text-[#00A99D]">{formData.cansQuantity || estimatedCans} Cans (20L)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#00A99D] hover:bg-[#36D399] hover:text-[#052E2B] text-white font-bold text-xs transition-all shadow-md"
                >
                  Return to Home
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#00A99D]/30 bg-white text-[#052E2B] hover:bg-[#E8FFFA] font-semibold text-xs transition-all"
                >
                  Event Support Desk
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
