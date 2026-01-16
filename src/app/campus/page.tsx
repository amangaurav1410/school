'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface Facility {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
}

export default function Campus() {
  const facilities: Facility[] = [
    {
      icon: '📘',
      title: 'Classrooms',
      subtitle: 'Smart, Bright, Engaging',
      description:
        'Our classrooms are designed to be open, bright, and technology-enabled—spaces where students learn with focus and comfort. Interactive boards, ergonomic seating, and natural light come together to create an environment that supports active engagement and clarity in thought.',
      color: 'from-blue-50 to-blue-100'
    },
    {
      icon: '📚',
      title: 'Library',
      subtitle: 'A Quiet World of Imagination',
      description:
        'The library is a calm and inviting corner of the campus, offering students a rich collection of books, reference materials, and digital resources. Thoughtfully arranged reading areas allow learners to slow down, explore ideas, and build a lasting love for literature.',
      color: 'from-amber-50 to-amber-100'
    },
    {
      icon: '💡',
      title: 'STEAM & Innovation Labs',
      subtitle: 'Ideas in Motion',
      description:
        'Our innovation spaces, including the STEAM and robotics labs, bring learning to life through experimentation and hands-on exploration. Equipped with modern tools and creative resources, these labs encourage students to imagine, design, and build with confidence.',
      color: 'from-purple-50 to-purple-100'
    },
    {
      icon: '🖥️',
      title: 'Digital Learning Lab',
      subtitle: 'Skills for a New Age',
      description:
        'The digital lab integrates essential technological skills into daily learning. With updated systems, guided modules, and safe browsing protocols, students develop digital fluency and responsible online habits in a structured, supervised environment.',
      color: 'from-cyan-50 to-cyan-100'
    },
    {
      icon: '🏫',
      title: 'Learning Resource Center',
      subtitle: 'Research & Reflection',
      description:
        'The resource center provides a quiet, structured space for reading, research, and academic enrichment. Students use this space to clarify concepts, work independently, and explore subjects beyond the classroom.',
      color: 'from-green-50 to-green-100'
    },
    {
      icon: '⚽',
      title: 'Sports Arena',
      subtitle: 'Fields for Strength & Spirit',
      description:
        'Our sports arena encourages movement, teamwork, and athletic discipline. The campus features a football field, badminton courts, a tennis court, and dedicated play zones, offering students a healthy balance of fitness, focus, and fun.',
      color: 'from-orange-50 to-orange-100'
    },
    {
      icon: '🎨',
      title: 'Creative Arts Studios',
      subtitle: 'Expression Without Boundaries',
      description:
        'Art, music, and dance find their home in our creative studios. These spaces invite students to experiment with form, sound, and movement—nurturing imagination, confidence, and artistic curiosity.',
      color: 'from-pink-50 to-pink-100'
    },
    {
      icon: '🎭',
      title: 'Auditorium',
      subtitle: 'Where Voices Rise and Talent Shines',
      description:
        'The auditorium is a vibrant, multi-purpose space designed for performances, cultural events, assemblies, and guest sessions. Equipped with modern acoustics and a professional ambiance, it offers students a meaningful platform to communicate, collaborate, and express their talents with confidence.',
      color: 'from-indigo-50 to-indigo-100'
    },
    {
      icon: '🥗',
      title: 'Cafeteria',
      subtitle: 'Hygienic, Fresh, Nourishing',
      description:
        'The cafeteria serves wholesome, hygienic meals in a clean, welcoming setting. With nutritious menu options and regular quality checks, it ensures that students stay energized throughout their school day.',
      color: 'from-lime-50 to-lime-100'
    },
    {
      icon: '🛡️',
      title: 'Safety & Security',
      subtitle: 'Protected at Every Step',
      description:
        'The campus is supported by 24/7 surveillance, controlled entry points, trained security staff, and comprehensive safety protocols. Every measure is in place to ensure a secure, reassuring environment for all learners.',
      color: 'from-slate-50 to-slate-100'
    },
    {
      icon: '🚌',
      title: 'Transportation',
      subtitle: 'Safe, Seamless Commute',
      description:
        'Our GPS-enabled buses, trained drivers, and monitored routes ensure that students travel safely to and from school. The transport system is reliable, well-supervised, and designed with student comfort in mind.',
      color: 'from-yellow-50 to-yellow-100'
    }
  ];

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
              🏫 Campus
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 text-xl lg:text-2xl font-semibold mb-8"
              style={{ color: '#8B1E1A' }}
            >
              <span>Spaces that Inspire</span>
              <span className="text-[#D6B25E]">|</span>
              <span>Designed for Discovery</span>
              <span className="text-[#D6B25E]">|</span>
              <span>Purposefully Equipped</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg max-w-3xl mx-auto"
              style={{ color: '#4F4F4F', lineHeight: '1.8' }}
            >
              Set across a sprawling 4-acre campus, Mapleford International School offers students
              the freedom to explore, learn, and thrive in an open, thoughtfully designed environment.
            </motion.p>
          </div>
        </section>

        {/* Campus Overview Image */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&h=800&fit=crop"
                alt="Mapleford Campus Overview"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Facilities Grid */}
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
                Our Facilities
              </h2>
              <p className="text-lg max-w-3xl mx-auto" style={{ color: '#4F4F4F' }}>
                Every corner of our campus is designed to inspire learning, creativity, and growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${facility.color} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
                >
                  <div className="text-5xl mb-4">{facility.icon}</div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#3B1A17'
                    }}
                  >
                    {facility.title}
                  </h3>
                  <p className="font-semibold mb-4" style={{ color: '#8B1E1A' }}>
                    {facility.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#4F4F4F' }}>
                    {facility.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sports Arena Highlight */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2
                  className="text-3xl lg:text-4xl font-bold mb-4"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#3B1A17'
                  }}
                >
                  ⚽ Sports Arena
                </h2>
                <p
                  className="text-2xl font-semibold mb-4"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#8B1E1A'
                  }}
                >
                  Chasing Goals! Soaring Spirits High!
                </p>
                <p className="text-lg italic mb-6" style={{ color: '#5A1411' }}>
                  Where passion charges the field — and every sport, a lesson in excellence
                </p>
                <p className="mb-6" style={{ color: '#4F4F4F', lineHeight: '1.8' }}>
                  At Mapleford International School, growth isn't limited to books and classrooms —
                  it thrives on the field, on the court, and in every challenge that builds spirit
                  and strength.
                </p>
                <p className="mb-6" style={{ color: '#4F4F4F', lineHeight: '1.8' }}>
                  Every match played, every goal scored, and every serve perfected shapes not just
                  an athlete, but a resilient, disciplined, and determined individual.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {['Football', 'Badminton', 'Tennis', 'Athletics'].map((sport, index) => (
                    <div key={index} className="flex items-center">
                      <span
                        className="w-3 h-3 rounded-full mr-3"
                        style={{ background: '#D6B25E' }}
                      ></span>
                      <span className="font-medium" style={{ color: '#3B1A17' }}>
                        {sport}
                      </span>
                    </div>
                  ))}
                </div>
                <p style={{ color: '#4F4F4F', lineHeight: '1.8' }}>
                  Our state-of-the-art infrastructure — from modern sports arenas to safe,
                  well-equipped training zones — forms the backbone of an environment that fosters
                  confidence, team spirit, and leadership.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=600&fit=crop"
                    alt="Football Field"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&h=600&fit=crop"
                    alt="Badminton Court"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&h=600&fit=crop"
                    alt="Tennis Court"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=600&fit=crop"
                    alt="Athletics Track"
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
                Experience Our Campus
              </h2>
              <p className="text-xl text-red-100 mb-8">
                Schedule a visit and explore our world-class facilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/admissions"
                  className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-colors duration-300 shadow-lg"
                >
                  Schedule a Visit
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