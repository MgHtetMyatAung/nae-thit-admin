import { baseAPI } from "../base.config";
import { tagTypeData } from "../tagTypes";

export const homeApi = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getHomeBannerInfo: build.query({
      query: () => ({ url: `/pages/homepagebanner`, method: "GET" }),
      providesTags: [tagTypeData.HomeBanner],
    }),
    editHomeBannerInfo: build.mutation({
      query: (data) => ({
        url: `/pages/homepagebanner`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const { useGetHomeBannerInfoQuery, useEditHomeBannerInfoMutation } =
  homeApi;
