'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function PrivacyPage() {
  const { tr } = useLanguage();

  const sections = [
    {
      icon: Eye,
      title: tr('1. Information We Collect', '1. हम कौन सी जानकारी एकत्र करते हैं'),
      content: tr(
        'We collect your name, delivery address, floor number, phone number, and email address to fulfill water jar deliveries, verify OTP confirmations, generate invoices, and send delivery status alerts. For corporate accounts, GST details are collected solely for billing compliance.',
        'हम पानी जार की सही समय पर डिलीवरी, ओटीपी डिलीवरी सत्यापन, मासिक बिलिंग और एसएमएस अलर्ट भेजने के लिए आपका नाम, पता, मंज़िल संख्या, फ़ोन नंबर और ईमेल दर्ज करते हैं। व्यावसायिक खातों के लिए जीएसटी नंबर सिर्फ बिलिंग नियमों के अनुसार लिया जाता है।'
      ),
    },
    {
      icon: Lock,
      title: tr('2. How Your Data Is Used & Protected', '2. डेटा का उपयोग और सुरक्षा'),
      content: tr(
        'Your contact details are shared strictly with our assigned delivery drivers and dispatch team for route optimization and arrival coordination. We never sell, rent, or license your personal information to third-party telemarketers or advertisers.',
        'आपकी जानकारी केवल हमारे नियुक्त डिलीवरी बॉय और प्लांट टीम के साथ साझा की जाती है ताकि समय पर डिलीवरी हो सके। हम आपकी व्यक्तिगत जानकारी को कभी भी किसी तीसरे पक्ष, विज्ञापनदाता या टेलीमार्केटर को नहीं बेचते।'
      ),
    },
    {
      icon: Shield,
      title: tr('3. Payment & Gateway Security', '3. ऑनलाइन भुगतान सुरक्षा'),
      content: tr(
        'Online transactions made via UPI, credit/debit cards, or net banking are processed directly through PCI-DSS compliant secure payment partners. Kent Plus never stores sensitive payment instrument credentials such as card numbers or CVV codes on our servers.',
        'UPI, बैंक और कार्ड से किए जाने वाले सभी भुगतान पूरी तरह से सुरक्षित और एन्क्रिप्टेड पेमेंट गेटवे द्वारा प्रोसेस होते हैं। केंट प्लस अपने सर्वर पर आपका कार्ड नंबर, सीवीवी या बैंक पासवर्ड कभी सेव नहीं करता।'
      ),
    },
    {
      icon: Mail,
      title: tr('4. Contacting Data Protection Officer', '4. ग्राहक सहायता व डेटा अधिकार'),
      content: tr(
        'For questions regarding your personal information, address updates, or data deletion requests, you may email our data protection desk directly at privacy@kentpluswater.com or reach our customer care line during operating hours.',
        'अपनी व्यक्तिगत जानकारी बदलने, पता अपडेट करने या खाता बंद करने संबंधी किसी भी सहायता के लिए आप हमें सीधे support@kentpluswater.com पर ईमेल कर सकते हैं या हमारे हेल्पलाइन नंबर पर संपर्क कर सकते हैं।'
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#E8FFFA] selection:text-[#00A99D]">
      <Header />

      <main className="flex-1 pt-28 pb-20 relative overflow-hidden bg-gradient-to-b from-[#E8FFFA]/40 via-white to-[#F4FCFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E8FFFA] text-[#00A99D] border border-[#00A99D]/20 mb-3">
              <Shield className="w-3.5 h-3.5" /> {tr('Data Protection & Trust', 'डेटा सुरक्षा व गोपनीयता भरोसा')}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-[#052E2B] tracking-tight">
              {tr('Privacy', 'गोपनीयता')}{' '}
              <span className="gradient-text">{tr('Policy', 'नीति')}</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#4B6E6A] mt-2">
              {tr(
                'Effective Date: October 2026 • Kent Plus Packaged Water Supply Services',
                'लागू तारीख: अक्टूबर 2026 • केंट प्लस पैकेज्ड वाटर सप्लाई सर्विसेज'
              )}
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
              <ArrowLeft className="w-4 h-4" /> {tr('Back to Home', 'होमपेज पर वापस जाएं')}
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
