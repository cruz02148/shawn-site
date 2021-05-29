import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import TeamMemeber from '../components/TeamMember'

import testAvatar from '../images/example_avatar.jpeg'

const shawnResponsibilities = [
  'Develop personal and working relationships with clients',
  'Design financials plans and strategies',
  'Break down complex financial concepts to help clients make the best decision',
  'Conduct regular review with clients to keep track of progress',
  'Provide personal consultation for all financial decisions'
]

const gregResponsibilities = [
  'Specialize in account management and portfolio analysis',
  'Tailor clients’ portfolios based on financial plans and investment objectives',
  'Monitor and rebalance accounts',
  'Maintain relationships with partnered financial companies'
]

const TeamPage = () => {
  return (
    <React.Fragment>
      <Header />
      <div>
        <TeamMemeber
          avatar={testAvatar}
          name="Shawn Zhu"
          phoneNumber="(123)-456-7890"
          email="shawn@birchfp.com"
          linkedInProfile="https://www.linkedin.com/in/shawn-zhu-4304b592"
          responsibilities={shawnResponsibilities}
        />
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default TeamPage
