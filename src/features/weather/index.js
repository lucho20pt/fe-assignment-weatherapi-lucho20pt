import { Fragment, useState, useEffect } from 'react'
import { useGetCityByCoordsQuery } from '../api/weatherApi'
import useGeoLocation from 'hooks/useGeolocation'
// import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import Search from './Search'
import Forecast from './Forecast'
import Loading from 'components/ui/Loading'
import 'assets/owfont-master/css/owfont-regular.css'
import classes from 'styles/features/weather/weather.module.scss'

const Weather = () => {
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
    content = savedCitysList.map((city, i) => (
      <Fragment key={i}>
        <article className={`${classes.weather} p-4`}>
          <Row>
            <Col className="mx-auto text-center">
              <div className={`${classes.icon}`}>
                <i className={`owf owf-${city.weather[0].id} owf-5x`}></i>
              </div>
              <div className={`${classes.name}`}>
                <h1>{city.name}</h1>
              </div>
              <Row>
                <Col className={`${classes.temp}`}>
                  <h2>
                    {Math.round(city.main.temp)}
                    <sup>ºC</sup>
                  </h2>
                </Col>
                <h3>{city.weather[0].main}</h3>
              </Row>
            </Col>
          </Row>
        </article>
        <Forecast name={city.name} />
      </Fragment>
    ))
  } else if (isError) {
    content = <p>{error}</p>
  }

  // component RETURN
  return (
    <Fragment>
      <section className="">
        <Container>
          <Search />
          {content}
        </Container>
      </section>
    </Fragment>
  )
}

export default Weather
