import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'
import weatherSlice from 'features/weather/weatherSlice'
import { weatherApi } from 'features/api/weatherApi'

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    weather: weatherSlice.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(weatherApi.middleware)
})
