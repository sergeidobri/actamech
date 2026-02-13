interface SubjectAreasCardProps {
  children: React.ReactNode;
}

export default function SubjectAreasCard({ children }: SubjectAreasCardProps) {
  return (
    <div
      className="w-sm px-6 py-4 text-nowrap bg-secondary/10 rounded-base flex align-middle items-center
    group
    backdrop-blur-2xl
    border-b-accent
    border-b-2"
    >
      {children}
    </div>
  );
}
