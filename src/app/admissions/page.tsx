'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Admissions() {
  const [formData, setFormData] = useState({
    parentName: '',
    contactNumber: '',
    email: '',
    childName: '',
    childDob: '',
    gradeApplying: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <div className="pt-20 overflow-hidden">
        {/* Hero Section - Maximum Impact */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Animated Background Shapes */}
          <div className="absolute inset-0 z-0">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                x: [0, 50, 0]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#D6B25E]/10 to-[#FFA500]/5 rounded-full blur-3xl opacity-70"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [0, -90, 0],
                x: [0, -50, 0]
              }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-1/4 -left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-[#d0302b]/5 to-transparent rounded-full blur-3xl opacity-70"
            />
          </div>

          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstripe-light.png')] opacity-[0.05]"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              <span className="inline-block px-8 py-2 rounded-full bg-[#d0302b]/10 text-[#d0302b] font-black text-sm tracking-[0.3em] uppercase mb-4 shadow-sm border border-[#d0302b]/10">
                Join Our Legacy
              </span>
              <h1
                className="text-6xl md:text-8xl lg:text-[10rem] font-black mb-8 leading-[0.85] tracking-tighter text-[#1A1A1A]"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                Admissions <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] via-[#FFA500] to-[#d0302b] drop-shadow-sm">
                  2024-25
                </span>
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-[#1A1A1A] max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Begin your journey at <span className="text-[#d0302b]">Mapleford.</span> Discover a world where potential is celebrated.
              </p>

              <div className="flex flex-wrap gap-6 justify-center pt-8">
                <Link href="#enquiry-form" className="px-12 py-5 rounded-2xl font-black text-xl text-white shadow-2xl hover:scale-105 transition-all"
                  style={{ background: 'linear-gradient(135deg, #d0302b 0%, #8d211d 100%)' }}>
                  Apply Now
                </Link>
                <Link href="/campus" className="px-12 py-5 border-2 border-[#d0302b] text-[#d0302b] rounded-2xl font-black text-xl hover:bg-[#d0302b] hover:text-white transition-all">
                  Tour Campus
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Admission Process - Vertical Step High-impact */}
        <section className="py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24 space-y-6">
              <span className="text-[#d0302b] font-black uppercase tracking-[0.4em] text-xs block">The Road to Mapleford</span>
              <h2 className="text-5xl lg:text-7xl font-black text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Admission <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Process</span>
              </h2>
              <p className="text-2xl text-gray-500 font-light max-w-3xl mx-auto">A transparent and welcoming journey designed for a smooth transition.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Enquiry & Visit", desc: "Fill the enquiry form or visit our campus to experience the environment firsthand.", color: "bg-blue-50/50" },
                { step: "02", title: "Interaction", desc: "A friendly interaction with the student and parents to align with our philosophy.", color: "bg-purple-50/50" },
                { step: "03", title: "Documentation", desc: "Submission of required documents including birth certificate and previous records.", color: "bg-orange-50/50" },
                { step: "04", title: "Final Admission", desc: "Complete fee formalities and orientation to welcome the student into the family.", color: "bg-green-50/50" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className={`${item.color} p-12 rounded-[3rem] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden`}
                >
                  <div className="text-7xl font-black text-[#d0302b] opacity-10 mb-8 absolute -right-4 -top-4 group-hover:scale-150 transition-transform duration-700">{item.step}</div>
                  <div className="relative z-10">
                    <div className="text-4xl font-black text-[#d0302b] mb-6">{item.step}</div>
                    <h3 className="text-2xl font-black mb-4 text-[#1A1A1A]">{item.title}</h3>
                    <p className="text-gray-500 text-lg leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fee Structure - Premium Table-like Design */}
        <section className="py-32 bg-[#FDF6E3]/30 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24 space-y-6">
              <span className="text-[#d0302b] font-black uppercase tracking-[0.4em] text-xs block">Investment in Value</span>
              <h2 className="text-5xl lg:text-7xl font-black text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Fee <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Structure</span>
              </h2>
              <p className="text-2xl text-gray-500 font-light max-w-3xl mx-auto">Transparent and inclusive, designed for world-class standards.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                { grade: "Pre-School", range: "Pre-Nursery to KG", tuition: "₹1.2L", admission: "₹25K", color: "from-blue-50 to-white" },
                { grade: "Elementary", range: "Grades 1–5", tuition: "₹1.5L", admission: "₹30K", color: "from-red-50 to-white", best: true },
                { grade: "High School", range: "Grades 6–10", tuition: "₹1.8L", admission: "₹35K", color: "from-amber-50 to-white" }
              ].map((plan, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className={`relative bg-gradient-to-br ${plan.color} p-12 rounded-[4rem] border shadow-xl flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-500 ${plan.best ? 'border-[#d0302b] ring-4 ring-[#d0302b]/5 scale-105 z-10' : 'border-gray-100'}`}
                >
                  {plan.best && <div className="absolute top-8 bg-[#d0302b] text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest">Most Popular</div>}
                  <h3 className="text-4xl font-black text-[#1A1A1A] mt-6 mb-2 uppercase tracking-tighter">{plan.grade}</h3>
                  <p className="text-sm font-bold text-[#d0302b] mb-8 uppercase tracking-widest opacity-80">{plan.range}</p>
                  <div className="mb-10">
                    <span className="text-6xl font-black text-[#1A1A1A]">{plan.tuition}</span>
                    <span className="text-gray-400 font-bold ml-2">/ YEAR</span>
                  </div>
                  <div className="w-full h-[1px] bg-gray-200 mb-10"></div>
                  <div className="space-y-4 text-gray-500 font-medium text-lg w-full text-left ml-4">
                    <p>• CBSE Curriculum</p>
                    <p>• Global Programs</p>
                    <p>• Health & Fitness</p>
                    <p>• Skill-based Labs</p>
                  </div>
                  <div className="mt-12 w-full">
                    <Link href="#enquiry-form" className={`block w-full py-5 rounded-2xl font-black text-lg transition-transform hover:scale-[1.02] ${plan.best ? 'bg-[#1A1A1A] text-white' : 'bg-white border-2 border-gray-100 text-[#1A1A1A]'}`}>
                      Apply Now
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Fine Print Card */}
            <div className="mt-16 p-10 bg-white rounded-[3rem] shadow-xl border border-gray-100 flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="space-y-2">
                <p className="text-xl font-black text-[#1A1A1A]">Need a detailed breakup?</p>
                <p className="text-gray-500 font-medium">Connect with our financial office for special scholarship details.</p>
              </div>
              <Link href="/contact" className="px-10 py-4 bg-[#D6B25E] text-white rounded-2xl font-black hover:bg-[#c4a155] transition-colors whitespace-nowrap">Talk to Us</Link>
            </div>
          </div>
        </section>

        {/* Application Form - Redesigned for High Conversion */}
        <section id="enquiry-form" className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <span className="text-[#d0302b] font-black uppercase tracking-[0.4em] text-sm block mb-4">Admissions Inbox</span>
                <h2 className="text-5xl lg:text-8xl font-black text-[#1A1A1A] leading-[0.9] mb-10" style={{ fontFamily: '"Raleway", sans-serif' }}>
                  Begin Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Application</span>
                </h2>
                <div className="space-y-8">
                  <p className="text-xl text-gray-500 font-light leading-relaxed">Fill out this secure enquiry form, and our admissions office will reach back within 24 hours.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 group hover:border-[#d0302b]/30 transition-all">
                      <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Call Office</p>
                      <p className="text-xl font-black text-[#d0302b]">+91 90005 68416</p>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 group hover:border-[#d0302b]/30 transition-all">
                      <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Email Admin</p>
                      <p className="text-xl font-black text-[#d0302b]">info@mapleford.edu.in</p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-12 rounded-[4rem] shadow-3xl border border-gray-100 relative"
              >
                {!formSubmitted ? (
                  <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Guardian Name</label>
                        <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#d0302b] focus:bg-white transition-all text-[#1A1A1A] font-bold" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Phone Number</label>
                        <input type="tel" placeholder="+91 000 000 0000" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#d0302b] focus:bg-white transition-all text-[#1A1A1A] font-bold" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Child Name</label>
                      <input type="text" placeholder="Aiden Smith" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#d0302b] focus:bg-white transition-all text-[#1A1A1A] font-bold" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Grade Applying</label>
                        <select className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#d0302b] focus:bg-white transition-all text-[#1A1A1A] font-bold uppercase tracking-widest text-xs">
                          <option>Select Grade</option>
                          <option>Pre-School</option>
                          <option>Elementary (1-5)</option>
                          <option>Middle (6-8)</option>
                          <option>High (9-10)</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Child DOB</label>
                        <input type="date" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#d0302b] focus:bg-white transition-all text-[#1A1A1A] font-bold" />
                      </div>
                    </div>
                    <button type="submit" className="w-full py-5 bg-gradient-to-r from-[#d0302b] to-[#8d211d] text-white rounded-2xl font-black text-xl shadow-2xl hover:scale-[1.01] transition-all">Submit Application</button>
                    <p className="text-center text-[10px] font-bold text-gray-300 uppercase tracking-widest">Safe & Secure encrypted Channel</p>
                  </form>
                ) : (
                  <div className="text-center py-20 space-y-6">
                    <div className="text-8xl">✨</div>
                    <h3 className="text-4xl font-black text-[#1A1A1A]">Inquiry Sent!</h3>
                    <p className="text-xl text-gray-500 font-medium">Our admissions officer will call you shortly.</p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}