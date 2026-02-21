"use client";

import { useEffect } from "react";
import Script from "next/script";

export function MathJaxProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if ((window as any).MathJax?.version) return;

    (window as any).MathJax = {
      tex: {
        loader: {
          load: ["[tex]/color", "[tex]/require", "[tex]/ams"],
        },
        packages: ["base", "ams", "noerrors", "noundefined"],
        inlineMath: [
          ["$", "$"],
          ["\\(", "\\)"],
        ],
        displayMath: [
          ["$$", "$$"],
          ["\\[", "\\]"],
        ],
        tags: "ams",
        enableLabels: true,
        processEscapes: true, // экранирование
        processEnvironments: true, // бегины энды в техе
      },
      chtml: {
        scale: 1.0,
      },
      svg: {
        // из док.
        fontCache: "global",
      },
      options: {
        skipHtmlTags: [
          "script",
          "noscript",
          "style",
          "textarea",
          "pre",
          "code",
        ],
        ignoreHtmlClass: "tex2jax_ignore",
        processHtmlClass: "tex2jax_process",
      },
      startup: {
        ready: () => {
          (window as any).MathJax.startup.defaultReady();
        },
      },
    };
  }, []);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
        strategy="afterInteractive"
        integrity="sha384-Wuix6BuhrWbjDBs24bXrjf4ZQ5aFeFWBuKkFekO2t8xFU0iNaLQfp2K6/1Nxveei"
        crossOrigin="anonymous"
      />
      {children}
    </>
  );
}
