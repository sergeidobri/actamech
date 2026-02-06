"use client";

import { useFillerWidth } from "@/lib/hooks/useFillerWidth";

export default function PageFiller() {
  const fillerWidth = useFillerWidth();

  return (
    <div
      id="page-filler"
      className="bg-accent h-0.5 fixed top-0 left-0 z-30"
      style={{
        width: `${fillerWidth}%`,
      }}
    ></div>
  );
}
