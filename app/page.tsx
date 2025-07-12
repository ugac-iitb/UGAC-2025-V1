import Image from 'next/image';
import podcastImage from '../public/hero_img.jpg'; // replace with your actual image path

export default function HeroPodcast() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-14 px-6 py-16 lg:px-24 bg-[#ea9276]">
      {/* Left Content */}
      <div className="max-w-xl w-full">
        {/* <p className="text-sm text-gray-700 mb-2">UGAC <span className="font-semibold">AirVocal</span></p> */}
        <h1 className="text-6xl lg:text-10xl font-extrabold text-[#191b22] mb-6 leading-tight">
          Undergraduate Academic Council
        </h1>
        <p className="text-[#191b22] mb-8 text-[24px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim arcu cursus tincidunt et odio enim aliquam. Gravida augue arcu duis
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
         <button
          className="bg-[#191b22] text-white text-xl font-medium py-3 px-6 rounded-full shadow cursor-pointer hover:bg-[#2c2f3a] active:scale-95 transition transform duration-200"
        >
          Learn More
        </button>

        </div>

      </div>

      {/* Right Image */}
      <div className="relative w-full max-w-5xl">
        <Image
          src={podcastImage}
          alt="Podcast Host"
          className="rounded-xl shadow-lg"
          layout="responsive"
          // width={700}
          height={700} // Changed height from 800 to 500
        />
      </div>
    </section>
  );
}
