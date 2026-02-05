import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

interface ILink {
  text: string;
  url: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
  className?: string | null;
  external?: boolean;
  disabled?: boolean;
}

export default function MainLink({
  text,
  url,
  className = null,
  external = false,
  disabled = false,
}: ILink) {
  return disabled ? (
    <span
      title="Will be available soon"
      className={`w-fit uppercase text-contrast-disabled-text font-semibold whitespace-nowrap mr-2 h-full flex align-center gap-0.5 ${className ? className : ""}`}
    >
      {text}
      {external && (
        <SquareArrowOutUpRight
          className="inline-block flex-shrink-0 self-center"
          width={14}
          height={14}
        />
      )}
    </span>
  ) : (
    <Link
      className={`w-fit underline-on-hover uppercase font-semibold whitespace-nowrap mr-2 hover:ml-1 hover:mr-1 transition-[margin] gap-0.5 ${className ? className : ""}`}
      href={url}
    >
      {text}
      {external && (
        <SquareArrowOutUpRight
          className="inline-block flex-shrink-0 self-center"
          width={14}
          height={14}
        />
      )}
    </Link>
  );
}
