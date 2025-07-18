'use client';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import data from '../../public/data/clubs.json';
import DivisionCardsComponent from './DivisionCardsComponent';

const ScrollComponent = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hover, setHovered] = useState(false);

  const scroll = (direction:any) => {
    if (scrollRef.current) {
      const scrollAmount = 320; // width of card + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {data && (
        <div
          className="relative w-[80%] mx-auto py-6"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Left Arrow */}
          {(hover || typeof window !== 'undefined' && window.innerWidth < 768) && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-md transition block md:hidden sm:block"
            >
              <ChevronLeft size={24} />
            </button>
          )}
          {hover && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-md transition hidden md:block"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Scrollable Area */}
          <div
            ref={scrollRef}
            className="overflow-x-scroll overflow-y-hidden px-8 scrollbar-hide"
          >
            <div className="flex gap-8">
              {data.map((division, index) => (
                <div key={index}>
                  <DivisionCardsComponent data={division} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          {(hover || typeof window !== 'undefined' && window.innerWidth < 768) && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-md  transition block md:hidden sm:block"
            >
              <ChevronRight size={24} />
            </button>
          )}
          {hover && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-md  transition hidden md:block"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default ScrollComponent;
