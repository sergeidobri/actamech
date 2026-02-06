import InformationPageToC from "@/components/layout/tableOfContents/InformationPageToC";
import DeclaraionInitial from "@/components/pages/about/declaration-on-privacy/DeclarationInitial";
import DeclarationPlagiarism from "@/components/pages/about/declaration-on-privacy/DeclarationPlagiarism";
import RetractionRules from "@/components/pages/about/declaration-on-privacy/RetractionRules";

export default function DeclarationOnPrivacyPage() {
  return (
    <div className="flex flex-col gap-4">
      <DeclaraionInitial />
      <DeclarationPlagiarism />
      <RetractionRules />
    </div>
  );
}
