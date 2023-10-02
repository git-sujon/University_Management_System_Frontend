import { baseApi } from './baseApi'


const authUrl= "/auth"

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${authUrl}/login`,
        method: "POST",
        data:loginData

      }),
      invalidatesTags:["user"]
    }),

  }),
})

export const { useUserLoginMutation } = authApi