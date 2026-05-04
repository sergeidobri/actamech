import { DocumentJSON } from "@/lib/types/articles";
import { DocumentRenderer } from "./renderers/DocumentRenderer";

interface ArticleTextProps {
  json: DocumentJSON;
  setExpanded: (value: boolean) => void;
}

export default function ArticleText({ json, setExpanded }: ArticleTextProps) {
  return <DocumentRenderer document={json} setExpanded={setExpanded} />;
}
