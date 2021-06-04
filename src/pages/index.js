import React from 'react'

import '../styles/index.scss'

// components
import Footer from '../components/Footer'
import Header from '../components/Header'

const IndexPage = () => {
  return (
    <React.Fragment>
      <Header/>
      <div className='hero_image'>
        <div className='hero_text'>
          <p>Our mission is to establish a relationship-driven practice that provides comprehensive and personalized advisory services. We strive to become a trusted financial partner for our clients in pursuit of their lifetime goals.</p>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default IndexPage
