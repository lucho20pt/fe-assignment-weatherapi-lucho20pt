import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import { weatherApi } from '../features/api/weatherApi'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [weatherApi.reducerPath]: weatherApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(weatherApi.middleware)
})
