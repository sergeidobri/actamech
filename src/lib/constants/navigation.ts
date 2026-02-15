import { GroupLinks } from "@/lib/types/navigation";

export const NOT_NAVIGATABLE_ROUTES = ["/about", "/articles", "/proceedings"];

export const NAVBAR_GROUPS: GroupLinks[] = [
  {
    groupName: "Articles & Issues",
    elements: [
      { href: null, label: "Latest Issue" },
      { href: "/articles/all-issues", label: "All Issues" },
      { href: null, label: "Articles in press" },
    ],
  },
  {
    groupName: "Proceedings",
    elements: [
      { href: "/proceedings/amc", label: "Advances in Mechanics and Control" },
    ],
  },
  {
    groupName: "About",
    elements: [
      { href: "/about/aims-and-scope", label: "Aims and Scope" },
      { href: "/about/editorial-board", label: "Editorial Board" },
      { href: "/about/ethics-policy", label: "Ethics Policy" },
      {
        href: "/about/declaration-on-privacy",
        label: "Declaration on privacy",
      },
      { href: "/about/contacts", label: "Contacts" },
    ],
  },
  {
    groupName: "Publish",
    elements: [
      { href: null, label: "Submit an article", external: true },
      { href: null, label: "Guide for authors" },
    ],
  },
];
