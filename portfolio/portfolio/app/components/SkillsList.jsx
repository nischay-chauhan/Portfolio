// SkillsList.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5, faCss3, faJs, faNode, faGit, faDatabase, faPython } from "@fortawesome/free-brands-svg-icons";

const SkillsList = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <p style={{ background: "#4A5568" }} className="inline-flex items-center px-2 py-1 rounded-full text-sm text-white">
        <FontAwesomeIcon icon={faReact} /> React
      </p>
      <p style={{ background: "#4A5568" }} className="inline-flex items-center px-2 py-1 rounded-full text-sm text-white">
        <FontAwesomeIcon icon={faHtml5} /> HTML5
      </p>
      <p style={{ background: "#4A5568" }} className="inline-flex items-center px-2 py-1 rounded-full text-sm text-white">
        <FontAwesomeIcon icon={faCss3} /> CSS3
      </p>
      <p style={{ background: "#4A5568" }} className="inline-flex items-center px-2 py-1 rounded-full text-sm text-white">
        <FontAwesomeIcon icon={faJs} /> JavaScript
      </p>
      <p style={{ background: "#4A5568" }} className="inline-flex items-center px-2 py-1 rounded-full text-sm text-white">
        <FontAwesomeIcon icon={faNode} /> Node.js
      </p>
      <p style={{ background: "#4A5568" }} className="inline-flex items-center px-2 py-1 rounded-full text-sm text-white">
        <FontAwesomeIcon icon={faGit} /> Git
      </p>
      <p style={{ background: "#4A5568" }} className="inline-flex items-center px-2 py-1 rounded-full text-sm text-white">
        <FontAwesomeIcon icon={faDatabase} /> MongoDB, SQL
      </p>
      <p style={{ background: "#4A5568" }} className="inline-flex items-center px-2 py-1 rounded-full text-sm text-white">
        <FontAwesomeIcon icon={faPython} /> Django
      </p>
    </div>
  );
};

export default SkillsList;
