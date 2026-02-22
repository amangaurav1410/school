'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

const facilities = [
  {
    id: 'classrooms',
    icon: '📘',
    title: 'Smart & Well-ventilated Classrooms',
    subtitle: 'Smart. Bright. Engaging',
    description: 'Our classrooms are designed to be open, bright, and technology-enabled—spaces where students learn with focus and comfort. With digital boards and projectors, lessons become dynamic and visual—making learning engaging, interactive, and impactful.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&fit=crop&q=80',
    category: 'Academic'
  },
  {
    id: 'science-labs',
    icon: '🔬',
    title: 'Science Labs',
    subtitle: 'Explore. Experiment. Discover.',
    description: 'Dedicated Physics, Chemistry, and Biology laboratories provide students with hands-on learning experiences that bring science to life. Well-equipped and thoughtfully designed, these labs encourage observation, experimentation, and inquiry—helping students develop scientific thinking and a deeper understanding of the world around them.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&fit=crop&q=80',
    category: 'Science'
  },
  {
    id: 'math-lab',
    icon: '➗',
    title: 'Mathematics Lab',
    subtitle: 'Think. Solve. Apply.',
    description: 'The Mathematics Lab transforms abstract concepts into practical understanding. Through activity-based learning and hands-on tools, students build logical reasoning, problem-solving skills, and confidence—making maths engaging, intuitive, and enjoyable.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&fit=crop&q=80',
    category: 'Academic'
  },
  {
    id: 'computer-lab',
    icon: '💻',
    title: 'Computer Lab',
    subtitle: 'Learn. Code. Innovate.',
    description: 'Our modern computer lab supports technology-integrated learning and digital literacy across grades. With updated systems and guided instruction, students develop essential computing skills, responsible digital habits, and confidence in navigating today’s digital landscape.',
    image: 'https://images.unsplash.com/photo-1588702547923-34e2e2832814?w=1200&fit=crop&q=80',
    category: 'Technology'
  },
  {
    id: 'library',
    icon: '📚',
    title: 'Library',
    subtitle: 'Quiet. Inviting. Inspiring.',
    description: 'Our library is a calm and welcoming space where curiosity finds direction. Stocked with a wide range of age-appropriate books, reference materials, and learning resources, it encourages students to read, research, and reflect. Comfortable reading corners and a peaceful ambience help nurture imagination and a lifelong love for learning.',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&fit=crop&q=80',
    category: 'Research'
  },
  {
    id: 'resource-rooms',
    icon: '🤝',
    title: 'Resource Rooms',
    subtitle: 'Supportive. Inclusive. Individualised.',
    description: 'Dedicated resource rooms offer personalised academic and special education support in a nurturing setting. Designed to address diverse learning needs, these spaces ensure every child receives focused attention, encouragement, and the support required to learn at their own pace.',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200&fit=crop&q=80',
    category: 'Support'
  }
];

const sports = [
  { name: "Cricket", motto: "Skill. Strategy. Sportsmanship.", desc: "A dedicated cricket ground gives students the space to refine technique, build focus, and experience the spirit of team play, right from practice sessions to match days.", icon: "🏏" },
  { name: "Basketball", motto: "Agility. Teamwork. Pace.", desc: "Our basketball court keeps the energy high, helping students develop quick thinking, coordination, and collaborative play through fast-paced action.", icon: "🏀" },
  { name: "Skating", motto: "Balance. Confidence. Control.", desc: "A safe and engaging skating area allows children to build balance, coordination, and self-assurance, while enjoying movement with freedom and joy.", icon: "⛸️" },
  { name: "Tennis", motto: "Precision. Endurance. Grace.", desc: "With tennis courts designed for both beginners and aspiring players, this space sharpens focus, coordination, and competitiveness.", icon: "🎾" },
  { name: "Football", motto: "Strength. Teamwork. Spirit.", desc: "A lush football ground encourages students to play with passion, build resilience, and learn leadership through teamwork and strategy.", icon: "⚽" },
  { name: "Athletics", motto: "Speed. Strength. Determination.", desc: "Athletics facilities encourage students to explore running, jumping, and field events—nurturing fitness, discipline, and individual bests.", icon: "🎽" },
  { name: "Badminton", motto: "Reflex. Rhythm. Focus.", desc: "Badminton courts promote agility and sharp reflexes, offering students a fast, engaging sport that builds coordination and concentration.", icon: "🏸" },
  { name: "Swimming Pool", motto: "Strength. Skill. Confidence.", desc: "A well-maintained swimming pool provides students with structured training and supervised sessions that build stamina, coordination, and water safety skills.", icon: "🏊" },
  { name: "Indoor Play Area", motto: "All-Weather. Active. Inclusive.", desc: "Designed for year-round activity, the indoor play area keeps students engaged in rain or shine, through structured and free play.", icon: "🏟️" },
  { name: "Kids’ Play Area", motto: "Safe. Active. Joyful.", desc: "A colourful, secure play zone lets younger learners climb, explore, and socialise—building confidence through guided free play.", icon: "🪁" }
];

export default function Campus() {
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
              <h1 className="text-[48px] sm:text-[64px] lg:text-[80px] font-black text-white leading-tight" style={{ fontFamily: "'Raleway', sans-serif" }}>
                Campus
              </h1>
              <p className="text-white/90 text-lg sm:text-xl mt-4 max-w-2xl mx-auto font-medium leading-relaxed">
                Spaces that Inspire | Designed for Discovery | Purposefully Equipped
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 1 — White: Facilities Highlights */}
        <section className="py-24 bg-white relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d0302b]/5 rounded-bl-full pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-lg font-black text-[#d0302b] uppercase tracking-[0.3em] mb-4">World-Class</h2>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900" style={{ fontFamily: '"Raleway", sans-serif' }}>Academic Infrastructure</h3>
              <div className="w-24 h-1.5 bg-[#d0302b] mx-auto mt-8 rounded-full" />
            </div>

            <div className="space-y-32">
              {facilities.map((fac, idx) => (
                <motion.div
                  key={fac.id}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
                  className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}
                >
                  <div className="w-full lg:w-1/2 relative">
                    <div className={`absolute -inset-4 bg-gray-50 rounded-[3rem] -z-10 transform ${idx % 2 === 1 ? 'rotate-1' : '-rotate-1'}`} />
                    <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] group">
                      <img src={fac.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" alt={fac.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                      <div className="absolute bottom-8 left-8">
                        <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-xs font-bold uppercase tracking-widest leading-none">
                          {fac.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 space-y-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d0302b]/5 rounded-2xl mb-2">
                      <span className="text-4xl">{fac.icon}</span>
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4" style={{ fontFamily: '"Raleway", sans-serif' }}>
                        {fac.title}
                      </h2>
                      <div className="inline-block px-4 py-1 bg-[#D6B25E]/10 border-l-4 border-[#D6B25E]">
                        <h3 className="text-lg font-bold text-[#D6B25E] italic tracking-wide">{fac.subtitle}</h3>
                      </div>
                    </div>
                    <p className="text-xl text-gray-600 leading-relaxed font-medium" style={{ fontFamily: '"Lato", sans-serif' }}>
                      {fac.description}
                    </p>
                    <div className="pt-4">
                      <div className="w-12 h-1 bg-gray-200" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2 — Red: Sports Arena */}
        <section className="py-24 bg-[#d0302b] relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent opacity-5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl sm:text-6xl font-black text-white leading-none mb-6" style={{ fontFamily: '"Raleway", sans-serif' }}>
                  Sports Arena
                </h2>
                <div className="h-2 w-24 bg-[#D6B25E] rounded-full mb-6" />
                <p className="text-white/80 text-xl font-medium leading-relaxed">
                  Advanced facilities designed to build physical strength, competitive confidence, and enduring teamwork.
                </p>
              </div>
              <div className="hidden lg:block pb-2">
                <span className="text-white/20 text-8xl font-black italic tracking-tighter select-none">ATHLETICS</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sports.map((sport, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="group relative bg-[#c02a25] border border-white/10 rounded-[2rem] p-10 transition-all duration-500 hover:bg-[#b52621] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)]"
                >
                  <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-white/10 transition-colors pointer-events-none">
                    <span className="text-7xl font-black">{idx + 1}</span>
                  </div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      {sport.icon}
                    </div>
                    <h4 className="text-2xl font-black text-white mb-2">{sport.name}</h4>
                    <p className="text-[#D6B25E] font-black text-[10px] uppercase tracking-[0.2em] mb-4 bg-[#D6B25E]/10 inline-block px-2 py-0.5 rounded leading-none">
                      {sport.motto}
                    </p>
                    <p className="text-white/70 leading-relaxed text-sm group-hover:text-white/90 transition-colors">
                      {sport.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — White: CTA */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#d0302b]/5 rounded-full blur-3xl" />
          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-[3rem] p-12 sm:p-20 border border-gray-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]"
            >
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-8" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Schedule a <span className="text-[#d0302b]">Campus Visit</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
                Experience the atmosphere of Mapleford firsthand. Our admissions team will be happy to guide you through our facilities and answer your questions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button href="/enquiry" variant="primary" size="lg" className="rounded-full px-12 h-16 text-lg tracking-wide shadow-xl shadow-[#d0302b]/20">
                  Enquiry Form
                </Button>
                <div className="h-px w-12 bg-gray-200 hidden sm:block" />
                <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">or</p>
                <div className="h-px w-12 bg-gray-200 hidden sm:block" />
                <a href="tel:+91" className="text-gray-900 font-black text-lg hover:text-[#d0302b] transition-colors">
                  Call Us Directly
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}