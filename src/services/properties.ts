import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API_URL } from '../consts';
import { PropertyData } from '../types';

export const propertiesApi = createApi({
  reducerPath: 'properties',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (builder) => ({
    getPropertyById: builder.query<PropertyData, string | number>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { reducer: propertiesReducer } = propertiesApi;

export const { useGetPropertyByIdQuery } = propertiesApi;
