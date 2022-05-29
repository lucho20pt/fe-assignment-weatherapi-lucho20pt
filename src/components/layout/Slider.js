import { Fragment, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'styles/layout/slider.scss'

const Slider = (props) => {
  //
  // const carouselItem = carousel.map((item, i) => (
  //   <Carousel.Item className="text-center pb-5" key={i}>
  //     <h1>Carousel.Item</h1>
  //     <Carousel.Caption>
  //       <h2>Carousel.Caption</h2>
  //     </Carousel.Caption>
  //   </Carousel.Item>
  // ))

  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <Fragment>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        touch={true}
        controls={true}
        variant="dark"
        className="slider pt-3 mt-2"
      >
        {props.children}
      </Carousel>
    </Fragment>
  )
}

export default Slider
