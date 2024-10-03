"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { storyData, testimonilsData, cardsData, sectionData } from "../constants";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

function Hero() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const { stats, sections } = sectionData;

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);

  const handleImageClick = (id: number) => {
    setActiveVideo((prevId) => (prevId === id ? null : id)); // Toggle video on click
  };

  const handleCloseVideo = () => {
    setActiveVideo(null); // Close video and return to image
  };

  return (
    <main className=" bg-blue">
      {/* Banner Page */}
      <div className="bg-[#C5E2D5] flex justify-center py-16 items-center flex-col md:px-10  md:pb-40">
        <section className="w-full">
          <div className="max-w-7xl mx-auto px-6">
            <div
              className="flex justify-left lg:gap-10 mb-8 flex-col md:flex-row md:items-center"
              data-aos="fade-right"
            >
              <div className="border-[1px] border-black  w-[28%]" />
              <div className="text-left w-full md:w-[60%] lg:w-[40%] font-bricolage_grotesque">
                <h2 className="text-sm text-blue font-bold uppercase mb-4 pt-4 md:pt-0">
                  Our Story
                </h2>
                <h2 className="text-5xl font-bold mb-8 font-bricolage">
                  Our Story of Innovation and Trust
                </h2>
              </div>
            </div>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {storyData.map((story) => (
                <div
                  key={story.id}
                  className="relative  shadow-lg transition duration-300 ease-in-out"
                  data-aos="fade-left"
                >
                  {activeVideo === story.id ? (
                    <div className="relative w-full h-full">
                      <video
                        src={story.videoSrc}
                        controls
                        autoPlay
                        className="w-full h-full rounded-lg"
                      />
                      {/* Close button */}
                      <button
                        onClick={handleCloseVideo}
                        className="absolute top-3 right-3 bg-black text-white rounded-full p-2 text-lg z-10 hover:bg-gray-700"
                      >
                        X
                      </button>
                    </div>
                  ) : (
                    <Image
                      src={story.imageSrc}
                      alt={`Story ${story.id}`}
                      width={500}
                      height={300}
                      className="rounded-lg cursor-pointer w-full h-auto transition-transform duration-300 hover:scale-105"
                      onClick={() => handleImageClick(story.id)}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
              <p
                className="w-full md:w-[50%] text-left text-[10px] md:text-[18px] font-semibold mb-6 md:mb-0"
                data-aos="fade-left"
              >
                iMET is a global community to develop, promote and encourage
                <span className="font-bold">
                  {" "}
                  innovation, Mentorship, Entrepreneurship and Talent Building{" "}
                </span>
                with Practitioner’s or Doer’s perspective.
              </p>
              <button
                className="bg-black text-white font-bold font-bricolage text-[10px] md:text-[26px] py-3 px-6 rounded-full hover:bg-blue transition duration-300 flex "
                data-aos="fade-right"
              >
                Know More
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Second Section */}
      <div className="bg-main md:px-32 px-6 md:py-28 py-12 f">
        <div className="max-w-7xl mx-auto flex justify-center md:gap-20 2xl:gap-80 gap-10 flex-col md:flex-row">
          <div className="" data-aos="fade-right">
            <h2 className="text-blue md:text-7xl text-3xl font-semibold font-bricolage md:mb-6 tracking-wider">
              New Age SKills Driven
            </h2>
            <h2 className="md:text-7xl text-3xl font-normal font-bricolage mb-3 tracking-wide">
              B- School only in{" "}
            </h2>
            <h2 className="text-blue md:text-7xl text-3xl font-normal font-bricolage mb-3 tracking-wide">
              Digital Education
            </h2>
            <Image
              src="/images/circle.webp"
              alt="girl"
              width={950}
              height={100}
              className="md:-mt-[100px] -mt-[55px] md:-ml-[120px] -ml-[40px] md:w-[950px] w-[750px]"
            />
            <p className=" md:font-bold md:text-3xl text-3xl md:-mt-6 -mt-0">
              For your formal Education
            </p>
          </div>
          <div className="" data-aos="fade-left">
            <Image src="/images/girl.webp" alt="girl" width={320} height={100} />
          </div>
        </div>
      </div>

      {/* Third Section */}
      <main className=" bg-main">
        <div className="bg-blue rounded-3xl  text-5xl px-6 md:px-24 py-24">
          <div className="max-w-7xl mx-auto">
            <div
              className="flex justify-left lg:gap-10 mb-8 flex-col md:flex-row md:items-center"
              data-aos="fade-right"
            >
              <div className="border-[1px] border-black  w-[28%]" />
              <div className="text-left w-full md:w-[60%] lg:w-[40%] font-bricolage_grotesque" data-aos="fade-down">
                <h2 className="text-white md:text-7xl text-5xl font-bold md:mb-4 font-bricolage md:mt-0 mt-4">
                  Why
                </h2>
                <h2 className="md:text-7xl text-5xl font-bold mb-8 font-bricolage">
                  iMet Global
                </h2>
                <Image
                  src="/images/blackcircle.webp"
                  alt="girl"
                  width={950}
                  height={100}
                  className="md:-mt-[130px] -mt-[85px] md:-ml-[90px] -ml-[40px] md:w-[950px] w-[750px]"
                />
              </div>
            </div>
            {/* Cards Section */}
            <div className="flex flex-col lg:flex-row justify-center items-center w-full space-y-8 lg:space-y-0 lg:space-x-8" data-aos="fade-left">
              {cardsData.map((card, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-lg transition-transform hover:scale-105 w-full lg:w-1/3 flex flex-col items-center justify-start h-[400px] ${isEven
                        ? "bg-black text-white shadow-2xl shadow-white"
                        : "bg-white text-black shadow-2xl shadow-black"
                      }`}
                  >
                    {/* Image */}
                    <div className="flex justify-center mb-4">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={100}
                        height={100}
                        className="rounded-full -mt-[50px]"
                      />
                    </div>
                    {/* Title */}
                    <h3
                      className={`text-2xl font-bold text-center font-bricolage mb-4 ${isEven ? "text-white" : "text-black"
                        }`}
                    >
                      {card.title}
                    </h3>
                    {/* Description */}
                    <p
                      className={`text-left text-lg ${isEven ? "text-gray-300" : "text-gray-700"
                        }`}
                    >
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Fourth Section */}
      <section className="bg-main py-12 md:py-24 md:px-36 flex flex-col justify-center items-center">
        <div className="max-w-7xl mx-auto">
          {/* Stats Section */}
          <div
            className="flex flex-wrap justify-between mb-12 text-center space-y-4 lg:space-y-0 lg:text-left w-full px-4 sm:px-6 md:px-0"
            data-aos="fade-down"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0"
              >
                <h3
                  className="text-5xl sm:text-6xl md:text-7xl font-semibold font-bricolage"
                  style={{ color: stat.color }}
                >
                  {stat.count}
                </h3>
                <p className="text-lg font-semibold text-gray-700">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Sections */}
          <div className="space-y-12 w-full px-4 sm:px-6 md:px-0">
            {sections.map((section, index) => (
              <div
                key={index}
                className="flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-8 space-y-8 lg:space-y-0"
              >
                {/* Title (Left) */}
                <div
                  className="w-full lg:w-1/3 lg:text-left"
                  data-aos="fade-right"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-blue font-bricolage">
                    {section.title}
                  </h3>
                </div>

                {/* Image (Center) */}
                <div
                  className="w-full lg:w-1/3 flex justify-center"
                  data-aos="fade-up"
                >
                  <Image
                    src={section.image}
                    alt={section.title}
                    className="translate-y-10"
                    width={350}
                    height={100}
                  />
                </div>

                {/* Description (Right) */}
                <div
                  className="w-full lg:w-1/3 lg:text-left"
                  data-aos="fade-left"
                >
                  <p className="mt-4 text-black font-semibold">
                    {section.description}
                  </p>
                  <a
                    href="#"
                    className="inline-block mt-4 text-red-500 font-semibold hover:underline hover:text-red"
                  >
                    KNOW MORE
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-[#FFF4E4] py-32">
  <div className="container mx-auto max-w-7xl">
    <h2 className="text-4xl md:text-7xl font-medium text-center mb-8 font-bricolage">
      Hear <span className="text-[#00B4DB]">Our Learners</span>
    </h2>
    <div className="flex flex-wrap justify-center gap-6">
      {testimonilsData.map((story, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md text-center w-full md:w-1/3" // Adjust width for responsive behavior
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-[#00B4DB] rounded-full"></div>
          </div>
          <h3 className="text-lg font-semibold">{story.name}, {story.role}</h3>
          <div className="flex justify-center text-[#FBBF24] mb-4">
            {[...Array(story.rating)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <p className="text-gray-600">{story.feedback}</p>
        </div>
      ))}
    </div>
    {/* Add the logos section */}
    <div className="mt-10 flex flex-wrap justify-center gap-8">
      {/* Replace the divs below with actual img tags or logos */}
      <div className="w-24">
        <img src="/path-to-logo-1.png" alt="Logo 1" />
      </div>
      <div className="w-24">
        <img src="/path-to-logo-2.png" alt="Logo 2" />
      </div>
      <div className="w-24">
        <img src="/path-to-logo-3.png" alt="Logo 3" />
      </div>
      {/* Add more logos as needed */}
    </div>
  </div>
</section>

    </main>
  );
}

export default Hero;
