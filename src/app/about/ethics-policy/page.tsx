import MainContainer from "@/components/layout/MainContainer";
import { metaConfig } from "@/lib/constants/meta-config";
import GuidanceForAuthors from "@ethics-components/GuidanceForAuthors";
import GuidanceForEditorial from "@ethics-components/GuidanceForEditorial";
import GuidanceForEditorInChief from "@ethics-components/GuidanceForEditorInChief";
import GuidanceForPeerReviewers from "@ethics-components/GuidanceForPeerReviewers";
import GuidanceInConflicts from "@ethics-components/GuidanceInConflicts";
import GuidanceInitial from "@ethics-components/GuidanceInitial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: metaConfig["/about/ethics-policy"]?.title || "Ethics Policy",
};

export default function EthicsPolicyPage() {
  return (
    <MainContainer>
      <GuidanceInitial />
      <GuidanceForAuthors />
      <GuidanceForEditorial />
      <GuidanceForEditorInChief />
      <GuidanceForPeerReviewers />
      <GuidanceInConflicts />
    </MainContainer>
  );
}
