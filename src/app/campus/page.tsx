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

        {/* SECTION 1 — White: Facilities */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16 sm:space-y-24">
              {facilities.map((fac, idx) => (
                <motion.div
                  key={fac.id}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16`}
                >
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{fac.icon}</span>
                      <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-black text-[#000000] leading-tight" style={{ fontFamily: '"Raleway", sans-serif' }}>{fac.title}</h2>
                    </div>
                    <h3 className="text-xl font-bold text-[#D6B25E] italic tracking-wide">{fac.subtitle}</h3>
                    <p className="text-lg text-[#000000] leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>{fac.description}</p>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                      <img src={fac.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={fac.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2 — Red: Sports Arena */}
        <section className="py-16 sm:py-24 bg-[#d0302b] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-black text-white" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Sports Arena
              </h2>
              <p className="text-white/90 text-xl mt-4 max-w-2xl mx-auto font-medium">Spaces designed to build strength, confidence, and teamwork</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sports.map((sport, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: idx * 0.07 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{sport.icon}</div>
                  <h4 className="text-2xl font-black text-white mb-2">{sport.name}</h4>
                  <p className="text-[#D6B25E] font-bold text-xs mb-3 uppercase tracking-widest">{sport.motto}</p>
                  <p className="text-white/90 leading-relaxed text-base">{sport.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — White: CTA */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-black text-[#000000] leading-tight" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Schedule a <span className="text-[#d0302b]">Campus Visit</span>
              </h2>
              <p className="text-lg sm:text-xl text-[#000000] max-w-2xl mx-auto leading-relaxed font-medium">
                Our admissions team will be happy to guide you through the campus and answer your questions.
              </p>
              <div className="pt-4">
                <Button href="/enquiry" variant="primary" size="lg">Enquiry Form</Button>
              </div>
            </motion.div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}