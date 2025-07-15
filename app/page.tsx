import HeroComponent from '@/components/Home/HeroComponent';
import AboutUsComponent from '@/components/Home/AboutUsComponent';
import DivisonComponent from '@/components/Home/DivsionComponent';
import FooterComponent from '@/components/Footer/FooterComponent';

export default function HeroPodcast() {
  return (
    // <div className='bg-gradient-to-b from-[#0a3f60] to-[#021e30] '>
    <div>
      <HeroComponent />
      <AboutUsComponent />
      <DivisonComponent />
    </div>
    
  );
}
