import { getProceedingById } from "@/api/api";
import MainContainer from "@/components/layout/MainContainer";
import ProceedingVolume from "@/components/proceedings/ProceedingVolume";
import { getMetaConfig } from "@/lib/utils/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment } from "react/jsx-runtime";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ proceedingId: string }>;
}): Promise<Metadata> {
  const { proceedingId } = await params;
  const metaConf = getMetaConfig(`/proceedings/${proceedingId}`);

  return { title: metaConf?.title || `Proceeding: ${proceedingId}` };
}

export default async function ProceedingPage({
  params,
}: {
  params: Promise<{ proceedingId: string }>;
}) {
  const { proceedingId } = await params;
  // const { data } = await getProceedingById(proceedingId);
  const { data } = await getProceedingById("advances-in-mechanics-and-control");

  if (!data) {
    notFound();
  }

  const { volumes } = data;

  return (
    <MainContainer>
      <div className="flex flex-col gap-y-8 lg:flex-row">
        <div className="flex flex-col gap-8 lg:pr-8 pt-4 -mt-4 left_navigation-sticky lg:min-w-1/5">
          <div>
            <h2 className="font-semibold pb-2 border-b-1 border-b-accent">
              All volumes
            </h2>

            <ul className="flex flex-col gap-2 mt-4">
              {volumes.map((vol) => (
                <li key={vol.title}>
                  <Link
                    className="hover-accent"
                    href={`/proceedings/amc/${vol.volume_number}`}
                  >
                    Volume {vol.volume_number}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:pl-8 flex flex-wrap flex-row gap-8 w-full justify-center lg:border-l-border-primary lg:border-l-1 sm:justify-start">
          {volumes.map((vol) => (
            <Fragment key={vol.id}>
              <ProceedingVolume
                image={`/images/covers/${vol.id}.webp`}
                volumeData={vol}
                proceedingId="amc"
              />
            </Fragment>
          ))}
        </div>
      </div>
    </MainContainer>
  );
}
