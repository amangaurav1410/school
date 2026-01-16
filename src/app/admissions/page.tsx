'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

export default function Admissions() {
  const [formData, setFormData] = useState({
    parentName: '',
    contactNumber: '',
    email: '',
    childName: '',
    childDob: '',
    gradeApplying: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">

        {/* Hero Section */}
        <section className="relative py-32 lg:py-48 overflow-hidden bg-gradient-to-br from-[#FDF6E3] via-white to-[#8B1E1A]/5">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#D6B25E]/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#8B1E1A]/10 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-6 py-2 rounded-full bg-[#8B1E1A]/10 text-[#8B1E1A] font-bold text-sm tracking-wider uppercase mb-6">Join Our Legacy</span>
              <h1
                className="text-5xl lg:text-7xl font-black mb-6 leading-tight text-[#1A1A1A]"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                Begin Your Journey at <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B1E1A] to-[#D6B25E]">Mapleford</span>
              </h1>
              <p className="text-xl lg:text-2xl text-[#4F4F4F] mb-8 leading-relaxed italic" style={{ fontFamily: '"Lato", sans-serif' }}>
                "Discover a world of excellence where every child's potential is nurtured and celebrated."
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button href="#enquiry-form" variant="primary" size="md">Apply Now</Button>
                <Button href="/campus" variant="outline" size="md">Tour Campus</Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-5xl lg:text-6xl font-black mb-8 leading-tight text-[#1A1A1A]"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                Admission <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Process</span>
              </h2>
              <p className="text-xl text-[#4F4F4F] max-w-3xl mx-auto" style={{ fontFamily: '"Lato", sans-serif' }}>
                We believe in a transparent and welcoming admission journey designed to help you and your child smoothly integrate into the Mapleford family.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Enquiry & Visit", desc: "Fill the enquiry form or visit our campus to experience the environment firsthand.", icon: "📝" },
                { step: "02", title: "Interaction", desc: "A friendly interaction with the student and parents to align with school's philosophy.", icon: "💬" },
                { step: "03", title: "Documentation", desc: "Submission of required documents including birth certificate, TC, and previous records.", icon: "📄" },
                { step: "04", title: "Admission", desc: "Complete fee formalities and orientation to welcome the student into Mapleford.", icon: "🎓" }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[#8B1E1A]"
                >
                  <div className="text-6xl mb-4">{step.icon}</div>
                  <div className="text-5xl font-black text-[#D6B25E]/20 mb-4" style={{ fontFamily: '"Raleway", sans-serif' }}>{step.step}</div>
                  <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>{step.title}</h3>
                  <p className="text-[#4F4F4F] leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fee Structure Section */}
        <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-5xl lg:text-6xl font-black mb-8 leading-tight text-[#1A1A1A]"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                Fee <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Structure</span>
              </h2>
              <p className="text-xl text-[#4F4F4F] max-w-3xl mx-auto" style={{ fontFamily: '"Lato", sans-serif' }}>
                Transparent and inclusive fee structure designed to provide world-class education with exceptional value.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  grade: "Pre-School",
                  levels: "Nursery, Jr. KG, Sr. KG",
                  tuitionFee: "₹1,20,000",
                  admissionFee: "₹25,000",
                  features: [
                    "Play-based learning",
                    "Canadian pedagogy",
                    "Qualified staff",
                    "Nutritious meals"
                  ],
                  color: "from-[#E8F5E9] to-[#C8E6C9]"
                },
                {
                  grade: "Elementary",
                  levels: "Grades 1-5",
                  tuitionFee: "₹1,50,000",
                  admissionFee: "₹30,000",
                  features: [
                    "CBSE curriculum",
                    "STEAM labs",
                    "Sports facilities",
                    "Digital learning"
                  ],
                  color: "from-[#E3F2FD] to-[#BBDEFB]",
                  recommended: true
                },
                {
                  grade: "High School",
                  levels: "Grades 6-10",
                  tuitionFee: "₹1,80,000",
                  admissionFee: "₹35,000",
                  features: [
                    "Advanced curriculum",
                    "Career guidance",
                    "Leadership programs",
                    "Global exposure"
                  ],
                  color: "from-[#FFF3E0] to-[#FFE0B2]"
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300 ${plan.recommended ? 'ring-4 ring-[#8B1E1A]' : ''}`}
                >
                  {plan.recommended && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[#8B1E1A] to-[#D6B25E] text-white px-4 py-2 rounded-full text-sm font-bold">
                      Popular
                    </div>
                  )}
                  <div className={`bg-gradient-to-br ${plan.color} p-8`}>
                    <h3 className="text-3xl font-black mb-2 text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>{plan.grade}</h3>
                    <p className="text-[#8B1E1A] font-semibold mb-6">{plan.levels}</p>
                  </div>
                  <div className="p-8">
                    <div className="mb-6">
                      <div className="flex items-baseline mb-2">
                        <span className="text-4xl font-black text-[#1A1A1A]">{plan.tuitionFee}</span>
                        <span className="text-[#4F4F4F] ml-2">/year</span>
                      </div>
                      <p className="text-sm text-[#8B1E1A] font-semibold">+ Admission Fee: {plan.admissionFee} (One-time)</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-[#4F4F4F]">
                          <span className="w-2 h-2 bg-[#D6B25E] rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button href="#enquiry-form" variant="primary" size="md" className="w-full">
                      Apply Now
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Fees Info */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-[#D6B25E]/20">
              <h4 className="text-2xl font-bold mb-4 text-[#1A1A1A]">Additional Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#4F4F4F]">
                <div>
                  <p className="mb-2"><strong className="text-[#8B1E1A]">📚 Books & Materials:</strong> ₹8,000 - ₹12,000 per year</p>
                  <p className="mb-2"><strong className="text-[#8B1E1A]">🚌 Transport (Optional):</strong> ₹18,000 - ₹28,000 per year (based on distance)</p>
                  <p className="mb-2"><strong className="text-[#8B1E1A]">🍱 Meals (Optional):</strong> ₹15,000 per year</p>
                </div>
                <div>
                  <p className="mb-2"><strong className="text-[#8B1E1A]">👕 Uniform:</strong> ₹5,000 - ₹7,000 (one-time)</p>
                  <p className="mb-2"><strong className="text-[#8B1E1A]">🎨 Activity Fees:</strong> Included in tuition</p>
                  <p className="mb-2"><strong className="text-[#8B1E1A]">💳 Payment:</strong> Quarterly/Half-yearly/Annual options available</p>
                </div>
              </div>
              <p className="mt-6 text-sm italic text-[#4F4F4F] border-l-4 border-[#D6B25E] pl-4">
                * Fee structure is subject to annual revision. Sibling discounts and merit scholarships available. Contact our admissions office for more details.
              </p>
            </div>
          </div>
        </section>

        {/* Eligibility Guidelines */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-5xl lg:text-6xl font-black mb-8 leading-tight text-[#1A1A1A]"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                Eligibility <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Guidelines</span>
              </h2>
              <p className="text-xl text-[#4F4F4F] max-w-3xl mx-auto" style={{ fontFamily: '"Lato", sans-serif' }}>
                Helping you find the right level for your child's growth and maturity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { level: "Nursery", age: "3 Years", desc: "Developing basic motor skills and social comfort.", color: "bg-[#8B1E1A]", deadline: "March 31" },
                { level: "Jr. KG", age: "4 Years", desc: "Introduction to phonetics and creative play.", color: "bg-[#D6B25E]", deadline: "March 31" },
                { level: "Sr. KG", age: "5 Years", desc: "Preparing for formal schooling with structured learning.", color: "bg-[#1A1A1A]", deadline: "March 31" },
                { level: "Grade 1", age: "6 Years", desc: "Beginning elementary education with CBSE curriculum.", color: "bg-[#8B1E1A]", deadline: "March 31" },
                { level: "Grades 2-5", age: "7-11 Years", desc: "Advancing through elementary levels with holistic development.", color: "bg-[#D6B25E]", deadline: "March 31" },
                { level: "Grades 6-10", age: "12+ Years", desc: "High school education with board exam preparation.", color: "bg-[#1A1A1A]", deadline: "March 31" }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`w-12 h-12 ${card.color} rounded-2xl mb-6`}></div>
                  <h3 className="text-2xl font-bold mb-2 text-[#1A1A1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>{card.level}</h3>
                  <p className="text-[#8B1E1A] font-bold mb-4">Age: {card.age} (as of {card.deadline})</p>
                  <p className="text-[#4F4F4F] leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Document Checklist */}
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
                  className="text-5xl lg:text-6xl font-black mb-8 leading-tight text-[#1A1A1A]"
                  style={{ fontFamily: '"Raleway", sans-serif' }}
                >
                  Documents <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Required</span>
                </h2>
                <p className="text-xl text-[#4F4F4F] mb-8 leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>
                  Please ensure you have the following documents ready for a smooth admission process.
                </p>
                <div className="space-y-4">
                  {[
                    "Birth Certificate (Original & Photocopy)",
                    "Transfer Certificate (TC) from previous school",
                    "Previous Year's Report Card / Marks Sheet",
                    "Passport size photographs (4 Student + 2 Parents)",
                    "Proof of Residence (Aadhar/Voter ID/Passport)",
                    "Caste Certificate (if applicable)",
                    "Medical Certificate / Immunization Records"
                  ].map((doc, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-lg"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#8B1E1A] text-white flex items-center justify-center text-sm font-bold shrink-0">✓</div>
                      <span className="text-lg font-semibold text-[#1A1A1A]">{doc}</span>
                    </motion.div>
                  ))}
                </div>
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
                  className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
                >
                  <img
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
                    alt="Documents Required"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-5xl lg:text-6xl font-black mb-8 leading-tight text-[#1A1A1A]"
                style={{ fontFamily: '"Raleway", sans-serif' }}
              >
                Important <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Dates</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { event: "Admission Open", date: "November 1", icon: "📅" },
                { event: "Registration Deadline", date: "March 15", icon: "⏰" },
                { event: "Interaction Period", date: "Dec - Feb", icon: "💬" },
                { event: "Session Starts", date: "April 1", icon: "🎓" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center bg-gradient-to-br from-amber-50 to-white p-8 rounded-3xl shadow-xl"
                >
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-[#1A1A1A]">{item.event}</h3>
                  <p className="text-3xl font-black text-[#8B1E1A]" style={{ fontFamily: '"Raleway", sans-serif' }}>{item.date}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enquiry Form */}
        <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-red-50 relative overflow-hidden" id="enquiry-form">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#8B1E1A] rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D6B25E] rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2
                  className="text-5xl lg:text-7xl font-black mb-8 leading-tight text-[#1A1A1A]"
                  style={{ fontFamily: '"Raleway", sans-serif' }}
                >
                  Begin Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Application</span>
                </h2>
                <p className="text-xl text-[#4F4F4F] mb-8 leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>
                  Fill out this enquiry form, and our admissions office will get back to you within 24-48 hours with the next steps.
                </p>
                <div className="flex items-center gap-6 p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-[#D6B25E]/20 shadow-lg mb-8">
                  <div className="text-4xl">📞</div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] mb-1">Admissions Helpline</h4>
                    <p className="text-[#8B1E1A] font-bold text-lg">+91 90005 68416</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-[#D6B25E]/20 shadow-lg">
                  <div className="text-4xl">📧</div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] mb-1">Email Us</h4>
                    <p className="text-[#8B1E1A] font-bold text-lg">admissions@mapleford.edu.in</p>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-[#D6B25E]/20"
              >
                {!formSubmitted ? (
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      try {
                        const res = await fetch('/api/inquiries', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify(formData)
                        });
                        if (res.ok) {
                          setFormSubmitted(true);
                          setFormData({
                            parentName: '',
                            contactNumber: '',
                            email: '',
                            childName: '',
                            childDob: '',
                            gradeApplying: '',
                            message: ''
                          });
                        } else {
                          alert('Failed to submit. Please try again.');
                        }
                      } catch (error) {
                        console.error('Submission error:', error);
                        alert('An error occurred. Please try again.');
                      }
                    }}
                  >
                    <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A]">Enquiry Form</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium text-sm">Parent / Guardian Name</label>
                        <input
                          type="text"
                          required
                          value={formData.parentName}
                          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1A] focus:border-transparent transition-all"
                          placeholder="Enter name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium text-sm">Contact Number</label>
                        <input
                          type="tel"
                          required
                          value={formData.contactNumber}
                          onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1A] focus:border-transparent transition-all"
                          placeholder="Enter number"
                        />
                      </div>
                    </div>

                    <div className="mb-5">
                      <label className="block text-gray-700 mb-2 font-medium text-sm">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1A] focus:border-transparent transition-all"
                        placeholder="Enter email"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium text-sm">Child's Name</label>
                        <input
                          type="text"
                          required
                          value={formData.childName}
                          onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1A] focus:border-transparent transition-all"
                          placeholder="Enter child's name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium text-sm">Date of Birth</label>
                        <input
                          type="date"
                          required
                          value={formData.childDob}
                          onChange={(e) => setFormData({ ...formData, childDob: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1A] focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div className="mb-5">
                      <label className="block text-gray-700 mb-2 font-medium text-sm">Grade Applying For</label>
                      <select
                        required
                        value={formData.gradeApplying}
                        onChange={(e) => setFormData({ ...formData, gradeApplying: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1A] focus:border-transparent transition-all"
                      >
                        <option value="">Select grade</option>
                        <option value="Nursery">Nursery</option>
                        <option value="Jr. KG">Jr. KG</option>
                        <option value="Sr. KG">Sr. KG</option>
                        <option value="Grade 1">Grade 1</option>
                        <option value="Grade 2">Grade 2</option>
                        <option value="Grade 3">Grade 3</option>
                        <option value="Grade 4">Grade 4</option>
                        <option value="Grade 5">Grade 5</option>
                        <option value="Grade 6">Grade 6</option>
                        <option value="Grade 7">Grade 7</option>
                        <option value="Grade 8">Grade 8</option>
                        <option value="Grade 9">Grade 9</option>
                        <option value="Grade 10">Grade 10</option>
                      </select>
                    </div>

                    <div className="mb-5">
                      <label className="block text-gray-700 mb-2 font-medium text-sm">Additional Message (Optional)</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1E1A] focus:border-transparent transition-all"
                        placeholder="Any questions or special requirements?"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-8 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl bg-gradient-to-r from-[#8B1E1A] to-[#5A1411] text-white"
                    >
                      Submit Enquiry
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-6">✅</div>
                    <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]">Thank You!</h3>
                    <p className="text-lg text-[#4F4F4F]">
                      Your enquiry has been received. Our admissions team will contact you within 24-48 hours.
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}