import { ChevronDown } from 'lucide-react';
import './Navbar.css';
import Link from 'next/link';
import ugacLogo from '../../public/ugac.png'
import Image from 'next/image';

const NavbarComponent = () => {
  return (
    <nav className="flex items-center justify-between px-50 bg-[#191b22] text-white">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div>
          <Image 
            src={ugacLogo}
            alt="UGAC Logo"
            height={130}
            className="object-cover filter brightness-0 invert"
          />

        </div>
      </div>

      <div className="flex font-bold justify-center space-x-8 items-center">
        <Link href={'/'} className="navbarLinks">
          <span>Home</span>
          {/* <ChevronDown className="w-4 h-4" /> */}
        </Link>
        <Link href={'/resources'} className="navbarLinks ">Resources</Link>
        <Link href={'/divisions'} className="navbarLinks">Divisions</Link>
      </div>

    </nav>
  );
};

export default NavbarComponent;
