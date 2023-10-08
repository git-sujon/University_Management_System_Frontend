import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const urlExtension = "/management-departments";

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDepartment: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${urlExtension}`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response, meta) => {
        return {
          departments: response,
          meta,
        };
      },
      providesTags: [tagTypes.department],
    }),

    addDepartment: build.mutation({
      query: (data) => ({
        url: `${urlExtension}`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.department],
    }),
  }),
});

export const { useGetDepartmentQuery, useAddDepartmentMutation } =
  departmentApi;
