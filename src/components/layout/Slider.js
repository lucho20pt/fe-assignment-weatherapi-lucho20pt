import { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'
import Carousel from 'react-bootstrap/Carousel'
import 'styles/layout/slider.scss'

const Slider = (props) => {
  //
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  const counter = useSelector((state) => state.weather.citys.length + 1)

  return (
    <Fragment>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        touch={true}
        controls={counter === 1 ? false : true}
        variant="dark"
        className="slider pt-3 mt-2"
      >
        {props.children}
      </Carousel>
    </Fragment>
  )
}

export default Slider
