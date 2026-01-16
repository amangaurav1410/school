'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Programs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-red-700/5 to-red-800/10"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-red-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-300/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-6xl font-bold mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#3B1A17'
              }}
            >
              📚 Curriculum
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl lg:text-3xl font-semibold mb-6"
              style={{ color: '#8B1E1A' }}
            >
              A Seamless Blend of Two Powerful Systems
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl font-medium"
              style={{ color: '#5A1411' }}
            >
              Canadian Pedagogy + CBSE Curriculum
            </motion.p>
          </div>
        </section>

        {/* Curriculum Overview */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=800&fit=crop"
                    alt="Students Learning"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-lg leading-relaxed mb-6" style={{ color: '#4F4F4F' }}>
                  At Mapleford International School, learning is shaped by a powerful collaboration
                  with <span className="font-bold" style={{ color: '#8B1E1A' }}>Maple Bear Global Schools, Canada</span>
                  —a world leader in bilingual, inquiry-based education operating across{' '}
                  <span className="font-bold">35+ countries</span> and{' '}
                  <span className="font-bold">450+ schools</span>.
                </p>
                <p className="text-lg leading-relaxed mb-6" style={{ color: '#4F4F4F' }}>
                  Through this framework, our students benefit from the proven strengths of the
                  Canadian education system, consistently ranked among the world's best, while
                  staying firmly aligned to India's robust CBSE curriculum.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center px-4 py-2 bg-red-50 rounded-full">
                    <span className="mr-2">🍁</span>
                    <span className="font-medium" style={{ color: '#8B1E1A' }}>Maple Bear Partner</span>
                  </div>
                  <div className="flex items-center px-4 py-2 bg-blue-50 rounded-full">
                    <span className="mr-2">📜</span>
                    <span className="font-medium" style={{ color: '#1E40AF' }}>CBSE Affiliated</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Continuum of Learning */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2
                className="text-3xl lg:text-4xl font-bold mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#3B1A17'
                }}
              >
                🎓 The Continuum of Learning
              </h2>
              <p className="text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: '#4F4F4F' }}>
                Every stage of learning is a milestone in growth — thoughtfully designed to nurture
                young minds into competent whizz-kids with wisdom and wonder.
              </p>
            </motion.div>

            {/* Pre-School */}
            <motion.div
              id="preschool"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <img
                    src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=600&fit=crop"
                    alt="Pre-School"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">🌱</span>
                    <div>
                      <h3
                        className="text-2xl lg:text-3xl font-bold"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: '#3B1A17'
                        }}
                      >
                        Pre-School
                      </h3>
                      <p className="font-semibold" style={{ color: '#8B1E1A' }}>
                        Nursery | Jr. KG | Sr. KG
                      </p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed" style={{ color: '#4F4F4F' }}>
                    The foundation years where curiosity blossoms and imagination leads learning.
                    Through play-based exploration, storytelling, and creative discovery, pre-schoolers
                    develop early confidence, communication skills, and joy in learning.
                  </p>
                  <ul className="mt-6 space-y-2">
                    {['Play-based learning', 'Creative exploration', 'Early literacy & numeracy', 'Social skill development'].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 rounded-full mr-3" style={{ background: '#D6B25E' }}></span>
                        <span style={{ color: '#4F4F4F' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Elementary School */}
            <motion.div
              id="elementary"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">📖</span>
                    <div>
                      <h3
                        className="text-2xl lg:text-3xl font-bold"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: '#3B1A17'
                        }}
                      >
                        Elementary School
                      </h3>
                      <p className="font-semibold" style={{ color: '#8B1E1A' }}>
                        Grades 1–5
                      </p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed" style={{ color: '#4F4F4F' }}>
                    The building years of knowledge and expression — where students strengthen
                    academics, values, and creativity. Learning becomes meaningful through interactive
                    classrooms and real-world applications.
                  </p>
                  <ul className="mt-6 space-y-2">
                    {['Interactive learning', 'Value-based education', 'Creative expression', 'Real-world applications'].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 rounded-full mr-3" style={{ background: '#D6B25E' }}></span>
                        <span style={{ color: '#4F4F4F' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="aspect-video lg:aspect-auto order-1 lg:order-2">
                  <img
                    src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop"
                    alt="Elementary School"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* High School */}
            <motion.div
              id="highschool"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <img
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop"
                    alt="High School"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">🎓</span>
                    <div>
                      <h3
                        className="text-2xl lg:text-3xl font-bold"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: '#3B1A17'
                        }}
                      >
                        High School
                      </h3>
                      <p className="font-semibold" style={{ color: '#8B1E1A' }}>
                        Grades 6–10
                      </p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed" style={{ color: '#4F4F4F' }}>
                    The transformation years that foster independence, discipline, and vision. With
                    CBSE's structured framework and global exposure, learners evolve into confident
                    aspirants — ready to lead, innovate, and explore the world beyond boundaries.
                  </p>
                  <ul className="mt-6 space-y-2">
                    {['CBSE framework', 'Global exposure', 'Leadership development', 'Career readiness'].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 rounded-full mr-3" style={{ background: '#D6B25E' }}></span>
                        <span style={{ color: '#4F4F4F' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* STEAM Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2
                className="text-4xl lg:text-5xl font-bold mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#3B1A17'
                }}
              >
                💡 STEAM
              </h2>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: '#8B1E1A' }}>
                Where Logic Meets Imagination
              </h3>
              <p className="text-lg max-w-4xl mx-auto" style={{ color: '#4F4F4F', lineHeight: '1.8' }}>
                At Mapleford International School, STEAM education blends Science, Technology,
                Engineering, Arts, and Mathematics to cultivate learners who can think critically,
                design creatively, and innovate purposefully.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
              {[
                { letter: 'S', subject: 'Science', tagline: 'with Imagination', icon: '🔬', color: 'from-blue-500 to-blue-600' },
                { letter: 'T', subject: 'Technology', tagline: 'with Innovation', icon: '💻', color: 'from-green-500 to-green-600' },
                { letter: 'E', subject: 'Engineering', tagline: 'with Design', icon: '⚙️', color: 'from-orange-500 to-orange-600' },
                { letter: 'A', subject: 'Arts', tagline: 'with Purpose', icon: '🎨', color: 'from-purple-500 to-purple-600' },
                { letter: 'M', subject: 'Mathematics', tagline: 'with Vision', icon: '📐', color: 'from-red-500 to-red-600' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div
                    className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-3xl font-bold shadow-lg mb-4`}
                  >
                    {item.letter}
                  </div>
                  <h4 className="font-bold text-lg" style={{ color: '#3B1A17' }}>
                    {item.subject}
                  </h4>
                  <p className="text-sm" style={{ color: '#8B1E1A' }}>
                    {item.tagline}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl"
            >
              <p className="text-lg leading-relaxed mb-4" style={{ color: '#4F4F4F' }}>
                Our classrooms are spaces of exploration — where scientific curiosity merges with
                artistic creativity, and technology becomes a canvas for expression.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#4F4F4F' }}>
                Students engage in hands-on design projects, robotics, visual arts, coding, and
                creative problem-solving — learning to see challenges from multiple perspectives.
              </p>
            </motion.div>
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
                Ready to Begin the Journey?
              </h2>
              <p className="text-xl text-red-100 mb-8">
                Give your child the gift of world-class education.
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