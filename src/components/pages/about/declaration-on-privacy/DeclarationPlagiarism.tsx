import List from "@/components/ui/List";
import SectionTitle from "@/components/ui/SectionTitle";

export default function DeclarationPlagiarism() {
  return (
    <>
      <SectionTitle title="Policy Towards Plagiarism" />
      <article className="text-left-border">
        <p>
          All the papers submitted to the Editorial office at the preliminary
          stage of consideration are to be inspected in relation to correctness
          of borrowings. Should there be any justified suspicions in plagiarism
          or should any technical tricks which can allow to hide it be detected
          a paper is not accepted for further consideration. Authors are
          informed about a paper rejection due to occurrence of suspicion in
          plagiarism. Should plagiarism be detected in a paper which has already
          been published such paper is retracted from publication without any
          possibility to be recovered (without physical removal and only by
          publishing a statement on plagiarism occurrence on the relevant
          web-pages on the journal web-site and a paper file). Should any
          incorrect borrowing occur in a submitted paper, all cases of such
          borrowings are to be considered individually.
        </p>
        <p>The Editorial office treat the following as plagiarism:</p>
        <List>
          <li>
            use (word-for-word citing) of any materials in any volume without
            indicating a source;
          </li>
          <li>
            use of images, figures, photos, tables, graphs, schemes and any
            other graphic information without indicating a source;
          </li>
          <li>
            use of images, figures, photos, tables, graphs, schemes and any
            other graphic information published in scientific and popular
            editions without a copyright holder’s consent;
          </li>
          <li>
            absence of written consent to use materials authors or copyright
            holders of which forbid use of their materials without firm
            agreement.
          </li>
        </List>
        <p>The Editorial office treat the following as incorrect borrowings:</p>
        <List>
          <li>
            absence of graphic highlighting of a word-for-word cited text but
            with a link to s source;
          </li>
          <li>
            incorrect references (incomplete data on reference description of a
            source which make its identification rather complicated);
          </li>
          <li>
            a reference which is given not to the first source of a borrowed
            text without clear indication of the fact (an error in determining
            the original source);
          </li>
          <li>
            absence of references from the text to sources given in a paper
            references;
          </li>
          <li>
            excessive citing (when there are references to sources and graphic
            highlighting of a cited text), a volume of which cannot be justified
            by a paper genre and goals.
          </li>
        </List>
        <p>
          An acceptable volume of citing (correct borrowings) cannot exceed 30%
          of the total paper volume. This requirement is not applicable to
          reviews and other papers which objectively require greater citing
          volumes. Such materials are considered by the Editorial office
          individually. Papers the content of which corresponds to other
          scientific materials of the same author (thesis, abstract of a thesis,
          monograph, previous publications in journals and collections) in
          volume greater than 30% are not accepted for publishing.
        </p>
      </article>
    </>
  );
}
