'use client';
import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation'; // ✅ import this
import ugacLogo from '../../public/images/ugac.png';
import './Navbar.css';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const linkClass = (href: string) =>
    `navbarLinks ${isActive(href) ? 'text-[#fca311]' : ''}`;

  return (
    <motion.nav
      className="text-white px-6 py-2 md:py-0 md:px-20 flex items-center justify-between backdrop-blur-lg"
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
        <Link href="/" className={linkClass('/')}>Home</Link>
        <Link href="/resources" className={linkClass('/resources')}>Resources</Link>
        <Link href="/divisions" className={linkClass('/divisions')}>Divisions</Link>
        <Link href="/team" className={linkClass('/team')}>Team</Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden py-0 flex justify-center items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          {isOpen ? <X className="h-[30px]" size={28} /> : <Menu className="h-[30px]" size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full z-50 flex flex-col items-center space-y-6 py-6 text-lg font-semibold md:hidden shadow-md bg-white/10 backdrop-blur-lg border-t border-white/20"
          >
            <Link className={linkClass('/')} href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link className={linkClass('/resources')} href="/resources" onClick={() => setIsOpen(false)}>Resources</Link>
            <Link className={linkClass('/divisions')} href="/divisions" onClick={() => setIsOpen(false)}>Divisions</Link>
            <Link className={linkClass('/team')} href="/team" onClick={() => setIsOpen(false)}>Team</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavbarComponent;
