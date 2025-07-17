'use client';
import { Facebook, Instagram, Twitter, Phone, Mail } from 'lucide-react';
import UGACLogo from '../../public/images/ugac.png';
import Image from 'next/image';
import Link from 'next/link';

const FooterComponent = () => {
  return (
    <footer style={{ fontFamily: 'Playfair Display' }} className="bg-[#fca311] text-[#14213d] px-4 pt-10 pb-10 mt-30">
      <div className="max-w-screen-xl mx-auto space-y-6">
        {/* Logo & Social */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b-2 border-[#14213d] pb-6 gap-6">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start">
            <Image
              src={UGACLogo}
              alt="UGAC Logo"
              width={140}
              height={140}
              className=''
            />
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-6">
            <Link href="https://www.instagram.com/ugac.iitb/" aria-label="Instagram">
              <Instagram size={32} />
            </Link>
            <Link href="https://www.facebook.com/iitb.ugacads/" aria-label="Facebook">
              <Facebook size={32} />
            </Link>
            <Link href="mailto:gsecaaug@iitb.ac.in" aria-label="Email">
              <Mail size={32} />
            </Link>
            {/* <Link href="tel:+911234567890" aria-label="Phone">
              <Phone size={32} />
            </Link> */}
          </div>
        </div>

        {/* Credits */}
        <p className="text-center text-lg">
          Developed by <span className="font-semibold">UGAC Web Team and Design Team</span> with <span className="text-red-600">❤️</span>
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
