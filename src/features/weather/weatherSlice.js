import { createSlice } from '@reduxjs/toolkit'

const initialWheaterState = {
//   citys: [
//     {
//       coord: { lon: -8.8071, lat: 39.7436 },
//       weather: [
//         { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }
//       ],
//       base: 'stations',
//       main: {
//         temp: 19.57,
//         feels_like: 19.31,
//         temp_min: 17.72,
//         temp_max: 21.53,
//         pressure: 1009,
//         humidity: 66
//       },
//       visibility: 10000,
//       wind: { speed: 4.63, deg: 250 },
//       clouds: { all: 75 },
//       dt: 1653848768,
//       sys: {
//         type: 2,
//         id: 2011333,
//         country: 'PT',
//         sunrise: 1653801055,
//         sunset: 1653854080
//       },
//       timezone: 3600,
//       id: 2267095,
//       name: 'Leiria',
//       cod: 200
//     }
//   ],
  citys: [],
  changed: false,
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState: initialWheaterState,
  reducers: {
    addCity(state, action) {
      console.log('addCity')
      const newCity = action.payload
      const existingCity = state.citys.find(
        (city) => city.id === newCity.id
      )
      state.changed = true
      if (!existingCity) {
        state.citys.unshift(newCity)
      }
      //   if (!existingCity) {
      //     state.citys.push({
      //       id: existingCity.sys.id,
      //     });
      //   } else {
      //     state.changed = false;
      //     return false
      //   }
    },
    removeCity(state) {
      console.log('removeCity')
    }
  }
})

export const weatherActions = weatherSlice.actions

export default weatherSlice
