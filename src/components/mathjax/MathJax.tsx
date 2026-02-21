"use client";

import { useEffect, useRef } from "react";

export function MathJax({
  html,
  className = "",
}: {
  html: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mathjax = (window as any).MathJax;

    if (!mathjax || !containerRef.current) return;

    mathjax.typesetClear([containerRef.current]);

    mathjax.typesetPromise([containerRef.current]).catch((err: Error) => {
      console.error("Ошибка обработки формул MathJax:", err);
    });
  }, [html]);

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: html }}
      className={`mathjax-content tex2jax_process ${className}`}
    />
  );
}
