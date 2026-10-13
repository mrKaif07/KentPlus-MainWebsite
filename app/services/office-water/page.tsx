'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Building2, ShieldCheck, Clock, Receipt, Users, Award, CheckCircle2, ArrowRight, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function OfficeWaterPage() {
  const { tr } = useLanguage();

  const benefits = [
    {
      icon: Clock,
      title: tr('Guaranteed Morning Delivery', 'सुबह समय पर डिलीवरी की गारंटी'),
      desc: tr(
        'Deliveries completed before 9:30 AM so your office pantry is stocked before staff arrive.',
        'सुबह 9:30 बजे से पहले पानी पहुंच जाता है, ताकि स्टाफ के आने से पहले पैंट्री पूरी तरह तैयार रहे।'
      )
    },
    {
      icon: Receipt,
      title: tr('Consolidated Monthly GST Invoicing', 'एकमुश्त मासिक जीएसटी बिलिंग'),
      desc: tr(
        'Single tax invoice at month-end with itemized delivery chits and input tax credit compliance.',
        'महीने के अंत में एकमुश्त जीएसटी इनवॉइस, जिससे आपकी कंपनी को पूरा इनपुट टैक्स क्रेडिट (ITC) मिलता है।'
      )
    },
    {
      icon: Users,
      title: tr('Custom Dispenser Setups', 'हॉट एंड कोल्ड वॉटर डिस्पेंसर'),
      desc: tr(
        'Hot & cold bottom-load dispensers provided and maintained for regular corporate plans.',
        'नियमित कॉर्पोरेट प्लान के साथ गर्म व ठंडे पानी के आधुनिक बॉटम-लोड डिस्पेंसर की सुविधा व रखरखाव।'
      )
    },
    {
      icon: Award,
      title: tr('Food-Grade Certified Packaging', 'प्रमाणित फ़ूड-ग्रेड पैकेजिंग'),
      desc: tr(
        'Double-sanitized, BPA-free 20L polycarbonate containers tested weekly for 95% certified purity & optimal TDS.',
        'डबल-स्टीम वॉश, बीपीए-मुक्त 20L पॉलीकार्बोनेट जार — 95% प्रमाणित शुद्धता और सही TDS स्तर की नियमित जांच।'
      )
    }
  ];

  const packages = [
    {
      name: tr('Startup / Small Team', 'स्टार्टअप व छोटी टीम'),
      teams: tr('5 - 15 Members', '5 - 15 सदस्य'),
      cans: tr('3 - 5 Cans / week', '3 - 5 जार / सप्ताह'),
      price: '₹2,400',
      period: tr('per month', 'प्रति माह'),
      features: [
        tr('20L Cans on alternate days', 'एक दिन छोड़कर 20L जार सप्लाई'),
        tr('Standard table-top stand', 'टेबल-टॉप स्टैंड शामिल'),
        tr('Monthly consolidated invoice', 'मासिक एकमुश्त बिल'),
        tr('Digital delivery confirmation', 'डिजिटल डिलीवरी रसीद')
      ],
      popular: false
    },
    {
      name: tr('Growing Corporate', 'मीडियम कंपनी व कॉर्पोरेट'),
      teams: tr('15 - 50 Members', '15 - 50 सदस्य'),
      cans: tr('10 - 20 Cans / week', '10 - 20 जार / सप्ताह'),
      price: '₹5,800',
      period: tr('per month', 'प्रति माह'),
      features: [
        tr('Daily fresh delivery (Mon-Sat)', 'दैनिक ताज़ा डिलीवरी (सोमवार - शनिवार)'),
        tr('1 Free Hot & Cold Dispenser', '1 मुफ़्त हॉट एंड कोल्ड डिस्पेंसर'),
        tr('Dedicated route driver', 'समर्पित रूट डिलीवरी बॉय'),
        tr('Priority same-day emergency top-up', 'इमरजेंसी में तुरंत प्राथमिकता सप्लाई'),
        tr('GST Input Credit Invoice', 'जीएसटी इनपुट टैक्स क्रेडिट बिल')
      ],
      popular: true
    },
    {
      name: tr('Enterprise / Multi-Floor', 'बड़ी कंपनी व बहुमंजिला दफ्तर'),
      teams: tr('50+ Members', '50+ सदस्य'),
      cans: tr('25+ Cans / week', '25+ जार / सप्ताह'),
      price: tr('Custom Quote', 'विशेष रियायती रेट'),
      period: tr('volume discount', 'थोक छूट'),
      features: [
        tr('Multiple dispenser stations', 'हर फ्लोर पर डिस्पेंसर स्टेशन'),
        tr('Floor-wise distribution', 'फ्लोर अनुसार सीधी डिलीवरी'),
        tr('Dedicated account manager', 'समर्पित अकाउंट मैनेजर'),
        tr('Free weekly dispenser sanitization', 'साप्ताहिक मुफ़्त डिस्पेंसर सफाई'),
        tr('Flexible payment terms (Net 30)', 'सुविधाजनक 30 दिन की क्रेडिट पेमेंट')
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#E8FFFA] selection:text-[#00A99D]">
      <Header />

      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative bg-[#052E2B] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-radial-at-t from-[#00A99D]/20 via-[#052E2B] to-[#03211F] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#36D399] border border-[#36D399]/30">
                <Building2 className="w-3.5 h-3.5" /> {tr('B2B Corporate Solutions', 'कॉर्पोरेट एवं ऑफिस समाधान')}
              </span>
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                {tr(
                  'Corporate Water Solutions For Productive Workplaces',
                  'दफ्तरों और कॉर्पोरेट संस्थानों के लिए शुद्ध पेयजल सप्लाई'
                )}
              </h1>
              <p className="text-base sm:text-lg text-[#E8FFFA]/80 leading-relaxed font-normal">
                {tr(
                  'Keep your team energized and hydrated with Kent Plus scheduled morning deliveries, verified drinking water quality, hot & cold dispensers, and transparent GST billing.',
                  'केंट प्लस की समय पर सुबह की डिलीवरी, प्रमाणित शुद्धता, हॉट एंड कोल्ड डिस्पेंसर और पारदर्शी जीएसटी बिलिंग के साथ अपनी टीम को हमेशा एक्टिव रखें।'
                )}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/book-water"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold bg-[#36D399] text-[#052E2B] hover:bg-white transition-all shadow-xl shadow-[#36D399]/20"
                >
                  <span>{tr('Request Corporate Trial', 'कॉर्पोरेट ट्रायल बुक करें')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold bg-white/10 hover:bg-white/20 text-[#E8FFFA] border border-[#E8FFFA]/30 transition-all"
                >
                  <span>{tr('Talk to Corporate Specialist', 'कॉर्पोरेट विशेषज्ञ से बात करें')}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-[#F4FCFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A99D]">
                {tr('Why Businesses Choose Kent Plus', 'कंपनियां केंट प्लस क्यों चुनती हैं')}
              </span>
              <h2 className="text-3xl font-black text-[#052E2B] mt-2">
                {tr('Zero Pantry Disruption, Zero Invoice Headaches', 'पैंट्री में कभी पानी की कमी नहीं, बिलिंग में कोई झंझट नहीं')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-7 rounded-3xl border border-[#00A99D]/20 shadow-md card-hover"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#E8FFFA] text-[#00A99D] flex items-center justify-center mb-4">
                    <b.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#052E2B] mb-2">{b.title}</h3>
                  <p className="text-xs sm:text-sm text-[#4B6E6A] leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing / Packages */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A99D]">
                {tr('Transparent Corporate Plans', 'पारदर्शी कॉर्पोरेट प्लान')}
              </span>
              <h2 className="text-3xl font-black text-[#052E2B] mt-2">
                {tr('Office Water Plans', 'दफ्तरों के लिए वॉटर प्लान्स')}
              </h2>
              <p className="text-sm text-[#4B6E6A] mt-2">
                {tr(
                  'Flexible contracts, pause anytime during office holidays, no lock-in period.',
                  'लचीले प्लान, छुट्टियों में सप्लाई रोकने की सुविधा, कोई जबरन कॉन्ट्रैक्ट नहीं।'
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`relative rounded-3xl p-8 border transition-all ${
                    pkg.popular
                      ? 'border-[#00A99D] bg-[#E8FFFA]/40 shadow-xl ring-2 ring-[#00A99D]'
                      : 'border-[#00A99D]/20 bg-white shadow-md'
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00A99D] text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-sm">
                      {tr('Most Popular', 'सबसे लोकप्रिय')}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-[#052E2B] mb-1">{pkg.name}</h3>
                  <p className="text-xs text-[#4B6E6A] mb-4">{pkg.teams} • {pkg.cans}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-black text-[#052E2B]">{pkg.price}</span>
                    <span className="text-xs text-[#4B6E6A] ml-2">/{pkg.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feat, fi) => (
                      <li key={fi} className="flex items-center gap-2.5 text-xs font-semibold text-[#052E2B]">
                        <Check className="w-4 h-4 text-[#36D399] shrink-0 stroke-[3]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/book-water"
                    className={`block w-full py-3.5 rounded-full text-center font-bold text-xs transition-all ${
                      pkg.popular
                        ? 'bg-[#00A99D] text-white hover:bg-[#36D399] hover:text-[#052E2B] shadow-md shadow-[#00A99D]/20'
                        : 'bg-[#E8FFFA] text-[#052E2B] hover:bg-[#00A99D] hover:text-white'
                    }`}
                  >
                    {tr('Choose', 'चुनें')} {pkg.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#052E2B] text-white text-center">
          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              {tr(
                'Need water across multiple branches or commercial facilities?',
                'कई शाखाओं या बड़े कमर्शियल कैंपस के लिए पानी चाहिए?'
              )}
            </h2>
            <p className="text-[#E8FFFA]/70 text-sm max-w-xl mx-auto">
              {tr(
                'Get centralized corporate billing, multi-location delivery management, and customized SLAs.',
                'एकमुश्त सेंट्रलाइज्ड बिलिंग, कई लोकेशन पर डिलीवरी और विशेष कॉर्पोरेट छूट की सुविधा पाएं।'
              )}
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#36D399] text-[#052E2B] font-bold text-xs sm:text-sm hover:bg-white transition-all shadow-lg"
              >
                <span>{tr('Connect With B2B Sales Manager', 'बी2बी सेल्स मैनेजर से संपर्क करें')}</span>
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
