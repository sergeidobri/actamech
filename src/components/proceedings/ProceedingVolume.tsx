import Image from "next/image";
import Link from "next/link";

interface ProceedingVolumeProps {
  image?: string;
  proceedingId: string;
  volumeData: {
    id: string;
    title: string;
    volume_number: string;
  };
}

export function ProceedingVolume({
  proceedingId,
  volumeData,
  image,
}: ProceedingVolumeProps) {
  return (
    <Link href={`/proceedings/${proceedingId}/${volumeData.volume_number}`}>
      <div className="relative">
        <Image
          src={image ?? "/images/test/example_cover.png"}
          className="rounded-2xl h-auto w-57"
          width={300}
          height={300}
          alt={volumeData.title}
        />
      </div>
      <div className="text-lg flex flex-col items-center mt-2 text-center">
        <p>Volume {volumeData.volume_number}</p>
        {/* <SerialFormatting str={volumeData.title} wrapper="p" /> */}
      </div>
    </Link>
  );
}

export default ProceedingVolume;
