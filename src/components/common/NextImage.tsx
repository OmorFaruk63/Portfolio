"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type NextImageProps = {
  src: string;
  fallbackSrc?: string;
  width: number;
  height: number;
  alt?: string;
  className?: string;
  priority?: boolean;
};

const normalizeSrc = (src?: string): string => {
  if (!src) return "/placeholder.png";
  if (src.startsWith("http") || src.startsWith("/")) return src;
  return "/" + src;
};

const NextImage: React.FC<NextImageProps> = ({
  src,
  fallbackSrc = "/placeholder.png",
  width,
  height,
  alt = "image",
  className = "",
  priority = false,
}) => {
  const [imgSrc, setImgSrc] = useState(normalizeSrc(src));

  useEffect(() => {
    setImgSrc(normalizeSrc(src));
  }, [src]);

  const handleError = () => {
    setImgSrc(normalizeSrc(fallbackSrc));
  };

  return (
    <Image
      src={imgSrc}
      width={width}
      height={height}
      alt={alt}
      className={className}
      onError={handleError}
      priority={priority}
    />
  );
};

export default NextImage;
