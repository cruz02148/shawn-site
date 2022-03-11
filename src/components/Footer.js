import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'

// assets
import whiteLogo from '../images/logo_white.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg={3}>
            <img
              alt='logo in footer'
              height={254}
              src={whiteLogo}
              width={222}
            />
          </Col>
          <Col lg={3}>
            <div className='footer-contact'>
              <p>
                <FontAwesomeIcon icon={faLocationDot} />
                303 Wyman St, Ste 300
                <span className='contact-address-city'>Waltham MA 02451</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faPhoneAlt} />
                (781) 228-1036
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} />
                advisory@birchfp.com
              </p>
            </div>
          </Col>
          <Col lg={6}>
          <p className='footer-disclosure'>
            &copy; 2021 Birch Financial Partners<br />
            We are supported by McAdam LLC. McAdam is an independent financial advisory firm with a nationwide network of hundreds of advisors operating out of four offices in Philadelphia, Chicago, Boston, and Tysons Corner.
            McAdam LLC dba Birch Financial Partners is an SEC registered investment adviser that maintains a principal place of business in the State of Pennsylvania. The Firm may only
            transact business in those states in which it is notice filed or qualifies for a corresponding exemption from such requirements. For information about Mcadam LLC Dba Birch
            Financial Partners registration status and business operations, please consult the Firm’s Form ADV disclosure documents, the most recent versions of which are available on the
            SEC’s Investment Adviser Public Disclosure website at www.adviserinfo.sec.gov.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
