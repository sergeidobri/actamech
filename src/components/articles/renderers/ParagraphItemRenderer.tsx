import { ParagraphItemJSON } from "@/lib/types/articles";
import { TextMarksWrapper } from "./TextMarksWrapper";
import MathRenderer from "@/components/mathjax/MathRenderer";
import { FormulaLinkRenderer } from "./FormulaLinkRenderer";
import { BlockMathRenderer } from "./BlockMathRenderer";
import { InlineMathRenderer } from "./InlineMathRenderer";
import { ReferenceRenderer } from "./ReferenceRenderer";

interface ParagraphItemRendererProps {
  item: ParagraphItemJSON;
  setExpanded: (value: boolean) => void;
}

export function ParagraphItemRenderer({
  item,
  setExpanded,
}: ParagraphItemRendererProps) {
  switch (item.type) {
    case "text":
      return (
        <TextMarksWrapper marks={item.marks}>{item.text}</TextMarksWrapper>
      );
    case "inlineMath":
      return <InlineMathRenderer item={item} />;
    case "blockMath":
      return <BlockMathRenderer item={item} />;
    case "formulaRef":
      return (
        <FormulaLinkRenderer
          anchor={item.attrs.anchor}
          text={item.attrs.text}
          setExpanded={setExpanded}
        />
      );
    case "reference":
      return (
        <ReferenceRenderer
          number={item.attrs.number}
          setExpanded={setExpanded}
        />
      );
    default:
      console.warn(`Unknown document item type: ${(item as any).type}`);
      return null;
  }

  // if

  return null;
}
