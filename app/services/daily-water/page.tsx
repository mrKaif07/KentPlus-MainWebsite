'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GlassWater, Clock, CreditCard, Calendar, BarChart3, CheckCircle2, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function DailyWaterPage() {
  const { tr } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#E8FFFA] selection:text-[#00A99D]">
      <Header />

      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative bg-[#052E2B] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-radial-at-t from-[#00A99D]/20 via-[#052E2B] to-[#03211F] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <motion.div {...fadeInUp} className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#36D399]/30 text-[#36D399] text-xs font-bold uppercase tracking-wider">
                  <GlassWater className="w-3.5 h-3.5" /> {tr('Daily Home Delivery Service', 'घर पर दैनिक पानी डिलीवरी')}
                </div>
                <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight">
                  {tr('Fresh Water at Your Door,', 'हर दिन आपके दरवाज़े पर')}{' '}
                  <span className="text-[#36D399]">{tr('Every Day', 'ताज़ा और शुद्ध पानी')}</span>
                </h1>
                <p className="text-base sm:text-lg text-[#E8FFFA]/80 max-w-xl leading-relaxed">
                  {tr(
                    'Get clean, 7-stage purified 20L drinking water cans delivered to your home daily across Bhagwanpur, Marwan, Kharauna, and 15+ coverage sectors. Choose your preferred morning time slot and payment mode.',
                    'भगवानपुर, मरवां, खरौना सहित 15+ इलाकों में हर सुबह 7-चरणीय RO शुद्ध 20 लीटर पानी का जार घर तक। अपनी पसंद का समय चुनें और आसान तरीके से भुगतान करें।'
                  )}
                </p>
                <div className="pt-2">
                  <Link
                    href="/book-water"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold bg-[#36D399] text-[#052E2B] hover:bg-white transition-all shadow-xl shadow-[#36D399]/20"
                  >
                    <span>{tr('Start Daily Supply', 'दैनिक सप्लाई शुरू करें')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-5"
              >
                <div className="bg-white rounded-3xl p-8 border border-[#00A99D]/20 shadow-2xl text-center text-[#052E2B] space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-[#E8FFFA] text-[#00A99D] flex items-center justify-center shadow-md">
                    <GlassWater className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black">{tr('20L Mineral Water Jar', '20L मिनरल वाटर जार')}</h3>
                    <p className="text-3xl font-black text-[#00A99D] mt-1">₹50<span className="text-xs font-normal text-[#4B6E6A]"> {tr('/ can', '/ जार')}</span></p>
                  </div>
                  <div className="space-y-2 text-left pt-2 border-t border-[#E8FFFA]">
                    {[
                      tr('Daily doorstep 6:30 AM delivery', 'रोज़ाना सुबह 6:30 बजे घर तक डिलीवरी'),
                      tr('Flexible 1–10 cans/trip', '1 से 10 जार अपनी ज़रूरत अनुसार'),
                      tr('100% refundable deposit', '100% रिफंडेबल जार सिक्योरिटी'),
                      tr('Pause anytime on vacation', 'छुट्टी पर जाने पर कभी भी सप्लाई रोकें'),
                      tr('Dedicated route driver assigned', 'आपके इलाके का समर्पित डिलीवरी बॉय'),
                    ].map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs font-semibold text-[#052E2B]">
                        <Check className="w-3.5 h-3.5 text-[#36D399] shrink-0 stroke-[3]" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 bg-[#F4FCFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A99D]">
                {tr('Convenience Features', 'आसान व सुविधाजनक सेवाएं')}
              </span>
              <h2 className="text-3xl font-black text-[#052E2B] mt-2">
                {tr('How Daily Home Delivery Works', 'दैनिक पानी डिलीवरी कैसे काम करती है')}
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Calendar,
                  title: tr('Consistent Schedule', 'नियमित समय पर डिलीवरी'),
                  desc: tr('Water cans placed outside your door before 9:30 AM every morning without fail.', 'हर सुबह 9:30 बजे से पहले आपके दरवाज़े पर पानी के जार बिना किसी नागा पहुंचा दिए जाते हैं।')
                },
                {
                  icon: GlassWater,
                  title: tr('Custom Quantity', 'ज़रूरत अनुसार जार'),
                  desc: tr('Order 1 to 5 cans per trip. Change your quantity anytime from the customer portal.', 'प्रतिदिन 1 से 5 जार मंगाएं। कभी भी पोर्टल या व्हाट्सएप से संख्या बदलें।')
                },
                {
                  icon: CreditCard,
                  title: tr('Simple Billing', 'आसान व पारदर्शी बिलिंग'),
                  desc: tr('Pay per delivery or monthly consolidated ledger via UPI, Cards, or Cash.', 'रोज़ाना प्रति जार या महीने के अंत में एकमुश्त यूपीआई, कार्ड या कैश से भुगतान करें।')
                },
                {
                  icon: Clock,
                  title: tr('Morning Slot Guarantee', 'सुबह की शिफ्ट की गारंटी'),
                  desc: tr('Choose between 6:30–9:30 AM or evening slots to match your household routine.', 'अपनी सुविधानुसार सुबह 6:30-9:30 बजे या शाम की शिफ्ट चुनें।')
                },
                {
                  icon: BarChart3,
                  title: tr('Real-Time Ledger', 'डिजिटल रिकॉर्ड'),
                  desc: tr('Every jar delivered is logged via SMS OTP so you only pay for what you consume.', 'हर जार की डिलीवरी एसएमएस व ओटीपी द्वारा दर्ज होती है, ताकि आप केवल पिए गए पानी का ही पैसा दें।')
                },
                {
                  icon: ShieldCheck,
                  title: tr('Quality Assurance', 'क्वालिटी की पक्की गारंटी'),
                  desc: tr('Every container is sealed with tamper-evident caps and tested for optimal TDS.', 'हर जार पर सीलबंद कैप होती है और सही TDS व pH के साथ जांचा जाता है।')
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-7 border border-[#00A99D]/20 shadow-md card-hover"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#E8FFFA] text-[#00A99D] flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#052E2B] mb-1.5">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#4B6E6A] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#052E2B] py-16 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              {tr('Start Receiving Pure Water From Tomorrow', 'कल से ही शुद्ध पानी पाना शुरू करें')}
            </h2>
            <p className="text-sm text-[#E8FFFA]/70 max-w-lg mx-auto">
              {tr(
                'Setup takes under 3 minutes with zero paperwork and instant driver allocation.',
                'बिना किसी कागज़ी झंझट के मात्र 3 मिनट में रजिस्ट्रेशन पूरा करें।'
              )}
            </p>
            <div className="pt-2">
              <Link
                href="/book-water"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#36D399] text-[#052E2B] hover:bg-white transition-all shadow-lg"
              >
                <span>{tr('Register for Daily Delivery', 'दैनिक डिलीवरी के लिए रजिस्टर करें')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
