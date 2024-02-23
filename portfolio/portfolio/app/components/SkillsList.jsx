import React from "react";
import { FaReact, FaHtml5, FaCss3, FaJs, FaNodeJs, FaGit, FaGithub, FaPython } from "react-icons/fa";

const SkillsList = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <p style={{ background: "#4A5568" }} className="inline-flex items-center px-2 py-1 rounded-full text-sm text-white">
        <FaReact /> React
      </p>
      <p style={{ background: "#4A5568" }} className="inline-flex items-center px-2 py-1 rounded-full text-sm text-white">
        <FaHtml5 /> HTML5
      </p>
      <p style={{ background: "#4A5568" }} className="inline-flex items-center px-2 py-1 rounded-full text-sm text-white">
        <FaCss3 /> CSS3
      </p>
      <p style={{ background: "#4A5568" }} className="inline-flex items-center px-2 py-1 rounded-full text-sm text-white">
        <FaJs /> JavaScript
      </p>
      <p style={{ background: "#4A5568" }} className="inline-flex items-center px-2 py-1 rounded-full text-sm text-white">
        <FaNodeJs /> Node.js
      </p>
      <p style={{ background: "#4A5568" }} className="inline-flex items-center px-2 py-1 rounded-full text-sm text-white">
        <FaGit /> Git
      </p>
      <p style={{ background: "#4A5568" }} className="inline-flex items-center px-2 py-1 rounded-full text-sm text-white">
        <FaGithub /> github
      </p>
      <p style={{ background: "#4A5568" }} className="inline-flex items-center px-2 py-1 rounded-full text-sm text-white">
        <FaPython /> Django
      </p>
      <p style={{ background: "#4A5568" }} className="inline-flex items-center px-2 py-1 rounded-full text-sm text-white">
      
      </p>
    </div>
  );
};

export default SkillsList;
