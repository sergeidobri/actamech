interface ArticleSectionTitleProps {
  id: string;
  children: React.ReactNode;
  variant?: number;
}

export default function ArticleSectionTitle({
  id,
  children,
}: ArticleSectionTitleProps) {
  return (
    <h2 className={`text-base my-4 font-semibold`} id={id}>
      {children}
    </h2>
  );
}
