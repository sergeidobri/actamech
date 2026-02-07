import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className="py-4 flex flex-row items-center h-fit my-auto gap-2"
    >
      <Image
        priority
        className={`w-auto h-10 ${className}`}
        src="/icons/siteIconLight.png"
        alt="Site icon"
        height={100}
        width={100}
      />
      <span className="font-semibold font-[ZT-Neue-Ralewe-Regular] text-xs">
        ACTA MECHANICA <br /> ET IMPERIUM
      </span>
    </Link>
  );
}
