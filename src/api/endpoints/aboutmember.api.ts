import { baseAPI } from "../base.config";

export const memberApi = baseAPI.injectEndpoints({
    endpoints:(builder)=>({
        createMember:builder.mutation({
            query:(data)=>({
                url:"/pages/teammember",
                method:"POST",
                body:data
            })
        })
    })
})

export const {useCreateMemberMutation} = memberApi;