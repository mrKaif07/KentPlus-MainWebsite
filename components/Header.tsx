'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Droplets, Sparkles, ArrowRight, Phone } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/book-event', label: 'Event Water' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
          className={`mx-auto rounded-full transition-all duration-500 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${
            scrolled
              ? 'bg-white/95 backdrop-blur-xl border border-[#00A99D]/20 shadow-[0_12px_36px_-10px_rgba(5,46,43,0.12)] max-w-6xl'
              : 'bg-white/90 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)]'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#052E2B] via-[#00A99D] to-[#36D399] p-0.5 shadow-md shadow-[#00A99D]/25 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#052E2B] rounded-full flex items-center justify-center">
                <Droplets className="w-4 h-4 sm:w-5 sm:h-5 text-[#36D399] fill-[#36D399]/40" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-[#052E2B] leading-none">
                KENT <span className="text-[#00A99D]">PLUS</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#00A99D]/80">
                Pure Water
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3.5 py-1.5 text-xs xl:text-sm font-semibold rounded-full transition-colors duration-200"
                >
                  <span
                    className={`relative z-10 transition-colors ${
                      isActive
                        ? 'text-[#052E2B] font-bold'
                        : 'text-[#052E2B]/70 hover:text-[#00A99D]'
                    }`}
                  >
                    {link.label}
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

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/login"
              className="text-xs sm:text-sm font-bold text-[#052E2B]/75 hover:text-[#00A99D] transition-colors px-3 py-1.5"
            >
              Login
            </Link>
            <Link
              href="/book-water"
              className="inline-flex items-center gap-1.5 px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#00A99D] hover:bg-[#36D399] hover:text-[#052E2B] transition-all duration-300 shadow-md shadow-[#00A99D]/25 hover:shadow-lg hover:shadow-[#00A99D]/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Order Water</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <Link
              href="/book-water"
              className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#00A99D]"
            >
              Order
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-full text-[#052E2B] hover:bg-[#E8FFFA] transition-colors"
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
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-3 mt-2 border-t border-[#E8FFFA] flex flex-col gap-2">
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 rounded-2xl text-sm font-semibold text-center text-[#052E2B]/80 hover:bg-[#E8FFFA]"
                >
                  Portal Login
                </Link>
                <Link
                  href="/book-water"
                  onClick={() => setMobileOpen(false)}
                  className="px-5 py-3 rounded-full text-sm font-bold text-center text-white bg-[#00A99D] hover:bg-[#36D399] shadow-md shadow-[#00A99D]/30"
                >
                  Order Pure Water Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
