import InformationPageToC from "@/components/layout/InformationPageToC";
import DeclaraionInitial from "@/components/pages/about/declaration-on-privacy/DeclarationInitial";
import DeclarationPlagiarism from "@/components/pages/about/declaration-on-privacy/DeclarationPlagiarism";
import RetractionRules from "@/components/pages/about/declaration-on-privacy/RetractionRules";

export default function DeclarationOnPrivacyPage() {
  return (
    <>
      <DeclaraionInitial />
      <DeclarationPlagiarism />
      <RetractionRules />
    </>
  );
}
