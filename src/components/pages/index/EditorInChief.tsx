import List from "@/components/ui/List";
import SectionTitle from "@/components/ui/SectionTitle";

export default function EditorInChief() {
  return (
    <>
      <SectionTitle title="Editor-in-Chief" classNameTitle="text-accent" />

      <article className="text-left-border">
        <h2 className="text-lg text-accent font-semibold ml-0 indent-0">
          Prof. Dr. Yury N. Razoumny
        </h2>
        <List>
          <li>Director of Academy of Engineering of RUDN University</li>
          <li>Academician of Russian Academy of Cosmonautics</li>
          <li>Academician of International Academy of Astronautics, IAA</li>
          <li>
            Lifetime Associate Fellow, American Institute of Aeronautics and
            Astronautics, AIAA
          </li>
        </List>
      </article>
    </>
  );
}
