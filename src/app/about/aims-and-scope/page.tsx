import MainContainer from "@/components/layout/MainContainer";
import { metaConfig } from "@/lib/constants/meta-config";
import AimsAndScope from "@aims-components/AimsAndScope";
import ContactInformation from "@aims-components/ContactInformation";
import JournalInsights from "@aims-components/JournalInsights";
import SubjectAreas from "@aims-components/SubjectAreas";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: metaConfig["/about/aims-and-scope"]?.title || "Aims And Scope",
};

export default function AimsAndScopePage() {
  return (
    <MainContainer>
      <AimsAndScope />
      <SubjectAreas />
      <JournalInsights />
      <ContactInformation />
    </MainContainer>
  );
}
