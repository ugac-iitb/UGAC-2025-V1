import Image from 'next/image';
// import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const TeamCardsComponent = ({ data }) => {
  const name: string = data.name;
  const image: string = data.image;
  const role: string = data.role;

  console.log(data)

  return (
    <div className="bg-white/15 backdrop-blur-lg text-white rounded-xl shadow-md px-14 py-15 max-w-300 text-center space-y-4 hover:shadow-xl transition-all duration-300">
      {/* Profile Image */}
      <div className="flex justify-center">
        <div className="relative w-[280px] h-[280px] rounded-full border-4 border-[#fca311] overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      </div>


      {/* Name */}
      <h2 style={{ fontFamily: 'Playfair Display' }} className="text-[32px] font-bold">{name}</h2>

      {/* Position */}
      <p className="text-[#fca311] text-2xl font-semibold">{role}</p>

      {/* Social Icons */}
      <div className="flex justify-center space-x-4 pt-2 text-[#fca311]">
        {/* <FaFacebookF className="hover:text-black transition" />
        <FaTwitter className="hover:text-black transition" />
        <FaInstagram className="hover:text-black transition" /> */}
      </div>
    </div>
  );
};

export default TeamCardsComponent;
