import { TextMarkJSON } from "@/lib/types/articles";
import { ReactNode } from "react";

interface TextMarksWrapperProps {
  marks?: TextMarkJSON[];
  children: ReactNode;
}

export function TextMarksWrapper({ marks, children }: TextMarksWrapperProps) {
  if (!marks?.length) return <>{children}</>;

  return (
    <>
      {marks.reduceRight((acc, mark) => {
        switch (mark.type) {
          case "bold":
            return <b className="font-bold">{acc}</b>;
          case "italic":
            return <i className="italic">{acc}</i>;
          case "underline":
            return <u className="underline">{acc}</u>;
          default:
            return acc;
        }
      }, children)}
    </>
  );
}
