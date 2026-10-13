'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Droplets, ArrowRight, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const navLinks = [
  { href: '/', key: 'nav_home', label: 'Home' },
  { href: '/about', key: 'nav_about', label: 'About Us' },
  { href: '/services', key: 'nav_services', label: 'Services' },
  { href: '/book-event', key: 'nav_event', label: 'Event Water' },
  { href: '/service-areas', key: 'nav_areas', label: 'Service Areas' },
  { href: '/contact', key: 'nav_contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 px-3 sm:px-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`mx-auto rounded-full transition-all duration-500 px-3.5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${
            scrolled
              ? 'bg-white/95 backdrop-blur-xl border border-[#00A99D]/20 shadow-[0_12px_36px_-10px_rgba(5,46,43,0.12)] max-w-6xl'
              : 'bg-white/90 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)]'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#052E2B] via-[#00A99D] to-[#36D399] p-0.5 shadow-md shadow-[#00A99D]/25 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#052E2B] rounded-full flex items-center justify-center">
                <Droplets className="w-4 h-4 sm:w-5 sm:h-5 text-[#36D399] fill-[#36D399]/40" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-lg font-black tracking-tight text-[#052E2B] leading-none">
                KENT <span className="text-[#00A99D]">PLUS</span>
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-[#00A99D]/80">
                {lang === 'hi' ? 'शुद्ध पेयजल' : 'Pure Water'}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const displayLabel = t(link.key);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-full transition-colors duration-200"
                >
                  <span
                    className={`relative z-10 transition-colors ${
                      isActive
                        ? 'text-[#052E2B] font-bold'
                        : 'text-[#052E2B]/70 hover:text-[#00A99D]'
                    }`}
                  >
                    {displayLabel}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activePillNav"
                      className="absolute inset-0 rounded-full bg-[#E8FFFA] border border-[#00A99D]/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Language Switcher + Login + Order Button */}
          <div className="hidden sm:flex items-center gap-2.5 sm:gap-3">
            {/* Language Switcher Pill */}
            <div
              className="flex items-center rounded-full bg-[#F4FCFA] p-0.5 border border-[#00A99D]/30 shadow-xs"
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
                  lang === 'en'
                    ? 'bg-[#00A99D] text-white shadow-xs'
                    : 'text-[#4B6E6A] hover:text-[#052E2B]'
                }`}
                title="Switch to English (Default)"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('hi')}
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
                  lang === 'hi'
                    ? 'bg-[#00A99D] text-white shadow-xs'
                    : 'text-[#4B6E6A] hover:text-[#052E2B]'
                }`}
                title="हिंदी में अनुवाद करें"
              >
                हिंदी
              </button>
            </div>

            <Link
              href="/login"
              className="text-xs sm:text-sm font-bold text-[#052E2B]/75 hover:text-[#00A99D] transition-colors px-2 py-1.5"
            >
              {t('btn_login')}
            </Link>
            <Link
              href="/book-water"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#00A99D] hover:bg-[#36D399] hover:text-[#052E2B] transition-all duration-300 shadow-md shadow-[#00A99D]/25 hover:shadow-lg hover:shadow-[#00A99D]/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t('btn_order')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex sm:hidden items-center gap-1.5">
            {/* Mobile Language Switcher */}
            <div className="flex items-center rounded-full bg-[#E8FFFA] p-0.5 border border-[#00A99D]/30 text-[11px] font-bold">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  lang === 'en' ? 'bg-[#00A99D] text-white' : 'text-[#4B6E6A]'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('hi')}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  lang === 'hi' ? 'bg-[#00A99D] text-white' : 'text-[#4B6E6A]'
                }`}
              >
                हिं
              </button>
            </div>

            <Link
              href="/book-water"
              className="px-3 py-1.5 rounded-full text-xs font-bold text-white bg-[#00A99D]"
            >
              {lang === 'hi' ? 'ऑर्डर' : 'Order'}
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="p-1.5 rounded-full text-[#052E2B] hover:bg-[#E8FFFA] transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="sm:hidden mt-3 max-w-sm mx-auto bg-white/95 backdrop-blur-2xl rounded-3xl p-5 border border-[#00A99D]/20 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-[#E8FFFA] text-[#00A99D] font-bold border border-[#00A99D]/20'
                        : 'text-[#052E2B]/80 hover:bg-[#E8FFFA]/60'
                    }`}
                  >
                    {t(link.key)}
                  </Link>
                );
              })}

              <div className="pt-3 mt-2 border-t border-[#E8FFFA] flex flex-col gap-2">
                {/* Mobile Language Switcher Row */}
                <div className="flex items-center justify-between px-2 py-1 text-xs">
                  <span className="font-semibold text-[#4B6E6A] flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-[#00A99D]" /> Language / भाषा:
                  </span>
                  <div className="flex items-center rounded-full bg-[#E8FFFA] p-0.5 border border-[#00A99D]/30 font-bold">
                    <button
                      type="button"
                      onClick={() => setLang('en')}
                      className={`px-3 py-1 rounded-full ${lang === 'en' ? 'bg-[#00A99D] text-white' : 'text-[#052E2B]'}`}
                    >
                      English
                    </button>
                    <button
                      type="button"
                      onClick={() => setLang('hi')}
                      className={`px-3 py-1 rounded-full ${lang === 'hi' ? 'bg-[#00A99D] text-white' : 'text-[#052E2B]'}`}
                    >
                      हिंदी
                    </button>
                  </div>
                </div>

                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 rounded-2xl text-sm font-semibold text-center text-[#052E2B]/80 hover:bg-[#E8FFFA]"
                >
                  {t('btn_login')}
                </Link>
                <Link
                  href="/book-water"
                  onClick={() => setMobileOpen(false)}
                  className="px-5 py-3 rounded-full text-sm font-bold text-center text-white bg-[#00A99D] hover:bg-[#36D399] shadow-md shadow-[#00A99D]/30"
                >
                  {t('btn_order')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
