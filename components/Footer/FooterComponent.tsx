import { Facebook, Instagram, Twitter, Phone, Mail, LinkedinIcon } from 'lucide-react';
import UGACLogo from '../../public/images/ugac.png';
import Image from 'next/image';
import Link from 'next/link';

const FooterComponent = () => {
    return ( 
        <>
          <footer style={{ fontFamily: 'Playfair Display' }} className="bg-[#fca311] text-[#14213d] px-4 pb-10 mt-30">
            {/* Social + Contact Icons */}
            <div className='space-y-4 mx-40'>
                <div className='grid grid-cols-1 md:grid-cols-2  text-[#14213d] text-2xl border-b-2 border-[#14213d] pb-5'>
                {/* <div className='flex items-center space-x-4'>
                  <Mail size={40} />
                  <span >abd@gmail.com</span> 
                </div>
                <div className='flex justify-end items-center space-x-4'>
                  <Phone size={40} />
                  <span>+91 1234567890</span>
                </div> */}

                <div className='flex items-center space-x-4 mt-5'>
                  <Image 
                    src={UGACLogo}
                    alt="UGAC Logo"
                    width={140}
                    height={140}
                  />
                </div>
                {/* <div className='flex justify-end items-center space-x-4'>
                  <Phone size={40} />
                  <span>+91 1234567890</span>
                </div> */}

                <div className='flex justify-end items-center space-x-4 mt-5'>
                  <Link href={"https://mail.google.com"}> <Instagram size={40}/></Link>
                  <Link href={"https://mail.google.com"}> <Facebook size={40}/></Link>
                  <Link href={"https://mail.google.com"}> <Mail  size={40}/></Link>
                  <Link href={"https://mail.google.com"}> <Phone  size={40}/></Link>
                  
                </div>
              </div>
              

              {/* Credits */}
              <p className="text-[18px] my-5">
                Developed by <span className="font-semibold">UGAC Web Team and Design Team</span> with <span className="text-red-500">❤️</span>
              </p>
            </div>
            
          </footer>
        </>
    );
}
 
export default FooterComponent;