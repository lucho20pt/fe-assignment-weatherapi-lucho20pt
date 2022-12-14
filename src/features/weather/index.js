import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import Slider from 'components/layout/Slider'
import Carousel from 'react-bootstrap/Carousel'
import Search from 'features/weather/Search'
import WeatherLocal from 'features/weather/WeatherLocal'
import City from 'features/weather/City'

const Weather = () => {
  const citys = useSelector((state) => state.weather.citys)

  // component RETURN
  return (
    <Fragment>
      <section>
        <Container style={{ maxWidth: '550px' }}>
          <Search />
          <Slider>
            {citys.map((city) => (
              <Carousel.Item key={city.id}>
                <City city={city} />
              </Carousel.Item>
            ))}
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
