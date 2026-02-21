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
  const variants = ["xl", "lg", "base"];

  return (
    <h2
      className={`text-${variants[variant < 3 ? variant : 2]} my-4 font-semibold`}
      id={id}
    >
      {children}
    </h2>
  );
}
