'use client';
import Image from 'next/image';
import Link from 'next/link';

const DivisionCardsComponent = ({ data }) => {
  return (
    <div
      className={`
        relative w-[300px] md:w-[300px]
        overflow-visible cursor-pointer 
        bg-white/15 backdrop-blur-lg shadow-lg 
        transition-transform duration-300 rounded-xl
      `}
    >
      {/* Image Section */}
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

      {/* Always-visible Content Section */}
      <div
        className={`
          w-full px-4 py-3 bg-[#fca311] text-[#14213d] 
          rounded-b-xl
        `}
      >
        <h2 style={{ fontFamily: "Playfair Display" }} className="text-[24px] font-semibold">
          {data.name}
        </h2>
        <p className="text-sm">{data.description}</p>
      </div>
    </div>
  );
};

export default DivisionCardsComponent;
