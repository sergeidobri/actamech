import { getProceedingById, getProceedingVolumeById } from "@/api/api";
import SerialFormatting from "@/components/common/SerialFormatting";
import { notFound } from "next/navigation";

export default async function ProceedingVolumeLayout({
  params,
  children,
}: {
  params: Promise<{ proceedingId: string; volumeId: string }>;
  children: React.ReactNode;
}) {
  const { proceedingId, volumeId } = await params;

  // const { data: proceedingData } = await getProceedingById(proceedingId);
  const { data: proceedingData } = await getProceedingById(
    "advances-in-mechanics-and-control",
  );

  // не проверяем на undefined, потому что проверка проходит выше в proceedinglayout
  // если просидинга нет, то notFound выбросится в layout-е выше

  const proceedingVolume = proceedingData.volumes.find(
    (vol) => vol.volume_number == volumeId,
  );

  if (!proceedingVolume) {
    notFound();
  }

  const { volume_number, title } = proceedingVolume;

  return (
    <>
      <div className="border-y-accent border-b-2">
        <div className="container mx-auto py-4">
          <h1 className="text-3xl">
            Proceedings, Volume {volume_number},{" "}
            <SerialFormatting str={title} wrapper="span" />
          </h1>
        </div>
      </div>
      {children}
    </>
  );
}
