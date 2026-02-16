import { getArticleById, getProceedingById } from "@/api/api";
import ArticleContent from "@/components/articles/ArticleContent";
import ArticleNav from "@/components/articles/ArticleNav";
import Authors from "@/components/authors/Authors";
import MainContainer from "@/components/layout/MainContainer";
import Logo from "@/components/ui/Logo";
import { resolveArticleType } from "@/lib/utils/articles";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function VolumeArticlePage({
  params,
}: {
  params: Promise<{
    proceedingId: string;
    volumeId: string;
    articleId: string;
  }>;
}) {
  const { proceedingId, articleId } = await params;
  const { data: articleData } = await getArticleById(articleId);
  const { data: proceedingData } = await getProceedingById(proceedingId);

  if (!articleData || !proceedingData) {
    notFound();
  }

  console.log(articleData);

  return (
    <MainContainer>
      <div className="border-b-secondary border-b-2 pb-2">
        <div className="flex flex-row justify-center lg:justify-between items-center py-10 lg:py-0">
          <Logo dark className="hidden lg:flex" />
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-2xl sm:text-3xl uppercase">
              {proceedingData.title}
            </h1>
            <h2>
              Volume {articleData.volume.volume_number},{" "}
              {new Date(articleData.volume.published_at).toLocaleString(
                "en-US",
                {
                  month: "long",
                  year: "numeric",
                },
              )}
              ,{" "}
              {articleData.pages_in_volume
                ? `Pages: ${articleData.pages_in_volume}`
                : articleData.id.toUpperCase()}
            </h2>
          </div>
          <Image
            src={`/images/covers/${articleData.volume.id}.webp`}
            width={300}
            height={300}
            className="h-60 w-auto rounded-2xl hidden lg:flex"
            alt="Volume Cover"
          />
        </div>
      </div>
      <div className="mt-8 border-b-secondary border-b-2 pb-4">
        <div className="text-center my-8">
          <h1 className="text-3xl font-semibold mt-4">{articleData.title}</h1>
          <Authors volume={articleData.volume} authors={articleData.authors} />
          <div className="text-primary-text/40">
            {articleData.received_at && (
              <p>
                Received at{" "}
                {new Date(articleData.received_at).toLocaleDateString()}
              </p>
            )}
            {articleData.revised_at && (
              <p>
                Revised at{" "}
                {new Date(articleData.revised_at).toLocaleDateString()}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-row justify-between text-primary-text/60">
          <span className="pb-1 border-b-accent border-b-1 font-semibold w-fit">
            {resolveArticleType(articleData.type)}
          </span>
          <span className="pb-1 border-b-accent border-b-1 font-semibold w-fit text-right hover:text-primary-text hover:pb-0 hover:border-b-2">
            <a target="_blank" href={`https://doi.org/${articleData.doi}`}>
              {articleData.doi}
            </a>
          </span>
        </div>
      </div>

      <div className="relative">
        {/* <ArticleNav article={articleData} /> */}
        <ArticleContent article={articleData} />
      </div>
    </MainContainer>
  );
}
