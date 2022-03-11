import React from 'react'
import { Helmet } from 'react-helmet'

// components
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'

// assets
import logoImage from '../images/logo_green.png'

const Header = () => {
  return (
    <div className='header' id='page-top'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Birch Financial Partners</title>
      </Helmet>
      <Container>
        <Row className='align-items-center'>
          <Col lg={6} md={12}>
            <div className='logo'>
              <Link to='/'>
                <img alt='logo' src={logoImage} />
                <h1>Birch Financial Partners</h1>
              </Link>
            </div>
          </Col>
          <Col lg={6} md={7} className='d-none d-lg-block'>
            <Row>
              <Col>
                <div className='header-item'>
                  <div className='header-icon'>
                    <FontAwesomeIcon icon={faPhoneAlt} inverse />
                  </div>
                  <div className='header-text'>
                    <h3>Call Us</h3>
                    <p>(781) 228-1036</p>
                  </div>
                </div>
              </Col>
              <Col>
              <div className='header-item'>
                  <div className='header-icon'>
                    <FontAwesomeIcon icon={faEnvelope} inverse />
                  </div>
                  <div className='header-text'>
                    <h3>Email Us</h3>
                    <p>advisory@birchfp.com</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Header
