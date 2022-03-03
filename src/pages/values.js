import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'

import Footer from '../components/Footer'
import Header from '../components/Header'
import NavigationBar from '../components/NavigationBar'

// assets
import coinsInJar from '../images/wealth_mgmt.jpg'

const OurValuesPage = () => {
  return (
    <React.Fragment>
      <Header />
      <NavigationBar />
      <div className='values'>
        <Container>
          <Row className='align-items-center'>
            <Col lg={6}>
              <div className='values-img'>
                <img alt='our values' src={coinsInJar} />
              </div>
            </Col>
            <Col lg={6}>
              <div className='section-header'>
                <p>We Work for You</p>
                <h2>Our Values</h2>
              </div>
              <div className='values-content'>
                <p>Our independence is your advantage. We believe having an open architecture
                and non-proprietary product inventory truly allows us to act as a
                fiduciary and provide unbiased advice. Our goal is to:</p>
                <ul>
                  <li><FontAwesomeIcon icon={faCheckCircle} />Build genuine long-term relationships</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} />Act in clients’ best interests</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} />Deliver objective evaluation</li>
                  <li><FontAwesomeIcon icon={faCheckCircle} />Follow a disciplined investment process</li>
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

export default OurValuesPage
