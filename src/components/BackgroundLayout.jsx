"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import useWindowSize from "@/hooks/WindowSize";

const BackgroundLayout = ({ children }) => {
  const pathname = usePathname();
  const { width } = useWindowSize();
  const [backgroundImage, setBackgroundImage] = useState(
    "/home/background-home-desktop.jpg"
  );

  useEffect(() => {
    const updateBackgroundImage = () => {
      const isSmallScreen = width < 640; // Tailwind's sm breakpoint is 640px

      if (pathname === "/home") {
        setBackgroundImage(
          isSmallScreen
            ? "/home/background-home-mobile.jpg"
            : "/home/background-home-desktop.jpg"
        );
      } else if (pathname.startsWith("/destination")) {
        setBackgroundImage(
          isSmallScreen
            ? "/destination/background-destination-mobile.jpg"
            : "/destination/background-destination-desktop.jpg"
        );
      } else if (pathname.startsWith("/crew")) {
        setBackgroundImage(
          isSmallScreen
            ? "/crew/background-crew-mobile.jpg"
            : "/crew/background-crew-desktop.jpg"
        );
      } else if (pathname.startsWith("/technology")) {
        setBackgroundImage(
          isSmallScreen
            ? "/technology/background-technology-mobile.jpg"
            : "/technology/background-technology-desktop.jpg"
        );
      } else {
        setBackgroundImage(
          isSmallScreen
            ? "/home/background-home-mobile.jpg"
            : "/home/background-home-desktop.jpg"
        );
      }
    };

    updateBackgroundImage(); // Set the initial background image
  }, [pathname, width]);

  const styling = {
    backgroundImage: `url(${backgroundImage})`,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return <div style={styling}>{children}</div>;
};

export default BackgroundLayout;
