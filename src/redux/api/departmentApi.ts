import { tagTypes } from '../tagTypes'
import { baseApi } from './baseApi'


const urlExtension= "/management-department"

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addDepartment: build.mutation({
      query: (data) => ({
        url: `${urlExtension}`,
        method: "POST",
        data:data

      }),
      invalidatesTags:[tagTypes.department]
    }),

  }),
})

export const { useAddDepartmentMutation } = departmentApi