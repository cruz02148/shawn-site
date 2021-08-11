import React from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'

// assets
import valuesImage from '../images/our_values.jpg'

const OurValuesPage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className='services-container'>
        <img className='service-image' src={valuesImage} alt='our values' />
        <div className='services-text-container'>
          <h1>Our Values</h1>
          <p>Our independence is your advantage. We believe having an open architecture
          and non-proprietary product inventory truly allows us to act as a
          fiduciary and provide unbiased advice. Our goal is to:</p>
          <ul>
            <li>Build genuine long-term relationships</li>
            <li>Act in clients’ best interests</li>
            <li>Deliver objective evaluation</li>
            <li>Follow a disciplined investment process</li>
          </ul>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default OurValuesPage
