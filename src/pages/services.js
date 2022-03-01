import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartPie, faUmbrella, faCoins, faHouseChimneyWindow } from '@fortawesome/free-solid-svg-icons'

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
                  <li>Cashflow analysis</li>
                  <li>Employer benefit optimization</li>
                  <li>Retirement Planning</li>
                  <li>Education Planning</li>
                  <li>Long term tax and insurance strategies</li>
                  <li>Social Security analysis</li>
                  <li>Pension maximation</li>
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
                  <li>Comprehensive risk assessment</li>
                  <li>Life insurance</li>
                  <li>Disability insurance</li>
                  <li>Long term care insurance</li>
                </ul>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className='service-item'>
                <FontAwesomeIcon icon={faCoins} />
                <h3>Risk Management</h3>
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
                  <li>Will and trust</li>
                  <li>Wealth transfer strategies</li>
                  <li>Estate distribution plan</li>
                  <li>Domestic partner planning</li>
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
