interface ArticleSectionTitleProps {
  id: string;
  children: React.ReactNode;
  variant?: number;
}

export default function ArticleSectionTitle({
  id,
  children,
  variant = 0,
}: ArticleSectionTitleProps) {
  const variants = ["2xl", "xl", "lg", "base"];

  return (
    <h1 className={`text-${variants[variant < 4 ? variant : 3]} my-4`} id={id}>
      {children}
    </h1>
  );
}
