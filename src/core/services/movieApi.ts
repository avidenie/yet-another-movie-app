import { TMDB_API_KEY } from '@env';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { MovieResource, PaginatedResource } from './types';

const defaultBaseQuery = fetchBaseQuery({
  baseUrl: 'https://api.themoviedb.org/3/',
});

const customBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const url = typeof args === 'string' ? args : args.url;
  const adjustedArgs = typeof args === 'string' ? { url } : { ...args, url };

  return defaultBaseQuery(
    {
      ...adjustedArgs,
      params: {
        ...adjustedArgs.params,
        api_key: TMDB_API_KEY,
      },
    },
    api,
    extraOptions,
  );
};

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: customBaseQuery,
  endpoints: builder => ({
    getPopularMovies: builder.query<PaginatedResource<MovieResource>, void>({
      query: () => 'movie/popular',
    }),
  }),
});

export const { useGetPopularMoviesQuery } = movieApi;
