import DeclaraionInitial from "@/components/pages/about/declaration-on-privacy/DeclarationInitial";
import DeclarationPlagiarism from "@/components/pages/about/declaration-on-privacy/DeclarationPlagiarism";
import RetractionRules from "@/components/pages/about/declaration-on-privacy/RetractionRules";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Declaration On Privacy",
};

export default function DeclarationOnPrivacyPage() {
  return (
    <>
      <DeclaraionInitial />
      <DeclarationPlagiarism />
      <RetractionRules />
    </>
  );
}
