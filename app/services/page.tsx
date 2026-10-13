'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  GlassWater, Building2, CalendarHeart, PartyPopper, Package,
  ArrowRight, CheckCircle2, Waves, Sparkles, Check
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

const fadeInUp = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export default function ServicesPage() {
  const { tr } = useLanguage();

  const services = [
    {
      icon: GlassWater,
      title: tr('Daily Water Supply', 'रोज़ाना घर पर पानी सप्लाई'),
      subtitle: tr('Residential Household Deliveries', 'घरों के लिए नियमित सप्लाई'),
      desc: tr(
        'Pure 20L drinking water cans delivered to your doorstep every morning across Bhagwanpur, Marwan, Kharauna, and 15+ coverage sectors. Pick your time slot, enjoy flexible quantity, and view your ledger online.',
        'भगवानपुर, मरवां, खरौना सहित 15+ इलाकों में हर सुबह 20 लीटर ताज़ा पानी का जार सीधे आपके दरवाज़े तक। अपनी पसंद का समय चुनें और ऑनलाइन आसान हिसाब रखें।'
      ),
      features: [
        tr('Daily doorstep morning delivery', 'रोज़ाना सुबह घर तक ताज़ा डिलीवरी'),
        tr('Flexible 1–10 cans/day', '1 से 10 जार प्रतिदिन की सुविधा'),
        tr('Pause anytime on vacation', 'छुट्टी पर जाने पर कभी भी सप्लाई रोकें'),
        tr('Complimentary trial can on day 1', 'पहले दिन ट्रायल जार की सुविधा')
      ],
      href: '/services/daily-water',
      badge: tr('Popular for Homes', 'घरों के लिए सबसे लोकप्रिय'),
    },
    {
      icon: Building2,
      title: tr('Office & Corporate Supply', 'ऑफिस और कॉर्पोरेट सप्लाई'),
      subtitle: tr('Workplaces & Commercial Teams', 'दफ्तर व संस्थान'),
      desc: tr(
        'Keep staff energized with scheduled deliveries before 9:30 AM, hot & cold bottom-load dispensers, and consolidated monthly GST invoices.',
        'कर्मचारियों के लिए सुबह 9:30 बजे से पहले समय पर ताज़ा पानी, हॉट एंड कोल्ड डिस्पेंसर और महीने के अंत में एकमुश्त जीएसटी बिल।'
      ),
      features: [
        tr('Pre-9:30 AM arrival guarantee', 'सुबह 9:30 से पहले पहुंचने की गारंटी'),
        tr('Hot & cold dispensers included', 'हॉट एंड कोल्ड वॉटर डिस्पेंसर उपलब्ध'),
        tr('Single monthly GST tax credit invoice', 'टैक्स इनपुट के लिए मासिक जीएसटी बिल'),
        tr('Priority same-day top-ups', 'ज़रूरत पड़ने पर प्राथमिकता के साथ एक्स्ट्रा पानी')
      ],
      href: '/services/office-water',
      badge: tr('B2B GST Invoicing', 'जीएसटी इनवॉइस सुविधा'),
    },
    {
      icon: CalendarHeart,
      title: tr('Wedding & Reception Supply', 'शादी और रिसेप्शन के लिए पानी'),
      subtitle: tr('Celebrations & Banquets', 'विवाह और उत्सव'),
      desc: tr(
        'Bulk water arrangements for marriages, receptions, and community ceremonies across Bhagwanpur, Marwan, Kharauna, and all 14 service areas. Free credit on unopened returns.',
        'शादी-विवाह, रिसेप्शन और सामूहिक आयोजनों के लिए थोक पानी की व्यवस्था। जितने जार नहीं खुलेंगे, उनका पूरा पैसा वापस।'
      ),
      features: [
        tr('Up to 300+ cans capacity', '300+ जार तक सप्लाई करने की क्षमता'),
        tr('250ml guest bottles available', 'मेहमानों के लिए 250ml की सीलबंद बोतलें'),
        tr('Venue loading dock coordination', 'वेन्यू पर समय से पहले व्यवस्थित डिलीवरी'),
        tr('100% credit on unopened returns', 'बिना खुले जार पर शत-प्रतिशत रिफंड')
      ],
      href: '/services/event-water',
      badge: tr('Zero Risk Guarantee', '100% रिफंड गारंटी'),
    },
    {
      icon: PartyPopper,
      title: tr('Functions & Social Events', 'पार्टी और धार्मिक उत्सव'),
      subtitle: tr('Birthdays, Poojas & Seminars', 'दावत, पूजा और सम्मेलन'),
      desc: tr(
        'From private birthdays and club parties to temple bhandaras, we deliver chilled boxes, paper cups, and high-flow dispensers right to your venue.',
        'जन्मदिन, तिलक, पारिवारिक पार्टी से लेकर मंदिर के भंडारे तक — हम ठंडे पानी के बक्से, डिस्पेंसर और पेपर कप के साथ पानी पहुंचाते हैं।'
      ),
      features: [
        tr('Quick 24-hr booking turnaround', 'मात्र 24 घंटे में तुरंत बुकिंग'),
        tr('Chilled ice boxes provided', 'बर्फ के बक्से (चिल्ड बॉक्स) की सुविधा'),
        tr('Eco-friendly paper cups', 'पर्यावरण-अनुकूल पेपर कप उपलब्ध'),
        tr('Multiple delivery batches', 'दिन में ज़रूरत अनुसार कई बार डिलीवरी')
      ],
      href: '/book-event',
      badge: tr('Flexible Setup', 'आसान व्यवस्था'),
    },
    {
      icon: Package,
      title: tr('Bulk & Society Supply', 'सोसायटी एवं थोक सप्लाई'),
      subtitle: tr('RWA & Multi-Tower Agreements', 'कॉलोनी व संस्थान'),
      desc: tr(
        'Subsidized rates and dedicated delivery personnel for residential colonies, institutions, schools, and commercial establishments across our 14 service sectors.',
        'हॉस्टल, स्कूल, बड़ी सोसायटियों और संस्थानों के लिए विशेष रियायती दरें और समर्पित डिलीवरी बॉय।'
      ),
      features: [
        tr('Subsidized tiered pricing', 'बड़ी मात्रा पर विशेष रियायती रेट'),
        tr('Dedicated locality delivery boy', 'इलाके का समर्पित डिलीवरी बॉय'),
        tr('Consolidated society billing', 'सोसायटी के लिए एकमुश्त मासिक बिल'),
        tr('Direct truck dispatch', 'डायरेक्ट गाड़ी द्वारा माल की डिलीवरी')
      ],
      href: '/contact',
      badge: tr('Volume Discount', 'थोक छूट'),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#E8FFFA] selection:text-[#00A99D]">
      <Header />

      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative bg-[#052E2B] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-radial-at-t from-[#00A99D]/20 via-[#052E2B] to-[#03211F] pointer-events-none" />
          <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#36D399]/10 blur-[120px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <motion.div {...fadeInUp} className="max-w-3xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#36D399] border border-[#36D399]/30">
                <Waves className="w-3.5 h-3.5" /> {tr('Tailored Hydration Plans', 'आपकी ज़रूरत अनुसार पेयजल प्लान')}
              </span>
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                {tr('Water Supply', 'पेयजल सप्लाई')}{' '}
                <span className="text-[#36D399]">{tr('Solutions', 'समाधान')}</span>
              </h1>
              <p className="text-base sm:text-lg text-[#E8FFFA]/80 leading-relaxed font-normal">
                {tr(
                  'From daily family home delivery to 300-can wedding supply, Kent Plus delivers 95% certified pure mineral water on your exact schedule.',
                  'घर के रोज़ाना पानी से लेकर शादी के 300 जार तक — केंट प्लस आपके तय समय पर 95% प्रमाणित शुद्ध मिनरल पानी पहुंचाता है।'
                )}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 lg:py-28 bg-[#F4FCFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-[#00A99D]/20 shadow-md card-hover group">
                  <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                      <div className="w-16 h-16 rounded-2xl bg-[#E8FFFA] text-[#00A99D] flex items-center justify-center shrink-0 border border-[#00A99D]/20 group-hover:scale-105 group-hover:bg-[#00A99D] group-hover:text-white transition-all duration-300 shadow-md">
                        <service.icon className="w-8 h-8" />
                      </div>
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-3">
                          <h2 className="text-2xl font-black text-[#052E2B] group-hover:text-[#00A99D] transition-colors">
                            {service.title}
                          </h2>
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E8FFFA] text-[#00A99D] border border-[#00A99D]/20">
                            {service.badge}
                          </span>
                        </div>
                        <p className="text-sm text-[#4B6E6A] max-w-2xl leading-relaxed">
                          {service.desc}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-2.5 pt-2">
                          {service.features.map((feat) => (
                            <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-[#052E2B]">
                              <Check className="w-4 h-4 text-[#36D399] shrink-0 stroke-[3]" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="shrink-0 pt-4 lg:pt-0 w-full lg:w-auto">
                      <Link
                        href={service.href}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#00A99D] hover:bg-[#36D399] hover:text-[#052E2B] text-white transition-all shadow-md shadow-[#00A99D]/20"
                      >
                        <span>{tr('Explore & Order', 'देखें और ऑर्डर करें')}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#052E2B] py-20 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              {tr('Not sure which water plan fits best?', 'समझ नहीं आ रहा कौन सा प्लान सही रहेगा?')}
            </h2>
            <p className="text-[#E8FFFA]/70 text-sm max-w-lg mx-auto">
              {tr(
                'Our regional operations team will calculate your ideal can frequency and allocate your nearest route delivery driver.',
                'हमारी टीम आपके परिवार या ऑफिस के अनुसार सही प्लान चुनने में मदद करेगी और आपके इलाके के डिलीवरी बॉय को जोड़ेगी।'
              )}
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/book-water"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold bg-[#36D399] text-[#052E2B] hover:bg-white transition-all shadow-xl shadow-[#36D399]/25"
              >
                <span>{tr('Book 20L Daily Can', '20L रोज़ाना पानी बुक करें')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+919934005300"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold bg-white/10 hover:bg-white/20 text-[#E8FFFA] border border-[#E8FFFA]/30 transition-all"
              >
                <span>{tr('Call Helpline (+91 99340 05300)', 'हेल्पलाइन पर कॉल करें (+91 99340 05300)')}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
