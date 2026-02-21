import { NOT_NAVIGATABLE_ROUTES } from "@/lib/constants/navigation";
import { BreadcrumbItem, MetaConfig } from "@/lib/types/navigation";
import { metaConfig } from "@/lib/constants/meta-config";

export function getBreadcrumbsFromPath(path: string): BreadcrumbItem[] {
  const pathSegments = path.split("/").filter(Boolean);

  const breadcrumbs: BreadcrumbItem[] = [
    { name: metaConfig["/"].title || "Home", url: "/", isClickable: true },
  ];

  let currentPath = "";
  for (const segment of pathSegments) {
    currentPath += `/${segment}`;
    breadcrumbs.push({
      name:
        metaConfig[currentPath]?.title ||
        formatSegmentName(segment, currentPath),
      url: currentPath,
      isClickable: !NOT_NAVIGATABLE_ROUTES.includes(currentPath),
    });
  }

  return breadcrumbs;
}

export function formatSegmentName(segment: string, currentPath: string) {
  const isVolume = currentPath.match(/\/proceedings\/[\w-]+\/[\w-]+$/);
  const result = segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
  return (isVolume ? "Volume " : "").concat(result);
}

export function getMetaConfig(path: string): MetaConfig {
  const info = metaConfig[path];

  return info ? info : ({ title: null, image: null } as MetaConfig);
}

export function getDefaultImage(): string {
  return "/images/index/indexImage.jpg";
}

export const scrollToId = (id: string) => {
  if (!window || !document) return;
  const element = document.getElementById(id);
  if (!element) return;
  const headerOffset = 75;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};
