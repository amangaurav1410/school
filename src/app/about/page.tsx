'use client';

import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import AdmissionModal from '../../components/AdmissionModal';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-white/80 uppercase tracking-[0.3em] text-sm font-bold mb-4">Our Story</p>
              <h1
                className="text-[48px] sm:text-[64px] lg:text-[80px] font-black text-white leading-tight"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                Who We Are
              </h1>
              <p className="text-white/90 text-lg sm:text-xl mt-4 max-w-2xl mx-auto font-medium leading-relaxed">
                Three decades of legacy, reimagined for a world-class future.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 1 — White: The Story */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="space-y-8"
              >
                <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-black text-[#000000] leading-tight" style={{ fontFamily: '"Raleway", sans-serif' }}>
                  Three Decades <br />of <span className="text-[#d0302b]">Excellence.</span>
                </h2>
                <div className="space-y-5 text-lg text-[#000000] leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>
                  <p>
                    Located in the heart of Hayathnagar, Hyderabad, <strong>Mapleford International School</strong> carries forward the distinguished three-decade legacy of <strong>Megacity High School</strong> — a trusted institution known for its strong values and commitment to quality education.
                  </p>
                  <p>
                    Today, this legacy is reimagined for a new era — one that embraces innovation, global horizons, and a future-ready learning experience.
                  </p>
                  <p>
                    As a CBSE-affiliated co-education institution, Mapleford offers a structured, meticulous, and value-driven academic foundation. Through our collaboration with <strong>Maple Bear Canadian School</strong>, we bring international perspectives, modern pedagogy, holistic development, and global pathways to every learner.
                  </p>
                </div>
                <div className="p-8 bg-gray-50 rounded-3xl border-l-[5px] border-[#d0302b]">
                  <p className="font-black text-[#d0302b] text-xl leading-tight italic">
                    &quot;Empowering Mapleites to rise with Erudition, Ethos, and Excellence&quot;
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="relative"
              >
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=1500&fit=crop"
                    alt="Mapleford Legacy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="absolute -right-4 -bottom-4 sm:-right-8 sm:-bottom-8 bg-[#1A1A1A] p-6 sm:p-8 rounded-full shadow-2xl border-4 border-white text-white flex flex-col items-center justify-center text-center w-32 h-32 sm:w-40 sm:h-40 z-20">
                  <span className="text-3xl sm:text-4xl font-black text-[#D6B25E]">30+</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest leading-tight mt-1">Years of<br />Impact</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Red: School of Thought */}
        <section className="py-16 sm:py-24 bg-[#d0302b] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="space-y-8"
            >
              <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-black text-white" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Our School of Thought
              </h2>
              <div className="space-y-6 text-lg sm:text-xl text-white/90 leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>
                <p className="font-bold text-white text-xl sm:text-2xl">
                  Knowledge in Pursuit of Integrity and Excellence
                </p>
                <p>
                  At Mapleford International School, the euphony of intellect and integrity nurtures young talent to discover the courage to question, the discipline to grow, and the humility to keep learning.
                </p>
                <p>
                  Our approach fosters disciplined thinking, ethical actions, and purposeful ambitions, shaping individuals to excel with conviction and contribute with conscience.
                </p>
                <p>
                  We strive to raise curious thinkers, compassionate leaders, and confident achievers — grounded in enduring values and inspired to excel beyond boundaries.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3 — White: Leadership & Team */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-[#d0302b] font-black uppercase tracking-[0.3em] text-sm mb-3">Our Team</p>
              <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-black text-[#000000]" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Leadership & Mentors
              </h2>
              <p className="text-lg text-[#000000] max-w-3xl mx-auto mt-4 leading-relaxed">
                The heart of Mapleford is an empathetic, dynamic, and visionary team. Our compass guides students toward steadiness and inspiration.
              </p>
            </div>

            <div className="space-y-16 sm:space-y-24">
              {/* Chairman */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&fit=crop" alt="Chairman" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <h4 className="text-2xl font-black mb-1">P. Subba Reddy</h4>
                      <p className="text-[#D6B25E] font-black uppercase tracking-widest text-sm">Chairman</p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 space-y-6">
                  <h3 className="text-3xl sm:text-4xl font-black text-[#000000]" style={{ fontFamily: '"Raleway", sans-serif' }}>Message From the Chairman</h3>
                  <div className="w-20 h-1.5 bg-[#d0302b] rounded-full" />
                  <div className="space-y-4 text-lg text-[#000000] leading-relaxed italic">
                    <p>&quot;At Mapleford International School, we believe that education is not merely the transfer of knowledge but the cultivation of character, curiosity, and compassion. As we carry forward the distinguished legacy of Megacity High School, our mission remains grounded in a simple truth: children learn best when they feel valued, supported, and inspired to discover who they are.&quot;</p>
                    <p>&quot;For three decades, our journey has been shaped by the belief that schooling must prepare students for life, not just for examinations. Today, Mapleford stands as an evolution of that belief, embracing global perspectives while staying anchored in timeless values.&quot;</p>
                    <p>&quot;I remain deeply committed to fostering a school community where every child feels empowered to learn, lead, and contribute meaningfully to society.&quot;</p>
                  </div>
                </div>
              </motion.div>

              {/* Principal */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                <div className="lg:col-span-7 space-y-6 lg:order-1">
                  <h3 className="text-3xl sm:text-4xl font-black text-[#000000]" style={{ fontFamily: '"Raleway", sans-serif' }}>Message from the Principal</h3>
                  <div className="w-20 h-1.5 bg-[#D6B25E] rounded-full" />
                  <div className="space-y-4 text-lg text-[#000000] leading-relaxed italic">
                    <p>&quot;Education, to us, is not a race but a journey. It is augmented through attentive listening, thoughtful guidance, and learning experiences that encourage children to think independently and understand deeply.&quot;</p>
                    <p>&quot;Our faculty brings together expertise and empathy, ensuring that every learner is seen not just for their academic abilities, but for the individual they are becoming.&quot;</p>
                    <p>&quot;As Mapleford steps into a new chapter, my vision is to lead a school where learning feels alive, and every child leaves each day a little more empowered than the last.&quot;</p>
                  </div>
                </div>
                <div className="lg:col-span-5 lg:order-2">
                  <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&fit=crop" alt="Principal" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <h4 className="text-2xl font-black mb-1">XYZ</h4>
                      <p className="text-[#D6B25E] font-black uppercase tracking-widest text-sm">Principal</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — Red: CTA */}
        <section className="py-16 sm:py-24 bg-[#d0302b] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-white/80 uppercase tracking-[0.3em] text-sm font-bold">Global Admissions</p>
              <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-black text-white leading-tight" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Take the Next Step.
              </h2>
              <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Embark on a voyage of discovery. The roadmap to a world-class education for your child is now open for enrollment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 bg-white text-[#d0302b] font-black rounded-full text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
                >
                  Get Prospectus →
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 border-2 border-white text-white font-black rounded-full text-lg hover:bg-white/10 transition-all duration-200"
                >
                  Apply Online
                </button>
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