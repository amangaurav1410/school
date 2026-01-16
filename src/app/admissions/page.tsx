'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <div className="pt-24 min-h-screen bg-white text-[#1A1A1A]">
          {/* Hero Section - Redesigned */}
          <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-[#FDF6E3] via-white to-[#8B1E1A]/5">
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#D6B25E]/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#8B1E1A]/10 rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="inline-block px-6 py-2 rounded-full bg-[#8B1E1A]/10 text-[#8B1E1A] font-bold text-sm tracking-wider uppercase mb-6">Join Our Legacy</span>
                  <h1
                    className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
                    style={{ fontFamily: '"Raleway", sans-serif' }}
                  >
                    Begin Your Journey at <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B1E1A] to-[#D6B25E]">Mapleford</span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                    Discover a world of excellence where every child's potential is nurtured and celebrated.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="#enquiry-form">
                      <Button variant="primary" size="md">Apply Now</Button>
                    </a>
                    <Button href="/campus" variant="outline" size="md">Tour Campus</Button>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3]">
                    <img
                      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
                      className="w-full h-full object-cover"
                      alt="Happy Students"
                    />
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#D6B25E]/20 rounded-full blur-3xl -z-10"></div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Admission Process - The 'Why' & 'How' */}
          <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-12 lg:sticky lg:top-32"
                >
                  <h2 className="text-5xl lg:text-6xl font-black leading-tight" style={{ fontFamily: '"Raleway", sans-serif' }}>The Admission <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Process</span></h2>
                  <div className="w-24 h-2 bg-[#8B1E1A] rounded-full"></div>
                  <p className="text-xl text-gray-600 leading-relaxed italic">
                    We believe in a transparent and welcoming admission journey. It's not just an application; it's the first step into a community that values wisdom and wonder.
                  </p>
                  <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3] relative group">
                    <img
                      src="https://images.unsplash.com/photo-1523050335192-ce1dee31570f?w=800&h=600&fit=crop"
                      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                      alt="School Campus"
                    />
                    <div className="absolute inset-0 bg-[#1A1A1A]/20"></div>
                  </div>
                </motion.div>

                <div className="space-y-16">
                  {[
                    { step: "01", title: "Enquiry & Visit", desc: "Fill the enquiry form (at the bottom of this page) or visit our campus in Hayathnagar to experience the environment firsthand." },
                    { step: "02", title: "Interaction & Assessment", desc: "A friendly interaction with the student and parents to understand aspirations and align with school's philosophy." },
                    { step: "03", title: "Documentation", desc: "Submission of required documents including birth certificate, T.C., and previous academic records." },
                    { step: "04", title: "Formal Admission", desc: "Completion of fee formalities and orientation to welcome the student into the Mapleford family." }
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-10 group"
                    >
                      <div className="text-6xl font-black text-[#D6B25E]/20 group-hover:text-[#D6B25E]/40 transition-colors shrink-0" style={{ fontFamily: '"Raleway", sans-serif' }}>{step.step}</div>
                      <div className="pt-4">
                        <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                        <p className="text-lg text-gray-600 leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Eligibility & Criteria */}
          <section className="py-32 bg-[#FDF6E3]/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20 text-[#1A1A1A]">
                <h2 className="text-4xl lg:text-6xl font-black mb-6" style={{ fontFamily: '"Raleway", sans-serif' }}>Eligibility <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Guidelines</span></h2>
                <p className="text-xl opacity-70 italic max-w-2xl mx-auto">Helping you find the right level for your child's growth and maturity.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { level: "Nursery", age: "3 Years", desc: "Developing basic motor skills and social comfort.", color: "bg-[#8B1E1A]" },
                  { level: "Preparatory", age: "4-5 Years", desc: "Focusing on phonetics, numeracy, and active play.", color: "bg-[#D6B25E]" },
                  { level: "Elementary", age: "6+ Years", desc: "Transitioning into structured academic inquiry.", color: "bg-[#1A1A1A]" }
                ].map((card, i) => (
                  <div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform">
                    <div className={`w-12 h-12 ${card.color} rounded-2xl mb-8`}></div>
                    <h4 className="text-3xl font-bold mb-2">{card.level}</h4>
                    <p className="text-[#8B1E1A] font-bold mb-6">Completion of {card.age}</p>
                    <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Document Checklist */}
          <section className="py-32 bg-white">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <h2 className="text-4xl lg:text-5xl font-black mb-12" style={{ fontFamily: '"Raleway", sans-serif' }}>Documentation <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Needed</span></h2>
              <div className="space-y-4 text-left">
                {[
                  "Birth Certificate (Original & Copy)",
                  "Transfer Certificate (T.C.) from previous school",
                  "Previous Year's Report Card / Marks Sheet",
                  "Passport size photographs (Student & Parents)",
                  "Proof of Residence (Aadhar/Voter ID/Passport)"
                ].map((doc, i) => (
                  <div key={i} className="flex gap-4 items-center p-6 rounded-2xl bg-[#FDF6E3]/20 border border-[#D6B25E]/10">
                    <div className="w-8 h-8 rounded-full bg-[#8B1E1A] text-white flex items-center justify-center text-sm font-bold shrink-0">✓</div>
                    <span className="text-lg font-semibold">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Enquiry Form Section - Redesigned without black background */}
          <section className="py-32 bg-gradient-to-br from-amber-50 via-white to-red-50 relative overflow-hidden" id="enquiry-form">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-20 left-10 w-72 h-72 bg-[#8B1E1A] rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D6B25E] rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                  <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>
                    Begin Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Application</span>
                  </h2>
                  <p className="text-xl text-[#4F4F4F] mb-12 leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>
                    Fill out this enquiry form, and our admissions office will get back to you within 24-48 hours with the next steps.
                  </p>
                  <div className="flex items-center gap-6 p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-[#D6B25E]/20 shadow-lg">
                    <div className="text-4xl">📞</div>
                    <div>
                      <h4 className="font-bold text-[#1A1A1A] mb-1">Admissions Helplines</h4>
                      <p className="text-[#8B1E1A] font-bold text-lg">+91 000 000 0000 | +91 000 000 0000</p>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white/95 backdrop-blur-sm p-12 lg:p-16 rounded-[4rem] shadow-2xl text-[#1A1A1A] border border-[#D6B25E]/20"
                >
                  {!formSubmitted ? (
                    <form className="space-y-8" onSubmit={async (e) => {
                      e.preventDefault();
                      // Implementation of submission logic from earlier state
                      setFormSubmitted(true);
                    }}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Student Name</label>
                          <input type="text" className="w-full px-6 py-4 rounded-2xl bg-[#FDF6E3]/30 border border-gray-200 focus:border-[#8B1E1A] focus:outline-none text-[#1A1A1A]" required value={formData.childName} onChange={(e) => setFormData({ ...formData, childName: e.target.value })} />
                        </div>
                        <div className="space-y-3">
                          <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Grade Applying For</label>
                          <select className="w-full px-6 py-4 rounded-2xl bg-[#FDF6E3]/30 border border-gray-200 focus:border-[#8B1E1A] focus:outline-none text-[#1A1A1A]" required value={formData.gradeApplying} onChange={(e) => setFormData({ ...formData, gradeApplying: e.target.value })}>
                            <option value="">Select Grade</option>
                            <option value="nursery">Nursery</option>
                            <option value="primary">Primary (1-5)</option>
                            <option value="high">High School (6-10)</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Parent/Guardian Name</label>
                        <input type="text" className="w-full px-6 py-4 rounded-2xl bg-[#FDF6E3]/30 border border-gray-200 focus:border-[#8B1E1A] focus:outline-none text-[#1A1A1A]" required value={formData.parentName} onChange={(e) => setFormData({ ...formData, parentName: e.target.value })} />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                          <input type="email" className="w-full px-6 py-4 rounded-2xl bg-[#FDF6E3]/30 border border-gray-200 focus:border-[#8B1E1A] focus:outline-none text-[#1A1A1A]" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                        </div>
                        <div className="space-y-3">
                          <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                          <input type="tel" className="w-full px-6 py-4 rounded-2xl bg-[#FDF6E3]/30 border border-gray-200 focus:border-[#8B1E1A] focus:outline-none text-[#1A1A1A]" required value={formData.contactNumber} onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })} />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Additional Message</label>
                        <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-[#FDF6E3]/30 border border-gray-200 focus:border-[#8B1E1A] focus:outline-none text-[#1A1A1A]" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
                      </div>
                      <Button type="submit" variant="primary" size="lg" className="w-full">
                        Submit Enquiry
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-12">
                      <div className="text-6xl mb-6">✨</div>
                      <h3 className="text-3xl font-bold mb-4">Enquiry Received</h3>
                      <p className="text-gray-600 text-lg">Thank you for reaching out. Our admissions counselor will contact you shortly.</p>
                      <button onClick={() => setFormSubmitted(false)} className="mt-8 text-[#8B1E1A] font-bold">Submit another enquiry</button>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}