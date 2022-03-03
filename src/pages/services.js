import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartPie, faUmbrella, faCoins, faHouseChimneyWindow } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'

// components
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavigationBar from '../components/NavigationBar'

const Services = () => {
  return (
    <React.Fragment>
      <Header />
      <NavigationBar />
      <div className='service'>
        <Container>
          <div className='section-header text-center'>
            <p>What We Provide</p>
            <h2>Our Services</h2>
          </div>
          <Row>
            <Col lg={6} md={6}>
              <div className='service-item'>
                <FontAwesomeIcon icon={faChartPie} />
                <h3>Financial Planning</h3>
                <p>We believe a personalized blueprint should be the foundation of every financial decision.
                Our objective is to outline clients’ goals, resources, concerns, and develop a comprehensive financial plan.
                Our scope of work can include:</p>
                <ul>
                  <li><FontAwesomeIcon icon={faCheckCircle} />Cashflow analysis</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} />Employer benefit optimization</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} />Retirement Planning</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} />Education Planning</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} />Long term tax and insurance strategies</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} />Social Security analysis</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} />Pension maximation</li>
                </ul>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className='service-item'>
                <FontAwesomeIcon icon={faUmbrella} />
                <h3>Risk Management</h3>
                <p>Protecting yourself and loved ones against unexpected events is a fundamental aspect of a well
                designed financial plan. This key process includes identifying, analyzing, and
                finding solutions for potential risks. Some of the tools we use are:</p>
                <ul>
                  <li><FontAwesomeIcon icon={faCheckCircle} />Comprehensive risk assessment</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} />Life insurance</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} />Disability insurance</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} />Long term care insurance</li>
                </ul>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className='service-item'>
                <FontAwesomeIcon icon={faCoins} />
                <h3>Wealth Management</h3>
                <p>Based on our clients’ financial plan, we create a systematic and disciplined approach to
                help grow, maintain, and protect their portfolios. Our strategies include:</p>
                <ul>
                  <li><FontAwesomeIcon icon={faCheckCircle} />Asset allocation</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} />Investment diversification</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} />Investment Income</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} />Tax sensitive investment</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} />Downside protection</li>
                </ul>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className='service-item'>
                <FontAwesomeIcon icon={faHouseChimneyWindow} />
                <h3>Estate Planning</h3>
                <p>We want to help our clients build the legacy that they envisioned - preserving wealth between
                generations, protecting their families and loved ones, contributing to
                charities, or fulfilling social responsibilities. We work with
                clients’ legal advisors to maximize wealth and minimize tax liabilities. Our services can include:</p>
                <ul>
                  <li><FontAwesomeIcon icon={faCheckCircle} />Will and trust</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} />Wealth transfer strategies</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} />Estate distribution plan</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} />Domestic partner planning</li>
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

export default Services
