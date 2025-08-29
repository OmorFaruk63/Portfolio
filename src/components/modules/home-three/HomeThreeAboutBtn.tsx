"use client";

import { useState } from "react";
import CustomLightbox from "@/components/common/CustomLightbox";

const HomeThreeAboutBtn = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <CustomLightbox toggler={toggler} />
      <span className="play-btn" onClick={() => setToggler(!toggler)}>
        <span className="play-icon play-icon--style2">
          <i className="fa-solid fa-play" />
        </span>{" "}
        Intro Video
      </span>
    </>
  );
};

export default HomeThreeAboutBtn;
