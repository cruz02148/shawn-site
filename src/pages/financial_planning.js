import React from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'

// assets
import financialPlanningImage from '../images/financial_planning.jpg'

const FinancialPlanningPage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className='services-container'>
        <div className='services-text-container'>
          <h1>Financial Planning</h1>
          <p>We believe a personalized blueprint should be the foundation of every financial decision.
          Our objective is to outline clients’ goals, resources, concerns, and develop a comprehensive financial plan.
          Our scope of work can include:</p>
          <ul>
            <li>Cashflow analysis</li>
            <li>Employer benefit optimization</li>
            <li>Retirement Planning</li>
            <li>Education Planning</li>
            <li>Long term tax and insurance strategies</li>
            <li>Social Security analysis</li>
            <li>Pension maximation</li>
          </ul>
        </div>
        <img className='service-image' src={financialPlanningImage} alt='financial planning' />
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default FinancialPlanningPage
