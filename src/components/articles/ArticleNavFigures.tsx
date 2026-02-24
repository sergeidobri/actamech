"use client";

import { IFigure, TArticleContent } from "@/lib/types/articles";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ArticleNavFiguresProps {
  content: TArticleContent[];
  handleScroll: (id: string) => void;
}

export default function ArticleNavFigures({
  content,
  handleScroll,
}: ArticleNavFiguresProps) {
  const [expanded, setExpanded] = useState(false);
  const limit = 6;
  const findAllFigures = (content: TArticleContent[]) => {
    let figures: IFigure[] = [];
    content.forEach((element) => {
      if (element.type == "figure") {
        figures.push(element);
      } else if (element.type == "section")
        figures.push(...findAllFigures(element.content));
    });
    return figures;
  };
  let figures: IFigure[] = findAllFigures(content);

  return (
    <div className="border-b-border-primary border-b-1 pb-4 mt-8">
      <h3 className="text-xl font-semibold">Figures ({figures.length})</h3>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {figures.map(
          (figure, i) =>
            (i < limit || expanded) && (
              <Image
                width={200}
                height={200}
                key={`${figure.title}-${figure.image}`}
                className="cursor-pointer"
                onClick={() => handleScroll(`figure-${figure.number}`)}
                src={figure.image}
                alt=""
              />
            ),
        )}
      </div>
      {figures.length > limit && (
        <button
          className="cursor-pointer mt-4 text-primary-text/40 font-semibold flex flex-row items-center"
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          {expanded
            ? `Hide figures`
            : `Show ${figures.length - limit} more figures`}
          <ChevronDown
            size={15}
            className={`${expanded ? "rotate-180" : ""} transition-transform`}
          />
        </button>
      )}
    </div>
  );
}
