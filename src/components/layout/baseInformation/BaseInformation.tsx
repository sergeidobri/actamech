import Breadcrumb from "@/components/ui/Breadcrumb";
import { BreadcrumbItem } from "@/lib/types/breadcrumbs";
import Image from "next/image";

interface BaseInformationProps {
  image?: string | null;
  pageTitle?: string | null;
  showBreadcrumbs?: boolean;
  navigation?: BreadcrumbItem[];
}

export default function BaseInformation({
  image,
  pageTitle = null,
  showBreadcrumbs = true,
  navigation = [],
}: BaseInformationProps) {
  const defaultImage = "/images/index/indexAboutImage.png";
  
  return (
    <div className="mb-16">
      <div className="w-full h-80 relative">
        <Image
          className="w-full brightness-50 object-cover object-[25%_0%] bg-scroll"
          src={image ? image : defaultImage}
          fill
          alt={"Main page image"}
        />
        <div
          className="text-secondary-text absolute z-10
              
              top-0 left-0 h-full w-full
              flex items-center justify-center"
        >
          <div className="py-8 backdrop-blur-xs w-full flex items-center justify-center flex-col">
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
      {showBreadcrumbs && (
        <div className="container mx-auto mt-8">
          <Breadcrumb navigation={navigation} />
        </div>
      )}
      {pageTitle && (
        <div className="border-y-accent border-y-2 mt-8">
          <div className="container mx-auto py-8">
            <h1 className="text-4xl uppercase">{pageTitle}</h1>
          </div>
        </div>
      )}
    </div>
  );
}
