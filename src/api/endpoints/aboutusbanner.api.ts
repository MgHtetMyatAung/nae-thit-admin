import { baseAPI } from "../base.config";

const aboutUsApi = baseAPI.injectEndpoints({
   endpoints: (build) => ({
     getAboutUsBanner: build.query<any,void>({
       query: () => ({
         url: `/api/pages/aboutbannergetall`,
         method: "GET",
       }),
     }),
 
     updateAboutUsBanner: build.mutation({
       query: ({data}) => ({
         url: `/api/pages/aboutbanner`,
         method: "PUT",
         body: data,
       }),
     }),
   }),
   overrideExisting: false,
 });

 export const {useGetAboutUsBannerQuery,useUpdateAboutUsBannerMutation} = aboutUsApi