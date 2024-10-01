"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { storyData } from "../constants";
import Image from "next/image";

function Hero() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

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
      <div className="bg-[#C5E2D5] flex justify-center py-16 items-center flex-col md:px-10  md:pb-40">
        <section className="w-full">
          <div className="container mx-auto px-6">
            <div
              className="flex justify-left lg:gap-10 mb-8 flex-col md:flex-row md:items-center"
              data-aos="fade-right"
            >
              <div className="border-[1px] border-black  w-[28%]" />
              <div className="text-left w-full md:w-[60%] lg:w-[40%] font-bricolage_grotesque">
                <h2 className="text-sm text-blue font-bold uppercase mb-4 pt-4 md:pt-0">
                  Our Story
                </h2>
                <h1 className="text-5xl font-bold mb-8 font-bricolage">
                  Our Story of Innovation and Trust
                </h1>
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
                <span className="font-bold"> innovation, Mentorship, Entrepreneurship and Talent Building </span>
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
      <div className="bg-main md:px-32 px-6 md:py-28 py-12 flex justify-evenly md:gap-20 gap-10 flex-col md:flex-row">
        <div className="">
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
            width={100}
            height={100}
            className="md:-mt-[100px] -mt-[55px] md:-ml-[120px] -ml-[40px] md:w-[950px] w-[750px]"
          />
          <p className=" md:font-bold md:text-3xl text-3xl md:-mt-6 -mt-0">
            For your formal Education
          </p>
        </div>
        <div className="">
          <Image src="/images/girl.webp" alt="girl" width={320} height={100} />
        </div>
      </div>
    </main>
  );
}

export default Hero;
