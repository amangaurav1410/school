'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

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
      title: 'Smart & Well-ventilated Classrooms',
      subtitle: 'Smart. Bright. Engaging',
      description: 'Our classrooms are designed to be open, bright, and technology-enabled—spaces where students learn with focus and comfort. With digital boards and projectors, lessons become dynamic and visual—making learning engaging, interactive, and impactful.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&fit=crop',
      category: 'Academic',
      features: ['Digital Boards', 'Open Spaces', 'Interactive Learning']
    },
    {
      id: 'science-labs',
      title: 'Science Labs',
      subtitle: 'Explore. Experiment. Discover.',
      description: 'Dedicated Physics, Chemistry, and Biology laboratories provide students with hands-on learning experiences that bring science to life. Well-equipped and thoughtfully designed, these labs encourage observation, experimentation, and inquiry—helping students develop scientific thinking and a deeper understanding of the world around them.',
      image: 'https://images.unsplash.com/photo-1564866657311-09b5123108c2?w=1200&fit=crop',
      category: 'Science',
      features: ['Physics Lab', 'Chemistry Lab', 'Biology Lab']
    },
    {
      id: 'math-lab',
      title: 'Mathematics Lab',
      subtitle: 'Think. Solve. Apply.',
      description: 'The Mathematics Lab transforms abstract concepts into practical understanding. Through activity-based learning and hands-on tools, students build logical reasoning, problem-solving skills, and confidence—making maths engaging, intuitive, and enjoyable.',
      image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=1200&fit=crop',
      category: 'Academic',
      features: ['Activity-based', 'Hands-on Tools', 'Logical Reasoning']
    },
    {
      id: 'computer-lab',
      title: 'Computer Lab',
      subtitle: 'Learn. Code. Innovate.',
      description: 'Our modern computer lab supports technology-integrated learning and digital literacy across grades. With updated systems and guided instruction, students develop essential computing skills, responsible digital habits, and confidence in navigating today’s digital landscape.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&fit=crop',
      category: 'Technology',
      features: ['Modern Systems', 'Digital Literacy', 'Coding']
    },
    {
      id: 'library',
      title: 'Library',
      subtitle: 'Quiet. Inviting. Inspiring.',
      description: 'Our library is a calm and welcoming space where curiosity finds direction. Stocked with a wide range of age-appropriate books, reference materials, and learning resources, it encourages students to read, research, and reflect. Comfortable reading corners and a peaceful ambience help nurture imagination and a lifelong love for learning.',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&fit=crop',
      category: 'Research',
      features: ['Wide Range Books', 'Reading Corners', 'Peaceful Ambience']
    },
    {
      id: 'resource-rooms',
      title: 'Resource Rooms',
      subtitle: 'Supportive. Inclusive. Individualised.',
      description: 'Dedicated resource rooms offer personalised academic and special education support in a nurturing setting. Designed to address diverse learning needs, these spaces ensure every child receives focused attention, encouragement, and the support required to learn at their own pace.',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&fit=crop',
      category: 'Support',
      features: ['Personalised Support', 'Special Education', 'Nurturing Setting']
    }
  ];

  const sports = [
    { name: "Cricket", motto: "Skill. Strategy. Sportsmanship.", desc: "A dedicated cricket ground gives students the space to refine technique, build focus, and experience the spirit of team play—right from practice sessions to match days.", icon: "🏏" },
    { name: "Basketball", motto: "Agility. Teamwork. Pace.", desc: "Our basketball court keeps the energy high, helping students develop quick thinking, coordination, and collaborative play through fast-paced action.", icon: "🏀" },
    { name: "Skating", motto: "Balance. Confidence. Control.", desc: "A safe and engaging skating area allows children to build balance, coordination, and self-assurance—while enjoying movement with freedom and joy.", icon: "⛸️" },
    { name: "Tennis", motto: "Precision. Endurance. Grace.", desc: "With tennis courts designed for both beginners and aspiring players, this space sharpens focus, coordination, and competitiveness.", icon: "🎾" },
    { name: "Football", motto: "Strength. Teamwork. Spirit.", desc: "A lush football ground encourages students to play with passion, build resilience, and learn leadership through teamwork and strategy.", icon: "⚽" },
    { name: "Athletics", motto: "Speed. Strength. Determination.", desc: "Athletics facilities encourage students to explore running, jumping, and field events—nurturing fitness, discipline, and individual bests.", icon: "🎽" },
    { name: "Kids’ Play Area", motto: "Safe. Active. Joyful.", desc: "A colourful, secure play zone lets younger learners climb, explore, and socialise—building confidence through guided free play.", icon: "🪁" },
    { name: "Badminton", motto: "Reflex. Rhythm. Focus.", desc: "Badminton courts promote agility and sharp reflexes, offering students a fast, engaging sport that builds coordination and concentration.", icon: "🏸" },
    { name: "Indoor Play Area", motto: "All-Weather. Active. Inclusive.", desc: "Designed for year-round activity, the indoor play area keeps students moving and engaged—rain or shine—through structured and free play.", icon: "🏟️" }
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
              <h1 className="text-[56px] md:text-[92px] lg:text-[156px] font-black mb-10 leading-[0.85] tracking-tighter text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>
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
                      <h2 className="text-[44px] lg:text-[68px] font-black text-[#1A1A1A] leading-tight" style={{ fontFamily: '"Raleway", sans-serif' }}>{fac.title}</h2>
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

        {/* Sports Arena Section */}
        <section className="py-32 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <span className="text-[#d0302b] font-black uppercase tracking-[0.4em] text-xs">Vitality & Vigor</span>
              <h2 className="text-[32px] lg:text-[68px] font-black text-[#1A1A1A] mt-4" style={{ fontFamily: '"Raleway", sans-serif' }}>Sports <span className="text-[#d0302b]">Arena</span></h2>
              <p className="text-xl text-gray-500 font-medium mt-6 max-w-2xl mx-auto">Spaces designed to build strength, confidence, and teamwork</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sports.map((sport, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx}
                  className="p-10 rounded-[3rem] bg-white shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
                >
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{sport.icon}</div>
                  <h4 className="text-2xl font-black text-[#1A1A1A] mb-2">{sport.name}</h4>
                  <p className="text-[#d0302b] font-bold text-sm mb-4 uppercase tracking-widest">{sport.motto}</p>
                  <p className="text-gray-500 font-medium leading-relaxed">{sport.desc}</p>
                </motion.div>
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
              <h2 className="text-[44px] lg:text-[92px] font-black text-[#1A1A1A] leading-[1] tracking-tighter" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Experience <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0302b] via-[#D6B25E] to-[#FFA500]">The Magic </span>
                In Person.
              </h2>
              <p className="text-xl text-[#4F4F4F] font-medium max-w-2xl mx-auto leading-relaxed">
                We welcome you to visit our campus and witness the environment that fuels our students&apos; ambitions every single day.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8">
                <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">Request a Tour</Button>
                <Button href="/admissions" variant="outline" size="lg" className="w-full sm:w-auto">Join The Legacy</Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}