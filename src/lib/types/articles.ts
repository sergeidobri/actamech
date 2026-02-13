export type TArticleType = "research_paper" | "conference_paper";

export interface IArticle {
  id: string;
  title: string;
  topic?: string;
  collectionInfo?: string;
  authors: IArticleAuthor[];
  highlights?: string[];
  doi: string;

  tables?: ITable[];
  content: TArticleContent[];
}

export type TArticleContent =
  | IText
  | ISection
  | IKeywords
  | IAbstract
  | IFigure
  | ITable;

export interface IText {
  type: "text";
  content: string;
}
export interface IKeywords {
  type: "keywords";
  content: string[];
}
export interface IAbstract {
  type: "abstract";
  content: string;
}

export interface ISection {
  type: "section";
  title: string;
  number?: string;
  content: TArticleContent[];
}

export interface IFigure {
  type: "figure";
  title: string;
  number?: string;
  image: string;
}

export interface IArticleAuthor {
  id: string;
  fullName: string;
  description?: string;
  affiliations?: IAffiliation[];
}

export interface IAffiliation {
  id: string;
  name: string;
}

export interface ITable {
  title: string;
  number?: string;
  type: "table";
  data: ITableData;
}

export interface ITableData {
  rows: ITableRow[];
}

export interface ITableRow {
  cells: ITableCell[];
}

export interface ITableCell {
  data: string;
  style?: ITableCellStyle;
}

export interface ITableCellStyle {
  bold?: boolean;
  italic?: boolean;
}

// for API

export type ArticleContentType = (IFundingSection | IAcknowledgementSection)[];

export interface IFundingSection {
  type: "funding";
  content: string;
}

export interface IAcknowledgementSection {
  type: "acknowledgement";
  content: string;
}

export interface ArticleVolume {
  id: string;
  title: string;
  published_at: string;
  volume_number: string;
  conference_full_name: string;
}

export interface AuthorInArticle {
  id: string;
  first_name: string;
  last_name: string;
  middle_name?: string | null;
  email?: string | null;
  scopus_id?: string | null;
  orcid_id?: string | null;
  affiliations: AffiliationInAuthor[];
}

export interface AffiliationInAuthor {
  id: string;
  name: string;
  address: string;
  country: string;
  postal_code?: string | null;
  aliases: AffiliationAliasInResponse[];
  clarifications: AffiliationClarificationInResponse[];
}

export interface AffiliationAliasInResponse {
  id: number;
  alias: string;
}

export interface AffiliationClarificationInResponse {
  id: number;
  faculty?: string | null;
  department?: string | null;
}
