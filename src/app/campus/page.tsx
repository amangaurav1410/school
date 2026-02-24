'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

const academicFacilities = [
  {
    header: "Smart & Well-ventilated Classrooms | Smart. Bright. Engaging",
    description: "Our classrooms are designed to be open, bright, and technology-enabled—spaces where students learn with focus and comfort. With digital boards and projectors, lessons become dynamic and visual—making learning engaging, interactive, and impactful.",
    image: "/images/campus_classroom.png",
  },
  {
    header: "Science Labs | Explore. Experiment. Discover.",
    description: "Dedicated Physics, Chemistry, and Biology laboratories provide students with hands-on learning experiences that bring science to life. Well-equipped and thoughtfully designed, these labs encourage observation, experimentation, and inquiry—helping students develop scientific thinking and a deeper understanding of the world around them.",
    image: "/images/campus_science_lab.png",
  },
  {
    header: "Mathematics Lab | Think. Solve. Apply.",
    description: "The Mathematics Lab transforms abstract concepts into practical understanding. Through activity-based learning and hands-on tools, students build logical reasoning, problem-solving skills, and confidence—making maths engaging, intuitive, and enjoyable.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop",
  },
  {
    header: "Computer Lab | Learn. Code. Innovate.",
    description: "Our modern computer lab supports technology-integrated learning and digital literacy across grades. With updated systems and guided instruction, students develop essential computing skills, responsible digital habits, and confidence in navigating today’s digital landscape.",
    image: "/images/campus_computer_lab.png",
  },
  {
    header: "Library | Quiet. Inviting. Inspiring.",
    description: "Our library is a calm and welcoming space where curiosity finds direction. Stocked with a wide range of age-appropriate books, reference materials, and learning resources, it encourages students to read, research, and reflect. Comfortable reading corners and a peaceful ambience help nurture imagination and a lifelong love for learning.",
    image: "/images/campus_library.png",
  },
  {
    header: "Resource Rooms | Supportive. Inclusive. Individualised.",
    description: "Dedicated resource rooms offer personalised academic and special education support in a nurturing setting. Designed to address diverse learning needs, these spaces ensure every child receives focused attention, encouragement, and the support required to learn at their own pace.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200&fit=crop&q=80",
  }
];

const sportsGrid = [
  { icon: '🏏', name: 'Cricket', motto: 'Skill. Strategy. Sportsmanship.', desc: 'A dedicated cricket ground gives students the space to refine technique, build focus, and experience the spirit of team play, right from practice sessions to match days.' },
  { icon: '🏀', name: 'Basketball', motto: 'Agility. Teamwork. Pace.', desc: 'Our basketball court keeps the energy high, helping students develop quick thinking, coordination, and collaborative play through fast-paced action.' },
  { icon: '⛸️', name: 'Skating', motto: 'Balance. Confidence. Control.', desc: 'A safe and engaging skating area allows children to build balance, coordination, and self-assurance, while enjoying movement with freedom and joy.' },
  { icon: '🎾', name: 'Tennis', motto: 'Precision. Endurance. Grace.', desc: 'With tennis courts designed for both beginners and aspiring players, this space sharpens focus, coordination, and competitiveness.' },
  { icon: '⚽', name: 'Football', motto: 'Strength. Teamwork. Spirit.', desc: 'A lush football ground encourages students to play with passion, build resilience, and learn leadership through teamwork and strategy.' },
  { icon: '🎽', name: 'Athletics', motto: 'Speed. Strength. Determination.', desc: 'Athletics facilities encourage students to explore running, jumping, and field events—nurturing fitness, discipline, and individual bests.' },
  { icon: '🏸', name: 'Badminton', motto: 'Reflex. Rhythm. Focus.', desc: 'Badminton courts promote agility and sharp reflexes, offering students a fast, engaging sport that builds coordination and concentration.' },
  { icon: '🏊', name: 'Swimming Pool', motto: 'Strength. Skill. Confidence.', desc: 'A well-maintained swimming pool provides students with structured training and supervised sessions that build stamina, coordination, and water safety skills.' },
  { icon: '🏟️', name: 'Indoor Play Area', motto: 'All-Weather. Active. Inclusive.', desc: 'Designed for year-round activity, the indoor play area keeps students engaged in rain or shine, through structured and free play.' },
  { icon: '🪁', name: 'Kids’ Play Area', motto: 'Safe. Active. Joyful.', desc: 'A colourful, secure play zone lets younger learners climb, explore, and socialise—building confidence through guided free play.' }
];

export default function Campus() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-[90px] lg:pt-[120px]">
        <section className="bg-[#d0302b] py-24 sm:py-32 px-4 text-center relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-4xl mx-auto">
              <h1 className="text-[56px] sm:text-[72px] lg:text-[90px] font-black text-white leading-tight uppercase tracking-tighter mb-6" style={{ fontFamily: "'Raleway', sans-serif" }}>
                Campus
              </h1>
              <div className="w-32 h-2 bg-white/30 mx-auto mb-8 rounded-full" />
              <p className="text-xl sm:text-2xl lg:text-3xl text-white font-bold max-w-3xl mx-auto leading-tight" style={{ fontFamily: "'Raleway', sans-serif" }}>
                Spaces that Inspire | Designed for Discovery | Purposefully Equipped
              </p>
            </motion.div>
          </div>
        </section>

        {/* ACADEMIC INFRASTRUCTURE — Alternating high-impact blocks */}
        <section className="py-32 bg-white px-4">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-40 lg:space-y-64">
              {academicFacilities.map((fac, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
                  className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}
                >
                  <div className="w-full lg:w-1/2 relative">
                    <div className="absolute -inset-4 bg-slate-50 rounded-[4rem] -z-10 rotate-2" />
                    <div className="relative aspect-[16/10] rounded-[3.5rem] overflow-hidden shadow-2xl group border-[12px] border-white">
                      <img src={fac.image} alt={fac.header} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 space-y-8">
                    <div className="space-y-6">
                      <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-black text-gray-900 leading-[1.1] tracking-tight" style={{ fontFamily: "'Raleway', sans-serif" }}>
                        {fac.header}
                      </h2>
                      <div className="w-24 h-1.5 bg-[#d0302b] rounded-full" />
                    </div>
                    <p className="text-xl text-gray-600 leading-relaxed font-medium">
                      {fac.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-40 bg-white px-4 relative overflow-hidden" id="sports">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-32">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <h2 className="text-[56px] sm:text-[72px] lg:text-[100px] font-black text-gray-900 leading-none uppercase tracking-tighter mb-8" style={{ fontFamily: "'Raleway', sans-serif" }}>
                  Sports Arena
                </h2>
                <div className="w-32 h-2 bg-[#d0302b] mx-auto mb-10 rounded-full" />
                <p className="text-2xl sm:text-3xl text-gray-600 font-bold max-w-4xl mx-auto" style={{ fontFamily: "'Raleway', sans-serif" }}>
                  Spaces designed to build strength, confidence, and teamwork
                </p>
              </motion.div>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {sportsGrid.map((sport, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUp}
                  className="group perspective-1000 h-[220px]"
                >
                  <motion.div
                    className="relative w-full h-full transition-all duration-700 preserve-3d group-hover:rotate-y-180 cursor-pointer"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* FRONT: Title Only (Clean Homepage Style) */}
                    <div
                      className="absolute inset-0 backface-hidden bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] group-hover:shadow-[0_45px_120px_rgba(0,0,0,0.18)] transition-all duration-500 flex items-center justify-center p-12 border-t border-gray-50 overflow-hidden"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#d0302b]/5 rounded-bl-full translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700" />
                      <h3 className="text-3xl sm:text-4xl font-black text-gray-900 uppercase tracking-tighter text-center relative z-10" style={{ fontFamily: "'Raleway', sans-serif" }}>
                        {sport.name}
                      </h3>
                      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#d0302b] opacity-20" />
                    </div>

                    {/* BACK: Description (Premium Red) */}
                    <div
                      className="absolute inset-0 backface-hidden bg-[#d0302b] shadow-2xl flex flex-col justify-center p-10 text-white rotate-y-180 border-t border-white/20"
                      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                      <h4 className="text-sm font-black mb-4 uppercase tracking-[0.3em] text-[#D6B25E]">
                        {sport.motto}
                      </h4>
                      <p className="text-base leading-relaxed font-medium opacity-100">
                        {sport.desc}
                      </p>
                      <div className="absolute top-6 right-8 opacity-20 grayscale invert brightness-0">
                        {/* Removing icon as requested, purely for layout if needed */}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SCHEDULE A VISIT — Final call to action */}
        <section className="py-40 bg-white px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="bg-[#d0302b] p-20 sm:p-32 rounded-[5rem] text-center space-y-12 shadow-[0_50px_100px_rgba(208,48,43,0.3)] relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
              </div>
              <h2 className="text-[56px] sm:text-[72px] font-black text-white leading-[1] tracking-tighter uppercase" style={{ fontFamily: "'Raleway', sans-serif" }}>
                Schedule a <span className="text-white/40">Campus Visit</span>
              </h2>
              <p className="text-2xl text-white/90 font-bold max-w-3xl mx-auto leading-relaxed">
                Our admissions team will be happy to guide you through the campus and answer your questions.
              </p>
              <div className="pt-8">
                <Button href="/enquiry" variant="primary" size="lg" className="bg-white text-[#d0302b] hover:bg-gray-50 rounded-full px-20 py-8 h-auto text-sm font-black uppercase tracking-[0.3em] shadow-2xl transition-all hover:scale-105">
                  Enquiry Form
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}