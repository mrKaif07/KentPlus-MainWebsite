'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Droplets, Check, ArrowRight, ArrowLeft, MapPin, User,
  Calendar, CreditCard, ShieldCheck, CheckCircle2, Sparkles, Phone, Clock,
  Building, Home, Shield, Waves, ChevronRight, AlertCircle, Truck
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { AREAS as SERVICE_AREAS, AREA_TIMELINES, getDefaultDeliveryDateForArea, BRAND } from '@/lib/constants';

export default function BookWaterPage() {
  const { tr, isHi } = useLanguage();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [orderId, setOrderId] = useState('');

  const steps = [
    { id: 1, name: tr('Personal Details', 'व्यक्तिगत जानकारी'), short: tr('Contact', 'संपर्क') },
    { id: 2, name: tr('Delivery Address', 'डिलीवरी का पता'), short: tr('Address', 'पता') },
    { id: 3, name: tr('Water Plan', 'पानी का प्लान'), short: tr('Plan', 'प्लान') },
    { id: 4, name: tr('Deposit & Billing', 'सिक्योरिटी व बिलिंग'), short: tr('Billing', 'बिलिंग') },
    { id: 5, name: tr('Confirm & Book', 'ऑर्डर पक्का करें'), short: tr('Confirm', 'पुष्टि') }
  ];

  // Form state (initialized with Bhagwanpur's default timeline)
  const initialTimeline = AREA_TIMELINES['Bhagwanpur'];
  const [formData, setFormData] = useState({
    customerType: 'Home',
    fulfillmentType: 'delivery' as 'delivery' | 'plant_pickup',
    fullName: '',
    phone: '',
    email: '',
    area: 'Bhagwanpur',
    address: '',
    floor: 'Ground Floor',
    hasLift: 'Yes',
    landmark: '',
    cansPerDelivery: 2,
    deliveryFrequency: initialTimeline?.defaultFrequencyEn || 'Daily',
    timeSlot: initialTimeline?.defaultShiftEn || 'Morning (6:00 AM - 12:00 PM)',
    startDate: '2026-10-13',
    billingType: 'Monthly Postpaid Ledger',
    needDispenserStand: false,
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [preselectedInfo, setPreselectedInfo] = useState<{ area?: string; date?: string; slot?: string } | null>(null);

  // Apply default delivery timeline whenever area is selected
  const applyAreaDefaultTimeline = (areaName: string, explicitDate?: string, explicitSlot?: string) => {
    const timeline = AREA_TIMELINES[areaName] || AREA_TIMELINES['Bhagwanpur'];
    const calculatedDate = explicitDate || getDefaultDeliveryDateForArea(areaName);
    const calculatedSlot = explicitSlot || timeline?.defaultShiftEn || 'Morning (6:00 AM - 12:00 PM)';
    const calculatedFreq = timeline?.defaultFrequencyEn || 'Daily';

    setFormData(prev => ({
      ...prev,
      area: areaName,
      deliveryFrequency: calculatedFreq,
      timeSlot: calculatedSlot,
      startDate: calculatedDate,
    }));

    setErrors(prev => {
      const copy = { ...prev };
      delete copy.area;
      return copy;
    });
  };

  // Client-side date and URL parameter initialization
  useEffect(() => {
    try {
      let targetArea = 'Bhagwanpur';
      let targetDate: string | undefined = undefined;
      let targetSlot: string | undefined = undefined;

      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const areaParam = params.get('area');
        const dateParam = params.get('date');
        const slotParam = params.get('slot');

        if (areaParam && SERVICE_AREAS.includes(areaParam)) {
          targetArea = areaParam;
        }

        if (dateParam && dateParam.trim().length > 0) {
          targetDate = dateParam.trim();
        }

        if (slotParam) {
          if (slotParam.toLowerCase().includes('morning') || slotParam.includes('6:00') || slotParam.includes('12:00')) {
            targetSlot = 'Morning (6:00 AM - 12:00 PM)';
          } else if (slotParam.toLowerCase().includes('afternoon') || slotParam.includes('1:00') || slotParam.includes('4:00')) {
            targetSlot = 'Afternoon (1:00 PM - 4:00 PM)';
          } else if (slotParam.toLowerCase().includes('evening')) {
            targetSlot = 'Evening (4:30 PM - 8:30 PM)';
          }
        }

        if (areaParam || dateParam || slotParam) {
          setPreselectedInfo({ area: targetArea, date: targetDate, slot: targetSlot });
        }
      }

      applyAreaDefaultTimeline(targetArea, targetDate, targetSlot);
    } catch {
      // fallback
    }
  }, []);

  const currentTimeline = AREA_TIMELINES[formData.area] || AREA_TIMELINES['Bhagwanpur'];

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
        newErrors.fullName = tr(
          'Please enter your full name (minimum 2 characters)',
          'कृपया अपना पूरा नाम दर्ज करें (कम से कम 2 अक्षर)'
        );
      }
      const cleanPhone = formData.phone.replace(/[\s\-\+]/g, '');
      const validPhoneRegex = /^(\d{10}|91\d{10})$/;
      if (!cleanPhone || !validPhoneRegex.test(cleanPhone)) {
        newErrors.phone = tr(
          'Please enter a valid 10-digit mobile number',
          'कृपया 10 अंकों का सही मोबाइल नंबर दर्ज करें'
        );
      }
      if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        newErrors.email = tr(
          'Please enter a valid email address or leave blank',
          'कृपया सही ईमेल पता दर्ज करें या खाली छोड़ें'
        );
      }
    }

    if (currentStep === 2) {
      if (!formData.area) {
        newErrors.area = tr('Please select your service area', 'कृपया अपना इलाका चुनें');
      }
      if (!formData.address.trim() || formData.address.trim().length < 5) {
        newErrors.address = tr(
          'Complete house/flat number and street address is required (minimum 5 characters)',
          'मकान/फ़्लैट नंबर और गली का पूरा पता आवश्यक है (कम से कम 5 अक्षर)'
        );
      }
    }

    if (currentStep === 3) {
      if (!formData.cansPerDelivery || formData.cansPerDelivery < 1) {
        newErrors.cansPerDelivery = tr('Please select at least 1 can', 'कम से कम 1 जार चुनें');
      }
      if (!formData.startDate) {
        newErrors.startDate = tr('Please choose a start date', 'शुरुआत की तारीख चुनें');
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const pricePerCan = 65;
  const depositPerCan = 150;
  const monthlyEstDays = formData.deliveryFrequency === 'Daily' ? 30 : 15;
  const monthlyWaterEst = formData.cansPerDelivery * pricePerCan * monthlyEstDays;
  const depositTotal = formData.cansPerDelivery * depositPerCan;
  const dispenserCost = formData.needDispenserStand ? 350 : 0;
  const firstMonthTotal = monthlyWaterEst + depositTotal + dispenserCost;

  const handleNext = () => {
    if (step === 1) {
      setTouched(prev => ({ ...prev, fullName: true, phone: true, email: true }));
    } else if (step === 2) {
      setTouched(prev => ({ ...prev, area: true, address: true }));
    } else if (step === 3) {
      setTouched(prev => ({ ...prev, cansPerDelivery: true, startDate: true }));
    }

    if (!validateStep(step)) {
      return;
    }

    if (step < 5) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleCompleteOrder = () => {
    if (!validateStep(1) || !validateStep(2)) {
      setStep(!validateStep(1) ? 1 : 2);
      return;
    }

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
        startDate: formData.startDate,
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
              <Droplets className="w-3.5 h-3.5 fill-[#00A99D]" /> {tr('Instant Doorstep Activation', 'तुरंत घर तक सेवा शुरू')}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-[#052E2B] tracking-tight">
              {tr('Start Kent Plus', 'केंट प्लस')} <span className="gradient-text">{tr('Daily Water Supply', 'दैनिक पानी सप्लाई शुरू करें')}</span>
            </h1>
            <p className="text-sm sm:text-base text-[#4B6E6A] mt-2 max-w-xl mx-auto">
              {tr(
                'Setup your daily delivery schedule in 3 minutes. Zero paperwork, 95% pure mineral water, and complimentary trial can on day one.',
                'केवल 3 मिनट में अपने रोज़ाना पानी का शेड्यूल सेट करें। कोई कागज़ी झंझट नहीं, 95% शुद्ध मिनरल पानी और पहले दिन मुफ़्त ट्रायल।'
              )}
            </p>

            {preselectedInfo && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-4 mx-auto max-w-xl p-3 rounded-2xl bg-[#E8FFFA] border border-[#00A99D]/40 text-center flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-[#052E2B] shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-[#00A99D] shrink-0" />
                <span>{tr('Sector:', 'इलाका:')}</span>
                <span className="text-[#00A99D] font-extrabold">{formData.area}</span>
                {preselectedInfo.date && (
                  <span className="bg-white px-2.5 py-0.5 rounded-full text-[11px] text-[#052E2B] border border-[#00A99D]/30 font-bold inline-flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#00A99D]" />
                    <span>{tr('Date:', 'तारीख:')} {formData.startDate}</span>
                  </span>
                )}
                {preselectedInfo.slot && (
                  <span className="bg-[#052E2B] text-[#36D399] px-2.5 py-0.5 rounded-full text-[11px] font-bold inline-flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#36D399]" />
                    <span>{formData.timeSlot}</span>
                  </span>
                )}
              </motion.div>
            )}
          </motion.div>

          {/* Direct Plant Pickup Info Banner (05:00 AM to 9:00 PM) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 rounded-3xl bg-gradient-to-r from-[#052E2B] via-[#0A4440] to-[#00695F] text-white p-5 sm:p-6 border-2 border-[#36D399]/40 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#36D399]/15 rounded-full blur-2xl pointer-events-none" />
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#36D399] text-[#052E2B] flex items-center justify-center shrink-0 shadow-lg shadow-[#36D399]/30 mt-0.5">
                  <Clock className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="bg-[#36D399] text-[#052E2B] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full tracking-wider shadow-sm">
                      {tr('Plant Open: 05:00 AM – 9:00 PM Daily', 'प्लांट का समय: सुबह 05:00 AM से रात 9:00 PM (रोज़ाना)')}
                    </span>
                    <span className="text-[#36D399] text-xs font-bold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> {tr('Open For Everyone', 'सभी के लिए खुला')}
                    </span>
                  </div>
                  <h2 className="text-base sm:text-lg font-black text-white tracking-tight">
                    {tr('Anyone Can Get Water Directly From Our Plant (05:00 AM to 9:00 PM)', 'कोई भी व्यक्ति सीधे हमारे प्लांट से आकर पानी ले सकता है (सुबह 05:00 AM से रात 9:00 PM)')}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#E8FFFA]/85 mt-1 leading-relaxed max-w-2xl">
                    {tr(
                      'Need water right now or on non-route days? Anyone can visit our main plant (Near Pakri River, Muzaffarpur) between 05:00 AM and 9:00 PM every day to get fresh 95% pure 20L jars directly!',
                      'क्या आपको तुरंत पानी चाहिए या बिना किसी डिलीवरी इंतज़ार के? कोई भी व्यक्ति रोज़ाना सुबह 05:00 AM से रात 9:00 PM के बीच सीधे हमारे मुख्य प्लांट (पकड़ी नदी के पास, मुजफ्फरपुर) आकर ताज़ा 20L जार ले सकता है!'
                    )}
                  </p>
                </div>
              </div>
              <div className="shrink-0 flex sm:flex-col items-center gap-2 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10">
                <a
                  href={`tel:${BRAND.rawPhone || '9934005300'}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#052E2B] hover:bg-[#36D399] text-xs font-black transition-all shadow-md"
                >
                  <Phone className="w-3.5 h-3.5 text-[#00A99D]" />
                  <span>{tr('Plant Helpline', 'प्लांट हेल्पलाइन')}</span>
                </a>
                <span className="text-[10px] text-[#36D399] font-bold text-center whitespace-nowrap inline-flex items-center justify-center gap-1">
                  <MapPin className="w-3 h-3 text-[#36D399]" />
                  <span>{tr('Near Pakri River', 'पकड़ी नदी के पास')}</span>
                </span>
              </div>
            </div>
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
                  {steps.map((s, idx) => {
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
                        {idx < steps.length - 1 && (
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
                          <User className="w-3.5 h-3.5" /> {tr('Step 1 of 5', 'चरण 1 / 5')}
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#052E2B]">{tr('Contact & Customer Type', 'ग्राहक प्रकार व संपर्क विवरण')}</h2>
                        <p className="text-xs sm:text-sm text-[#4B6E6A] mt-0.5">{tr('Who should we address the deliveries and daily digital updates to?', 'हम पानी की डिलीवरी और दैनिक मैसेज किसके नाम भेजें?')}</p>
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
                          <span>{tr('Residential / Home', 'घर / परिवार के लिए')}</span>
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
                          <span>{tr('Office / Commercial', 'ऑफ़िस / दुकान के लिए')}</span>
                        </button>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">{tr('Full Name *', 'पूरा नाम *')}</label>
                          <input
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={(e) => {
                              setFormData({ ...formData, fullName: e.target.value });
                              if (errors.fullName) setErrors(prev => ({ ...prev, fullName: '' }));
                            }}
                            onBlur={() => setTouched(prev => ({ ...prev, fullName: true }))}
                            placeholder={tr('e.g. Rahul Sharma', 'उदा. राहुल शर्मा')}
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-[#052E2B] placeholder:text-[#4B6E6A]/50 focus:ring-2 outline-none transition-all ${
                              touched.fullName && errors.fullName
                                ? 'border-red-500 bg-red-50/20 focus:ring-red-400 focus:border-red-500'
                                : 'border-[#00A99D]/30 bg-white focus:ring-[#00A99D] focus:border-[#00A99D]'
                            }`}
                          />
                          {touched.fullName && errors.fullName && (
                            <span className="text-[11px] text-red-600 font-semibold flex items-center gap-1 mt-1">
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.fullName}
                            </span>
                          )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">{tr('WhatsApp / Phone Number *', 'व्हाट्सएप / मोबाइल नंबर *')}</label>
                            <input
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => {
                                setFormData({ ...formData, phone: e.target.value });
                                if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
                              }}
                              onBlur={() => setTouched(prev => ({ ...prev, phone: true }))}
                              placeholder="e.g. 98111 22334"
                              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#052E2B] placeholder:text-[#4B6E6A]/50 focus:ring-2 outline-none transition-all ${
                                touched.phone && errors.phone
                                  ? 'border-red-500 bg-red-50/20 focus:ring-red-400 focus:border-red-500'
                                  : 'border-[#00A99D]/30 bg-white focus:ring-[#00A99D] focus:border-[#00A99D]'
                              }`}
                            />
                            {touched.phone && errors.phone ? (
                              <span className="text-[11px] text-red-600 font-semibold flex items-center gap-1 mt-1">
                                <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.phone}
                              </span>
                            ) : (
                              <span className="text-[11px] text-[#4B6E6A] mt-1 block">
                                {tr('Used for daily delivery arrival SMS & driver contact', 'रोज़ाना डिलीवरी सूचना और डिलीवरी बॉय संपर्क के लिए')}
                              </span>
                            )}
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">{tr('Email Address (Optional)', 'ईमेल पता (वैकल्पिक)')}</label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => {
                                setFormData({ ...formData, email: e.target.value });
                                if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                              }}
                              onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
                              placeholder="rahul@example.com"
                              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#052E2B] placeholder:text-[#4B6E6A]/50 focus:ring-2 outline-none transition-all ${
                                touched.email && errors.email
                                  ? 'border-red-500 bg-red-50/20 focus:ring-red-400 focus:border-red-500'
                                  : 'border-[#00A99D]/30 bg-white focus:ring-[#00A99D] focus:border-[#00A99D]'
                              }`}
                            />
                            {touched.email && errors.email ? (
                              <span className="text-[11px] text-red-600 font-semibold flex items-center gap-1 mt-1">
                                <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.email}
                              </span>
                            ) : (
                              <span className="text-[11px] text-[#4B6E6A] mt-1 block">
                                {tr('For monthly automated GST invoice ledger', 'मासिक डिजिटल बिल और रसीद पाने के लिए')}
                              </span>
                            )}
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
                          <MapPin className="w-3.5 h-3.5" /> {tr('Step 2 of 5', 'चरण 2 / 5')}
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#052E2B]">{tr('Delivery Location', 'डिलीवरी का पता')}</h2>
                        <p className="text-xs sm:text-sm text-[#4B6E6A] mt-0.5">
                          {tr(
                            'Accurate address ensures our morning delivery route reaches your doorstep on time.',
                            'सटीक पते से हमारी सुबह की डिलीवरी गाड़ी आपके दरवाज़े पर समय पर पहुँचेगी।'
                          )}
                        </p>
                      </div>

                      {/* Fulfillment Method Selector: Doorstep Delivery vs Direct Plant Pickup */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({
                            ...prev,
                            fulfillmentType: 'delivery',
                            address: prev.address.includes('Main Plant') ? '' : prev.address
                          }))}
                          className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                            formData.fulfillmentType === 'delivery'
                              ? 'border-[#00A99D] bg-[#E8FFFA] text-[#052E2B] ring-2 ring-[#00A99D]/30 shadow-sm'
                              : 'border-[#00A99D]/20 bg-white text-[#4B6E6A] hover:bg-[#F4FCFA]'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                            formData.fulfillmentType === 'delivery' ? 'bg-[#00A99D] text-white' : 'bg-[#E8FFFA] text-[#00A99D]'
                          }`}>
                            <Truck className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-xs font-bold block text-[#052E2B]">{tr('Doorstep Delivery', 'घर पर डिलीवरी')}</span>
                            <span className="text-[11px] text-[#4B6E6A] block">{tr('Vans deliver to your locality address', 'आपकी कॉलोनी / पते पर वैन से डिलीवरी')}</span>
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({
                            ...prev,
                            fulfillmentType: 'plant_pickup',
                            address: 'Main Plant: Near Pakri River, Muzaffarpur (Direct Collection 05:00 AM - 9:00 PM)',
                            timeSlot: 'Direct Plant Pickup (5:00 AM - 9:00 PM)'
                          }))}
                          className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                            formData.fulfillmentType === 'plant_pickup'
                              ? 'border-[#00A99D] bg-[#E8FFFA] text-[#052E2B] ring-2 ring-[#00A99D]/30 shadow-sm'
                              : 'border-[#00A99D]/20 bg-white text-[#4B6E6A] hover:bg-[#F4FCFA]'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                            formData.fulfillmentType === 'plant_pickup' ? 'bg-[#36D399] text-[#052E2B]' : 'bg-[#E8FFFA] text-[#00A99D]'
                          }`}>
                            <Clock className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-bold text-[#052E2B]">{tr('Direct Plant Pickup', 'सीधे प्लांट से उठाव')}</span>
                              <span className="text-[9px] font-black bg-[#36D399] text-[#052E2B] px-1.5 py-0.5 rounded-full uppercase">05 AM - 9 PM</span>
                            </div>
                            <span className="text-[11px] text-[#4B6E6A] block">{tr('Anyone can pick up water from plant', 'कोई भी प्लांट से आकर पानी ले सकता है')}</span>
                          </div>
                        </button>
                      </div>

                      {formData.fulfillmentType === 'plant_pickup' && (
                        <div className="p-4 rounded-2xl bg-[#E8FFFA] border border-[#00A99D]/40 text-xs text-[#052E2B] space-y-1.5">
                          <div className="flex items-center gap-2 font-bold text-[#00A99D]">
                            <CheckCircle2 className="w-4 h-4 text-[#00A99D]" />
                            <span>{tr('Direct Plant Pickup Active (Open 05:00 AM – 9:00 PM Daily)', 'सीधे प्लांट से उठाव सक्रिय (रोज़ाना सुबह 05:00 AM – रात 9:00 PM खुला)')}</span>
                          </div>
                          <p className="text-xs text-[#052E2B] leading-relaxed">
                            {tr(
                              'Plant Location: Near Pakri River, Muzaffarpur. Anyone can visit and get 95% pure 20L water cans anytime between 05:00 AM and 9:00 PM without waiting for route delivery.',
                              'प्लांट का स्थान: पकड़ी नदी के पास, मुजफ्फरपुर। कोई भी व्यक्ति बिना किसी डिलीवरी इंतज़ार के सुबह 05:00 AM से रात 9:00 PM के बीच कभी भी आकर 20L जार ले सकता है।'
                            )}
                          </p>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">{tr('Service Area / Locality *', 'सेवा क्षेत्र / मोहल्ला *')}</label>
                          <select
                            value={formData.area}
                            onChange={(e) => applyAreaDefaultTimeline(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none"
                          >
                            {SERVICE_AREAS.map((a) => (
                              <option key={a} value={a}>{a}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">{tr('Floor Level', 'मंज़िल (Floor)')}</label>
                          <select
                            value={formData.floor}
                            onChange={(e) => setFormData({ ...formData, floor: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none"
                          >
                            <option value="Ground Floor">{tr('Ground Floor', 'ग्राउंड फ़्लोर (निचली मंज़िल)')}</option>
                            <option value="1st Floor">{tr('1st Floor', 'पहली मंज़िल')}</option>
                            <option value="2nd Floor">{tr('2nd Floor', 'दूसरी मंज़िल')}</option>
                            <option value="3rd Floor">{tr('3rd Floor', 'तीसरी मंज़िल')}</option>
                            <option value="4th Floor & Above">{tr('4th Floor & Above', 'चौथी मंज़िल या ऊपर')}</option>
                          </select>
                        </div>
                      </div>

                      {/* Automatic Default Timeline Feedback Card */}
                      <motion.div
                        key={formData.area}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-2xl bg-[#E8FFFA] border border-[#00A99D]/40 text-xs text-[#052E2B] space-y-1.5 shadow-sm"
                      >
                        <div className="flex items-center gap-2 font-bold text-[#00A99D]">
                          <CheckCircle2 className="w-4 h-4 shrink-0 text-[#00A99D]" />
                          <span>{tr('Default Delivery Timeline Applied Automatically', 'डिफ़ॉल्ट डिलीवरी टाइमलाइन स्वतः लागू कर दी गई है')}</span>
                        </div>
                        <p className="text-xs text-[#052E2B] leading-relaxed">
                          {tr(
                            `For ${formData.area}, your schedule is automatically set to ${currentTimeline.scheduleLabelEn} with Morning Shift (${currentTimeline.defaultShiftEn}), starting ${formData.startDate}. Everything is pre-configured by default — you don't have to change anything!`,
                            `${formData.area} के लिए आपका डिलीवरी शेड्यूल स्वतः ${currentTimeline.scheduleLabelHi} एवं सुबह की शिफ्ट (${currentTimeline.defaultShiftHi}) पर तय कर दिया गया है (पहली डिलीवरी: ${formData.startDate})। सब कुछ पहले से सेट है — आपको कुछ भी बदलने की आवश्यकता नहीं है!`
                          )}
                        </p>
                      </motion.div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">{tr('Elevator / Lift Available?', 'क्या बिल्डिंग में लिफ्ट है?')}</label>
                          <select
                            value={formData.hasLift}
                            onChange={(e) => setFormData({ ...formData, hasLift: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none"
                          >
                            <option value="Yes">{tr('Yes, working passenger/service lift', 'हाँ, चालू लिफ्ट उपलब्ध है')}</option>
                            <option value="No">{tr('No lift (stairs only)', 'नहीं, केवल सीढ़ियाँ हैं')}</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">{tr('Nearby Landmark', 'पास का कोई लैंडमार्क / पहचान चिह्न')}</label>
                          <input
                            type="text"
                            value={formData.landmark}
                            onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                            placeholder={tr('e.g. Opposite Community Center', 'उदा. मुख्य मंदिर या स्कूल के पास')}
                            className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] placeholder:text-[#4B6E6A]/50 focus:ring-2 focus:ring-[#00A99D] outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">{tr('Complete House / Flat & Street Address *', 'मकान / फ़्लैट नंबर व पूरा पता *')}</label>
                        <textarea
                          rows={3}
                          required
                          value={formData.address}
                          onChange={(e) => {
                            setFormData({ ...formData, address: e.target.value });
                            if (errors.address) setErrors(prev => ({ ...prev, address: '' }));
                          }}
                          onBlur={() => setTouched(prev => ({ ...prev, address: true }))}
                          placeholder={tr('e.g. Near Main Chowk, House No. 12', 'उदा. मुख्य चौक के पास, मकान नंबर 12')}
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-[#052E2B] placeholder:text-[#4B6E6A]/50 focus:ring-2 outline-none resize-none transition-all ${
                            touched.address && errors.address
                              ? 'border-red-500 bg-red-50/20 focus:ring-red-400 focus:border-red-500'
                              : 'border-[#00A99D]/30 bg-white focus:ring-[#00A99D] focus:border-[#00A99D]'
                          }`}
                        />
                        {touched.address && errors.address && (
                          <span className="text-[11px] text-red-600 font-semibold flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.address}
                          </span>
                        )}
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
                          <Droplets className="w-3.5 h-3.5" /> {tr('Step 3 of 5', 'चरण 3 / 5')}
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#052E2B]">{tr('Quantity & Schedule', 'मात्रा और डिलीवरी का समय')}</h2>
                        <p className="text-xs sm:text-sm text-[#4B6E6A] mt-0.5">
                          {tr(
                            'Customize how many 20L jars you need and when they should be delivered.',
                            'तय करें कि आपको कितने 20 लीटर जार चाहिए और किस समय डिलीवरी चाहिए।'
                          )}
                        </p>
                      </div>

                      {/* Step 3 Default Timeline Notice */}
                      <div className="p-3.5 rounded-2xl bg-[#E8FFFA] border border-[#00A99D]/40 text-xs text-[#052E2B] flex items-start gap-2.5 shadow-xs">
                        <CheckCircle2 className="w-4 h-4 text-[#00A99D] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-[#00A99D] uppercase tracking-wider text-[10px] block">
                            {tr('Pre-Set Default Timeline Active', 'डिफ़ॉल्ट डिलीवरी टाइमलाइन सक्रिय')}
                          </span>
                          <p className="mt-0.5 text-xs text-[#052E2B] leading-relaxed">
                            {tr(
                              `Pre-configured for ${formData.area}: ${currentTimeline.scheduleLabelEn} • ${formData.timeSlot} • Start Date: ${formData.startDate}. This timeline is active by default — no changes are required!`,
                              `${formData.area} के लिए पूर्व-निर्धारित: ${currentTimeline.scheduleLabelHi} • ${formData.timeSlot} • शुरुआत: ${formData.startDate}। यह टाइमलाइन डिफ़ॉल्ट रूप से सेट है — आपको कुछ भी बदलने की आवश्यकता नहीं है!`
                            )}
                          </p>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#052E2B] mb-3">
                          {tr('Number of 20L Cans Per Delivery', 'प्रति डिलीवरी 20 लीटर जार की संख्या')}
                        </label>
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
                              <span className="text-lg">{num} {tr(num > 1 ? 'Cans' : 'Can', 'जार')}</span>
                              <span className="text-[11px] font-normal text-[#4B6E6A]">({num * 20} {tr('Litres', 'लीटर')})</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <label className="block text-xs font-semibold text-[#052E2B]">{tr('Delivery Frequency', 'पानी कब-कब चाहिए?')}</label>
                            <span className="text-[10px] font-bold text-[#00A99D] bg-[#E8FFFA] px-2 py-0.5 rounded-full">{tr('Default Set', 'डिफ़ॉल्ट सेट')}</span>
                          </div>
                          <select
                            value={formData.deliveryFrequency}
                            onChange={(e) => setFormData({ ...formData, deliveryFrequency: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none"
                          >
                            <option value="Daily">{tr('Daily Delivery (Every Morning)', 'दैनिक डिलीवरी (हर सुबह ताज़ा पानी)')}</option>
                            <option value="Alternate Days">{tr('Alternate Days (Mon, Wed, Fri, Sun)', 'एक दिन छोड़कर (सोम, बुध, शुक्र, रवि)')}</option>
                            <option value="Weekdays Only">{tr('Weekdays Only (Mon to Fri - Offices)', 'सिर्फ कार्यदिवस (सोमवार से शुक्रवार - ऑफ़िस)')}</option>
                            <option value="On-Demand / Weekly">{tr('2 Times a Week', 'हफ़्ते में 2 बार')}</option>
                          </select>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <label className="block text-xs font-semibold text-[#052E2B]">{tr('Preferred Time Window', 'पसंदीदा डिलीवरी समय')}</label>
                            <span className="text-[10px] font-bold text-[#00A99D] bg-[#E8FFFA] px-2 py-0.5 rounded-full">{tr('Default Set', 'डिफ़ॉल्ट सेट')}</span>
                          </div>
                          <select
                            value={formData.timeSlot}
                            onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none"
                          >
                            <option value="Direct Plant Pickup (5:00 AM - 9:00 PM)">
                              {tr('Direct Plant Pickup (5:00 AM – 9:00 PM Daily)', 'सीधे प्लांट से उठाव (सुबह 5:00 AM – रात 9:00 PM रोज़ाना)')}
                            </option>
                            <option value="Morning (6:00 AM - 12:00 PM)">{tr('Morning Shift (6:00 AM – 12:00 PM)', 'सुबह की शिफ्ट (6:00 AM – 12:00 PM)')}</option>
                            <option value="Afternoon (1:00 PM - 4:00 PM)">{tr('Afternoon Shift (1:00 PM – 4:00 PM)', 'दोपहर की शिफ्ट (1:00 PM – 4:00 PM)')}</option>
                            <option value="Evening (4:30 PM - 8:30 PM)">{tr('Evening Shift (4:30 PM – 8:30 PM)', 'शाम की शिफ्ट (4:30 PM – 8:30 PM)')}</option>
                          </select>
                          <p className="text-[11px] text-[#00A99D] font-semibold mt-1.5 flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 shrink-0" />
                            <span>{tr('Plant is open 05:00 AM to 9:00 PM daily for walk-in pickups by anyone.', 'प्लांट सुबह 05:00 AM से रात 9:00 PM तक किसी भी व्यक्ति के सीधे आकर पानी लेने के लिए खुला रहता है।')}</span>
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <label className="block text-xs font-semibold text-[#052E2B]">{tr('Subscription Start Date *', 'डिलीवरी शुरू करने की तारीख *')}</label>
                            <span className="text-[10px] font-bold text-[#00A99D] bg-[#E8FFFA] px-2 py-0.5 rounded-full">{tr('Next Route Run', 'अगली रूट रन')}</span>
                          </div>
                          <input
                            type="date"
                            required
                            value={formData.startDate}
                            onChange={(e) => {
                              setFormData({ ...formData, startDate: e.target.value });
                              if (errors.startDate) setErrors(prev => ({ ...prev, startDate: '' }));
                            }}
                            onBlur={() => setTouched(prev => ({ ...prev, startDate: true }))}
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-[#052E2B] focus:ring-2 outline-none transition-all ${
                              touched.startDate && errors.startDate
                                ? 'border-red-500 bg-red-50/20 focus:ring-red-400 focus:border-red-500'
                                : 'border-[#00A99D]/30 bg-white focus:ring-[#00A99D]'
                            }`}
                          />
                          {touched.startDate && errors.startDate && (
                            <span className="text-[11px] text-red-600 font-semibold flex items-center gap-1 mt-1">
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.startDate}
                            </span>
                          )}
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
                              {tr('Add Table-Top Tap Stand (+₹350 one-time)', 'टेबल-टॉप टैप स्टैंड जोड़ें (+₹350 एक बार)')}
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
                          <CreditCard className="w-3.5 h-3.5" /> {tr('Step 4 of 5', 'चरण 4 / 5')}
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#052E2B]">{tr('Deposit & Billing Mode', 'सिक्योरिटी और बिलिंग का माध्यम')}</h2>
                        <p className="text-xs sm:text-sm text-[#4B6E6A] mt-0.5">
                          {tr('Transparent terms. No hidden charges or cancellation lock-ins.', 'साफ़ और पारदर्शी हिसाब। कोई छुपा शुल्क नहीं और कभी भी बंद करने की आज़ादी।')}
                        </p>
                      </div>

                      {/* Cost breakdown card */}
                      <div className="bg-[#E8FFFA] p-6 rounded-2xl border border-[#00A99D]/30 space-y-3.5 shadow-sm">
                        <div className="flex items-center justify-between pb-2 border-b border-[#00A99D]/20">
                          <h3 className="font-bold text-sm text-[#052E2B] flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-[#00A99D]" /> {tr('Price Estimation Breakdown:', 'अनुमानित बिल का विवरण:')}
                          </h3>
                          <span className="text-xs font-semibold text-[#00A99D] bg-white px-2.5 py-0.5 rounded-full border border-[#00A99D]/30">
                            {tr('Active Service Zone', 'सक्रिय सेवा क्षेत्र')}
                          </span>
                        </div>
                        <div className="flex justify-between text-xs text-[#052E2B]">
                          <span>{tr('Water Can Rate (20L RO+UV + Minerals):', 'पानी जार का रेट (20L RO+UV + मिनरल्स):')}</span>
                          <span className="font-bold text-[#052E2B]">₹{pricePerCan} {tr('/ can', '/ जार')}</span>
                        </div>
                        <div className="flex justify-between text-xs text-[#052E2B]">
                          <span>{tr(`Estimated monthly usage (${monthlyEstDays} deliveries × ${formData.cansPerDelivery} cans):`, `मासिक अनुमानित उपयोग (${monthlyEstDays} डिलीवरी × ${formData.cansPerDelivery} जार):`)}</span>
                          <span className="font-bold text-[#052E2B]">₹{monthlyWaterEst}</span>
                        </div>
                        <div className="flex justify-between text-xs text-[#052E2B]">
                          <span>{tr(`Refundable Can Deposit (${formData.cansPerDelivery} cans × ₹${depositPerCan}):`, `वापसी योग्य जार सिक्योरिटी (${formData.cansPerDelivery} जार × ₹${depositPerCan}):`)}</span>
                          <span className="font-bold text-[#00A99D]">₹{depositTotal} ({tr('100% Refundable', '100% वापसी योग्य')})</span>
                        </div>
                        {formData.needDispenserStand && (
                          <div className="flex justify-between text-xs text-[#052E2B]">
                            <span>{tr('Table-top Dispenser Stand:', 'टेबल-टॉप स्टैंड कीमत:')}</span>
                            <span className="font-bold text-[#052E2B]">₹{dispenserCost}</span>
                          </div>
                        )}
                        <div className="pt-3 border-t border-[#00A99D]/20 flex justify-between items-center text-sm font-bold text-[#052E2B]">
                          <span>{tr('First Month Estimated Total:', 'पहले महीने का कुल अनुमानित भुगतान:')}</span>
                          <span className="text-[#052E2B] text-lg font-extrabold">₹{firstMonthTotal}</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#052E2B] mb-2">{tr('Preferred Payment Method', 'भुगतान का पसंदीदा तरीका')}</label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {[
                            { id: 'Monthly Postpaid Ledger', title: tr('Monthly Postpaid', 'मासिक बिल (महीने के अंत में)'), sub: tr('UPI / NetBanking at month-end', 'महीने के अंत में UPI या ऑनलाइन') },
                            { id: 'Cash on Delivery', title: tr('Cash on Delivery', 'कैश ऑन डिलीवरी'), sub: tr('Pay driver per delivery', 'हर डिलीवरी पर नकद भुगतान') },
                            { id: 'Digital Prepaid Wallet', title: tr('Prepaid Wallet', 'प्रीपेड वॉलेट (10% छूट)'), sub: tr('Instant recharge with bonus', 'रिचार्ज पर 10% अतिरिक्त छूट') }
                          ].map((mode) => (
                            <button
                              key={mode.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, billingType: mode.id })}
                              className={`p-4 rounded-xl border text-left text-xs font-semibold transition-all duration-200 ${
                                formData.billingType === mode.id
                                  ? 'border-[#00A99D] bg-white text-[#052E2B] ring-2 ring-[#00A99D]/30 shadow-md'
                                  : 'border-[#00A99D]/20 bg-[#F4FCFA] text-[#4B6E6A] hover:bg-white'
                              }`}
                            >
                              <div className="flex items-center gap-2 mb-1.5">
                                <CreditCard className="w-4 h-4 text-[#00A99D]" />
                                <span className="font-bold text-[#052E2B]">{mode.title}</span>
                              </div>
                              <span className="text-[11px] text-[#4B6E6A] block">{mode.sub}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">{tr('Special Delivery Instructions', 'डिलीवरी के लिए विशेष निर्देश (वैकल्पिक)')}</label>
                        <input
                          type="text"
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          placeholder={tr('e.g. Ring bell twice, leave empty can outside door', 'उदा. घंटी दो बार बजाएं, खाली जार दरवाज़े के पास रखें')}
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
                          <CheckCircle2 className="w-3.5 h-3.5" /> {tr('Step 5 of 5', 'चरण 5 / 5')}
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#052E2B]">{tr('Review Your Subscription', 'ऑर्डर की समीक्षा व पुष्टि')}</h2>
                        <p className="text-xs sm:text-sm text-[#4B6E6A] mt-0.5">
                          {tr('Please confirm all details before activating your delivery schedule.', 'डिलीवरी शुरू करने से पहले कृपया अपने विवरण की जाँच कर लें।')}
                        </p>
                      </div>

                      <div className="bg-[#F4FCFA] p-6 rounded-2xl border border-[#00A99D]/20 space-y-4 text-xs shadow-sm">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-[#00A99D]/20">
                          <div>
                            <span className="text-[#4B6E6A] block mb-1">{tr('Subscriber Details:', 'ग्राहक का विवरण:')}</span>
                            <span className="font-bold text-[#052E2B] text-sm block">{formData.fullName || 'Rahul Sharma'}</span>
                            <span className="text-[#4B6E6A] font-mono">{formData.phone || '98111 22334'}</span>
                          </div>
                          <div>
                            <span className="text-[#4B6E6A] block mb-1">{tr('Service Area & Floor:', 'इलाका व मंज़िल:')}</span>
                            <span className="font-bold text-[#052E2B] text-sm block">{formData.area}</span>
                            <span className="text-[#4B6E6A]">{formData.address || tr('Address provided', 'दर्ज पता')} • {formData.floor}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 pb-4 border-b border-[#00A99D]/20">
                          <div>
                            <span className="text-[#4B6E6A] block mb-1">{tr('Cans Per Trip:', 'प्रति ट्रिप जार:')}</span>
                            <span className="font-bold text-[#052E2B] text-sm">{formData.cansPerDelivery} × 20L {tr('Can', 'जार')}</span>
                          </div>
                          <div>
                            <span className="text-[#4B6E6A] block mb-1">{tr('Frequency:', 'कब-कब:')}</span>
                            <span className="font-bold text-[#052E2B] text-sm">{formData.deliveryFrequency}</span>
                          </div>
                          <div>
                            <span className="text-[#4B6E6A] block mb-1">{tr('Delivery Slot:', 'समय स्लॉट:')}</span>
                            <span className="font-bold text-[#052E2B] text-sm">{formData.timeSlot.split('(')[0]}</span>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 pt-1">
                          <div>
                            <span className="text-[#4B6E6A] block">{tr('Deposit & Billing Mode:', 'भुगतान का तरीका:')}</span>
                            <span className="font-bold text-[#052E2B]">{formData.billingType}</span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[#4B6E6A] block">{tr('First Delivery On:', 'पहली डिलीवरी तारीख:')}</span>
                            <span className="font-bold text-[#00A99D] text-base">{formData.startDate}</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#E8FFFA] border border-[#00A99D]/30 text-xs text-[#052E2B] flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-[#00A99D] shrink-0 mt-0.5" />
                        <div>
                          <strong className="block font-semibold mb-0.5">{tr('Risk-Free 7-Day Satisfaction Guarantee:', '7 दिन की संतुष्टि गारंटी:')}</strong>
                          {tr(
                            'If you are not 100% satisfied with water taste, purity, or delivery promptness, return the cans for an immediate full deposit refund with zero questions asked.',
                            'यदि आप पानी के स्वाद, शुद्धता या डिलीवरी से पूरी तरह संतुष्ट नहीं हैं, तो जार वापस करें और अपनी पूरी सिक्योरिटी राशि बिना किसी सवाल के तुरंत वापस पाएं।'
                          )}
                        </div>
                      </div>

                      {/* Plant Pickup Hours Notice */}
                      <div className="p-4 rounded-2xl bg-[#F4FCFA] border border-[#00A99D]/20 text-xs text-[#052E2B] flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <Clock className="w-4 h-4 text-[#00A99D] shrink-0" />
                          <span>
                            {tr('Plant Direct Pickup: Open 05:00 AM – 9:00 PM (All 7 Days Near Pakri River)', 'प्लांट से सीधा उठाव: सुबह 05:00 AM से रात 9:00 PM तक खुला (सभी 7 दिन, पकड़ी नदी के पास)')}
                          </span>
                        </div>
                        <span className="font-bold text-[#00A99D] text-[10px] bg-[#E8FFFA] px-2 py-0.5 rounded-full shrink-0">
                          {tr('Walk-in Allowed', 'सीधा प्रवेश')}
                        </span>
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
                      <ArrowLeft className="w-4 h-4" /> {tr('Previous Step', 'पिछला चरण')}
                    </motion.button>
                  ) : (
                    <Link
                      href="/"
                      className="inline-flex items-center gap-1.5 text-xs text-[#4B6E6A] hover:text-[#052E2B] font-semibold transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> {tr('Back to Home', 'होमपेज पर जाएं')}
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
                      {tr('Continue', 'आगे बढ़ें')} <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      type="button"
                      onClick={handleCompleteOrder}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#00A99D] hover:bg-[#36D399] hover:text-[#052E2B] text-white text-sm font-bold shadow-xl shadow-[#00A99D]/30 transition-all"
                    >
                      <Sparkles className="w-4 h-4" /> {tr('Confirm & Activate Subscription', 'ऑर्डर पक्का करें व सेवा शुरू करें')}
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
                {tr('Subscription Activated', 'सब्स्क्रिप्शन चालू हो गया')}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#052E2B] mt-4 mb-2 tracking-tight">
                {tr('Welcome to', 'केंट प्लस में आपका स्वागत है,')} <span className="gradient-text">Kent Plus</span>, {formData.fullName || tr('Neighbor', 'नमस्ते')}!
              </h2>
              <p className="text-sm sm:text-base text-[#4B6E6A] mb-8 max-w-md mx-auto">
                {tr(
                  'Your daily water delivery subscription has been scheduled. Your local route driver will deliver your fresh jars starting tomorrow morning.',
                  'आपकी रोज़ाना पानी की डिलीवरी तय हो गई है। हमारे स्थानीय डिलीवरी बॉय द्वारा कल सुबह से ताज़ा जार पहुंचाना शुरू कर दिया जाएगा।'
                )}
              </p>

              <div className="bg-[#F4FCFA] p-6 rounded-2xl border border-[#00A99D]/20 text-left mb-8 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-[#00A99D]/20">
                  <span className="text-[#4B6E6A]">{tr('Subscription Ref:', 'ऑर्डर संख्या:')}</span>
                  <span className="font-bold text-[#00A99D] font-mono text-base">{orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4B6E6A]">{tr('Delivery Address:', 'डिलीवरी का इलाका:')}</span>
                  <span className="font-semibold text-[#052E2B]">{formData.area}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4B6E6A]">{tr('Scheduled Slot:', 'डिलीवरी समय:')}</span>
                  <span className="font-semibold text-[#052E2B]">{formData.timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4B6E6A]">{tr('First Delivery Date:', 'पहली डिलीवरी तारीख:')}</span>
                  <span className="font-bold text-[#00A99D]">{formData.startDate}</span>
                </div>
                <div className="pt-2 border-t border-[#00A99D]/15 text-[11px] text-[#00A99D] font-semibold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>{tr('Direct Plant Pickup is open 05:00 AM – 9:00 PM daily near Pakri River.', 'सीधे प्लांट से पानी लेने की सुविधा रोज़ाना सुबह 05:00 AM से रात 9:00 PM तक खुली है।')}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#00A99D] hover:bg-[#36D399] hover:text-[#052E2B] text-white font-bold text-xs transition-all shadow-md"
                >
                  {tr('Return to Home', 'होमपेज पर जाएं')}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#00A99D]/30 bg-white text-[#052E2B] hover:bg-[#E8FFFA] font-semibold text-xs transition-all"
                >
                  {tr('Contact Helpline', 'हेल्पलाइन से बात करें')}
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
