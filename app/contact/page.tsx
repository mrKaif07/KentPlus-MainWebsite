'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, Headphones, Waves, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fadeInUp = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Daily Home Delivery Inquiry',
    area: 'Saket',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
                <Headphones className="w-3.5 h-3.5" /> 24/7 Operations Desk
              </span>
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                Get in Touch with <span className="text-[#36D399]">Kent Plus</span>
              </h1>
              <p className="text-base sm:text-lg text-[#E8FFFA]/80 leading-relaxed font-normal">
                Questions about daily home subscriptions, wedding event deliveries, or connecting your housing society? Our South Delhi team is here to assist.
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
                  <h2 className="text-2xl font-black text-[#052E2B] mb-7">Contact Information</h2>

                  <div className="space-y-6">
                    {[
                      { icon: Phone, title: 'Customer Helpline', primary: '+91 98765 43210', sub: '6:00 AM - 9:00 PM Daily' },
                      { icon: Mail, title: 'Email Support', primary: 'info@kentplus.in', sub: 'Orders & Bulk Queries' },
                      { icon: MapPin, title: 'Central Hub & Plant', primary: 'South Delhi Distribution Center', sub: 'Saket, New Delhi - 110017' },
                      { icon: Clock, title: 'Delivery Windows', primary: 'Morning Slot: 6:30 AM – 9:30 AM', sub: 'Evening Slot: 4:30 PM – 8:30 PM' },
                    ].map((item, i) => (
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
                    <h3 className="font-bold text-lg">Instant WhatsApp Coordinator</h3>
                  </div>
                  <p className="text-xs text-[#E8FFFA]/70 leading-relaxed">
                    Need an urgent can delivery or want to report a delivery issue right now? Chat with our live South Delhi dispatch coordinator.
                  </p>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#36D399] text-[#052E2B] font-bold text-xs hover:bg-white transition-all shadow-md"
                  >
                    <span>Chat on WhatsApp</span>
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
                        <h2 className="text-2xl font-black text-[#052E2B] mb-2">Inquiry Received!</h2>
                        <p className="text-[#4B6E6A] max-w-md mx-auto text-sm mb-6">
                          Thank you for contacting Kent Plus. One of our South Delhi operations coordinators will call you back within 30 minutes.
                        </p>
                        <button
                          onClick={() => setSubmitted(false)}
                          className="px-6 py-3 rounded-full bg-[#00A99D] text-white text-xs font-bold shadow-md hover:bg-[#36D399] hover:text-[#052E2B] transition-all"
                        >
                          Send Another Message
                        </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                          <h2 className="text-2xl font-black text-[#052E2B] mb-1">Send Us a Message</h2>
                          <p className="text-xs text-[#4B6E6A]">Fill out the form below and we will get right back to you.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-[#052E2B] mb-1.5">Full Name *</label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="e.g. Rahul Sharma"
                              className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-[#F4FCFA] text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-[#052E2B] mb-1.5">Phone Number *</label>
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
                            <label className="block text-xs font-bold text-[#052E2B] mb-1.5">Email Address</label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="name@example.com"
                              className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-[#F4FCFA] text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-[#052E2B] mb-1.5">Locality in South Delhi</label>
                            <select
                              value={formData.area}
                              onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-[#F4FCFA] text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none"
                            >
                              <option value="Saket">Saket</option>
                              <option value="Malviya Nagar">Malviya Nagar</option>
                              <option value="Lajpat Nagar">Lajpat Nagar</option>
                              <option value="Greater Kailash">Greater Kailash</option>
                              <option value="Vasant Kunj">Vasant Kunj</option>
                              <option value="Hauz Khas">Hauz Khas</option>
                              <option value="South Extension">South Extension</option>
                              <option value="Other">Other Delhi Locality</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#052E2B] mb-1.5">Inquiry Type</label>
                          <select
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-[#F4FCFA] text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none"
                          >
                            <option value="Daily Home Delivery Inquiry">Daily Home Delivery Subscription</option>
                            <option value="Corporate Office Water Supply">Corporate / Office Water Supply</option>
                            <option value="Event / Wedding Bulk Water">Event, Wedding or Party Bulk Order</option>
                            <option value="RWA / Society Agreement">RWA / Society Bulk Agreement</option>
                            <option value="Other Query">Other Query</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#052E2B] mb-1.5">Message / Requirements</label>
                          <textarea
                            rows={4}
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Tell us your requirements (e.g. 2 cans daily on 3rd floor, or 50 cans for a wedding on Sunday)..."
                            className="w-full px-4 py-3 rounded-xl border border-[#00A99D]/30 bg-[#F4FCFA] text-sm text-[#052E2B] focus:ring-2 focus:ring-[#00A99D] outline-none resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full py-3.5 rounded-full bg-[#00A99D] hover:bg-[#36D399] hover:text-[#052E2B] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#00A99D]/20 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <Send className="w-4 h-4" />
                          <span>Submit Inquiry</span>
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
