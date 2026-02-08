import AimsAndScope from "@aims-components/AimsAndScope";
import ContactInformation from "@aims-components/ContactInformation";
import JournalInsights from "@aims-components/JournalInsights";
import SubjectAreas from "@aims-components/SubjectAreas";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aims and scope",
};

export default function AimsAndScopePage() {
  return (
    <>
      <AimsAndScope />
      <SubjectAreas />
      <JournalInsights />
      <ContactInformation />
    </>
  );
}
