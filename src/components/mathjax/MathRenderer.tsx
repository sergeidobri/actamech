import { useMemo } from "react";
import katex from "katex";

interface MathRendererProps {
  latex: string;
  block?: boolean;
  className?: string;
}

export default function MathRenderer({
  latex,
  block = false,
  className = "",
}: MathRendererProps) {
  const html = useMemo(() => {
    if (!latex) return "";
    try {
      return katex.renderToString(latex, {
        throwOnError: false,
        displayMode: block,
        strict: false,
      });
    } catch (error) {
      console.error("KaTeX error:", error);
      return `<span class="text-red-500" title="Ошибка рендеринга формулы">${latex}</span>`;
    }
  }, [latex, block]);

  const Component = block ? "div" : "span";

  const containerClasses = block
    ? `my-4 overflow-x-auto ${className}`
    : `inline-block ${className}`;

  return (
    <Component
      className={containerClasses}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
