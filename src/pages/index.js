import React from 'react'

import '@fontsource/open-sans'
import '../styles/index.scss'

// components
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavigationBar from '../components/NavigationBar'

const IndexPage = () => {
  return (
    <React.Fragment>
      <Header/>
      <NavigationBar />
      <div className='hero_image'>
        <div className='hero_text'>
          <p>Life is short - Let us focus on the financials while you focus on the things you love</p>
          <p>Our mission is to establish a relationship-driven practice that provides comprehensive and personalized advisory services. We strive to become a trusted financial partner for our clients in pursuit of their lifetime goals.</p>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default IndexPage
