import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const API_URL = 'http://localhost:3001/api/';

export const adminUsers = createApi({
  reducerPath: 'adminUsers',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: ({ username, password }) => ({
        url: '/registration',
        method: 'POST',
        body: { username, password },
      })
    }),
    getAllAdmins: builder.query({
      query: () => '/admins',
    }),
  }),
});

export const {
  useRegistrationMutation, useGetAllAdminsQuery,
} = adminUsers;
