import { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Search from './Search'
import WeatherLocal from 'features/weather/WeatherLocal'

const Weather = () => {
  // component RETURN
  return (
    <Fragment>
      <section className="">
        <Container style={{ maxWidth: '500px' }}>
          <Search />
          <WeatherLocal />
        </Container>
      </section>
    </Fragment>
  )
}

export default Weather
