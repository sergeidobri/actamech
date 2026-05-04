export type TArticleType = "research_paper" | "conference_paper";

// export interface IArticle {
//   id: string;
//   title: string;
//   topic?: string;
//   collectionInfo?: string;
//   authors: IArticleAuthor[];
//   highlights?: string[];
//   doi: string;
//   tables?: ITable[];
//   content: TArticleContent[];
// }

export type TArticleContent =
  | IText
  | ISection
  | IFigure
  | ITable
  | IFundingSection
  | IAcknowledgementSection;

export interface IText {
  type: "text";
  content: DocumentJSON;
}

export interface DocumentJSON {
  type: "doc";
  content: DocumentItemJSON[];
}

export type DocumentItemJSON = TableJSON | ParagraphJSON | BlockMathJSON;

export interface TableJSON {
  type: "table";
  content: TableRowJSON[];
}

export interface TableRowJSON {
  type: "tableRow";
  content: TableCellJSON[];
}

export interface TableCellJSON {
  type: "tableCell";
  // attrs: TableCellAttrs;
  attrs?: any;
  content: ParagraphJSON[];
}

export interface ParagraphJSON {
  type: "paragraph";
  content?: ParagraphItemJSON[];
}

export interface TextJSON {
  type: "text";
  text: string;
  marks?: TextMarkJSON[];
}

export interface TextMarkJSON {
  type: "bold" | "underline" | "italic";
}

export interface InlineMathJSON {
  type: "inlineMath";
  attrs: {
    latex: string;
  };
}

export interface BlockMathJSON {
  type: "blockMath";
  attrs: {
    latex: string;
  };
}

export interface FormulaRefJSON {
  type: "formulaRef";
  attrs: {
    anchor: string;
    text: string;
  };
}

export interface ReferenceJSON {
  type: "reference";
  attrs: {
    number: number;
  };
}

export type ParagraphItemJSON =
  | TextJSON
  | InlineMathJSON
  | BlockMathJSON
  | FormulaRefJSON
  | ReferenceJSON;

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
