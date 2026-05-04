import { DocumentItemJSON } from "@/lib/types/articles";
import { ParagraphRenderer } from "./ParagraphRenderer";
import MathRenderer from "@/components/mathjax/MathRenderer";
import { BlockMathRenderer } from "./BlockMathRenderer";

interface DocumentItemRendererProps {
  item: DocumentItemJSON;
  setExpanded: (value: boolean) => void;
}

export function DocumentItemRenderer({
  item,
  setExpanded,
}: DocumentItemRendererProps) {
  switch (item.type) {
    case "paragraph":
      return <ParagraphRenderer paragraph={item} setExpanded={setExpanded}/>;
    case "blockMath":
      return <BlockMathRenderer item={item} />;
    default:
      console.warn(`Unknown document item type: ${(item as any).type}`);
      return null;
  }
}
