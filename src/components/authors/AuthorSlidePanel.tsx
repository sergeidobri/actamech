import { useOutsideClick } from "@/lib/hooks/useOutsideClick";
import { AuthorInArticle } from "@/lib/types/articles";
import { ExternalLink, Mail, X } from "lucide-react";

export default function AuthorSlidePanel({
  author: {
    id,
    scopus_id,
    orcid_id,
    first_name,
    last_name,
    email,
    affiliations,
  },
  onCloseCallback,
}: {
  author: AuthorInArticle;
  onCloseCallback: CallableFunction;
}) {
  const handleClose = () => {
    onCloseCallback();
  };

  const ref = useOutsideClick(handleClose);

  return (
    <div
      ref={ref}
      className="fixed top-0 right-0 z-20 h-full bg-primary rounded-l-base py-8 px-8 min-w-[30vw] max-w-sm text-left shadow-2xl my-4"
    >
      <div className="flex flex-row justify-between">
        <p>Author</p>
        <button className="hover-accent cursor-pointer" onClick={handleClose}>
          <X />
        </button>
      </div>
      <div className="pb-4 border-b-border-primary border-b-1">
        <p className="text-lg mt-8">
          {first_name} {last_name}
        </p>
        {scopus_id && (
          <a href="/test" className="text-accent hover:underline block">
            View in Scopus
            <ExternalLink className="inline" />
          </a>
        )}

        {orcid_id && (
          <a href="/test" className="text-accent hover:underline block">
            View the author's ORCID record
            <ExternalLink className="inline" />
          </a>
        )}
        <p className="mt-4">
          {affiliations.map((af) => (
            <span key={af.id}>
              {af.name}, {af.address}, {af.postal_code} {af.country}
            </span>
          ))}
        </p>
        <div className="flex flex-col gap-8 mt-4">
          <p className="text-accent group cursor-pointer">
            <Mail className="inline" />
            <span className="ml-2 group-hover:underline">{email}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
