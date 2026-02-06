"use client";

import MainLink from "@/components/ui/MainLink";
import { Link as ILink } from "@/lib/types/navigation";
import { usePathname } from "next/navigation";

export default function HeaderLink(params: ILink) {
  const currentPath = usePathname();

  let newClassName = currentPath == params.url ? "text-accent" : "";
  if (params.className) {
    newClassName = `${newClassName} ${params.className}`;
  }

  return <MainLink {...params} className={newClassName} />;
}
