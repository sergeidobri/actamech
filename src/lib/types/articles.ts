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
