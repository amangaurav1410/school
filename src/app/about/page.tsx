'use client';

import { motion, Variants } from 'framer-motion';
import { useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function About() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <div className="pt-20 overflow-hidden">
        {/* Hero Section - High Impact Redesign */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Animated Background Shapes */}
          <div className="absolute inset-0 z-0">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                x: [0, 50, 0]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#D6B25E]/10 to-[#FFA500]/5 rounded-full blur-3xl opacity-70"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [0, -90, 0],
                x: [0, -50, 0]
              }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-1/4 -left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-[#d0302b]/5 to-transparent rounded-full blur-3xl opacity-70"
            />
          </div>

          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstripe-light.png')] opacity-[0.05]"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              <span className="inline-block px-8 py-2 rounded-full bg-[#d0302b]/10 text-[#d0302b] font-black text-sm tracking-[0.3em] uppercase mb-4 shadow-sm border border-[#d0302b]/10">
                Our Legacy
              </span>
              <h1
                className="text-6xl md:text-8xl lg:text-[10rem] font-black mb-8 leading-[0.85] tracking-tighter text-[#1A1A1A]"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                About <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] via-[#FFA500] to-[#d0302b] drop-shadow-sm">
                  Mapleford
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#d0302b] max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Rooted in Legacy. <span className="text-[#1A1A1A]">Ready for Tomorrow.</span>
              </h2>
            </motion.div>
          </div>
        </section>

        {/* The Story Section - Modern Side-by-Side */}
        <section className="py-32 relative bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="space-y-10"
              >
                <div>
                  <span className="text-[#D6B25E] font-black uppercase tracking-[0.3em] text-sm mb-4 block">Who We Are</span>
                  <h2 className="text-5xl lg:text-7xl font-black text-[#1A1A1A] leading-[1.1] mb-8" style={{ fontFamily: '"Raleway", sans-serif' }}>
                    Three Decades <br /> of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0302b] to-[#8d211d]">Excellence.</span>
                  </h2>
                  <div className="space-y-6 text-xl text-[#4F4F4F] leading-relaxed font-light" style={{ fontFamily: '"Lato", sans-serif' }}>
                    <p>
                      Located in Hayathnagar, Hyderabad, <strong>Mapleford International School</strong> carries forward the distinguished legacy of <strong>Megacity High School</strong> — a trusted institution known for its commitment to quality education.
                    </p>
                    <p>
                      Today, this legacy is reimagined for a new era. As a CBSE-affiliated co-education institution, we combine India&apos;s academic rigour with modern global pedagogy in collaboration with <strong>Maple Bear Canadian School</strong>.
                    </p>
                  </div>
                </div>

                <div className="p-10 bg-gray-50 rounded-[3rem] border-l-[6px] border-[#D6B25E] shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#D6B25E]/5 rounded-bl-[100%] transition-transform group-hover:scale-110"></div>
                  <p className="font-black text-[#d0302b] text-2xl leading-tight italic relative z-10">
                    &quot;Empowering Mapleites to rise with Erudition, Ethos, and Excellence&quot;
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="relative"
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#D6B25E] to-[#d0302b] rounded-[4rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                    <img
                      src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=1500&fit=crop"
                      alt="Mapleford Legacy"
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                  {/* Badge */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -right-8 -bottom-8 bg-[#1A1A1A] p-10 rounded-full shadow-2xl border-4 border-white text-white flex flex-col items-center justify-center text-center w-48 h-48 z-20"
                  >
                    <span className="text-4xl font-black text-[#D6B25E]">30+</span>
                    <span className="text-xs font-bold uppercase tracking-widest leading-tight">Years of<br />Impact</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* School of Thought - Immersive Center Split */}
        <section className="py-32 bg-gray-50/50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-4xl mx-auto space-y-12"
            >
              <h2 className="text-5xl lg:text-7xl font-black text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Our School of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Thought</span>
              </h2>
              <div className="space-y-8 text-2xl text-[#4F4F4F] leading-relaxed font-light" style={{ fontFamily: '"Lato", sans-serif' }}>
                <p>
                  At Mapleford, intellect meets integrity. We nurture talent to discover the courage to question, the discipline to grow, and the humility to keep learning.
                </p>
                <p className="font-black text-[#d0302b]">
                  We strive to raise curious thinkers, compassionate leaders, and confident achievers — grounded in enduring values and inspired to excel beyond boundaries.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Section - Refined Cards */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24 space-y-4">
              <span className="text-[#d0302b] font-black uppercase tracking-[0.3em] text-sm block">Our Leadership</span>
              <h2 className="text-5xl lg:text-7xl font-black text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Mentors of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Vision</span>
              </h2>
              <p className="text-xl text-[#4F4F4F] max-w-3xl mx-auto font-medium">A dedicated team guiding every Mapleite toward inspiration and steadiness.</p>
            </div>

            <div className="space-y-40">
              {/* Chairman */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center"
              >
                <div className="lg:col-span-5 relative group">
                  <div className="absolute -inset-4 bg-[#d0302b]/5 rounded-[3.5rem] scale-95 group-hover:scale-100 transition-transform duration-700"></div>
                  <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&fit=crop" alt="Chairman" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white">
                      <h4 className="text-3xl font-black mb-1">P. Subba Reddy</h4>
                      <p className="text-[#D6B25E] font-black uppercase tracking-widest text-sm">Chairman</p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 space-y-8">
                  <h3 className="text-4xl font-black text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>Guidance with Heart</h3>
                  <div className="w-24 h-2 bg-[#d0302b] rounded-full"></div>
                  <div className="space-y-6 text-xl text-[#4F4F4F] leading-relaxed font-light">
                    <p>&quot;At Mapleford, we believe education is the cultivation of character. Our journey for three decades has been shaped by the belief that schooling must prepare students for life, not just examinations.&quot;</p>
                    <p>&quot;I remain deeply committed to fostering a school community where every child feels empowered to learn, lead, and contribute meaningfully to society.&quot;</p>
                  </div>
                </div>
              </motion.div>

              {/* Principal */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center lg:flex-row-reverse"
              >
                <div className="lg:col-span-7 space-y-8 lg:order-2">
                  <h3 className="text-4xl font-black text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>Empowering Potential</h3>
                  <div className="w-24 h-2 bg-[#D6B25E] rounded-full"></div>
                  <div className="space-y-6 text-xl text-[#4F4F4F] leading-relaxed font-light">
                    <p>&quot;Education is not a race but a journey. We emphasize balance — between discipline and creativity, reflection and action — so students develop the confidence to succeed and the character to choose wisely.&quot;</p>
                    <p>&quot;My vision is to lead a school where learning feels alive, and every child leaves each day a little more empowered than the last.&quot;</p>
                  </div>
                </div>
                <div className="lg:col-span-5 relative group lg:order-1">
                  <div className="absolute -inset-4 bg-[#D6B25E]/5 rounded-[3.5rem] scale-95 group-hover:scale-100 transition-transform duration-700"></div>
                  <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&fit=crop" alt="Principal" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white">
                      <h4 className="text-3xl font-black mb-1">Ms. Sarah Thompson</h4>
                      <p className="text-[#D6B25E] font-black uppercase tracking-widest text-sm">Principal</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Brochure - High Impact Redesign (Sleek Version) */}
        <section className="py-24 relative bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Refined Minimalist Card */}
              <div className="bg-[#FAF9F6] rounded-[5rem] p-10 lg:p-20 border border-gray-100 relative z-10 overflow-hidden shadow-sm">
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-50/50 to-transparent pointer-events-none"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center text-left">
                  <div className="space-y-12">
                    <div className="space-y-6">
                      <span className="text-[#d0302b] font-black uppercase tracking-[0.5em] text-[10px] block">Global Admissions</span>
                      <h2 className="text-6xl lg:text-[5.5rem] font-black text-[#1A1A1A] leading-[0.95] tracking-tighter" style={{ fontFamily: '"Raleway", sans-serif' }}>
                        Take the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] via-[#FFA500] to-[#d0302b]">Next Step.</span>
                      </h2>
                    </div>

                    <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-lg">
                      Embark on a voyage of discovery. The roadmap to a world-class education for your child is now open for enrollment.
                    </p>

                    <div className="flex flex-wrap gap-8 pt-4">
                      <button
                        className="px-14 py-6 rounded-3xl font-black text-xl text-white shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 group"
                        style={{ background: 'linear-gradient(135deg, #d0302b 0%, #8d211d 100%)' }}
                        onClick={() => alert('Brochure coming soon!')}
                      >
                        Get Prospectus
                        <span className="text-3xl group-hover:translate-x-2 transition-transform">→</span>
                      </button>

                      <Link
                        href="/admissions"
                        className="px-14 py-6 rounded-3xl font-black text-xl text-[#1A1A1A] border border-gray-200 hover:bg-white transition-all hover:shadow-xl"
                      >
                        Apply Online
                      </Link>
                    </div>
                  </div>

                  {/* Sleek Preview Card */}
                  <div className="relative lg:block hidden">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-12 rounded-[4rem] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.08)] border border-gray-50 max-w-[400px] mx-auto transform rotate-1 relative z-20"
                    >
                      <div className="flex flex-col h-[450px] justify-between py-4">
                        <div className="space-y-8">
                          <div className="w-16 h-16 rounded-3xl bg-gray-50 flex items-center justify-center text-3xl shadow-inner">📄</div>
                          <h3 className="text-4xl font-black text-[#1A1A1A] leading-tight tracking-tight">Digital <br /> Admission <br /> Guide</h3>
                        </div>
                        <div className="space-y-6">
                          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: '70%' }}
                              transition={{ duration: 1.5, delay: 0.5 }}
                              className="h-full bg-gradient-to-r from-[#D6B25E] to-[#FFA500]"
                            ></motion.div>
                          </div>
                          <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-400">
                            <span>2024-25 Session</span>
                            <span>Verified</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    {/* Minimalist accents */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-gray-50 rounded-full -z-10 animate-pulse-slow"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}