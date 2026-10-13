'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ArrowRight, Waves } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function FAQPage() {
  const { tr } = useLanguage();
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
    '0-0': true,
    '1-0': true,
    '2-0': true
  });

  const toggle = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const FAQS = [
    {
      category: tr('Ordering & Delivery', 'ऑर्डर और डिलीवरी के नियम'),
      items: [
        {
          q: tr(
            'What are your delivery timings across service areas?',
            'आपके यहां डिलीवरी का क्या समय रहता है?'
          ),
          a: tr(
            'We operate two primary delivery slots across all 14 coverage zones: Morning slot from 6:30 AM to 9:30 AM (ideal for daily home and office consumption before starting the day) and Evening slot from 4:30 PM to 8:30 PM.',
            'हम सभी 14 इलाकों में दो प्रमुख शिफ्ट में पानी पहुंचाते हैं: सुबह की शिफ्ट (6:30 AM से 9:30 AM) — जो घर और ऑफिस में दिन शुरू होने से पहले ताज़ा पानी पाने के लिए सबसे उपयुक्त है; और शाम की शिफ्ट (4:30 PM से 8:30 PM)।'
          )
        },
        {
          q: tr(
            'How does daily water delivery work?',
            'दैनिक (रोज़ाना) पानी डिलीवरी कैसे काम करती है?'
          ),
          a: tr(
            'When you subscribe, our dedicated route driver delivers your chosen count of 20L jars directly to your doorstep according to your schedule (Daily, Alternate Days, or Weekdays). You can pause, change quantity, or request extra cans at any time through the Kent Plus Customer Portal.',
            'जब आप जुड़ते हैं, तो आपके इलाके के तय डिलीवरी बॉय आपकी पसंद के अनुसार (रोज़ाना या एक दिन छोड़कर) सुबह सीधे आपके दरवाज़े तक 20L जार पहुंचाते हैं। आप कभी भी पोर्टल या व्हाट्सएप से जार की संख्या बदल सकते हैं या छुट्टी पर जाने पर सप्लाई रोक सकते हैं।'
          )
        },
        {
          q: tr(
            'What if I live on a higher floor without a lift?',
            'यदि मैं बिना लिफ्ट वाली ऊपरी मंज़िल पर रहता हूँ तो क्या पानी मिलेगा?'
          ),
          a: tr(
            'Our delivery associates are trained and equipped to deliver up to the 4th floor. Please make sure to specify your floor number during registration so we can allocate appropriate route timing.',
            'हाँ, बिल्कुल! हमारे डिलीवरी साथी प्रशिक्षित हैं और चौथी मंज़िल तक आसानी से जार पहुंचाते हैं। बस रजिस्ट्रेशन के समय अपनी मंज़िल (फ्लोर नंबर) ज़रूर बता दें।'
          )
        },
        {
          q: tr(
            'Can I get same-day emergency water deliveries?',
            'क्या अचानक पानी खत्म होने पर उसी दिन एक्स्ट्रा जार मिल सकता है?'
          ),
          a: tr(
            'Yes! Active subscribers can request an emergency top-up directly via the customer portal or WhatsApp helpline. If ordered before 3:00 PM, emergency cans are delivered within 90 minutes across all 14 covered service sectors.',
            'हाँ! हमारे नियमित ग्राहक व्हाट्सएप या पोर्टल पर इमरजेंसी पानी का अनुरोध कर सकते हैं। दोपहर 3:00 बजे से पहले ऑर्डर करने पर 90 मिनट के भीतर आपके घर तक एक्स्ट्रा जार पहुंचा दिया जाता है।'
          )
        },
      ]
    },
    {
      category: tr('Water Quality & Standards', 'पानी की शुद्धता और सरकारी मानक'),
      items: [
        {
          q: tr(
            'How do you ensure water purity and safety?',
            'आप पानी की शुद्धता और सुरक्षा कैसे सुनिश्चित करते हैं?'
          ),
          a: tr(
            'Kent Plus drinking water undergoes a rigorous 7-stage purification process: Micron sediment filtration, activated carbon adsorption, RO membrane demineralization, essential minerals re-infusion (Copper & Magnesium), UV disinfection, and final ozonation. Batch TDS and pH levels are tested daily.',
            'केंट प्लस का पानी 7-चरणीय आधुनिक प्रक्रिया से गुजरता है: माइक्रोन सेडिमेंट, एक्टिवेटेड चारकोल, उच्च गुणवत्ता वाली RO मेम्ब्रेन, तांबा व मैग्नीशियम मिनरल्स जोड़ना, यूवी (UV) डिसइंफेक्शन और ओज़ोनेशन। हर बैच के TDS और pH की रोज़ाना लैब में जांच होती है।'
          )
        },
        {
          q: tr(
            'Are your 20L jars safe and BPA-free?',
            'क्या आपके 20 लीटर के जार सुरक्षित और बीपीए-मुक्त हैं?'
          ),
          a: tr(
            'Absolutely. We only use 100% virgin food-grade, BPA-free polycarbonate containers. Every returning jar is sanitized using automated 4-stage high-pressure jet washing and steam sterilization before refilling.',
            'बिल्कुल! हम केवल 100% फ़ूड-ग्रेड और बीपीए-मुक्त पॉलीकार्बोनेट जार का उपयोग करते हैं। हर खाली जार को भरने से पहले ऑटोमैटिक हाई-प्रेशर स्टीम जेट से धोकर जीवाणु-रहित किया जाता है।'
          )
        },
        {
          q: tr(
            'What is the TDS and pH level of Kent Plus water?',
            'केंट प्लस पानी का TDS और pH स्तर कितना रहता है?'
          ),
          a: tr(
            'We maintain an optimal TDS range between 110 to 140 PPM and a mildly alkaline pH of 7.2 to 7.8, providing a clean, sweet, and crisp drinking experience compliant with BIS IS:14543 standards.',
            'हमारा पानी 110 से 140 PPM TDS और 7.2 से 7.8 pH पर संतुलित रहता है। यह सरकारी बीआईएस (BIS IS:14543) मानकों के अनुसार पीने के लिए सबसे उत्तम, मीठा और पाचक माना जाता है।'
          )
        },
      ]
    },
    {
      category: tr('Billing & Payments', 'बिलिंग और भुगतान (पेमेंट) के तरीके'),
      items: [
        {
          q: tr(
            'Is there a security deposit for the 20L jars?',
            'क्या 20L जार के लिए कोई सिक्योरिटी डिपॉजिट (जमानत राशि) लगती है?'
          ),
          a: tr(
            'A refundable container security deposit of ₹150 per jar is charged on your first delivery. When you return the jars or cancel the subscription, the full deposit is immediately refunded to your original payment mode.',
            'शुरुआत में प्रति जार मात्र ₹150 की रिफंडेबल जमानत राशि ली जाती है। जब भी आप सेवा बंद करके जार वापस करेंगे, आपकी पूरी राशि तुरंत आपके बैंक खाते या नकद वापस कर दी जाती है।'
          )
        },
        {
          q: tr(
            'How does monthly billing work?',
            'मासिक बिलिंग कैसे काम करती है?'
          ),
          a: tr(
            'Every delivery is digitally logged by your delivery driver upon OTP confirmation. At the end of the month, a single itemized invoice is generated in your Customer Portal. You can pay via UPI (Google Pay, PhonePe, Paytm), Net Banking, Cards, or cash on delivery.',
            'हर डिलीवरी की पुष्टि आपके मोबाइल पर ओटीपी या एसएमएस द्वारा दर्ज होती है। महीने के अंत में कुल पिए गए जार का एकमुश्त बिल बनता है, जिसे आप Google Pay, PhonePe, Paytm, नेट बैंकिंग या कैश से आसानी से चुका सकते हैं।'
          )
        },
        {
          q: tr(
            'Can I pause my subscription when going on vacation?',
            'क्या छुट्टी पर जाने पर पानी की सप्लाई रोकी जा सकती है?'
          ),
          a: tr(
            'Yes, with one click in your customer portal! You can set pause dates with zero penalties, and billing is paused automatically for those days.',
            'हाँ, बिल्कुल! पोर्टल में एक क्लिक करके या व्हाट्सएप पर बताकर आप जितने दिन चाहें सप्लाई रोक सकते हैं। उन दिनों का कोई पैसा नहीं लगता।'
          )
        },
      ]
    },
    {
      category: tr('Events & Functions', 'शादी और आयोजनों के लिए थोक पानी'),
      items: [
        {
          q: tr(
            'How many days in advance should I book water for weddings or events?',
            'शादी या बड़े आयोजन के लिए कितने दिन पहले बुकिंग करानी चाहिए?'
          ),
          a: tr(
            'For orders of 20 to 200 cans, 24 to 48 hours notice is ideal. For larger bulk requirements (200+ cans or custom 250ml/500ml packaged bottles with ice boxes), 3 days notice ensures reserved fleet allocation and dedicated venue staff.',
            '20 से 200 जार के लिए 24 से 48 घंटे पहले बताना काफी होता है। 200 से अधिक जार या 250ml बोतलों व आइस बॉक्स के लिए 2-3 दिन पहले बुकिंग कराने से वेन्यू पर बेहतरीन व्यवस्था सुनिश्चित होती है।'
          )
        },
        {
          q: tr(
            'Do you provide dispensers, stands, and paper cups for events?',
            'क्या आप आयोजनों के लिए डिस्पेंसर, स्टैंड और पेपर कप भी देते हैं?'
          ),
          a: tr(
            'Yes! We supply tabletop stands, bottom-load hot & cold dispensers, paper cup dispensers, and chilled water boxes based on your package selection.',
            'हाँ! हम आपकी ज़रूरत अनुसार टेबल-टॉप स्टैंड, गर्म-ठंडे पानी के डिस्पेंसर, डिस्पोज़ेबल पेपर कप और ठंडे पानी के इंसुलेटेड आइस बॉक्स भी साथ में उपलब्ध कराते हैं।'
          )
        },
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#E8FFFA] selection:text-[#00A99D]">
      <Header />

      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative bg-[#052E2B] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden text-center">
          <div className="absolute inset-0 bg-radial-at-t from-[#00A99D]/20 via-[#052E2B] to-[#03211F] pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative max-w-4xl mx-auto px-4 z-10 space-y-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#36D399] border border-[#36D399]/30">
              <HelpCircle className="w-3.5 h-3.5" /> {tr('Frequently Asked Questions', 'अक्सर पूछे जाने वाले सवाल')}
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              {tr('Everything You Need to', 'पानी डिलीवरी से जुड़ी')}{' '}
              <span className="text-[#36D399]">{tr('Know', 'हर ज़रूरी जानकारी')}</span>
            </h1>
            <p className="text-base sm:text-lg text-[#E8FFFA]/80 max-w-2xl mx-auto leading-relaxed">
              {tr(
                'Find answers to common questions about Kent Plus water delivery schedules, quality verification, billing, and event packages.',
                'केंट प्लस की डिलीवरी टाइमिंग, पानी की जांच, पेमेंट के नियम और शादी-इवेंट बुकिंग से जुड़े सभी सवालों के जवाब यहां पाएं।'
              )}
            </p>
          </motion.div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 bg-[#F4FCFA] flex-1">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {FAQS.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1, duration: 0.6 }}
                className="bg-white p-8 rounded-3xl border border-[#00A99D]/20 shadow-md"
              >
                <h2 className="text-xl font-black text-[#052E2B] mb-6 flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-[#00A99D]" />
                  {category.category}
                </h2>

                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => {
                    const key = `${catIndex}-${itemIndex}`;
                    const isOpen = !!openItems[key];
                    return (
                      <div
                        key={itemIndex}
                        className="border border-[#00A99D]/20 rounded-2xl overflow-hidden transition-colors hover:border-[#00A99D]/50"
                      >
                        <button
                          onClick={() => toggle(key)}
                          className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-[#052E2B] text-sm bg-white hover:bg-[#F4FCFA] transition-colors"
                        >
                          <span>{item.q}</span>
                          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                            <ChevronDown className={`w-4 h-4 shrink-0 ${isOpen ? 'text-[#00A99D]' : 'text-[#4B6E6A]'}`} />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#4B6E6A] leading-relaxed border-t border-[#E8FFFA] bg-[#F4FCFA]/50">
                                {item.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}

            {/* Support Callout */}
            <div className="bg-[#052E2B] rounded-3xl p-8 sm:p-10 text-white text-center space-y-4 shadow-xl">
              <h3 className="text-2xl font-black text-white">
                {tr('Still have questions?', 'क्या आपका कोई और सवाल है?')}
              </h3>
              <p className="text-xs sm:text-sm text-[#E8FFFA]/70 max-w-md mx-auto">
                {tr(
                  'Our regional customer support team is available 7 days a week from 6:00 AM to 9:00 PM.',
                  'हमारा स्थानीय कस्टमर सपोर्ट डेस्क सातों दिन सुबह 6:00 से रात 9:00 बजे तक आपकी सेवा में उपलब्ध है।'
                )}
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-[#36D399] text-[#052E2B] hover:bg-white transition-all shadow-md"
                >
                  <span>{tr('Contact Support Desk', 'सपोर्ट डेस्क से संपर्क करें')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+919934005300"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-white/10 hover:bg-white/20 text-[#E8FFFA] border border-[#E8FFFA]/30 transition-all"
                >
                  {tr('Call Helpline: +91 99340 05300', 'हेल्पलाइन पर कॉल करें: +91 99340 05300')}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
