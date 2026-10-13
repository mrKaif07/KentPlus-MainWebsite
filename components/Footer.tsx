'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Droplets, Phone, Mail, MapPin, MessageCircle, Send,
  Globe, Share2, ArrowUp, ArrowRight, ShieldCheck, Sparkles
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { BRAND } from '@/lib/constants';

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);
  const { lang, tr, t } = useLanguage();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const quickLinks = [
    { href: '/', label: tr('Home', 'होम') },
    { href: '/about', label: tr('About Our Plant', 'हमारा प्लांट व कहानी') },
    { href: '/services', label: tr('Our Services', 'हमारी सेवाएं') },
    { href: '/service-areas', label: tr('Service Areas', 'डिलीवरी क्षेत्र') },
    { href: '/faq', label: tr('FAQ', 'सामान्य प्रश्न') },
    { href: '/contact', label: tr('Contact Us', 'संपर्क करें') },
  ];

  const waterServices = [
    { href: '/services/daily-water', label: tr('Daily Home Delivery', 'रोज़ाना घर पर डिलीवरी') },
    { href: '/services/office-water', label: tr('Corporate & Offices', 'ऑफिस व कॉर्पोरेट सप्लाई') },
    { href: '/services/event-water', label: tr('Wedding & Receptions', 'शादी व रिसेप्शन') },
    { href: '/book-event', label: tr('Bulk Function Booking', 'समारोह के लिए थोक बुकिंग') },
    { href: '/book-water', label: tr('Subscribe 20L Jars', '20 लीटर जार सब्सक्राइब करें') },
  ];

  return (
    <footer className="relative bg-[#052E2B] text-white overflow-hidden pt-20 border-t border-[#00A99D]/20">
      {/* Background water ambience blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#00A99D]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#36D399]/5 blur-[100px] pointer-events-none" />

      {/* Top Banner / "Have question? No worries!" Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-16 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#03211F] via-[#052E2B] to-[#00A99D]/25 border border-[#00A99D]/30 p-8 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-xl">
          <div className="space-y-2 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#36D399]">
              <Sparkles className="w-3.5 h-3.5 text-[#36D399]" /> {t('footer_support_badge')}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {t('footer_support_title')} <span className="text-[#36D399]">{t('footer_support_highlight')}</span>
            </h3>
            <p className="text-sm text-[#E8FFFA]/70 max-w-xl">
              {t('footer_support_desc')}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 w-full lg:w-auto">
            <a
              href={`https://wa.me/91${BRAND.rawPhone || '9934005300'}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#36D399] text-[#052E2B] hover:bg-white transition-all shadow-lg shadow-[#36D399]/20 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-[#052E2B]" />
              <span>{t('footer_whatsapp')}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 text-[#E8FFFA] border border-[#E8FFFA]/20 transition-all hover:-translate-y-0.5"
            >
              <span>{t('footer_contact_desk')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#00A99D] to-[#36D399] p-0.5 shadow-lg shadow-[#00A99D]/20">
                <div className="w-full h-full bg-[#052E2B] rounded-2xl flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-[#36D399]" />
                </div>
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white block leading-none">
                  KENT <span className="text-[#36D399]">PLUS</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-bold text-[#00A99D]">
                  {t('footer_tagline')}
                </span>
              </div>
            </Link>

            <p className="text-[#E8FFFA]/65 text-sm leading-relaxed max-w-sm">
              {t('footer_desc')}
            </p>

            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: MessageCircle, label: 'WhatsApp', href: `https://wa.me/91${BRAND.rawPhone || '9934005300'}` },
                { icon: Phone, label: 'Helpline', href: `tel:${BRAND.phone.replace(/\s+/g, '')}` },
                ...(BRAND.email ? [{ icon: Mail, label: 'Email', href: `mailto:${BRAND.email}` }] : []),
                { icon: Globe, label: 'Web', href: '/' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center hover:bg-[#00A99D] hover:border-[#36D399] hover:text-white transition-all text-[#E8FFFA]/70"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#36D399] mb-5">
              {t('footer_quick_links')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#E8FFFA]/65 hover:text-[#36D399] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A99D] group-hover:scale-125 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Water Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#36D399] mb-5">
              {t('footer_water_supply')}
            </h4>
            <ul className="space-y-3">
              {waterServices.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#E8FFFA]/65 hover:text-[#36D399] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A99D] group-hover:scale-125 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#36D399] mb-5">
              {t('footer_direct_contact')}
            </h4>
            <ul className="space-y-4 text-sm text-[#E8FFFA]/70">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#00A99D]/20 border border-[#00A99D]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-3.5 h-3.5 text-[#36D399]" />
                </div>
                <div>
                  <a
                    href={`tel:${BRAND.phone.replace(/\s+/g, '')}`}
                    className="block text-white font-bold hover:text-[#36D399] transition-colors"
                  >
                    {BRAND.phone}
                  </a>
                  <span className="text-[11px] text-[#E8FFFA]/50">{t('footer_timings')}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#00A99D]/20 border border-[#00A99D]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageCircle className="w-3.5 h-3.5 text-[#36D399]" />
                </div>
                <div>
                  <a
                    href={`https://wa.me/91${BRAND.rawPhone || '9934005300'}`}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-white font-bold hover:text-[#36D399] transition-colors"
                  >
                    {tr('WhatsApp Orders', 'व्हाट्सएप ऑर्डर')}
                  </a>
                  <span className="text-[11px] text-[#E8FFFA]/50">{BRAND.phone}</span>
                </div>
              </li>
              {BRAND.email ? (
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00A99D]/20 border border-[#00A99D]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-3.5 h-3.5 text-[#36D399]" />
                  </div>
                  <div>
                    <a href={`mailto:${BRAND.email}`} className="block text-white font-bold hover:text-[#36D399] transition-colors">
                      {BRAND.email}
                    </a>
                    <span className="text-[11px] text-[#E8FFFA]/50">{tr('Orders & Inquiries', 'ऑर्डर एवं पूछताछ')}</span>
                  </div>
                </li>
              ) : null}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#00A99D]/20 border border-[#00A99D]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#36D399]" />
                </div>
                <div>
                  <span className="block text-white font-semibold">{t('footer_hub_title')}</span>
                  <span className="text-[11px] text-[#E8FFFA]/50">{t('footer_hub_desc')}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.08] bg-[#03211F]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8FFFA]/50">
            <p>
              © {year ?? 2026} {t('footer_rights')}
            </p>
            <div className="flex items-center gap-6">
              <Link href="/terms" className="hover:text-[#36D399] transition-colors">
                {t('footer_terms')}
              </Link>
              <Link href="/privacy" className="hover:text-[#36D399] transition-colors">
                {t('footer_privacy')}
              </Link>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Scroll to top"
                className="w-8 h-8 rounded-lg bg-white/[0.08] hover:bg-[#00A99D] flex items-center justify-center text-white transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
