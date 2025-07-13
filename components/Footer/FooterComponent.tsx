import { Facebook, Instagram, Twitter, Phone, Mail } from 'lucide-react';

const FooterComponent = () => {
    return ( 
        <>
            <footer className="bg-[#021e30] text-white py-6 text-center text-sm px-4">
      {/* Social + Contact Icons */}
      <div className="flex flex-wrap justify-center items-center gap-6 mb-4 text-base">
        <a href="https://facebook.com" target="_blank" className="flex items-center gap-1 hover:text-blue-400 transition">
          <Facebook size={18} /> Facebook
        </a>
        <a href="https://instagram.com" target="_blank" className="flex items-center gap-1 hover:text-pink-400 transition">
          <Instagram size={18} /> Instagram
        </a>
        <a href="https://twitter.com" target="_blank" className="flex items-center gap-1 hover:text-sky-400 transition">
          <Twitter size={18} /> Twitter
        </a>
        <a href="tel:8128679781" className="flex items-center gap-1 hover:text-green-400 transition">
          <Phone size={18} /> 8128679781
        </a>
        <a href="mailto:gsectech@iitb.ac.in" className="flex items-center gap-1 hover:text-red-400 transition">
          <Mail size={18} /> gsectech@iitb.ac.in
        </a>
      </div>

      {/* Credits */}
      <p className="text-white text-sm">
        Developed by <span className="font-semibold">UGAC Web Team</span> with <span className="text-red-500">❤️</span>
      </p>
    </footer>
        </>
    );
}
 
export default FooterComponent;