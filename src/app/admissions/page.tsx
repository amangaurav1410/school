'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import AdmissionModal from '../../components/AdmissionModal';


export default function Admissions() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <div className="pt-20 overflow-hidden">
        {/* Hero Section - Maximum Impact */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Animated Background Shapes */}
          <div className="absolute inset-0 z-0">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                x: [0, 50, 0]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#D6B25E]/10 to-[#FFA500]/5 rounded-full blur-3xl opacity-70"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [0, -90, 0],
                x: [0, -50, 0]
              }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-1/4 -left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-[#d0302b]/5 to-transparent rounded-full blur-3xl opacity-70"
            />
          </div>

          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstripe-light.png')] opacity-[0.05]"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              <span className="inline-block px-8 py-2 rounded-full bg-[#d0302b]/10 text-[#d0302b] font-black text-sm tracking-[0.3em] uppercase mb-4 shadow-sm border border-[#d0302b]/10">
                Join Our Legacy
              </span>
              <h1
                className="text-6xl md:text-8xl lg:text-[10rem] font-black mb-8 leading-[0.85] tracking-tighter text-[#1A1A1A]"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                Admissions <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] via-[#FFA500] to-[#d0302b] drop-shadow-sm">
                  2025-26
                </span>
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-[#1A1A1A] max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Begin your journey at <span className="text-[#d0302b]">Mapleford.</span> Discover a world where potential is celebrated.
              </p>

              <div className="flex flex-wrap gap-6 justify-center pt-8">
                <Button onClick={() => setIsModalOpen(true)} variant="primary" size="lg">Apply Now</Button>
                <Button href="/campus" variant="outline" size="lg">Tour Campus</Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Admission Process - Vertical Step High-impact */}
        <section className="py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24 space-y-6">
              <span className="text-[#d0302b] font-black uppercase tracking-[0.4em] text-xs block">The Road to Mapleford</span>
              <h2 className="text-5xl lg:text-7xl font-black text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>
                Admission <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Process</span>
              </h2>
              <p className="text-2xl text-gray-500 font-light max-w-3xl mx-auto">A transparent and welcoming journey designed for a smooth transition.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Enquiry & Visit", desc: "Fill the enquiry form or visit our campus to experience the environment firsthand.", color: "bg-blue-50/50" },
                { step: "02", title: "Interaction", desc: "A friendly interaction with the student and parents to align with our philosophy.", color: "bg-purple-50/50" },
                { step: "03", title: "Documentation", desc: "Submission of required documents including birth certificate and previous records.", color: "bg-orange-50/50" },
                { step: "04", title: "Final Admission", desc: "Complete fee formalities and orientation to welcome the student into the family.", color: "bg-green-50/50" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className={`${item.color} p-12 rounded-[3rem] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden`}
                >
                  <div className="text-7xl font-black text-[#d0302b] opacity-10 mb-8 absolute -right-4 -top-4 group-hover:scale-150 transition-transform duration-700">{item.step}</div>
                  <div className="relative z-10">
                    <div className="text-4xl font-black text-[#d0302b] mb-6">{item.step}</div>
                    <h3 className="text-2xl font-black mb-4 text-[#1A1A1A]">{item.title}</h3>
                    <p className="text-gray-500 text-lg leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div >

      <AdmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div >

  );
}