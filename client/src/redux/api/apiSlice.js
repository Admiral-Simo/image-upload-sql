import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getImages: builder.query({
      query: () => "/images",
    }),
    uploadImage: builder.mutation({
      query: (blob) => ({
        method: "POST",
        url: "/upload",
        body: { file: blob, message: "hello world" },
      }),
    }),
  }),
});

export const { useGetImagesQuery, useUploadImageMutation } = api;
