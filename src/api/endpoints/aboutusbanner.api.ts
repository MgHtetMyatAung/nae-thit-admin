import { baseAPI } from "../base.config";

interface AboutBannerData {
    // Text fields
    titleen: string;
    titlemy: string;
    abouten: string;
    aboutmy: string;
    blogtitleen: string;
    blogtitlemy: string;
    blogen: string;
    blogmy: string;
    homepageblogtitle_en: string;
    homepageblogtitle_my: string;
    homepageblog_en: string;
    homepageblog_my: string;
    introductionen: string;
    introductionmy: string;
    bannerbgimg?: string;
    backgroundblogimg?: string;
    homepageblogimg?: string;
  }
export const aboutbannerApi = baseAPI.injectEndpoints({
    endpoints:(builder)=>({
        getAboutBanner:builder.query({
            query:()=>({url:"/pages/aboutbannergetall", method:"GET"})
        }),
        editAboutBanner: builder.mutation({
            query:(data)=>({
             url:"/pages/aboutbanner",
             method:"PUT",
             body:data
            })
        })
    })
})

export const {useGetAboutBannerQuery,useEditAboutBannerMutation} = aboutbannerApi;