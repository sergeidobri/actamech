import MainContainer from "@/components/layout/MainContainer";
import AboutJournal from "@index-components/AboutJournal";
import EditorInChief from "@index-components/EditorInChief";
import LatestArticles from "@index-components/LatestArticles";

export default function Home() {
  return (
    <MainContainer>
      <AboutJournal />
      <EditorInChief />
      <LatestArticles />
    </MainContainer>
  );
}
