import React from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'

// assets
import estatePlanningImage from '../images/estate_planning.jpg'

const EstatePlanningPage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className='services-container'>
        <img className='service-image' src={estatePlanningImage} alt='estate planning' />
        <div className='services-text-container'>
          <h1>Estate Planning</h1>
          <p>We want to help our clients build the legacy that they envisioned - preserving wealth between
          generations, protecting their families and loved ones, contributing to
          charities, or fulfilling social responsibilities. We work with
          clients’ legal advisors to maximize wealth and minimize tax liabilities. Our services can include:</p>
          <ul>
            <li>Will and trust</li>
            <li>Wealth transfer strategies</li>
            <li>Estate distribution plan</li>
            <li>Domestic partner planning</li>
          </ul>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default EstatePlanningPage
