"use client";

import React, { useState, useEffect } from "react";
import Mobile from "components/Mobile/Mobile.index";
import PC from "components/PC/PC.index";
import Tablet from "components/Mobile/tablet.index";
import Navbar from "components/Navbar/NavbarIndex";


function useDeviceType() {
  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceType('mobile');
      } else if (width >= 768 && width <= 1370) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceType;
}

export default function Home() {
  const deviceType = useDeviceType();

  const renderComponent = () => {
    switch (deviceType) {
      case 'mobile':
        return <Mobile />;
      case 'tablet':
        return <Tablet />;
      case 'desktop':
      default:
        return <PC />;
    }
  };

  return (
    <>
      <Navbar />
      {renderComponent()}
    </>
  );
}