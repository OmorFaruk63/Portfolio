"use client";
import CustomLightbox from "@/components/common/CustomLightbox";
import React, { useState } from "react";

const BannerSectionBtn: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <CustomLightbox toggler={toggler} />
      <span className="play-btn" onClick={() => setToggler(!toggler)}>
        <span className="play-icon">
          <i className="fa-solid fa-play" />
        </span>{" "}
        Intro Video
      </span>
    </>
  );
};

export default BannerSectionBtn;
