import SectionTitle from "@/components/ui/SectionTitle";

export default function EditorInChief() {
  return (
    <>
      <SectionTitle title="Editor-in-Chief" classNameTitle="text-accent" />

      <article className="text-left-border mt-8 ml-4">
        <h2 className="text-lg text-accent font-semibold ml-0 indent-0">
          Prof. Dr. Yury N. Razoumny
        </h2>

        <p className="indent-0">
          Director of Academy of Engineering of RUDN University <br />
          Academician of Russian Academy of Cosmonautics
          <br />
          Academician of International Academy of Astronautics, IAA
          <br />
          Lifetime Associate Fellow, American Institute of Aeronautics and
          Astronautics, AIAA
        </p>
      </article>
    </>
  );
}
