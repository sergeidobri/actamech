import { formatDate } from "@/lib/utils/articles";
import Link from "next/link";

interface VolumeLink {
  id: number;
  date: string;
}

export default function VolumeLink({ id, date }: VolumeLink) {
  return (
    <Link className="hover-accent" href={`/volumes/${id}`}>
      Volume {id} ({formatDate(date)})
    </Link>
  );
}
