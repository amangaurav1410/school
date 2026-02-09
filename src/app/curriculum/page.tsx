'use client';

import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

export default function Curriculum() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <div className="min-h-screen bg-white font-sans" ref={containerRef}>
            <Header />

            <div className="pt-20 overflow-hidden">
                {/* Hero Section */}
                <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], x: [0, 50, 0] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#D6B25E]/10 to-[#FFA500]/5 rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0], x: [0, -50, 0] }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute -bottom-1/4 -left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-[#d0302b]/5 to-transparent rounded-full blur-3xl"
                        />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="space-y-8"
                        >
                            <span className="inline-block px-6 py-2 rounded-full bg-[#d0302b]/10 text-[#d0302b] font-black text-sm tracking-[0.2em] uppercase mb-4 shadow-sm border border-[#d0302b]/10">
                                Educational Excellence
                            </span>
                            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black mb-8 leading-[0.85] tracking-tighter text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>
                                Curriculum
                            </h1>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#4F4F4F] max-w-5xl mx-auto leading-relaxed"
                                style={{ fontFamily: '"Raleway", sans-serif' }}
                            >
                                Where <span className="text-[#d0302b]">CBSE Excellence</span> Meets <span className="text-[#D6B25E]">Canadian Innovation</span>
                            </motion.h2>

                            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }} className="pt-8">
                                <Link href="#pathway" className="group relative inline-flex items-center gap-2 text-lg font-bold text-[#1A1A1A]">
                                    Scroll to Explore Path
                                    <motion.span animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-[#d0302b]">↓</motion.span>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Collaboration Details section */}
                <section className="py-32 relative bg-white border-y border-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center space-y-12 mb-32">
                            <p className="text-2xl text-[#4F4F4F] leading-relaxed font-medium">
                                At Mapleford International School, learning is shaped by a powerful collaboration with <strong className="text-[#1A1A1A]">Maple Bear Global Schools, Canada</strong>—a world leader in bilingual, inquiry-based education operating across <span className="text-[#d0302b]">35+ countries and 450+ schools</span>.
                            </p>
                            <p className="text-xl text-gray-500 leading-relaxed">
                                Through this partnership, our students benefit from the proven strengths of the Canadian education system, consistently ranked among the world's best, while staying firmly aligned to India’s respected CBSE framework.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center bg-gray-50/50 rounded-[4rem] p-12 lg:p-24 border border-gray-100">
                            <div className="space-y-10">
                                <div className="space-y-4">
                                    <span className="text-[#d0302b] font-black uppercase tracking-[0.3em] text-sm">Strategic Partnership</span>
                                    <h2 className="text-4xl lg:text-6xl font-black text-[#1A1A1A] leading-tight" style={{ fontFamily: '"Raleway", sans-serif' }}>
                                        A Seamless Blend of <br />Two Powerful Systems
                                    </h2>
                                    <h3 className="text-2xl font-bold text-[#D6B25E]">Canadian Pedagogy + CBSE Curriculum</h3>
                                </div>
                                <p className="text-xl text-[#4F4F4F] leading-relaxed">
                                    Our curriculum combines the rigour, clarity, and progression of CBSE with the student-centred, inquiry-driven practices of Canadian education. Students learn through exploration, collaboration, and real-world application—while mastering the core competencies expected in the CBSE framework.
                                </p>
                            </div>
                            <div className="bg-white p-12 rounded-[3.5rem] shadow-xl space-y-8 border border-gray-100">
                                <h4 className="text-2xl font-black text-[#1A1A1A]">What this means for learners:</h4>
                                <ul className="space-y-6">
                                    {[
                                        "Strong foundations in Math, Science, Languages, and Social Sciences",
                                        "Deep conceptual understanding instead of rote memory",
                                        "Inquiry, problem-solving, and project-based learning",
                                        "Continuous assessment aligned to Maple Bear learning outcomes",
                                        "Preparedness for CBSE board pathways in higher grades"
                                    ].map((point, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <span className="w-6 h-6 rounded-full bg-[#d0302b]/10 flex items-center justify-center shrink-0 mt-1">
                                                <div className="w-2 h-2 rounded-full bg-[#d0302b]"></div>
                                            </span>
                                            <span className="text-lg text-[#4F4F4F] font-medium leading-tight">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="pt-4 text-sm font-bold text-gray-400 uppercase tracking-widest border-t border-gray-50 mt-8">
                                    Dual approach for Academic Excellence
                                </p>
                            </div>
                        </div>

                        <div className="mt-20 text-center max-w-3xl mx-auto">
                            <p className="text-xl text-[#4F4F4F] italic">
                                This dual approach ensures academic excellence, global exposure, and readiness for higher education in India or abroad.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Vertical Pathway Section - Refined with verified content */}
                <section id="pathway" className="py-32 bg-white relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-32 text-center">
                            <h2 className="text-5xl lg:text-[6rem] font-black text-[#1A1A1A] leading-[1] mb-8" style={{ fontFamily: '"Raleway", sans-serif' }}>
                                Curriculum Pathway <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Early Years to Senior School</span>
                            </h2>
                        </div>

                        <div className="space-y-40">
                            {[
                                {
                                    id: "pre-school",
                                    stage: "Pre-School",
                                    grades: "Nursery, JKG, UKG",
                                    title: "Pre-School",
                                    desc: "Play-based, inquiry-led Maple Bear early learning model that develops: Social and emotional growth, Early literacy and numeracy, Motor skills and creativity. Children learn through exploration across interactive learning centres such as reading, drama, water, sand, math, and music.",
                                    points: ["Social growth", "Early literacy", "Creativity"],
                                    img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&fit=crop",
                                    color: "text-amber-500",
                                    bg: "bg-amber-50"
                                },
                                {
                                    id: "elementary",
                                    stage: "Elementary School",
                                    grades: "Grade 1 to Grade 5",
                                    title: "Elementary School",
                                    desc: "A progressive, concept-driven curriculum where CBSE learning milestones are integrated with Canadian instructional strategies. Lessons are designed to nurture curiosity, independence, and higher-order thinking. Hands-on learning and continuous feedback help each child progress at their own pace.",
                                    points: ["Concept-driven", "Hands-on learning", "Continuous feedback"],
                                    img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&fit=crop",
                                    color: "text-red-600",
                                    bg: "bg-red-50"
                                },
                                {
                                    id: "middle-school",
                                    stage: "Middle School",
                                    grades: "Grade 6 to Grade 8",
                                    title: "Middle School",
                                    desc: "A transition-focused, application-oriented curriculum where CBSE academic frameworks are strengthened through Canadian inquiry-based and interdisciplinary teaching. Lessons emphasise analytical thinking, problem-solving, and real-world application of concepts. Research, collaboration, and reflective learning build learner autonomy.",
                                    points: ["Analytical thinking", "Problem-solving", "Learner autonomy"],
                                    img: "https://images.unsplash.com/photo-1577896332616-e41b07283626?w=800&fit=crop",
                                    color: "text-blue-600",
                                    bg: "bg-blue-50"
                                },
                                {
                                    id: "high-school",
                                    stage: "High School",
                                    grades: "Grade 9 and Grade 10",
                                    title: "High School",
                                    desc: "A strong CBSE academic roadmap strengthened by: Critical thinking frameworks, Skill-based projects, Leadership and global citizenship programs. Opportunities for international collaboration and cultural exchanges.",
                                    points: ["Critical thinking", "Skill-based projects", "Global citizenship"],
                                    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&fit=crop",
                                    color: "text-indigo-900",
                                    bg: "bg-indigo-50"
                                }
                            ].map((path, idx) => (
                                <motion.div
                                    key={idx}
                                    id={path.id}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    variants={fadeInUp}
                                    className={`flex flex-col lg:flex-row items-center gap-20 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                                >
                                    <div className="w-full lg:w-1/2 space-y-8">
                                        <div className="flex items-center gap-6">
                                            <span className={`text-6xl font-black opacity-10 ${path.color}`}>0{idx + 1}</span>
                                            <div className="w-12 h-[2px] bg-gray-200"></div>
                                            <span className={`text-sm font-black uppercase tracking-widest ${path.color}`}>{path.stage}</span>
                                        </div>
                                        <div className="space-y-6">
                                            <h3 className="text-4xl lg:text-5xl font-black text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>{path.title}</h3>
                                            <p className="text-sm font-bold text-gray-400 mb-4">{path.grades}</p>
                                            <p className="text-xl text-[#4F4F4F] leading-relaxed font-light">{path.desc}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            {path.points.map((p, i) => (
                                                <span key={i} className={`px-5 py-2 rounded-full ${path.bg} ${path.color} font-bold text-sm border border-current shadow-sm`}>
                                                    {p}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2 group">
                                        <div className="relative">
                                            <div className={`absolute -inset-4 ${path.bg} rounded-[4rem] group-hover:scale-105 transition-transform duration-700`}></div>
                                            <div className="relative aspect-video rounded-[3.5rem] overflow-hidden shadow-2xl">
                                                <img src={path.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={path.title} />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA Section - Golden Theme */}
                <section className="py-32 relative flex items-center justify-center overflow-hidden bg-[#FDF6E3]">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-[#d0302b] rounded-full blur-[120px]"></div>
                        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-[#D6B25E] rounded-full blur-[120px]"></div>
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <h2 className="text-5xl lg:text-8xl font-black text-[#1A1A1A] leading-[1] tracking-tighter" style={{ fontFamily: '"Raleway", sans-serif' }}>
                                Give Them The <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0302b] to-[#FFA500]">Foundation </span>
                                They Deserve.
                            </h2>
                            <p className="text-xl text-[#4F4F4F] font-medium max-w-2xl mx-auto leading-relaxed">
                                Join a community of forward-thinking parents and passionate educators shaping the future of education.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-4">
                                <Button href="/admissions" variant="primary" size="lg" className="w-full sm:w-auto">Apply Now</Button>
                                <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto">Enquire Today</Button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>

            <Footer />

            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');
            `}</style>
        </div>
    );
}
