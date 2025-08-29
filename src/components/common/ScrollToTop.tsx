"use client";

import React, { useEffect, useRef, useState } from "react";

const ScrollToTop: React.FC = () => {
  const scrollRef = useRef<HTMLAnchorElement | null>(null);
  const [visible, setVisible] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle click scroll
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#"
      ref={scrollRef}
      onClick={handleClick}
      className={`scrollToTop scrollToTop--style1 ${visible ? "visible" : ""}`}
      style={{
        bottom: visible ? "7%" : "-30%",
        opacity: visible ? 1 : 0,
        transition: "all 0.5s ease",
      }}
    >
      <i className="fa-solid fa-arrow-up-from-bracket" />
    </a>
  );
};

export default ScrollToTop;
