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
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center gap-12">
                        {/* Top - Clean 3-Image Row (All in one line) */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8 }}
                            className="w-full max-w-6xl mx-auto"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="rounded-3xl overflow-hidden shadow-lg bg-white p-2 border border-gray-100 flex flex-col h-[350px]"
                                >
                                    <img
                                        src="/images/Screenshot 2026-02-09 at 2.44.22 PM.png"
                                        alt="Evolution 1"
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="rounded-3xl overflow-hidden shadow-lg bg-white p-2 border border-gray-100 flex flex-col h-[350px]"
                                >
                                    <img
                                        src="/images/Screenshot 2026-02-09 at 2.44.26 PM.png"
                                        alt="Evolution 2"
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="rounded-3xl overflow-hidden shadow-lg bg-white p-2 border border-gray-100 flex flex-col h-[350px]"
                                >
                                    <img
                                        src="/images/Screenshot 2026-02-09 at 2.44.30 PM.png"
                                        alt="Evolution 3"
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>


                        {/* Bottom - Content */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-center max-w-4xl"
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
                            <div className="space-y-6 text-lg" style={{ color: '#4F4F4F', lineHeight: '1.8', fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                                <p className="text-2xl font-black text-[#1A1A1A]" style={{ fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                                    Honoring the three-decade legacy of Megacity High School
                                </p>
                                <ul className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-center">
                                    {[
                                        'Redefining the future of learning',
                                        'Blending CBSE curriculum with global pathways',
                                        'Academic collaboration with Maple Bear Canadian School'
                                    ].map((item, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.15, duration: 0.5 }}
                                            className="flex items-center"
                                        >
                                            <span className="w-2.5 h-2.5 rounded-full mr-3 flex-shrink-0" style={{ background: 'linear-gradient(145deg, #D6B25E, #C4A24E)' }}></span>
                                            <span className="text-lg font-bold text-[#4F4F4F]">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                                <p className="font-bold text-xl mt-10 p-8 rounded-[2.5rem] bg-gradient-to-br from-[#D6B25E]/5 to-[#d0302b]/5 border-t border-b border-[#D6B25E]/10" style={{ color: '#1A1A1A', fontStyle: 'normal' }}>
                                    &quot;This is not just a transition — it’s an evolution with purpose&quot;
                                </p>
                                <div className="mt-12 flex justify-center">
                                    <Button href="/about" variant="primary" size="lg">
                                        Learn More About Our Legacy
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* Curriculum Section */}
            <section className="py-24 bg-[#d0302b] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        {/* Left Side - Content */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8 }}
                            className="text-white"
                        >
                            <h2
                                className="text-5xl lg:text-7xl font-black mb-8 leading-tight"
                                style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif", color: '#FFFFFF' }}
                            >
                                <span style={{ color: '#FFFFFF' }}>Curriculum</span>
                            </h2>
                            <h3 className="text-3xl font-bold mb-8" style={{ color: '#FFFFFF' }}>
                                A Seamless Blend of Two Powerful Systems
                            </h3>

                            <div
                                className="inline-flex items-center gap-6 px-10 py-5 rounded-full mb-10 bg-white/10 backdrop-blur-md border border-white/30"
                            >
                                <span className="text-xl font-black" style={{ color: '#FFFFFF' }}>Canadian Pedagogy</span>
                                <span className="text-3xl font-light" style={{ color: 'rgba(255,255,255,0.7)' }}>|</span>
                                <span className="text-xl font-black" style={{ color: '#FFFFFF' }}>CBSE Curriculum</span>
                            </div>

                            <p className="text-xl leading-relaxed mb-10" style={{ fontFamily: '"Lato", Arial, Helvetica, sans-serif', color: '#FFFFFF' }}>
                                At Mapleford International School, learning is shaped by a powerful collaboration with{' '}
                                <span className="font-black" style={{ color: '#FFFFFF' }}>Maple Bear Global Schools, Canada</span>
                                —a world leader in bilingual, inquiry-based education. Through this framework, our students benefit from the proven strengths
                                of the Canadian education system while staying firmly aligned to India&apos;s robust CBSE curriculum.
                            </p>

                            <div className="flex justify-start">
                                <Button href="/curriculum" variant="secondary" size="lg">
                                    Explore Our Curriculum
                                </Button>
                            </div>
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
                                className="rounded-[3rem] overflow-hidden shadow-2xl relative aspect-square lg:aspect-auto h-[600px] border-8 border-white/10"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&h=1200&fit=crop"
                                    alt="Canadian Pedagogy + CBSE Curriculum"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                <div className="absolute bottom-10 left-10 bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-xl text-left">
                                    <p className="font-black text-2xl text-[#d0302b]" style={{ fontFamily: '"Raleway", sans-serif' }}>Global Standards.</p>
                                    <p className="font-black text-2xl text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>Indian Values.</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* The Continuum of Learning */}
            <section className="py-12 bg-white" id="continuum">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            {
                                id: 'pre-school',
                                stage: 'Pre-School',
                                grades: '(Nursery, Jr. KG, Sr. KG)',
                                description: 'The foundation years where curiosity blossoms and imagination leads learning through play and discovery.',
                                image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=800&fit=crop',
                            },
                            {
                                id: 'elementary',
                                stage: 'Elementary',
                                grades: '(Grades 1–5)',
                                description: 'Strengthening academics, values, and creativity through interactive classrooms and real-world applications.',
                                image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=800&fit=crop',
                            },
                            {
                                id: 'middle-school',
                                stage: 'Middle School',
                                grades: '(Grades 6–8)',
                                description: 'Deep inquiry and analytical thinking, bridging childhood and adolescence with diverse personal interests.',
                                image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=800&fit=crop',
                            },
                            {
                                id: 'high-school',
                                stage: 'High School',
                                grades: '(Grades 9–10)',
                                description: "Transformation years that foster independence and vision, preparing learners to lead in a global landscape.",
                                image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=800&fit=crop',
                            }
                        ].map((stage, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col h-[480px] hover:shadow-[0_25px_50px_rgba(0,0,0,0.12)] transition-all duration-500 border border-gray-100 rounded-none"
                            >
                                <div className="h-[45%] overflow-hidden relative">
                                    <img
                                        src={stage.image}
                                        alt={`${stage.stage} Class`}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 rounded-none"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>
                                <div className="h-[55%] p-6 text-center flex flex-col justify-between items-center bg-white">
                                    <div className="space-y-2">
                                        <h3
                                            className="text-lg font-black"
                                            style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif", color: '#d0302b' }}
                                        >
                                            {stage.stage}
                                        </h3>
                                        <p className="font-bold text-[11px] tracking-wider uppercase text-gray-400">
                                            {stage.grades}
                                        </p>
                                        <p className="text-gray-500 leading-relaxed text-[13px] line-clamp-4 px-2" style={{ fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                                            {stage.description}
                                        </p>
                                    </div>
                                    <div className="pt-4 w-full">
                                        <Button
                                            href={`/curriculum#${stage.id}`}
                                            variant="primary"
                                            size="sm"
                                            className="w-full rounded-none font-bold transition-all duration-300 py-2"
                                        >
                                            Explore {stage.stage}
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STEAM Section */}
            <section className="py-24 bg-[#d0302b] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        {/* Left Column: Dynamic Rotating Cards */}
                        <div className="relative h-[600px] flex items-center justify-center pt-4" style={{ perspective: '1200px' }}>
                            <div className="relative w-full max-w-[450px] h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
                                {[
                                    { title: 'Science', query: 'with Imagination', icon: '🔬', index: 0 },
                                    { title: 'Technology', query: 'with Innovation', icon: '💻', index: 1 },
                                    { title: 'Engineering', query: 'with Design', icon: '⚙️', index: 2 },
                                    { title: 'Arts', query: 'with Purpose', icon: '🎨', index: 3 },
                                    { title: 'Mathematics', query: 'with Vision', icon: '📐', index: 4 }
                                ].map((item, idx) => {
                                    const total = 5;
                                    const angle = (idx * (360 / total) - steamIndex * (360 / total));

                                    return (
                                        <motion.div
                                            key={idx}
                                            className="absolute w-[380px] p-6 rounded-[2.5rem] border border-white/20 bg-white shadow-2xl flex items-center gap-6 group cursor-default"
                                            initial={false}
                                            animate={{
                                                rotateY: angle,
                                                z: 320,
                                                opacity: Math.cos(angle * Math.PI / 180) > -0.2 ? 1 : 0,
                                                scale: 0.8 + (Math.cos(angle * Math.PI / 180) + 1) * 0.1,
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 40,
                                                damping: 15
                                            }}
                                            style={{
                                                transformOrigin: "center center",
                                                backfaceVisibility: 'hidden',
                                                // This makes the card face forward even as it rotates around the center
                                                transformStyle: 'preserve-3d'
                                            }}
                                        >
                                            {/* Inner content rotates back to face user */}
                                            <motion.div
                                                className="flex items-center gap-6 w-full"
                                                animate={{ rotateY: -angle }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 40,
                                                    damping: 15
                                                }}
                                            >
                                                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500 shadow-inner">
                                                    {item.icon}
                                                </div>
                                                <div className="text-left">
                                                    <h4 className="text-xl font-black text-[#1A1A1A]" style={{ fontFamily: "'Raleway', sans-serif" }}>
                                                        <span className="text-[#d0302b]">{item.title.charAt(0)}</span>{item.title.slice(1)}
                                                    </h4>
                                                    <p className="text-xs font-bold text-gray-400 group-hover:text-[#d0302b] transition-colors">{item.query}</p>
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Column: Description */}
                        <motion.div
                            className="text-left relative text-white"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight" style={{ color: '#FFFFFF', fontFamily: "'Raleway', sans-serif" }}>
                                    Where Logic Meets <br /><span className="text-white">Imagination</span>
                                </h2>

                                <div className="space-y-8 text-xl leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>
                                    <p className="border-l-4 border-white pl-6 py-1 font-bold" style={{ color: '#FFFFFF' }}>
                                        At Mapleford International School, STEAM education blends Science, Technology, Engineering, Arts, and Mathematics to cultivate learners who can think critically and innovate purposefully.
                                    </p>
                                    <p style={{ color: '#FFFFFF' }}>
                                        Our classrooms are spaces of exploration — where scientific curiosity merges with artistic creativity, and technology becomes a canvas for expression.
                                    </p>
                                    <p style={{ color: '#FFFFFF' }}>
                                        Students engage in hands-on design projects, robotics, visual arts, and coding, learning to see challenges from multiple perspectives.
                                    </p>
                                </div>

                                <div className="mt-12 hidden">
                                    <Button href="/programs" variant="outline-white" size="lg" className="hover:bg-white hover:text-[#d0302b]">
                                        Discover our Labs →
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
            <section className="py-24 bg-[#d0302b] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                                className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/10"
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
                            className="order-1 lg:order-2 text-white"
                        >
                            <h2
                                className="text-5xl lg:text-7xl font-black mb-8 leading-tight"
                                style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif", color: '#FFFFFF' }}
                            >
                                Sports <span className="text-white">Arena</span>
                            </h2>
                            <p
                                className="text-3xl font-bold mb-6 text-white"
                                style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif" }}
                            >
                                Chasing Goals! Soaring Spirits High!
                            </p>
                            <p className="mb-6 text-xl leading-relaxed" style={{ fontFamily: '"Lato", Arial, Helvetica, sans-serif', color: 'rgba(255,255,255,0.9)' }}>
                                At Mapleford International School, growth isn’t limited to books and classrooms — it thrives on the field, on the court, and in every challenge that builds spirit and strength. Every match played shapes not just an athlete, but a resilient individual.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-10">
                                {['Football', 'Badminton', 'Tennis', 'Athletics'].map((sport, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className="flex items-center p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm"
                                    >
                                        <span className="w-3 h-3 rounded-full mr-3 bg-white"></span>
                                        <span className="font-bold text-white">{sport}</span>
                                    </motion.div>
                                ))}
                            </div>
                            <Button href="/campus" variant="outline-white" size="lg" className="hover:bg-white hover:text-[#d0302b]">
                                Explore Sports Facilities
                            </Button>
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
