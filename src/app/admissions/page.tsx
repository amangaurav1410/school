'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import AdmissionModal from '../../components/AdmissionModal';

export default function Admissions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <div className="pt-[90px] lg:pt-[120px] overflow-hidden">

        {/* BANNER — Red */}
        <section className="bg-[#d0302b] py-16 sm:py-20 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-white/80 uppercase tracking-[0.3em] text-sm font-bold mb-4">Join Our Legacy</p>
              <h1
                className="text-[48px] sm:text-[64px] lg:text-[80px] font-black text-white leading-tight"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                Admissions 2025–26
              </h1>
              <p className="text-white/90 text-lg sm:text-xl mt-4 max-w-2xl mx-auto font-medium leading-relaxed">
                Begin your journey at Mapleford. Discover a world where potential is celebrated.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <button onClick={() => setIsModalOpen(true)} className="px-8 py-4 bg-white text-[#d0302b] font-black rounded-full text-lg hover:bg-gray-100 transition-all shadow-lg">
                  Apply Now
                </button>
                <Button href="/campus" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Tour Campus
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 1 — White: Admission Process */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-[#d0302b] font-black uppercase tracking-[0.4em] text-xs mb-3">The Road to Mapleford</p>
              <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-black text-[#000000]" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Admission Process
              </h2>
              <p className="text-lg text-[#000000] max-w-2xl mx-auto mt-4">A transparent and welcoming journey designed for a smooth transition.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { step: "01", title: "Enquiry & Visit", desc: "Fill the enquiry form or visit our campus to experience the environment firsthand.", bg: "bg-blue-50" },
                { step: "02", title: "Interaction", desc: "A friendly interaction with the student and parents to align with our philosophy.", bg: "bg-purple-50" },
                { step: "03", title: "Documentation", desc: "Submission of required documents including birth certificate and previous records.", bg: "bg-amber-50" },
                { step: "04", title: "Final Admission", desc: "Complete fee formalities and orientation to welcome the student into the family.", bg: "bg-green-50" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className={`${item.bg} p-8 sm:p-10 rounded-3xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden`}
                >
                  <div className="text-6xl font-black text-[#d0302b] opacity-10 absolute -right-2 -top-2">{item.step}</div>
                  <div className="relative z-10">
                    <div className="text-3xl font-black text-[#d0302b] mb-5">{item.step}</div>
                    <h3 className="text-xl font-black mb-3 text-[#000000]">{item.title}</h3>
                    <p className="text-[#000000] text-base leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2 — Red: Why Mapleford */}
        <section className="py-16 sm:py-24 bg-[#d0302b] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-black text-white" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Why Choose Mapleford?
              </h2>
              <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">Everything a growing mind needs, under one roof.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🎓", title: "CBSE + Canadian Pedagogy", desc: "The rigour of CBSE combined with the innovation of Canadian methodology." },
                { icon: "🏫", title: "World-Class Campus", desc: "A 4-acre campus with state-of-the-art labs, sports arenas, and smart classrooms." },
                { icon: "🌱", title: "Holistic Development", desc: "Academic excellence, sports, arts, and values — all nurtured equally." },
                { icon: "👨‍🏫", title: "Dedicated Faculty", desc: "Experienced teachers who mentor, inspire, and guide every learner." },
                { icon: "🔬", title: "STEAM Focus", desc: "Science, Technology, Engineering, Arts & Mathematics integrated across grades." },
                { icon: "🌍", title: "Global Outlook", desc: "International collaboration and exchange programs for a broader worldview." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  transition={{ delay: idx * 0.08 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-black text-white mb-3">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — White: Age Criteria */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-[#d0302b] font-black uppercase tracking-[0.4em] text-xs mb-3">Eligibility</p>
              <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-black text-[#000000]" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Age Criteria & Documents
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h3 className="text-2xl font-black text-[#000000] mb-6">Age Criteria</h3>
                <div className="space-y-4">
                  {[
                    { grade: "Nursery", age: "3+ years" },
                    { grade: "JKG", age: "4+ years" },
                    { grade: "UKG", age: "5+ years" },
                    { grade: "Grade 1", age: "6+ years" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0">
                      <span className="font-bold text-[#000000]">{item.grade}</span>
                      <span className="text-[#d0302b] font-black">{item.age}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h3 className="text-2xl font-black text-[#000000] mb-6">Documents Required</h3>
                <ul className="space-y-3">
                  {[
                    "Birth Certificate (original + copy)",
                    "Previous school Transfer Certificate",
                    "Report Card / Progress Report",
                    "Passport-size photographs (4)",
                    "Aadhar Card (child & parent)",
                    "Residence proof"
                  ].map((doc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#d0302b] mt-2 shrink-0" />
                      <span className="text-[#000000] font-medium">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — Red: Final CTA */}
        <section className="py-16 sm:py-24 bg-[#d0302b] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-black text-white leading-tight" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Ready to Begin?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 max-w-xl mx-auto leading-relaxed">
                Secure your child&apos;s spot at Mapleford International School. Limited seats available for 2025–26.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <button onClick={() => setIsModalOpen(true)} className="px-8 py-4 bg-white text-[#d0302b] font-black rounded-full text-lg hover:bg-gray-100 transition-all shadow-lg">
                  Apply Now
                </button>
                <Button href="/contact" variant="outline" size="lg" className="border-white text-white">
                  Contact Admissions
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

      </div>

      <AdmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
}