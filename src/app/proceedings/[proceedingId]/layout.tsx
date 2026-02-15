export default function MainProceedingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

export function ProceedingLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="border-y-accent border-y-2 mt-8">
        <div className="container mx-auto py-8">
          <h1 className="sm:text-4xl text-3xl uppercase">{title}</h1>
        </div>
      </div>
      {children}
    </>
  );
}
