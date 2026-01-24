'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">

        {/* Hero Section */}
        <section className="relative py-32 lg:py-48 overflow-hidden bg-[#FDF6E3]/30">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#D6B25E]/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#8B1E1A]/5 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
            >
              <h1
                className="text-5xl lg:text-7xl font-black mb-6 text-[#1A1A1A]"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">We Are</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#8B1E1A] mb-8" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Rooted in Legacy. Ready for Tomorrow.
              </h2>
            </motion.div>
          </div>
        </section>

        {/* Who We Are Content */}
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
                    Located in the heart of Hayathnagar, Hyderabad, <strong>Mapleford International School</strong> carries forward the distinguished three-decade legacy of <strong>Megacity High School</strong> - a trusted institution known for its strong values and commitment to quality education.
                  </p>
                  <p>
                    Today, this legacy is reimagined for a new era—one that embraces innovation, global horizons, and a future-ready learning experience.
                  </p>
                  <p>
                    As a CBSE-affiliated co-education institution, Mapleford offers a structured, meticulous, and value-driven academic foundation. Through our collaboration with <strong>Maple Bear Canadian School</strong>, we bring international perspectives, modern pedagogy, holistic development, and global pathways to every learner — creating a harmonious blend of Indian academic depth and world-class educational insight.
                  </p>
                  <div className="p-8 bg-amber-50 rounded-3xl border-l-4 border-[#D6B25E] shadow-sm">
                    <p className="italic font-bold text-[#8B1E1A] text-xl">
                      "Empowering Mapleites to rise with Erudition, Ethos, and Excellence"
                    </p>
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
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3] relative"
                >
                  <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1000&h=800&fit=crop"
                    alt="Mapleford Legacy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our School of Thought / Philosophy */}
        <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-5xl mb-4 block">🧠</span>
              <h2
                className="text-5xl lg:text-6xl font-black mb-8 leading-tight text-[#1A1A1A]"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                Our School of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Thought</span>
              </h2>
              <h3 className="text-2xl font-bold text-[#8B1E1A] mb-8" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Knowledge in Pursuit of Integrity and Excellence
              </h3>
            </div>

            <div className="max-w-4xl mx-auto text-center space-y-8 text-xl text-[#4F4F4F] leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>
              <p>
                At Mapleford International School, the euphony of intellect and integrity nurtures young talent to discover the courage to question, the discipline to grow, and the humility to keep learning.
              </p>
              <p>
                Our approach fosters disciplined thinking, ethical actions, and purposeful ambitions, shaping individuals to excel with conviction and contribute with conscience.
              </p>
              <p className="font-medium text-[#1A1A1A]">
                We strive to raise curious thinkers, compassionate leaders, and confident achievers— grounded in enduring values and inspired to excel beyond boundaries.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2
                className="text-5xl lg:text-6xl font-black mb-8 text-[#1A1A1A]"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Team</span>
              </h2>
              <p className="text-xl text-[#4F4F4F] max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>
                The heart of Mapleford is an empathetic, compassionate, dynamic, and visionary team, a committed leadership, and devoted mentors at its core. Our compass guides students toward steadiness and inspiration.
              </p>
            </div>

            <div className="space-y-32">
              {/* Chairman Message */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
              >
                <div className="lg:col-span-4">
                  <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop" alt="P. Subba Reddy - Chairman" className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                      <h4 className="text-2xl font-bold">P. Subba Reddy</h4>
                      <p className="text-amber-400 font-medium">Chairman</p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-8 space-y-6 text-lg text-[#4F4F4F] leading-relaxed">
                  <h3 className="text-3xl font-black text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>Message From the Chairman</h3>
                  <div className="w-20 h-1.5 bg-[#8B1E1A] rounded-full"></div>
                  <p>
                    At Mapleford International School, we believe that education is not merely the transfer of knowledge but the cultivation of character, curiosity, and compassion. As we carry forward the distinguished legacy of Megacity High School, our mission remains grounded in a simple truth: children learn best when they feel valued, supported, and inspired to discover who they are.
                  </p>
                  <p>
                    For three decades, our journey has been shaped by the belief that schooling must prepare students for life, not just for examinations. Today, Mapleford stands as an evolution of that belief, embracing global perspectives while staying anchored in timeless values. We strive to create an environment where learning is joyful, where discipline is self-driven, and where every accomplishment is measured not only by success, but by sincerity and effort.
                  </p>
                  <p>
                    I remain deeply committed to fostering a school community where every child feels empowered to learn, lead, and contribute meaningfully to society. Together, let us shape a future where every learning matters — the spark in a question, the pride in a goal, and the courage to try again.
                  </p>
                  <p className="font-bold text-[#1A1A1A] pt-4">
                    P. Subba Reddy<br />
                    <span className="text-sm font-medium text-gray-500">— Chairman, Mapleford International School</span>
                  </p>
                </div>
              </motion.div>

              {/* Principal Message */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
              >
                <div className="lg:col-span-8 order-2 lg:order-1 space-y-6 text-lg text-[#4F4F4F] leading-relaxed">
                  <h3 className="text-3xl font-black text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>Message from the Principal</h3>
                  <div className="w-20 h-1.5 bg-[#D6B25E] rounded-full"></div>
                  <p>
                    Education, to us, is not a race but a journey. It is augmented through attentive listening, thoughtful guidance, and learning experiences that encourage children to think independently and understand deeply.
                  </p>
                  <p>
                    Our faculty brings together expertise and empathy, ensuring that every learner is seen not just for their academic abilities, but for the individual they are becoming. We emphasize balance—between discipline and creativity, reflection and action, ambition and humility—so that students develop the confidence to succeed and the character to choose wisely.
                  </p>
                  <p>
                    As Mapleford steps into a new chapter, my vision is to lead a school where learning feels alive, and every child leaves each day a little more empowered than the last. Together, we aim to shape individuals who not only excel in the world but also enrich it with their integrity, kindness, and courage.
                  </p>
                  <p className="font-bold text-[#1A1A1A] pt-4">
                    [Principal Name]<br />
                    <span className="text-sm font-medium text-gray-500">— Principal, Mapleford International School</span>
                  </p>
                </div>
                <div className="lg:col-span-4 order-1 lg:order-2">
                  <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop" alt="Principal" className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                      <h4 className="text-2xl font-bold">[Principal Name]</h4>
                      <p className="text-amber-400 font-medium">Principal</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}