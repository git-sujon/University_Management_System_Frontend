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
    getSingleDepartment: build.query({
      query: (id) => ({
        url: `${urlExtension}/${id}`,
        method: "GET",
      }),

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
    updateDepartment: build.mutation({
      query: (data) => ({
        url: `${urlExtension}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.department],
    }),
    deleteDepartment: build.mutation({
      query: (id) => ({
        url: `${urlExtension}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.department],
    }),
  }),
});

export const {
  useGetDepartmentQuery,
  useGetSingleDepartmentQuery,
  useAddDepartmentMutation,
  useUpdateDepartmentMutation,
  useDeleteDepartmentMutation,
} = departmentApi;
