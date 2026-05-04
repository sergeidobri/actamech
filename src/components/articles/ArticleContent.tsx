import { SingleArticleResponse } from "@/api/types";
import ArticleFigure from "./ArticleFigure";
import ArticleTable from "./ArticleTable";
import { TArticleContent } from "@/lib/types/articles";
import { Fragment } from "react/jsx-runtime";
import ArticleSectionTitle from "./ArticleSectionTitle";
import { MathJax } from "@/components/mathjax/MathJax";
import ArticleSection from "./ArticleSection";
import { useMemo, useState } from "react";
import ArticleText from "./ArticleText";

interface ArticleContentProps {
  article: SingleArticleResponse;
  expanded: boolean;
  setExpanded: (value: boolean) => void;
}

export default function ArticleContent({
  article,
  expanded,
  setExpanded,
}: ArticleContentProps) {
  // TODO добавить нормальный источник рефов
  const [refs, setRefs] = useState<{ number: number; text: string }[]>([
    {
      number: 1,
      text: "Иванов, И. И., Петров, П. П., & Сидоров, С. С. (2024). Влияние квантовых флуктуаций на структуру нейронных сетей нового поколения. Журнал теоретической физики и искусственного интеллекта, 15(3), 234–250. doi.org",
    },
    {
      number: 2,
      text: "Иванов, И. И., Петров, П. П., & Сидоров, С. С. (2024). Влияние квантовых флуктуаций на структуру нейронных сетей нового поколения. Журнал теоретической физики и искусственного интеллекта, 15(3), 234–250. doi.org",
    },
    {
      number: 3,
      text: "Иванов, И. И., Петров, П. П., & Сидоров, С. С. (2024). Влияние квантовых флуктуаций на структуру нейронных сетей нового поколения. Журнал теоретической физики и искусственного интеллекта, 15(3), 234–250. doi.org",
    },
  ]);

  const handleArticleContentRender = (
    content: TArticleContent,
    contentIndex: number,
  ) => {
    switch (content.type) {
      case "figure":
        return (
          <ArticleSection key={`${contentIndex}-figure-${content.title}`}>
            {content && <ArticleFigure figure={content} />}
          </ArticleSection>
        );
      case "table":
        return (
          <ArticleSection key={`${contentIndex}-table-${content.title}`}>
            {content && <ArticleTable table={content} />}
          </ArticleSection>
        );
      case "section":
        return (
          <Fragment key={`${contentIndex}-section-${content.title}`}>
            <ArticleSectionTitle id={content.number + content.title}>
              {content.number && `${content.number}. `} {content.title}
            </ArticleSectionTitle>
            <ArticleSection>{generateContents(content.content)}</ArticleSection>
          </Fragment>
        );
      case "text":
        return (
          // <MathJax
          //   key={`${contentIndex}-text-${content.content}`}
          //   className="text-sm"
          //   html={content.content}
          // />
          <ArticleText
            key={`${contentIndex}-text`}
            json={content.content}
            setExpanded={setExpanded}
          />
        );
      default:
        break;
    }
    return;
  };

  const generateContents = (contents: TArticleContent[]) => {
    return (
      <>
        {contents.map((content, contentIndex) =>
          handleArticleContentRender(content, contentIndex),
        )}
      </>
    );
  };

  const content = useMemo(() => generateContents(article.body || []), []);

  return (
    <div className="flex-1 min-w-0 -mt-3">
      <article className="article-content">
        {article.abstract && (
          <>
            <ArticleSectionTitle id="abstract">Abstract</ArticleSectionTitle>
            <ArticleSection>{article.abstract}</ArticleSection>
          </>
        )}
        {article.keywords.length > 0 && (
          <>
            <ArticleSectionTitle id="keywords">Keywords</ArticleSectionTitle>
            <ArticleSection>
              {article.keywords.map((keyword, i) => (
                <span key={keyword}>
                  {i !== 0 && ", "}
                  {keyword}
                </span>
              ))}
            </ArticleSection>
          </>
        )}
        {/* {article.body &&
          (expanded ? (
            <div>{generateContents(article.body)}</div>
          ) : (
            <div className="relative max-h-200 overflow-hidden">
              {generateContents(article.body)}
              <div className="absolute inset-x-0 bottom-0 h-30 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </div>
          ))} */}
        {article.body && (
          <div
            className={`relative ${expanded ? "" : "max-h-200 overflow-hidden"}`}
          >
            {/* {generateContents(article.body)} */}
            {content}
            {!expanded && (
              <div className="absolute inset-x-0 bottom-0 h-30 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            )}
          </div>
        )}
        {article.body && !expanded && (
          <div className="text-center flex flex-col items-center gap-4 mx-auto py-6 border-y-2 my-4">
            <div>
              <h2 className="text-xl">Access the article</h2>
              <p>Click button below to view the whole article</p>
            </div>
            <button
              className="px-8 py-2 hover:bg-accent bg-secondary transition-colors w-fit text-primary cursor-pointer rounded-xs"
              onClick={() => setExpanded(true)}
            >
              Show article
            </button>
          </div>
        )}
        {article.body &&
          expanded &&
          article.body.map((section) => {
            switch (section.type) {
              case "acknowledgement":
                return (
                  <Fragment key={section.content}>
                    <ArticleSectionTitle id="acknowledgement">
                      Acknowledgement
                    </ArticleSectionTitle>
                    <ArticleSection>
                      <p>{section.content}</p>
                    </ArticleSection>
                  </Fragment>
                );
              case "funding":
                return (
                  <Fragment key={section.content}>
                    <ArticleSectionTitle id="funding">
                      Funding
                    </ArticleSectionTitle>
                    <ArticleSection>
                      <p>{section.content}</p>
                    </ArticleSection>
                  </Fragment>
                );
              default:
                break;
            }
          })}
        {refs.length > 0 && expanded && (
          <section>
            <ArticleSectionTitle id="acknowledgement">
              References
            </ArticleSectionTitle>
            <div className="flex flex-col items-center gap-4">
              {refs.map((ref) => (
                <p
                  key={`${ref.number}-${ref.text}`}
                  id={`reference-${ref.number}`}
                >
                  <span>[{ref.number}]</span> {ref.text}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* <section>
					<h2 id="references">References</h2>
					<div className="flex flex-row items-center gap-8 mt-8">
						<span className="text-2xl">[1]</span>
						<div>
							<span className="text-accent font-semibold">
								Y.D. Wu, W. Wang, H.X. Zhu, S.F. Wu, C.J.
								Damaren
							</span>
							<p className="font-semibold">
								Adaptive fault-tolerant control for spacecraft
								formation under external disturbances with
								guaranteed performance
							</p>
						</div>
					</div>
					<div className="flex flex-row items-center gap-8 mt-8">
						<span className="text-2xl">[2]</span>
						<div>
							<span className="text-accent font-semibold">
								Y.D. Wu, W. Wang, H.X. Zhu, S.F. Wu, C.J.
								Damaren
							</span>
							<p className="font-semibold">
								Adaptive fault-tolerant control for spacecraft
								formation under external disturbances with
								guaranteed performance
							</p>
						</div>
					</div>
				</section> */}
        {/* <section>
					<h2 id="references">Cited by (0)</h2>
				</section> */}
        {/* <section className="text-accent font-semibold mt-8">
					<p>View Abstract</p>
					<p>
						© 2025 IAA. Published by Actamech. All rights are
						reserved, including those for text and data mining, AI
						training, and similar technologies.
					</p>
				</section> */}
      </article>
    </div>
  );
}
