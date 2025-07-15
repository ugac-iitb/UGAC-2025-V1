import Image from 'next/image';
import podcastImage from '../../public/images/hero_img.jpg';
import UGACImage from '../../public/images/ugac.png';

const AboutUsComponent = () => {
    return ( 
        <>
            <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 py-16 lg:px-24 text-white w-[90%] mx-auto bg-white/15 backdrop-blur-lg rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] hover:bg-white/20">

                {/* Left Content */}
                <div className="max-w-xl w-full">
                    <h1 style={{fontFamily:"DT_Grotesk_Display"}} className="text-3xl md:text-[50px] font-extrabold mb-6 leading-tight text-[#7feddf]">
                        About Us
                    </h1>
                    <p className=" mb-8 text-[24px] ">
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
                <div className="relative w-full max-w-2xl">
                    <Image
                        src={UGACImage}
                        alt="Podcast Host"
                        className="rounded-xl filter brightness-0 invert"
                        layout="responsive"
                        // width={700}
                        height={500} // Changed height from 800 to 500
                    />
                </div>
            </section>
        </>
    );
}
 
export default AboutUsComponent;