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
                            className="w-full max-w-5xl mx-auto"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="rounded-3xl overflow-hidden shadow-lg bg-white p-2 border border-gray-100 flex flex-col h-[300px]"
                                >
                                    <img
                                        src="/images/Screenshot 2026-02-09 at 2.44.22 PM.png"
                                        alt="Evolution 1"
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="rounded-3xl overflow-hidden shadow-lg bg-white p-2 border border-gray-100 flex flex-col h-[300px]"
                                >
                                    <img
                                        src="/images/Screenshot 2026-02-09 at 2.44.26 PM.png"
                                        alt="Evolution 2"
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="rounded-3xl overflow-hidden shadow-lg bg-white p-2 border border-gray-100 flex flex-col h-[300px]"
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
                                className="text-[44px] lg:text-[56px] font-black mb-8 leading-tight"
                                style={{
                                    fontFamily: "'Raleway', Arial, Helvetica, sans-serif",
                                    color: '#1A1A1A'
                                }}
                            >
                                The Mapleford Edge
                            </h2>
                            <div className="space-y-8 text-lg" style={{ color: '#4F4F4F', lineHeight: '1.8', fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                                <p className="text-xl leading-relaxed" style={{ color: '#4F4F4F' }}>
                                    Rooted in the proud three-decade legacy of Megacity High School, representing a purposeful evolution in education, Mapleford International School carries forward time-tested values while redefining learning in a rapidly changing world.
                                </p>
                                <p className="text-xl leading-relaxed" style={{ color: '#4F4F4F' }}>
                                    Anchored in the strength of the CBSE curriculum and enriched through global learning pathways through our academic collaboration with Maple Bear Canadian School, students gain international perspectives through contemporary teaching approaches and the confidence to navigate global opportunities.
                                </p>
                                <div className="mt-12 flex justify-center">
                                    <Button href="/about" variant="primary" size="lg">
                                        About Us
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
                                className="text-[44px] lg:text-[68px] font-black mb-8 leading-tight"
                                style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif", color: '#FFFFFF' }}
                            >
                                <span style={{ color: '#FFFFFF' }}>Curriculum</span>
                            </h2>
                            <h3 className="text-3xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
                                A Seamless Blend of Two Powerful Systems
                            </h3>
                            <h4 className="text-2xl font-medium mb-8 opacity-90" style={{ color: '#FFFFFF', fontFamily: "'Raleway', sans-serif" }}>
                                Canadian Pedagogy + CBSE Curriculum
                            </h4>

                            <div
                                className="inline-flex items-center gap-6 px-10 py-5 rounded-full mb-10 bg-white/10 backdrop-blur-md border border-white/30"
                            >
                                <span className="text-xl font-black" style={{ color: '#FFFFFF' }}>Canadian Pedagogy</span>
                                <span className="text-3xl font-light" style={{ color: 'rgba(255,255,255,0.7)' }}>|</span>
                                <span className="text-xl font-black" style={{ color: '#FFFFFF' }}>CBSE Curriculum</span>
                            </div>

                            <p className="text-xl leading-relaxed mb-10" style={{ fontFamily: '"Lato", Arial, Helvetica, sans-serif', color: '#FFFFFF' }}>
                                At Mapleford International School, learning is shaped by a powerful collaboration with <span className="font-black">Maple Bear Global Schools, Canada</span>, a world leader in bilingual, inquiry-based education operating across 35+ countries and 450+ schools. Through this framework, our students benefit from the proven strengths of the Canadian education system, consistently ranked among the world’s best, while staying firmly aligned to India’s robust CBSE curriculum.
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
            <section className="py-24 bg-white" id="continuum">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2
                                className="text-[44px] lg:text-[56px] font-black mb-8 leading-tight text-[#1A1A1A]"
                                style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif" }}
                            >
                                The Continuum of Learning
                            </h2>
                            <p className="max-w-4xl mx-auto text-[#4F4F4F]" style={{ lineHeight: '1.8', fontFamily: '"Lato", Arial, Helvetica, sans-serif', fontSize: '13px' }}>
                                Every stage of learning is a critical milestone in a child’s developmental journey. Our curriculum is designed as a continuous and coherent pathway, where knowledge, skills, and values are systematically strengthened year after year.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                id: 'pre-school',
                                stage: 'Pre-School',
                                grades: 'Nursery - UKG',
                                description: 'Play-based early learning that builds curiosity, confidence, and strong foundations.',
                                image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=800&fit=crop',
                                step: '01'
                            },
                            {
                                id: 'elementary',
                                stage: 'Elementary',
                                grades: 'Grade 1 - 5',
                                description: 'Concept-driven learning that blends CBSE rigour with Canadian teaching practices.',
                                image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=800&fit=crop',
                                step: '02'
                            },
                            {
                                id: 'middle-school',
                                stage: 'Middle School',
                                grades: 'Grade 6 - 8',
                                description: 'Deeper subject learning with a focus on thinking, application, and collaboration.',
                                image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=800&fit=crop',
                                step: '03'
                            },
                            {
                                id: 'high-school',
                                stage: 'High School',
                                grades: 'Grade 9 - 10',
                                description: "A CBSE-aligned programme that prepares students for academic success and future pathways.",
                                image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=800&fit=crop',
                                step: '04'
                            }
                        ].map((stage, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col h-[520px] hover:shadow-[0_30px_80px_rgba(208,48,43,0.12)] transition-all duration-700 border border-gray-100 relative"
                            >
                                <div className="h-[42%] overflow-hidden relative">
                                    <img
                                        src={stage.image}
                                        alt={`${stage.stage}`}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                    <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                                        <span className="text-[#d0302b] font-black text-sm">{stage.step}</span>
                                    </div>
                                </div>
                                <div className="h-[58%] p-8 text-center flex flex-col justify-between items-center bg-white relative">
                                    <div className="space-y-4">
                                        <h3
                                            className="font-bold"
                                            style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif", color: '#1A1A1A', fontSize: 'clamp(24px, 3vw, 31px)' }}
                                        >
                                            {stage.stage}
                                        </h3>
                                        <div className="inline-block px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100">
                                            <p className="font-bold text-[11px] tracking-[0.15em] uppercase text-[#d0302b]">
                                                {stage.grades}
                                            </p>
                                        </div>
                                        <p className="text-[#666666] leading-relaxed px-2 font-medium" style={{ fontFamily: '"Lato", Arial, Helvetica, sans-serif', fontSize: '13px' }}>
                                            {stage.description}
                                        </p>
                                    </div>
                                    <div className="pt-6 w-full">
                                        <Button
                                            href={`/curriculum#${stage.id}`}
                                            variant="outline"
                                            size="md"
                                            className="w-full rounded-2xl font-black transition-all duration-500 py-3 group-hover:bg-[#d0302b] group-hover:text-white group-hover:border-[#d0302b]"
                                        >
                                            Explore Stage
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
                        {/* Left Column: Circular STEAM Flow Animation */}
                        <div className="relative w-full h-[680px] flex items-center justify-center pt-8">
                            {/* Central STEAM Hub with Enhanced Pulse Effect and Letter Highlighting */}
                            <motion.div
                                className="absolute z-50 w-36 h-36 rounded-full bg-gradient-to-br from-white to-gray-50 flex flex-col items-center justify-center shadow-[0_0_80px_rgba(255,255,255,0.4)] border-[6px] border-white"
                                animate={{
                                    boxShadow: [
                                        "0 0 40px rgba(255,255,255,0.3)",
                                        "0 0 100px rgba(255,255,255,0.5)",
                                        "0 0 40px rgba(255,255,255,0.3)"
                                    ]
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="flex items-center gap-0.5" style={{ fontFamily: "'Raleway', sans-serif" }}>
                                    {['S', 'T', 'E', 'A', 'M'].map((letter, idx) => (
                                        <motion.span
                                            key={letter}
                                            className="text-3xl font-black tracking-tight"
                                            animate={{
                                                color: steamIndex === idx ? '#FFFFFF' : '#d0302b',
                                                scale: steamIndex === idx ? 1.15 : 1,
                                                textShadow: steamIndex === idx
                                                    ? '0 0 20px rgba(208, 48, 43, 0.8), 0 0 40px rgba(208, 48, 43, 0.6)'
                                                    : '0 0 0px rgba(208, 48, 43, 0)'
                                            }}
                                            transition={{ duration: 0.3 }}
                                            style={{
                                                backgroundColor: steamIndex === idx ? '#d0302b' : 'transparent',
                                                padding: steamIndex === idx ? '2px 4px' : '0',
                                                borderRadius: steamIndex === idx ? '4px' : '0',
                                            }}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </div>
                                <div className="w-10 h-0.5 bg-gradient-to-r from-transparent via-[#d0302b]/20 to-transparent mt-1.5 rounded-full"></div>
                            </motion.div>

                            {/* Circular Steps Container */}
                            <div className="relative w-[580px] h-[580px] flex items-center justify-center">
                                {[
                                    { title: 'Science', query: 'Discovery', icon: '🔬', color: '#FF5F5A', darkColor: '#D94F4A', num: '01' },
                                    { title: 'Technology', query: 'Innovation', icon: '💻', color: '#F73B35', darkColor: '#C73028', num: '02' },
                                    { title: 'Engineering', query: 'Design', icon: '⚙️', color: '#D0302B', darkColor: '#A02621', num: '03' },
                                    { title: 'Arts', query: 'Purpose', icon: '🎨', color: '#A32622', darkColor: '#7A1D19', num: '04' },
                                    { title: 'Mathematics', query: 'Vision', icon: '📐', color: '#761C18', darkColor: '#5A1512', num: '05' }
                                ].map((item, idx) => {
                                    const total = 5;
                                    const rotation = idx * (360 / total);
                                    const isActive = steamIndex === idx;

                                    return (
                                        <motion.div
                                            key={idx}
                                            className="absolute w-full h-full flex items-center justify-center pointer-events-none"
                                            style={{ rotate: rotation }}
                                        >
                                            {/* Arrow Segment Shape Container */}
                                            <motion.div
                                                className="relative w-[220px] h-[145px] flex flex-col items-center justify-center pointer-events-auto cursor-pointer group"
                                                animate={{
                                                    y: isActive ? -200 : -190,
                                                    scale: isActive ? 1.08 : 1,
                                                }}
                                                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                                                onClick={() => setSteamIndex(idx)}
                                            >
                                                {/* Glow effect for active state - behind */}
                                                {isActive && (
                                                    <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 0.5 }}
                                                        className="absolute inset-0 blur-3xl -z-10"
                                                        style={{ backgroundColor: item.color }}
                                                    />
                                                )}

                                                {/* The "Arrowhead" Box with gradient and refined clip-path */}
                                                <div
                                                    className="absolute inset-0 shadow-2xl transition-all duration-500 group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.5)]"
                                                    style={{
                                                        background: `linear-gradient(145deg, ${item.color} 0%, ${item.darkColor} 100%)`,
                                                        clipPath: 'polygon(8% 0%, 82% 0%, 100% 50%, 82% 100%, 8% 100%, 22% 50%)',
                                                        filter: isActive ? 'brightness(1.25) saturate(1.15)' : 'brightness(1)',
                                                        boxShadow: isActive
                                                            ? `0 25px 60px ${item.color}50, 0 0 40px ${item.color}40 inset`
                                                            : '0 12px 35px rgba(0,0,0,0.35)'
                                                    }}
                                                />

                                                {/* Subtle overlay for depth */}
                                                <div
                                                    className="absolute inset-0 opacity-15 transition-opacity duration-500 group-hover:opacity-25"
                                                    style={{
                                                        clipPath: 'polygon(8% 0%, 82% 0%, 100% 50%, 82% 100%, 8% 100%, 22% 50%)',
                                                        background: 'linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(0,0,0,0.25) 100%)'
                                                    }}
                                                />

                                                {/* Content inside segment */}
                                                <motion.div
                                                    className="relative z-10 text-center flex flex-col items-center justify-center w-full px-5 py-3"
                                                    animate={{ rotate: -rotation }} // Keep text upright
                                                >
                                                    <div className="flex items-center justify-center w-full mb-2">
                                                        <span className="text-[8px] font-black tracking-[0.15em] opacity-70" style={{ color: '#FFFFFF' }}>{item.num}</span>
                                                    </div>
                                                    <h4 className="text-[10px] font-black uppercase tracking-[0.12em] mb-1 drop-shadow-[0_3px_6px_rgba(0,0,0,0.4)] leading-tight" style={{ color: '#FFFFFF' }}>{item.title}</h4>
                                                    <p className="text-[8px] font-semibold uppercase tracking-[0.15em] opacity-90" style={{ color: '#FFFFFF' }}>{item.query}</p>
                                                </motion.div>
                                            </motion.div>
                                        </motion.div>
                                    );
                                })}

                                {/* Background concentric rings for depth */}
                                <div className="absolute w-[360px] h-[360px] rounded-full border border-white/5"></div>
                                <motion.div
                                    className="absolute w-[380px] h-[380px] rounded-full border-2 border-dashed border-white/8"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                                />
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
                                <h2 className="text-[32px] lg:text-[44px] font-black mb-6 leading-tight" style={{ color: '#FFFFFF', fontFamily: "'Raleway', sans-serif" }}>
                                    Where Logic Meets <br /><span className="text-white">Imagination</span>
                                </h2>

                                <div className="space-y-6 text-base leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>
                                    <p className="border-l-4 border-white pl-6 py-1 font-bold" style={{ color: '#FFFFFF' }}>
                                        At Mapleford International School, STEAM education blends Science, Technology, Engineering, Arts, and Mathematics to cultivate learners who can think critically, design creatively, and innovate purposefully.
                                    </p>
                                    <p style={{ color: '#FFFFFF' }}>
                                        Our classrooms are spaces of exploration, where scientific curiosity merges with artistic creativity, and technology becomes a canvas for expression.
                                    </p>
                                    <p style={{ color: '#FFFFFF' }}>
                                        Students engage in hands-on design projects, robotics, visual arts, coding, and creative problem-solving, learning to see challenges from multiple perspectives.
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
                                className="text-[44px] lg:text-[56px] font-black mb-8 leading-tight"
                                style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif", color: '#1A1A1A' }}
                            >
                                <span style={{ color: '#1A1A1A' }}>Campus</span>
                            </h2>
                            <h3 className="text-3xl font-bold mb-6 text-[#d0302b]" style={{ fontFamily: "'Raleway', sans-serif" }}>
                                A Space That Opens Horizons
                            </h3>
                            <p className="text-lg mb-8" style={{ color: '#4F4F4F', lineHeight: '1.8', fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                                Set across a sprawling 4-acre campus, Mapleford International School offers students the freedom to explore, learn, and thrive in an open, thoughtfully designed environment. Lush green landscapes, modern classrooms, innovation labs, sports arenas, and creative spaces come together to create an environment that supports academic focus, physical vitality, and overall well-being.
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
                                className="text-[44px] lg:text-[68px] font-black mb-8 leading-tight"
                                style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif", color: '#FFFFFF' }}
                            >
                                Sports <span className="text-white">Arena</span>
                            </h2>
                            <p
                                className="text-3xl font-bold mb-2 text-white"
                                style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif" }}
                            >
                                Chasing Goals! Soaring Spirits High!
                            </p>
                            <p className="text-xl font-medium mb-8 opacity-90" style={{ color: '#FFFFFF' }}>
                                Where passion charges the field, and every sport, a lesson in excellence
                            </p>
                            <p className="mb-8 text-xl leading-relaxed" style={{ fontFamily: '"Lato", Arial, Helvetica, sans-serif', color: 'rgba(255,255,255,1)' }}>
                                At Mapleford International School, growth isn’t limited to books and classrooms; it thrives on the field, on the court, and in every challenge that builds spirit and strength. Every match played, every goal scored, and every serve perfected shapes not just an athlete, but a resilient, disciplined, and determined individual. With a vibrant sporting culture at its heart, Mapleford nurtures young talent through Football, Badminton, Tennis, and Athletics, encouraging every student to discover the joy of play and the power of perseverance. Our state-of-the-art infrastructure, from modern sports arenas to safe, well-equipped training zones, forms the backbone of an environment that fosters confidence, team spirit, and leadership.
                            </p>

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
                                className="text-[44px] lg:text-[68px] font-black mb-8 leading-tight uppercase tracking-tighter"
                                style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif" }}
                            >
                                Start Your Child&apos;s <span style={{ color: '#1A1A1A' }}>Journey</span>
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
