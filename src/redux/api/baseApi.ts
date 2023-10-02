import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getBaseUrl } from '@/helpers/config/envConfig'
import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: () => ({
   
  }),
  tagTypes:["user"]
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {  } = baseApi


