"use client";

import MainLink from "@/components/ui/MainLink";
import { Link } from "@/lib/types/navigation";
import { usePathname } from "next/navigation";

export default function FooterLink(params: Link) {
  const currentPath = usePathname();

  let newClassName =
    currentPath == params.url ? "text-accent text-sm" : "text-sm";

  if (params.className) {
    newClassName = `${newClassName} ${params.className}`;
  }
  return <MainLink {...params} className={newClassName} />;
}
