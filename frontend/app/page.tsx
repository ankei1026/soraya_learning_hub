"use client";

import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { ArrowRight, BookOpen, Heart, Users, Star, Target, ChevronRight, Sparkles, Zap, Smile, Gift } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const scaleOnHover = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div>  
    <div className="min-h-screen bg-white">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navigation - Energetic */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-yellow-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse-gentle" />
            <span className="text-xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">SLH</span>
          </div>
          <div className="hidden md:flex items-center gap-0">
            {["MISSION", "VALUES", "PROMISES", "CONTACT"].map((item, idx) => (
              <a 
                key={idx}
                href={`#${item.toLowerCase()}`} 
                className="text-sm tracking-wide text-gray-600 hover:text-yellow-600 transition-all duration-300 px-4 py-2 border-r border-yellow-200 last:border-r-0 hover:bg-yellow-50"
              >
                {item}
              </a>
            ))}
          </div>
          <button className="px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs tracking-wide font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
            GET STARTED ✨
          </button>
        </div>
      </nav>

      {/* Hero Section - Lively */}
      <section className="pt-32 pb-24 px-8 max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-12 gap-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="md:col-span-7 md:col-start-2"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-orange-500 uppercase font-semibold bg-orange-50 px-3 py-1 rounded-full">
                <Zap className="w-3 h-3" /> Welcome to
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-[1.1]">
              <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
                Soraya
              </span>
              <span className="text-black"> Learning Hub</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 font-normal mb-8 max-w-xl leading-relaxed">
              A place where fun learning begins. Teaching with care, at every child's pace. 
              <span className="inline-block ml-2">🎉</span>
            </motion.p>
            <motion.div variants={fadeInUp} className="flex gap-4 flex-wrap">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm tracking-wide font-medium rounded-full hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                START LEARNING <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white text-sm tracking-wide font-medium rounded-full hover:shadow-xl transition-all duration-300"
              >
                LEARN MORE
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Energetic */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 via-orange-50 to-pink-50 border-y border-yellow-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {[
              { number: "500+", label: "ACTIVE STUDENTS", icon: "👨‍🎓" },
              { number: "25+", label: "EXPERT TUTORS", icon: "👩‍🏫" },
              { number: "98%", label: "SATISFACTION", icon: "😊" },
              { number: "15+", label: "SUBJECTS", icon: "📚" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center border-r border-yellow-200 last:border-r-0"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-xs tracking-wide text-gray-500 mt-2 flex items-center justify-center gap-1">
                  <span>{stat.icon}</span> {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section - Warm & Lively */}
      <section id="mission" className="py-28 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="md:col-span-3"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-orange-500 uppercase font-semibold bg-orange-50 px-3 py-1 rounded-full">
                <Heart className="w-3 h-3" /> Our Purpose
              </span>
              <h2 className="text-5xl font-bold tracking-tight text-black mt-4 leading-[1.1]">Mission</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 mt-4 rounded-full"></div>
            </motion.div>
          </motion.div>

          <motion.div variants={staggerContainer} className="md:col-span-8 md:col-start-5">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "PERSONALIZED LEARNING",
                  description: "Help children learn in an impactful way, through their individual learning pace.",
                  color: "from-yellow-400 to-orange-400",
                },
                {
                  icon: <Heart className="w-6 h-6" />,
                  title: "PARENTAL PEACE OF MIND",
                  description: "Give parents peace of mind on their child's academic support, creating more family bonding time.",
                  color: "from-pink-400 to-rose-400",
                },
                {
                  icon: <BookOpen className="w-6 h-6" />,
                  title: "TEACHER EMPOWERMENT",
                  description: "Help more teachers earn extra income by doing what they love—effective guided teaching.",
                  color: "from-orange-400 to-yellow-400",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="border border-yellow-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 bg-white"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-bold tracking-wide text-black mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section - Energetic */}
      <section id="values" className="py-28 px-8 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="md:col-span-3"
            >
              <motion.div variants={fadeInUp}>
                <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-orange-500 uppercase font-semibold bg-white/80 px-3 py-1 rounded-full">
                  <Target className="w-3 h-3" /> What We Believe
                </span>
                <h2 className="text-5xl font-bold tracking-tight text-black mt-4 leading-[1.1]">Core Values</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 mt-4 rounded-full"></div>
              </motion.div>
            </motion.div>

            <motion.div variants={staggerContainer} className="md:col-span-8 md:col-start-5">
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
                {[
                  { title: "PERSONALIZED GROWTH", desc: "Every child learns differently. We embrace each learner's unique pace.", icon: "🌱" },
                  { title: "NURTURING CONNECTION", desc: "Building warm relationships that help children feel safe and confident.", icon: "🤝" },
                  { title: "FUN & ENGAGING", desc: "Interactive activities that make learning enjoyable and memorable.", icon: "🎮" },
                  { title: "LIFE SKILLS", desc: "Developing patience, focus, responsibility, and confidence.", icon: "💪" },
                ].map((value, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    whileHover={{ x: 5 }}
                    className="border-l-4 border-yellow-400 pl-5"
                  >
                    <div className="text-2xl mb-2">{value.icon}</div>
                    <h3 className="text-sm font-bold tracking-wide text-black mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Promises Section - Lively Cards */}
      <section id="promises" className="py-28 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="md:col-span-3"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-orange-500 uppercase font-semibold bg-orange-50 px-3 py-1 rounded-full">
                <Gift className="w-3 h-3" /> Our Commitment
              </span>
              <h2 className="text-5xl font-bold tracking-tight text-black mt-4 leading-[1.1]">Promises</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 mt-4 rounded-full"></div>
            </motion.div>
          </motion.div>

          <motion.div variants={staggerContainer} className="md:col-span-8 md:col-start-5">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "GENTLE TEACHING", desc: "Guiding every child with patience, kindness, and understanding.", emoji: "🌸" },
                { title: "MEANINGFUL LEARNING", desc: "Fun, engaging lessons that match each child's pace.", emoji: "🎯" },
                { title: "SAFE & CARING SPACE", desc: "A calm environment where kids feel loved and confident.", emoji: "🏠" },
                { title: "OPEN COMMUNICATION", desc: "Partnering with parents through honest updates and support.", emoji: "💬" },
                { title: "REAL GROWTH", desc: "Nurturing both academic skills and emotional confidence.", emoji: "📈" },
              ].map((promise, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -3 }}
                  className="border border-yellow-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300 bg-white"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{promise.emoji}</div>
                    <div>
                      <h3 className="text-sm font-bold tracking-wide text-black mb-2">{promise.title}</h3>
                      <p className="text-gray-600 text-sm">{promise.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Bold Energetic */}
      <section className="py-28 px-8 bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-12 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="md:col-span-7"
            >
              <motion.div variants={fadeInUp}>
                <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-white/90 uppercase font-semibold bg-white/20 px-3 py-1 rounded-full">
                  <Sparkles className="w-3 h-3" /> Why Choose Us
                </span>
                <h2 className="text-6xl md:text-7xl font-bold tracking-tight mt-6 leading-[1.1] text-white">
                  Learning that <span className="underline decoration-yellow-300">actually works</span>
                </h2>
                <p className="text-white/90 text-lg mt-6 mb-8 leading-relaxed max-w-xl">
                  We believe every child deserves an education that adapts to them, not the other way around. 🚀
                </p>
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="text-white border-b-2 border-white/50 pb-1 text-sm tracking-wide font-medium inline-flex items-center gap-2 group hover:border-white transition-all"
                >
                  LEARN MORE <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInUp} className="md:col-span-4 md:col-start-9">
              <div className="space-y-4">
                {["1-on-1 personalized tutoring", "Flexible scheduling options", "Progress tracking for parents", "Certified experienced tutors"].map((feature, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ x: 5 }}
                    className="border-b border-white/30 pb-3 flex items-center justify-between bg-white/10 rounded-lg p-3 backdrop-blur-sm"
                  >
                    <span className="text-white text-sm font-medium">{feature}</span>
                    <span className="text-white/60 text-xs font-bold">0{idx + 1}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section - With Emojis */}
      <section className="py-28 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="md:col-span-3"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-orange-500 uppercase font-semibold bg-orange-50 px-3 py-1 rounded-full">
                <Star className="w-3 h-3" /> Testimonials
              </span>
              <h2 className="text-5xl font-bold tracking-tight text-black mt-4 leading-[1.1]">What Parents Say</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 mt-4 rounded-full"></div>
            </motion.div>
          </motion.div>

          <motion.div variants={staggerContainer} className="md:col-span-8 md:col-start-5">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { quote: "My daughter's confidence has grown so much since joining Soraya.", author: "SARAH M.", emoji: "⭐" },
                { quote: "Finally, a learning platform that actually cares about my child's pace.", author: "DAVID K.", emoji: "💛" },
                { quote: "The tutors are patient and knowledgeable. I've seen real improvement.", author: "MARIA L.", emoji: "🎉" },
              ].map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="border-2 border-yellow-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 bg-white"
                >
                  <div className="text-4xl mb-4">{testimonial.emoji}</div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">"{testimonial.quote}"</p>
                  <p className="text-xs font-bold tracking-wide text-orange-500">{testimonial.author}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>



      {/* Footer - Warm */}
      <footer className="py-8 px-8 bg-gradient-to-r from-yellow-50 to-pink-50 border-t border-yellow-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              <div className="text-xs tracking-wide text-gray-500">
                © 2024 SORAYA LEARNING HUB 💛
              </div>
            </div>
            <div className="flex gap-6 text-xs tracking-wide text-gray-500">
              <a href="#" className="hover:text-orange-500 transition-colors">PRIVACY</a>
              <a href="#" className="hover:text-orange-500 transition-colors">TERMS</a>
              <a href="#" className="hover:text-orange-500 transition-colors">CONTACT</a>
              <a href="#" className="hover:text-orange-500 transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
  
}