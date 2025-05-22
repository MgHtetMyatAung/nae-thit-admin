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
    getEachMission:builder.query({
      query:(MissionId)=>({
       url:`/pages/aboutmission/${MissionId}`,
       method:"GET"
      })
    }),
    editMission:builder.mutation({
      query:({id,data})=>({
        url:`/pages/aboutmission/${id}`,
        method:"PUT",
        body:data
      })
    }),
    deleteMission:builder.mutation({
      query:({id})=>({
        url:`/pages/aboutmission/${id}`,
        method:"DELETE"
      })
    })
  }),
});

export const { useCreateMissionMutation, useGetMissionQuery, useGetEachMissionQuery,useEditMissionMutation,useDeleteMissionMutation } = missionApi;
