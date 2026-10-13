'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CalendarHeart, PartyPopper, Building2, Church, Cake, Star, CheckCircle2, ArrowRight, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

const fadeInUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

export default function EventWaterPage() {
  const { tr } = useLanguage();

  const eventTypes = [
    {
      icon: CalendarHeart,
      title: tr('Wedding & Reception', 'शादी और रिसेप्शन'),
      desc: tr(
        'Bulk water supply for wedding ceremonies, catering counters, and guest banquets.',
        'विवाह संस्कार, खान-पान (कैटरिंग) काउंटर और मेहमानों के लिए थोक पानी की पुख्ता व्यवस्था।'
      ),
      color: 'from-[#052E2B] to-[#00A99D]'
    },
    {
      icon: Cake,
      title: tr('Birthday & Anniversary', 'जन्मदिन और सालगिरह'),
      desc: tr(
        'Water cans and customized 250ml bottles for birthday parties of any size.',
        'पारिवारिक दावत और जन्मदिन की पार्टियों के लिए 20L जार और 250ml की सीलबंद बोतलें।'
      ),
      color: 'from-[#00A99D] to-[#36D399]'
    },
    {
      icon: PartyPopper,
      title: tr('Party & Social Gathering', 'पार्टी और सामाजिक उत्सव'),
      desc: tr(
        'House parties, kitty parties, and club get-togethers with chilled dispenser boxes.',
        'होम पार्टी, किट्टी पार्टी और मिलन समारोहों के लिए चिल्ड आइस बॉक्स व डिस्पेंसर।'
      ),
      color: 'from-[#36D399] to-[#00A99D]'
    },
    {
      icon: Building2,
      title: tr('Corporate Conference', 'कॉर्पोरेट सम्मेलन और मीटिंग'),
      desc: tr(
        'Formal business conferences, annual meetings, and team offsites.',
        'बिजनेस कॉन्फ्रेंस, सेमिनार और सालाना बैठकों के लिए प्रीमियम मिनरल पानी।'
      ),
      color: 'from-[#052E2B] to-[#00A99D]'
    },
    {
      icon: Church,
      title: tr('Religious Function & Pooja', 'धार्मिक अनुष्ठान और भंडारा'),
      desc: tr(
        'Bhandaras, temple events, prayer meets, and community langars.',
        'भंडारे, महायज्ञ, मंदिर के उत्सव और सामूहिक भोज के लिए पवित्र व स्वच्छ पेयजल।'
      ),
      color: 'from-[#00A99D] to-[#36D399]'
    },
    {
      icon: Star,
      title: tr('Sports & Cultural Events', 'खेल और सांस्कृतिक कार्यक्रम'),
      desc: tr(
        'Marathons, tournaments, exhibitions, and charity celebrations.',
        'मैराथन, टूर्नामेंट, खेलकूद प्रतियोगिताओं और प्रदर्शनियों के लिए पानी की सप्लाई।'
      ),
      color: 'from-[#36D399] to-[#052E2B]'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#E8FFFA] selection:text-[#00A99D]">
      <Header />

      <main className="overflow-hidden">
        <section className="relative bg-[#052E2B] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-radial-at-t from-[#00A99D]/20 via-[#052E2B] to-[#03211F] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div {...fadeInUp} className="max-w-3xl mx-auto space-y-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#36D399] border border-[#36D399]/30">
                <PartyPopper className="w-3.5 h-3.5" /> {tr('Event Water Supply', 'आयोजनों के लिए थोक पानी सप्लाई')}
              </span>
              <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight">
                {tr('Water for Every', 'हर आयोजन के लिए')}{' '}
                <span className="text-[#36D399]">{tr('Occasion', 'शुद्ध पानी')}</span>
              </h1>
              <p className="text-base sm:text-lg text-[#E8FFFA]/80 max-w-xl mx-auto leading-relaxed">
                {tr(
                  'Weddings, banquets, community gatherings, and religious feasts — we deliver bulk water directly to your venue across all 14 service areas on exact schedule.',
                  'शादी-विवाह, प्रीतिभोज, पारिवारिक समारोह और धार्मिक अनुष्ठान — हम सभी 14 इलाकों में ठीक समय पर सीधे आपके वेन्यू तक थोक पानी पहुंचाते हैं।'
                )}
              </p>
              <div className="pt-2">
                <Link
                  href="/book-event"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold bg-[#36D399] text-[#052E2B] hover:bg-white transition-all shadow-xl shadow-[#36D399]/20"
                >
                  <span>{tr('Book Event Water', 'इवेंट के लिए पानी बुक करें')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A99D]">
                {tr('Specialized Solutions', 'विशेष आयोजन सेवाएं')}
              </span>
              <h2 className="text-3xl font-black text-[#052E2B] mt-2">
                {tr('Events We Serve', 'जिन आयोजनों में हम सेवा देते हैं')}
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventTypes.map((event, i) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-[#F4FCFA] rounded-3xl p-7 border border-[#00A99D]/20 card-hover group"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${event.color} text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                    <event.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#052E2B] mb-2">{event.title}</h3>
                  <p className="text-xs sm:text-sm text-[#4B6E6A] leading-relaxed">{event.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#E8FFFA] py-20 border-y border-[#00A99D]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A99D]">
                {tr('Event Package Amenities', 'इवेंट पैकेज में मिलने वाली सुविधाएं')}
              </span>
              <h2 className="text-3xl font-black text-[#052E2B] mt-2">
                {tr('What We Provide', 'हमारी मुख्य सुविधाएं')}
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                tr('Bulk quantity up to 300+ cans', '300+ जार तक थोक सप्लाई की क्षमता'),
                tr('Venue scheduled morning delivery', 'वेन्यू पर समय से पहले डिलीवरी'),
                tr('Multiple staggered delivery batches', 'दिन में ज़रूरत अनुसार कई बार डिलीवरी'),
                tr('250ml sealed guest bottles', 'मेहमानों के लिए 250ml की सीलबंद बोतलें'),
                tr('Dedicated venue setup support', 'वेन्यू पर जार और स्टैंड व्यवस्थित करना'),
                tr('Insulated chilled ice boxes', 'ठंडे पानी के लिए इंसुलेटेड आइस बॉक्स'),
                tr('100% refund on unopened cans', 'बिना खुले जार पर 100% रिफंड गारंटी'),
                tr('Instant quote within 1 hour', 'मात्र 1 घंटे में तुरंत कोटेशन')
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-[#00A99D]/20 shadow-xs">
                  <Check className="w-4 h-4 text-[#36D399] shrink-0 stroke-[3]" />
                  <span className="text-xs font-bold text-[#052E2B]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#052E2B] py-16 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              {tr('Plan Your Event Water Requirement', 'अपने आयोजन के लिए पानी का हिसाब लगाएं')}
            </h2>
            <p className="text-[#E8FFFA]/70 text-sm max-w-md mx-auto">
              {tr(
                'Fill out our event planner form and receive a customized quote with free venue delivery.',
                'हमारा इवेंट फॉर्म भरें और वेन्यू पर मुफ़्त डिलीवरी के साथ तुरंत कोटेशन पाएं।'
              )}
            </p>
            <div className="pt-2">
              <Link
                href="/book-event"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#36D399] text-[#052E2B] font-bold text-xs sm:text-sm hover:bg-white transition-all shadow-lg"
              >
                <span>{tr('Book Event Water Online', 'ऑनलाइन इवेंट पानी बुक करें')}</span>
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
