'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const sections = [
  {
    icon: Eye,
    title: '1. Information We Collect',
    content:
      'We collect your name, delivery address, floor number, phone number, and email address to fulfill water jar deliveries, verify OTP confirmations, generate invoices, and send delivery status alerts. For corporate accounts, GST details are collected solely for billing compliance.',
  },
  {
    icon: Lock,
    title: '2. How Your Data Is Used & Protected',
    content:
      'Your contact details are shared strictly with our assigned delivery drivers and dispatch team for route optimization and arrival coordination. We never sell, rent, or license your personal information to third-party telemarketers or advertisers.',
  },
  {
    icon: Shield,
    title: '3. Payment & Gateway Security',
    content:
      'Online transactions made via UPI, credit/debit cards, or net banking are processed directly through PCI-DSS compliant secure payment partners. Kent Plus never stores sensitive payment instrument credentials such as card numbers or CVV codes on our servers.',
  },
  {
    icon: Mail,
    title: '4. Contacting Data Protection Officer',
    content:
      'For questions regarding your personal information, address updates, or data deletion requests, you may email our data protection desk directly at privacy@kentpluswater.com or reach our customer care line during operating hours.',
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#E8FFFA] selection:text-[#00A99D]">
      <Header />

      <main className="flex-1 pt-28 pb-20 relative overflow-hidden bg-gradient-to-b from-[#E8FFFA]/40 via-white to-[#F4FCFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E8FFFA] text-[#00A99D] border border-[#00A99D]/20 mb-3">
              <Shield className="w-3.5 h-3.5" /> Data Protection &amp; Trust
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-[#052E2B] tracking-tight">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#4B6E6A] mt-2">
              Effective Date: October 2026 • Kent Plus Packaged Water Supply Services
            </p>
          </motion.div>

          <div className="space-y-6">
            {sections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-6 sm:p-8 rounded-3xl border border-[#00A99D]/20 shadow-md card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#E8FFFA] text-[#00A99D] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-[#052E2B] mb-2">
                        {section.title}
                      </h2>
                      <p className="text-sm text-[#4B6E6A] leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#4B6E6A] hover:text-[#052E2B] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
