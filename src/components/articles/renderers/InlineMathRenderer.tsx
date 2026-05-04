import MathRenderer from "@/components/mathjax/MathRenderer";
import { InlineMathJSON } from "@/lib/types/articles";

interface InlineMathRendererProps {
  item: InlineMathJSON;
}

export function InlineMathRenderer({ item }: InlineMathRendererProps) {
  return <MathRenderer latex={item.attrs.latex} block={false} />;
}
