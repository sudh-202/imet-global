// @ts-nocheck
"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiMenu, FiX } from "react-icons/fi"; // Import hamburger and close icons
import { navbarMenu } from "../constants/index"; // Import menu data
import { usePathname } from 'next/navigation'; // Import usePathname

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for toggling menu
  const pathname = usePathname(); // Get current pathname

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="bg-main border-dashed flex items-center gap-5 justify-between py-[40px] px-5 lg:px-10">
      {/* Logo */}
      <div className="flex items-center gap-x-2">
        <Image
          alt="Logo"
          src={"/images/logo.svg"}
          width={160}
          height={48}
          data-aos="fade-right"
        />
      </div>

      {/* Hamburger Menu for Mobile & Tablet */}
      <div className="lg:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {/* Toggle between FiMenu and FiX icons */}
          {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      {/* Full Menu for Desktop */}
      <div className="hidden lg:flex items-center gap-10" data-aos="fade-down">
        <ul className="flex flex-wrap gap-x-10 text-white text-md font-medium font-urbanist justify-center">
          {navbarMenu.map((item) => (
            <li key={item.name} className={`cursor-pointer ${pathname === item.href ? 'text-blue' : 'text-[#7A7C6C]'}`}>
              {item.name}
            </li>
          ))}
        </ul>
        <div className="flex gap-5">
          <button className="border-[#CC6B49] border-2 py-3 px-7 bg-white rounded-full text-black">
            Login
          </button>
          <button className="border-2 lg:py-3 lg:px-7 rounded-full bg-blue text-white">
            Sign In
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-blue flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-5 right-5"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <FiX size={30} className="text-white" /> {/* Close button */}
          </button>

          <ul className="flex flex-col gap-5 text-white text-md font-medium font-urbanist text-center">
            {navbarMenu.map((item) => (
              <li key={item.name} className={`cursor-pointer ${pathname === item.href ? 'text-blue' : 'text-white'}`}>
                {item.name}
              </li>
            ))}
          </ul>
          <div className="flex flex-col mt-10 gap-5 w-[80%]">
            <button className="border-[#CC6B49] border-2 py-3 px-7 bg-white rounded-full text-black">
              Login
            </button>
            <button className="border-2 py-3 px-7 rounded-full bg-blue text-white">
              Sign In
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
