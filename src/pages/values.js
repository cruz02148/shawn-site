import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Footer from '../components/Footer'
import Header from '../components/Header'
import NavigationBar from '../components/NavigationBar'

// assets
import valuesImage from '../images/our_values.jpg'

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
                <img alt='our values' src={valuesImage} />
              </div>
            </Col>
            <Col lg={6}>
              <div className='section-header text-left'>
                <p>Our Values</p>
                <h2>We Work for You</h2>
              </div>
              <div className='values-content'>
                <p>Our independence is your advantage. We believe having an open architecture
                and non-proprietary product inventory truly allows us to act as a
                fiduciary and provide unbiased advice. Our goal is to:</p>
                <ul>
                  <li>Build genuine long-term relationships</li>
                  <li>Act in clients’ best interests</li>
                  <li>Deliver objective evaluation</li>
                  <li>Follow a disciplined investment process</li>
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
