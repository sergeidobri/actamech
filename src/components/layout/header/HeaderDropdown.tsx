import { ChevronDown } from "lucide-react";

interface HeaderDropdownProps {
  text: string;
  children: React.ReactNode;
}

export default function HeaderDropdown({
  text,
  children,
}: HeaderDropdownProps) {
  return (
    <div className="relative inline-block group header-dropdown-wrapper">
      <button className="uppercase font-semibold flex flex-row items-center cursor-pointer">
        {text}
        <ChevronDown
          className="group-hover:rotate-180 transition-transform inline-block flex-shrink-0 self-center"
          strokeWidth={2.5}
          width={15}
          height={15}
        />
      </button>
      <div className="hidden absolute z-20 pt-6 group-hover:block hover:block header-dropdown-items-container">
        <div className="bg-secondary/40 backdrop-blur px-6 py-4 rounded-b-base">
          {children}
        </div>
      </div>
    </div>
  );
}
