import SectionTitle from "@/components/ui/SectionTitle";

export default function LatestArticles() {
  return (
    <>
      <SectionTitle title="Latest Articles" classNameTitle="text-accent" />
      <div className="flex flex-row flex-wrap gap-8">
        <article className="text-left-border">
          <h2 className="text-lg font-semibold">
            Articles will appear here when they are published
          </h2>
        </article>
      </div>
    </>
  );
}
