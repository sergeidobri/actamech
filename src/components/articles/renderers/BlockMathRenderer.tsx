import MathRenderer from "@/components/mathjax/MathRenderer";
import { BlockMathJSON } from "@/lib/types/articles";
import { parseBlockMathLatex } from "@/lib/utils/articles";

interface BlockMathRendererProps {
  item: BlockMathJSON;
}

export function BlockMathRenderer({ item }: BlockMathRendererProps) {
  const { tag } = parseBlockMathLatex(item.attrs.latex);
  return (
    <div id={`formula-${tag}`}>
      <MathRenderer latex={item.attrs.latex} block={true} />
    </div>
  );
}
