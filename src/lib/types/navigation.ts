export interface BreadcrumbItem {
  name: string;
  url: string;
  isClickable: boolean;
}

export type MetaConfig = {
  title?: string | null;
  image?: string | null;
};
