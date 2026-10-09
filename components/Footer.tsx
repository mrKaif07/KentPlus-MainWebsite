'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Droplets, Phone, Mail, MapPin, MessageCircle, Send,
  Globe, Share2, ArrowUp, ArrowRight, ShieldCheck, Sparkles
} from 'lucide-react';

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative bg-[#052E2B] text-white overflow-hidden pt-20 border-t border-[#00A99D]/20">
      {/* Background water ambience blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#00A99D]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#36D399]/5 blur-[100px] pointer-events-none" />

      {/* Top Banner / "Have question? No worries!" Card from reference mockup */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-16 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#03211F] via-[#052E2B] to-[#00A99D]/25 border border-[#00A99D]/30 p-8 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-xl">
          <div className="space-y-2 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#36D399]">
              <Sparkles className="w-3.5 h-3.5 text-[#36D399]" /> 24/7 South Delhi Support
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Have questions? <span className="text-[#36D399]">No worries!</span>
            </h3>
            <p className="text-sm text-[#E8FFFA]/70 max-w-xl">
              Our South Delhi operations desk is ready to help with deliveries, weddings, or custom subscriptions.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 w-full lg:w-auto">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#36D399] text-[#052E2B] hover:bg-white transition-all shadow-lg shadow-[#36D399]/20 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-[#052E2B]" />
              <span>WhatsApp Us</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 text-[#E8FFFA] border border-[#E8FFFA]/20 transition-all hover:-translate-y-0.5"
            >
              <span>Contact Desk</span>
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
                  Pure Water. Delivered With Trust.
                </span>
              </div>
            </Link>

            <p className="text-[#E8FFFA]/65 text-sm leading-relaxed max-w-sm">
              South Delhi&apos;s reliable drinking water partner. 7-stage purified 20-Litre jars delivered daily to homes, offices, and special wedding functions with live tracking.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/919876543210' },
                { icon: Phone, label: 'Helpline', href: 'tel:+919876543210' },
                { icon: Mail, label: 'Email', href: 'mailto:info@kentplus.in' },
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
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Our Plant' },
                { href: '/services', label: 'Our Services' },
                { href: '/service-areas', label: 'Service Areas' },
                { href: '/faq', label: 'FAQ' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
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
              Water Supply
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/services/daily-water', label: 'Daily Home Delivery' },
                { href: '/services/office-water', label: 'Corporate & Offices' },
                { href: '/services/event-water', label: 'Wedding & Receptions' },
                { href: '/book-event', label: 'Bulk Function Booking' },
                { href: '/book-water', label: 'Subscribe 20L Jars' },
              ].map((link) => (
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
              Direct Contact
            </h4>
            <ul className="space-y-4 text-sm text-[#E8FFFA]/70">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#00A99D]/20 border border-[#00A99D]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-3.5 h-3.5 text-[#36D399]" />
                </div>
                <div>
                  <span className="block text-white font-bold">+91 98765 43210</span>
                  <span className="text-[11px] text-[#E8FFFA]/50">6:00 AM - 9:00 PM Daily</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#00A99D]/20 border border-[#00A99D]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-3.5 h-3.5 text-[#36D399]" />
                </div>
                <div>
                  <span className="block text-white font-bold">info@kentplus.in</span>
                  <span className="text-[11px] text-[#E8FFFA]/50">Orders & Inquiries</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#00A99D]/20 border border-[#00A99D]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#36D399]" />
                </div>
                <div>
                  <span className="block text-white font-semibold">South Delhi Central Hub</span>
                  <span className="text-[11px] text-[#E8FFFA]/50">Serving Saket, GK, Hauz Khas & South Ext</span>
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
              © {year ?? 2026} Kent Plus Water Supply Services. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/terms" className="hover:text-[#36D399] transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-[#36D399] transition-colors">
                Privacy Policy
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
