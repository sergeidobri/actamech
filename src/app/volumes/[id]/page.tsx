import { ChevronsLeft, ChevronsRight } from "lucide-react";
import Link from "next/link";
import ArticleCard from "@/components/pages/issues/ArticleCard";
import { article } from "@/lib/utils/articles";
import VolumeLink from "@/components/pages/issues/VolumeLink";

export default async function VolumePage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex flex-col gap-4 left_navigation-sticky">
        <div className="flex flex-col gap-6 pb-8 border-b-1 border-b-border-primary">
          <h1 className="text-2xl">Volume {id}</h1>
          <h2 className="pb-2 border-b-2 border-b-accent text-xl">
            Pages 1-1122 (March 2025)
          </h2>
          <a href="" className="cursor-pointer underline hover-accent">
            Download full issue
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl inline">Other Volumes</h2>
          <ul className="flex flex-col gap-2">
            {[6, 5, 4, 3, 2, 1].map((n) => (
              <li key={`volume-${n}`}>
                <VolumeLink
                  id={n}
                  date={new Date(2026, n, n * 2).toISOString()}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="lg:pl-8 flex-1 border-l-border-primary lg:border-l-1">
        <div className="flex flex-row justify-between text-lg">
          <a className="flex flex-row items-center gap-2 hover-accent cursor-pointer border-b-border-primary border-b-2 pr-2 w-fit pb-1">
            <ChevronsLeft />
            <span>
              Previous<span className="hidden sm:inline"> volume/issue</span>
            </span>
          </a>
          <a className="flex flex-row justify-end items-center gap-2 hover-accent cursor-pointer border-b-border-primary border-b-2 pr-2 w-fit pb-1">
            <span>
              Next<span className="hidden sm:inline"> volume/issue</span>
            </span>
            <ChevronsRight />
          </a>
        </div>
        <div className="mt-8">
          <h1 className="border-underline-2 pb-4 text-lg">Regular articles</h1>
          <div className="flex flex-col gap-12 mt-8">
            <ArticleCard
              {...article}
              abstract={
                article.content.find((content) => content.type == "abstract")
                  ?.content
              }
              type="conference_paper"
              editorial={false}
              published_at={new Date().toISOString()}
            />
            <ArticleCard
              {...article}
              abstract={
                article.content.find((content) => content.type == "abstract")
                  ?.content
              }
              type="conference_paper"
              editorial={true}
              published_at={new Date().toISOString()}
            />{" "}
            <ArticleCard
              {...article}
              abstract={
                article.content.find((content) => content.type == "abstract")
                  ?.content
              }
              type="conference_paper"
              editorial={true}
              published_at={new Date().toISOString()}
            />{" "}
            <ArticleCard
              {...article}
              abstract={
                article.content.find((content) => content.type == "abstract")
                  ?.content
              }
              type="conference_paper"
              editorial={true}
              published_at={new Date().toISOString()}
            />{" "}
            <ArticleCard
              {...article}
              abstract={
                article.content.find((content) => content.type == "abstract")
                  ?.content
              }
              type="conference_paper"
              editorial={true}
              published_at={new Date().toISOString()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
