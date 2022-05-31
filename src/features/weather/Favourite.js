import { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { weatherActions } from 'features/weather/weatherSlice'
import classes from 'styles/features/weather/favourite.module.scss'

import { Container, Row, Col, Button } from 'react-bootstrap'

const Favourite = (props) => {
  const favourite = useSelector((state) => state.weather.citys)
  const dispatch = useDispatch()

  const deleteCityHandler = (id) => {
    // console.log(id)
    dispatch(weatherActions.removeCity(id))
  }

  // content RENDER condition
  let content
  if (favourite.length === 0) {
    content = <p>You have no Favourite Citys</p>
  } else {
    content = favourite.map((city) => (
      <Row
        key={city.id}
        className={`${classes.favourite} | align-items-center justify-content-between | py-2 px-3 mb-3`}
      >
        <Col xs={6} sm={7} className={classes.city}>
          <strong>{city.name}</strong> / <span>{city.sys.country}</span>
        </Col>
        <Col className={classes.temp}>{city.main.temp.toFixed(0)}º</Col>
        <Col className="text-end">
          <Button
            size="sm"
            variant="outline-warning"
            title="Remove City"
            onClick={() => deleteCityHandler(city.id)}
          >
            x
          </Button>
        </Col>
      </Row>
    ))
  }

  // component RETURN
  return (
    <Fragment>
      <Container>{content}</Container>
    </Fragment>
  )
}

export default Favourite
