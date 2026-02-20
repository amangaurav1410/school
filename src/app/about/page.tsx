'use client';

import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
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

        {/* HERO SECTION — Who We Are */}
        <section className="bg-[#d0302b] py-20 px-4 text-center relative overflow-hidden">
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
              <h1
                className="text-[48px] sm:text-[64px] lg:text-[80px] font-black text-white leading-tight mb-4"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                Who We Are
              </h1>
              <p className="text-white/90 text-xl sm:text-2xl max-w-2xl mx-auto font-bold tracking-wide italic">
                Rooted in Legacy. Ready for Tomorrow.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 1 — The Story */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="space-y-8"
              >
                <div className="space-y-6 text-lg text-[#000000] leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>
                  <p>
                    Located in the heart of Hayathnagar, Hyderabad, <strong>Mapleford International School</strong> carries forward the distinguished three-decade legacy of <strong>Megacity High School</strong>, a trusted institution known for its strong values and commitment to quality education.
                  </p>
                  <p>
                    Today, this legacy is reimagined for a new era—one that embraces innovation, global horizons, and a future-ready learning experience.
                  </p>
                  <p>
                    As a CBSE-affiliated co-education institution, Mapleford offers a structured, meticulous, and value-driven academic foundation. Our collaboration with <strong>Maple Bear Canadian School</strong>, brings forth international perspectives, modern pedagogy, holistic development, and global pathways to every learner, creating a harmonious blend of Indian academic depth and world-class educational insight.
                  </p>
                </div>
                <div className="p-8 bg-[#d0302b]/5 rounded-3xl border-l-[5px] border-[#d0302b]">
                  <p className="font-black text-[#d0302b] text-xl leading-tight">
                    &quot;Empowering Mapleites to rise with Erudition, Ethos, and Excellence&quot;
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[16/10]"
              >
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop"
                  alt="Mapleford Legacy"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Our School of Thought */}
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
              <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-black text-white" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Our School of Thought
              </h2>
              <div className="space-y-6 text-lg sm:text-xl text-white/95 leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>
                <p className="font-black text-white text-2xl sm:text-3xl tracking-tight">
                  Knowledge in Pursuit of Integrity and Excellence
                </p>
                <div className="max-w-4xl mx-auto space-y-6">
                  <p>
                    At Mapleford International School, the euphony of intellect and integrity nurtures young talent to discover the courage to question, the discipline to grow, and the humility to keep learning.
                  </p>
                  <p>
                    Our approach fosters disciplined thinking, ethical actions, and purposeful ambitions, shaping individuals to excel with conviction and contribute with conscience.
                  </p>
                  <p>
                    We strive to raise curious thinkers, compassionate leaders, and confident achievers— grounded in enduring values and inspired to excel beyond boundaries.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3 — Our Team */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-black text-[#000000] mb-6" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Our Team
              </h2>
              <p className="text-xl text-[#000000] max-w-4xl mx-auto leading-relaxed font-medium">
                The heart of Mapleford is an empathetic, compassionate, dynamic, and visionary team, a committed leadership, and devoted mentors at its core. Our compass guides students toward steadiness and inspiration.
              </p>
            </div>

            <div className="space-y-24 pt-8">
              {/* Chairman */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
              >
                <div className="lg:col-span-4">
                  <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&fit=crop" alt="Chairman" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white text-left">
                      <h4 className="text-2xl font-black mb-1">P. Subba Reddy</h4>
                      <p className="text-[#D6B25E] font-black uppercase tracking-widest text-sm">Chairman</p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  <h3 className="text-3xl sm:text-4xl font-black text-[#000000]" style={{ fontFamily: '"Raleway", sans-serif' }}>Message From the Chairman</h3>
                  <div className="w-20 h-1.5 bg-[#d0302b] rounded-full" />
                  <div className="space-y-6 text-lg text-[#000000] leading-relaxed italic">
                    <p>&quot;At Mapleford International School, we believe that education is not merely the transfer of knowledge but the cultivation of character, curiosity, and compassion. As we carry forward the distinguished legacy of Megacity High School, our mission remains grounded in a simple truth: children learn best when they feel valued, supported, and inspired to discover who they are.&quot;</p>
                    <p>&quot;For three decades, our journey has been shaped by the belief that schooling must prepare students for life, not just for examinations. Today, Mapleford stands as an evolution of that belief, embracing global perspectives while staying anchored in timeless values. We strive to create an environment where learning is joyful, where discipline is self-driven, and where every accomplishment is measured not only by success but by sincerity and effort.&quot;</p>
                    <p>&quot;I remain deeply committed to fostering a school community where every child feels empowered to learn, lead, and contribute meaningfully to society. Together, let us shape a future where every learning matters, the spark in a question, the pride in a goal, and the courage to try again.&quot;</p>
                    <div className="not-italic pt-4">
                      <p className="font-black text-xl text-[#000000]">P. Subba Reddy</p>
                      <p className="text-sm font-bold text-gray-600 uppercase tracking-widest">– Chairman, Mapleford International School</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Principal */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
              >
                <div className="lg:col-span-8 lg:order-1 space-y-6">
                  <h3 className="text-3xl sm:text-4xl font-black text-[#000000]" style={{ fontFamily: '"Raleway", sans-serif' }}>Message from the Principal</h3>
                  <div className="w-20 h-1.5 bg-[#D6B25E] rounded-full" />
                  <div className="space-y-6 text-lg text-[#000000] leading-relaxed italic">
                    <p>&quot;Education, to us, is not a race but a journey. It is augmented through attentive listening, thoughtful guidance, and learning experiences that encourage children to think independently and understand deeply.&quot;</p>
                    <p>&quot;Our faculty brings together expertise and empathy, ensuring that every learner is seen not just for their academic abilities, but for the individual they are becoming. We emphasize balance—between discipline and creativity, reflection and action, ambition and humility—so that students develop the confidence to succeed and the character to choose wisely.&quot;</p>
                    <p>&quot;As Mapleford steps into a new chapter, my vision is to lead a school where learning feels alive, and every child leaves each day a little more empowered than the last. Together, we aim to shape individuals who not only excel in the world but also enrich it with their integrity, kindness, and courage.&quot;</p>
                    <div className="not-italic pt-4">
                      <p className="font-black text-xl text-[#000000]">XYZ</p>
                      <p className="text-sm font-bold text-gray-600 uppercase tracking-widest">– Principal, Mapleford International School</p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4 lg:order-2">
                  <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&fit=crop" alt="Principal" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white text-left">
                      <h4 className="text-2xl font-black mb-1">XYZ</h4>
                      <p className="text-[#D6B25E] font-black uppercase tracking-widest text-sm">Principal</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <AdmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
}