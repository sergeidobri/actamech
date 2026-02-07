export interface BreadcrumbItem {
  name: string;
  url: string;
  isClickable: boolean;
}

export type MetaConfig = {
  title?: string | null;
  image?: string | null;
};

export interface Link {
  text: string;
  url: string | null;
  target?: "_blank" | "_parent" | "_self" | "_top";
  className?: string | null;
  external?: boolean;
  disabled?: boolean;
}

export interface GroupLink {
  href: string | null;
  label: string;
  external?: boolean;
}

export interface GroupLinks {
  groupName: string;
  elements: GroupLink[];
}
