"use client";

import { ITable, TArticleContent } from "@/lib/types/articles";
import { scrollToId } from "@/lib/utils/navigation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const ArticleNavTables = ({ content }: { content: TArticleContent[] }) => {
  const [expanded, setExpanded] = useState(false);
  const findAllTables = (content: TArticleContent[]) => {
    let tables: ITable[] = [];
    content.forEach((element) => {
      if (element.type == "table") {
        tables.push(element);
      } else if (element.type == "section")
        tables.push(...findAllTables(element.content));
    });
    return tables;
  };
  const limit = 4;
  let tables: ITable[] = findAllTables(content);
  return (
    <div className="border-b-border-primary border-b-1 pb-4">
      <h3 className="text-xl font-semibold mt-8">Tables ({tables.length})</h3>
      <ul className="flex flex-col gap-2 mt-4">
        {tables.map(
          (table, i) =>
            (i < limit || expanded) && (
              <li key={table.title}>
                <button
                  onClick={() => scrollToId(`table-${table.number}`)}
                  className="flex flex-row items-center font-semibold gap-1 cursor-pointer"
                >
                  Table {i + 1}
                </button>
              </li>
            ),
        )}
      </ul>
      {tables.length > limit && (
        <button
          className="cursor-pointer mt-4 text-primary-text/40 font-semibold flex flex-row items-center"
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          {expanded
            ? `Hide tables`
            : `Show ${tables.length - limit} more tables`}
          <ChevronDown
            size={15}
            className={`${expanded ? "rotate-180" : ""} transition-transform`}
          />
        </button>
      )}
    </div>
  );
};

export default ArticleNavTables;
