'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24">
        {/* Hero Section - Who We Are */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-red-700/5 to-red-800/10"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-red-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-300/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1
                  className="text-4xl lg:text-6xl font-bold mb-6"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#3B1A17'
                  }}
                >
                  Who We Are
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold mb-6" style={{ color: '#8B1E1A' }}>
                  Rooted in Legacy. Ready for Tomorrow.
                </h2>
                <p className="text-lg leading-relaxed mb-6" style={{ color: '#4F4F4F' }}>
                  Located in the heart of Hayathnagar, Hyderabad, Mapleford International School
                  carries forward the distinguished three-decade legacy of Megacity High School — a
                  trusted institution known for its strong values and commitment to quality education.
                </p>
                <p className="text-lg leading-relaxed mb-6" style={{ color: '#4F4F4F' }}>
                  Today, this legacy is reimagined for a new era—one that embraces innovation, global
                  horizons, and a future-ready learning experience. As a CBSE-affiliated co-education
                  institution, Mapleford offers a structured, meticulous, and value-driven academic
                  foundation.
                </p>
                <p className="text-lg leading-relaxed mb-6" style={{ color: '#4F4F4F' }}>
                  Through our collaboration with Maple Bear Canadian School, we bring international
                  perspectives, modern pedagogy, holistic development, and global pathways to every
                  learner — creating a harmonious blend of Indian academic depth and world-class
                  educational insight.
                </p>
                <p className="text-xl font-semibold italic" style={{ color: '#5A1411' }}>
                  Empowering Mapleites to rise with Erudition, Ethos, and Excellence
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-red-100 rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=800&fit=crop"
                    alt="Mapleford Campus"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our School of Thought */}
        <section className="py-24 bg-white" id="school-of-thought">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2
                className="text-4xl lg:text-5xl font-bold mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#3B1A17'
                }}
              >
                Our School of Thought
              </h2>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: '#8B1E1A' }}>
                Knowledge in Pursuit of Integrity and Excellence
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto text-center"
            >
              <p className="text-xl leading-relaxed mb-8" style={{ color: '#4F4F4F' }}>
                At Mapleford International School, the euphony of intellect and integrity nurtures
                young talent to discover the courage to question, the discipline to grow, and the
                humility to keep learning.
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#4F4F4F' }}>
                Our approach fosters disciplined thinking, ethical actions, and purposeful ambitions,
                shaping individuals to excel with conviction and contribute with conscience.
              </p>
              <p className="text-xl font-semibold italic" style={{ color: '#5A1411' }}>
                We strive to raise curious thinkers, compassionate leaders, and confident achievers —
                grounded in enduring values and inspired to excel beyond boundaries.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2
                className="text-4xl lg:text-5xl font-bold mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#3B1A17'
                }}
              >
                Our Team
              </h2>
              <p className="text-xl max-w-4xl mx-auto" style={{ color: '#4F4F4F', lineHeight: '1.8' }}>
                The heart of Mapleford is an empathetic, compassionate, dynamic, and visionary team.
                A committed leadership and devoted mentors at its core, our compass guides students
                toward steadiness, inspiration, and a true sense of belonging.
              </p>
            </motion.div>

            <div className="text-center">
              <Link href="/about/team" className="btn-primary">
                Meet Our Team
              </Link>
            </div>
          </div>
        </section>

        {/* Message from the Chairman */}
        <section className="py-24 bg-white" id="chairman-message">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 to-red-100 rounded-2xl overflow-hidden shadow-xl sticky top-32">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop"
                    alt="P. Subba Reddy - Chairman"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2
                  className="text-3xl lg:text-4xl font-bold mb-6"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#3B1A17'
                  }}
                >
                  ✉️ Message from the Chairman
                </h2>
                <div className="space-y-6" style={{ color: '#4F4F4F', lineHeight: '1.9' }}>
                  <p>
                    At Mapleford International School, we believe that education is not merely the
                    transfer of knowledge but the cultivation of character, curiosity, and compassion.
                    As we carry forward the distinguished legacy of Megacity High School, our mission
                    remains grounded in a simple truth: children learn best when they feel valued,
                    supported, and inspired to discover who they are.
                  </p>
                  <p>
                    For nearly three decades, our journey has been shaped by the belief that schooling
                    must prepare students for life, not just for examinations. Today, Mapleford stands
                    as an evolution of that belief, embracing global perspectives while staying anchored
                    in timeless values. We strive to create an environment where learning is joyful,
                    where discipline is self-driven, and where every accomplishment is measured not only
                    by success, but by sincerity and effort.
                  </p>
                  <p>
                    I remain deeply committed to fostering a school community where every child feels
                    empowered to learn, lead, and contribute meaningfully to society. Together, let us
                    shape a future where every learning matters — the spark in a question, the pride in
                    a goal, the courage to try again.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t" style={{ borderColor: '#D6B25E' }}>
                  <p className="font-bold text-xl" style={{ color: '#3B1A17' }}>
                    P. Subba Reddy
                  </p>
                  <p style={{ color: '#7E7E7E' }}>Chairman, Mapleford International School</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Message from the Principal */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50" id="principal-message">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2
                  className="text-3xl lg:text-4xl font-bold mb-6"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#3B1A17'
                  }}
                >
                  ✉️ Message from the Principal
                </h2>
                <div className="space-y-6" style={{ color: '#4F4F4F', lineHeight: '1.9' }}>
                  <p>
                    Education, to us, is not a race but a journey. It is augmented through attentive
                    listening, thoughtful guidance, and learning experiences that encourage children
                    to think independently and understand deeply.
                  </p>
                  <p>
                    Our faculty brings together expertise and empathy, ensuring that every learner is
                    seen not just for their academic abilities, but for the individual they are becoming.
                    We emphasize balance—between discipline and creativity, reflection and action,
                    ambition and humility—so that students develop the confidence to succeed and the
                    character to choose wisely.
                  </p>
                  <p>
                    As Mapleford steps into a new chapter, my vision is to lead a school where learning
                    feels alive, relationships feel genuine, and every child leaves each day a little
                    more empowered than the last. Together, we aim to shape individuals who not only
                    excel in the world but also enrich it with their integrity, kindness, and courage.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t" style={{ borderColor: '#D6B25E' }}>
                  <p className="font-bold text-xl" style={{ color: '#3B1A17' }}>
                    XYZ
                  </p>
                  <p style={{ color: '#7E7E7E' }}>Principal, Mapleford International School</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 to-red-100 rounded-2xl overflow-hidden shadow-xl sticky top-32">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop"
                    alt="Principal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-red-600 via-red-700 to-red-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Join the Mapleford Family
              </h2>
              <p className="text-xl text-red-100 mb-8">
                Begin your child's journey of excellence with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/admissions"
                  className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-colors duration-300 shadow-lg"
                >
                  Admission Enquiry
                </Link>
                <Link
                  href="/contact"
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-300 shadow-lg"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}