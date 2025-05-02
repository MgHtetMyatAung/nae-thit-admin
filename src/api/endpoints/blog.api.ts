import { baseAPI } from "../base.config";

export const blogApi = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getBlogs: build.query({
      query: () => ({ url: `/pages/bloggetallupdate`, method: "GET" }),
    }),
    // verify: build.mutation({
    //   query: (body) => ({
    //     url: `/admin/loginverify`,
    //     method: "POST",
    //     body: body,
    //   }),
    // }),
    // logout: build.mutation({
    //   query: (body) => ({
    //     url: `/admin/loginverify`,
    //     method: "POST",
    //     body: body,
    //   }),
    // }),
  }),
  overrideExisting: false,
});

export const { useGetBlogsQuery } = blogApi;
