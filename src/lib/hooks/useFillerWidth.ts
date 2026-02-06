import { useEffect, useState } from "react";

export function useFillerWidth(): number {
  const [fillerWidth, setFillerWidth] = useState(0);

  useEffect(() => {
    const updateFillerWidth = () => {
      const scrollableHeight = document.body.clientHeight - window.innerHeight;

      let percent = 0;

      if (scrollableHeight > 0) {
        percent = (scrollY / scrollableHeight) * 100;
        percent = Math.max(0, Math.min(100, percent));
      }

      setFillerWidth(percent);
    };
    updateFillerWidth();

    window.addEventListener("scroll", updateFillerWidth, { passive: true });
    window.addEventListener("resize", updateFillerWidth, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateFillerWidth);
      window.removeEventListener("resize", updateFillerWidth);
    };
  }, []);

  return fillerWidth;
}
