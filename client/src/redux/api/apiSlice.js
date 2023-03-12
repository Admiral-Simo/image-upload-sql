import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.1.3:5000",
  }),
  tagTypes: ["Image"],
  endpoints: (builder) => ({
    getImages: builder.query({
      query: () => "/images",
      providesTags: ["Image"],
    }),
    uploadImage: builder.mutation({
      query: (blob) => ({
        method: "POST",
        url: "/upload",
        body: blob,
      }),
      invalidatesTags: ["Image"],
    }),
    deleteImage: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: "/image/delete",
        body: { id },
      }),
      invalidatesTags: ["Image"],
    }),
    register: builder.mutation({
      query: (credentials) => ({
        method: "POST",
        url: "/auth/register",
        body: credentials,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        method: "POST",
        url: "/auth/login",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useGetImagesQuery,
  useUploadImageMutation,
  useDeleteImageMutation,
  useRegisterMutation,
  useLoginMutation,
} = api;
