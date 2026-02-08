import AboutJournal from "@index-components/AboutJournal";
import EditorInChief from "@index-components/EditorInChief";
import LatestArticles from "@index-components/LatestArticles";
import { Metadata } from "next";

export default function Home() {
  return (
    <>
      <AboutJournal />
      <EditorInChief />
      <LatestArticles />
    </>
  );
}
