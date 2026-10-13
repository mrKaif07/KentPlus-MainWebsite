'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Droplets, ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ForgotPasswordPage() {
  const { tr } = useLanguage();
  const [sent, setSent] = useState(false);
  const [contact, setContact] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
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
          {tr('Reset Password', 'पासवर्ड रीसेट करें')}
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-[#4B6E6A]">
          {tr('Enter your registered mobile or email to receive a recovery code', 'अपना पंजीकृत मोबाइल नंबर या ईमेल दर्ज करें')}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0 relative z-10">
        <div className="bg-white py-8 px-6 sm:px-10 rounded-3xl border border-[#00A99D]/20 shadow-2xl">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6"
            >
              <div className="w-16 h-16 rounded-3xl bg-[#E8FFFA] text-[#00A99D] flex items-center justify-center mx-auto mb-4 shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-[#00A99D] bg-[#E8FFFA] px-3 py-1 rounded-full border border-[#00A99D]/20">
                {tr('OTP Sent', 'ओटीपी भेजा गया')}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#052E2B] mt-3 mb-2">
                {tr('Reset Code Sent!', 'ओटीपी कोड भेज दिया गया!')}
              </h2>
              <p className="text-xs sm:text-sm text-[#4B6E6A] mb-6 leading-relaxed">
                {tr(
                  `We sent a 6-digit recovery OTP code to `,
                  `हमने 6 अंकों का ओटीपी कोड आपके नंबर/ईमेल `
                )}
                <strong className="text-[#052E2B]">{contact}</strong>
                {tr(
                  `. Please enter the code received to set your new password.`,
                  ` पर भेज दिया है। कृपया नया पासवर्ड बनाने के लिए कोड दर्ज करें।`
                )}
              </p>
              <div className="mb-6">
                <input
                  type="text"
                  maxLength={6}
                  placeholder="• • • • • •"
                  className="w-full text-center tracking-[0.5em] font-mono text-xl py-3 rounded-xl border border-[#00A99D]/30 bg-white text-[#052E2B] outline-none focus:ring-2 focus:ring-[#00A99D]"
                />
              </div>
              <Link
                href="/login"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#00A99D] hover:bg-[#36D399] hover:text-[#052E2B] text-white text-xs font-bold shadow-md shadow-[#00A99D]/20 transition-all"
              >
                <span>{tr('Return to Login', 'लॉगिन पेज पर जाएं')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">
                  {tr('Mobile Number or Email', 'मोबाइल नंबर या ईमेल')}
                </label>
                <input
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="e.g. 9811122334 or user@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] placeholder:text-[#4B6E6A]/50 focus:ring-2 focus:ring-[#00A99D] outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#00A99D] hover:bg-[#36D399] hover:text-[#052E2B] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#00A99D]/20 transition-all mt-4 cursor-pointer"
              >
                {tr('Send Password Reset OTP', 'ओटीपी कोड भेजें')}
              </button>
            </form>
          )}

          <div className="mt-6 text-center">
            <Link href="/login" className="inline-flex items-center gap-1.5 text-xs text-[#4B6E6A] hover:text-[#052E2B] font-semibold transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" /> {tr('Back to Sign In', 'लॉगिन पर वापस जाएं')}
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
