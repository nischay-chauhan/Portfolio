import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="col-span-7">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello, I'm Nischay
          </h1>
          <p className="text-gray-400 text-lg lg:text-xl">
            I'm a full stack developer based in India. I specialize in building
            (and occasionally designing) exceptional websites.
          </p>
        </div>
        <div className="col-span-5">
        <div className="rounded-full bg-[#181818] w-[500px] h-[500px] relative ">
          <Image
            src="/image/profile.png"
            alt="hero-image"
            width={300}
            height={300}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
