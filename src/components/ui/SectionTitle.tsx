interface SectionTitleProps {
  title: string;
  alt?: boolean;
  classNameTitle?: string;
}

export default function SectionTitle({
  title,
  alt = false,
  classNameTitle = "",
}: SectionTitleProps) {
  return (
    <div
      className={`${alt ? "border-b-secondary" : "border-b-accent"} border-b-2`}
    >
      <div className="pt-4 pb-4">
        <h1 className={`text-3xl uppercase ${classNameTitle}`}>{title}</h1>
      </div>
    </div>
  );
}
