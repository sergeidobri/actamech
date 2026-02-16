import {
  BaseAPIResponse,
  ProceedingResponse,
  ProceedingVolumeResponse,
  SingleArticleResponse,
} from "./types";

export const baseGetFetch = async <T>(
  url: string,
): Promise<BaseAPIResponse<T>> => {
  const response = await fetch(`${process.env.API_BASE_URL}${url}`, {
    method: "GET",
  });

  if (response.status == 404) {
    return { message: "error", data: null };
  }

  if (!response.ok) {
    throw new Error(`HTTP error. status: ${response.status}`);
  }

  const result: BaseAPIResponse<T> = await response.json();
  return result;
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
