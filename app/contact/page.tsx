'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, Headphones, Waves, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { BRAND } from '@/lib/constants';

const fadeInUp = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export default function ContactPage() {
  const { tr } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Daily Home Delivery Inquiry',
    area: 'Bhagwanpur',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const areasList = [
    { value: 'Pakri', label: tr('Pakri', 'पकड़ी (Pakri)') },
    { value: 'Vastu Vihar Pakri', label: tr('Vastu Vihar Pakri', 'वास्तु विहार पकड़ी (Vastu Vihar Pakri)') },
    { value: 'Kodaria', label: tr('Kodaria', 'कोदरिया (Kodaria)') },
    { value: 'Bathnadeeh', label: tr('Bathnadeeh', 'बथनाडीह (Bathnadeeh)') },
    { value: 'Madhuban', label: tr('Madhuban', 'मधुबन (Madhuban)') },
    { value: 'Chamarua', label: tr('Chamarua', 'चमरुआ (Chamarua)') },
    { value: 'Marwan', label: tr('Marwan', 'मरवां (Marwan)') },
    { value: 'Kharauna', label: tr('Kharauna', 'खरौना (Kharauna)') },
    { value: 'Navodya Vidyalaya Kharauna', label: tr('Navodya Vidyalaya Kharauna', 'नवोदय विद्यालय खरौना') },
    { value: 'Sumera', label: tr('Sumera', 'सुमेरा (Sumera)') },
    { value: 'Patahi', label: tr('Patahi', 'पताही (Patahi)') },
    { value: 'Madapur', label: tr('Madapur', 'माड़ापुर (Madapur)') },
    { value: 'Bathna Ram', label: tr('Bathna Ram', 'बथना राम (Bathna Ram)') },
    { value: 'Bhagwanpur', label: tr('Bhagwanpur', 'भगवानपुर (Bhagwanpur)') },
    { value: 'Yadav Nagar', label: tr('Yadav Nagar', 'यादव नगर (Yadav Nagar)') },
    { value: 'Other Nearby Area', label: tr('Other Nearby Area', 'अन्य निकटवर्ती इलाका') },
  ];

  const inquiryTypes = [
    { value: 'Daily Home Delivery Inquiry', label: tr('Daily Home Delivery Subscription', 'घर के लिए रोज़ाना पानी') },
    { value: 'Corporate Office Water Supply', label: tr('Corporate / Office Water Supply', 'ऑफिस / संस्थान के लिए पानी') },
    { value: 'Event / Wedding Bulk Water', label: tr('Event, Wedding or Party Bulk Order', 'शादी, पार्टी या उत्सव के लिए थोक पानी') },
    { value: 'RWA / Society Agreement', label: tr('RWA / Society Bulk Agreement', 'सोसायटी / कॉलोनी सप्लाई') },
    { value: 'Other Query', label: tr('Other Query', 'अन्य सवाल') },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#E8FFFA] selection:text-[#00A99D]">
      <Header />

      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative bg-[#052E2B] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-radial-at-t from-[#00A99D]/20 via-[#052E2B] to-[#03211F] pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <motion.div {...fadeInUp} className="max-w-3xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#36D399] border border-[#36D399]/30">
                <Headphones className="w-3.5 h-3.5" /> {tr('24/7 Operations Desk', '24/7 सहायता डेस्क')}
              </span>
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                {tr('Get in Touch with', 'संपर्क करें')}{' '}
                <span className="text-[#36D399]">{tr('Kent Plus', 'केंट प्लस से')}</span>
              </h1>
              <p className="text-base sm:text-lg text-[#E8FFFA]/80 leading-relaxed font-normal">
                {tr(
                  'Questions about daily home subscriptions, wedding event deliveries, or bulk institution supply? Our dedicated local operations team is here to assist.',
                  'रोज़ाना घर के पानी, शादी-विवाह की थोक सप्लाई या ऑफिस प्लान से संबंधित किसी भी सवाल के लिए हमारी स्थानीय टीम हमेशा उपलब्ध है।'
                )}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-[#F4FCFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Contact details */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-5 space-y-6"
              >
                <div className="bg-white p-8 rounded-3xl border border-[#00A99D]/20 shadow-lg">
                  <h2 className="text-2xl font-black text-[#052E2B] mb-7">
                    {tr('Contact Information', 'संपर्क सूत्र')}
                  </h2>

                  <div className="space-y-6">
                    {[
                      {
                        icon: Phone,
                        title: tr('Customer Helpline', 'कस्टमर हेल्पलाइन'),
                        primary: BRAND.phone,
                        sub: tr('6:00 AM - 9:00 PM Daily', 'सुबह 6:00 से रात 9:00 बजे तक (रोज़ाना)')
                      },
                      ...(BRAND.email ? [{
                        icon: Mail,
                        title: tr('Email Support', 'ईमेल सपोर्ट'),
                        primary: BRAND.email,
                        sub: tr('Orders & Bulk Queries', 'ऑर्डर एवं थोक पूछताछ')
                      }] : [{
                        icon: Mail,
                        title: tr('Email Support', 'ईमेल सपोर्ट'),
                        primary: tr('Available Soon (Email Pending)', 'जल्द उपलब्ध होगा (ईमेल लंबित)'),
                        sub: tr('Contact via Phone or WhatsApp for inquiries', 'ऑर्डर व पूछताछ हेतु फोन या व्हाट्सएप पर संपर्क करें')
                      }]),
                      {
                        icon: MapPin,
                        title: tr('Main Plant & Central Operations', 'मेन प्लांट एवं वितरण संचालन'),
                        primary: tr('Main Plant: Near Pakri River', 'मेन प्लांट: पकड़ी नदी के पास'),
                        sub: tr('Muzaffarpur • Serving Bhagwanpur, Marwan, Kharauna, Patahi & 15+ areas', 'मुजफ्फरपुर • भगवानपुर, मरवां, खरौना, पताही सहित 15+ इलाकों में सेवा')
                      },
                      {
                        icon: Clock,
                        title: tr('Delivery Windows', 'डिलीवरी का समय'),
                        primary: tr('Morning Slot: 6:30 AM – 9:30 AM', 'सुबह की शिफ्ट: 6:30 AM – 9:30 AM'),
                        sub: tr('Evening Slot: 4:30 PM – 8:30 PM', 'शाम की शिफ्ट: 4:30 PM – 8:30 PM')
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#E8FFFA] text-[#00A99D] flex items-center justify-center shrink-0">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#052E2B] text-sm">{item.title}</h3>
                          <p className="text-[#00A99D] font-bold text-sm mt-0.5">{item.primary}</p>
                          <p className="text-xs text-[#4B6E6A] mt-0.5">{item.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp card */}
                <div className="bg-[#052E2B] text-white p-8 rounded-3xl border border-[#00A99D]/30 shadow-xl space-y-4">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-6 h-6 text-[#36D399]" />
                    <h3 className="font-bold text-lg">
                      {tr('Instant WhatsApp Coordinator', 'व्हाट्सएप पर तुरंत बातचीत')}
                    </h3>
                  </div>
                  <p className="text-xs text-[#E8FFFA]/70 leading-relaxed">
                    {tr(
                      'Need an urgent can delivery or want to report a delivery issue right now? Chat with our live dispatch coordinator.',
                      'तुरंत एक्स्ट्रा पानी चाहिए या किसी समस्या की शिकायत करनी है? सीधे हमारे व्हाट्सएप कोऑर्डिनेटर से बात करें।'
                    )}
                  </p>
                  <a
                    href={`https://wa.me/91${BRAND.rawPhone || '9934005300'}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#36D399] text-[#052E2B] font-bold text-xs hover:bg-white transition-all shadow-md"
                  >
                    <span>{tr('Chat on WhatsApp', 'व्हाट्सएप पर बात करें')}</span>
                    <Send className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>

              {/* Contact form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-7"
              >
                <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#00A99D]/20 shadow-lg">
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="text-center py-12"
                      >
                        <div className="w-16 h-16 rounded-3xl bg-[#E8FFFA] text-[#00A99D] flex items-center justify-center mx-auto mb-5 shadow-md">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-black text-[#052E2B] mb-2">
                          {tr('Inquiry Received!', 'संदेश प्राप्त हुआ!')}
                        </h2>
                        <p className="text-[#4B6E6A] max-w-md mx-auto text-sm mb-6">
                          {tr(
                            'Thank you for contacting Kent Plus. One of our operations coordinators will call you back within 30 minutes.',
                            'केंट प्लस से संपर्क करने के लिए धन्यवाद। हमारे कोऑर्डिनेटर 30 मिनट के भीतर आपसे संपर्क करेंगे।'
                          )}
                        </p>
                        <button
                          onClick={() => setSubmitted(false)}
                          className="px-6 py-3 rounded-full bg-[#00A99D] text-white text-xs font-bold shadow-md hover:bg-[#36D399] hover:text-[#052E2B] transition-all"
                        >
                          {tr('Send Another Message', 'दूसरा संदेश भेजें')}
                        </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                          <h2 className="text-2xl font-black text-[#052E2B] mb-1">
                            {tr('Send Us a Message', 'हमें संदेश भेजें')}
                          </h2>
                          <p className="text-xs text-[#4B6E6A]">
                            {tr(
                              'Fill out the form below and we will get right back to you.',
                              'नीचे दिया गया फॉर्म भरें, हमारी टीम तुरंत आपसे संपर्क करेगी।'
                            )}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-[#052E2B] mb-1.5">
                              {tr('Full Name *', 'पूरा नाम *')}
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder={tr('e.g. Rahul Sharma', 'उदा. राहुल शर्मा')}
                              className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-[#F4FCFA] text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-[#052E2B] mb-1.5">
                              {tr('Phone Number *', 'मोबाइल नंबर *')}
                            </label>
                            <input
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="e.g. +91 98111 22334"
                              className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-[#F4FCFA] text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-[#052E2B] mb-1.5">
                              {tr('Email Address', 'ईमेल पता')}
                            </label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="name@example.com"
                              className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-[#F4FCFA] text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-[#052E2B] mb-1.5">
                              {tr('Locality / Service Area', 'इलाका / सर्विस एरिया')}
                            </label>
                            <select
                              value={formData.area}
                              onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-[#F4FCFA] text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none"
                            >
                              {areasList.map((a) => (
                                <option key={a.value} value={a.value}>{a.label}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#052E2B] mb-1.5">
                            {tr('Inquiry Type', 'पूछताछ का विषय')}
                          </label>
                          <select
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-[#F4FCFA] text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none"
                          >
                            {inquiryTypes.map((t) => (
                              <option key={t.value} value={t.value}>{t.label}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#052E2B] mb-1.5">
                            {tr('Message / Requirements', 'आपका संदेश / ज़रूरत का ब्योरा')}
                          </label>
                          <textarea
                            rows={4}
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder={tr(
                              'Tell us your requirements (e.g. 2 cans daily on 3rd floor, or 50 cans for a wedding on Sunday)...',
                              'अपनी ज़रूरत बताएं (उदा. तीसरी मंज़िल पर रोज़ाना 2 जार, या रविवार को शादी के लिए 50 जार)...'
                            )}
                            className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-[#F4FCFA] text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full py-3.5 rounded-full bg-[#00A99D] hover:bg-[#36D399] hover:text-[#052E2B] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#00A99D]/20 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <Send className="w-4 h-4" />
                          <span>{tr('Submit Inquiry', 'पूछताछ भेजें')}</span>
                        </button>
                      </form>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
