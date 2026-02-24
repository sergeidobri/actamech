"use client";

import { useState } from "react";
import { SingleArticleResponse } from "@/api/types";
import ArticleContent from "./ArticleContent";
import ArticleNav from "./ArticleNav";

interface ArticleProps {
  article: SingleArticleResponse;
}

export default function Article({ article }: ArticleProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      <ArticleNav
        article={article}
        contentExpanded={expanded}
        setContentExpanded={setExpanded}
      />
      <ArticleContent
        article={article}
        expanded={expanded}
        setExpanded={setExpanded}
      />
    </div>
  );
}
