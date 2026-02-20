'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

const curriculumPaths = [
    {
        id: "pre-school", stage: "Pre-School", grades: "Nursery, JKG, UKG", title: "Pre-School",
        desc: "Play-based, inquiry-led Maple Bear early learning model that develops: Social and emotional growth, Early literacy and numeracy, Motor skills and creativity. Children learn through exploration across interactive learning centres such as reading, drama, water, sand, math, and music.",
        points: ["Social growth", "Early literacy", "Creativity"],
        img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&fit=crop"
    },
    {
        id: "elementary", stage: "Elementary School", grades: "Grade 1 to Grade 5", title: "Elementary School",
        desc: "A progressive, concept-driven curriculum where CBSE learning milestones are integrated with Canadian instructional strategies. Lessons are designed to nurture curiosity, independence, and higher-order thinking. Hands-on learning and continuous feedback help each child progress at their own pace.",
        points: ["Concept-driven", "Hands-on learning", "Continuous feedback"],
        img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&fit=crop"
    },
    {
        id: "middle-school", stage: "Middle School", grades: "Grade 6 to Grade 8", title: "Middle School",
        desc: "A transition-focused, application-oriented curriculum where CBSE academic frameworks are strengthened through Canadian inquiry-based and interdisciplinary teaching. Lessons emphasise analytical thinking, problem-solving, and real-world application of concepts.",
        points: ["Analytical thinking", "Problem-solving", "Learner autonomy"],
        img: "https://images.unsplash.com/photo-1577896332616-e41b07283626?w=800&fit=crop"
    },
    {
        id: "high-school", stage: "High School", grades: "Grade 9 and Grade 10", title: "High School",
        desc: "A strong CBSE academic roadmap strengthened by: Critical thinking frameworks, Skill-based projects, Leadership and global citizenship programs. Opportunities for international collaboration and cultural exchanges.",
        points: ["Critical thinking", "Skill-based projects", "Global citizenship"],
        img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&fit=crop"
    }
];

export default function Curriculum() {
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
                            <p className="text-white/80 uppercase tracking-[0.3em] text-sm font-bold mb-4">Educational Excellence</p>
                            <h1 className="text-[48px] sm:text-[64px] lg:text-[80px] font-black text-white leading-tight" style={{ fontFamily: "'Raleway', sans-serif" }}>
                                Curriculum
                            </h1>
                            <p className="text-white/90 text-lg sm:text-xl mt-4 max-w-2xl mx-auto font-medium leading-relaxed">
                                Where CBSE Excellence Meets Canadian Innovation
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* SECTION 1 — White: Partnership Details */}
                <section className="py-16 sm:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center space-y-6 mb-14">
                            <p className="text-xl sm:text-2xl text-[#000000] leading-relaxed font-medium">
                                At Mapleford International School, learning is shaped by a powerful collaboration with <strong className="text-[#000000]">Maple Bear Global Schools, Canada</strong> — a world leader in bilingual, inquiry-based education operating across <span className="text-[#d0302b]">35+ countries and 450+ schools</span>.
                            </p>
                            <p className="text-lg sm:text-xl text-[#000000] leading-relaxed">
                                Through this partnership, our students benefit from the proven strengths of the Canadian education system — consistently ranked among the world&apos;s best — while staying firmly aligned to India&apos;s respected CBSE framework.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100">
                            <div className="space-y-6">
                                <p className="text-[#d0302b] font-black uppercase tracking-[0.3em] text-sm">Strategic Partnership</p>
                                <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-black text-[#000000] leading-tight" style={{ fontFamily: '"Raleway", sans-serif' }}>
                                    A Seamless Blend of Two Powerful Systems
                                </h2>
                                <h3 className="text-xl font-bold text-[#D6B25E]">Canadian Pedagogy + CBSE Curriculum</h3>
                                <p className="text-lg text-[#000000] leading-relaxed">
                                    Our curriculum combines the rigour, clarity, and progression of CBSE with the student-centred, inquiry-driven practices of Canadian education. Students learn through exploration, collaboration, and real-world application.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h4 className="text-xl font-black text-[#000000] mb-6">What this means for learners:</h4>
                                <ul className="space-y-4">
                                    {[
                                        "Strong foundations in Math, Science, Languages, and Social Sciences",
                                        "Deep conceptual understanding instead of rote memory",
                                        "Inquiry, problem-solving, and project-based learning",
                                        "Continuous assessment aligned to Maple Bear learning outcomes",
                                        "Preparedness for CBSE board pathways in higher grades"
                                    ].map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-[#d0302b]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <div className="w-2 h-2 rounded-full bg-[#d0302b]" />
                                            </div>
                                            <span className="text-base text-[#000000] font-medium leading-tight">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2 — Red: Curriculum Pathway */}
                <section className="py-16 sm:py-24 bg-[#d0302b] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] font-black text-white leading-tight" style={{ fontFamily: '"Raleway", sans-serif' }}>
                                Curriculum Pathway
                            </h2>
                            <p className="text-white/80 text-lg mt-3">Early Years to Senior School</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {curriculumPaths.map((path, idx) => (
                                <motion.div
                                    key={path.id}
                                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-300"
                                >
                                    <div className="text-4xl font-black text-white/20 mb-4">0{idx + 1}</div>
                                    <h3 className="text-xl font-black text-white mb-2">{path.title}</h3>
                                    <p className="text-white/60 text-sm font-bold mb-4 uppercase tracking-wide">{path.grades}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {path.points.map((p, i) => (
                                            <span key={i} className="px-3 py-1 text-xs font-bold rounded-full bg-white/20 text-white border border-white/20">{p}</span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 3 — White: Detailed Pathways */}
                <section id="pathway" className="py-16 sm:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 sm:mb-16">
                            <p className="text-[#d0302b] font-black uppercase tracking-[0.4em] text-xs mb-3">In Detail</p>
                            <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-black text-[#000000]" style={{ fontFamily: '"Raleway", sans-serif' }}>
                                Each Stage of Learning
                            </h2>
                        </div>
                        <div className="space-y-16 sm:space-y-24">
                            {curriculumPaths.map((path, idx) => (
                                <motion.div
                                    key={path.id} id={path.id}
                                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                                    className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16`}
                                >
                                    <div className="w-full lg:w-1/2 space-y-6">
                                        <p className="text-[#d0302b] font-black uppercase tracking-widest text-xs">{path.stage}</p>
                                        <h3 className="text-[28px] sm:text-[36px] lg:text-[44px] font-black text-[#000000]" style={{ fontFamily: '"Raleway", sans-serif' }}>{path.title}</h3>
                                        <p className="text-sm font-bold text-gray-400">{path.grades}</p>
                                        <p className="text-lg text-[#000000] leading-relaxed">{path.desc}</p>
                                        <div className="flex flex-wrap gap-3">
                                            {path.points.map((p, i) => (
                                                <span key={i} className="px-5 py-2 rounded-full bg-[#d0302b]/10 text-[#d0302b] font-bold text-sm border border-[#d0302b]/20">{p}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2">
                                        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                                            <img src={path.img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt={path.title} />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 4 — Red: CTA */}
                <section className="py-16 sm:py-24 bg-[#d0302b] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                    </div>
                    <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
                            <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-black text-white leading-tight" style={{ fontFamily: '"Raleway", sans-serif' }}>
                                Give Them The Foundation They Deserve.
                            </h2>
                            <p className="text-lg sm:text-xl text-white/90 max-w-xl mx-auto leading-relaxed">
                                Join a community of forward-thinking parents and passionate educators shaping the future of education.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                                <Button href="/admissions" variant="primary" size="lg" className="bg-white text-[#d0302b] hover:bg-gray-100">Apply Now</Button>
                                <Button href="/contact" variant="outline" size="lg" className="border-white text-white">Enquire Today</Button>
                            </div>
                        </motion.div>
                    </div>
                </section>

            </div>

            <Footer />
        </div>
    );
}
