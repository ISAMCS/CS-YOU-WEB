import Navbar from "components/Navbar/NavbarCrop";
import React, { useState, useEffect } from "react";
import PC from "components/PC/PC.agri.js";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}


export default function Home() {
  const isMobile = useIsMobile();

  return (
    <>
      <Navbar />
      <PC />
    </>
  );
}