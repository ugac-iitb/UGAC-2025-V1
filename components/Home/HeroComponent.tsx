"use client";
import { motion } from 'framer-motion'; 

const HeroComponent = () => {
    return ( 
        <>
            <section className="flex flex-col items-center justify-center text-white text-center px-4 py-30 md:pb-50 md:pt-40">
                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[#7feddf] text-lg font-medium mb-4"
                >
                    sub Heading
                </motion.p>

                {/* Heading */}
                <motion.h1
                    style={{ fontFamily: 'Playfair Display' }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-[36px] md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight"
                >
                    <span className="block">Undergraduate</span>
                    <span className="block">Academic</span>
                    <span className="block">Council</span>
                </motion.h1>
            </section>
        </>
    );
}
 
export default HeroComponent;