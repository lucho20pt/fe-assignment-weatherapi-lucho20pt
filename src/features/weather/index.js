import { Fragment, useState, useEffect } from 'react'
// import { Container, Row, Col, Form, Button } from 'react-bootstrap'
// import Search from './Search'
import useGeoLocation from 'hooks/useGeolocation'
// import 'assets/owfont-master/css/owfont-regular.css'

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

  console.log('->', initialCity);


  let content = <p>content</p>

  return (
    <Fragment>
      <section className="">{content}</section>
    </Fragment>
  )
}

export default Weather
