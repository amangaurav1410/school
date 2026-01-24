'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

interface Facility {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  color: string;
}

export default function Campus() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const facilities: Facility[] = [
    {
      icon: '📘',
      title: 'Classrooms',
      subtitle: 'Smart, Bright, Engaging',
      description: 'Our classrooms are designed to be open, bright, and technology-enabled—spaces where students learn with focus and comfort. Interactive boards, ergonomic seating, and natural light come together to create an environment that supports active engagement and clarity in thought.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop',
      color: 'bg-blue-50'
    },
    {
      icon: '📚',
      title: 'Library',
      subtitle: 'A Quiet World of Imagination',
      description: 'The library is a calm and inviting corner of the campus, offering students a rich collection of books, reference materials, and digital resources. Thoughtfully arranged reading areas allow learners to slow down, explore ideas, and build a lasting love for literature.',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop',
      color: 'bg-amber-50'
    },
    {
      icon: '💡',
      title: 'STEAM & Innovation Labs',
      subtitle: 'Ideas in Motion',
      description: 'Our innovation spaces, including the STEAM and robotics labs, bring learning to life through experimentation and hands-on exploration. Equipped with modern tools and creative resources, these labs encourage students to imagine, design, and build with confidence.',
      image: 'https://images.unsplash.com/photo-1564866657311-09b5123108c2?w=800&h=600&fit=crop',
      color: 'bg-purple-50'
    },
    {
      icon: '🖥️',
      title: 'Digital Learning Lab',
      subtitle: 'Skills for a New Age',
      description: 'The digital lab integrates essential technological skills into daily learning. With updated systems, guided modules, and safe browsing protocols, students develop digital fluency and responsible online habits in a structured, supervised environment.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
      color: 'bg-cyan-50'
    },
    {
      icon: '🏫',
      title: 'Learning Resource Center',
      subtitle: 'Research & Reflection',
      description: 'The resource center provides a quiet, structured space for reading, research, and academic enrichment. Students use this space to clarify concepts, work independently, and explore subjects beyond the classroom.',
      image: 'https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?w=800&h=600&fit=crop',
      color: 'bg-green-50'
    },
    {
      icon: '⚽',
      title: 'Sports Arena',
      subtitle: 'Fields for Strength & Spirit',
      description: 'Our sports arena encourages movement, teamwork, and athletic discipline. The campus features a football field, badminton courts, a tennis court, and dedicated play zones, offering students a healthy balance of fitness, focus, and fun.',
      image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?w=800&h=600&fit=crop',
      color: 'bg-orange-50'
    },
    {
      icon: '🎨',
      title: 'Creative Arts Studios',
      subtitle: 'Expression Without Boundaries',
      description: 'Art, music, and dance find their home in our creative studios. These spaces invite students to experiment with form, sound, and movement—nurturing imagination, confidence, and artistic curiosity.',
      image: 'https://images.unsplash.com/photo-1460518451285-cd3af4402127?w=800&h=600&fit=crop',
      color: 'bg-pink-50'
    },
    {
      icon: '🎭',
      title: 'Auditorium',
      subtitle: 'Where Voices Rise and Talent Shines',
      description: 'The auditorium is a vibrant, multi-purpose space designed for performances, cultural events, assemblies, and guest sessions. Equipped with modern acoustics and a professional ambiance, it offers students a meaningful platform to communicate, collaborate, and express their talents with confidence.',
      image: 'https://images.unsplash.com/photo-1503095396549-80725a3a0609?w=800&h=600&fit=crop',
      color: 'bg-indigo-50'
    },
    {
      icon: '🥗',
      title: 'Cafeteria',
      subtitle: 'Hygienic, Fresh, Nourishing',
      description: 'The cafeteria serves wholesome, hygienic meals in a clean, welcoming setting. With nutritious menu options and regular quality checks, it ensures that students stay energized throughout their school day.',
      image: 'https://images.unsplash.com/photo-1550966842-30c29a00b601?w=800&h=600&fit=crop',
      color: 'bg-lime-50'
    },
    {
      icon: '🛡️',
      title: 'Safety & Security',
      subtitle: 'Protected at Every Step',
      description: 'The campus is supported by 24/7 surveillance, controlled entry points, trained security staff, and comprehensive safety protocols. Every measure is in place to ensure a secure, reassuring environment for all learners.',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=600&fit=crop',
      color: 'bg-slate-50'
    },
    {
      icon: '🚌',
      title: 'Transportation',
      subtitle: 'Safe, Seamless Commute',
      description: 'Our GPS-enabled buses, trained drivers, and monitored routes ensure that students travel safely to and from school. The transport system is reliable, well-supervised, and designed with student comfort in mind.',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop',
      color: 'bg-yellow-50'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 min-h-screen bg-white text-[#1A1A1A]">
        {/* Hero Section */}
        <section className="relative py-32 lg:py-52 overflow-hidden bg-[#FDF6E3]/30">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstripe-light.png')] opacity-30"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <h1
                className="text-6xl lg:text-9xl font-bold mb-8 leading-[0.9]"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                Campus
              </h1>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xl lg:text-2xl font-bold text-[#8B1E1A] italic" style={{ fontFamily: '"Raleway", sans-serif' }}>
                <span>Spaces that Inspire</span>
                <span className="hidden sm:inline">|</span>
                <span>Designed for Discovery</span>
                <span className="hidden sm:inline">|</span>
                <span>Purposefully Equipped</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-32">
              {facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={`order-2 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{facility.icon}</span>
                      <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>{facility.title}</h2>
                    </div>
                    <h3 className="text-2xl font-bold text-[#8B1E1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>{facility.subtitle}</h3>
                    <p className="text-xl text-gray-600 leading-relaxed font-light" style={{ fontFamily: '"Lato", sans-serif' }}>
                      {facility.description}
                    </p>
                  </div>
                  <div className={`order-1 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className={`relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3] ${facility.color}`}>
                      <img
                        src={facility.image}
                        className="w-full h-full object-cover mix-blend-multiply opacity-80"
                        alt={facility.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-red-50 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl lg:text-6xl font-black mb-10 text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>Witness it <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Yourself.</span></h2>
            <div className="flex gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">Request a Tour</Button>
              <Button href="/admissions" variant="outline" size="lg">Join the Legacy</Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}