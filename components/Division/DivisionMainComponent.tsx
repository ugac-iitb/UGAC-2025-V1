'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import OverviewComponent from './OverviewComponent';

const categories = [
  { name: 'Overview', id: 1 },
  { name: 'People', id: 2 },
  { name: 'Resources', id: 3 },
];

const DivisionMainComponent = ({ clubData }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  return (
    <div className="flex flex-col md:flex-row gap-8 px-6 md:px-20 py-10 w-full text-white items-start mb-20">
      {/* Sidebar */}
      <div className="w-full md:w-[30%]">
        {/* Logo */}
        <div className="flex justify-center items-center">
          <Image
            src={clubData.logo}
            alt={clubData.name}
            height={340}
            width={340}
            className="h-40 w-40 md:h-[300px] md:w-auto rounded-lg mb-6 filter brightness-0 invert"
          />
        </div>

        {/* Category Buttons */}
        <div className="flex flex-col gap-4 bg-[#2c3e5c] p-6 rounded-2xl">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`text-left text-2xl font-bold px-4 py-3 rounded-xl transition ${
                selectedCategory === cat.id
                  ? 'bg-[#ffa500] text-black'
                  : 'text-white hover:bg-[#3c4e70]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col gap-4 pt-10">
        <div className="bg-[#2c3e5c] rounded-xl overflow-hidden p-6">
          {selectedCategory === 1 && (
            <OverviewComponent overview={clubData.description} />
          )}
          {selectedCategory === 2 && (
            <div>
              <h2 className="text-2xl font-semibold">People Section</h2>
              <p>Content for People goes here.</p>
            </div>
          )}
          {selectedCategory === 3 && (
            <div>
              <h2 className="text-2xl font-semibold">Resources Section</h2>
              <p>Content for Resources goes here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DivisionMainComponent;
