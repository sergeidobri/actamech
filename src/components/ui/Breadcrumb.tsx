import { BreadcrumbItem } from "@/lib/types/breadcrumbs";
import Link from "next/link";

interface BreadcrumbsProps {
  navigation: BreadcrumbItem[];
}

export default function Breadcrumb({ navigation }: BreadcrumbsProps) {
  return (
    <div className="flex flex-row items-center gap-2 font-semibold text-xs">
      {navigation.map((item, index) => (
        <>
          {item.url ? (
            <Link
              className=" text-tertiary-text uppercase hover-accent"
              href={item.url}
            >
              {item.name}
            </Link>
          ) : (
            <span className="text-tertiary-text uppercase cursor-default">
              {item.name}
            </span>
          )}

          {index <= navigation.length - 2 && (
            <span className="select-none">&gt;</span>
          )}
        </>
      ))}
    </div>
  );
}
