'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, ArrowRight, UserCheck, Truck, Shield, Lock, Eye, EyeOff, ArrowLeft, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function LoginPage() {
  const { tr, isHi } = useLanguage();
  const [role, setRole] = useState<'customer' | 'supplier' | 'admin'>('customer');
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const portals = {
    customer: {
      title: tr('Customer Portal', 'ग्राहक पोर्टल'),
      tabLabel: tr('Customer', 'ग्राहक'),
      desc: tr(
        'Track daily deliveries, pay bills & manage subscription',
        'रोज़ाना पानी की डिलीवरी ट्रैक करें, बिल भरें और प्लान बदलें'
      ),
      demoCreds: { id: '9811122334', pass: 'customer123', redirect: 'http://localhost:3001/dashboard' },
      icon: UserCheck,
      color: 'text-[#00A99D]',
      badgeBg: 'bg-[#E8FFFA] text-[#00A99D] border-[#00A99D]/20'
    },
    supplier: {
      title: tr('Supplier & Driver Portal', 'डिलीवरी बॉय व सप्लायर पोर्टल'),
      tabLabel: tr('Supplier', 'सप्लायर'),
      desc: tr(
        'Active delivery routes, OTP confirmation & cash collections',
        'चालू डिलीवरी रूट, ओटीपी डिलीवरी पुष्टि व कैश कलेक्शन'
      ),
      demoCreds: { id: '9876500001', pass: 'supplier123', redirect: 'http://localhost:3002/dashboard' },
      icon: Truck,
      color: 'text-[#36D399]',
      badgeBg: 'bg-[#E8FFFA] text-[#052E2B] border-[#36D399]/30'
    },
    admin: {
      title: tr('Admin CRM & Dispatch', 'एडमिन सीआरएम व डिस्पैच'),
      tabLabel: tr('Admin', 'एडमिन'),
      desc: tr(
        'Fleet overview, customer ledger, inventory & business analytics',
        'डिलीवरी गाड़ियां, ग्राहक लेजर, प्लांट स्टॉक व बिज़नेस रिपोर्ट'
      ),
      demoCreds: { id: 'admin@kentplus.com', pass: 'admin123', redirect: 'http://localhost:3003/dashboard' },
      icon: Shield,
      color: 'text-[#052E2B]',
      badgeBg: 'bg-[#E8FFFA] text-[#052E2B] border-[#00A99D]/30'
    }
  };

  const handleFillDemo = (targetRole: 'customer' | 'supplier' | 'admin') => {
    setRole(targetRole);
    setPhoneOrEmail(portals[targetRole].demoCreds.id);
    setPassword(portals[targetRole].demoCreds.pass);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      window.location.href = portals[role].demoCreds.redirect;
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8FFFA]/40 via-white to-[#F4FCFA] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-[#E8FFFA] selection:text-[#00A99D]">
      {/* Ambient background light orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#00A99D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#36D399]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center relative z-10 px-4">
        <Link href="/" className="inline-flex items-center gap-2.5 mb-6 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-12 h-12 rounded-2xl bg-[#052E2B] border border-[#00A99D]/40 flex items-center justify-center text-white shadow-lg"
          >
            <Droplets className="w-6 h-6 text-[#36D399]" />
          </motion.div>
          <span className="text-2xl font-black text-[#052E2B] tracking-tight">
            KENT <span className="text-[#00A99D]">PLUS</span>
          </span>
        </Link>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl font-black text-[#052E2B] tracking-tight"
        >
          {tr('Sign in to Kent Plus', 'केंट प्लस पोर्टल में लॉगिन करें')}
        </motion.h1>
        <p className="mt-1 text-xs sm:text-sm text-[#4B6E6A]">
          {tr('Select your portal to continue to your verified dashboard', 'अपने डैशबोर्ड पर जाने के लिए नीचे से अपना पोर्टल चुनें')}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg px-4 sm:px-0 relative z-10"
      >
        <div className="bg-white py-8 px-6 sm:px-10 rounded-3xl border border-[#00A99D]/20 shadow-2xl">
          {/* Role selector tabs */}
          <div className="grid grid-cols-3 gap-1.5 p-1.5 bg-[#E8FFFA] rounded-2xl border border-[#00A99D]/20 mb-6">
            {(['customer', 'supplier', 'admin'] as const).map((r) => {
              const Icon = portals[r].icon;
              const isSelected = role === r;
              return (
                <button
                  key={r}
                  type="button"
                  onClick={() => handleFillDemo(r)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold capitalize transition-all flex flex-col sm:flex-row items-center justify-center gap-1.5 ${
                    isSelected
                      ? 'bg-white text-[#052E2B] shadow-sm border border-[#00A99D]/20 font-black'
                      : 'text-[#4B6E6A] hover:text-[#052E2B]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#00A99D]' : 'text-[#4B6E6A]'}`} />
                  <span>{portals[r].tabLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Active Portal Info Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="mb-6 p-4 rounded-2xl bg-[#F4FCFA] border border-[#00A99D]/20 flex items-start gap-3.5"
            >
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shrink-0 border border-[#00A99D]/20 shadow-xs">
                {(() => {
                  const Icon = portals[role].icon;
                  return <Icon className={`w-4 h-4 ${portals[role].color}`} />;
                })()}
              </div>
              <div className="flex-1">
                <h3 className="text-xs font-bold text-[#052E2B]">{portals[role].title}</h3>
                <p className="text-[11px] text-[#4B6E6A] mt-0.5 leading-snug">{portals[role].desc}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#052E2B] mb-1.5">
                {role === 'admin'
                  ? tr('Work Email', 'ऑफिशियल ईमेल')
                  : tr('Mobile Number / User ID', 'मोबाइल नंबर या यूज़र आईडी')}
              </label>
              <input
                type="text"
                required
                value={phoneOrEmail}
                onChange={(e) => setPhoneOrEmail(e.target.value)}
                placeholder={role === 'admin' ? 'admin@kentplus.com' : 'e.g. 9811122334'}
                className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] placeholder:text-[#4B6E6A]/50 focus:ring-2 focus:ring-[#00A99D] outline-none"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-[#052E2B]">{tr('Password', 'पासवर्ड')}</label>
                <Link href="/forgot-password" className="text-xs font-medium text-[#00A99D] hover:underline">
                  {tr('Forgot password?', 'पासवर्ड भूल गए?')}
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-white text-sm text-[#052E2B] placeholder:text-[#4B6E6A]/50 focus:ring-2 focus:ring-[#00A99D] outline-none pr-11"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#4B6E6A] hover:text-[#052E2B]"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-full bg-[#00A99D] hover:bg-[#36D399] hover:text-[#052E2B] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#00A99D]/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 mt-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>{tr('Signing In...', 'लॉगिन हो रहा है...')}</span>
                </>
              ) : (
                <>
                  <span>{tr(`Sign In to ${portals[role].title}`, `${portals[role].title} में प्रवेश करें`)}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Access Buttons */}
          <div className="mt-8 pt-6 border-t border-[#E8FFFA]">
            <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-[#4B6E6A] uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#00A99D]" />
              <span>{tr('Instant 1-Click Demo Login', '1-क्लिक से डेमो लॉगिन')}</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => handleFillDemo('customer')}
                className="p-2.5 rounded-xl border border-[#00A99D]/20 bg-[#F4FCFA] hover:bg-[#E8FFFA] text-center text-xs font-semibold text-[#052E2B] transition-all flex flex-col sm:flex-row items-center justify-center gap-1.5"
              >
                <UserCheck className="w-3.5 h-3.5 text-[#00A99D]" />
                <span>{tr('Customer', 'ग्राहक')}</span>
              </button>
              <button
                type="button"
                onClick={() => handleFillDemo('supplier')}
                className="p-2.5 rounded-xl border border-[#00A99D]/20 bg-[#F4FCFA] hover:bg-[#E8FFFA] text-center text-xs font-semibold text-[#052E2B] transition-all flex flex-col sm:flex-row items-center justify-center gap-1.5"
              >
                <Truck className="w-3.5 h-3.5 text-[#00A99D]" />
                <span>{tr('Supplier', 'सप्लायर')}</span>
              </button>
              <button
                type="button"
                onClick={() => handleFillDemo('admin')}
                className="p-2.5 rounded-xl border border-[#00A99D]/20 bg-[#F4FCFA] hover:bg-[#E8FFFA] text-center text-xs font-semibold text-[#052E2B] transition-all flex flex-col sm:flex-row items-center justify-center gap-1.5"
              >
                <Shield className="w-3.5 h-3.5 text-[#00A99D]" />
                <span>{tr('Admin', 'एडमिन')}</span>
              </button>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-[#4B6E6A]">
            {tr('New customer?', 'नए ग्राहक हैं?')}{' '}
            <Link href="/book-water" className="font-bold text-[#00A99D] hover:underline inline-flex items-center gap-1">
              {tr('Create account & start delivery', 'नया खाता बनाएं और पानी शुरू करें')} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-[#4B6E6A] hover:text-[#052E2B] font-semibold transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> {tr('Return to Website Home', 'मुख्य होमपेज पर वापस जाएं')}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
