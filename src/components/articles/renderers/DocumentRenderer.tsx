import { DocumentJSON } from "@/lib/types/articles";
import { DocumentItemRenderer } from "./DocumentItemRenderer";

interface DocumentRendererProps {
  document: DocumentJSON;
  setExpanded: (value: boolean) => void;
  className?: string;
}

export function DocumentRenderer({
  document,
  setExpanded,
  className = "",
}: DocumentRendererProps) {
  if (!document || document.type !== "doc") {
    return null;
  }

  return (
    <div className={`prose prose-slate max-w-none ${className}`}>
      {document.content.map((item, index) => (
        <DocumentItemRenderer
          setExpanded={setExpanded}
          key={index}
          item={item}
        />
      ))}
    </div>
  );
}
