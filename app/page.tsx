import HeroComponent from '@/components/Home/HeroComponent';
import AboutUsComponent from '@/components/Home/AboutUsComponent';
import DivisonComponent from '@/components/Home/DivsionComponent';
import ScrollComponent from '@/components/Home/ScrollComponent';

export default function HeroPodcast() {
  return (
    // <div className='bg-gradient-to-b from-[#0a3f60] to-[#021e30] '>
    <div>
      <HeroComponent/>
      <AboutUsComponent />
      {/* <DivisonComponent /> */}
      <section className=' text-white w-[90%] mt-20 mx-auto border-t-4 border-[#fca311]'>
        <div className="flex flex-col items-center justify-center pt-16 pb-8">
          <h2 style={{fontFamily:"DT_Grotesk_Display"}} className="text-3xl md:text-5xl font-bold mb-4">
            Our Divisions
          </h2>
          {/* <p className="text-lg mb-8 text-center">
              UGAC is a big community consisting of many sub divisions
          </p> */}
        </div>
      <ScrollComponent/>
      </section>
    </div>
    
  );
}
