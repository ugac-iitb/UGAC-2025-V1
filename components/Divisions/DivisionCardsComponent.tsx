'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const DivisionCardsComponent = ({ data }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`
                  relative w-[300px] md:w-[300px]
                  overflow-visible cursor-pointer 
                  bg-white/15 backdrop-blur-lg shadow-lg 
                  transition-transform duration-300 
                  ${hovered ? 'z-30 scale-105' : 'z-10 scale-100'}`}

      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative w-full h-[230px] border-b-4 border-[#fca311] rounded-t-xl overflow-hidden">
        <Link href={`/divisions/${data.slug}`} className="absolute inset-0 flex items-center justify-center">
          <Image
            src={data.logo}
            alt={data.name}
            fill
            className="object-cover rounded-t-xl filter brightness-0 invert"
          />
        </Link>
      </div>

      <div
        className={`
          absolute left-0 top-[230px] w-full 
          px-4 py-3 bg-[#fca311] text-[#14213d] 
          rounded-b-xl transition-all duration-200 
          ${hovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} 
          overflow-hidden
        `}
      >
        <h2 style={{fontFamily:"Playfair Display"}} className="text-[24px] font-semibold">{data.name}</h2>
        <p className="text-sm ">{data.description}</p>
      </div>
    </div>
  );
};

export default DivisionCardsComponent;
