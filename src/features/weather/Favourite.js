import { Fragment } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { weatherActions } from 'features/weather/weatherSlice'
import classes from 'styles/features/weather/favourite.module.scss'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const Favourite = (props) => {
  // const favourite = useSelector((state) => state.weather.citys)

  return (
    <Fragment>
      <Container>
        <Row
          className={`${classes.favourite} | align-items-center justify-content-between | py-2 px-3 mb-3`}
        >
          <Col xs={6} sm={7} className={classes.city}>
            <strong>Vila Real Antonio</strong> / <span>PT</span>
          </Col>
          <Col className={classes.temp}>22º</Col>
          <Col className="text-end">
            <Button
              size="sm"
              className=""
              variant="outline-warning"
              title="Remove City"
            >
              x
            </Button>
          </Col>
        </Row>
        <Row
          className={`${classes.favourite} | align-items-center justify-content-between | py-2 px-3 mb-3`}
        >
          <Col xs={6} sm={7} className={classes.city}>
            <strong>Vila Real St Antonio</strong> / <span>PT</span>
          </Col>
          <Col className={classes.temp}>22º</Col>
          <Col className="text-end">
            <Button
              size="sm"
              className=""
              variant="outline-warning"
              title="Remove City"
            >
              x
            </Button>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default Favourite
