import { ParagraphJSON } from "@/lib/types/articles";
import React from "react";
import { ParagraphItemRenderer } from "./ParagraphItemRenderer";

interface ParagraphRendererProps {
  paragraph: ParagraphJSON;
  setExpanded: (value: boolean) => void;
  isInsideTable?: boolean;
}

export function ParagraphRenderer({
  paragraph,
  setExpanded,
  isInsideTable = false,
}: ParagraphRendererProps) {
  if (!paragraph.content || paragraph.content.length === 0) {
    return <p className="min-h-[1em]">&nbsp;</p>;
  }

  const paragraphClasses = isInsideTable
    ? "text-sm leading-snug"
    : "my-3 text-sm leading-relaxed";

  return (
    <p className={paragraphClasses}>
      {paragraph.content.map((item, index) => (
        <React.Fragment key={index}>
          <ParagraphItemRenderer item={item} setExpanded={setExpanded} />
        </React.Fragment>
      ))}
    </p>
  );
}
