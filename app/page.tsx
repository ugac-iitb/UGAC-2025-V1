import Image from 'next/image';
import podcastImage from '../public/images/hero_img.jpg';
import divisonData from '../public/data/divisions.json'; 

export default function HeroPodcast() {
  return (
    <>
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-14 px-6 py-16 lg:px-24 bg-[#ea9276]">
      {/* Left Content */}
      <div className="max-w-xl w-full">
        
        <h1 style={{fontFamily:"DT_Grotesk_Display"}} className="text-6xl lg:text-10xl font-extrabold text-[#191b22] mb-6 leading-tight">
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

      <section className='bg-[#191b22] text-white'>
        <div className="flex flex-col items-center justify-center py-16">
          <h2 style={{fontFamily:"DT_Grotesk_Display"}} className="text-5xl font-bold mb-4">Our Divisions</h2>
          <p className="text-lg mb-8">UGAC is a big community consisting of many sub divisions</p>
          <div className="flex flex-wrap justify-center gap-x-15 gap-y-10">
            {/* Example Division Cards */}
            {divisonData.map((division,index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center my-0 p-1.5 w-full sm:w-1/2 md:w-1/4 lg:w-1/5"
              >

                <Image 
                  src={division.logo}
                  alt={division.name}
                  height={400}
                  width={300}
                  className="object-cover filter brightness-0 invert"
                />
                <h3 className='text-[#b462e4] text-center text-3xl'>{division.name}</h3>
                <p className="text-center text-lg mt-2">{division.description}</p>
                {division.instagram && (
                  <a
                    href={division.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center mt-5"
                    aria-label="Instagram"
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-white hover:text-[#b462e4] transition"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>
                  </a>
                )}
              </div>
            ))}
            </div>
        </div>
      </section>
    </>
    
  );
}
