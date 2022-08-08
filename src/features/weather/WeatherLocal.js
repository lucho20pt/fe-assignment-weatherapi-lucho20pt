import { Fragment, useState, useEffect } from 'react'
import { useGetCityByCoordsQuery } from 'features/api/weatherApi'
import moment from 'moment'
import useGeoLocation from 'hooks/useGeolocation'
import { Row, Col, Button } from 'react-bootstrap'
import Forecast from './Forecast'
import Loading from 'components/ui/Loading'
import 'assets/owfont-master/css/owfont-regular.css'
import classes from 'styles/features/weather/weather.module.scss'

const WeatherLocal = () => {
  // Get Location
  const location = useGeoLocation()
  // First City
  const [initialCity, setInitialCity] = useState({
    lat: 39.74362,
    lon: -8.80705
  })
  const [savedCitysList, setSavedCitysList] = useState([])
  // useEffect(() => {
  //   const citys = JSON.parse(localStorage.getItem('citys'))
  //   if (citys) {
  //     setSavedCitysList(citys)
  //   }
  // }, [])
  const [showForecast, setShowForecast] = useState(false)

  const showForecastHandler = () => {
    setShowForecast(!showForecast)
  }

  // weather api
  const {
    data: city,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetCityByCoordsQuery(initialCity)

  // useEffect
  useEffect(() => {
    if (location.loaded && !location.error) {
      setInitialCity({
        lat: location.coordinates.lat,
        lon: location.coordinates.lon
      })
    }
    city && setSavedCitysList([city])
    // return () => {console.log('clear')}
  }, [location, city])
  // localStorage.setItem('citys', JSON.stringify(savedCitysList))

  // content RENDER condition
  let content
  if (isLoading) {
    content = <Loading />
  } else if (isSuccess) {
    content = savedCitysList.map((city) => (
      <Fragment key={city.id}>
        <article
          className={`${classes.weather} | p-2 mb-3 | position-relative`}
        >
          <span className={classes.currentLocation}>Current Location</span>
          <Row>
            <Col className="mx-auto text-center">
              <div className={`${classes.icon}`}>
                <i className={`owf owf-${city.weather[0].id} owf-5x`}></i>
              </div>

              <h1 className={`${classes.name}`}>
                {city.name} / {city.sys.country}
              </h1>

              <h2 className={`${classes.temp}`}>
                {city.main.temp.toFixed(0)}
                <sup>ºC</sup>
              </h2>

              <h3>{city.weather[0].main}</h3>

              <small>{moment.unix(city.dt).format('dddd / D MMMM')}</small>
            </Col>
          </Row>
        </article>
        <aside className="text-center">
          {!showForecast && (
            <Button
              className="mx-auto"
              size="lg"
              variant="outline-primary"
              title="7 day weather forecast for current location"
              onClick={showForecastHandler}
            >
              Forecast for 7 days
            </Button>
          )}
          {showForecast && <Forecast coords={initialCity} />}
        </aside>
      </Fragment>
    ))
  } else if (isError) {
    content = <p>{error}</p>
  }

  // component RETURN
  return <Fragment>{content}</Fragment>
}

export default WeatherLocal
