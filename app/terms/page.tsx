'use client';

import { motion } from 'framer-motion';
import { Truck, Package, CreditCard, Droplets, ArrowLeft, FileText } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function TermsPage() {
  const { tr } = useLanguage();

  const termsSections = [
    {
      icon: Truck,
      title: tr('1. Delivery Operations & Schedules', '1. डिलीवरी संचालन व समय-सारणी'),
      content: tr(
        'Kent Plus delivers 20-Litre packaged drinking water containers to authorized customer addresses across our designated service zones (including Pakri, Vastu Vihar Pakri, Kodaria, Bathnadeeh, Madhuban, Chamarua, Marwan, Kharauna, Navodya Vidyalaya Kharauna, Sumera, Patahi, Madapur, Bathna Ram, Bhagwanpur, and Yadav Nagar). Standard delivery windows are between 6:00 AM and 12:00 PM (morning slot) and 4:30 PM to 8:30 PM (evening slot). Unforeseen traffic or weather events will be communicated promptly via SMS and the customer portal.',
        'केंट प्लस हमारे सभी सेवा क्षेत्रों (पकड़ी, वास्तु विहार पकड़ी, कोदरिया, बथनाडीह, मधुबन, चमरुआ, मरवन, खरौना, नवोदय विद्यालय खरौना, सुमेरा, पताही, माड़ापुर, बथना राम, भगवानपुर, और यादव नगर) में ग्राहकों के पते पर 20 लीटर मिनरल वाटर जार पहुंचाता है। सुबह की नियमित डिलीवरी 6:00 AM से 12:00 PM और शाम की 4:30 PM से 8:30 PM के बीच होती है। मौसम या सड़क संबंधी किसी भी देरी की सूचना तुरंत एसएमएस द्वारा दी जाती है।'
      ),
    },
    {
      icon: Package,
      title: tr('2. Container Security Deposits & Ownership', '2. जार सिक्योरिटी व स्वामित्व नियम'),
      content: tr(
        'All 20L polycarbonate containers remain the property of Kent Plus Water Supply Services. A refundable container security deposit of ₹150 per jar is collected upon account setup. When the subscription ends and all undamaged jars are collected, the deposit is refunded in full within 48 hours to the customer bank account or UPI ID.',
        'सभी 20L जार केंट प्लस वाटर सप्लाई सर्विसेज की संपत्ति हैं। खाता शुरू करते समय प्रति जार ₹150 की वापसी योग्य सिक्योरिटी ली जाती है। जब ग्राहक अपनी सर्विस बंद करते हैं और खाली जार सही सलामत वापस करते हैं, तो पूरी सिक्योरिटी राशि 48 घंटे के भीतर बैंक खाते या UPI में वापस कर दी जाती है।'
      ),
    },
    {
      icon: CreditCard,
      title: tr('3. Monthly Invoicing & Billing Terms', '3. मासिक बिलिंग व भुगतान की शर्तें'),
      content: tr(
        'Monthly ledgers are finalized on the last day of each calendar month based on recorded deliveries. Payments are due within 7 days of invoice generation. Customers may pay conveniently via UPI, Net Banking, Credit/Debit cards, or cash to authorized drivers against instant digital receipts.',
        'महीने का कुल बिल महीने की अंतिम तारीख को हुई डिलीवरी के आधार पर बनता है। बिल जारी होने के 7 दिनों के भीतर भुगतान किया जाना चाहिए। ग्राहक UPI, ऑनलाइन बैंकिंग, कार्ड या डिलीवरी बॉय को नकद भुगतान करके तुरंत डिजिटल रसीद प्राप्त कर सकते हैं।'
      ),
    },
    {
      icon: Droplets,
      title: tr('4. Quality Assurance & Replacements', '4. पानी की शुद्धता गारंटी व तत्काल रिप्लेसमेंट'),
      content: tr(
        'Every container is sealed with tamper-evident caps and batch QR codes. In the rare event of transit damage or broken seal upon arrival, the delivery person will replace the jar immediately free of charge.',
        'प्रत्येक 20L जार सुरक्षा सील और बैच क्यूआर कोड के साथ पैक किया जाता है। यदि डिलीवरी के समय किसी जार की सील टूटी पाई जाती है या जार क्षतिग्रस्त होता है, तो डिलीवरी बॉय बिना किसी अतिरिक्त शुल्क के तुरंत दूसरा जार प्रदान करेगा।'
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
              <FileText className="w-3.5 h-3.5" /> {tr('Service Agreement', 'सेवा नियम व अनुबंध')}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-[#052E2B] tracking-tight">
              {tr('Terms &', 'नियम व')}{' '}
              <span className="gradient-text">{tr('Conditions', 'शर्तें')}</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#4B6E6A] mt-2">
              {tr(
                'Last Updated: October 2026 • Kent Plus Water Supply Services, Central Hub',
                'अंतिम अपडेट: अक्टूबर 2026 • केंट प्लस वाटर सप्लाई सर्विसेज, मुख्य प्लांट'
              )}
            </p>
          </motion.div>

          <div className="space-y-6">
            {termsSections.map((section, idx) => {
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
