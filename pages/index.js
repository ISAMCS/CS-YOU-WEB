import React, { useState, useEffect } from "react";
import Mobile from "components/Index/Mobile.index";
import PC from "components/Index/PC.index";
import Tablet from "components/Index/Tablet.index";
import Navbar from "components/Navbar/NavbarIndex";


function useDeviceType() {
  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 660) {
        setDeviceType('mobile');
      } else if (width >= 660 && width <= 1380) {
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