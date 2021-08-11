import React from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'

const ProcessItem = ({ number, title, items }) => (
  <li className='process-item'>
    <div className='process-item__number-container'>
      <p>{number}</p>
    </div>
    <div className='process-item__items-container'>
      <p className='process-item__title'>{title}</p>
      <ul className='process-item__items-list'>
        {items.map((item) => {
          return (
            <li>→ {item}</li>
          )
        })}
      </ul>
    </div>
  </li>
)

const ProcessPage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className='process-container'>
        <ol className='process-list'>
          <ProcessItem
            number='1'
            title='Initial Consultation'
            items={['Your story', 'About us', 'Scope of Work']}
          />
          <ProcessItem
            number='2'
            title='Analysis'
            items={['Data gathering', 'Preliminary strategies', 'Strengths and weaknesses', 'Future scenario simulation']}
          />
          <ProcessItem
            number='3'
            title='Solutions'
            items={['Plan presentation', 'Strategies review']}
          />
          <ProcessItem
            number='4'
            title='Execution'
            items={['Strategies implementation', 'Account access', 'Other professional referrals']}
          />
          <ProcessItem
            number='5'
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
