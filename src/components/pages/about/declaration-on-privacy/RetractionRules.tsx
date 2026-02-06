import List from "@/components/ui/List";
import SectionTitle from "@/components/ui/SectionTitle";

export default function RetractionRules() {
  return (
    <>
      <SectionTitle title="The Rules Of Retraction" />
      <article className="text-left-border">
        <p>
          Revocation of text from the publication (retraction) is a mechanism of
          correcting the published information and alerts readers that the
          publication contains serious deficiencies or erroneous data that
          cannot be trusted. The unreliability of the data may be the result of
          bona fide error or deliberate violations.
        </p>
        <p>
          Retraction is also used to alert readers about the cases of duplicate
          publications (when authors present the same data in several
          publications), plagiarism and concealment of conflicts of interest
          that could affect the interpretation of the data or recommendations
          about their use.
        </p>
        <p>
          Grounds for revocation of the article is the violation of the ethical
          principles of the journal. Among the grounds for revocation of the
          article include:
        </p>
        <List>
          <li>
            the presence of illegal borrowing (plagiarism) in a large volume;
          </li>
          <li>duplicate articles in multiple periodicals;</li>
          <li>
            detection in the work of fraud or fabrication (e.g., manipulation of
            experimental data);
          </li>
          <li>
            detection in the work of serious mistakes (e.g., incorrect
            interpretation of results), which casts doubt on its scientific
            value;
          </li>
          <li>
            not correct the composition of the authors (no author; includes
            individuals who do not meet the criteria of authorship);
          </li>
          <li>hidden conflict of interest;</li>
          <li>reproduction of articles without the author’s consent;</li>
          <li>other violations of ethical principles of the journal.</li>
        </List>
        <p>The reason for the retraction of article are:</p>
        <List>
          <li>the author’s appeal on the revocation of the article;</li>
          <li>the decide of the chief editor of the journal.</li>
        </List>
      </article>
    </>
  );
}
