import {
  ArticleContentType,
  ArticleVolume,
  AuthorInArticle,
  TArticleType,
} from "@/lib/types/articles";
import { VolumeEditor } from "@/lib/types/editors";

export interface BaseAPIResponse<T> {
  message: string;
  data: T;
}

export interface SingleArticleResponse {
  id: string;
  title: string;
  pages_in_volume: string;
  abstract: string;
  keywords: string[];
  editorial: boolean;
  type: TArticleType;
  doi?: string | null;
  received_at?: string | null;
  revised_at?: string | null;
  accepted_at?: string | null;
  published_at?: string | null;
  body?: ArticleContentType | null;
  volume: ArticleVolume;
  authors: AuthorInArticle[];
}

export interface BaseProceeding {
  id: string;
  title: string;
}

export interface ProceedingResponse extends BaseProceeding {
  volumes: {
    id: string;
    title: string;
    conference_full_name: string;
    volume_number: string;
  }[];
}

export interface ProceedingVolumeResponse {
  id: string;
  proceeding: BaseProceeding;
  editors: VolumeEditor[];
  title: string;
  volume_number: string;
  total_pages: string;
  place: string;
  description: string;
  conference_full_name: string;
  held_at: string;
  published_at: string;
  articles: {
    id: string;
    abstract: string;
    doi: string;
    title: string;
    type: TArticleType;
    editorial: boolean;
    published_at: string;
    authors: {
      first_name: string;
      last_name: string;
    }[];
  }[];
}
