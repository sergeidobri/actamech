"use client";

import { ArticleVolume, AuthorInArticle } from "@/lib/types/articles";
import { makeAffiliationsTagsFromAuthors } from "@/lib/utils/articles";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import SerialFormatting from "@/components/common/SerialFormatting";

export default function AuthorsAffiliations({
  authors,
  volume,
}: {
  authors: AuthorInArticle[];
  volume?: ArticleVolume;
}) {
  const [open, setOpen] = useState(false);
  const [affiliationAliases, affiliationsData] =
    makeAffiliationsTagsFromAuthors(authors);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="text-primary-text/40 my-2 cursor-pointer flex items-center mx-auto"
      >
        {open ? "Show less" : "Show more"}
        <ChevronDown
          size={20}
          className={`${open && "rotate-180"} transition-transform inline-block self-center`}
        />
      </button>
      {open && (
        <div className="px-4 lg:px-8 text-left w-fit mx-auto lg:max-w-7/8 my-4 pb-4 border-b-1 border-b-border-primary">
          <ul>
            {Object.entries(affiliationsData).map(([id, af]) => (
              <li key={af.name}>
                <sup className="font-bold text-accent">
                  {affiliationAliases[id]}
                </sup>{" "}
                -{" "}
                {[af.name, af.address, af.postal_code, af.country]
                  .filter((v) => !!v)
                  .join(", ")}
              </li>
            ))}
          </ul>
          <div className="text-primary-text/60 text-sm mt-2">
            This article belongs to the Proceedings of{" "}
            <SerialFormatting
              str={volume!.conference_full_name}
              wrapper="span"
            />
          </div>
        </div>
      )}
    </>
  );
}
