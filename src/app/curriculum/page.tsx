'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Curriculum() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <div className="pt-24 min-h-screen bg-white text-[#1A1A1A]">
                {/* Hero Section */}
                <section className="relative py-32 lg:py-52 overflow-hidden bg-[#FDF6E3]/30">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstripe-light.png')] opacity-30"></div>
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#1A1A1A]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <h1
                                className="text-6xl lg:text-9xl font-bold mb-8 leading-[0.9]"
                                style={{ fontFamily: '"Raleway", sans-serif' }}
                            >
                                Curriculum
                            </h1>
                            <h2 className="text-2xl lg:text-4xl font-bold text-[#8B1E1A] mb-8" style={{ fontFamily: '"Raleway", sans-serif' }}>
                                Where CBSE Excellence Meets Canadian Innovation
                            </h2>
                        </motion.div>
                    </div>
                </section>

                {/* Global Collaboration */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="space-y-6 text-lg text-[#4F4F4F] leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>
                                    <p>
                                        At Mapleford International School, learning is shaped by a powerful collaboration with <strong>Maple Bear Global Schools, Canada</strong>—a world leader in bilingual, inquiry-based education operating across 35+ countries and 450+ schools.
                                    </p>
                                    <p>
                                        Through this partnership, our students benefit from the proven strengths of the Canadian education system, consistently ranked among the world’s best, while staying firmly aligned to India’s respected CBSE framework.
                                    </p>

                                    <div className="mt-12 space-y-8">
                                        <h3 className="text-2xl font-bold text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>
                                            A Seamless Blend of Two Powerful Systems
                                        </h3>
                                        <div
                                            className="inline-flex items-center gap-4 px-8 py-4 rounded-full border border-[#D6B25E]/30"
                                            style={{ background: 'linear-gradient(135deg, rgba(214,178,94,0.1), rgba(139,30,26,0.05))' }}
                                        >
                                            <span className="text-xl font-bold text-[#8B1E1A]">Canadian Pedagogy</span>
                                            <span className="text-2xl font-black">+</span>
                                            <span className="text-xl font-bold text-[#8B1E1A]">CBSE Curriculum</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative"
                            >
                                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative">
                                    <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=800&fit=crop" className="w-full h-full object-cover" alt="Students learning" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Content Details */}
                <section className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto space-y-12">
                            <p className="text-xl text-[#4F4F4F] leading-relaxed">
                                Our curriculum combines the rigour, clarity, and progression of CBSE with the student-centred, inquiry-driven practices of Canadian education. Students learn through exploration, collaboration, and real-world application—while mastering the core competencies expected in the CBSE framework.
                            </p>

                            <div>
                                <h3 className="text-2xl font-bold mb-8 text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>What this means for learners:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {[
                                        "Strong foundations in Math, Science, Languages, and Social Sciences",
                                        "Deep conceptual understanding instead of rote memory",
                                        "Inquiry, problem-solving, and project-based learning",
                                        "Continuous assessment aligned to Maple Bear learning outcomes",
                                        "Preparedness for CBSE board pathways in higher grades"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-4 items-start">
                                            <span className="w-8 h-8 rounded-full bg-[#8B1E1A] text-white flex items-center justify-center shrink-0 text-sm font-bold">✓</span>
                                            <p className="text-lg text-gray-700">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="text-xl font-medium text-[#1A1A1A] italic">
                                This dual approach ensures academic excellence, global exposure, and readiness for higher education in India or abroad.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Curriculum Pathway */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl lg:text-5xl font-black mb-16 text-center text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>
                            Curriculum Pathway from Early Years to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Senior School</span>
                        </h2>

                        <div className="space-y-16">
                            {/* Pre-School */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
                            >
                                <div className="lg:col-span-4">
                                    <h3 className="text-3xl font-black text-[#8B1E1A] mb-4" style={{ fontFamily: '"Raleway", sans-serif' }}>Pre-School</h3>
                                    <p className="text-lg text-gray-500 font-bold italic mb-6">(Pre-Nursery to Kindergarten)</p>
                                    <div className="rounded-3xl overflow-hidden shadow-xl aspect-video">
                                        <img src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=600&fit=crop" className="w-full h-full object-cover" alt="Pre-school" />
                                    </div>
                                </div>
                                <div className="lg:col-span-8 space-y-6">
                                    <p className="text-xl text-gray-700 leading-relaxed font-medium">
                                        Play-based, inquiry-led Maple Bear early learning model that develops:
                                    </p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-600">
                                        {["Social and emotional growth", "Early literacy and numeracy", "Motor skills and creativity"].map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-3">
                                                <span className="w-2 h-2 rounded-full bg-[#8B1E1A]"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-lg text-gray-600">
                                        Children learn through exploration across interactive learning centres such as reading, drama, water, sand, math, and music.
                                    </p>
                                </div>
                            </motion.div>

                            <hr className="border-gray-100" />

                            {/* Elementary School */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
                            >
                                <div className="lg:col-span-4">
                                    <h3 className="text-3xl font-black text-[#8B1E1A] mb-4" style={{ fontFamily: '"Raleway", sans-serif' }}>Elementary School</h3>
                                    <div className="rounded-3xl overflow-hidden shadow-xl aspect-video">
                                        <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop" className="w-full h-full object-cover" alt="Elementary school" />
                                    </div>
                                </div>
                                <div className="lg:col-span-8 space-y-6">
                                    <p className="text-xl text-gray-700 leading-relaxed font-medium">
                                        A progressive, concept-driven curriculum where:
                                    </p>
                                    <ul className="space-y-4 text-lg text-gray-600">
                                        <li className="flex items-start gap-3">
                                            <span className="w-2 h-2 rounded-full bg-[#8B1E1A] mt-2 shrink-0"></span>
                                            CBSE learning milestones are integrated with Canadian instructional strategies
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-2 h-2 rounded-full bg-[#8B1E1A] mt-2 shrink-0"></span>
                                            Lessons are designed to nurture curiosity, independence, and higher-order thinking
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-2 h-2 rounded-full bg-[#8B1E1A] mt-2 shrink-0"></span>
                                            Hands-on learning and continuous feedback help each child progress at their own pace
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>

                            <hr className="border-gray-100" />

                            {/* High School */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
                            >
                                <div className="lg:col-span-4">
                                    <h3 className="text-3xl font-black text-[#8B1E1A] mb-4" style={{ fontFamily: '"Raleway", sans-serif' }}>High School</h3>
                                    <div className="rounded-3xl overflow-hidden shadow-xl aspect-video">
                                        <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop" className="w-full h-full object-cover" alt="High school" />
                                    </div>
                                </div>
                                <div className="lg:col-span-8 space-y-6">
                                    <p className="text-xl text-gray-700 leading-relaxed font-medium">
                                        A strong CBSE academic roadmap strengthened by:
                                    </p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-600">
                                        {["Critical thinking frameworks", "Skill-based projects", "Leadership and global citizenship programs", "Opportunities for international collaboration and cultural exchanges"].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className="w-2 h-2 rounded-full bg-[#8B1E1A] mt-2 shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-red-50 text-center">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-4xl lg:text-6xl font-black mb-10 text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>Invest in Their <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Future.</span></h2>
                        <div className="flex gap-4 justify-center">
                            <Link href="/admissions" className="px-10 py-5 bg-[#8B1E1A] text-white rounded-2xl font-bold text-lg hover:shadow-2xl transition-all shadow-xl">Apply Now</Link>
                            <Link href="/contact" className="px-10 py-5 border-2 border-[#8B1E1A] text-[#8B1E1A] rounded-2xl font-bold text-lg hover:bg-[#8B1E1A]/5 transition-all">Enquire Today</Link>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
