import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import FullLogo from "/src/assets/full-logo.svg";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Add a scroll listener to trigger the glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300 font-custom z-50 ${
          isScrolled
            ? "bg-dark/80 backdrop-blur-md shadow-3xl"
            : "bg-transparent"
        }`}
      >
        {/* Brand / Logo */}
        <div className="flex items-center gap-3 cursor-pointer relative z-[60]">
          <img src={FullLogo} alt="Trench Kid Logo" className="h-15 w-auto" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#mission"
            className="text-soft-grey hover:text-white transition-colors text-sm uppercase tracking-widest font-semibold"
          >
            Mission
          </a>
          <a
            href="#how-it-works"
            className="text-soft-grey hover:text-white transition-colors text-sm uppercase tracking-widest font-semibold"
          >
            How It Works
          </a>
          <a
            href="#community"
            className="text-soft-grey hover:text-white transition-colors text-sm uppercase tracking-widest font-semibold"
          >
            Community
          </a>
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-6 relative z-[60]">
          <button
            onClick={() => {
              window.location.assign("");
            }}
            className="hidden md:flex bg-trench-kid500 hover:bg-trench-kid700 text-white px-6 py-2.5 rounded-lg font-bold tracking-wide transition-all duration-300 shadow-3xl"
          >
            Donate
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-soft-grey hover:text-white transition-colors focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-dark flex flex-col items-center justify-center transition-all duration-500 ease-in-out font-custom ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center gap-10 text-3xl font-bold tracking-widest uppercase">
          <a
            href="#mission"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white hover:text-trench-kid099 transition-colors"
          >
            Mission
          </a>
          <a
            href="#how-it-works"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white hover:text-trench-kid099 transition-colors"
          >
            How It Works
          </a>
          <a
            href="#community"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white hover:text-trench-kid099 transition-colors"
          >
            Community
          </a>

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.location.assign("");
            }}
            className="mt-6 bg-trench-kid500 hover:bg-trench-kid700 text-white px-12 py-4 rounded-lg transition-all duration-300 shadow-3xl w-full text-center"
          >
            Donate
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
