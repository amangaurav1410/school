'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

const facilities = [
  { id: 'classrooms', title: 'Smart & Well-ventilated Classrooms', subtitle: 'Smart. Bright. Engaging', description: 'Our classrooms are designed to be open, bright, and technology-enabled—spaces where students learn with focus and comfort. With digital boards and projectors, lessons become dynamic and visual—making learning engaging, interactive, and impactful.', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&fit=crop', category: 'Academic', features: ['Digital Boards', 'Open Spaces', 'Interactive Learning'] },
  { id: 'science-labs', title: 'Science Labs', subtitle: 'Explore. Experiment. Discover.', description: 'Dedicated Physics, Chemistry, and Biology laboratories provide students with hands-on learning experiences that bring science to life. Well-equipped and thoughtfully designed, these labs encourage observation, experimentation, and inquiry.', image: 'https://images.unsplash.com/photo-1564866657311-09b5123108c2?w=1200&fit=crop', category: 'Science', features: ['Physics Lab', 'Chemistry Lab', 'Biology Lab'] },
  { id: 'math-lab', title: 'Mathematics Lab', subtitle: 'Think. Solve. Apply.', description: 'The Mathematics Lab transforms abstract concepts into practical understanding. Through activity-based learning and hands-on tools, students build logical reasoning, problem-solving skills, and confidence—making maths engaging, intuitive, and enjoyable.', image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=1200&fit=crop', category: 'Academic', features: ['Activity-based', 'Hands-on Tools', 'Logical Reasoning'] },
  { id: 'computer-lab', title: 'Computer Lab', subtitle: 'Learn. Code. Innovate.', description: 'Our modern computer lab supports technology-integrated learning and digital literacy across grades. With updated systems and guided instruction, students develop essential computing skills, responsible digital habits, and confidence in the digital world.', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&fit=crop', category: 'Technology', features: ['Modern Systems', 'Digital Literacy', 'Coding'] },
  { id: 'library', title: 'Library', subtitle: 'Quiet. Inviting. Inspiring.', description: 'Our library is a calm and welcoming space where curiosity finds direction. Stocked with a wide range of age-appropriate books, reference materials, and learning resources, it encourages students to read, research, and reflect.', image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&fit=crop', category: 'Research', features: ['Wide Range Books', 'Reading Corners', 'Peaceful Ambience'] },
  { id: 'resource-rooms', title: 'Resource Rooms', subtitle: 'Supportive. Inclusive. Individualised.', description: 'Dedicated resource rooms offer personalised academic and special education support in a nurturing setting. Designed to address diverse learning needs, these spaces ensure every child receives focused attention, encouragement, and the support required to learn at their own pace.', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&fit=crop', category: 'Support', features: ['Personalised Support', 'Special Education', 'Nurturing Setting'] }
];

const sports = [
  { name: "Cricket", motto: "Skill. Strategy. Sportsmanship.", desc: "A dedicated cricket ground gives students the space to refine technique, build focus, and experience the spirit of team play—right from practice sessions to match days.", icon: "🏏" },
  { name: "Basketball", motto: "Agility. Teamwork. Pace.", desc: "Our basketball court keeps the energy high, helping students develop quick thinking, coordination, and collaborative play through fast-paced action.", icon: "🏀" },
  { name: "Skating", motto: "Balance. Confidence. Control.", desc: "A safe and engaging skating area allows children to build balance, coordination, and self-assurance—while enjoying movement with freedom and joy.", icon: "⛸️" },
  { name: "Tennis", motto: "Precision. Endurance. Grace.", desc: "With tennis courts designed for both beginners and aspiring players, this space sharpens focus, coordination, and competitiveness.", icon: "🎾" },
  { name: "Football", motto: "Strength. Teamwork. Spirit.", desc: "A lush football ground encourages students to play with passion, build resilience, and learn leadership through teamwork and strategy.", icon: "⚽" },
  { name: "Athletics", motto: "Speed. Strength. Determination.", desc: "Athletics facilities encourage students to explore running, jumping, and field events—nurturing fitness, discipline, and individual bests.", icon: "🎽" },
  { name: "Kids' Play Area", motto: "Safe. Active. Joyful.", desc: "A colourful, secure play zone lets younger learners climb, explore, and socialise—building confidence through guided free play.", icon: "🪁" },
  { name: "Badminton", motto: "Reflex. Rhythm. Focus.", desc: "Badminton courts promote agility and sharp reflexes, offering students a fast, engaging sport that builds coordination and concentration.", icon: "🏸" },
  { name: "Indoor Play Area", motto: "All-Weather. Active. Inclusive.", desc: "Designed for year-round activity, the indoor play area keeps students moving and engaged—rain or shine—through structured and free play.", icon: "🏟️" }
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
              <p className="text-white/80 uppercase tracking-[0.3em] text-sm font-bold mb-4">World-Class Infrastructure</p>
              <h1 className="text-[48px] sm:text-[64px] lg:text-[80px] font-black text-white leading-tight" style={{ fontFamily: "'Raleway', sans-serif" }}>
                Our Campus
              </h1>
              <p className="text-white/90 text-lg sm:text-xl mt-4 max-w-2xl mx-auto font-medium leading-relaxed">
                Spaces that Inspire · Designed for Discovery · Purposefully Equipped
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 1 — White: Facilities */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-[#d0302b] font-black uppercase tracking-[0.4em] text-xs mb-3">Academic Facilities</p>
              <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-black text-[#000000]" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Built for Excellence
              </h2>
            </div>
            <div className="space-y-16 sm:space-y-24">
              {facilities.map((fac, idx) => (
                <motion.div
                  key={fac.id}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16`}
                >
                  <div className="w-full lg:w-1/2 space-y-6">
                    <p className="text-[#d0302b] font-black uppercase tracking-[0.4em] text-xs">{fac.category}</p>
                    <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-black text-[#000000] leading-tight" style={{ fontFamily: '"Raleway", sans-serif' }}>{fac.title}</h2>
                    <h3 className="text-xl font-bold text-[#D6B25E] italic">{fac.subtitle}</h3>
                    <p className="text-lg text-[#000000] leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>{fac.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {fac.features.map((feature, fidx) => (
                        <span key={fidx} className="px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-sm font-bold text-[#000000]">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                      <img src={fac.image} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt={fac.title} />
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
              <p className="text-white/80 uppercase tracking-[0.4em] text-xs font-bold mb-3">Vitality & Vigor</p>
              <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-black text-white" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Sports Arena
              </h2>
              <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">Spaces designed to build strength, confidence, and teamwork</p>
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
                  <h4 className="text-xl font-black text-white mb-1">{sport.name}</h4>
                  <p className="text-white/60 font-bold text-xs mb-3 uppercase tracking-widest">{sport.motto}</p>
                  <p className="text-white/80 leading-relaxed text-sm">{sport.desc}</p>
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
                Experience The Magic <span className="text-[#d0302b]">In Person.</span>
              </h2>
              <p className="text-lg sm:text-xl text-[#000000] max-w-2xl mx-auto leading-relaxed">
                We welcome you to visit our campus and witness the environment that fuels our students&apos; ambitions every single day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Button href="/contact" variant="primary" size="lg">Request a Tour</Button>
                <Button href="/admissions" variant="outline" size="lg">Join The Legacy</Button>
              </div>
            </motion.div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}