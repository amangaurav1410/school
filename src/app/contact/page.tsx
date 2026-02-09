'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });


  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <div className="pt-20 overflow-hidden text-[#1A1A1A]">
        {/* Hero Section - Let's Talk */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Animated Background Shapes */}
          <div className="absolute inset-0 z-0 opacity-40">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 90, 0],
                x: [0, 30, 0]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#d0302b]/10 to-transparent rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.1, 1, 1.1],
                rotate: [0, -90, 0],
                y: [0, 40, 0]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-1/4 -left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-[#D6B25E]/10 to-transparent rounded-full blur-3xl"
            />
          </div>

          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              <span className="inline-block px-8 py-2 rounded-full bg-[#d0302b]/10 text-[#d0302b] font-black text-sm tracking-[0.3em] uppercase mb-4 shadow-sm border border-[#d0302b]/10">
                Connect With Us
              </span>
              <h1
                className="text-6xl md:text-8xl lg:text-[10rem] font-black mb-8 leading-[0.85] tracking-tighter text-[#1A1A1A]"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                Let&apos;s <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] via-[#FFA500] to-[#d0302b] drop-shadow-sm">
                  Talk
                </span>
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-gray-500 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: '"Raleway", sans-serif' }}>
                &quot;Every great journey begins with a conversation. <span className="text-[#d0302b]">We&apos;re here to listen.&quot;</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods - Large Visual Blocks */}
        <section className="py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">

              {/* Left Column: Direct info */}
              <div className="lg:col-span-5 space-y-12">
                <div className="space-y-4">
                  <span className="text-[#d0302b] font-black uppercase tracking-[0.4em] text-xs block">Contact Points</span>
                  <h2 className="text-5xl lg:text-7xl font-black text-[#1A1A1A] leading-tight" style={{ fontFamily: '"Raleway", sans-serif' }}>Reach out <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Directly.</span></h2>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {[
                    { title: "Our Location", value: "Hayathnagar, Hyderabad, Telangana", icon: "📍", desc: "Visit our state-of-the-art campus" },
                    { title: "Call Us", value: "+91 90005 68416", icon: "📞", desc: "Mon-Sat, 8:30am - 4:30pm" },
                    { title: "Mail Us", value: "info@mapleford.edu.in", icon: "✉️", desc: "For general & administrative queries" }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                      transition={{ delay: idx * 0.1 }}
                      className="p-10 rounded-[3rem] bg-gray-50 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group"
                    >
                      <div className="flex items-start gap-8">
                        <div className="text-4xl w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{item.title}</p>
                          <p className="text-xl font-black text-[#1A1A1A] transition-colors group-hover:text-[#d0302b]">{item.value}</p>
                          <p className="text-sm font-medium text-gray-500">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="lg:col-span-7 bg-[#FDF6E3] p-12 lg:p-20 rounded-[4rem] shadow-xl relative overflow-hidden border border-[#D6B25E]/20"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D6B25E]/10 rounded-bl-[100%]"></div>

                {!formSubmitted ? (
                  <div className="space-y-12 relative z-10">
                    <div className="space-y-4 text-[#1A1A1A]">
                      <h3 className="text-4xl font-black uppercase tracking-tighter">Send a Message</h3>
                      <p className="text-[#4F4F4F] font-bold">We usually respond within 24 hours.</p>
                    </div>

                    <form
                      className="space-y-8"
                      onSubmit={async (e) => {
                        e.preventDefault();
                        setIsSubmitting(true);
                        try {
                          const res = await fetch('/api/inquiries', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                              parentName: formData.fullName,
                              email: formData.email,
                              contactNumber: 'N/A', // Contact form doesn't have phone, or I should add it
                              childName: 'Contact Form',
                              childDob: new Date().toISOString(),
                              gradeApplying: formData.subject,
                              message: formData.message
                            })
                          });
                          if (res.ok) {
                            setFormSubmitted(true);
                          } else {
                            alert('Submission failed. Please try again.');
                          }
                        } catch (err) {
                          alert('An error occurred.');
                        } finally {
                          setIsSubmitting(false);
                        }
                      }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Full Name</label>
                          <input
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="Your Name"
                            className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-[#1A1A1A] font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d0302b] transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email Address</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="email@example.com"
                            className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-[#1A1A1A] font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d0302b] transition-all"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Subject</label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-[#1A1A1A] font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d0302b] transition-all appearance-none cursor-pointer"
                        >
                          <option>General Inquiry</option>
                          <option>Admissions</option>
                          <option>Careers</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Message</label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="How can we help?"
                          className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 text-[#1A1A1A] font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d0302b] transition-all resize-none"
                        ></textarea>
                      </div>
                      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Submit Now'}
                      </Button>
                    </form>

                  </div>
                ) : (
                  <div className="text-center py-24 space-y-8 relative z-10 text-[#1A1A1A]">
                    <div className="text-8xl">🚀</div>
                    <h3 className="text-4xl font-black">Message Sent Successfully</h3>
                    <p className="text-xl text-[#4F4F4F] max-w-sm mx-auto font-medium">One of our representatives will be in touch with you shortly.</p>
                    <button onClick={() => setFormSubmitted(false)} className="text-[#d0302b] font-black uppercase tracking-widest text-sm border-b-2 border-current">Send another</button>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section >

        {/* Map Section - Full Width */}
        < section className="py-24 bg-white" >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative h-[600px] rounded-[4rem] overflow-hidden shadow-3xl border-8 border-white group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.8242045580665!2d78.5833215!3d17.3333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a1234567890%3A0x1234567890abcdef!2sHayathnagar%2C%20Hyderabad%2C%20Telangana%20500070!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              {/* Floating Map Label */}
              <div className="absolute top-10 right-10 p-10 bg-white rounded-[3rem] shadow-2xl max-w-xs transition-transform group-hover:-translate-y-2 lg:block hidden">
                <div className="space-y-4">
                  <span className="text-[#d0302b] font-black uppercase tracking-widest text-[10px] block">Find Us Here</span>
                  <h4 className="text-2xl font-black leading-tight text-[#1A1A1A]">Hayathnagar <br /> Campus</h4>
                  <p className="text-gray-400 font-medium text-sm">Hayathnagar, Hyderabad, Telangana - 500070</p>
                  <a href="https://maps.google.com" target="_blank" className="inline-block pt-2 text-[#d0302b] font-black text-sm uppercase tracking-widest border-b-2 border-current">Open Maps</a>
                </div>
              </div>
            </div>
          </div>
        </section >
      </div >

      <Footer />
    </div >
  );
}