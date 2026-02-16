"use client";

import { ArticleVolume, AuthorInArticle } from "@/lib/types/articles";
import { makeAffiliationsTagsFromAuthors } from "@/lib/utils/articles";
import { Fragment, useState } from "react";
import AuthorsAffiliations from "./AuthorsAffiliations";
import AuthorSlidePanel from "./AuthorSlidePanel";

export default function Authors({
  authors,
  volume,
}: {
  authors: AuthorInArticle[];
  volume?: ArticleVolume;
}) {
  const [open, setOpen] = useState(false);
  const [currentAuthor, setCurrentAuthor] = useState<AuthorInArticle | null>(
    null,
  );
  const handleClick = (author: AuthorInArticle) => {
    if (author !== currentAuthor && open) {
      setCurrentAuthor(author);
      return;
    }
    setCurrentAuthor(author);
    setOpen(!open);
  };
  const [affiliationAliases, affiliationsData] =
    makeAffiliationsTagsFromAuthors(authors);

  return (
    <>
      <p className="text-xl text-accent font-semibold mt-4 w-fit mx-auto cursor-pointer select-text">
        {authors.map((author, index) => (
          <Fragment key={`${author.first_name} ${author.last_name}`}>
            <span
              className="hover:underline"
              onClick={() => handleClick(author)}
            >
              {author.first_name} {author.last_name}
              <sup>
                {author.affiliations
                  .map((af) => affiliationAliases[af.id])
                  .join(" ")}
              </sup>
            </span>
            {index < authors.length - 1 && ", "}
          </Fragment>
        ))}
      </p>
      <AuthorSlidePanel
        author={currentAuthor}
        opened={open}
        onCloseCallback={() => {
          setOpen(false);
        }}
      />
      <AuthorsAffiliations volume={volume} authors={authors} />
    </>
  );
}
