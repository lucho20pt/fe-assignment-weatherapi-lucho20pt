import { Fragment, useState } from 'react'
import moment from 'moment'
import { Row, Col, Button } from 'react-bootstrap'
import Forecast from './Forecast'
import 'assets/owfont-master/css/owfont-regular.css'
import classes from 'styles/features/weather/weather.module.scss'

const City = ({ city }) => {
  const coords = {
    lat: city.coord.lat,
    lon: city.coord.lon
  }
  const [showForecast, setShowForecast] = useState(false)

  const showForecastHandler = () => {
    setShowForecast(!showForecast)
  }

  // content RENDER
  return (
    <Fragment key={city.id}>
      <article className={`${classes.weather} | p-2 mb-3 | position-relative`}>
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
            title="7 day weather forecast for current city"
            onClick={showForecastHandler}
          >
            Forecast for 7 days
          </Button>
        )}
        {showForecast && <Forecast coords={coords} />}
      </aside>
    </Fragment>
  )
}

export default City
