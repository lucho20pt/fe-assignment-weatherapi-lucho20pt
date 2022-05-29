import { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Slider from 'components/layout/Slider'
import Carousel from 'react-bootstrap/Carousel'
import Search from 'features/weather/Search'
import WeatherLocal from 'features/weather/WeatherLocal'

const Weather = () => {
  // component RETURN
  return (
    <Fragment>
      <section>
        <Container style={{ maxWidth: '500px' }}>
          <Search />
          <Slider>
            <Carousel.Item>
              <WeatherLocal />
            </Carousel.Item>
            <Carousel.Item>
              <WeatherLocal />
            </Carousel.Item>
          </Slider>
        </Container>
      </section>
    </Fragment>
  )
}

export default Weather
