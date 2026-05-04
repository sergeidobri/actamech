import { scrollToId } from "@/lib/utils/navigation";
import { ExternalLink } from "lucide-react";

interface FormulaLinkRendererProps {
  number: number;
  setExpanded: (value: boolean) => void;
}

export function ReferenceRenderer({
  number: num,
  setExpanded,
}: FormulaLinkRendererProps) {
  return (
    <span
      className="text-sm cursor-pointer hover:underline"
      onClick={() => {
        setExpanded(true);
        setTimeout(() => scrollToId(`reference-${num}`), 0);
      }}
    >
      [{num}]
    </span>
  );
}
