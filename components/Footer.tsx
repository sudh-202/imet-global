"use client";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <footer className="">
      <div className="bg-blue flex justify-center flex-col items-center space-y-5 py-24">
        <h2 className="text-4xl md:text-6xl font-bricolage font-semibold text-white">
          Career Helpline
        </h2>
        <p className="text-center text-white text-sm md:text-base md:px-0 px-10">
          Book your slot to attend career counselling sessions from industry practitioners
        </p>
        <button
          className="bg-[#E5A632] text-white font-bold font-bricolage text-[16px] md:text-[18px] py-3 px-6 rounded-full hover:bg-blue transition duration-300"
          data-aos="fade-right"
        >
          Know More
        </button>
      </div>

      <div className="px-4 md:px-[10vw] bg-red-800 text-white py-10 md:py-20">
        <div className="flex flex-col md:flex-row text-center md:text-left justify-center">
          {/* Logo and Social Links */}
          <div className="flex-1 space-y-4 mb-10">
            <div className="flex justify-center md:justify-start">
              <Image
                alt="Logo"
                src={"/images/Logowhite.svg"}
                width={200}
                height={48}
                data-aos="fade-right"
              />
            </div>
            <p
              className="text-lg font-semibold font-bricolage"
              data-aos="fade-right"
            >
              Follow Us
            </p>
            <div
              className="flex justify-center md:justify-start space-x-4"
              data-aos="fade-right"
            >
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 space-y-2 mb-10" data-aos="fade-up">
            <h3 className="text-lg font-semibold font-bricolage">
              Quick Links
            </h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Course
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Gurupool
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex-1 space-y-4" data-aos="fade-left">
            <h3 className="text-lg font-semibold font-bricolage">Contact Us</h3>

            <div className="flex items-center space-x-4 justify-center lg:justify-start">
              <FaEnvelope className="text-xl" />
              <a
                href="mailto:contact@imetglobal.com"
                className="hover:text-gray-300 text-sm md:text-base"
              >
                contact@imetglobal.com
              </a>
            </div>

            <div className="flex items-center space-x-4 justify-center lg:justify-start w-[60%] lg:w-full ml-16 lg:ml-0">
              <FaMapMarkerAlt className="text-6xl md:text-4xl" />
              <p className="text-sm md:text-base">
                Business India Complex, Uday Park, Adjacent to August Kranti Marg, Behind South Ex-II 110049 Delhi, India
              </p>
            </div>

            <div className="flex items-center space-x-4 justify-center lg:justify-start">
              <FaPhone className="text-xl rotate-[80deg]" />
              <a
                href="tel:+919810409943"
                className="hover:text-gray-300 text-sm md:text-base"
              >
                +91-9810409943
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-50">
        <p className="absolute bg-blue text-white text-sm md:text-xl font-bricolage text-center w-full font-bold p-4 md:p-6">
          © 2024 – iMET Global | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
