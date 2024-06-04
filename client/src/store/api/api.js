import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'http://localhost:3001/api/';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => '/users',
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: '/users',
        method: 'POST',
        body,
      })
    }),
    updateUser: builder.mutation({
      query: (body) => ({
        url: '/users',
        method: 'PUT',
        body,
      })
    }),
    getSingleUser: builder.query({
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const {
  useGetAllUsersQuery, useGetSingleUserQuery, useCreateUserMutation, useUpdateUserMutation,
} = api;
