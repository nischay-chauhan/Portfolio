"use client";
import React, { useTransition } from "react";
import Image from "next/image";
import { useState } from "react";
import TabButton from "./TabButton";

const AboutSection = () => {
  const [tab, setTab] = useState("Skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl-px-16">
        <Image src={"/image/about.jpg"} width={500} height={500} alt="Pc-pic" />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Full stack web developer with a passion for creating
            interactive and responsive web applications that deliver exceptional
            user experiences. I have experience working with JavaScript, React,
            Next.js, Node.js, Express, SQL, HTML, CSS, Git. I am a quick
            learner and always looking to expand my knowledge and skill set. I am a
            team player and excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("Skills")}
              active={tab === "Skills"}
            >
              Skills
            </TabButton>
            
            <TabButton
              selectTab={() => handleTabChange("Education")}
              active={tab === "Education"}
            >
              Education
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("Certification")}
              active={tab === "Certification"}
            >
              Certification
            </TabButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
