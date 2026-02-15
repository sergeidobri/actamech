import MainContainer from "@/components/layout/MainContainer";
import DeclaraionInitial from "@/components/pages/about/declaration-on-privacy/DeclarationInitial";
import DeclarationPlagiarism from "@/components/pages/about/declaration-on-privacy/DeclarationPlagiarism";
import RetractionRules from "@/components/pages/about/declaration-on-privacy/RetractionRules";
import { metaConfig } from "@/lib/constants/meta-config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    metaConfig["/about/declaration-on-privacy"]?.title ||
    "Declaration On Privacy",
};

export default function DeclarationOnPrivacyPage() {
  return (
    <MainContainer>
      <DeclaraionInitial />
      <DeclarationPlagiarism />
      <RetractionRules />
    </MainContainer>
  );
}
