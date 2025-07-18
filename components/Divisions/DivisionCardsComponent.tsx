'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const DivisionCardsComponent = ({ data }: { data: any }) => {
  const [hovered, setHovered] = useState(false);
  const basePath = process.env.NODE_ENV === 'production' ? '/UGAC-IITB' : '';

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
        <Link href={`/divisions/${data.club_id}`} className="absolute inset-0 flex items-center justify-center">
          <Image unoptimized
            src={`${basePath}/images/clubs/${data.club_id}.png`}
            alt={data.club_name}
            fill
            className="object-contain rounded-t-xl p-6"
          />

        </Link>
      </div>

      <div
        className={`
          absolute left-0 top-[230px] w-full 
          px-4 py-3 bg-[#fca311] text-[#14213d] 
          rounded-b-xl transition-all duration-200 
          ${hovered ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'} 
          overflow-hidden
        `}
      >
        <h2 style={{fontFamily:"Playfair Display"}} className="text-[24px] font-semibold">{data.club_name}</h2>
        <p className="text-sm ">{data.short_description}</p>
      </div>
    </div>
  );
};

export default DivisionCardsComponent;
