import SectionTitle from "@/components/ui/SectionTitle";

export default function LatestArticles() {
  return (
    <>
      <SectionTitle title="Latest Articles" classNameTitle="text-accent" />
      <div className="flex flex-row flex-wrap gap-8 mt-8">
        <article className="text-left-border ml-4">
          <h2 className="text-lg font-semibold ml-0 indent-0">
            Articles will appear here when they are published
          </h2>
        </article>
      </div>
    </>
  );
}
