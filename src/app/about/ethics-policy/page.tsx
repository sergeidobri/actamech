import GuidanceForAuthors from "@ethics-components/GuidanceForAuthors";
import GuidanceForEditorial from "@ethics-components/GuidanceForEditorial";
import GuidanceForEditorInChief from "@ethics-components/GuidanceForEditorInChief";
import GuidanceForPeerReviewers from "@ethics-components/GuidanceForPeerReviewers";
import GuidanceInConflicts from "@ethics-components/GuidanceInConflicts";
import GuidanceInitial from "@ethics-components/GuidanceInitial";

export default function EthicsPolicyPage() {
  return (
    <div className="flex flex-col flex-1 gap-8">
      <GuidanceInitial />
      <GuidanceForAuthors />
      <GuidanceForEditorial />
      <GuidanceForEditorInChief />
      <GuidanceForPeerReviewers />
      <GuidanceInConflicts />
    </div>
  );
}
