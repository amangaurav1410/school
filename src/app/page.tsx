'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import AdmissionModal from '../components/AdmissionModal';

export default function Home() {
    const [showFrenchMotto, setShowFrenchMotto] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [steamIndex, setSteamIndex] = useState(0);

    // Animate motto text sequence
    useEffect(() => {
        const interval = setInterval(() => {
            setShowFrenchMotto(prev => !prev);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Auto-rotate STEAM section
    useEffect(() => {
        const interval = setInterval(() => {
            setSteamIndex(prev => (prev + 1) % 5);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Fade in animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section with Video */}
            <section className="relative overflow-hidden h-screen">
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/WhatsApp Video 2026-01-16 at 09.02.08.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
                </div>

                <div className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-8 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center max-w-5xl w-full"
                    >
                        <div className="flex items-center justify-center" style={{ minHeight: '120px' }}>
                            <AnimatePresence mode="wait">
                                {showFrenchMotto ? (
                                    <motion.h1
                                        key="french"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.8 }}
                                        className="font-bold"
                                        style={{
                                            fontFamily: '"Raleway", Arial, Helvetica, sans-serif',
                                            textShadow: '0 4px 30px rgba(0,0,0,0.5)',
                                            letterSpacing: '0.05em',
                                            lineHeight: '1.2',
                                            fontSize: 'clamp(24px, 5vw, 56px)',
                                            background: 'linear-gradient(135deg, #FF8C00 0%, #FFD700 50%, #D6B25E 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                                        }}
                                    >
                                        Le Savoir | Intégrité | L&apos;Excellence
                                    </motion.h1>
                                ) : (
                                    <motion.h1
                                        key="english"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.8 }}
                                        className="font-bold flex flex-col items-center"
                                        style={{
                                            fontFamily: '"Raleway", Arial, Helvetica, sans-serif',
                                            textShadow: '0 4px 30px rgba(0,0,0,0.5)',
                                            letterSpacing: '0.05em',
                                            lineHeight: '1.2',
                                            fontSize: 'clamp(24px, 5vw, 56px)',
                                            background: 'linear-gradient(135deg, #FFFFFF 0%, #FFD700 50%, #FFA500 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                                        }}
                                    >
                                        <span className="mb-2">Knowledge | Integrity | Excellence</span>
                                    </motion.h1>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
                    >
                        <motion.div className="w-1.5 h-3 bg-white/70 rounded-full" />
                    </motion.div>
                </motion.div>
            </section>

            {/* The Mapleford Edge */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8 }}
                        >
                            <h2
                                className="text-5xl lg:text-6xl font-black mb-8 leading-tight"
                                style={{
                                    fontFamily: "'Raleway', Arial, Helvetica, sans-serif",
                                    color: '#1A1A1A'
                                }}
                            >
                                The Mapleford <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Edge</span>
                            </h2>
                            <div className="space-y-5 text-lg" style={{ color: '#4F4F4F', lineHeight: '1.8', fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                                <p className="text-xl font-medium" style={{ color: '#d0302b', fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                                    Honoring the three-decade legacy of Megacity High School
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        'Redefining the future of learning',
                                        'Blending CBSE curriculum with global pathways',
                                        'Academic collaboration with Maple Bear Canadian School'
                                    ].map((item, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.15, duration: 0.5 }}
                                            className="flex items-start"
                                        >
                                            <span className="w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0" style={{ background: 'linear-gradient(145deg, #D6B25E, #C4A24E)' }}></span>
                                            <span className="text-lg">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                                <p className="font-medium text-xl mt-8 p-6 rounded-2xl" style={{ color: '#8d211d', background: 'linear-gradient(135deg, rgba(214,178,94,0.1), rgba(208,48,43,0.05))', fontStyle: 'normal' }}>
                                    &quot;This is not just a transition — it’s an evolution with purpose&quot;
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative"
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="rounded-3xl overflow-hidden shadow-2xl relative flex items-center justify-center bg-white p-12"
                            >
                                <img
                                    src="/left-logo.png"
                                    alt="The Mapleford Edge"
                                    className="w-full h-auto object-contain"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="py-24 bg-gradient-to-br from-amber-100 via-orange-50 to-red-100 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-[#d0302b] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D6B25E] rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Content */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8 }}
                        >
                            <h2
                                className="text-5xl lg:text-6xl font-black mb-8 leading-tight"
                                style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif", color: '#1A1A1A' }}
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Curriculum</span>
                            </h2>
                            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#d0302b' }}>
                                A Seamless Blend of Two Powerful Systems
                            </h3>

                            <div
                                className="inline-flex items-center gap-4 px-8 py-4 rounded-full mb-8"
                                style={{ background: 'linear-gradient(135deg, rgba(214,178,94,0.2), rgba(208,48,43,0.1))' }}
                            >
                                <span className="text-xl font-semibold" style={{ color: '#8d211d' }}>Canadian Pedagogy</span>
                                <span className="text-2xl">+</span>
                                <span className="text-xl font-semibold" style={{ color: '#8d211d' }}>CBSE Curriculum</span>
                            </div>

                            <p className="text-lg leading-relaxed mb-8" style={{ color: '#4F4F4F', fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                                At Mapleford International School, learning is shaped by a powerful collaboration with{' '}
                                <span className="font-semibold" style={{ color: '#d0302b' }}>Maple Bear Global Schools, Canada</span>
                                —a world leader in bilingual, inquiry-based education operating across 35+ countries
                                and 450+ schools. Through this framework, our students benefit from the proven strengths
                                of the Canadian education system, consistently ranked among the world&apos;s best, while staying
                                firmly aligned to India&apos;s robust CBSE curriculum.
                            </p>


                        </motion.div>

                        {/* Right Side - Visual Elements */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="rounded-3xl overflow-hidden shadow-2xl relative aspect-square lg:aspect-auto h-full"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1000&h=1200&fit=crop" // Students studying / Canadian + CBSE vibe
                                    alt="Canadian Pedagogy + CBSE Curriculum"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-[#D6B25E]/20">
                                    <p className="font-bold text-[#d0302b]">Global Standards.</p>
                                    <p className="font-bold text-[#1A1A1A]">Indian Values.</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Continuum of Learning */}
            <section className="py-24 bg-white" id="continuum">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2
                            className="text-5xl lg:text-6xl font-black mb-8 leading-tight"
                            style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif", color: '#1A1A1A' }}
                        >
                            The Continuum of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Learning</span>
                        </h2>
                        <p className="text-xl max-w-4xl mx-auto" style={{ color: '#4F4F4F', lineHeight: '1.8', fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                            Every stage of learning is a milestone in growth — thoughtfully designed to nurture young minds into competent whizz-kids with wisdom and wonder.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                stage: 'Pre-School',
                                grades: '(Nursery, Jr. KG, Sr. KG)',
                                description: 'The foundation years where curiosity blossoms and imagination leads learning. Through play-based exploration, storytelling, and creative discovery, pre-schoolers develop early confidence.',
                                image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=600&fit=crop',
                                color: '#E8F5E9'
                            },
                            {
                                stage: 'Elementary',
                                grades: '(Grades 1–5)',
                                description: 'The building years of knowledge and expression — where students strengthen academics, values, and creativity through interactive classrooms and real-world applications.',
                                image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop',
                                color: '#E3F2FD'
                            },
                            {
                                stage: 'Middle School',
                                grades: '(Grades 6–8)',
                                description: 'Bridging the gap between childhood and adolescence, focusing on deep inquiry, analytical thinking, and developing personal interests across diverse subjects.',
                                image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop',
                                color: '#F3E5F5'
                            },
                            {
                                stage: 'High School',
                                grades: '(Grades 9–10)',
                                description: "The transformation years that foster independence and vision. Learners evolve into confident aspirants — ready to lead and innovate in a global landscape.",
                                image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
                                color: '#FFF3E0'
                            }
                        ].map((stage, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={stage.image}
                                        alt={`${stage.stage} Class`}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-8 text-center h-full" style={{ background: stage.color }}>
                                    <h3
                                        className="text-2xl font-bold mb-2"
                                        style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif", color: '#1A1A1A' }}
                                    >
                                        {stage.stage}
                                    </h3>
                                    <p className="font-semibold mb-4" style={{ color: '#d0302b' }}>
                                        {stage.grades}
                                    </p>
                                    <p style={{ color: '#4F4F4F', lineHeight: '1.7', fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>{stage.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <Button href="/programs" variant="primary" size="lg">
                        Explore Our Curriculum
                    </Button>
                </div>
            </section>

            {/* STEAM Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-50/50 to-transparent -z-10"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-3xl -z-10"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        {/* Left Column: Dynamic Rotating Cards */}
                        <div className="relative h-[600px] flex items-center justify-center pt-4">
                            <div className="relative w-full max-w-[450px] h-full flex items-center justify-center">
                                {[
                                    { title: 'Science', query: 'with Imagination', icon: '🔬', color: 'from-blue-500/20 to-blue-600/10', glow: 'shadow-blue-500/20', index: 0 },
                                    { title: 'Technology', query: 'with Innovation', icon: '💻', color: 'from-purple-500/20 to-purple-600/10', glow: 'shadow-purple-500/20', index: 1 },
                                    { title: 'Engineering', query: 'with Design', icon: '⚙️', color: 'from-orange-500/20 to-orange-600/10', glow: 'shadow-orange-500/20', index: 2 },
                                    { title: 'Arts', query: 'with Purpose', icon: '🎨', color: 'from-pink-500/20 to-pink-600/10', glow: 'shadow-pink-500/20', index: 3 },
                                    { title: 'Mathematics', query: 'with Vision', icon: '📐', color: 'from-green-500/20 to-green-600/10', glow: 'shadow-green-500/20', index: 4 }
                                ].map((item, idx) => {
                                    // Calculate rotation/position based on an auto-incrementing state
                                    // I'll add the hook at the top of the component
                                    return (
                                        <motion.div
                                            key={idx}
                                            className={`absolute w-full p-8 rounded-[3rem] border border-white/50 bg-white/80 backdrop-blur-xl shadow-2xl flex items-center gap-8 group cursor-default transition-all duration-700`}
                                            initial={false}
                                            animate={{
                                                y: ((idx - steamIndex + 5) % 5 - 2) * 130,
                                                scale: 1 - Math.abs(((idx - steamIndex + 5) % 5 - 2)) * 0.15,
                                                opacity: 1 - Math.abs(((idx - steamIndex + 5) % 5 - 2)) * 0.4,
                                                zIndex: 5 - Math.abs(((idx - steamIndex + 5) % 5 - 2)),
                                                rotateX: ((idx - steamIndex + 5) % 5 - 2) * -10
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 100,
                                                damping: 20
                                            }}
                                        >
                                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem]`}></div>

                                            <div className="relative z-10 flex items-center gap-8">
                                                <div className="w-24 h-24 rounded-[2rem] bg-white shadow-lg flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-500">
                                                    {item.icon}
                                                </div>
                                                <div className="text-left">
                                                    <h4 className="text-3xl font-black text-[#1A1A1A]" style={{ fontFamily: "'Raleway', sans-serif" }}>
                                                        <span className="text-[#d0302b]">{item.title.charAt(0)}</span>{item.title.slice(1)}
                                                    </h4>
                                                    <p className="text-xl font-bold text-gray-400 group-hover:text-[#d0302b] transition-colors">{item.query}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Column: Description */}
                        <motion.div
                            className="text-left relative"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-tight" style={{ color: '#1A1A1A', fontFamily: "'Raleway', sans-serif" }}>
                                    Where Logic Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Imagination</span>
                                </h2>

                                <div className="space-y-8 text-lg leading-relaxed text-[#4F4F4F]" style={{ fontFamily: '"Lato", sans-serif' }}>
                                    <p className="border-l-4 border-[#D6B25E] pl-6 py-1 text-xl font-medium" style={{ color: '#1A1A1A' }}>
                                        At Mapleford International School, <strong>STEAM education</strong> blends Science, Technology, Engineering, Arts, and Mathematics to cultivate learners who can think critically, design creatively, and innovate purposefully.
                                    </p>
                                    <p>
                                        Our classrooms are spaces of exploration — where scientific curiosity merges with artistic creativity, and technology becomes a canvas for expression.
                                    </p>
                                    <p>
                                        Students engage in hands-on design projects, robotics, visual arts, coding, and creative problem-solving learning to see challenges from multiple perspectives.
                                    </p>
                                </div>

                                <div className="mt-12">
                                    <Button href="/programs" variant="primary" size="lg" className="group relative overflow-hidden">
                                        <span className="relative z-10 flex items-center gap-3">
                                            Discover our Labs
                                            <motion.span
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                →
                                            </motion.span>
                                        </span>
                                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                    </Button>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Campus Section */}
            <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8 }}
                        >
                            <h2
                                className="text-5xl lg:text-6xl font-black mb-8 leading-tight"
                                style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif", color: '#1A1A1A' }}
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Campus</span>
                            </h2>
                            <h3 className="text-2xl font-bold mb-6 text-[#d0302b]" style={{ fontFamily: "'Raleway', sans-serif" }}>
                                Spaces that Inspire | Designed for Discovery | Purposefully Equipped
                            </h3>
                            <p className="text-lg mb-6" style={{ color: '#4F4F4F', lineHeight: '1.8', fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                                Set across a sprawling 4-acre campus, Mapleford International School offers a thoughtfully designed environment where every corner is a space for discovery.
                            </p>
                            <p className="mb-8" style={{ color: '#4F4F4F', lineHeight: '1.8', fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                                From smart classrooms and innovation labs to vibrant sports arenas and creative studios, our campus is purposefully equipped to support academic focus, physical vitality, and holistic growth.
                            </p>
                            <Button href="/campus" variant="primary" size="lg">
                                Explore Our Campus
                            </Button>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative"
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="aspect-video rounded-3xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&h=900&fit=crop"
                                    alt="Campus Overview"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#D6B25E]/20 rounded-full blur-3xl -z-10"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Sports Arena Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="aspect-video rounded-3xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1577412647305-991150c7d163?w=1600&h=900&fit=crop"
                                    alt="Sports Facilities - Students Playing"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="order-1 lg:order-2"
                        >
                            <h2
                                className="text-5xl lg:text-6xl font-black mb-8 leading-tight"
                                style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif", color: '#1A1A1A' }}
                            >
                                Sports <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Arena</span>
                            </h2>
                            <p
                                className="text-2xl font-semibold mb-4"
                                style={{ color: '#d0302b', fontFamily: "'Raleway', Arial, Helvetica, sans-serif" }}
                            >
                                Chasing Goals! Soaring Spirits High!
                            </p>
                            <p className="mb-6" style={{ color: '#8d211d', fontFamily: '"Lato", Arial, Helvetica, sans-serif', fontWeight: '500' }}>
                                Where passion charges the field — and every sport, a lesson in excellence
                            </p>
                            <p className="mb-6" style={{ color: '#4F4F4F', lineHeight: '1.8', fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                                At Mapleford International School, growth isn’t limited to books and classrooms — it thrives on the field, on the court, and in every challenge that builds spirit and strength. Every match played, every goal scored, and every serve perfected shapes not just an athlete, but a resilient, disciplined, and determined individual.
                            </p>
                            <p className="mb-6" style={{ color: '#4F4F4F', lineHeight: '1.8', fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                                With a vibrant sporting culture at its heart, Mapleford nurtures young talent through Football, Badminton, Tennis, and Athletics, encouraging every student to discover the joy of play and the power of perseverance. Our state-of-the-art infrastructure — from modern sports arenas to safe, well-equipped training zones — forms the backbone of an environment that fosters confidence, team spirit, and leadership.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {['Football', 'Badminton', 'Tennis', 'Athletics'].map((sport, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className="flex items-center p-3 rounded-xl bg-gradient-to-r from-[#D6B25E]/10 to-transparent"
                                    >
                                        <span className="w-3 h-3 rounded-full mr-3" style={{ background: '#D6B25E' }}></span>
                                        <span style={{ color: '#4F4F4F' }}>{sport}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Admission Enquiry CTA Section */}
            <section className="py-24 relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-red-50">
                <div className="absolute inset-0 opacity-100">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-[#D6B25E]/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#d0302b]/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8 }}
                            className="text-[#1A1A1A]"
                        >
                            <h2
                                className="text-5xl lg:text-7xl font-black mb-8 leading-tight uppercase tracking-tighter"
                                style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif" }}
                            >
                                Start Your Child&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Journey</span>
                            </h2>
                            <h3 className="text-3xl font-bold mb-8" style={{ color: '#d0302b' }}>
                                Connect with Mapleford
                            </h3>
                            <p className="text-[#4F4F4F] mb-12 text-xl leading-relaxed max-w-xl" style={{ fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                                Do you have questions about admissions, curriculum, or campus visits?
                                We’re here to assist you at every step of your child&apos;s educational journey.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <Button
                                    onClick={() => setIsModalOpen(true)}
                                    variant="primary"
                                    size="lg"
                                    className="w-full sm:w-auto px-12"
                                >
                                    Admission Enquiry
                                </Button>
                                <Button
                                    href="https://wa.me/919000568416"
                                    variant="outline"
                                    size="lg"
                                    className="w-full sm:w-auto flex items-center justify-center gap-3"
                                >
                                    WhatsApp Us
                                </Button>
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
                            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop"
                                    alt="Students at Mapleford"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#D6B25E]/20 rounded-full blur-3xl -z-10"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <AdmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <Footer />
        </div>
    );
}
