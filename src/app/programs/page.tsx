'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

export default function Programs() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 min-h-screen bg-white text-[#1A1A1A]">
        {/* Hero Section */}
        <section className="relative py-32 lg:py-52 overflow-hidden bg-[#FDF6E3]/30">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstripe-light.png')] opacity-30"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#1A1A1A]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <h1
                className="text-6xl lg:text-9xl font-bold mb-8 leading-[0.9]"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                Curriculum
              </h1>
              <h2 className="text-2xl lg:text-4xl font-bold text-[#d0302b] mb-8" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Where CBSE Excellence Meets Canadian Innovation
              </h2>
            </motion.div>
          </div>
        </section>

        {/* Global Collaboration */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-6 text-lg text-[#4F4F4F] leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>
                  <p>
                    At Mapleford International School, learning is shaped by a powerful collaboration with <strong>Maple Bear Global Schools, Canada</strong>—a world leader in bilingual, inquiry-based education operating across 35+ countries and 450+ schools.
                  </p>
                  <p>
                    Through this partnership, our students benefit from the proven strengths of the Canadian education system, consistently ranked among the world’s best, while staying firmly aligned to India’s respected CBSE framework.
                  </p>

                  <div className="mt-12 space-y-8">
                    <h3 className="text-2xl font-bold text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>
                      A Seamless Blend of Two Powerful Systems
                    </h3>
                    <div
                      className="inline-flex items-center gap-4 px-8 py-4 rounded-full border border-[#D6B25E]/30"
                      style={{ background: 'linear-gradient(135deg, rgba(214,178,94,0.1), rgba(208,48,43,0.05))' }}
                    >
                      <span className="text-xl font-bold text-[#d0302b]">Canadian Pedagogy</span>
                      <span className="text-2xl font-black">+</span>
                      <span className="text-xl font-bold text-[#d0302b]">CBSE Curriculum</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative">
                  <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=800&fit=crop" className="w-full h-full object-cover" alt="Students learning" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What this means for learners */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>
                What this means for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">learners:</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Strong Foundations", desc: "Solid grounding in Math, Science, Languages, and Social Sciences." },
                { title: "Conceptual Understanding", desc: "Deep conceptual understanding instead of rote memory." },
                { title: "Inquiry-Based Learning", desc: "Inquiry, problem-solving, and project-based learning." },
                { title: "Continuous Assessment", desc: "Assessment aligned to Maple Bear learning outcomes." },
                { title: "Board Preparedness", desc: "Preparedness for CBSE board pathways in higher grades." },
                { title: "Global Exposure", desc: "Ready for higher education in India or abroad." },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-[#d0302b] font-bold text-xl mb-6">
                    0{idx + 1}
                  </div>
                  <h4 className="text-xl font-bold mb-4" style={{ fontFamily: '"Raleway", sans-serif' }}>{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Pathway */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Pre-School */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-[#E8F5E9]/30 p-10 rounded-[3rem] border border-[#2E7D32]/10"
              >
                <div className="text-5xl mb-8">🌱</div>
                <h3 className="text-3xl font-black mb-6" style={{ fontFamily: '"Raleway", sans-serif' }}>Pre-School</h3>
                <p className="text-gray-500 mb-8 ">(Pre-Nursery to Kindergarten)</p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Play-based, inquiry-led Maple Bear early learning model that develops:
                </p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]"></span>
                    Social and emotional growth
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]"></span>
                    Early literacy and numeracy
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]"></span>
                    Motor skills and creativity
                  </li>
                </ul>
                <p className="mt-8 text-gray-600">
                  Children learn through exploration across interactive learning centres such as reading, drama, water, sand, math, and music.
                </p>
                <Link href="/curriculum/pre-school" className="mt-10 inline-block font-bold text-[#2E7D32] hover:underline">Explore →</Link>
              </motion.div>

              {/* Elementary School */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-[#E3F2FD]/30 p-10 rounded-[3rem] border border-[#1976D2]/10"
              >
                <div className="text-5xl mb-8">📖</div>
                <h3 className="text-3xl font-black mb-6" style={{ fontFamily: '"Raleway", sans-serif' }}>Elementary School</h3>
                <p className="text-gray-500 mb-8 ">(Grades 1 to 5)</p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  A progressive, concept-driven curriculum where:
                </p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1976D2]"></span>
                    CBSE learning milestones are integrated with Canadian instructional strategies
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1976D2]"></span>
                    Lessons are designed to nurture curiosity, independence, and higher-order thinking
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1976D2]"></span>
                    Hands-on learning and continuous feedback help each child progress at their own pace
                  </li>
                </ul>
                <Link href="/curriculum/elementary" className="mt-10 inline-block font-bold text-[#1976D2] hover:underline">Explore →</Link>
              </motion.div>

              {/* High School */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-[#FFF3E0]/30 p-10 rounded-[3rem] border border-[#E65100]/10"
              >
                <div className="text-5xl mb-8">🎓</div>
                <h3 className="text-3xl font-black mb-6" style={{ fontFamily: '"Raleway", sans-serif' }}>High School</h3>
                <p className="text-gray-500 mb-8 ">(Grades 6 to 10)</p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  A strong CBSE academic roadmap strengthened by:
                </p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E65100]"></span>
                    Critical thinking frameworks
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E65100]"></span>
                    Skill-based projects
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E65100]"></span>
                    Leadership and global citizenship programs
                  </li>
                </ul>
                <p className="mt-8 text-gray-600">
                  Opportunities for international collaboration and cultural exchanges.
                </p>
                <Link href="/curriculum/high-school" className="mt-10 inline-block font-bold text-[#E65100] hover:underline">Explore →</Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Admission CTA */}
        <section className="py-32 bg-[#d0302b] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl lg:text-6xl font-black mb-8" style={{ fontFamily: '"Raleway", sans-serif' }}>Invest in Their <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Future.</span></h2>
            <p className="text-xl text-white/70 mb-12">Our admissions for the upcoming academic year are now open. Secure your child's seat today.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button href="/admissions" variant="white" size="lg">Begin Admission</Button>
              <Button href="/contact" variant="outline-white" size="lg">Schedule a Tour</Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}