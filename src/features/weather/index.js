import { Fragment } from 'react'
// import { Container, Row, Col, Button } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import Search from './Search'
import WeatherLocal from 'features/weather/WeatherLocal'

const Weather = () => {
  // component RETURN
  return (
    <Fragment>
      <section className="">
        <Container>
          <Search />
          <WeatherLocal />
        </Container>
      </section>
    </Fragment>
  )
}

export default Weather
