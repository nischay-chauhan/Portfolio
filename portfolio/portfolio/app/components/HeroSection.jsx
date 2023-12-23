"use client"
import React from "react";
import Image from "next/image";

import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 sm:text-5xl text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
      sequence={[
        'Nischay Chauhan',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Devloper',
        1500,
        'Software Developer',
        1500,
        'Full Stack Developer',
        1500
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
          </h1>
          <p className="text-gray-400 text-base sm:text-lg mb-4 lg:text-xl">
            I'm a full stack developer based in India. I specialize in building
            (and occasionally designing) exceptional websites.
          </p>
          <div>
            <button className="w-full sm:w-fit btn px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-teal-400 via-blue-500 to-purple-500 hover:bg-slate-200 text-white">
              Hire me
            </button>

            <button className="w-full sm:w-fit btn px-1 py-2 rounded-full  bg-gradient-to-br from-teal-400 via-blue-500 to-purple-500 text-white mt-3">
              <span className="block px-4 py-1 rounded-full bg-transparent">
                Download Resume
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full overflow-hidden bg-[#181818] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative hover:shadow-lg hover:brightness-110 ">
            <Image
              src="/image/profile.png"
              alt="hero-image"
              width={300}
              height={300}
              className="absolute z-1 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
