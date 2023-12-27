"use client"
import React from "react";
import ProjectCard from "./ProjectCard";
import { useRef } from "react";
import {motion , useInView}  from "framer-motion"

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "It's my Portfolio made by using nextjs and tailwindcss",
    image: "/image/project/project8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/nischay-chauhan/Portfolio",
  },
  {
    id: 2,
    title: "Blog Application",
    description: "Blog application made using Django and Bootstrap",
    image: "/image/project/project5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/nischay-chauhan/django-projects/tree/master",
  },
  {
    id: 3,
    title: "User Authentication Api",
    description: "It is an Api made using Node js for user Authentication",
    image: "/image/project/project4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/nischay-chauhan/express-project",
  },
  {
    id: 4,
    title: "CRM Application",
    description: "It is a CRM application made using Django",
    image: "/image/project/project1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/nischay-chauhan/Django-crm/tree/main",
  },
  {
    id: 5,
    title: "Todo App",
    description: "It is a Todo application made using React",
    image: "/image/project/project7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/nischay-chauhan/TODOAPP",
  },
  {
    id: 6,
    title: "Car Hub Website",
    description:
      "Demo website where a user can search for a car and then rent it ",
    image: "/image/project/project2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/nischay-chauhan/car-showcase",
  },
];


const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }

}

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="container mx-auto px-4 py-12">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <motion.li variants={cardVariants} initial="offscreen" whileInView="onscreen">
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
          />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectSection;
