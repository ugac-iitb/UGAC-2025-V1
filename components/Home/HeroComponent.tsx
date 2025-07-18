'use client';
import { motion } from 'framer-motion';
import { Sparkles, Star, BookOpen, Globe, Lightbulb, PenLine } from 'lucide-react';
import Image from 'next/image';
import heroPattern from '../../public/images/wavey-fingerprint.png'; // Replace with your asset

const HeroComponent = () => {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center text-white text-center px-4 py-28 md:py-40 w-full ">

      {/* === Background Pattern === */}
      <div className="absolute inset-0 opacity-10 z-0">
        <Image unoptimized
          src={heroPattern}
          alt="Background pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* === Floating Icons (Only on md+) === */}
      <div className="hidden md:block absolute inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute top-10 left-8 text-blue-300 opacity-30"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: [ -10, 10, -10 ] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Sparkles size={36} />
        </motion.div>

        <motion.div
          className="absolute top-24 right-10 text-pink-300 opacity-30"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: [ -10, 10, -10 ] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Star size={32} />
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-16 text-yellow-400 opacity-30"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [10, -10, 10] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <BookOpen size={36} />
        </motion.div>

        <motion.div
          className="absolute bottom-24 right-20 text-green-300 opacity-30"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [-10, 10, -10] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Globe size={34} />
        </motion.div>

        <motion.div
          className="absolute top-1/3 left-4 text-purple-400 opacity-20"
          initial={{ opacity: 0, rotate: -20 }}
          animate={{ opacity: 1, rotate: [ -15, 15, -15 ] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Lightbulb size={30} />
        </motion.div>

        <motion.div
          className="absolute bottom-16 right-8 text-orange-400 opacity-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: [1, 1.1, 1] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <PenLine size={32} />
        </motion.div>
      </div>

      {/* === Main Content === */}
      <div className="relative z-20 w-[90%] md:w-[80%] lg:w-[70%]">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#7feddf] text-lg font-medium mb-4 tracking-wide"
        >
          Strengthening Academics. Empowering Students.

        </motion.p>

        {/* Main Heading */}
        <motion.h1
          style={{ fontFamily: 'Playfair Display' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-[36px] md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
        >
          <span className="block">Undergraduate</span>
          <span className="block">Academic</span>
          <span className="block text-[#fca311]">Council</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 text-base md:text-xl text-gray-200 font-light max-w-2xl mx-auto"
          style={{ fontFamily: 'Inter' }}
        >
          We bridge students and faculty, spark innovation, and drive academic excellence at every level.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroComponent;
