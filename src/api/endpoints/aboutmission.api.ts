import { baseAPI } from "../base.config";

export const missionApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    createMission: builder.mutation({
      query: (data) => ({
        url: "/pages/aboutmission",
        method: "POST",
        body: data,
      }),
    }),
    getMission: builder.query({
      query: () => ({
        url: "/pages/aboutmission",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateMissionMutation, useGetMissionQuery } = missionApi;
