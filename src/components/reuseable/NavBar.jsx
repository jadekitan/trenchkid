"use client";

import React, { useEffect, useState } from "react";
import FullLogo from "/src/assets/full-logo.svg";
import Logo from "/src/assets/logo.svg";

const NavBar = () => {
  const navs = ["About us", "Discover", "Donate", "How it works"];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect only runs once on mount

  return (
    <header
      className={`w-full fixed top-0 left-0 flex justify-center items-center py-5 z-50 transition duration-1000 ease-in-out  ${
        scrolled ? "bg-white shadow-head" : "bg-transparent "
      } `}
    >
      <nav
        className={` w-[1065px] flex items-center justify-between transition-[height] duration-700 ease-in-out ${
          scrolled ? "h-[65px]" : "h-[85px]"
        }`}
      >
        <img
          className={` cursor-pointer ${
            scrolled
              ? "w-[150px] h-[64px] transition-[display] duration-1000 ease-in-out"
              : "w-[57px] h-[84px]"
          }`}
          src={scrolled ? Logo : FullLogo}
          alt="The trench kid logo"
        />
        <nav className="flex items-center gap-[50px]">
          {navs.map((nav, i) => {
            return (
              <a
                className={`text-base font-custom relative after:w-0 after:h-[3px] hover:after:w-full after:absolute after:left-0 after:bottom-[-6px] after:duration-100 ${
                  scrolled
                    ? "text-black hover:text-trench-kid500 after:bg-trench-kid500  "
                    : "text-white hover:text-trench-kid099 after:bg-trench-kid099 "
                }`}
                key={i}
                href=""
              >
                {nav}{" "}
              </a>
            );
          })}
        </nav>
        <button
          onClick={() => {
            window.location.assign("");
          }}
          className={`flex py-[6px] px-[22px] justify-center items-center gap-2 rounded-lg text-white text-base text-center tracking-[-0.48px] font-custom transition duration-700 ease-in-out ${
            scrolled
              ? "border-none bg-trench-kid500 hover:bg-trench-kid700"
              : "border-2 border-solid border-white hover:bg-trench-kid500 hover:border-trench-kid500"
          }`}
        >
          Start a campaign
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
