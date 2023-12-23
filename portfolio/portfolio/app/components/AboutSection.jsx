"use client";
import React, { useTransition } from "react";
import Image from "next/image";
import { useState } from "react";
import TabButton from "./TabButton";
import SkillsList from "./SkillsList";

const TAB_DATA = [
    {
        id: "Skills",
        title: "Skills",
        content : <SkillsList />

    },
    {
        id: "Education",
        title: "Education",
        content : (
            <ul className="list-disc pl-2">
                <li>BE Information Technology </li>
                <li>University Insitute of Technology , Chandigarh</li>
                <li>2022-2026</li>
            </ul>
        )
    },
    {   
        id : "Certification",
        title : "Certification",
        content : (
            <ul className="list-disc pl-2">
            <li>Lorem ipsum dolor sit amet, consectetur </li>
            <li>Pellentesque habitant morbi tristique senecs.</li>
            </ul>
        )
    },
    
]

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
          <style jsx>{`
        @keyframes floatUpDown {
          0%, 100% {
            transform: translateY(5px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .floating-image {
          animation: floatUpDown 3s ease-in-out infinite; 
        }
      `}</style>

      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl-px-16">
      <div className="md:h-80 overflow-hidden relative floating-image">
          <Image src={"/image/about.jpg"} width={500} height={500} alt="Pc-pic" />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
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
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
