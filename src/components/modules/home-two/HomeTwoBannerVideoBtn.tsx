"use client";

import FsLightbox from "fslightbox-react";
import Link from "next/link";
import React, { useState } from "react";

const HomeTwoBannerVideoBtn: React.FC = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[process.env.NEXT_PUBLIC_YOUTUBE_URL || ""]}
      />
      <Link
        className="circle-playbtn stretched-link"
        href="#"
        onClick={() => setToggler(!toggler)}
      >
        <span className="play-icon">
          <i className="fa-solid fa-play" />
        </span>
      </Link>
    </>
  );
};

export default HomeTwoBannerVideoBtn;
