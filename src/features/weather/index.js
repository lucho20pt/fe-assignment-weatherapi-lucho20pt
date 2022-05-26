import { Fragment, useState, useEffect } from 'react'
import { useGetCityByCoordsQuery } from '../api/weatherApi'
// import { Container, Row, Col, Form, Button } from 'react-bootstrap'
// import Search from './Search'
import useGeoLocation from 'hooks/useGeolocation'
import 'assets/owfont-master/css/owfont-regular.css'

const Weather = () => {
  // Get Location
  const location = useGeoLocation()
  // First City
  const [initialCity, setInitialCity] = useState({
    lat: 39.7436,
    lon: -8.8071
  })

  // useEffect
  useEffect(() => {
    if (location.loaded && !location.error) {
      setInitialCity({
        lat: location.coordinates.lat,
        lon: location.coordinates.lon
      })
    }
    // return () => {console.log('clear')}
  }, [location])

  // console.log('->', initialCity);

  const {
    data: city,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetCityByCoordsQuery(initialCity)


  // let content = <p>content</p>
  let content = <h1>{city && city.name}</h1>
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    // console.log(city)
    content = (
      <article>
        <div className="local">
          <h1>{city.name}</h1>
        </div>
        <div className="temp">
          <h2>
            {Math.round(city.main.temp)} <sup>º</sup>C
          </h2>
          <h3>{city.weather[0].main}</h3>
          <h3>
            <i className={`owf owf-${city.weather[0].id} owf-5x`}></i>
          </h3>
        </div>
      </article>
    )
  } else if (isError) {
    content = <p>{error}</p>
  }

  return (
    <Fragment>
      {/* <Search /> */}
      <section className="">{content}</section>
    </Fragment>
  )
}

export default Weather
