import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


import Header from '../components/Header'
import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'

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
/*
<TeamMemeber
  avatar={testAvatar}
  name="Shawn Zhu"
  phoneNumber="(781)-228-1036"
  email="shawn@birchfp.com"
  linkedInProfile="https://www.linkedin.com/in/shawn-zhu-4304b592"
  responsibilities={shawnResponsibilities}
/>
<TeamMemeber
  avatar={testAvatar}
  name="Gregory Hughes"
  phoneNumber="(603)-714-4766"
  email="greg@birchfp.com"
  linkedInProfile="https://www.linkedin.com/in/gregory-hughes-16665625"
  responsibilities={gregResponsibilities}
/>
*/
const TeamPage = () => {
  return (
    <React.Fragment>
      <Header />
      <NavigationBar />
      <div className='team'>
        <Container>
          <div className='section-header text-center'>
            <p>Meet Our Team</p>
            <h2>Our Financial Advisors</h2>
          </div>
          <Row>
            <Col lg={3} md={6}>
              <div className='team-item'>
                <div className='team-img'>
                  <img alt='shawn profile' src={testAvatar} />
                </div>
                <div className='team-text'>
                  <h2>Shawn Zhu</h2>
                  <p>Co-Founder & Advisor</p>
                  <p className='sub-text'>Financial Advisor since 2012</p>
                  <div className='team-social'>
                    <a href='https://www.linkedin.com/in/shawn-zhu-4304b592'>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href='mailto:shawn@birchfp.com'>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className='team-item'>
                <h3>Responsibilities:</h3>
                <ul>
                  {shawnResponsibilities.map(item => <li>{item}</li>)}
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className='team-item'>
                <div className='team-img'>
                  <img alt='greg profile' src={testAvatar} />
                </div>
                <div className='team-text'>
                  <h2>Gregory Hughes</h2>
                  <p>Co-Founder & Advisor</p>
                  <p className='sub-text'>Financial Advisor since 2012</p>
                  <div className='team-social'>
                    <a href='https://www.linkedin.com/in/gregory-hughes-16665625'>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href='mailto:greg@birchfp.com'>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className='team-item'>
                <h3>Responsibilities:</h3>
                <ul>
                  {gregResponsibilities.map(item => <li>{item}</li>)}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default TeamPage
