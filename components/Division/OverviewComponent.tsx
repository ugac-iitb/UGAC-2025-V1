'use client';

import { Mail, Instagram, Linkedin } from 'lucide-react';

const OverviewComponent = ({ overview, linkedin, mail, instagram }) => {
  console.log(instagram)
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-4 p-4 md:p-4 rounded-2xl">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4">
        Overview
      </h3>

      <p className="text-base md:text-[20px] lg:text-xl text-gray-300 leading-relaxed">
        {overview}
      </p>

      {/* Social Links */}
      <div className="flex gap-6 mt-4">
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition">
            <Linkedin size={28} />
          </a>
        )}
        {mail && (
          <a href={`mailto:${mail}`} className="text-red-400 hover:text-red-600 transition">
            <Mail size={28} />
          </a>
        )}
        {instagram && (
          <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-600 transition">
            <Instagram size={28} />
          </a>
        )}
      </div>
    </div>
  );
};

export default OverviewComponent;
