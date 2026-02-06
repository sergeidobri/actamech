import Link from "next/link";

interface IssueCardProps {
  id: number;
  issueName: string;
  info: string;
}

export default function IssueCard({ id, issueName, info }: IssueCardProps) {
  return (
    <Link
      className="flex flex-col gap-4 border-b-accent border-b-1 pb-4 min-w-2/3 max-w-3/4 pr-16 max-auto cursor-pointer"
      href={`/volumes/${id}`}
    >
      <div>
        <p className="font-semibold text-lg">{issueName}</p>
        <p className="font-bold text-accent">{info}</p>
      </div>
    </Link>
  );
}
