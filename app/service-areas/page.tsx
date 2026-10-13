'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Search, Truck, Clock, Phone, CheckCircle2, ArrowRight,
  Waves, Check, Sun, ChevronRight, Sparkles, ShieldCheck, Calendar,
  Filter, CalendarDays, Globe
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export interface ServiceArea {
  name: string;
  hindiName: string;
  pincode: string;
  leadTime: string;
  leadTimeHi: string;
  activeCustomers: string;
  featuredSocieties: string[];
  status: string;
  statusHi: string;
  scheduleDays: string[]; // Allowed days of week
  scheduleLabel: string;
  scheduleLabelHi: string;
  scheduleType: 'mon-wed-fri' | 'sun-tue-thu' | 'daily';
  routeNote: string;
  routeNoteHi: string;
  hubBadge?: string;
}

export const AREAS: ServiceArea[] = [
  // ── Monday, Wednesday, Friday Routes ──
  {
    name: 'Pakri',
    hindiName: 'पकड़ी (Pakri)',
    pincode: '842001',
    leadTime: 'Scheduled Route (under 45 min)',
    leadTimeHi: 'शेड्यूल रूट (45 मिनट के भीतर)',
    activeCustomers: '190+',
    featuredSocieties: ['Pakri Chowk Market', 'Shanti Nagar Colony', 'Purvi Pakri Tola', 'Main Road Pockets'],
    status: 'High Availability',
    statusHi: 'उच्च उपलब्धता',
    scheduleDays: ['Monday', 'Wednesday', 'Friday'],
    scheduleLabel: 'Mon • Wed • Fri',
    scheduleLabelHi: 'सोम • बुध • शुक्र',
    scheduleType: 'mon-wed-fri',
    routeNote: 'Day-Gap Route: Monday, Wednesday, Friday (Pakri Chowk Hub open Daily)',
    routeNoteHi: 'एक दिन का अंतर: सोमवार, बुधवार, शुक्रवार (पकड़ी चौक हब रोज़ाना खुला)',
    hubBadge: 'Pakri Chowk Daily Hub'
  },
  {
    name: 'Vastu Vihar Pakri',
    hindiName: 'वास्तु विहार पकड़ी (Vastu Vihar Pakri)',
    pincode: '842001',
    leadTime: 'Express Route (under 30 min)',
    leadTimeHi: 'एक्सप्रेस रूट (30 मिनट के भीतर)',
    activeCustomers: '210+',
    featuredSocieties: ['Vastu Vihar Phase 1', 'Vastu Vihar Phase 2', 'Central Garden Enclave', 'Vastu Vihar Main Gate'],
    status: 'High Availability',
    statusHi: 'उच्च उपलब्धता (दैनिक सेवा)',
    scheduleDays: ['Everyday (Mon-Sun)'],
    scheduleLabel: 'Daily Service',
    scheduleLabelHi: 'रोज़ाना सेवा',
    scheduleType: 'daily',
    routeNote: 'Gated Society Priority: Dedicated Morning Delivery Vehicle for Vastu Vihar Residents',
    routeNoteHi: 'गेटेड सोसाइटी प्राथमिकता: वास्तु विहार निवासियों के लिए समर्पित सुबह का वाहन',
    hubBadge: 'Vastu Vihar Resident Hub'
  },
  {
    name: 'Chamarua',
    hindiName: 'चमरुआ (Chamarua)',
    pincode: '843113',
    leadTime: 'Scheduled Route (under 60 min)',
    leadTimeHi: 'शेड्यूल रूट (60 मिनट के भीतर)',
    activeCustomers: '130+',
    featuredSocieties: ['Chamarua More', 'Panchayat Bhavan Area', 'High School Road', 'Colony Tola'],
    status: 'Active Route',
    statusHi: 'सक्रिय रूट',
    scheduleDays: ['Monday', 'Wednesday', 'Friday'],
    scheduleLabel: 'Mon • Wed • Fri',
    scheduleLabelHi: 'सोम • बुध • शुक्र',
    scheduleType: 'mon-wed-fri',
    routeNote: 'Day-Gap Route: Monday, Wednesday, Friday',
    routeNoteHi: 'एक दिन का अंतर: सोमवार, बुधवार, शुक्रवार'
  },
  {
    name: 'Madhuban',
    hindiName: 'मधुबन (Madhuban)',
    pincode: '842001',
    leadTime: 'Scheduled Route (under 45 min)',
    leadTimeHi: 'शेड्यूल रूट (45 मिनट के भीतर)',
    activeCustomers: '210+',
    featuredSocieties: ['Madhuban Kanti Road', 'Shivalaya Enclave', 'Main Bazaar Pocket', 'East Residential Colony'],
    status: 'High Availability',
    statusHi: 'उच्च उपलब्धता',
    scheduleDays: ['Monday', 'Wednesday', 'Friday'],
    scheduleLabel: 'Mon • Wed • Fri',
    scheduleLabelHi: 'सोम • बुध • शुक्र',
    scheduleType: 'mon-wed-fri',
    routeNote: 'Day-Gap Route: Monday, Wednesday, Friday',
    routeNoteHi: 'एक दिन का अंतर: सोमवार, बुधवार, शुक्रवार'
  },
  {
    name: 'Bathnadeeh',
    hindiName: 'बथनाडीह (Bathnadeeh)',
    pincode: '843113',
    leadTime: 'Scheduled Route (under 60 min)',
    leadTimeHi: 'शेड्यूल रूट (60 मिनट के भीतर)',
    activeCustomers: '140+',
    featuredSocieties: ['Bathnadeeh Chowk', 'Shiv Mandir Tola', 'Middle School Road', 'Bathnadeeh West'],
    status: 'Active Route',
    statusHi: 'सक्रिय रूट',
    scheduleDays: ['Monday', 'Wednesday', 'Friday'],
    scheduleLabel: 'Mon • Wed • Fri',
    scheduleLabelHi: 'सोम • बुध • शुक्र',
    scheduleType: 'mon-wed-fri',
    routeNote: 'Day-Gap Route: Monday, Wednesday, Friday',
    routeNoteHi: 'एक दिन का अंतर: सोमवार, बुधवार, शुक्रवार'
  },
  {
    name: 'Bathna Ram',
    hindiName: 'बथना राम (Bathna Ram)',
    pincode: '843113',
    leadTime: 'Scheduled Route (under 60 min)',
    leadTimeHi: 'शेड्यूल रूट (60 मिनट के भीतर)',
    activeCustomers: '125+',
    featuredSocieties: ['Bathna Ram Mandir Area', 'Ram Chowk', 'Krishi Farm Road', 'South Residential Tola'],
    status: 'Active Route',
    statusHi: 'सक्रिय रूट',
    scheduleDays: ['Monday', 'Wednesday', 'Friday'],
    scheduleLabel: 'Mon • Wed • Fri',
    scheduleLabelHi: 'सोम • बुध • शुक्र',
    scheduleType: 'mon-wed-fri',
    routeNote: 'Day-Gap Route: Monday, Wednesday, Friday',
    routeNoteHi: 'एक दिन का अंतर: सोमवार, बुधवार, शुक्रवार'
  },
  {
    name: 'Madapur',
    hindiName: 'मदापुर (Madapur)',
    pincode: '843113',
    leadTime: 'Scheduled Route (under 60 min)',
    leadTimeHi: 'शेड्यूल रूट (60 मिनट के भीतर)',
    activeCustomers: '110+',
    featuredSocieties: ['Madapur Chauraha', 'Middle School Complex', 'Gramin Bank Road', 'Purvi Tola'],
    status: 'Active Route',
    statusHi: 'सक्रिय रूट',
    scheduleDays: ['Monday', 'Wednesday', 'Friday'],
    scheduleLabel: 'Mon • Wed • Fri',
    scheduleLabelHi: 'सोम • बुध • शुक्र',
    scheduleType: 'mon-wed-fri',
    routeNote: 'Day-Gap Route: Monday, Wednesday, Friday',
    routeNoteHi: 'एक दिन का अंतर: सोमवार, बुधवार, शुक्रवार'
  },
  {
    name: 'Sumera',
    hindiName: 'सुमेरा (Sumera)',
    pincode: '843113',
    leadTime: 'Scheduled Route (under 60 min)',
    leadTimeHi: 'शेड्यूल रूट (60 मिनट के भीतर)',
    activeCustomers: '150+',
    featuredSocieties: ['Sumera Chowk', 'Durga Asthan Tola', 'Canal Road Residences', 'Kisan Seva Kendra Area'],
    status: 'Active Route',
    statusHi: 'सक्रिय रूट',
    scheduleDays: ['Monday', 'Wednesday', 'Friday'],
    scheduleLabel: 'Mon • Wed • Fri',
    scheduleLabelHi: 'सोम • बुध • शुक्र',
    scheduleType: 'mon-wed-fri',
    routeNote: 'Day-Gap Route: Monday, Wednesday, Friday',
    routeNoteHi: 'एक दिन का अंतर: सोमवार, बुधवार, शुक्रवार'
  },

  // ── Sunday, Tuesday, Thursday Routes ──
  {
    name: 'Kharauna',
    hindiName: 'खड़ौना (Kharauna)',
    pincode: '843113',
    leadTime: 'Scheduled Route (under 45 min)',
    leadTimeHi: 'शेड्यूल रूट (45 मिनट के भीतर)',
    activeCustomers: '260+',
    featuredSocieties: ['Kharauna Dih', 'Kharauna Chowk Market', 'Gram Panchayat Bhavan', 'Kanti Marg Pockets'],
    status: 'High Availability',
    statusHi: 'उच्च उपलब्धता',
    scheduleDays: ['Sunday', 'Tuesday', 'Thursday'],
    scheduleLabel: 'Sun • Tue • Thu',
    scheduleLabelHi: 'रवि • मंगल • गुरु',
    scheduleType: 'sun-tue-thu',
    routeNote: 'Day-Gap Route: Sunday, Tuesday, Thursday',
    routeNoteHi: 'एक दिन का अंतर: रविवार, मंगलवार, गुरुवार'
  },
  {
    name: 'Kodaria',
    hindiName: 'कोदरिया (Kodaria)',
    pincode: '843113',
    leadTime: 'Scheduled Route (under 60 min)',
    leadTimeHi: 'शेड्यूल रूट (60 मिनट के भीतर)',
    activeCustomers: '120+',
    featuredSocieties: ['Kodaria Village Central', 'North Tola', 'Panchsheel Marg', 'Kodaria Market Road'],
    status: 'Active Route',
    statusHi: 'सक्रिय रूट',
    scheduleDays: ['Sunday', 'Tuesday', 'Thursday'],
    scheduleLabel: 'Sun • Tue • Thu',
    scheduleLabelHi: 'रवि • मंगल • गुरु',
    scheduleType: 'sun-tue-thu',
    routeNote: 'Day-Gap Route: Sunday, Tuesday, Thursday',
    routeNoteHi: 'एक दिन का अंतर: रविवार, मंगलवार, गुरुवार'
  },
  {
    name: 'Marwan',
    hindiName: 'मड़वन (Marwan)',
    pincode: '843113',
    leadTime: 'Central Hub Dispatch (under 30 min)',
    leadTimeHi: 'सेंट्रल हब डिस्पैच (30 मिनट के भीतर)',
    activeCustomers: '340+',
    featuredSocieties: ['Marwan Block Headquarters', 'Marwan Central Chowk', 'PHC Health Complex', 'Bazar Samiti Road'],
    status: 'Central Hub',
    statusHi: 'मुख्य केंद्र',
    scheduleDays: ['Sunday', 'Tuesday', 'Thursday'],
    scheduleLabel: 'Sun • Tue • Thu',
    scheduleLabelHi: 'रवि • मंगल • गुरु',
    scheduleType: 'sun-tue-thu',
    routeNote: 'Day-Gap Route: Sunday, Tuesday, Thursday',
    routeNoteHi: 'एक दिन का अंतर: रविवार, मंगलवार, गुरुवार'
  },
  {
    name: 'Navodya Vidyalaya Kharauna',
    hindiName: 'नवोदय विद्यालय खड़ौना (JNV Kharauna)',
    pincode: '843113',
    leadTime: 'Priority Zone (under 30 min)',
    leadTimeHi: 'प्राथमिकता क्षेत्र (30 मिनट के भीतर)',
    activeCustomers: '180+',
    featuredSocieties: ['JNV Campus Staff Quarters', 'Vidyalaya Main Gate 1 & 2', 'Academic Block Ring Road', 'Teachers Residential Society'],
    status: 'Priority Zone',
    statusHi: 'प्राथमिकता क्षेत्र',
    scheduleDays: ['Sunday', 'Tuesday', 'Thursday'],
    scheduleLabel: 'Sun • Tue • Thu',
    scheduleLabelHi: 'रवि • मंगल • गुरु',
    scheduleType: 'sun-tue-thu',
    routeNote: 'Day-Gap Route: Sunday, Tuesday, Thursday',
    routeNoteHi: 'एक दिन का अंतर: रविवार, मंगलवार, गुरुवार'
  },
  {
    name: 'Patahi',
    hindiName: 'पताही (Patahi)',
    pincode: '843113',
    leadTime: 'Scheduled Route (under 45 min)',
    leadTimeHi: 'शेड्यूल रूट (45 मिनट के भीतर)',
    activeCustomers: '290+',
    featuredSocieties: ['Patahi Airport Road', 'Patahi Chowk Market', 'Jagannathpur Enclave', 'NH-28 Bypass Link'],
    status: 'High Availability',
    statusHi: 'उच्च उपलब्धता',
    scheduleDays: ['Sunday', 'Tuesday', 'Thursday'],
    scheduleLabel: 'Sun • Tue • Thu',
    scheduleLabelHi: 'रवि • मंगल • गुरु',
    scheduleType: 'sun-tue-thu',
    routeNote: 'Day-Gap Route: Sunday, Tuesday, Thursday',
    routeNoteHi: 'एक दिन का अंतर: रविवार, मंगलवार, गुरुवार'
  },

  // ── Daily All 7 Days Routes ──
  {
    name: 'Bhagwanpur',
    hindiName: 'भगवानपुर (Bhagwanpur)',
    pincode: '842001',
    leadTime: 'Same Day (under 30 min)',
    leadTimeHi: 'उसी दिन (30 मिनट के भीतर)',
    activeCustomers: '420+',
    featuredSocieties: ['Bhagwanpur Chowk', 'NH-28 Highway Hub', 'Rewa Road Commercial Complex', 'Gobarsahi Link Road'],
    status: 'Commercial Hub',
    statusHi: 'व्यापारिक हब',
    scheduleDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    scheduleLabel: 'All 7 Days (Daily)',
    scheduleLabelHi: 'सभी 7 दिन (रोज़ाना)',
    scheduleType: 'daily',
    routeNote: 'Full-Week Daily Route: Sunday to Saturday (Every Day)',
    routeNoteHi: 'पूरे 7 दिन: रविवार से शनिवार तक रोज़ाना डिलीवरी'
  },
  {
    name: 'Yadav Nagar',
    hindiName: 'यादव नगर (Yadav Nagar)',
    pincode: '842001',
    leadTime: 'Same Day (under 45 min)',
    leadTimeHi: 'उसी दिन (45 मिनट के भीतर)',
    activeCustomers: '310+',
    featuredSocieties: ['Yadav Nagar Main Road', 'Radha Krishna Mandir Lane', 'Lanes 1 to 6', 'Damodarpur Connecting Road'],
    status: 'High Availability',
    statusHi: 'उच्च उपलब्धता',
    scheduleDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    scheduleLabel: 'All 7 Days (Daily)',
    scheduleLabelHi: 'सभी 7 दिन (रोज़ाना)',
    scheduleType: 'daily',
    routeNote: 'Full-Week Daily Route: Sunday to Saturday (Every Day)',
    routeNoteHi: 'पूरे 7 दिन: रविवार से शनिवार तक रोज़ाना डिलीवरी'
  },
];

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const HINDI_DAYS: Record<string, string> = {
  'Sunday': 'रविवार',
  'Monday': 'सोमवार',
  'Tuesday': 'मंगलवार',
  'Wednesday': 'बुधवार',
  'Thursday': 'गुरुवार',
  'Friday': 'शुक्रवार',
  'Saturday': 'शनिवार',
  'Sun': 'रवि',
  'Mon': 'सोम',
  'Tue': 'मंगल',
  'Wed': 'बुध',
  'Thu': 'गुरु',
  'Fri': 'शुक्र',
  'Sat': 'शनि',
};

const HINDI_MONTHS: Record<string, string> = {
  'Jan': 'जनवरी',
  'Feb': 'फ़रवरी',
  'Mar': 'मार्च',
  'Apr': 'अप्रैल',
  'May': 'मई',
  'Jun': 'जून',
  'Jul': 'जुलाई',
  'Aug': 'अगस्त',
  'Sep': 'सितंबर',
  'Oct': 'अक्टूबर',
  'Nov': 'नवंबर',
  'Dec': 'दिसंबर',
};

export interface DeliveryDateOption {
  dateString: string;
  dayName: string;
  shortDay: string;
  monthName: string;
  dayNumber: number;
  displayLabelEn: string;
  displayLabelHi: string;
  badgeEn?: string;
  badgeHi?: string;
  isToday: boolean;
  isTomorrow: boolean;
}

function computeUpcomingDates(area: ServiceArea, referenceDate: Date): DeliveryDateOption[] {
  const result: DeliveryDateOption[] = [];
  const currentHour = referenceDate.getHours();

  for (let offset = 0; offset <= 14 && result.length < 4; offset++) {
    const candidate = new Date(referenceDate);
    candidate.setDate(referenceDate.getDate() + offset);

    const dayName = DAY_NAMES[candidate.getDay()];
    const isScheduled =
      area.scheduleDays.length === 7 ||
      area.scheduleDays.includes(dayName);

    if (!isScheduled) continue;

    const isToday = offset === 0;
    const isTomorrow = offset === 1;

    // If today is past 16:00 (4 PM), shifts for today are closed
    if (isToday && currentHour >= 16) {
      continue;
    }

    const year = candidate.getFullYear();
    const month = String(candidate.getMonth() + 1).padStart(2, '0');
    const day = String(candidate.getDate()).padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;

    const shortDay = dayName.slice(0, 3);
    const monthName = candidate.toLocaleDateString('en-US', { month: 'short' });
    const dayNumber = candidate.getDate();

    const shortDayHi = HINDI_DAYS[shortDay] || shortDay;
    const monthNameHi = HINDI_MONTHS[monthName] || monthName;

    let badgeEn: string | undefined = undefined;
    let badgeHi: string | undefined = undefined;
    if (isToday) {
      badgeEn = 'Delivering Today';
      badgeHi = 'आज डिलीवरी';
    } else if (isTomorrow) {
      badgeEn = 'Tomorrow';
      badgeHi = 'कल डिलीवरी';
    } else if (result.length === 0) {
      badgeEn = 'Next Visit';
      badgeHi = 'अगली डिलीवरी';
    }

    result.push({
      dateString,
      dayName,
      shortDay,
      monthName,
      dayNumber,
      displayLabelEn: `${shortDay}, ${dayNumber} ${monthName}`,
      displayLabelHi: `${shortDayHi}, ${dayNumber} ${monthNameHi}`,
      badgeEn,
      badgeHi,
      isToday,
      isTomorrow,
    });
  }

  return result;
}

export default function ServiceAreasPage() {
  const { lang, setLang, t } = useLanguage();
  const [search, setSearch] = useState('');
  const [selectedArea, setSelectedArea] = useState<ServiceArea>(AREAS[0]); // Default: Pakri
  const [selectedSlot, setSelectedSlot] = useState<'Morning' | 'Afternoon'>('Morning');
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [scheduleFilter, setScheduleFilter] = useState<'all' | 'mon-wed-fri' | 'sun-tue-thu' | 'daily'>('all');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const referenceDate = useMemo(() => {
    if (typeof window !== 'undefined') {
      return new Date();
    }
    return new Date('2026-10-11T10:00:00');
  }, []);

  const availableDates = useMemo(() => {
    return computeUpcomingDates(selectedArea, referenceDate);
  }, [selectedArea, referenceDate]);

  const currentSelectedDate = availableDates[selectedDateIndex] || availableDates[0];

  useEffect(() => {
    setSelectedDateIndex(0);
  }, [selectedArea.name]);

  const filtered = AREAS.filter((a) => {
    const matchesSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.hindiName.includes(search) ||
      a.pincode.includes(search) ||
      a.featuredSocieties.some((s) => s.toLowerCase().includes(search.toLowerCase()));

    const matchesSchedule =
      scheduleFilter === 'all' || a.scheduleType === scheduleFilter;

    return matchesSearch && matchesSchedule;
  });

  const isHindi = lang === 'hi';

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#E8FFFA] selection:text-[#00A99D]">
      <Header />

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-[#052E2B] text-white pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-radial-at-t from-[#00A99D]/20 via-[#052E2B] to-[#03211F] pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative max-w-4xl mx-auto px-4 text-center z-10 space-y-4"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#36D399] border border-[#36D399]/30">
                <CalendarDays className="w-3.5 h-3.5" /> {t('areas_badge')}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              {isHindi ? (
                <>इलाका डिलीवरी <span className="text-[#36D399]">शेड्यूल</span></>
              ) : (
                <>Locality Delivery <span className="text-[#36D399]">Schedule</span></>
              )}
            </h1>
            <p className="text-base sm:text-lg text-[#E8FFFA]/80 max-w-2xl mx-auto leading-relaxed">
              {t('areas_hero_subtitle')}
            </p>
          </motion.div>
        </section>

        {/* Interactive Locality Selector & Day-Wise Scheduler */}
        <section className="py-14 sm:py-20 bg-[#F4FCFA] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header info bar with language selector */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A99D] bg-[#E8FFFA] px-3 py-1 rounded-full border border-[#00A99D]/20">
                  {t('areas_selector_badge')}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#052E2B] mt-2">
                  {t('areas_selector_title')}
                </h2>
              </div>

              {/* Top Controls: Language Switcher + Schedule Legend */}
              <div className="flex flex-wrap items-center gap-2.5">
                {/* On-Page Language Switcher */}
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[#00A99D]/30 shadow-xs">
                  <Globe className="w-3.5 h-3.5 text-[#00A99D]" />
                  <span className="text-[11px] font-semibold text-[#4B6E6A] mr-0.5">
                    {isHindi ? 'भाषा:' : 'Language:'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setLang('en')}
                    className={`px-2.5 py-0.5 rounded-full text-xs font-bold transition-all ${
                      lang === 'en'
                        ? 'bg-[#00A99D] text-white shadow-xs'
                        : 'text-[#052E2B] hover:text-[#00A99D]'
                    }`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => setLang('hi')}
                    className={`px-2.5 py-0.5 rounded-full text-xs font-bold transition-all ${
                      lang === 'hi'
                        ? 'bg-[#00A99D] text-white shadow-xs'
                        : 'text-[#052E2B] hover:text-[#00A99D]'
                    }`}
                  >
                    हिंदी
                  </button>
                </div>

                {/* Day-Gap Badges */}
                <div className="hidden sm:flex items-center gap-1.5 text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
                    {isHindi ? 'सोम • बुध • शुक्र' : 'Mon • Wed • Fri'}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200 font-bold">
                    {isHindi ? 'रवि • मंगल • गुरु' : 'Sun • Tue • Thu'}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 font-bold">
                    {isHindi ? 'सभी 7 दिन' : 'All 7 Days'}
                  </span>
                </div>
              </div>
            </div>

            {/* 2-Column Split: Scroll Selector (Left) + Order Details Panel (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* LEFT COLUMN: Scrollable Area Directory */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-5 sm:p-6 border border-[#00A99D]/20 shadow-lg flex flex-col">
                <div className="mb-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-[#052E2B] text-base flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#00A99D]" />
                      <span>{t('areas_list_title')}</span>
                    </h3>
                    <span className="text-[11px] font-bold text-[#00A99D] bg-[#E8FFFA] px-2.5 py-0.5 rounded-full">
                      {filtered.length} {isHindi ? 'इलाके' : 'Areas'}
                    </span>
                  </div>

                  {/* Search input */}
                  <div className="relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4B6E6A]" />
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder={t('areas_search_placeholder')}
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-[#00A99D]/25 bg-[#F8FDFA] text-[#052E2B] text-xs sm:text-sm outline-none placeholder:text-[#4B6E6A]/50 focus:border-[#00A99D] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Day Route Filter Tabs */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <button
                      type="button"
                      onClick={() => setScheduleFilter('all')}
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-lg transition-all ${
                        scheduleFilter === 'all'
                          ? 'bg-[#052E2B] text-white shadow-sm'
                          : 'bg-[#F4FCFA] text-[#4B6E6A] hover:bg-[#E8FFFA]'
                      }`}
                    >
                      {isHindi ? `सभी (${AREAS.length})` : `All (${AREAS.length})`}
                    </button>
                    <button
                      type="button"
                      onClick={() => setScheduleFilter('mon-wed-fri')}
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-lg transition-all ${
                        scheduleFilter === 'mon-wed-fri'
                          ? 'bg-emerald-700 text-white shadow-sm'
                          : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                      }`}
                    >
                      {isHindi ? 'सोम•बुध•शुक्र (7)' : 'Mon•Wed•Fri (7)'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setScheduleFilter('sun-tue-thu')}
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-lg transition-all ${
                        scheduleFilter === 'sun-tue-thu'
                          ? 'bg-sky-700 text-white shadow-sm'
                          : 'bg-sky-50 text-sky-800 hover:bg-sky-100'
                      }`}
                    >
                      {isHindi ? 'रवि•मंगल•गुरु (5)' : 'Sun•Tue•Thu (5)'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setScheduleFilter('daily')}
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-lg transition-all ${
                        scheduleFilter === 'daily'
                          ? 'bg-amber-600 text-white shadow-sm'
                          : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
                      }`}
                    >
                      {isHindi ? 'रोज़ाना (2)' : 'All 7 Days (2)'}
                    </button>
                  </div>
                  <p className="text-[11px] text-[#4B6E6A]">
                    {t('areas_scroll_instruction')}
                  </p>
                </div>

                {/* The Scrollable Area Items */}
                <div className="max-h-[520px] overflow-y-auto pr-1.5 space-y-2.5 scrollbar-thin">
                  {filtered.map((area) => {
                    const isSelected = selectedArea.name === area.name;
                    return (
                      <button
                        key={area.name}
                        type="button"
                        onClick={() => setSelectedArea(area)}
                        className={`w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-200 flex items-center justify-between gap-3 ${
                          isSelected
                            ? 'bg-gradient-to-r from-[#052E2B] to-[#0A4440] text-white shadow-lg ring-2 ring-[#36D399]/40 translate-x-1'
                            : 'bg-white hover:bg-[#F4FCFA] text-[#052E2B] border border-[#00A99D]/15 hover:border-[#00A99D]/40 hover:shadow-sm'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                              isSelected
                                ? 'bg-[#36D399] text-[#052E2B]'
                                : 'bg-[#E8FFFA] text-[#00A99D]'
                            }`}
                          >
                            <MapPin className="w-5 h-5" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <h4 className={`font-bold text-sm truncate ${isSelected ? 'text-white' : 'text-[#052E2B]'}`}>
                                {isHindi ? area.hindiName : area.name}
                              </h4>
                              {isSelected && (
                                <span className="bg-[#36D399] text-[#052E2B] text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                                  {isHindi ? 'चुना हुआ' : 'Selected'}
                                </span>
                              )}
                            </div>
                            
                            {/* Route schedule badge */}
                            <div className="flex flex-wrap items-center gap-1.5 text-[10px] mt-1">
                              <span
                                className={`px-2 py-0.5 rounded-md font-bold ${
                                  isSelected
                                    ? 'bg-white/20 text-[#36D399]'
                                    : area.scheduleType === 'mon-wed-fri'
                                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                                    : area.scheduleType === 'sun-tue-thu'
                                    ? 'bg-sky-50 text-sky-800 border border-sky-200'
                                    : 'bg-amber-50 text-amber-800 border border-amber-200'
                                }`}
                              >
                                🗓️ {isHindi ? area.scheduleLabelHi : area.scheduleLabel}
                              </span>
                              <span className={isSelected ? 'text-white/60' : 'text-[#4B6E6A]'}>
                                Pin: {area.pincode}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="shrink-0 flex items-center">
                          {isSelected ? (
                            <CheckCircle2 className="w-5 h-5 text-[#36D399]" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-[#4B6E6A]/50" />
                          )}
                        </div>
                      </button>
                    );
                  })}

                  {filtered.length === 0 && (
                    <div className="text-center py-8 text-xs text-[#4B6E6A] space-y-2">
                      <p>{isHindi ? `"${search}" के लिए कोई इलाका नहीं मिला` : `No area matches "${search}"`}</p>
                      <button
                        onClick={() => { setSearch(''); setScheduleFilter('all'); }}
                        className="text-[#00A99D] font-bold underline"
                      >
                        {isHindi ? 'फ़िल्टर रीसेट करें' : 'Reset Filters'}
                      </button>
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8FFFA] text-[11px] text-[#4B6E6A] flex items-center justify-between">
                  <span>💡 {isHindi ? 'शेड्यूल रूट डिलीवरी' : 'Scheduled Day-Gap Routes'}</span>
                  <span className="font-semibold text-[#00A99D]">{t('areas_zero_fee')}</span>
                </div>
              </div>

              {/* RIGHT COLUMN: Selected Area Order Details & Date-Wise Scheduler */}
              <div className="lg:col-span-7 sticky top-28">
                <motion.div
                  key={selectedArea.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#00A99D]/30 shadow-2xl space-y-6 relative overflow-hidden"
                >
                  {/* Decorative glow */}
                  <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-[#E8FFFA] via-[#36D399]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

                  {/* Header: Area Title & Schedule Notice */}
                  <div className="relative z-10 border-b border-[#E8FFFA] pb-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E8FFFA] text-[#00A99D] border border-[#00A99D]/20">
                        <MapPin className="w-3.5 h-3.5" /> {t('areas_selected_sector')}: {isHindi ? selectedArea.hindiName : selectedArea.name}
                      </span>
                      <span className={`text-[11px] font-black uppercase px-2.5 py-1 rounded-full ${
                        selectedArea.scheduleType === 'mon-wed-fri'
                          ? 'bg-emerald-100 text-emerald-800'
                          : selectedArea.scheduleType === 'sun-tue-thu'
                          ? 'bg-sky-100 text-sky-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {isHindi ? selectedArea.scheduleLabelHi : selectedArea.scheduleLabel}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-black text-[#052E2B] tracking-tight">
                      {isHindi ? (
                        <><span className="text-[#00A99D] underline decoration-[#36D399] decoration-4">{selectedArea.name}</span> में पानी ऑर्डर करें</>
                      ) : (
                        <>Order in <span className="text-[#00A99D] underline decoration-[#36D399] decoration-4">{selectedArea.name}</span></>
                      )}
                    </h3>
                    
                    {/* Route schedule alert banner */}
                    <div className="mt-3 p-3 rounded-xl bg-[#F4FCFA] border border-[#00A99D]/20 text-xs text-[#052E2B] space-y-1">
                      <div className="flex items-center gap-2 font-bold text-[#00A99D]">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>
                          {isHindi ? `डिलीवरी रूट: ${selectedArea.routeNoteHi}` : `Route Schedule: ${selectedArea.routeNote}`}
                        </span>
                      </div>
                      <p className="text-[#4B6E6A]">
                        {selectedArea.hubBadge
                          ? (isHindi ? `${selectedArea.hubBadge} से तुरंत रोज़ाना डिलीवरी उपलब्ध है।` : `${selectedArea.hubBadge} available for immediate daily pickups.`)
                          : (isHindi ? 'हमारी डिलीवरी वैन तय शेड्यूल के अनुसार नियमित रूप से आती हैं।' : 'Our delivery vans visit on alternate scheduled days with guaranteed shifts.')}
                      </p>
                    </div>
                  </div>

                  {/* STEP 1: CHOOSE UPCOMING DELIVERY DATE (Date-Wise) */}
                  <div className="relative z-10 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs sm:text-sm font-bold text-[#052E2B] flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#00A99D]" />
                        <span>{t('areas_choose_date')}</span>
                      </label>
                      {currentSelectedDate && (
                        <span className="text-[11px] font-semibold text-[#00A99D]">
                          {isHindi ? 'तारीख:' : 'Selected:'} <strong>{isHindi ? currentSelectedDate.displayLabelHi : currentSelectedDate.displayLabelEn}</strong>
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {availableDates.map((d, idx) => {
                        const isDateActive = idx === selectedDateIndex;
                        const badgeText = isHindi ? d.badgeHi : d.badgeEn;
                        const shortDayText = isHindi ? (HINDI_DAYS[d.shortDay] || d.shortDay) : d.shortDay;
                        const monthText = isHindi ? (HINDI_MONTHS[d.monthName] || d.monthName) : d.monthName;

                        return (
                          <button
                            key={d.dateString}
                            type="button"
                            onClick={() => setSelectedDateIndex(idx)}
                            className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-between gap-1 ${
                              isDateActive
                                ? 'bg-[#E8FFFA] border-2 border-[#00A99D] shadow-md ring-2 ring-[#00A99D]/30 scale-[1.02]'
                                : 'bg-[#F8FDFA] border-[#00A99D]/20 hover:bg-[#E8FFFA]/40 hover:border-[#00A99D]/40'
                            }`}
                          >
                            {/* Day Pill */}
                            <span className="text-xs font-bold text-[#4B6E6A] uppercase tracking-wider">
                              {shortDayText}
                            </span>
                            
                            {/* Date Number & Month */}
                            <span className="text-lg font-black text-[#052E2B]">
                              {d.dayNumber} {monthText}
                            </span>

                            {/* Badge */}
                            {badgeText ? (
                              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                                d.isToday
                                  ? 'bg-[#36D399] text-[#052E2B]'
                                  : isDateActive
                                  ? 'bg-[#00A99D] text-white'
                                  : 'bg-gray-100 text-[#4B6E6A]'
                              }`}>
                                {badgeText}
                              </span>
                            ) : (
                              <span className="text-[9px] text-[#4B6E6A] font-medium">
                                {t('scheduled')}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* STEP 2: CHOOSE DELIVERY SHIFT WINDOW (6am-12pm & 1pm-4pm) */}
                  <div className="relative z-10 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs sm:text-sm font-bold text-[#052E2B] flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#00A99D]" />
                        <span>{t('areas_choose_shift')}</span>
                      </label>
                      <span className="text-[11px] font-semibold text-[#00A99D]">
                        {isHindi ? 'शिफ्ट:' : 'Shift:'} <strong>{selectedSlot === 'Morning' ? '6:00 AM – 12:00 PM' : '1:00 PM – 4:00 PM'}</strong>
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* Morning Slot: 6:00 AM to 12:00 PM */}
                      <button
                        type="button"
                        onClick={() => setSelectedSlot('Morning')}
                        className={`p-4 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                          selectedSlot === 'Morning'
                            ? 'bg-[#E8FFFA] border-2 border-[#00A99D] shadow-md ring-2 ring-[#00A99D]/25'
                            : 'bg-[#F8FDFA] border-[#00A99D]/20 hover:bg-[#E8FFFA]/40 hover:border-[#00A99D]/40'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                            <Sun className="w-5 h-5 text-amber-600" />
                          </div>
                          {selectedSlot === 'Morning' && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-[#00A99D] text-white">
                              <Check className="w-3 h-3 stroke-[3]" /> {isHindi ? 'चुना हुआ' : 'Selected'}
                            </span>
                          )}
                        </div>
                        <div>
                          <h4 className="font-extrabold text-[#052E2B] text-sm">{t('shift_morning')}</h4>
                          <span className="text-xs font-bold text-[#00A99D] block mt-0.5">{t('shift_morning_time')}</span>
                          <p className="text-[11px] text-[#4B6E6A] mt-1">{t('shift_morning_desc')}</p>
                        </div>
                      </button>

                      {/* Afternoon Slot: 1:00 PM to 4:00 PM */}
                      <button
                        type="button"
                        onClick={() => setSelectedSlot('Afternoon')}
                        className={`p-4 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                          selectedSlot === 'Afternoon'
                            ? 'bg-[#E8FFFA] border-2 border-[#00A99D] shadow-md ring-2 ring-[#00A99D]/25'
                            : 'bg-[#F8FDFA] border-[#00A99D]/20 hover:bg-[#E8FFFA]/40 hover:border-[#00A99D]/40'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                            <Clock className="w-5 h-5 text-teal-600" />
                          </div>
                          {selectedSlot === 'Afternoon' && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-[#00A99D] text-white">
                              <Check className="w-3 h-3 stroke-[3]" /> {isHindi ? 'चुना हुआ' : 'Selected'}
                            </span>
                          )}
                        </div>
                        <div>
                          <h4 className="font-extrabold text-[#052E2B] text-sm">{t('shift_afternoon')}</h4>
                          <span className="text-xs font-bold text-[#00A99D] block mt-0.5">{t('shift_afternoon_time')}</span>
                          <p className="text-[11px] text-[#4B6E6A] mt-1">{t('shift_afternoon_desc')}</p>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Summary Callout Box */}
                  <div className="relative z-10 bg-[#F4FCFA] rounded-2xl p-4 border border-[#00A99D]/20 text-xs text-[#052E2B] space-y-2">
                    <span className="font-bold text-[#00A99D] uppercase tracking-wider text-[10px] block">
                      {t('areas_preview_title')}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div className="bg-white p-2.5 rounded-xl border border-[#00A99D]/15">
                        <span className="text-[10px] text-[#4B6E6A] block">{t('areas_preview_sector')}</span>
                        <strong className="text-[#052E2B]">{isHindi ? selectedArea.hindiName : selectedArea.name}</strong>
                      </div>
                      <div className="bg-white p-2.5 rounded-xl border border-[#00A99D]/15">
                        <span className="text-[10px] text-[#4B6E6A] block">{t('areas_preview_date')}</span>
                        <strong className="text-[#00A99D]">
                          {currentSelectedDate ? (isHindi ? currentSelectedDate.displayLabelHi : currentSelectedDate.displayLabelEn) : 'Upcoming'}
                        </strong>
                      </div>
                      <div className="bg-white p-2.5 rounded-xl border border-[#00A99D]/15">
                        <span className="text-[10px] text-[#4B6E6A] block">{t('areas_preview_shift')}</span>
                        <strong className="text-[#052E2B]">{selectedSlot === 'Morning' ? '6 AM – 12 PM' : '1 PM – 4 PM'}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Covered Pockets */}
                  <div className="relative z-10">
                    <span className="text-xs font-bold text-[#052E2B] block mb-1.5">
                      {isHindi ? `${selectedArea.name} ${t('areas_covered_landmarks')}` : `${t('areas_covered_landmarks')} ${selectedArea.name}:`}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedArea.featuredSocieties.map((soc, si) => (
                        <span
                          key={si}
                          className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-white border border-[#00A99D]/20 text-[#052E2B] font-medium"
                        >
                          <Check className="w-3 h-3 text-[#36D399] stroke-[3]" />
                          <span>{soc}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* REDIRECT ORDER ACTION BUTTON */}
                  <div className="relative z-10 pt-2 space-y-3">
                    <Link
                      href={`/book-water?area=${encodeURIComponent(selectedArea.name)}&date=${encodeURIComponent(currentSelectedDate?.dateString || '')}&slot=${encodeURIComponent(selectedSlot === 'Morning' ? 'Morning (6:00 AM - 12:00 PM)' : 'Afternoon (1:00 PM - 4:00 PM)')}`}
                      className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#00A99D] to-[#36D399] hover:from-[#008f85] hover:to-[#2ec48b] text-[#052E2B] font-black text-sm sm:text-base shadow-xl shadow-[#00A99D]/30 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 group"
                    >
                      <span>
                        {isHindi ? (
                          <>{selectedArea.name} में पानी ऑर्डर करें ({currentSelectedDate ? (HINDI_DAYS[currentSelectedDate.shortDay] || currentSelectedDate.shortDay) : ''}, {selectedSlot === 'Morning' ? '6 AM - 12 PM' : '1 PM - 4 PM'})</>
                        ) : (
                          <>Proceed to Order in {selectedArea.name} ({currentSelectedDate?.shortDay}, {selectedSlot === 'Morning' ? '6 AM - 12 PM' : '1 PM - 4 PM'})</>
                        )}
                      </span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#4B6E6A] gap-2 pt-2 border-t border-[#E8FFFA]">
                      <Link
                        href={`/book-event?area=${encodeURIComponent(selectedArea.name)}`}
                        className="text-[#00A99D] hover:underline font-bold inline-flex items-center gap-1"
                      >
                        <span>{t('btn_need_event')}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <a
                        href="tel:+919934005300"
                        className="font-semibold text-[#052E2B] hover:text-[#00A99D] inline-flex items-center gap-1"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#00A99D]" />
                        <span>{t('helpline_label')}</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* Society / RWA Callout Section */}
        <section className="py-20 bg-white border-t border-[#00A99D]/20">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
            <h2 className="text-3xl sm:text-4xl font-black text-[#052E2B]">
              {isHindi ? 'क्या आप RWA, सोसायटी प्रबंधक या संस्था हैं?' : 'Are you an RWA, Society Manager, or Institution?'}
            </h2>
            <p className="text-sm text-[#4B6E6A] max-w-xl mx-auto">
              {isHindi
                ? 'हम बड़े आयोजनों, सोसायटियों और हॉस्टलों के लिए रियायती दरों पर दैनिक अथवा एक दिन छोड़कर विशेष सप्लाई और मासिक जीएसटी बिलिंग सुविधा प्रदान करते हैं।'
                : 'We offer dedicated bulk agreements, customized alternate-day or daily schedules, dedicated delivery staff, and consolidated monthly GST invoicing.'}
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#00A99D] hover:bg-[#36D399] hover:text-[#052E2B] text-white font-bold text-xs sm:text-sm shadow-md transition-all"
              >
                <span>{isHindi ? 'रूट ऑपरेशन्स टीम से संपर्क करें' : 'Contact Route Operations Desk'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+919934005300"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#00A99D]/30 bg-white text-[#052E2B] hover:bg-[#E8FFFA] font-bold text-xs sm:text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-[#00A99D]" /> Call (+91 99340 05300)
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
