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
  url: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
  className?: string | null;
  external?: boolean;
  disabled?: boolean;
}
