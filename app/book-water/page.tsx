'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Droplets, Check, ArrowRight, ArrowLeft, MapPin, User,
  Calendar, CreditCard, ShieldCheck, CheckCircle2, Sparkles, Phone, Clock,
  Building, Home, Shield, Waves, ChevronRight
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const STEPS = [
  { id: 1, name: 'Personal Details', short: 'Contact' },
  { id: 2, name: 'Delivery Address', short: 'Address' },
  { id: 3, name: 'Water Plan', short: 'Plan' },
  { id: 4, name: 'Deposit & Billing', short: 'Billing' },
  { id: 5, name: 'Confirm & Book', short: 'Confirm' }
];

const SOUTH_DELHI_AREAS = [
  'Saket', 'Malviya Nagar', 'Lajpat Nagar', 'Greater Kailash (GK 1 & 2)',
  'Vasant Kunj', 'Hauz Khas', 'South Extension', 'Chirag Delhi & Panchsheel'
];

export default function BookWaterPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [orderId, setOrderId] = useState('');

  // Form state (using static default date to allow Next.js prerender without errors)
  const [formData, setFormData] = useState({
    customerType: 'Home',
    fullName: '',
    phone: '',
    email: '',
    area: 'Saket',
    address: '',
    floor: 'Ground Floor',
    hasLift: 'Yes',
    landmark: '',
    cansPerDelivery: 2,
    deliveryFrequency: 'Daily',
    timeSlot: 'Morning (6:30 AM - 9:30 AM)',
    startDate: '2026-10-10',
    billingType: 'Monthly Postpaid Ledger',
    needDispenserStand: false,
    notes: ''
  });

  // Client-side date initialization
  useEffect(() => {
    try {
      const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
      setFormData(prev => ({ ...prev, startDate: tomorrow }));
    } catch {
      // fallback
    }
  }, []);

  const pricePerCan = 65;
  const depositPerCan = 150;
  const monthlyEstDays = formData.deliveryFrequency === 'Daily' ? 30 : 15;
  const monthlyWaterEst = formData.cansPerDelivery * pricePerCan * monthlyEstDays;
  const depositTotal = formData.cansPerDelivery * depositPerCan;
  const dispenserCost = formData.needDispenserStand ? 350 : 0;
  const firstMonthTotal = monthlyWaterEst + depositTotal + dispenserCost;

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleCompleteOrder = () => {
    const generatedId = `KP-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);

    try {
      const existing = JSON.parse(localStorage.getItem('kentplus_subscriptions') || '[]');
      existing.push({
        id: generatedId,
        customerName: formData.fullName,
        phone: formData.phone,
        area: formData.area,
        address: `${formData.address}, ${formData.floor}, ${formData.area}`,
        frequency: formData.deliveryFrequency,
        cansPerDelivery: formData.cansPerDelivery,
        slot: formData.timeSlot,
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('kentplus_subscriptions', JSON.stringify(existing));
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
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#00A99D]/10 via-[#36D399]/10 to-[#E8FFFA] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#E8FFFA] border border-[#00A99D]/30 text-[#00A99D] mb-3">
              <Droplets className="w-3.5 h-3.5 fill-[#00A99D]" /> Instant South Delhi Activation
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-[#052E2B] tracking-tight">
              Start Kent Plus <span className="gradient-text">Daily Water Supply</span>
            </h1>
            <p className="text-sm sm:text-base text-[#4B6E6A] mt-2 max-w-xl mx-auto">
              Setup your daily delivery schedule in 3 minutes. Zero paperwork, 100% pure mineral water, and complimentary trial can on day one.
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
                <div className="flex items-center justify-between max-w-2xl mx-auto">
                  {STEPS.map((s, idx) => {
                    const isPassed = step > s.id;
                    const isCurrent = step === s.id;
                    return (
                      <div key={s.id} className="flex items-center gap-2">
                        <div
                          className={`w-9 h-9 rounded-2xl flex items-center justify-center font-bold text-xs transition-all duration-300 shadow-sm ${
                            isPassed
                              ? 'bg-[#36D399] text-[#052E2B] font-black'
                              : isCurrent
                              ? 'bg-[#00A99D] text-white ring-4 ring-[#36D399]/30 shadow-lg scale-105'
                              : 'bg-white/10 text-white/50 border border-white/10'
                          }`}
                        >
                          {isPassed ? <Check className="w-4 h-4 stroke-[3]" /> : s.id}
                        </div>
                        <span className={`text-xs hidden md:inline font-semibold tracking-wide transition-colors ${isCurrent ? 'text-white' : isPassed ? 'text-[#36D399]' : 'text-white/40'}`}>
                          {s.name}
                        </span>
                        {idx < STEPS.length - 1 && (
                          <div
                            className={`w-4 sm:w-10 lg:w-14 h-1 mx-1 rounded-full transition-all duration-500 hidden sm:block ${
                              step > s.id ? 'bg-[#36D399]' : 'bg-white/15'
                            }`}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step Forms */}
              <div className="p-6 sm:p-10">
                <AnimatePresence mode="wait">
                  {/* Step 1: Personal Details */}
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
                          <User className="w-3.5 h-3.5" /> Step 1 of 5
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#052E2B]">Contact & Customer Type</h2>
                        <p className="text-xs sm:text-sm text-[#4B6E6A] mt-0.5">Who should we address the deliveries and daily digital updates to?</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, customerType: 'Home' })}
                          className={`p-4 rounded-2xl border text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2.5 ${
                            formData.customerType === 'Home'
                              ? 'border-[#00A99D] bg-[#E8FFFA] text-[#052E2B] ring-2 ring-[#00A99D]/30 shadow-md'
                              : 'border-[#00A99D]/20 bg-white text-[#4B6E6A] hover:bg-[#F4FCFA]'
                          }`}
                        >
                          <Home className={`w-4 h-4 ${formData.customerType === 'Home' ? 'text-[#00A99D]' : 'text-[#4B6E6A]'}`} />
                          <span>Residential / Home</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, customerType: 'Office' })}
                          className={`p-4 rounded-2xl border text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2.5 ${
                            formData.customerType === 'Office'
                              ? 'border-[#00A99D] bg-[#E8FFFA] text-[#052E2B] ring-2 ring-[#00A99D]/30 shadow-md'
                              : 'border-[#00A99D]/20 bg-white text-[#4B6E6A] hover:bg-[#F4FCFA]'
                          }`}
                        >
                          <Building className={`w-4 h-4 ${formData.customerType === 'Office' ? 'text-[#00A99D]' : 'text-[#4B6E6A]'}`} />
                          <span>Office / Commercial</span>
                        </button>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">Full Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="e.g. Rahul Sharma"
                            className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] placeholder:text-[#4B6E6A]/50 focus:ring-2 focus:ring-[#00A99D] focus:border-[#00A99D] transition-all outline-none"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">WhatsApp / Phone Number *</label>
                            <input
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="e.g. 98111 22334"
                              className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] placeholder:text-[#4B6E6A]/50 focus:ring-2 focus:ring-[#00A99D] focus:border-[#00A99D] transition-all outline-none"
                            />
                            <span className="text-[11px] text-[#4B6E6A] mt-1 block">Used for daily delivery arrival SMS & driver contact</span>
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">Email Address</label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="rahul@example.com"
                              className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] placeholder:text-[#4B6E6A]/50 focus:ring-2 focus:ring-[#00A99D] focus:border-[#00A99D] transition-all outline-none"
                            />
                            <span className="text-[11px] text-[#4B6E6A] mt-1 block">For monthly automated GST invoice ledger</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Address */}
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
                          <MapPin className="w-3.5 h-3.5" /> Step 2 of 5
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#052E2B]">Delivery Location</h2>
                        <p className="text-xs sm:text-sm text-[#4B6E6A] mt-0.5">Accurate address ensures our morning delivery route reaches your doorstep on time.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">South Delhi Locality *</label>
                          <select
                            value={formData.area}
                            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none"
                          >
                            {SOUTH_DELHI_AREAS.map((a) => (
                              <option key={a} value={a}>{a}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">Floor Level</label>
                          <select
                            value={formData.floor}
                            onChange={(e) => setFormData({ ...formData, floor: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none"
                          >
                            <option value="Ground Floor">Ground Floor</option>
                            <option value="1st Floor">1st Floor</option>
                            <option value="2nd Floor">2nd Floor</option>
                            <option value="3rd Floor">3rd Floor</option>
                            <option value="4th Floor & Above">4th Floor & Above</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">Elevator / Lift Available?</label>
                          <select
                            value={formData.hasLift}
                            onChange={(e) => setFormData({ ...formData, hasLift: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none"
                          >
                            <option value="Yes">Yes, working passenger/service lift</option>
                            <option value="No">No lift (stairs only)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">Nearby Landmark</label>
                          <input
                            type="text"
                            value={formData.landmark}
                            onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                            placeholder="e.g. Opposite Community Center"
                            className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] placeholder:text-[#4B6E6A]/50 focus:ring-2 focus:ring-[#00A99D] outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">Complete House / Flat & Street Address *</label>
                        <textarea
                          rows={3}
                          required
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          placeholder="e.g. Flat 302, Block M, Pocket 4, Saket"
                          className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] placeholder:text-[#4B6E6A]/50 focus:ring-2 focus:ring-[#00A99D] outline-none resize-none"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Water Plan */}
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
                          <Droplets className="w-3.5 h-3.5" /> Step 3 of 5
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#052E2B]">Quantity & Schedule</h2>
                        <p className="text-xs sm:text-sm text-[#4B6E6A] mt-0.5">Customize how many 20L jars you need and when they should be delivered.</p>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#052E2B] mb-3">Number of 20L Cans Per Delivery</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {[1, 2, 3, 4].map((num) => (
                            <button
                              key={num}
                              type="button"
                              onClick={() => setFormData({ ...formData, cansPerDelivery: num })}
                              className={`py-3.5 rounded-2xl border font-bold text-base transition-all duration-200 flex flex-col items-center justify-center gap-1 ${
                                formData.cansPerDelivery === num
                                  ? 'border-[#00A99D] bg-[#E8FFFA] text-[#052E2B] ring-2 ring-[#00A99D]/30 shadow-md'
                                  : 'border-[#00A99D]/20 bg-white text-[#4B6E6A] hover:bg-[#F4FCFA]'
                              }`}
                            >
                              <span className="text-lg">{num} Can{num > 1 ? 's' : ''}</span>
                              <span className="text-[11px] font-normal text-[#4B6E6A]">({num * 20} Litres)</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">Delivery Frequency</label>
                          <select
                            value={formData.deliveryFrequency}
                            onChange={(e) => setFormData({ ...formData, deliveryFrequency: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none"
                          >
                            <option value="Daily">Daily Delivery (Every Morning)</option>
                            <option value="Alternate Days">Alternate Days (Mon, Wed, Fri, Sun)</option>
                            <option value="Weekdays Only">Weekdays Only (Mon to Fri - Offices)</option>
                            <option value="On-Demand / Weekly">2 Times a Week</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">Preferred Time Window</label>
                          <select
                            value={formData.timeSlot}
                            onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none"
                          >
                            <option value="Morning (6:30 AM - 9:30 AM)">Early Morning (6:30 AM – 9:30 AM)</option>
                            <option value="Late Morning (9:30 AM - 12:00 PM)">Late Morning (9:30 AM – 12:00 PM)</option>
                            <option value="Evening (4:30 PM - 8:30 PM)">Evening (4:30 PM – 8:30 PM)</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">Subscription Start Date</label>
                          <input
                            type="date"
                            value={formData.startDate}
                            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none"
                          />
                        </div>
                        <div className="flex items-center pt-2 sm:pt-6">
                          <label className="flex items-center gap-3 p-3 rounded-xl border border-[#00A99D]/20 bg-[#E8FFFA]/40 hover:bg-[#E8FFFA] cursor-pointer select-none transition-all w-full">
                            <input
                              type="checkbox"
                              checked={formData.needDispenserStand}
                              onChange={(e) => setFormData({ ...formData, needDispenserStand: e.target.checked })}
                              className="w-4 h-4 rounded text-[#00A99D] focus:ring-[#00A99D]"
                            />
                            <span className="text-xs text-[#052E2B] font-semibold">
                              Add Table-Top Tap Stand (+₹350 one-time)
                            </span>
                          </label>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Deposit & Billing */}
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
                          <CreditCard className="w-3.5 h-3.5" /> Step 4 of 5
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#052E2B]">Deposit & Billing Mode</h2>
                        <p className="text-xs sm:text-sm text-[#4B6E6A] mt-0.5">Transparent terms. No hidden charges or cancellation lock-ins.</p>
                      </div>

                      {/* Cost breakdown card */}
                      <div className="bg-[#E8FFFA] p-6 rounded-2xl border border-[#00A99D]/30 space-y-3.5 shadow-sm">
                        <div className="flex items-center justify-between pb-2 border-b border-[#00A99D]/20">
                          <h3 className="font-bold text-sm text-[#052E2B] flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-[#00A99D]" /> Price Estimation Breakdown:
                          </h3>
                          <span className="text-xs font-semibold text-[#00A99D] bg-white px-2.5 py-0.5 rounded-full border border-[#00A99D]/30">
                            South Delhi Zone
                          </span>
                        </div>
                        <div className="flex justify-between text-xs text-[#052E2B]">
                          <span>Water Can Rate (20L RO+UV + Minerals):</span>
                          <span className="font-bold text-[#052E2B]">₹{pricePerCan} / can</span>
                        </div>
                        <div className="flex justify-between text-xs text-[#052E2B]">
                          <span>Estimated monthly usage ({monthlyEstDays} deliveries × {formData.cansPerDelivery} cans):</span>
                          <span className="font-bold text-[#052E2B]">₹{monthlyWaterEst}</span>
                        </div>
                        <div className="flex justify-between text-xs text-[#052E2B]">
                          <span>Refundable Can Deposit ({formData.cansPerDelivery} cans × ₹{depositPerCan}):</span>
                          <span className="font-bold text-[#00A99D]">₹{depositTotal} (100% Refundable)</span>
                        </div>
                        {formData.needDispenserStand && (
                          <div className="flex justify-between text-xs text-[#052E2B]">
                            <span>Table-top Dispenser Stand:</span>
                            <span className="font-bold text-[#052E2B]">₹{dispenserCost}</span>
                          </div>
                        )}
                        <div className="pt-3 border-t border-[#00A99D]/20 flex justify-between items-center text-sm font-bold text-[#052E2B]">
                          <span>First Month Estimated Total:</span>
                          <span className="text-[#052E2B] text-lg font-extrabold">₹{firstMonthTotal}</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#052E2B] mb-2">Preferred Payment Method</label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {['Monthly Postpaid Ledger (UPI / NetBanking)', 'Cash on Delivery Per Delivery', 'Digital Prepaid Wallet (10% Bonus)'].map((mode) => (
                            <button
                              key={mode}
                              type="button"
                              onClick={() => setFormData({ ...formData, billingType: mode })}
                              className={`p-4 rounded-xl border text-left text-xs font-semibold transition-all duration-200 ${
                                formData.billingType === mode
                                  ? 'border-[#00A99D] bg-white text-[#052E2B] ring-2 ring-[#00A99D]/30 shadow-md'
                                  : 'border-[#00A99D]/20 bg-[#F4FCFA] text-[#4B6E6A] hover:bg-white'
                              }`}
                            >
                              <div className="flex items-center gap-2 mb-1.5">
                                <CreditCard className="w-4 h-4 text-[#00A99D]" />
                                <span className="font-bold text-[#052E2B]">{mode.split('(')[0]}</span>
                              </div>
                              <span className="text-[11px] text-[#4B6E6A] block">{mode.includes('(') ? `(${mode.split('(')[1]}` : ''}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">Special Delivery Instructions</label>
                        <input
                          type="text"
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          placeholder="e.g. Ring bell twice, leave empty can outside door"
                          className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] placeholder:text-[#4B6E6A]/50 focus:ring-2 focus:ring-[#00A99D] outline-none"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 5: Review & Confirm */}
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
                        <h2 className="text-xl sm:text-2xl font-bold text-[#052E2B]">Review Your Subscription</h2>
                        <p className="text-xs sm:text-sm text-[#4B6E6A] mt-0.5">Please confirm all details before activating your delivery schedule.</p>
                      </div>

                      <div className="bg-[#F4FCFA] p-6 rounded-2xl border border-[#00A99D]/20 space-y-4 text-xs shadow-sm">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-[#00A99D]/20">
                          <div>
                            <span className="text-[#4B6E6A] block mb-1">Subscriber Details:</span>
                            <span className="font-bold text-[#052E2B] text-sm block">{formData.fullName || 'Rahul Sharma'}</span>
                            <span className="text-[#4B6E6A] font-mono">{formData.phone || '98111 22334'}</span>
                          </div>
                          <div>
                            <span className="text-[#4B6E6A] block mb-1">Service Area & Floor:</span>
                            <span className="font-bold text-[#052E2B] text-sm block">{formData.area}</span>
                            <span className="text-[#4B6E6A]">{formData.address || 'Address provided'} • {formData.floor}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 pb-4 border-b border-[#00A99D]/20">
                          <div>
                            <span className="text-[#4B6E6A] block mb-1">Cans Per Trip:</span>
                            <span className="font-bold text-[#052E2B] text-sm">{formData.cansPerDelivery} × 20L Can</span>
                          </div>
                          <div>
                            <span className="text-[#4B6E6A] block mb-1">Frequency:</span>
                            <span className="font-bold text-[#052E2B] text-sm">{formData.deliveryFrequency}</span>
                          </div>
                          <div>
                            <span className="text-[#4B6E6A] block mb-1">Delivery Slot:</span>
                            <span className="font-bold text-[#052E2B] text-sm">{formData.timeSlot.split('(')[0]}</span>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 pt-1">
                          <div>
                            <span className="text-[#4B6E6A] block">Deposit & Billing Mode:</span>
                            <span className="font-bold text-[#052E2B]">{formData.billingType}</span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[#4B6E6A] block">First Delivery On:</span>
                            <span className="font-bold text-[#00A99D] text-base">{formData.startDate}</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#E8FFFA] border border-[#00A99D]/30 text-xs text-[#052E2B] flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-[#00A99D] shrink-0 mt-0.5" />
                        <div>
                          <strong className="block font-semibold mb-0.5">Risk-Free 7-Day Satisfaction Guarantee:</strong>
                          If you are not 100% satisfied with water taste, purity, or delivery promptness, return the cans for an immediate full deposit refund with zero questions asked.
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
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
                      href="/"
                      className="inline-flex items-center gap-1.5 text-xs text-[#4B6E6A] hover:text-[#052E2B] font-semibold transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
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
                      onClick={handleCompleteOrder}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#00A99D] hover:bg-[#36D399] hover:text-[#052E2B] text-white text-sm font-bold shadow-xl shadow-[#00A99D]/30 transition-all"
                    >
                      <Sparkles className="w-4 h-4" /> Confirm & Activate Subscription
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            /* Order Success View */
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
                Subscription Activated
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#052E2B] mt-4 mb-2 tracking-tight">
                Welcome to <span className="gradient-text">Kent Plus</span>, {formData.fullName || 'Neighbor'}!
              </h2>
              <p className="text-sm sm:text-base text-[#4B6E6A] mb-8 max-w-md mx-auto">
                Your daily water delivery subscription has been scheduled. Your local South Delhi route driver will deliver your fresh jars starting tomorrow morning.
              </p>

              <div className="bg-[#F4FCFA] p-6 rounded-2xl border border-[#00A99D]/20 text-left mb-8 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-[#00A99D]/20">
                  <span className="text-[#4B6E6A]">Subscription Ref:</span>
                  <span className="font-bold text-[#00A99D] font-mono text-base">{orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4B6E6A]">Delivery Address:</span>
                  <span className="font-semibold text-[#052E2B]">{formData.area}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4B6E6A]">Scheduled Slot:</span>
                  <span className="font-semibold text-[#052E2B]">{formData.timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4B6E6A]">First Delivery Date:</span>
                  <span className="font-bold text-[#00A99D]">{formData.startDate}</span>
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
                  Contact Helpline
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
