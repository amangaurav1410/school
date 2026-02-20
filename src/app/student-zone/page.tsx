'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

const houses = [
  { name: "Terra", color: "from-emerald-600 to-green-800", text: "Earth", motto: "Strong Roots. Steady Rise.", rhyme: "Rooted deep! Standing tall! Terra power beats them all!", desc: "Terra represents the stability and strength of Earth. Students in this house are grounded, resilient, and collaborative—growing steadily with strong roots and unwavering purpose.", symbol: "🌱" },
  { name: "Blaze", color: "from-red-600 to-orange-700", text: "Fire", motto: "Fearless Hearts. Fierce Spirit.", rhyme: "Heat it up! See the flame! Blaze is rising—own the game!", desc: "Blaze embodies the passion and energy of Fire. Members of this house are dynamic, courageous, and enthusiastic leaders who light up every challenge they face.", symbol: "🔥" },
  { name: "Aero", color: "from-amber-400 to-yellow-600", text: "Air", motto: "Move Fast. Rise Free.", rhyme: "Swift and sharp, flying high—Aero spirit reach the sky!", desc: "Aero captures the swiftness and freedom of Air. Students here are quick thinkers, adaptable changemakers, and innovative spirits who rise above limits.", symbol: "💨" },
  { name: "Astra", color: "from-blue-600 to-indigo-800", text: "Space", motto: "Aim Higher. Go Beyond.", rhyme: "Look up high! Feel the light! Astra leads with vision bright!", desc: "Astra reflects the limitless potential of Space. Visionaries and explorers, students of Astra aim for the stars, dreaming big and leading with a bright, expanding perspective.", symbol: "⭐" }
];

export default function StudentZone() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <div className="pt-[90px] lg:pt-[120px] overflow-hidden">

        {/* BANNER — Red */}
        <section className="bg-[#d0302b] py-16 sm:py-20 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-white/80 uppercase tracking-[0.3em] text-sm font-bold mb-4">Life at Mapleford</p>
              <h1 className="text-[48px] sm:text-[64px] lg:text-[80px] font-black text-white leading-tight" style={{ fontFamily: "'Raleway', sans-serif" }}>
                Student Zone
              </h1>
              <p className="text-white/90 text-lg sm:text-xl mt-4 max-w-2xl mx-auto font-medium leading-relaxed">
                &quot;Where talent meets opportunity and spirit meets action.&quot;
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 1 — White: House Arena Intro */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-[#d0302b] font-black uppercase tracking-[0.4em] text-xs mb-3">Four Elements. One Unstoppable Spirit.</p>
              <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-black text-[#000000]" style={{ fontFamily: '"Raleway", sans-serif' }}>
                The House Arena
              </h2>
              <div className="max-w-3xl mx-auto space-y-3 mt-6">
                <p className="text-xl text-[#d0302b] font-black">Every Mapleite belongs to a force of nature.</p>
                <p className="text-lg text-[#000000] leading-relaxed">The House Arena makes the elements come alive — Earth, Fire, Air, and Space — each shaping how students learn, lead, play, compete, and celebrate together!</p>
              </div>
            </div>

            {/* House Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
              {houses.map((house, idx) => (
                <motion.div
                  key={house.name}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative rounded-3xl bg-gradient-to-br ${house.color} p-8 sm:p-10 text-white overflow-hidden group`}
                >
                  <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
                  <div className="relative z-10">
                    <div className="text-5xl mb-4">{house.symbol}</div>
                    <h3 className="text-3xl sm:text-4xl font-black uppercase mb-1" style={{ fontFamily: '"Raleway", sans-serif' }}>{house.name}</h3>
                    <p className="text-white/70 text-sm font-bold uppercase tracking-widest mb-4">{house.text}</p>
                    <p className="font-black text-lg mb-3">{house.motto}</p>
                    <p className="text-white/80 text-sm italic mb-4">&quot;{house.rhyme}&quot;</p>
                    <p className="text-white/80 leading-relaxed text-sm">{house.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* School Chant */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="bg-gray-50 rounded-3xl p-8 sm:p-12 text-center border border-gray-100"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#000000] leading-tight" style={{ fontFamily: '"Raleway", sans-serif' }}>
                &quot;Earth and Fire! Air and Space!<br />
                Four strong houses—one proud place!<br />
                <span className="text-[#d0302b] text-3xl sm:text-4xl lg:text-5xl mt-2 block">MAPLEFORD!&quot;</span>
              </h3>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 — Red: Life Beyond Lessons */}
        <section className="py-16 sm:py-24 bg-[#d0302b] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-black text-white leading-tight" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Life at Mapleford is<br />More Than Lessons.
              </h2>
              <p className="text-white/80 text-lg mt-6 max-w-2xl mx-auto italic">
                &quot;Every day is an opportunity to explore a new passion, build a new bridge, and take a new step toward who you want to be.&quot;
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🎨", title: "Arts & Culture", desc: "Music, dance, drama, and visual arts give every student a creative outlet and a stage to shine." },
                { icon: "🏆", title: "Sports Excellence", desc: "From cricket to badminton, our arenas build discipline, teamwork, and physical well-being." },
                { icon: "🔬", title: "Science Clubs", desc: "Robotics, coding, and science fairs let curious minds explore, build, and innovate." },
                { icon: "📚", title: "Reading Programs", desc: "Library sessions and reading challenges nurture a lifelong love for literature and learning." },
                { icon: "🌍", title: "Leadership Initiatives", desc: "Student councils, debates, and community projects build confident future leaders." },
                { icon: "🎉", title: "Celebrations & Events", desc: "Annual day, sports day, festivals, and inter-house competitions build community spirit." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-black text-white mb-3">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Button href="/campus" variant="primary" size="lg" className="bg-white text-[#d0302b] hover:bg-gray-100">Explore Campus</Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white">Join the Community</Button>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}