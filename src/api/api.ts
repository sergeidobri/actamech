import { apiInstance } from "./axiosInstance";
import {
  BaseAPIResponse,
  ProceedingResponse,
  ProceedingVolumeResponse,
  SingleArticleResponse,
} from "./types";

export const baseGetFetch = async <T>(
  url: string,
): Promise<BaseAPIResponse<T>> => {
  const { data }: { data: BaseAPIResponse<T> } = await apiInstance.get(url);
  return data;
};

export const getArticleById = async (id: string) => {
  return await baseGetFetch<SingleArticleResponse>(`/articles/${id}`);
};

export const getProceedingById = async (id: string) => {
  return await baseGetFetch<ProceedingResponse>(`/proceedings/${id}`);
};

export const getProceedingVolumeById = async (id: string) => {
  return await baseGetFetch<ProceedingVolumeResponse>(
    `/proceedings/volumes/${id}`,
  );
};
