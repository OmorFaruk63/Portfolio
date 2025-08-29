"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from "./Preloader";

type AOSProps = {
  children: React.ReactNode; // Children components to be wrapped with AOS
};

const AOSInitializer: React.FC<AOSProps> = ({ children }) => {
  const [isMount, setIsMount] = useState(false);
  useEffect(() => {
    setIsMount(true);
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      once: true, // Ensures animation happens only once
    });
  }, []);
  if (!isMount) {
    return <Preloader />;
  } else {
    return <>{children}</>;
  }
};

export default AOSInitializer;
