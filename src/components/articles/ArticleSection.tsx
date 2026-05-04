interface ArticleSectionProps {
  children: React.ReactNode;
}

export default function ArticleSection({ children }: ArticleSectionProps) {
  return <section className="text-sm">{children}</section>;
}
