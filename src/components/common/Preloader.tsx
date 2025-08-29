import Image from "next/image";
import React from "react";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__inner">
        <div className="preloader__loading" />
        <div className="preloader__thumb">
          <Image
            width={122}
            height={122}
            src="/images/logo/preloader.png"
            alt="preloader"
            priority 
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
