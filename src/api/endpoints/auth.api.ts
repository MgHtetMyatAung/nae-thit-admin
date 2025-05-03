import { baseAPI } from "../base.config";

export const authApi = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({ url: `/api/admin/login`, method: "POST", body: body }),
    }),
    verify: build.mutation({
      query: (body) => ({
        url: `/api/admin/loginverify`,
        method: "POST",
        body: body,
      }),
    }),
    logout: build.mutation({
      query: (body) => ({
        url: `/admin/loginverify`,
        method: "POST",
        body: body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useVerifyMutation } = authApi;
