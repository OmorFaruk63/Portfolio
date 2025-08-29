import FsLightbox from "fslightbox-react";
import React from "react";
import ReactDOM from "react-dom";

interface CustomLightboxProps {
  toggler: boolean;
}

const CustomLightbox: React.FC<CustomLightboxProps> = ({ toggler }) => {
  const source = process.env.NEXT_PUBLIC_YOUTUBE_URL || "";
  if (!source || typeof window === "undefined") return null;

  return ReactDOM.createPortal(
    <FsLightbox toggler={toggler} sources={[source]} />,
    document.body
  );
};

export default CustomLightbox;
