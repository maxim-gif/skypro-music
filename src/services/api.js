import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://skypro-music-api.skyeng.tech/',
    }),
    endpoints: (builder) => ({
        getRefreshToken: builder.mutation({
            query: (body) => ({
                url: `user/token/`,
                method: 'POST',
                body,
            }),
        }),
        getAccessToken: builder.mutation({
            query: (body) => ({
                url: `user/token/refresh/`,
                method: 'POST',
                body,
            }),
        }),
        getCompilationsFavorite: builder.query({
            query: (headers) => ({
                url: `catalog/track/favorite/all/`,
                method: 'GET',
                headers,
            }),
        }),
        getCompilationsFId: builder.query({
            query: (headers, id) => ({
                url: `catalog/selection/${id}/`,
                method: 'GET',
                headers,
            }),
        }),
    }),
})

export const {
    useGetRefreshTokenMutation,
    useGetCompilationsFavoriteQuery,
    useGetCompilationsFIdQuery,
    useGetAccessTokenMutation,
} = api
