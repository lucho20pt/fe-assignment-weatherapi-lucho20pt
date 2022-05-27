import { Fragment, useState, useEffect } from 'react'
import { useGetCityByCoords7DaysQuery } from '../api/weatherApi'
import useGetDayName from 'hooks/useGetDayName'
import { Container, Row, Col } from 'react-bootstrap'
import Loading from 'components/ui/Loading'
import 'assets/owfont-master/css/owfont-regular.css'
import classes from 'styles/features/weather/weather.module.scss'

const Forecast = ({ name }) => {
  // console.log(name);
  const obj = {
    dt: 1653566400,
    id: 2643743,
    main: {
      temp: 71.8,
      feels_like: 66.69,
      temp_min: 71.01,
      temp_max: 73,
      pressure: 1014
    },
    name: 'London',
    sys: {
      type: 1,
      id: 1414,
      country: 'GB',
      sunrise: 1592106173,
      sunset: 1592165939
    },
    timezone: 3600
  }
//   const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//   const date = new Date(obj.dt * 1000 + obj.timezone * 1000).getDay()
//   const d = weekDays[date]

const day = useGetDayName(obj.dt, obj.timezone)
console.log(day);

  // weather api
  //   const {
  //     data: forecast,
  //     isLoading,
  //     isSuccess,
  //     isError,
  //     error
  //   } = useGetCityByCoords7DaysQuery(name)

  //   console.log(forecast);

  // content RENDER condition
  let content = <p>empty forecast</p>
  //   if (isLoading) {
  //     content = <Loading />
  //   } else if (isSuccess) {
  //     content = <p>content</p>
  //   } else if (isError) {
  //     content = <p>{error}</p>
  //   }

  // component RETURN
  return <Fragment>{content}</Fragment>
}

export default Forecast
