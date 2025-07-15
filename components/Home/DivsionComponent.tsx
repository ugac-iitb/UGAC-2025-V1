import Image from 'next/image';
import divisonData from '../../public/data/divisions.json';
import Link from 'next/link';

const DivisonComponent = () => {
    return ( 
        <>
            <section className=' text-white'>
                <div className="flex flex-col items-center justify-center py-16">
                    <h2 style={{fontFamily:"DT_Grotesk_Display"}} className="text-3xl md:text-5xl font-bold mb-4">
                        Our Divisions
                    </h2>
                    <p className="text-lg mb-8 text-center">
                        UGAC is a big community consisting of many sub divisions
                    </p>
                    <div className="flex flex-wrap justify-center gap-x-15 gap-y-3 md:gap-y-7">
                        {/* Example Division Cards */}
                        {divisonData.map((division,index) => (
                        <div
                            key={index}
                            className="
                                flex flex-col items-center 
                                justify-center p-5
                                w-full sm:w-1/2 md:w-1/4 
                                lg:w-1/5 transition-all 
                                duration-300 transform 
                                hover:-translate-y-2 hover:shadow-xl
                                hover:bg-white/5 rounded-xl"
                        >
                            <Link href={`/divisions/${division.slug}`} >
                                <Image 
                                    src={division.logo}
                                    alt={division.name}
                                    height={200}
                                    width={200}
                                    className="object-cover filter brightness-0 invert"
                                />
                                <h3 className='text-[#bdf9f1] text-center text-[30px]'>{division.name}</h3>
                            </Link>
                            
                            {/* <p className="text-center text-[18px] mt-2">{division.description}</p> */}
                            {/* {division.instagram && (
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
                            )} */}
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default DivisonComponent;