import Image from 'next/image';
import podcastImage from '../../public/images/hero_img.jpg';

const AboutUsComponent = () => {
    return ( 
        <>
            <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 py-16 lg:px-24  bg-gradient-to-b from-[#083048] to-[#05283e] text-white">
                {/* Left Content */}
                <div className="max-w-xl w-full">
                    <h1 style={{fontFamily:"DT_Grotesk_Display"}} className="text-3xl md:text-[50px] font-extrabold mb-6 leading-tight">
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
                        src={podcastImage}
                        alt="Podcast Host"
                        className="rounded-xl shadow-lg"
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