"use client"
import React, { useState, useEffect } from "react";

const BlobCursor = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoordinates({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: " linear-gradient(to right, aquamarine, mediumpurple);",
          opacity: 0.5,
          blur : "15px",
          position: "absolute",
          transform: "translate(-50%, -50%)",
          top: coordinates.y,
          left: coordinates.x,
        }}
      ></div>
    </div>
  );
};

export default BlobCursor;
