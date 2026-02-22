'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const curriculumStages = [
    {
        title: "Pre-School",
        grades: "Nursery | JKG | UKG",
        description: "Our play-based, inquiry-led Maple Bear early learning model nurtures social-emotional growth while building strong foundations in early literacy and numeracy. With a strong focus on English language development, children learn through storytelling, songs, games, and creative play. The program encourages curiosity, problem-solving, confidence, and resilience, preparing young learners for future academic success.",
        img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=1200&h=900&fit=crop&q=80"
    },
    {
        title: "Elementary School",
        grades: "Grade 1 to Grade 5",
        description: "Our Elementary programme integrates CBSE learning milestones with Canadian instructional strategies in a progressive, concept-driven framework. Through hands-on experiences and Instruction in English strengthens bilingual skills in a well-rounded, immersive learning environment, while equal emphasis on intellectual, social, and emotional growth prepares learners for sustained academic success.",
        img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=900&fit=crop&q=80"
    },
    {
        title: "Middle School",
        grades: "Grade 6 - Grade 8",
        description: "A transition-focused, application-oriented curriculum where CBSE academic frameworks are strengthened through Canadian inquiry-based and interdisciplinary teaching. Lessons emphasise analytical thinking, problem-solving, and real-world application of concepts.",
        img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=900&fit=crop&q=80"
    },
    {
        title: "High School",
        grades: "Grade 9 and Grade 10",
        description: "A strong CBSE academic roadmap strengthened by: Critical thinking frameworks, skill-based projects. Through the Global Connect program, students engage virtually with peers around the world, fostering international collaborations, cultural exchanges, and broader global perspectives.",
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=900&fit=crop&q=80"
    }
];

export default function Curriculum() {
    return (
        <div className="min-h-screen bg-white font-sans text-[#000000]">
            <Header />
            <div className="pt-[90px] lg:pt-[120px] overflow-hidden">
                {/* SECTION 1 — RED BANNER (Hero) */}
                <section className="bg-[#d0302b] py-20 px-4 text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute -top-20 -left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
                        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10 text-center">
                        <motion.div
                            initial="hidden" animate="visible" variants={fadeInUp}
                            className="max-w-4xl mx-auto"
                        >
                            <h1 className="text-[48px] sm:text-[64px] lg:text-[80px] font-black leading-tight text-white mb-4" style={{ fontFamily: "'Raleway', sans-serif" }}>
                                Curriculum
                            </h1>
                            <p className="text-xl sm:text-2xl text-white/90 font-bold uppercase tracking-wide">
                                Where CBSE Excellence Meets Canadian Innovation
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* SECTION 2 — COLLABORATION BOX (Shadowed Box) */}
                <section className="py-12 sm:py-16 bg-white px-4 relative -mt-10 sm:-mt-12 z-20">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                            className="bg-white rounded-[2rem] p-8 sm:p-14 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] border border-gray-100 text-center"
                        >
                            <p className="text-lg sm:text-2xl leading-relaxed text-gray-800 font-medium">
                                At Mapleford International School, learning is shaped by a powerful collaboration with <strong>Maple Bear Global Schools, Canada</strong>, a world leader in bilingual, inquiry-based education operating across 35+ countries and 450+ schools. This association helps students benefit from the proven strengths of the Canadian education system, consistently ranked among the world’s best, while staying firmly aligned to India’s esteemed CBSE framework.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* SECTION 3 — SEAMLESS BLEND (Circular Design) */}
                <section className="py-24 bg-gray-50 px-4 overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 text-[#000000]" style={{ fontFamily: "'Raleway', sans-serif" }}>
                                A Seamless Blend of Two Powerful Systems
                            </h2>
                            <div className="w-24 h-1 bg-[#d0302b] mx-auto mb-6" />
                            <p className="text-2xl font-bold text-[#d0302b]">Canadian Pedagogy + CBSE Curriculum</p>
                        </motion.div>

                        <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start group">

                            {/* Circular Holistic Approach Design */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="relative w-[340px] h-[340px] sm:w-[540px] sm:h-[540px] flex items-center justify-center shrink-0"
                            >
                                {/* Continuous Background Rotation */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0"
                                >
                                    <div className="absolute inset-0 rounded-full border border-[#d0302b]/10 scale-110" />
                                    <div className="absolute inset-0 rounded-full border-2 border-[#d0302b]/5" />
                                    <div className="absolute inset-20 rounded-full border border-dashed border-[#d0302b]/20" />
                                </motion.div>

                                {/* Center Element with subtle pulse */}
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative z-10 w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-white shadow-[0_20px_60px_-15px_rgba(208,48,43,0.3)] flex items-center justify-center border border-gray-100 p-8 text-center"
                                >
                                    <span className="font-black text-[#d0302b] text-sm sm:text-xl uppercase tracking-[0.2em] leading-tight" style={{ fontFamily: "'Raleway', sans-serif" }}>
                                        Holistic<br />Approach
                                    </span>
                                </motion.div>

                                {/* Radial Values */}
                                {[
                                    "Citizenship", "Critical Thinking", "Building Confidence",
                                    "Compassion", "Curiosity", "Creativity", "Communication"
                                ].map((val, i, arr) => {
                                    const angle = (i * 360) / arr.length;
                                    return (
                                        <div
                                            key={val}
                                            className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                            style={{ transform: `rotate(${angle}deg)` }}
                                        >
                                            <div
                                                className="w-full relative flex justify-end px-2 sm:px-6"
                                                style={{ transform: `rotate(-${angle}deg)` }}
                                            >
                                                <motion.div
                                                    whileHover={{ scale: 1.1, backgroundColor: "#d0302b", color: "#ffffff" }}
                                                    className="bg-white px-5 py-2.5 sm:px-8 sm:py-4 rounded-full shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] border border-gray-100 pointer-events-auto transition-all duration-300 cursor-default"
                                                >
                                                    <span className="text-[11px] sm:text-sm font-black uppercase tracking-[0.15em] whitespace-nowrap">{val}</span>
                                                </motion.div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </motion.div>

                            {/* Outcomes Box */}
                            <motion.div
                                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                                className="bg-white p-10 sm:p-14 rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d0302b]/5 rounded-bl-full" />
                                <h3 className="text-2xl font-black mb-10 relative z-10 text-gray-800">What this means for learners:</h3>
                                <ul className="space-y-8 relative z-10">
                                    {[
                                        "Deep conceptual understanding instead of rote memory",
                                        "Inquiry, problem-solving, and project-based learning",
                                        "Continuous assessment aligned to Maple Bear learning outcomes",
                                        "Preparedness for CBSE board pathways in higher grades"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-6 items-start">
                                            <div className="w-8 h-8 rounded-full bg-[#d0302b]/10 flex items-center justify-center shrink-0 mt-1">
                                                <svg className="w-5 h-5 text-[#d0302b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <p className="text-lg sm:text-xl font-medium text-gray-700">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                            className="mt-20 text-center p-12 bg-[#d0302b]/5 rounded-[2rem] border border-[#d0302b]/10"
                        >
                            <p className="text-xl sm:text-3xl font-black leading-relaxed text-[#000000]">
                                This dual approach ensures academic excellence, global exposure, and readiness for higher education in India or abroad.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* CURRICULUM PATHWAY RED SECTION */}
                <section className="py-24 bg-[#d0302b] relative overflow-hidden px-4">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
                        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-5xl mx-auto">
                            <h2 className="text-[36px] sm:text-[56px] lg:text-[64px] font-black mb-10 text-white leading-tight" style={{ fontFamily: "'Raleway', sans-serif" }}>
                                Curriculum Pathway: <br className="hidden sm:block" /> From Early Years to Senior School
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 text-left">
                                <div className="p-8 sm:p-10 bg-white/10 backdrop-blur-sm rounded-[2.5rem] border border-white/20">
                                    <p className="text-xl sm:text-2xl text-white leading-relaxed font-bold">
                                        Every stage of learning marks an important milestone in a child’s development. Our curriculum is thoughtfully designed as a continuous, coherent pathway.
                                    </p>
                                </div>
                                <div className="p-4">
                                    <p className="text-lg text-white/90 leading-relaxed font-medium">
                                        Our holistic approach nurtures intellectual, social, emotional, and ethical growth while placing strong emphasis on reading, mathematics, science, and problem-solving. We enable students to succeed across disciplines and develop higher-order thinking skills essential for lifelong learning by building solid foundations in literacy, numeracy, and scientific understanding.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* STAGES WHITE SECTION */}
                <section className="py-24 bg-white px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="space-y-32">
                            {curriculumStages.map((stage, idx) => (
                                <motion.div
                                    key={idx}
                                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
                                    className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
                                >
                                    <div className="w-full lg:w-1/2 space-y-8">
                                        <h3 className="text-[36px] sm:text-[48px] font-black text-[#000000] leading-tight" style={{ fontFamily: "'Raleway', sans-serif" }}>
                                            {stage.title}
                                        </h3>
                                        <p className="text-lg font-bold text-[#d0302b] uppercase tracking-widest">{stage.grades}</p>
                                        <div className="w-12 h-1 bg-gray-100" />
                                        <p className="text-xl leading-relaxed text-gray-700">
                                            {stage.description}
                                        </p>
                                    </div>
                                    <div className="w-full lg:w-1/2 relative">
                                        <div className="absolute -inset-4 bg-gray-50 rounded-[3rem] -z-10" />
                                        <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
                                            <img src={stage.img} alt={stage.title} className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA (Changed from Black to Red) */}
                <section className="py-24 bg-[#d0302b] px-4 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
                    </div>
                    <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                            <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight" style={{ fontFamily: "'Raleway', sans-serif" }}>
                                Prepare Your Child for <br className="hidden sm:block" /> a Global Future.
                            </h2>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                                <Button href="/admissions" variant="primary" size="lg" className="bg-white text-[#d0302b] hover:bg-gray-100 rounded-full px-12">
                                    Start Enrollment
                                </Button>
                                <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white/10 rounded-full px-12">
                                    Contact Admissions
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
}
