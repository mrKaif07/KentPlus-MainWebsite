'use client';

import { motion } from 'framer-motion';
import {
  Droplets, Target, Eye, Heart, Truck, Cpu, MapPin, Shield, Waves,
  Award, Sparkles, CheckCircle2, ArrowRight, Check, Users, Clock, Flame
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

const fadeInUp = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export default function AboutPage() {
  const { tr } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#E8FFFA] selection:text-[#00A99D]">
      <Header />

      <main className="overflow-hidden">
        {/* 1. Hero */}
        <section className="relative bg-[#052E2B] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-radial-at-t from-[#00A99D]/20 via-[#052E2B] to-[#03211F] pointer-events-none" />
          <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#36D399]/10 blur-[120px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <motion.div {...fadeInUp} className="max-w-3xl mx-auto space-y-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#36D399] border border-[#36D399]/30">
                <Waves className="w-3.5 h-3.5" /> {tr('Our Journey of Purity', 'शुद्धता का हमारा सफर')}
              </span>
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                {tr('The Kent Plus', 'केंट प्लस की')} <span className="text-[#36D399]">{tr('Brand Story', 'सच्ची कहानी')}</span>
              </h1>
              <p className="text-base sm:text-lg text-[#E8FFFA]/80 leading-relaxed font-normal">
                {tr(
                  'Combining traditional doorstep neighborhood service with certified laboratory-grade purification across 15+ service sectors since 2024.',
                  '2024 से 15+ इलाकों में भरोसेमंद घर-घर सेवा और आधुनिक लैब-प्रमाणित शुद्धिकरण का बेहतरीन संगम।'
                )}
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. Our Story */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <motion.div {...fadeInUp} className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A99D]">
                  {tr('Our Origin', 'हमारी शुरुआत')}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#052E2B] tracking-tight">
                  {tr('Pure Water.', 'शुद्ध पानी।')} <span className="gradient-text">{tr('Reliable Delivery.', 'भरोसेमंद डिलीवरी।')}</span>
                </h2>
                <p className="text-base text-[#4B6E6A] leading-relaxed">
                  {tr(
                    'Kent Plus was founded with a straightforward conviction: clean, pure drinking water should be effortless, completely transparent, and backed by accountable local supply.',
                    'केंट प्लस की शुरुआत एक स्पष्ट सोच के साथ हुई: हर परिवार और प्रतिष्ठान को बिना किसी परेशानी के, पूरी पारदर्शिता के साथ शुद्ध और सेहतमंद पीने का पानी मिलना चाहिए।'
                  )}
                </p>
                <p className="text-base text-[#4B6E6A] leading-relaxed">
                  {tr(
                    'What began as a dedicated local community supply initiative has expanded into a reputable network serving over 542 active households, institutions, and businesses across 15 service areas, delivering more than 10,000 cans every single month.',
                    'एक छोटे से इलाके से शुरू हुआ यह सफर आज 15+ क्षेत्रों के 542 से अधिक परिवारों और दफ्तरों का भरोसेमंद साथी बन चुका है, जहां हर महीने 10,000 से अधिक जार समय पर पहुंचाए जाते हैं।'
                  )}
                </p>
                <div className="pt-2 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#E8FFFA] text-[#00A99D] flex items-center justify-center font-bold text-lg">
                    2+
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#052E2B] block">
                      {tr('Years of Daily Consistency', 'सालों से अटूट नियमितता')}
                    </span>
                    <span className="text-xs text-[#4B6E6A]">
                      {tr(
                        'Serving Bhagwanpur, Marwan, Kharauna, Patahi & 15+ Service Areas',
                        'भगवानपुर, मरवां, खरौना, पताही सहित 15+ इलाकों में निरंतर सेवा'
                      )}
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-6"
              >
                <div className="bg-[#F4FCFA] rounded-[2.5rem] p-8 sm:p-10 border border-[#00A99D]/20 shadow-xl">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { value: '542+', label: tr('Active Customers', 'संतुष्ट ग्राहक') },
                      { value: '1,284', label: tr('Daily Jars Delivered', 'दैनिक जार डिलीवरी') },
                      { value: '15+', label: tr('Active Service Areas', 'एक्टिव सर्विस इलाके') },
                      { value: '95%', label: tr('Certified Purity Rating', 'प्रमाणित शुद्धता रेटिंग') },
                    ].map((stat) => (
                      <div key={stat.value + stat.label} className="bg-white p-5 rounded-2xl border border-[#00A99D]/15 text-center shadow-xs">
                        <p className="text-3xl font-black text-[#052E2B] tracking-tight">{stat.value}</p>
                        <p className="text-xs font-semibold text-[#00A99D] mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. Our Plant & Purification Process */}
        <section className="py-20 lg:py-28 bg-[#E8FFFA] border-y border-[#00A99D]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-6"
              >
                <div className="bg-[#052E2B] rounded-[2.5rem] p-8 text-white space-y-6 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#00A99D]/20 rounded-full blur-3xl pointer-events-none" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#36D399]">
                    {tr('Facility Infrastructure', 'प्लांट की सुविधाएं')}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    {tr('Central Water Purification & Bottling Facility', 'केंद्रीय वाटर प्यूरिफिकेशन एवं बॉटलिंग प्लांट')}
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm text-[#E8FFFA]/80">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#36D399] shrink-0 mt-0.5" />
                      <span>{tr('316L Food-Grade Stainless Steel multi-barrier vessels', '316L फ़ूड-ग्रेड स्टेनलेस स्टील मल्टी-स्टेज फ़िल्ट्रेशन टैंक')}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#36D399] shrink-0 mt-0.5" />
                      <span>{tr('High-throughput Reverse Osmosis membrane demineralization', 'उच्च क्षमता वाली रिवर्स ऑस्मोसिस (RO) मेम्ब्रेन तकनीक')}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#36D399] shrink-0 mt-0.5" />
                      <span>{tr('Continuous ultraviolet disinfection & ozonation loop', 'पराबैंगनी (UV) कीटाणुनाशक और ओज़ोनेशन प्रक्रिया')}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#36D399] shrink-0 mt-0.5" />
                      <span>{tr('Automated 4-stage steam jet can washing before every refill', 'हर रिफिल से पहले 4-चरणीय हाई प्रेशर स्टीम द्वारा जार की धुलाई')}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A99D]">
                  {tr('Purification Standards', 'शुद्धता के मानक')}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#052E2B] tracking-tight">
                  {tr('Certified Laboratory', 'प्रमाणित प्रयोगशाला की')} <span className="gradient-text">{tr('Rigour', 'सख्त जांच')}</span>
                </h2>
                <p className="text-base text-[#4B6E6A] leading-relaxed">
                  {tr(
                    'Unlike conventional unmonitored tanker suppliers, Kent Plus operations follow strict BIS IS:14543 packaged drinking water standards with daily in-house laboratory testing.',
                    'साधारण टैंकर या असुरक्षित पानी के विपरीत, केंट प्लस सरकारी बीआईएस (BIS IS:14543) मानकों के तहत रोज़ाना इन-हाउस लैब टेस्टिंग करता है।'
                  )}
                </p>
                <p className="text-base text-[#4B6E6A] leading-relaxed">
                  {tr(
                    'Every batch is calibrated to retain 110 to 140 PPM TDS with optimal Magnesium, Calcium, and Copper electrolytes, delivering crisp taste and vital biological hydration.',
                    'हर बैच में 110 से 140 PPM TDS और शरीर के लिए आवश्यक तांबा, मैग्नीशियम और कैल्शियम मिनरल्स का सही संतुलन रहता है, जिससे पानी मीठा व सेहतमंद बनता है।'
                  )}
                </p>
                <div className="pt-2">
                  <Link
                    href="/book-water"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#00A99D] hover:bg-[#36D399] hover:text-[#052E2B] text-white transition-all shadow-md"
                  >
                    <span>{tr('Start Daily Home Supply', 'घर के लिए रोज़ाना पानी शुरू करें')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. Values */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A99D]">
                {tr('Core Principles', 'हमारे बुनियादी सिद्धांत')}
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#052E2B] mt-2 tracking-tight">
                {tr('What', 'हमारी मुख्य')} <span className="gradient-text">{tr('Drives Us', 'प्राथमिकताएं')}</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  icon: Heart,
                  title: tr('Customer First', 'ग्राहक सर्वोपरि'),
                  desc: tr('No locked contracts, transparent ledger tracking, and one-click holiday pause anytime.', 'कोई ज़बरदस्ती का कॉन्ट्रैक्ट नहीं, पारदर्शी ऑनलाइन हिसाब और छुट्टी पर जाने पर कभी भी सप्लाई रोकने की आज़ादी।')
                },
                {
                  icon: Truck,
                  title: tr('6:30 AM Delivery', 'सुबह 6:30 बजे डिलीवरी'),
                  desc: tr('Rain or shine, our dedicated morning route drivers reach your doorstep before your day begins.', 'मौसम चाहे जैसा हो, हमारे डिलीवरी बॉय आपका दिन शुरू होने से पहले ताज़ा पानी पहुंचा देते हैं।')
                },
                {
                  icon: Shield,
                  title: tr('BPA-Free Virgin Cans', '100% बीपीए-मुक्त सुरक्षित जार'),
                  desc: tr('We only refill certified food-grade polycarbonate containers, replaced every 90 cycles.', 'हम केवल फ़ूड-ग्रेड पॉलीकार्बोनेट जार का उपयोग करते हैं, जिन्हें समय-समय पर नए जार से बदला जाता है।')
                },
                {
                  icon: Cpu,
                  title: tr('Smart App Ledger', 'स्मार्ट डिजिटल हिसाब'),
                  desc: tr('Real-time SMS alerts, OTP verification, and consolidated monthly invoices in your portal.', 'एसएमएस अलर्ट, ओटीपी पुष्टि और महीने के अंत में एकमुश्त स्पष्ट बिल।')
                },
              ].map((val) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#F4FCFA] rounded-3xl p-7 border border-[#00A99D]/20 card-hover text-center group"
                >
                  <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-white text-[#00A99D] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#00A99D] group-hover:text-white transition-all duration-300">
                    <val.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-[#052E2B] mb-2">{val.title}</h3>
                  <p className="text-xs sm:text-sm text-[#4B6E6A] leading-relaxed">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Final About CTA */}
        <section className="bg-[#052E2B] py-20 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              {tr('Experience 95% Certified Purity with', 'अनुभव करें 95% प्रमाणित शुद्धता')} <span className="text-[#36D399]">{tr('Kent Plus', 'केंट प्लस के साथ')}</span>
            </h2>
            <p className="text-[#E8FFFA]/70 text-sm sm:text-base max-w-xl mx-auto">
              {tr('Try our complimentary 20L trial can on day one with zero security risk.', 'बिना किसी परेशानी के पहले दिन 20L का ट्रायल जार लेकर देखें।')}
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/book-water"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold bg-[#36D399] text-[#052E2B] hover:bg-white transition-all shadow-xl shadow-[#36D399]/25"
              >
                <span>{tr('Order Water Online', 'ऑनलाइन पानी ऑर्डर करें')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold bg-white/10 hover:bg-white/20 text-[#E8FFFA] border border-[#E8FFFA]/30 transition-all"
              >
                <span>{tr('Talk to Local Coordinator', 'लोकल कोऑर्डिनेटर से बात करें')}</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
