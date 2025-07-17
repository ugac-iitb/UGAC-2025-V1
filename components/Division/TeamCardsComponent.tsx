import Image from 'next/image';
import { useState } from 'react';
import { LinkedinIcon, Mail } from 'lucide-react';

const fallbackImage = '/images/temp.png';

interface TeamCardData {
  name: string;
  image: string;
  role: string;
  linkedin?: string;
  email?: string;
}

const TeamCardsComponent = ({ data }: { data: TeamCardData }) => {
  const { name, image, role, linkedin, email } = data;
  const [imgSrc, setImgSrc] = useState(image);

  return (
    <div className="bg-white/15 backdrop-blur-lg text-white rounded-xl shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md px-8 sm:px-10 py-10 text-center space-y-4 hover:shadow-xl transition-all duration-300">
      {/* Profile Image */}
      <div className="flex justify-center">
        <div className="relative w-[200px] sm:w-[240px] md:w-[280px] aspect-square rounded-full border-4 border-[#fca311] overflow-hidden">
          <Image
            src={imgSrc}
            alt={name}
            fill
            className="object-cover"
            onError={() => setImgSrc(fallbackImage)}
          />
        </div>
      </div>

      {/* Name */}
      <h2 style={{ fontFamily: 'Playfair Display' }} className="text-2xl sm:text-3xl font-bold">{name}</h2>

      {/* Position */}
      <p className="text-[#fca311] text-xl sm:text-2xl font-semibold">{role}</p>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 pt-2 text-[#fca311] text-xl sm:text-2xl">
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon className="hover:text-white transition" />
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`} aria-label="Email">
            <Mail className="hover:text-white transition" />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCardsComponent;
