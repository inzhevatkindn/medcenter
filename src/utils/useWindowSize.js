import { useState, useEffect, useMemo } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const screens = useMemo(
    () => ({
      isMobile: windowSize.width
        ? windowSize.width < 768
        : window.innerWidth < 768,
    }),
    [windowSize]
  );

  return { ...windowSize, ...screens };
};
