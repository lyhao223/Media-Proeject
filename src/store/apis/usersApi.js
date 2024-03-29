import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const usersApi = createApi({
  reducerPath: "/users",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/",
  }),

  endpoints(builder) {
    return {
      fetchUsers: builder.query({
        providesTags: (result, error, user) => {
          return result ? result.map(({ id }) => ({ type: "User", id })) : [];
        },
        query: () => {
          return {
            url: "/users",
            method: "GET",
          };
        },
      }),
      addUser: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [{ type: "User", id: user.id }];
        },
        query: (user) => {
          return {
            url: "/users",
            method: "POST",
            body: {
              userId: user.id,
              name: faker.name.fullName(),
            },
          };
        },
      }),

      removeUser: builder.mutation({
        invalidatesTags: (result, error, user) => {
          console.log(result);
          return [{ type: "User", id: user.id }];
        },
        query: (userId) => {
          return {
            url: `/users/${userId}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export { usersApi };
export const { useFetchUsersQuery, useAddUserMutation, useRemoveUserMutation } =
  usersApi;
