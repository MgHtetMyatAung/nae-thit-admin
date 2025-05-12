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
    getTestimonials: build.query({
      query: () => ({ url: `/pages/testimonals`, method: "GET" }),
      providesTags: [tagTypeData.Testimonial],
    }),
    // getBlogDetail: build.query({
    //   query: ({ id }) => ({
    //     url: `/pages/blog/${id}`,
    //     method: "GET",
    //   }),
    //   providesTags: [tagTypeData.Blog],
    // }),
    createTestimonial: build.mutation({
      query: (data) => ({
        url: `/pages/testimonals`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypeData.Testimonial],
    }),
    editTestimonial: build.mutation({
      query: ({ data, id }) => ({
        url: `/pages/testimonals/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [tagTypeData.Testimonial],
    }),
    deleteTestimonial: build.mutation({
      query: ({ id }) => ({
        url: `/pages/testimonals/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypeData.Testimonial],
    }),
  }),
});

export const {
  useGetHomeBannerInfoQuery,
  useEditHomeBannerInfoMutation,
  useCreateTestimonialMutation,
  useDeleteTestimonialMutation,
  useEditTestimonialMutation,
  useGetTestimonialsQuery,
} = homeApi;
