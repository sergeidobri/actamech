import SectionTitle from "@/components/ui/SectionTitle";
import { Fragment } from "react/jsx-runtime";

interface InformationPageToCProps {
  parts: {
    content: string;
    title: string;
    tocTitle?: string;
    id: string;
  }[];
  showTOC?: boolean;
}

export default function InformationPageToC({
  parts,
  showTOC = true,
}: InformationPageToCProps) {
  return (
    <div className="flex flex-row divide-secondary">
      {showTOC && (
        <div className="flex flex-col gap-8 pr-8 left_navigation-sticky">
          <div>
            <ul className="flex flex-col gap-2">
              {parts.map((p) => (
                <li>
                  <a className="hover-accent" href={`#${p.id}`}>
                    {p.tocTitle ? p.tocTitle : p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div className={`${showTOC && "pl-8"} flex-1 gap-16`}>
        {parts.map((p) => (
          <div key={p.title} id={p.id}>
            <SectionTitle title={p.title} />
            <section className="container mx-auto mt-8">
              <div dangerouslySetInnerHTML={{ __html: p.content }} />
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
