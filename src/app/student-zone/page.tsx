'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function StudentZone() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-32 lg:py-48 overflow-hidden bg-[#FDF6E3]/30">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#D6B25E]/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#8B1E1A]/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className="text-6xl lg:text-8xl font-bold mb-8 leading-none text-[#1A1A1A]"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Zone</span>
              </h1>
              <p className="text-xl lg:text-2xl text-[#4F4F4F] max-w-3xl mx-auto font-light italic leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>
                "Where talent meets opportunity and spirit meets action."
              </p>
            </motion.div>
          </div>
        </section>

        {/* House Arena - Vibrant & Bold */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <h2 className="text-5xl lg:text-7xl font-black mb-8" style={{ fontFamily: '"Raleway", sans-serif', color: '#1A1A1A' }}>The House <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Arena</span></h2>
              <p className="text-2xl text-[#8B1E1A] font-bold mb-4">Celebrating Character, Community, and Champions in the Making</p>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">Each house embodies a distinct value that shapes the character of every Mapleite, encouraging them to grow with purpose and pride.</p>
            </div>

            <div className="space-y-24">
              {[
                {
                  name: "Astra",
                  color: "bg-[#F1C40F]",
                  text: "Yellow House",
                  motto: "Rise Beyond the Horizon",
                  icon: "⭐",
                  rhyme: "Up we rise, beyond the sky— Astra stars will always fly!",
                  desc: "Astra represents the spirit of aiming higher and dreaming boldly. Inspired by the luminosity of a star, this house nurtures visionaries—students who explore with curiosity, think creatively, and pursue excellence with optimism."
                },
                {
                  name: "Nova",
                  color: "bg-[#E74C3C]",
                  text: "Red House",
                  motto: "Ignite the Future",
                  icon: "🔥",
                  rhyme: "Strike the spark, ignite the flame — Nova rises, claim the game!",
                  desc: "Nova stands for the spark that ignites change. Like a burst of new light in the universe, Nova inspires students to take initiative, lead with confidence, and transform challenges into opportunities."
                },
                {
                  name: "Verta",
                  color: "bg-[#27AE60]",
                  text: "Green House",
                  motto: "Stand True, Grow Strong",
                  icon: "🌿",
                  rhyme: "Grounded roots, rising tall — Verta leads above them all!",
                  desc: "Verta symbolizes sincerity, responsibility, and strong moral grounding. It encourages students to make choices rooted in integrity, to act with empathy, and to grow steadily with wisdom and purpose."
                },
                {
                  name: "Cresta",
                  color: "bg-[#2980B9]",
                  text: "Blue House",
                  motto: "To the Summit, Always",
                  icon: "⛰️",
                  rhyme: "Step by step, we rise and climb — Cresta peak, it's our time!",
                  desc: "Cresta reflects the drive to reach one’s highest potential. Like a mountain peak that stands tall and unwavering, this house instills discipline, persistence, and an unwavering commitment to achieving one’s best."
                }
              ].map((house, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center p-12 rounded-[4rem] bg-gray-50 border border-gray-100 shadow-sm`}
                >
                  <div className={`w-full lg:w-1/3 aspect-square rounded-[3rem] ${house.color} flex flex-col items-center justify-center text-white text-center shadow-2xl shrink-0`}>
                    <div className="text-8xl mb-6">{house.icon}</div>
                    <h4 className="text-5xl font-black uppercase tracking-tighter" style={{ fontFamily: '"Raleway", sans-serif' }}>{house.name}</h4>
                    <p className="text-lg font-bold opacity-80 mt-2">{house.text}</p>
                  </div>
                  <div className="w-full lg:w-2/3 space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>{house.motto}</h3>
                      <p className="text-xl font-bold text-[#8B1E1A] italic">"{house.rhyme}"</p>
                    </div>
                    <p className="text-xl text-gray-600 leading-relaxed font-light">
                      {house.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Life */}
        <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-red-50 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl lg:text-5xl font-black mb-10" style={{ fontFamily: '"Raleway", sans-serif', color: '#1A1A1A' }}>Life at Mapleford is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">more than lessons.</span></h2>
            <div className="flex gap-4 justify-center">
              <Link href="/campus" className="px-10 py-5 bg-[#8B1E1A] text-white rounded-2xl font-bold text-lg hover:shadow-2xl transition-all shadow-xl">Explore Campus</Link>
              <Link href="/contact" className="px-10 py-5 border-2 border-[#8B1E1A] text-[#8B1E1A] rounded-2xl font-bold text-lg hover:bg-[#8B1E1A]/5 transition-all">Join the Community</Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}