import { baseAPI } from "../base.config";

export const memberApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    createMember: builder.mutation({
      query: (data) => ({
        url: "/pages/teammember",
        method: "POST",
        body: data,
      }),
    }),
    getAllMember: builder.query({
      query: () => ({
        url: "/pages/teammember",
        method: "GET",
      }),
    }),
    deleteMember: builder.mutation({
      query: ({ id }) => ({
        url: `/pages/teammember/${id}`,
        method: "DELETE",
      }),
    }),
    getEachMember: builder.query({
      query: ({ memberid }) => ({
        url: `/pages/teammember/${memberid}`,
        method: "GET",
      }),
    }),
    editMember: builder.mutation({
      query: ({ memberid, data }) => ({
        url: `/pages/teammember/${memberid}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateMemberMutation,
  useGetAllMemberQuery,
  useDeleteMemberMutation,
  useGetEachMemberQuery,
  useEditMemberMutation,
} = memberApi;
