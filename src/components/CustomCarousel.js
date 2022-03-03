import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

// assets
import estatePlanningImage from '../images/estate_planning.jpg'
import paperworkImage from '../images/paperwork.jpg'
import valuesImage from '../images/our_values.jpg'

const CustomCarousel = () => (
  <Carousel fade interval={7000} pause={false}>
    <Carousel.Item>
      <img
        alt='estate planning carousel'
        className='carousel-img'
        src={estatePlanningImage}
      />
      <div className='carousel-text'>
        <p>Life is short - Let us focus on the financials while you focus on the things you love</p>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <img
        alt='paperwork carousel'
        className='carousel-img'
        src={paperworkImage}
      />
      <div className='carousel-text'>
        <p>Our mission is to establish a relationship-driven practice that provides comprehensive and personalized advisory services</p>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <img
        alt='values carousel'
        className='carousel-img'
        src={valuesImage}
      />
      <div className='carousel-text'>
        <p>We strive to become a trusted financial partner for our clients in pursuit of their lifetime goals</p>
      </div>
    </Carousel.Item>
  </Carousel>
)
export default CustomCarousel
