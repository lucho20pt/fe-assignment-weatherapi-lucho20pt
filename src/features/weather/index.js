import { Fragment, useState } from 'react'
import { useGetInitialCityQuery } from '../api/apiSlice'
// import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Search from './Search'
import 'assets/owfont-master/css/owfont-regular.css'
import useGeoLocation from 'hooks/useGeolocation'

const Weather = () => {
  //
  const location = useGeoLocation()
  const [initialCity, setInitialCity] = useState(
    `${location.loaded === true ? location.coordinates : 'leiria'}`
  )
  const [newCity, setNewCity] = useState('leiria')
  console.log(location)

  const {
    data: city,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetInitialCityQuery(newCity)

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
    }
  }

  let content
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
      <Search />
      <section className="">{content}</section>
    </Fragment>
  )
}

export default Weather
