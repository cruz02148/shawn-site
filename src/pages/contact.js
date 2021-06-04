import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import Footer from '../components/Footer'
import Header from '../components/Header'

const EstatePlanningPage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className='services-container'>
        <div className='services-text-container'>
          <h2>Requst an Appointment</h2>
          <p>In as little as 15 minutes we can get to know you – your situation, goals and needs – then connect
          you with an advisor committed to helping you pursue true wealth</p>
        </div>
        <Form className='contact-us-container'>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email address" />
          </Form.Group>
          <Form.Group controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Type your message" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default EstatePlanningPage
