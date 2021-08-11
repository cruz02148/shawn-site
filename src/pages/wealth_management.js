import React from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'

// assets
import wealthMgmtImage from '../images/wealth_mgmt.jpg'

const WealthManagementPage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className='services-container'>
        <img className='service-image' src={wealthMgmtImage} alt='wealth management' />
        <div className='services-text-container'>
          <h1>Wealth Management</h1>
          <p>Based on our clients’ financial plan, we create a systematic and disciplined approach to
          help grow, maintain, and protect their portfolios. Our strategies include:</p>
          <ul>
            <li>Asset allocation</li>
            <li>Investment diversification</li>
            <li>Investment Income</li>
            <li>Tax sensitive investment</li>
            <li>Downside protection</li>
          </ul>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default WealthManagementPage
