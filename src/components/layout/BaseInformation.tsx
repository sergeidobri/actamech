"use client";

import Breadcrumb from "@/components/common/Breadcrumb";
import {
  getBreadcrumbsFromPath,
  getDefaultImage,
  getMetaConfig,
} from "@/lib/utils/navigation";
import Image from "next/image";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";

export default function BaseInformation() {
  const pathname = usePathname();
  const meta = getMetaConfig(pathname);
  const segment = useSelectedLayoutSegment();
  const breadcrumbs = getBreadcrumbsFromPath(pathname);

  return (
    <>
      <div className="w-full h-80 relative">
        <Image
          className="w-full brightness-50 object-cover object-[25%_0%] bg-scroll"
          src={meta?.image ? meta.image : getDefaultImage()}
          fill
          alt={"Main page image"}
        />

        <div
          className="text-secondary-text absolute z-10
              
              top-0 left-0 h-full w-full
              flex items-center justify-center"
        >
          <div className="backdrop-blur-xs w-full py-8 flex items-center justify-center flex-col text-center">
            <h1 className="text-3xl font-bold font-[ZT-Neue-Ralewe-Regular]">
              ACTA MECHANICA ET IMPERIUM
            </h1>
            <div className="text-center flex flex-col gap-4 mt-4">
              <p className="px-8 py-2 italic text-xl">
                Publishing model: Online
              </p>
            </div>
          </div>
        </div>
      </div>
      {breadcrumbs && pathname !== "/" && segment !== "/_not-found" && (
        <div className="container mx-auto mt-8">
          <Breadcrumb navigation={breadcrumbs} />
        </div>
      )}
      {meta?.title && !pathname.startsWith("/proceedings/") && (
        <div className="border-y-accent border-y-2 mt-8">
          <div className="container mx-auto py-8">
            <h1 className="text-4xl uppercase">{meta.title}</h1>
          </div>
        </div>
      )}
    </>
  );
}
