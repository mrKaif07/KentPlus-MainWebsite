'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Droplets, ArrowRight, CheckCircle2, ShieldCheck, ArrowLeft, Sparkles, User, Phone, MapPin, Lock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const SERVICE_AREAS = [
  'Pakri',
  'Vastu Vihar Pakri',
  'Kodaria',
  'Bathnadeeh',
  'Madhuban',
  'Chamarua',
  'Marwan',
  'Kharauna',
  'Navodya Vidyalaya Kharauna',
  'Sumera',
  'Patahi',
  'Madapur',
  'Bathna Ram',
  'Bhagwanpur',
  'Yadav Nagar'
];

export default function RegisterPage() {
  const { tr } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    area: 'Bhagwanpur',
    password: '',
    agreeTerms: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8FFFA]/40 via-white to-[#F4FCFA] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-[#E8FFFA] selection:text-[#00A99D]">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center relative z-10 px-4">
        <Link href="/" className="inline-flex items-center gap-2.5 mb-6 group">
          <div className="w-12 h-12 rounded-2xl bg-[#052E2B] border border-[#00A99D]/40 flex items-center justify-center text-white shadow-lg">
            <Droplets className="w-6 h-6 text-[#36D399]" />
          </div>
          <span className="text-2xl font-black text-[#052E2B] tracking-tight">
            KENT <span className="text-[#00A99D]">PLUS</span>
          </span>
        </Link>
        <h1 className="text-2xl sm:text-3xl font-black text-[#052E2B] tracking-tight">
          {tr('Create Customer Account', 'नया ग्राहक खाता बनाएं')}
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-[#4B6E6A]">
          {tr('Get 95% pure 20L drinking water delivered to your doorstep', 'अपने घर तक 95% शुद्ध 20 लीटर मिनरल पानी की डिलीवरी पाएं')}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0 relative z-10">
        <div className="bg-white py-8 px-6 sm:px-10 rounded-3xl border border-[#00A99D]/20 shadow-2xl">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6"
            >
              <div className="w-16 h-16 rounded-3xl bg-[#E8FFFA] text-[#00A99D] flex items-center justify-center mx-auto mb-4 shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-[#00A99D] bg-[#E8FFFA] px-3 py-1 rounded-full border border-[#00A99D]/20">
                {tr('Registration Successful', 'पंजीकरण सफल रहा')}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#052E2B] mt-3 mb-2">
                {tr('Welcome aboard!', 'केंट प्लस में आपका स्वागत है!')}
              </h2>
              <p className="text-xs sm:text-sm text-[#4B6E6A] mb-6 leading-relaxed">
                {tr('Your account for ', 'आपका खाता ')}
                <strong className="text-[#052E2B]">{formData.name}</strong>
                {tr(' is ready. You can now setup your preferred delivery schedule.', ' तैयार है। अब आप अपनी पसंद के अनुसार डिलीवरी शेड्यूल चुन सकते हैं।')}
              </p>
              <Link
                href="/book-water"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#00A99D] hover:bg-[#36D399] hover:text-[#052E2B] text-white text-xs font-bold shadow-md shadow-[#00A99D]/20 transition-all"
              >
                <span>{tr('Setup Delivery Schedule', 'डिलीवरी शेड्यूल तय करें')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">{tr('Full Name *', 'पूरा नाम *')}</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={tr('e.g. Priya Sharma', 'उदा. प्रिया शर्मा')}
                  className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] placeholder:text-[#4B6E6A]/50 focus:ring-2 focus:ring-[#00A99D] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">{tr('Mobile Number (WhatsApp Enabled) *', 'मोबाइल नंबर (व्हाट्सएप सहित) *')}</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 98111 22334"
                  className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] placeholder:text-[#4B6E6A]/50 focus:ring-2 focus:ring-[#00A99D] outline-none"
                />
                <span className="text-[11px] text-[#4B6E6A] mt-1 block">
                  {tr('For delivery updates and morning driver alerts', 'रोज़ाना डिलीवरी सूचना और ड्राइवर के संपर्क के लिए')}
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">{tr('Select Your Service Area / Locality *', 'अपना इलाका / क्षेत्र चुनें *')}</label>
                <select
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none"
                >
                  {SERVICE_AREAS.map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">{tr('Create Password *', 'पासवर्ड बनाएं *')}</label>
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] placeholder:text-[#4B6E6A]/50 focus:ring-2 focus:ring-[#00A99D] outline-none"
                />
              </div>

              <div className="flex items-start gap-2.5 pt-2">
                <input
                  type="checkbox"
                  id="agree"
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                  className="w-4 h-4 text-[#00A99D] rounded border-[#00A99D]/30 mt-0.5 cursor-pointer focus:ring-[#00A99D]"
                />
                <label htmlFor="agree" className="text-xs text-[#4B6E6A] cursor-pointer leading-tight">
                  {tr('I agree to Kent Plus', 'मैं केंट प्लस की')}{' '}
                  <Link href="/terms" className="text-[#00A99D] font-semibold hover:underline">
                    {tr('Terms of Service', 'सेवा की शर्तें')}
                  </Link>{' '}
                  {tr('and', 'और')}{' '}
                  <Link href="/privacy" className="text-[#00A99D] font-semibold hover:underline">
                    {tr('Privacy Policy', 'गोपनीयता नीति')}
                  </Link>{' '}
                  {tr('acceptance', 'स्वीकार करता/करती हूँ')}
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#00A99D] hover:bg-[#36D399] hover:text-[#052E2B] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#00A99D]/20 transition-all mt-4 cursor-pointer"
              >
                {tr('Register Customer Account', 'ग्राहक खाता बनाएं')}
              </button>
            </form>
          )}

          <div className="mt-6 text-center text-xs text-[#4B6E6A]">
            {tr('Already have an account?', 'पहले से खाता है?')}{' '}
            <Link href="/login" className="font-bold text-[#00A99D] hover:underline inline-flex items-center gap-1">
              {tr('Sign In', 'लॉगिन करें')} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-[#4B6E6A] hover:text-[#052E2B] font-semibold transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> {tr('Return to Website Home', 'मुख्य वेबसाइट पर वापस जाएं')}
          </Link>
        </div>
      </div>
    </div>
  );
}
