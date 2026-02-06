import AboutJournal from "@index-components/AboutJournal";
import EditorInChief from "@index-components/EditorInChief";
import LatestArticles from "@index-components/LatestArticles";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <AboutJournal />
        <EditorInChief />
        <LatestArticles />
      </div>
    </>
  );
}
