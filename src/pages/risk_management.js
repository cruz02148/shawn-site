import React from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'

// assets
import riskMgmtImage from '../images/risk_mgmt.jpg'

const RiskManagementPage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className='services-container'>
        <img className='service-image' src={riskMgmtImage} alt='risk management' />
        <div className='services-text-container'>
          <h1>Risk Management</h1>
          <p>Protecting yourself and loved ones against unexpected events is a fundamental aspect of a well
          designed financial plan. This key process includes identifying, analyzing, and
          finding solutions for potential risks. Some of the tools we use are:</p>
          <ul>
            <li>Comprehensive risk assessment</li>
            <li>Life insurance</li>
            <li>Disability insurance</li>
            <li>Long term care insurance</li>
          </ul>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default RiskManagementPage
