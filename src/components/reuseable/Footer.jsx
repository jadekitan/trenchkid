import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // Leveraging the icons from your original build

const Footer = () => {
  // Automatically pull the current year so it never goes out of date
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-dark py-10 border-t border-white/10 font-custom relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Copyright & Brand */}
        <div className="text-soft-grey text-sm text-center md:text-left tracking-wide">
          &copy; {currentYear} The Trench Kid Project. All rights reserved.
        </div>

        {/* Quick Links */}
        <div className="flex items-center gap-8 text-sm tracking-widest uppercase font-semibold">
          <a 
            href="#" 
            className="text-soft-grey hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a 
            href="#" 
            className="text-soft-grey hover:text-white transition-colors duration-300"
          >
            Terms of Service
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          {/* <a 
            href="#" 
            aria-label="Facebook"
            className="text-soft-grey hover:text-trench-kid099 transition-transform duration-300 hover:scale-110"
          >
            <FaFacebookF className="text-xl" />
          </a>
          <a 
            href="#" 
            aria-label="Twitter"
            className="text-soft-grey hover:text-trench-kid099 transition-transform duration-300 hover:scale-110"
          >
            <FaTwitter className="text-xl" />
          </a> */}
          <a 
            href="https://www.instagram.com/trenchkid.project?igsh=MWJlNHlvYnFrdnVtMw%3D%3D&utm_source=qr" 
            aria-label="Instagram"
            className="text-soft-grey hover:text-trench-kid099 transition-transform duration-300 hover:scale-110"
          >
            <FaInstagram className="text-xl" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;