'use client';
import { motion } from 'framer-motion';
import { Sparkles, Star, Book, BookOpenCheck } from 'lucide-react';

const HeroComponent = () => {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center w-[80%] mx-auto mt-10 text-white text-center px-4 py-32 md:pb-48 md:pt-40 border-b-3 border-[#fca311]">
      
      {/* === Floating Icons === */}
      <motion.div
        className="absolute top-10 left-8 text-blue-300 opacity-40"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: [ -10, 10, -10 ] }}
        transition={{ delay: 0.4, duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Sparkles size={36} />
      </motion.div>

      <motion.div
        className="absolute top-20 right-10 text-pink-300 opacity-40"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: [ -10, 10, -10 ] }}
        transition={{ delay: 0.6, duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Star size={32} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-24 text-yellow-400 opacity-40"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [10, -10, 10] }}
        transition={{ delay: 0.8, duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Book size={36} />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-24 text-green-300 opacity-40"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [-10, 10, -10] }}
        transition={{ delay: 1, duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <BookOpenCheck size={36} />
      </motion.div>

      <motion.div
        className="absolute top-[30%] left-4 text-purple-300 opacity-30"
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 1, rotate: [ -10, 10, -10 ] }}
        transition={{ delay: 0.9, duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Star size={30} />
      </motion.div>

      <motion.div
        className="absolute bottom-[15%] right-6 text-orange-400 opacity-30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: [1, 1.1, 1] }}
        transition={{ delay: 1.2, duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Book size={32} />
      </motion.div>

      {/* === Main Heading === */}
      <motion.h1
        style={{ fontFamily: 'Playfair Display' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-[36px] md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight"
      >
        Divisions
      </motion.h1>

    </section>
  );
};

export default HeroComponent;
