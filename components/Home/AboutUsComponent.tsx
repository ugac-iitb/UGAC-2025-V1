"use client";
import Image from 'next/image';
import podcastImage from '../../public/images/hero_img.jpg';
import UGACImage from '../../public/images/UGAC V1 illustration.svg';
import { motion } from 'framer-motion'; 

const AboutUsComponent = () => {
    return ( 
        <div>
            <section className="flex flex-col-reverse lg:flex-row items-center justify-between mt-20 gap-8 px-4 py-16 lg:px-16 text-white w-[90%] mx-auto bg-white/15 backdrop-blur-lg rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] hover:bg-white/20">

                {/* Left Content */}
                <div className="max-w-xl w-full">
                    <motion.h1
                        style={{ fontFamily: 'Playfair Display' }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-[36px] md:text-2xl lg:text-6xl font-extrabold leading-tight tracking-tight"
                    >
                        <span className="block">About Us</span>
                        {/* <span className="block">Academic Council</span> */}
                    </motion.h1>

                    <p className=" mb-8 text-[24px] mt-13">
                        The Undergraduate Academic Council (UGAC) of IIT Bombay is a student-led body dedicated to strengthening the academic framework of the institute. UGAC works in close collaboration with the administration to formulate and enhance academic policies that reflect student perspectives and uphold institutional excellence. It strives to cultivate a supportive, transparent, and forward-thinking academic environment across the campus.

                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mb-8">
                        {/* <button
                            className="bg-[#191b22] text-white text-xl font-medium py-3 px-6 rounded-full shadow cursor-pointer hover:bg-[#2c2f3a] active:scale-95 transition transform duration-200"
                        >
                            Learn More
                        </button> */}

                    </div>

                </div>

                {/* Right Image */}
                <div className="relative w-full max-w-xl">
                    <Image
                        src={UGACImage}
                        alt="Podcast Host"
                        className="rounded-xl"
                        layout="responsive"
                        // width={700}
                        height={500} // Changed height from 800 to 500
                    />
                </div>
            </section>
        </div>
    );
}
 
export default AboutUsComponent;