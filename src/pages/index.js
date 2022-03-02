import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faLayerGroup, faSitemap, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'

import '@fontsource/barlow'
import '@fontsource/barlow/500.css'
import '@fontsource/barlow/600.css'
import '@fontsource/barlow/700.css'
import '@fontsource/barlow/800.css'
import '../styles/index.scss'

// components
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import CustomCarousel from '../components/CustomCarousel'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavigationBar from '../components/NavigationBar'
import Row from 'react-bootstrap/Row'

const Process = () => (
  <div className='process'>
    <Container>
      <div className='section-header text-center'>
        <p>How We Do It</p>
        <h2>Our Process</h2>
      </div>
      <Row>
        <Col lg={3} md={6}>
          <div className='process-item'>
            <FontAwesomeIcon icon={faCalendar} inverse />
            <h3>Initial Consultation</h3>
            <ul>
              <li>Your Story</li>
              <li>About Us</li>
              <li>Scope of Work</li>
            </ul>
          </div>
        </Col>
        <Col lg={3} md={6}>
          <div className='process-item'>
            <FontAwesomeIcon icon={faLayerGroup} />
            <h3>Analysis</h3>
            <ul>
              <li>Data Gathering</li>
              <li>Preliminary Strategies</li>
              <li>Strengths & Weaknesses</li>
              <li>Future scenario simulation</li>
            </ul>
          </div>
        </Col>
        <Col lg={3} md={6}>
          <div className='process-item'>
            <FontAwesomeIcon icon={faSitemap} />
            <h3>Execution</h3>
            <ul>
              <li>Plan presentation</li>
              <li>Strategies Review & Implementation</li>
              <li>Account Access</li>
              <li>Other Professional Referrals</li>
            </ul>
          </div>
        </Col>
        <Col lg={3} md={6}>
          <div className='process-item'>
            <FontAwesomeIcon icon={faArrowTrendUp} inverse />
            <h3>Monitoring</h3>
            <ul>
              <li>Open line of communication</li>
              <li>On Demand and systematic review</li>
              <li>Plan and strategies upkeep</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
)

const IndexPage = () => {
  return (
    <React.Fragment>
      <Header/>
      <NavigationBar />
      <CustomCarousel />
      <Process />
      <Footer />
    </React.Fragment>
  )
}

export default IndexPage
