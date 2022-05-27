import { Fragment } from 'react'
import { useGetCityByCoords7DaysQuery } from 'features/api/weatherApi'
import moment from 'moment'
import Loading from 'components/ui/Loading'
import 'assets/owfont-master/css/owfont-regular.css'
import classes from 'styles/features/weather/weather.module.scss'

const Forecast = ({ coords }) => {
  //   console.log(coords)

  // weather api
  const {
    data: forecast,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetCityByCoords7DaysQuery(coords)

  // content RENDER condition
  let content
  if (isLoading) {
    content = <Loading />
  } else if (isSuccess) {
    content = (
      <ul className="d-flex justify-content-around">
        {forecast.daily.slice(1).map((day, i) => (
          <li className="px-1" key={i}>
            <p>
              <strong>{Math.round(day.temp.day)}</strong>
              <sup>ºc</sup>
            </p>
            <div className={`${classes.icon}`}>
              <i className={`owf owf-${day.weather[0].id} owf-2x`}></i>
            </div>
            <p>{moment.unix(day.dt).format('dd')}</p>
          </li>
        ))}
      </ul>
    )
  } else if (isError) {
    content = <p>{error}</p>
  }

  // component RETURN
  return <Fragment>{content}</Fragment>
}

export default Forecast
