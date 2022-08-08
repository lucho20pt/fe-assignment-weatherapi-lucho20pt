import { Fragment } from 'react'
import { useGetCityByCoords7DaysQuery } from 'features/api/weatherApi'
import moment from 'moment'
import Loading from 'components/ui/Loading'
import 'assets/owfont-master/css/owfont-regular.css'
import classes from 'styles/features/weather/forecast.module.scss'

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
      <ul
        className={`${classes.forecast} | d-flex justify-content-around | p-1 text-center`}
      >
        {forecast.daily.slice(1).map((day) => (
          <li className="d-flex flex-column | text-center p-1" key={day.dt}>
            <p>
              <strong>{moment.unix(day.dt).format('dd')}</strong> <br />
              <small>
                <strong>{moment.unix(day.dt).format('D')}</strong>
              </small>
            </p>

            <div className={`${classes.icon}`}>
              <i className={`owf owf-${day.weather[0].id} owf-2x`}></i>
            </div>

            <p className="mb-0">
              <strong>{day.temp.day.toFixed(0)}</strong>
              <sup>º</sup>
            </p>
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
