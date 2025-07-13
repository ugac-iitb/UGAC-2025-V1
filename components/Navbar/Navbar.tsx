'use client';
import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ugacLogo from '../../public/images/ugac.png';
import './Navbar.css';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="
      bg-[#0a3f60]
      text-white px-6 py-2 md:py-0 md:px-20 flex items-center justify-between backdrop-blur-lg"
    >
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <Image
          src={ugacLogo}
          alt="UGAC Logo"
          height={120}
          className="object-contain filter brightness-0 invert h-15 md:h-[120px]"
        />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 font-bold items-center">
        <Link href="/" className="navbarLinks">Home</Link>
        <Link href="/resources" className="navbarLinks">Resources</Link>
        <Link href="/divisions" className="navbarLinks">Divisions</Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden py-0 flex justify-center items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          {isOpen ? <X className="h-[30px]" size={28} /> : <Menu className="h-[30px]" size={28} />}
        </button>
      </div>

      {/* Animated Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full z-50 flex flex-col items-center space-y-6 py-6 text-lg font-semibold md:hidden shadow-md bg-white/10 backdrop-blur-lg border-t border-white/20"
          >
            <Link className="text-[16px]" href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link className="text-[16px]" href="/resources" onClick={() => setIsOpen(false)}>Resources</Link>
            <Link className="text-[16px]" href="/divisions" onClick={() => setIsOpen(false)}>Divisions</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavbarComponent;
