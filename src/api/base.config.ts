import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }),
  endpoints: () => ({}),
});
