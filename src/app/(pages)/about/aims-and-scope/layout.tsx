import BaseInformation from "@/components/layout/baseInformation/BaseInformation";
import { NAVIGATION } from "@/lib/constants/navigation";

interface AimsAndScopeLayoutProps {
  children: React.ReactNode;
}

export default function AimsAndScopeLayout({
  children,
}: AimsAndScopeLayoutProps) {
  return (
    <>
      <BaseInformation
        pageTitle={"Aims And Scope"}
        image="/images/aboutPage/aboutPageMainImage.jpg"
        navigation={NAVIGATION.about.aimsAndScope}
      />
      {children}
    </>
  );
}
