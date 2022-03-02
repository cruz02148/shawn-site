import React, { useState } from 'react'
import { navigate } from 'gatsby-link'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import Footer from '../components/Footer'
import Header from '../components/Header'
import NavigationBar from '../components/NavigationBar'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactPage = () => {
  const [state, setState] = useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => {
        alert('Your message was received successfully.')
        navigate(form.getAttribute('action'))
      })
      .catch((error) => alert(error))
  }

  return (
    <React.Fragment>
      <Header />
      <NavigationBar />
      <div className='contact'>
        <Container>
          <div className='section-header text-center'>
            <p>Get in Touch</p>
            <h2>Contact For Any Query</h2>
          </div>
          <Row>
            <Col md={4}>
              <div className='contact-info'>
                <h2>Quick Contact Info</h2>
                <div className='contact-info-item'>
                  <div className='contact-info-icon'>
                    <FontAwesomeIcon icon={faPhoneAlt} />
                  </div>
                  <div className='contact-info-text'>
                    <h3>Call Us</h3>
                    <p>(781) 228-1036</p>
                  </div>
                </div>
                <div className='contact-info-item'>
                  <div className='contact-info-icon'>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className='contact-info-text'>
                    <h3>Email Us</h3>
                    <p>advisory@birchfp.com</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={7}>
              <div className='contact-form'>
                <form
                  action='/'
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  name='contact'
                  method='post'
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <Form.Group controlId="formBasicName">
                    <Form.Control
                      name='name'
                      type="text"
                      placeholder="Your Name"
                      onChange={handleChange}
                    />
                    <p className='help-block text-danger'></p>
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      name='email'
                      type="email"
                      placeholder="Your Email Address" 
                      onChange={handleChange}
                    />
                    <p className='help-block text-danger'></p>
                  </Form.Group>

                  <Form.Group controlId="formBasicMessage">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name='message'
                      placeholder="Type Your Message"
                      onChange={handleChange}
                    />
                    <p className='help-block text-danger'></p>
                  </Form.Group>

                  <div>
                  <Button variant="custom" type="submit">
                    Submit
                  </Button>
                  </div>
                </form>
              </div>
            </Col>
            <Col md={12}>
              <iframe
                src='https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=303%20Wyman%20St,%20Waltham,%20MA+(Birch%20Financial%20Partners)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                title='locationMap'
              ></iframe>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default ContactPage
