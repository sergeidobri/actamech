interface BoardDistinctPersonCardProps {
  fullName: string;
  country: string;
  affiliation: string;
  color?: "accent" | "secondary";
}

export default function BoardDistinctPersonCard({
  fullName,
  country,
  affiliation,
  color = "accent",
}: BoardDistinctPersonCardProps) {
  return (
    <div
      className={`flex flex-col gap-4 border-b-${color} border-b-1 pb-4 pr-16`}
    >
      <div>
        <p className="font-semibold text-lg">{fullName}</p>
        <p className="font-semibold">{affiliation}</p>
        <p className="font-semibold text-tertiary-text">{country}</p>
      </div>
    </div>
  );
}
