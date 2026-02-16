import { useOutsideClick } from "@/lib/hooks/useOutsideClick";
import { AuthorInArticle } from "@/lib/types/articles";
import { ExternalLink, Mail, X } from "lucide-react";
import Link from "next/link";

export default function AuthorSlidePanel({
  author,
  opened,
  onCloseCallback,
}: {
  author: AuthorInArticle | null;
  opened: boolean;
  onCloseCallback: CallableFunction;
}) {
  const handleClose = () => {
    onCloseCallback();
  };

  const ref = useOutsideClick(handleClose);

  return (
    <>
      <div
        ref={ref}
        className={`fixed transition-transform duration-300 ease-in-out
          transform ${opened ? "translate-x-0" : "translate-x-full"}
          top-(--header-height) right-0 z-20 h-full bg-primary py-8 px-8 min-w-[30vw] max-w-sm text-left shadow-xl/30`}
      >
        <div className="flex flex-row justify-between">
          <p>Author</p>
          <button className="hover-accent cursor-pointer" onClick={handleClose}>
            <X />
          </button>
        </div>
        {author && (
          <div className="pb-4 border-b-border-primary border-b-1">
            <p className="text-lg mt-8">
              {author.first_name} {author.last_name}
            </p>
            {author.scopus_id && (
              <Link
                href="/test"
                className="text-accent hover:underline flex items-center gap-1"
              >
                View in Scopus
                <ExternalLink className="inline-block self-center" size={20} />
              </Link>
            )}

            {author.orcid_id && (
              <Link
                href="/test"
                className="text-accent hover:underline flex items-center gap-1"
              >
                View the author's ORCID record
                <ExternalLink className="inline-block self-center" size={20} />
              </Link>
            )}
            <p className="mt-4 flex flex-col gap-1">
              {author.affiliations.map((af) => (
                <span key={af.id}>
                  {af.name}, {af.address}, {af.postal_code} {af.country}
                </span>
              ))}
            </p>
            <div className="flex flex-col gap-8 mt-4">
              <p className="text-accent group cursor-pointer flex items-center gap-1">
                <Mail className="inline-block self-center" size={20} />
                <span className="group-hover:underline">{author.email}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
