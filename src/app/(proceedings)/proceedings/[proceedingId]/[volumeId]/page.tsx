import { getProceedingById, getProceedingVolumeById } from "@/api/api";
import SerialFormatting from "@/components/common/SerialFormatting";
import MainContainer from "@/components/layout/MainContainer";
import ArticleCard from "@/components/pages/issues/ArticleCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ volumeId: string }>;
}): Promise<Metadata> {
  const { volumeId } = await params;

  return { title: `Volume ${volumeId}` };
}

export default async function ProceedingVolumePage({
  params,
}: {
  params: Promise<{ proceedingId: string; volumeId: string }>;
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

  const { data: volumeData } = await getProceedingVolumeById(
    proceedingVolume.id,
  );

  return (
    <MainContainer>
      <div className="flex items-start gap-8 mt-4">
        <div>
          <Image
            src={`/images/covers/${volumeData.id}.webp`}
            alt={volumeData.title}
            height={500}
            width={240}
            className="rounded-2xl w-60 h-auto"
          />
        </div>

        <div>
          <div className="bg-secondary/5 h-full flex flex-col justify-between rounded-base px-4 py-4 text-lg gap-4">
            <span>
              <p className="text-xl font-bold">
                <SerialFormatting
                  str={volumeData.conference_full_name}
                  wrapper="span"
                />
              </p>
              <p className="text-sm my-1 text-tertiary-text">
                {volumeData.place} |{volumeData.held_at}
              </p>
            </span>

            {volumeData.editors.length > 0 && (
              <div>
                <h2 className="font-bold text-base">Volume Editors:</h2>
                <div className="text-base">
                  {volumeData.editors.map((ed) => (
                    <p>{ed.full_name}</p>
                  ))}
                </div>
              </div>
            )}
            <div className="text-sm my-1 text-tertiary-text">
              {volumeData.total_pages && (
                <p>Number of Papers: {volumeData.articles.length}</p>
              )}
              <p>Views 000 | Downloads 000 | Citations 0</p>
            </div>
          </div>

          <div className="grid grid-cols-[240px_1fr] items-center gap-8">
            <div></div>
            <div>
              <SectionTitle title="Articles" />
              <div className="flex flex-col gap-8 mt-4">
                {/* {volumeData.articles.length ? (
              volumeData.articles
                .filter((article) => article.doi)
                .map((article) => (
                  <ArticleCard
                    {...{
                      ...article,
                      link: `${volumeData.volume_number}/${article.id}`,
                    }}
                  />
                ))
            ) : (
              <p className="font-semibold">
                Articles will appear here when they are published
              </p>
            )} */}
                <p className="font-semibold">
                  Articles will appear here when they are published
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
