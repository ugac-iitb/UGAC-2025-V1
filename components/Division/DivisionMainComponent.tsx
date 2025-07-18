'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import OverviewComponent from './OverviewComponent';
import resources from '../../public/data/resources.json'
import ResourcesComponent from './ResourcesComponent';
import clubHeads from '../../public/data/club_heads.json'
import clubConv from '../../public/data/club_conveners.json'
import ContactComponent from './ContactComponent';

const categories = [
  { name: 'Overview', id: 1 },
  { name: 'People', id: 2 },
  { name: 'Resources', id: 3 },
];

const DivisionMainComponent = ({ clubData,id }:{ clubData:any,id:any }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const filteredResources = resources.filter((val) => val.club_id == id);
  const filteredClubHeads = clubHeads.filter((val) => val.club_id == id);
  const filteredClubConveners = clubConv.filter((val) => val.club_id == id);

  const basePath = process.env.NODE_ENV === 'production' ? '/UGAC-IITB' : '';

  console.log(filteredClubConveners);
  console.log(filteredClubHeads)

  return (
    <div className="flex flex-col md:flex-row gap-8 px-6 md:px-20 py-10 w-full text-white items-start mb-20">
      {/* Sidebar */}
      <div className="w-full md:w-[30%]">
        {/* Logo */}
       <div className="w-full aspect-square relative mb-6">
        <Image unoptimized
          src={`${basePath}/images/clubs/${clubData.club_id}.png`}
          alt={clubData.club_name}
          fill
          className="object-contain p-6 pt-0"
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
      <div className="flex-1 flex flex-col gap-4 pt-0">
        <div className="bg-[#2c3e5c] rounded-xl overflow-hidden p-2 md:p-6">
          {selectedCategory === 1 && (
            <OverviewComponent overview={clubData.description} linkedin={clubData.linkedin} instagram={clubData.Instagram} mail={clubData.mail}/>
          )}
          {selectedCategory === 2 && (
            <div>
              {/* <h2 className="text-2xl font-semibold">People Section</h2> */}
              <ContactComponent clubHeads={filteredClubHeads} clubConveners={filteredClubConveners}/>
            </div>
          )}
          {selectedCategory === 3 && (
            <div>
              <h2 className="text-2xl font-semibold">Resources</h2>
              <ResourcesComponent filteredResources={filteredResources}/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DivisionMainComponent;
