'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

export default function StudentZone() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const houses = [
    {
      name: "Terra",
      color: "from-emerald-500 to-green-700",
      accent: "#2ecc71",
      text: "Earth",
      motto: "Strong Roots. Steady Rise.",
      rhyme: "Rooted deep! Standing tall! Terra power beats them all!",
      desc: "Terra represents the stability and strength of Earth. Students in this house are grounded, resilient, and collaborative—growing steadily with strong roots and unwavering purpose.",
      symbol: "🌱"
    },
    {
      name: "Blaze",
      color: "from-red-600 to-orange-600",
      accent: "#e74c3c",
      text: "Fire",
      motto: "Fearless Hearts. Fierce Spirit.",
      rhyme: "Heat it up! See the flame! Blaze is rising—own the game!",
      desc: "Blaze embodies the passion and energy of Fire. Members of this house are dynamic, courageous, and enthusiastic leaders who light up every challenge they face.",
      symbol: "🔥"
    },
    {
      name: "Aero",
      color: "from-yellow-400 to-amber-500",
      accent: "#f1c40f",
      text: "Air",
      motto: "Move Fast. Rise Free.",
      rhyme: "Swift and sharp, flying high—Aero spirit reach the sky!",
      desc: "Aero captures the swiftness and freedom of Air. Students here are quick thinkers, adaptable changemakers, and innovative spirits who rise above limits.",
      symbol: "💨"
    },
    {
      name: "Astra",
      color: "from-blue-600 to-indigo-700",
      accent: "#3498db",
      text: "Space",
      motto: "Aim Higher. Go Beyond.",
      rhyme: "Look up high! Feel the light! Astra leads with vision bright!",
      desc: "Astra reflects the limitless potential of Space. Visionaries and explorers, students of Astra aim for the stars, dreaming big and leading with a bright, expanding perspective.",
      symbol: "⭐"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <div className="pt-20 overflow-hidden">
        {/* Hero Section - Student Zone Redesign */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Animated Background Shapes */}
          <div className="absolute inset-0 z-0 text-gray-100 opacity-20 select-none pointer-events-none">
            <div className="absolute top-1/4 left-1/4 text-[20rem] font-black">STUDENT</div>
            <div className="absolute bottom-1/4 right-1/4 text-[20rem] font-black">ZONE</div>
          </div>

          <div className="absolute inset-0 z-0">
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, 90, 0],
                x: [0, -40, 0]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#d0302b]/5 to-transparent rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.15, 1, 1.15],
                rotate: [0, -90, 0],
                x: [0, 40, 0]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-1/4 -left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-[#D6B25E]/5 to-transparent rounded-full blur-3xl"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              <span className="inline-block px-8 py-2 rounded-full bg-[#D6B25E]/10 text-[#D6B25E] font-black text-sm tracking-[0.3em] uppercase mb-4 shadow-sm border border-[#D6B25E]/10">
                Life at Mapleford
              </span>
              <h1
                className="text-6xl md:text-8xl lg:text-[10rem] font-black mb-8 leading-[0.85] tracking-tighter text-[#1A1A1A]"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                Student <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0302b] via-[#FFA500] to-[#D6B25E] drop-shadow-sm">
                  Zone
                </span>
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-[#4F4F4F] max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: '"Raleway", sans-serif' }}>
                &quot;Where talent meets opportunity and <span className="text-[#d0302b]">spirit meets action.</span>&quot;
              </p>
            </motion.div>
          </div>
        </section>

        {/* The House Arena - Immersive Grid */}
        <section className="py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-32 space-y-6">
              <span className="text-[#d0302b] font-black uppercase tracking-[0.4em] text-xs">Four Elements. One Unstoppable Spirit.</span>
              <h2 className="text-5xl lg:text-[5rem] font-black text-[#1A1A1A] leading-tight" style={{ fontFamily: '"Raleway", sans-serif' }}>
                The House <br className="hidden sm:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Arena</span>
              </h2>
              <div className="max-w-3xl mx-auto space-y-4">
                <p className="text-2xl text-[#d0302b] font-black">Every Mapleite belongs to a force of nature.</p>
                <p className="text-xl text-gray-500 font-light leading-relaxed">The House Arena makes the elements come alive—Earth, Fire, Air, and Space—each shaping how students learn, lead, play, compete, and celebrate together! Choose your element. Wear your colours. Raise your chant.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-40">
              {houses.map((house, idx) => (
                <motion.div
                  key={house.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  className={`flex flex-col lg:flex-row items-center gap-20 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* 3D House Card */}
                  <div className="w-full lg:w-2/5 group perspective-1000">
                    <motion.div
                      whileHover={{ rotateY: 10, rotateX: -5 }}
                      className={`relative aspect-square rounded-[4rem] bg-gradient-to-br ${house.color} shadow-2xl p-1 flex flex-col items-center justify-center text-white overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                      <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>

                      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                        <span className="text-[10rem] leading-none mb-2 opacity-50">{house.symbol}</span>
                        <h3 className="text-6xl font-black uppercase tracking-tighter" style={{ fontFamily: '"Raleway", sans-serif' }}>{house.name}</h3>
                        <div className="w-12 h-1 bg-white/40"></div>
                        <span className="text-sm font-black uppercase tracking-widest">{house.text}</span>
                      </div>

                      {/* Floating Detail on Hover (optional if needed) */}
                      <div className="absolute bottom-10 px-8 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        Champions of Excellence
                      </div>
                    </motion.div>
                  </div>

                  {/* House Content */}
                  <div className="w-full lg:w-3/5 space-y-10">
                    <div className="space-y-4">
                      <h4 className="text-3xl lg:text-4xl font-black text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>{house.motto}</h4>
                      <p className="text-2xl font-black flex items-center gap-4 text-[#d0302b]">
                        <span className="w-12 h-[2px] bg-[#d0302b]/20"></span>
                        &quot;{house.rhyme}&quot;
                      </p>
                    </div>

                    <p className="text-xl text-gray-600 leading-relaxed font-light" style={{ fontFamily: '"Lato", sans-serif' }}>
                      {house.desc}
                    </p>

                    <div className="flex gap-4">
                      <div className="px-6 py-3 rounded-2xl bg-gray-50 border border-gray-100 font-bold text-sm text-gray-500 uppercase tracking-widest">Leadership</div>
                      <div className="px-6 py-3 rounded-2xl bg-gray-50 border border-gray-100 font-bold text-sm text-gray-500 uppercase tracking-widest">Community</div>
                      <div className="px-6 py-3 rounded-2xl bg-gray-50 border border-gray-100 font-bold text-sm text-gray-500 uppercase tracking-widest">Spirit</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-32 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block p-12 bg-[#FDF6E3] rounded-[3rem] border border-[#D6B25E]/20 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d0302b]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D6B25E]/10 rounded-full blur-3xl"></div>

                <h3 className="text-3xl lg:text-5xl font-black text-[#1A1A1A] leading-tight mb-4" style={{ fontFamily: '"Raleway", sans-serif' }}>
                  "Earth and Fire! Air and Space!<br />
                  Four strong houses—one proud place!<br />
                  <span className="text-[#d0302b] text-4xl lg:text-6xl mt-4 block">MAPLEFORD!</span>"
                </h3>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Life Beyond Lessons - Modern Grid (Golden Theme) */}
        <section className="py-32 bg-[#FDF6E3] relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#d0302b] rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-[#D6B25E] rounded-full blur-[120px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto space-y-12"
            >
              <h2 className="text-5xl lg:text-8xl font-black text-[#1A1A1A] leading-[1] tracking-tighter" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Life at Mapleford is <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0302b] via-[#D6B25E] to-[#FFA500]">More Than Lessons.</span>
              </h2>
              <p className="text-xl text-[#4F4F4F] font-medium max-w-2xl mx-auto leading-relaxed italic">
                &quot;Every day is an opportunity to explore a new passion, build a new bridge, and take a new step toward who you want to be.&quot;
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8">
                <Button href="/campus" variant="primary" size="lg" className="w-full sm:w-auto">Explore Campus</Button>
                <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto">Join the Community</Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />

      <style jsx>{`
        .perspective-1000 {
            perspective: 1000px;
        }
      `}</style>
    </div>
  );
}