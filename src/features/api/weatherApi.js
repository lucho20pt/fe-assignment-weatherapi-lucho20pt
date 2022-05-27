import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const weatherApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org'
  }),
  tagTypes: ['City'],
  endpoints: (builder) => ({
    getCityByCoords: builder.query({
      query: (city) =>
        // api.openweathermap.org/data/2.5/weather?APPID=90670e234808f3e0060efb18c2a77546&lat=39.7436&lon=-8.8071&units=metric
        `data/2.5/weather?APPID=${process.env.REACT_APP_APPID}&lat=${city.lat}&lon=${city.lon}&units=metric`,
      providesTags: ['City']
    }),
    getCityByCoords7Days: builder.query({
      query: (city) =>
        // api.openweathermap.org/data/2.5/onecall?APPID=90670e234808f3e0060efb18c2a77546&lat=39.7436&lon=-8.8071&exclude=hourly,minutely&units=metric
        `data/2.5/onecall?APPID=${process.env.REACT_APP_APPID}&q=${city}&exclude=hourly,minutely&units=metric`,
      providesTags: ['City']
    })
    // getCity: builder.mutation({
    //   query: ({ lat, lon }) => ({
    //     // api.openweathermap.org/data/2.5/weather?APPID=90670e234808f3e0060efb18c2a77546&lat=39.7436&lon=-8.8071&units=metric
    //     url: `api.openweathermap.org/data/2.5/weather?APPID=${process.env.REACT_APP_APPID}&lat=${lat}&lon=${lon}&units=metric`
    //   }),
    //   invalidatesTags: ['City']
    // }),
    // getCityByName: builder.query({
    //   query: (city) =>
    //     // api.openweathermap.org/data/2.5/weather?APPID=90670e234808f3e0060efb18c2a77546&q=leiria&units=metric
    //     // transformResponse: res => res.sort((a, b) => b.id - a.id),
    //     `data/2.5/weather?APPID=${process.env.REACT_APP_APPID}&q=${city}&units=metric`,
    //   providesTags: ['City']
    // })
  })
})

export const {
  useGetCityByCoordsQuery,
  useGetCityByCoords7DaysQuery
  // useGetCityByNameQuery
} = weatherApi
