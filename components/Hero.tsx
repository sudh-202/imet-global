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
    <div className="bg-[#C5E2D5] flex justify-center py-16 items-center flex-col px-6  pb-40">
      <section className="w-full">
        <div className="container mx-auto px-4">
          <div className="flex justify-center lg:gap-36 mb-8 flex-col md:flex-row items-center" data-aos="fade-right">
            <div className="border-[1px] border-black  w-[20%]" />
            <div className="text-center md:text-left w-full md:w-[60%] lg:w-[40%] font-bricolage_grotesque">
              <h2 className="text-sm text-blue font-bold uppercase mb-4">
                Our Story
              </h2>
              <h1 className="text-3xl md:text-5xl font-bold mb-8 font-bricolage">
                Our Story of Innovation and Trust
              </h1>
            </div>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {storyData.map((story) => (
              <div
                key={story.id}
                className="relative shadow-white shadow-lg transition duration-300 ease-in-out"
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

          <div className="mt-12 flex flex-col-reverse md:flex-row justify-between items-center">
            <p className="w-full md:w-[50%] text-center md:text-left text-[16px] md:text-[18px] font-semibold mb-6 md:mb-0" data-aos="fade-left">
              Aliquet nec mauris tortor at sed erat. Ut faucibus habitant risus
              morbi quis egestas etiam lorem. Feugiat lorem aliquam eget mattis
              cursus. Turpis massa arcu sagittis interdum. Integer molestie.
            </p>
            <button className="bg-black text-white font-bold font-bricolage text-[18px] md:text-[26px] py-3 px-6 rounded-full hover:bg-blue transition duration-300" data-aos="fade-right">
              Know More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
