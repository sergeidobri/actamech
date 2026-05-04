import { scrollToId } from "@/lib/utils/navigation";

interface FormulaLinkRendererProps {
  anchor: string;
  text: string;
  setExpanded: (value: boolean) => void;
}

export function FormulaLinkRenderer({
  anchor,
  text,
  setExpanded,
}: FormulaLinkRendererProps) {
  return (
    <span
      className="text-sm cursor-pointer text-blue-800 hover:underline"
      onClick={() => {
        setExpanded(true);
        setTimeout(() => scrollToId(anchor), 0);
      }}
    >
      {text}
    </span>
  );
}
