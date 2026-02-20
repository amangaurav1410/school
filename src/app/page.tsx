'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import AdmissionModal from '../components/AdmissionModal';

const testimonials = [
    { name: "Arjun Sharma", role: "Parent (Grade 4)", content: "The blend of Canadian pedagogy and CBSE in Mapleford has transformed my son's approach to learning. He's more curious and confident than ever before.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
    { name: "Dr. Priya Reddy", role: "Parent (Nursery)", content: "Choosing a preschool was stressful until we visited Mapleford. The warmth of the teachers and the play-based learning environment is exactly what our daughter needed.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
    { name: "Srinivas Rao", role: "Parent (Grade 8)", content: "The focus on STEAM and sports alongside academics at Mapleford is exceptional. My daughter loves the robotics lab as much as the football field.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" },
    { name: "Kavitha Menon", role: "Parent (Grade 2)", content: "Mapleford's teachers genuinely care about each child. The personalised attention my son receives has boosted his confidence tremendously.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" },
    { name: "Rajesh Verma", role: "Parent (Grade 6)", content: "The campus is stunning and the facilities are world-class. My child looks forward to school every single day—that says everything.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop" },
    { name: "Ananya Krishnan", role: "Parent (Pre-School)", content: "From the very first day, Mapleford felt like a second home. The nurturing environment gave our daughter the perfect foundation for life.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop" },
    { name: "Mohammed Irfan", role: "Parent (Grade 10)", content: "The holistic approach here is unmatched. My son excels academically and has also found his passion for music through the school's arts programme.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop" },
    { name: "Sunitha Reddy", role: "Parent (Grade 5)", content: "As a parent who values both tradition and innovation, Mapleford strikes the perfect balance. The CBSE rigour with a modern Canadian philosophy is exactly right.", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop" },
    { name: "Vikram Nair", role: "Parent (Grade 7)", content: "The sports infrastructure and coaching at Mapleford are at par with the best schools in the country. My son has grown into a disciplined, motivated young man.", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop" },
];

export default function Home() {
    const [showFrenchMotto, setShowFrenchMotto] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [steamIndex, setSteamIndex] = useState(0);
    const [testimonialIndex, setTestimonialIndex] = useState(0);

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

    // Auto-advance testimonial carousel
    useEffect(() => {
        const timer = setInterval(() => setTestimonialIndex(c => (c + 1) % testimonials.length), 4500);
        return () => clearInterval(timer);
    }, []);

    const prevTestimonial = () => setTestimonialIndex(c => (c - 1 + testimonials.length) % testimonials.length);
    const nextTestimonial = () => setTestimonialIndex(c => (c + 1) % testimonials.length);

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
            <section className="py-20 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center gap-12 text-center">
                        {/* Unified Shadow Box containing Title, Description, and Images */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8 }}
                            className="w-full max-w-6xl mx-auto bg-white rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.08)] p-8 md:p-16 border border-gray-50 flex flex-col items-center"
                        >
                            {/* Title and Description */}
                            <div className="max-w-4xl mx-auto mb-16">
                                <h2
                                    className="text-[44px] lg:text-[56px] font-black mb-8 leading-tight"
                                    style={{
                                        fontFamily: "'Raleway', Arial, Helvetica, sans-serif",
                                        color: '#000000'
                                    }}
                                >
                                    The Mapleford Edge
                                </h2>
                                <div className="space-y-6 text-lg" style={{ color: '#000000', lineHeight: '1.8', fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                                    <p className="text-xl leading-relaxed">
                                        Rooted in the proud three-decade legacy of Megacity High School, representing a purposeful evolution in education, Mapleford International School carries forward time-tested values while redefining learning in a rapidly changing world.
                                    </p>
                                    <p className="text-xl leading-relaxed">
                                        Anchored in the strength of the CBSE curriculum and enriched through global learning pathways through our academic collaboration with Maple Bear Canadian School, students gain international perspectives through contemporary teaching approaches and the confidence to navigate global opportunities.
                                    </p>
                                </div>
                            </div>

                            {/* 3 Images Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center w-full">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center justify-center h-[180px]"
                                >
                                    <img
                                        src="/images/Screenshot 2026-02-09 at 2.44.22 PM.png"
                                        alt="Evolution 1"
                                        className="max-h-full w-auto object-contain"
                                    />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center justify-center h-[180px]"
                                >
                                    <img
                                        src="/images/Screenshot 2026-02-09 at 2.44.26 PM.png"
                                        alt="Evolution 2"
                                        className="max-h-full w-auto object-contain"
                                    />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center justify-center h-[180px]"
                                >
                                    <img
                                        src="/images/Screenshot 2026-02-09 at 2.44.30 PM.png"
                                        alt="Evolution 3"
                                        className="max-h-full w-auto object-contain"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Button outside the box */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Button href="/about" variant="primary" size="lg" className="px-10 py-5 text-base font-bold">
                                Read More about Mapleford Edge
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* Curriculum Section */}
            <section className="py-20 bg-[#d0302b] relative overflow-hidden">
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
                                className="inline-flex items-center gap-6 px-10 py-5 rounded-full mb-10 bg-gradient-to-r from-[#D6B25E] to-[#C5A04D] shadow-xl border border-[#B38D3C]"
                            >
                                <span className="text-xl font-black" style={{ color: '#FFFFFF' }}>Canadian Pedagogy</span>
                                <span className="text-3xl font-light opacity-50" style={{ color: '#FFFFFF' }}>|</span>
                                <span className="text-xl font-black" style={{ color: '#FFFFFF' }}>CBSE Curriculum</span>
                            </div>

                            <p className="text-xl leading-relaxed mb-10" style={{ fontFamily: '"Lato", Arial, Helvetica, sans-serif', color: '#FFFFFF' }}>
                                At Mapleford International School, learning is shaped by a powerful collaboration with <span className="font-black">Maple Bear Global Schools, Canada</span>, a world leader in bilingual, inquiry-based education operating across 35+ countries and 450+ schools. Through this framework, our students benefit from the proven strengths of the Canadian education system, consistently ranked among the world’s best, while staying firmly aligned to India’s robust CBSE curriculum.
                            </p>

                            <div className="flex justify-start">
                                <Button href="/curriculum" variant="secondary" size="lg">
                                    Read More about Our Curriculum
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
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2
                                className="text-[44px] lg:text-[56px] font-black mb-8 leading-tight text-[#000000]"
                                style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif" }}
                            >
                                The Continuum of Learning
                            </h2>
                            <p className="max-w-4xl mx-auto text-[#000000]" style={{ lineHeight: '1.8', fontFamily: '"Lato", Arial, Helvetica, sans-serif', fontSize: '16px' }}>
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
                                image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=800&fit=crop'
                            },
                            {
                                id: 'elementary',
                                stage: 'Elementary',
                                grades: 'Grade 1 - 5',
                                description: 'Concept-driven learning that blends CBSE rigour with Canadian teaching practices.',
                                image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=800&fit=crop'
                            },
                            {
                                id: 'middle-school',
                                stage: 'Middle School',
                                grades: 'Grade 6 - 8',
                                description: 'Deeper subject learning with a focus on thinking, application, and collaboration.',
                                image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=800&fit=crop'
                            },
                            {
                                id: 'high-school',
                                stage: 'High School',
                                grades: 'Grade 9 - 10',
                                description: "A CBSE-aligned programme that prepares students for academic success and future pathways.",
                                image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=800&fit=crop'
                            }
                        ].map((stage, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -20,
                                    scale: 1.02,
                                    rotateX: 2,
                                    rotateY: -2,
                                    transition: { duration: 0.4, ease: "easeOut" }
                                }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group bg-white rounded-none overflow-hidden flex flex-col h-[520px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_45px_120px_rgba(0,0,0,0.18)] transition-all duration-500 relative z-10 hover:z-20 border-t border-gray-50"
                                style={{ perspective: "1000px" }}
                            >
                                <div className="h-[42%] overflow-hidden relative">
                                    <img
                                        src={stage.image}
                                        alt={`${stage.stage}`}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                                </div>
                                <div className="h-[58%] text-center flex flex-col justify-between items-center bg-white relative">
                                    <div className="space-y-4 p-8 pb-4">
                                        <h3
                                            className="font-bold"
                                            style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif", color: '#000000', fontSize: 'clamp(24px, 3vw, 31px)' }}
                                        >
                                            {stage.stage}
                                        </h3>
                                        <div className="inline-block px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100">
                                            <p className="font-bold text-[11px] tracking-[0.15em] uppercase text-[#d0302b]">
                                                {stage.grades}
                                            </p>
                                        </div>
                                        <p className="text-[#000000] leading-relaxed px-2 font-medium" style={{ fontFamily: '"Lato", Arial, Helvetica, sans-serif', fontSize: '13px' }}>
                                            {stage.description}
                                        </p>
                                    </div>
                                    <div className="w-full">
                                        <Button
                                            href={`/curriculum#${stage.id}`}
                                            variant="primary"
                                            size="md"
                                            className="w-full !rounded-none font-black transition-all duration-500 py-4 !shadow-none !bg-[#d0302b] !bg-none relative flex justify-end items-center pr-10 group"
                                        >
                                            <div className="absolute -top-2 right-12 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-[#d0302b]" />
                                            <span className="tracking-widest uppercase text-sm">Read More</span>
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STEAM Section */}
            <section className="pt-4 pb-12 bg-[#d0302b] relative overflow-hidden">
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

                            {/* Circular Steps Container - static (no orbit rotation) */}
                            <div className="relative w-[580px] h-[580px] flex items-center justify-center">
                                {[
                                    {
                                        title: 'Science', color: '#FFD700', darkColor: '#B8860B',
                                        icon: (
                                            <svg width="70" height="70" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="17" cy="17" r="3.5" fill="white" fillOpacity="0.95" />
                                                <ellipse cx="17" cy="17" rx="13" ry="5" stroke="white" strokeOpacity="0.7" strokeWidth="1.2" fill="none" />
                                                <ellipse cx="17" cy="17" rx="13" ry="5" stroke="white" strokeOpacity="0.7" strokeWidth="1.2" fill="none" transform="rotate(60 17 17)" />
                                                <ellipse cx="17" cy="17" rx="13" ry="5" stroke="white" strokeOpacity="0.7" strokeWidth="1.2" fill="none" transform="rotate(-60 17 17)" />
                                                <motion.circle cx="4" cy="17" r="2" fill="white"
                                                    animate={{ rotate: [0, 360] }} style={{ originX: '17px', originY: '17px' }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} />
                                            </svg>
                                        )
                                    },
                                    {
                                        title: 'Technology', color: '#D4AF37', darkColor: '#996515',
                                        icon: (
                                            <svg width="70" height="70" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="10" y="10" width="14" height="14" rx="2" stroke="white" strokeWidth="1.4" fill="white" fillOpacity="0.12" />
                                                <line x1="14" y1="10" x2="14" y2="24" stroke="white" strokeOpacity="0.4" strokeWidth="0.8" />
                                                <line x1="20" y1="10" x2="20" y2="24" stroke="white" strokeOpacity="0.4" strokeWidth="0.8" />
                                                <line x1="10" y1="14" x2="24" y2="14" stroke="white" strokeOpacity="0.4" strokeWidth="0.8" />
                                                <line x1="10" y1="20" x2="24" y2="20" stroke="white" strokeOpacity="0.4" strokeWidth="0.8" />
                                                <line x1="14" y1="6" x2="14" y2="10" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                                                <line x1="20" y1="6" x2="20" y2="10" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                                                <line x1="14" y1="24" x2="14" y2="28" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                                                <line x1="20" y1="24" x2="20" y2="28" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                                                <line x1="6" y1="14" x2="10" y2="14" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                                                <line x1="6" y1="20" x2="10" y2="20" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                                                <line x1="24" y1="14" x2="28" y2="14" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                                                <line x1="24" y1="20" x2="28" y2="20" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                                                <motion.circle cx="17" cy="17" r="2" fill="white"
                                                    animate={{ opacity: [1, 0.2, 1], scale: [1, 1.4, 1] }}
                                                    transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }} />
                                            </svg>
                                        )
                                    },
                                    {
                                        title: 'Engineering', color: '#C5B358', darkColor: '#85754D',
                                        icon: (
                                            <motion.svg width="70" height="70" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                animate={{ rotate: [0, 360] }}
                                                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}>
                                                <path d="M17 3 L18.5 7 L22.5 5.5 L21.5 9.5 L25.5 10.5 L23 14 L27 16 L23 18 L25.5 21.5 L21.5 22.5 L22.5 26.5 L18.5 25 L17 29 L15.5 25 L11.5 26.5 L12.5 22.5 L8.5 21.5 L11 18 L7 16 L11 14 L8.5 10.5 L12.5 9.5 L11.5 5.5 L15.5 7 Z"
                                                    stroke="white" strokeWidth="1.2" fill="white" fillOpacity="0.18" strokeLinejoin="round" />
                                                <circle cx="17" cy="16" r="4.5" fill="white" fillOpacity="0.9" />
                                                <circle cx="17" cy="16" r="2" fill="#C5B358" />
                                            </motion.svg>
                                        )
                                    },
                                    {
                                        title: 'Arts', color: '#EAC117', darkColor: '#AF9B1E',
                                        icon: (
                                            <svg width="70" height="70" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="15.5" y="4" width="3" height="16" rx="1.5" fill="white" fillOpacity="0.85" />
                                                <rect x="14.5" y="18" width="5" height="3" rx="0.5" fill="white" fillOpacity="0.5" />
                                                <path d="M14 21 Q17 26 14 29 Q17 27 20 29 Q17 26 20 21 Z" fill="white" fillOpacity="0.9" />
                                                <motion.ellipse cx="17" cy="30" rx="1.8" ry="2.5" fill="white" fillOpacity="0.8"
                                                    animate={{ cy: [29, 31, 29], ry: [2, 2.8, 2], opacity: [0.8, 0.3, 0.8] }}
                                                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} />
                                                <motion.circle cx="6" cy="20" r="2" fill="white" fillOpacity="0.7"
                                                    animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }} />
                                                <motion.circle cx="6" cy="14" r="2" fill="white" fillOpacity="0.5"
                                                    animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} />
                                                <motion.circle cx="6" cy="8" r="2" fill="white" fillOpacity="0.35"
                                                    animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 1 }} />
                                            </svg>
                                        )
                                    },
                                    {
                                        title: 'Mathematics', color: '#DAA520', darkColor: '#8B4513',
                                        icon: (
                                            <svg width="70" height="70" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <text x="6" y="20" fontFamily="serif" fontSize="20" fontWeight="bold" fill="white" fillOpacity="0.95">Σ</text>
                                                <text x="21" y="15" fontFamily="serif" fontSize="11" fontWeight="600" fill="white" fillOpacity="0.7">π</text>
                                                <motion.path
                                                    d="M4 27 Q8 23 12 27 Q16 31 20 27 Q24 23 28 27 Q30 29 32 27"
                                                    stroke="white" strokeWidth="1.2" strokeOpacity="0.7" fill="none" strokeLinecap="round"
                                                    animate={{
                                                        d: [
                                                            "M4 27 Q8 23 12 27 Q16 31 20 27 Q24 23 28 27 Q30 29 32 27",
                                                            "M4 27 Q8 31 12 27 Q16 23 20 27 Q24 31 28 27 Q30 25 32 27",
                                                            "M4 27 Q8 23 12 27 Q16 31 20 27 Q24 23 28 27 Q30 29 32 27",
                                                        ]
                                                    }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
                                            </svg>
                                        )
                                    },
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
                                            <motion.div
                                                className="relative w-[220px] h-[145px] flex flex-col items-center justify-center pointer-events-auto cursor-pointer group"
                                                animate={{
                                                    y: isActive ? -200 : -190,
                                                    scale: isActive ? 1.1 : 1,
                                                }}
                                                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                                                onClick={() => setSteamIndex(idx)}
                                            >
                                                {isActive && (
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 0.55, scale: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        transition={{ duration: 0.4 }}
                                                        className="absolute inset-0 blur-3xl -z-10"
                                                        style={{ backgroundColor: item.color }}
                                                    />
                                                )}

                                                <div
                                                    className="absolute inset-0 shadow-2xl transition-all duration-500 group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.5)]"
                                                    style={{
                                                        background: `linear-gradient(145deg, ${item.color} 0%, ${item.darkColor} 100%)`,
                                                        clipPath: 'polygon(8% 0%, 82% 0%, 100% 50%, 82% 100%, 8% 100%, 22% 50%)',
                                                        filter: isActive ? 'brightness(1.3) saturate(1.2)' : 'brightness(1)',
                                                        boxShadow: isActive
                                                            ? `0 25px 60px ${item.color}55, 0 0 40px ${item.color}45 inset`
                                                            : '0 12px 35px rgba(0,0,0,0.35)',
                                                        transition: 'filter 0.4s, box-shadow 0.4s',
                                                    }}
                                                />

                                                <div
                                                    className="absolute inset-0 opacity-15 transition-opacity duration-500 group-hover:opacity-25"
                                                    style={{
                                                        clipPath: 'polygon(8% 0%, 82% 0%, 100% 50%, 82% 100%, 8% 100%, 22% 50%)',
                                                        background: 'linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(0,0,0,0.25) 100%)'
                                                    }}
                                                />

                                                <motion.div
                                                    className="relative z-10 text-center flex flex-col items-center justify-center w-full px-4 py-1 gap-0.5"
                                                    animate={{ rotate: -rotation }}
                                                >
                                                    <div className="flex items-center justify-center" style={{ height: '72px' }}>
                                                        {item.icon}
                                                    </div>
                                                    <h4
                                                        className="font-black uppercase leading-tight"
                                                        style={{ color: '#FFFFFF', fontSize: '14px', letterSpacing: '0.12em', textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}
                                                    >{item.title}</h4>
                                                </motion.div>
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
            <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
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
                                style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif", color: '#000000' }}
                            >
                                <span style={{ color: '#000000' }}>Campus</span>
                            </h2>
                            <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Raleway', sans-serif", color: '#000000' }}>
                                A Space That Opens Horizons
                            </h3>
                            <p className="text-lg mb-8" style={{ color: '#000000', lineHeight: '1.8', fontFamily: '"Lato", Arial, Helvetica, sans-serif' }}>
                                Set across a sprawling 4-acre campus, Mapleford International School offers students the freedom to explore, learn, and thrive in an open, thoughtfully designed environment. Lush green landscapes, modern classrooms, innovation labs, sports arenas, and creative spaces come together to create an environment that supports academic focus, physical vitality, and overall well-being.
                            </p>
                            <Button href="/campus" variant="primary" size="lg">
                                Read more about Our Campus
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
            <section className="py-20 bg-[#d0302b] relative overflow-hidden">
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

                            <Button href="/campus" variant="secondary" size="lg">
                                Read more about Sports Facilities
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>




            {/* Testimonials Section */}
            <section className="py-20 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Heading */}
                    <div className="text-center mb-14">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2
                                className="text-[44px] lg:text-[56px] font-black mb-4 leading-tight"
                                style={{ fontFamily: "'Raleway', Arial, Helvetica, sans-serif", color: '#000000' }}
                            >
                                Words from Our Community
                            </h2>
                            <p className="max-w-2xl mx-auto text-lg" style={{ fontFamily: '"Lato", sans-serif', color: '#000000' }}>
                                Discover why families trust Mapleford International school for their child&apos;s educational journey.
                            </p>
                        </motion.div>
                    </div>

                    {/* Carousel */}
                    {(() => {
                        const current = testimonialIndex; const t = testimonials[current]; return (
                            <div className="relative">
                                {/* Card */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={current}
                                        initial={{ opacity: 0, x: 60 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -60 }}
                                        transition={{ duration: 0.45, ease: 'easeInOut' }}
                                        className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 px-10 py-12 max-w-3xl mx-auto text-center"
                                    >
                                        {/* Quote icon */}
                                        <div className="flex justify-center mb-6">
                                            <svg width="44" height="44" viewBox="0 0 24 24" fill="#d0302b">
                                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9125 16 16.0171 16H19.0171C19.5694 16 20.0171 15.5523 20.0171 15V9C20.0171 8.44772 19.5694 8 19.0171 8H15.0171C14.4648 8 14.0171 8.44772 14.0171 9V12C14.0171 12.5523 13.5694 13 13.0171 13H11.0171L11.0171 4H21.0171V15C21.0171 17.7614 18.7785 20 16.0171 20L14.017 21ZM3.01711 21L3.01711 18C3.01711 16.8954 3.91255 16 5.01711 16H8.01711C8.56939 16 9.01711 15.5523 9.01711 15V9C9.01711 8.44772 8.56939 8 8.01711 8H4.01711C3.46482 8 3.01711 8.44772 3.01711 9V12C3.01711 12.5523 2.56939 13 2.01711 13H0.0171094L0.0171094 4H10.0171V15C10.0171 17.7614 7.77853 20 5.01711 20L3.01711 21Z" />
                                            </svg>
                                        </div>

                                        {/* Content */}
                                        <p className="text-xl leading-relaxed mb-10 italic" style={{ fontFamily: '"Lato", sans-serif', color: '#000000' }}>
                                            &quot;{t.content}&quot;
                                        </p>

                                        {/* Avatar + Name */}
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#d0302b]/30">
                                                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-lg" style={{ fontFamily: "'Raleway', sans-serif", color: '#000000' }}>{t.name}</h4>
                                                <p className="text-sm font-semibold" style={{ color: '#000000' }}>{t.role}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Prev / Next Arrows */}
                                <button
                                    onClick={prevTestimonial}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-10 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-[#d0302b] hover:text-white transition-all duration-200"
                                    style={{ color: '#000000' }}
                                >
                                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </button>
                                <button
                                    onClick={nextTestimonial}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-10 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-[#d0302b] hover:text-white transition-all duration-200"
                                    style={{ color: '#000000' }}
                                >
                                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </button>

                                {/* Dot Indicators */}
                                <div className="flex justify-center gap-2 mt-8">
                                    {testimonials.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setTestimonialIndex(i)}
                                            className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2.5 bg-[#d0302b]' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'}`}
                                        />
                                    ))}
                                </div>

                                {/* Counter */}
                                <p className="text-center mt-4 text-sm font-semibold" style={{ color: '#000000' }}>
                                    {current + 1} / {testimonials.length}
                                </p>
                            </div>
                        );
                    })()}
                </div>
            </section>



            {/* Get in Touch CTA Section */}
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
                                    Explore Now
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
        </div >
    );
}
