"use client";

import { SingleArticleResponse } from "@/api/types";
import { TArticleContent } from "@/lib/types/articles";
import { scrollToId } from "@/lib/utils/navigation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import ArticleNavFigures from "./ArticleNavFigures";
import ArticleNavTables from "./ArticleNavTables";

const ArticleNav = ({ article }: { article: SingleArticleResponse }) => {
  const [expanded, setExpanded] = useState(false);

  const handleArticleContentRender = (content: TArticleContent) => {
    switch (content.type) {
      case "section":
        return (
          <li key={content.title}>
            <span
              className="cursor-pointer"
              onClick={() => scrollToId(content.number + content.title)}
            >
              {content.number && `${content.number}. `}
              {content.title}
            </span>

            {expanded && generateTableOfContents(content.content, true)}
          </li>
        );
      default:
        break;
    }
    return;
  };

  const generateTableOfContents = (
    contents: TArticleContent[],
    inner: boolean = false,
  ) => {
    return (
      <ul {...(inner && { className: "ml-4" })}>
        {contents.map((content) => handleArticleContentRender(content))}
        {/* {!inner && (
          <li
            key="References"
            className="cursor-pointer"
            onClick={() => scrollToId("references")}
          >
            References
          </li>
        )} */}
      </ul>
    );
  };

  return (
    <div className="left_navigation-sticky w-1/4 pt-4 -mt-4 hidden lg:block overflow-hidden!">
      <div className="grid grid-cols-1 gap-4">
        <div className="rounded-t-base p-2 transition-colors bg-secondary/5 border-b-2 border-b-accent text-center hover:bg-accent cursor-pointer hover:text-secondary-text">
          Download PDF
        </div>
        {/* <div className="rounded-t-base p-2 bg-secondary/5 border-b-2 border-b-accent text-center hover:bg-accent cursor-pointer hover:text-secondary-text">
          Download full issue
        </div> */}
      </div>
      <div className="pb-4 mt-8 overflow-auto pr-2 -mt-2 max-h-[75vh]">
        <h3 className="text-xl font-semibold">Outline</h3>
        <section className="mt-4">
          <ul>
            <li
              className="cursor-pointer"
              onClick={() => scrollToId("abstract")}
            >
              Abstract
            </li>
            <li
              className="cursor-pointer"
              onClick={() => scrollToId("keywords")}
            >
              Keywords
            </li>
          </ul>
          {article.body && generateTableOfContents(article.body[0].content)}
        </section>
        <button
          className="cursor-pointer mt-4 text-primary-text/40 font-semibold flex flex-row items-center"
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          {expanded ? "Hide full outline" : "Show full outline"}
          <ChevronDown
            size={15}
            className={`${expanded ? "rotate-180" : ""} transition-transform`}
          />
        </button>
        <div className="w-full h-0 border-b-border-primary border-b-1 my-4" />
        {article.body && (
          <>
            <ArticleNavFigures content={article.body[0].content} />
            <ArticleNavTables content={article.body[0].content} />
          </>
        )}
      </div>
    </div>
  );
};

export default ArticleNav;
