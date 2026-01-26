'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface Facility {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  features: string[];
  icon?: string;
}

export default function Campus() {
  const containerRef = useRef(null);

  const facilities: Facility[] = [
    {
      id: 'classrooms',
      title: 'Classrooms',
      subtitle: 'Smart, Bright, Engaging',
      description: 'Our classrooms are designed to be open, bright, and technology-enabled—spaces where students learn with focus and comfort. Interactive boards, ergonomic seating, and natural light come together to create an environment that supports active engagement and clarity in thought.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&fit=crop',
      category: 'Academic',
      features: ['Interactive Panels', 'Ergonomic Seating', 'Natural Lighting']
    },
    {
      id: 'library',
      title: 'Library',
      subtitle: 'A Quiet World of Imagination',
      description: 'The library is a calm and inviting corner of the campus, offering students a rich collection of books, reference materials, and digital resources. Thoughtfully arranged reading areas allow learners to slow down, explore ideas, and build a lasting love for literature.',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&fit=crop',
      category: 'Research',
      features: ['Curated Collection', 'Reading Zones', 'Digital Resources']
    },
    {
      id: 'steam-labs',
      title: 'STEAM & Innovation Labs',
      subtitle: 'Ideas in Motion',
      description: 'Our innovation spaces, including the STEAM and robotics labs, bring learning to life through experimentation and hands-on exploration. Equipped with modern tools and creative resources, these labs encourage students to imagine, design, and build with confidence.',
      image: 'https://images.unsplash.com/photo-1564866657311-09b5123108c2?w=1200&fit=crop',
      category: 'Science',
      features: ['Robotics Kits', '3D Printing', 'Experimentation Zones']
    },
    {
      id: 'digital-lab',
      title: 'Digital Learning Lab',
      subtitle: 'Skills for a New Age',
      description: 'The digital lab integrates essential technological skills into daily learning. With updated systems, guided modules, and safe browsing protocols, students develop digital fluency and responsible online habits in a structured, supervised environment.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&fit=crop',
      category: 'Technology',
      features: ['Safe Browsing', 'Guided Modules', 'Latest Hardware']
    },
    {
      id: 'learning-resource',
      title: 'Learning Resource Center',
      subtitle: 'Research & Reflection',
      description: 'The resource center provides a quiet, structured space for reading, research, and academic enrichment. Students use this space to clarify concepts, work independently, and explore subjects beyond the classroom.',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&fit=crop',
      category: 'Academic',
      features: ['Research Desks', 'Academic Enrichment', 'Quiet Zones']
    },
    {
      id: 'sports',
      title: 'Sports Arena',
      subtitle: 'Fields for Strength & Spirit',
      description: 'Our sports arena encourages movement, teamwork, and athletic discipline. The campus features a football field, badminton courts, a tennis court, and dedicated play zones, offering students a healthy balance of fitness, focus, and fun.',
      image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?w=1200&fit=crop',
      category: 'Sports',
      features: ['Football Field', 'Tennis Court', 'Badminton Courts']
    },
    {
      id: 'arts',
      title: 'Creative Arts Studios',
      subtitle: 'Expression Without Boundaries',
      description: 'Art, music, and dance find their home in our creative studios. These spaces invite students to experiment with form, sound, and movement—nurturing imagination, confidence, and artistic curiosity.',
      image: 'https://images.unsplash.com/photo-1460518451285-cd3af4402127?w=1200&fit=crop',
      category: 'Arts',
      features: ['Music Studio', 'Dance Floor', 'Visual Arts Space']
    },
    {
      id: 'auditorium',
      title: 'Auditorium',
      subtitle: 'Where Voices Rise and Talent Shines',
      description: 'The auditorium is a vibrant, multi-purpose space designed for performances, cultural events, assemblies, and guest sessions. Equipped with modern acoustics and a professional ambiance, it offers students a meaningful platform to communicate, collaborate, and express their talents with confidence.',
      image: 'https://images.unsplash.com/photo-1503023345030-a79b9bd421b7?w=1200&fit=crop',
      category: 'Culture',
      features: ['Modern Acoustics', 'Multi-purpose Hall', 'Professional Ambiance']
    }
  ];

  const others = [
    { title: "Cafeteria", icon: "🥗", subtitle: "Hygienic, Fresh, Nourishing", desc: "Serving wholesome, hygienic meals in a clean, welcoming setting with regular quality checks." },
    { title: "Safety & Security", icon: "🛡️", subtitle: "Protected at Every Step", desc: "24/7 surveillance, controlled entry points, and trained security staff." },
    { title: "Transportation", icon: "🚌", subtitle: "Safe, Seamless Commute", desc: "GPS-enabled buses, trained drivers, and monitored routes for a reliable commute." }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-white font-sans" ref={containerRef}>
      <Header />

      <div className="pt-20">
        {/* Dynamic Hero Section */}
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.div
              animate={{ scale: [1, 1.15, 1], rotate: [0, -45, 0], x: [0, -30, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#d0302b]/10 to-[#8d211d]/5 rounded-full blur-3xl opacity-60"
            />
            <motion.div
              animate={{ scale: [1.1, 1, 1.1], rotate: [0, 45, 0], y: [0, 50, 0] }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-1/4 -right-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-[#D6B25E]/10 to-transparent rounded-full blur-3xl opacity-60"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }} >
              <span className="inline-block px-6 py-2 rounded-full bg-[#D6B25E]/10 text-[#D6B25E] font-black text-sm tracking-[0.2em] uppercase mb-8 shadow-sm border border-[#D6B25E]/10">
                World-Class Infrastructure
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black mb-10 leading-[0.85] tracking-tighter text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Campus
              </h1>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xl md:text-2xl font-bold text-gray-500" style={{ fontFamily: '"Raleway", sans-serif' }}>
                <span className="hover:text-[#d0302b] transition-colors cursor-default">Spaces that Inspire</span>
                <span className="hidden sm:inline opacity-20">|</span>
                <span className="hover:text-[#d0302b] transition-colors cursor-default">Designed for Discovery</span>
                <span className="hidden sm:inline opacity-20">|</span>
                <span className="hover:text-[#d0302b] transition-colors cursor-default">Purposefully Equipped</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Immersive Facility Showcase */}
        <section className="py-32 bg-white selection:bg-[#d0302b] selection:text-white border-t border-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-48">
              {facilities.map((fac, idx) => (
                <motion.div
                  key={fac.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="w-full lg:w-1/2 space-y-10">
                    <div className="space-y-4">
                      <span className="text-[#d0302b] font-black uppercase tracking-[0.4em] text-xs">Section: {fac.category}</span>
                      <h2 className="text-5xl lg:text-7xl font-black text-[#1A1A1A] leading-tight" style={{ fontFamily: '"Raleway", sans-serif' }}>{fac.title}</h2>
                      <h3 className="text-2xl font-bold text-[#D6B25E] italic" style={{ fontFamily: '"Raleway", sans-serif' }}>{fac.subtitle}</h3>
                    </div>
                    <p className="text-xl text-gray-600 leading-relaxed font-light" style={{ fontFamily: '"Lato", sans-serif' }}>{fac.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                      {fac.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#d0302b]/30 transition-all duration-300">
                          <div className="w-2 h-2 rounded-full bg-[#d0302b]"></div>
                          <span className="text-sm font-bold text-[#1A1A1A]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 relative group">
                    <div className="absolute -inset-6 bg-gradient-to-r from-[#D6B25E] to-[#d0302b] rounded-[4rem] blur-2xl opacity-10 group-hover:opacity-25 transition-opacity duration-700"></div>
                    <div className="relative aspect-square sm:aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl">
                      <img src={fac.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={fac.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Facilities Grid */}
        <section className="py-32 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <h2 className="text-4xl lg:text-6xl font-black text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>Support <span className="text-[#d0302b]">& Services</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {others.map((item, idx) => (
                <div key={idx} className="p-10 rounded-[3rem] bg-white shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="text-2xl font-black text-[#1A1A1A] mb-2">{item.title}</h4>
                  <p className="text-[#d0302b] font-bold text-sm mb-4 uppercase tracking-widest">{item.subtitle}</p>
                  <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section - Golden Theme */}
        <section className="py-32 relative flex items-center justify-center overflow-hidden bg-[#FDF6E3]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-[#D6B25E] rounded-full blur-[120px]"></div>
            <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-[#d0302b] rounded-full blur-[120px]"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="space-y-12" >
              <h2 className="text-5xl lg:text-8xl font-black text-[#1A1A1A] leading-[1] tracking-tighter" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Experience <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0302b] via-[#D6B25E] to-[#FFA500]">The Magic </span>
                In Person.
              </h2>
              <p className="text-xl text-[#4F4F4F] font-medium max-w-2xl mx-auto leading-relaxed">
                We welcome you to visit our campus and witness the environment that fuels our students&apos; ambitions every single day.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8">
                <Link href="/contact" className="px-12 py-5 rounded-2xl font-black text-xl text-white shadow-2xl hover:scale-105 transition-all w-full sm:w-auto" style={{ background: 'linear-gradient(135deg, #d0302b 0%, #8d211d 100%)' }} > Request a Tour </Link>
                <Link href="/admissions" className="px-12 py-5 border-2 border-[#1A1A1A]/10 text-[#1A1A1A] rounded-2xl font-black text-xl hover:bg-white/50 transition-all w-full sm:w-auto" > Join The Legacy </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}