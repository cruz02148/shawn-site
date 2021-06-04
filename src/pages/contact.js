import React, { useState } from 'react'
import { navigate } from 'gatsby-link'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import Footer from '../components/Footer'
import Header from '../components/Header'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const EstatePlanningPage = () => {
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
      <div className='services-container'>
        <div className='services-text-container'>
          <h2>Requst an Appointment</h2>
          <p>In as little as 15 minutes we can get to know you – your situation, goals and needs – then connect
          you with an advisor committed to helping you pursue true wealth.</p>
        </div>
        <form
          action='/'
          className='contact-us-container'
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          name='contact'
          method='post'
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name='name'
              type="text"
              placeholder="Name"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name='email'
              type="email"
              placeholder="Email address" 
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name='message'
              placeholder="Type your message"
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default EstatePlanningPage
