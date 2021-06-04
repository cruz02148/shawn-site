import React from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'

const ProcessItem = ({ title, items }) => (
  <li className='process-item'>
    <p>{title}</p>
    <ul className='process-item__items-list'>
      {items.map((item) => {
        return (
          <li>- {item}</li>
        )
      })}
    </ul>
  </li>
)

const ProcessPage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className='process-container'>
        <ol className='process-list'>
          <ProcessItem
            title='Initial Consultation'
            items={['Your story', 'About us', 'Scope of Work']}
          />
          <ProcessItem
            title='Analysis'
            items={['Data gathering', 'Preliminary strategies', 'Strengths and weaknesses', 'Future scenario simulation']}
          />
          <ProcessItem
            title='Solutions'
            items={['Plan presentation', 'Strategies review']}
          />
          <ProcessItem
            title='Execution'
            items={['Strategies implementation', 'Account access', 'Other professional referrals']}
          />
          <ProcessItem
            title='Monitoring and Review'
            items={['Open line of communication', 'On demand and systematic reviews', 'Plan and strategies upkeep']}
          />
        </ol>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default ProcessPage
