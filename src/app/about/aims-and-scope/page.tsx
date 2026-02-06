import AimsAndScope from "@aims-components/AimsAndScope";
import ContactInformation from "@aims-components/ContactInformation";
import JournalInsights from "@aims-components/JournalInsights";
import SubjectAreas from "@aims-components/SubjectAreas";

export default function AimsAndScopePage() {
  return (
    <div className="flex flex-col gap-4">
      <AimsAndScope />
      <SubjectAreas />
      <JournalInsights />
      <ContactInformation />
    </div>
  );
}
