"use client";

import { IArticleAuthor, TArticleType } from "@/lib/types/articles";
import { formatDate, resolveArticleType } from "@/lib/utils/articles";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ArticleCardProps {
  id: string;
  abstract: string | undefined;
  title: string;
  type: TArticleType;
  editorial: boolean;
  published_at: string;
  link?: string;
  authors: IArticleAuthor[];
}

export default function ArticleCard({
  id,
  abstract,
  title,
  authors,
  type,
  editorial = false,
  published_at,
  link,
}: ArticleCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="pb-4 border-b-border-secondary border-b-2 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-tertiary-text">
          {editorial ? "Editorial" : resolveArticleType(type)}{" "}
          {published_at && `| ${formatDate(published_at)}`}
        </span>
        <Link
          className="text-xl cursor-pointer hover:text-accent block"
          href={link ?? `/articles/${id}`}
        >
          {title}
        </Link>
        <h2 className="text-accent">
          {authors.map(({ fullName }) => fullName).join(", ")}
        </h2>
      </div>

      <div className="flex flex-row justify-between">
        <span className="uppercase underline text-xs hover:text-accent cursor-pointer">
          View PDF
        </span>
        <button
          onClick={() => setOpen(!open)}
          className="uppercase underline text-xs hover-accent cursor-pointer flex flex-row items-center"
        >
          Article preview{" "}
          <ChevronDown
            size={15}
            className={` ${open && "rotate-180"} transition-transform`}
          />
        </button>
      </div>
      {open && abstract && (
        <div>
          <div className="border-y-border-secondary border-y-2 py-4 mb-2">
            Abstract
          </div>
          <article className="max-h-[30vh] overflow-auto text-justify px-2">
            {abstract}
          </article>
        </div>
      )}
    </div>
  );
}
