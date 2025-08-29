"use client";

import React, { useEffect, useState, useRef } from "react";

type CustomCountUpProps = {
  end: number;
  start: number;
  delay?: number;
  duration?: number;
  className?: string;
};

const CustomCountUp: React.FC<CustomCountUpProps> = ({
  end,
  start,
  delay = 0,
  duration = 2,
  className = "",
}) => {
  const [count, setCount] = useState<number>(start);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const countRef = useRef<HTMLSpanElement | null>(null);

  // const formatNumber = (number: number): string => {
  //   if (number < 1000) {
  //     return number.toString();
  //   } else if (number >= 1000 && number < 1000000) {
  //     return (number / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  //   } else {
  //     return (number / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  //   }
  // };

  useEffect(() => {
    const currentRef = countRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let requestId: number;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;

      if (elapsed >= delay) {
        const progress = Math.min((elapsed - delay) / duration, 1);
        const currentCount = Math.floor(start + progress * (end - start));
        setCount(currentCount);

        if (progress < 1) {
          requestId = requestAnimationFrame(animateCount);
        }
      } else {
        requestId = requestAnimationFrame(animateCount);
      }
    };

    requestId = requestAnimationFrame(animateCount);

    return () => cancelAnimationFrame(requestId);
  }, [isVisible, start, end, duration, delay]);

  return (
    <span className={className} ref={countRef}>
      {/* {formatNumber(count)} */}
      {count}
    </span>
  );
};

export default CustomCountUp;
