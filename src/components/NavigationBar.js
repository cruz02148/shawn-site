import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { Link } from 'gatsby'

const NavigationBar = () => {
  return (
    <div className='nav-bar'>
      <Container>
        <Navbar bg='dark' expand='lg' variant='dark'>
          <a className='navbar-brand' href='#page-top'>MENU</a>
          <Navbar.Toggle aria-controls='navbarCollapse' />
          <Navbar.Collapse className='justify-content-between' id='navbarCollapse'>
            <Nav className='mr-auto'>
              <Link className='nav-item nav-link' to="/team">Our Team</Link>
              <NavDropdown title='Our Services' id='nav-dropdown-services'>
                <Link className='dropdown-item' to='/financial_planning'>Financial Planning</Link>
                <Link className='dropdown-item' to='/risk_management'>Risk Management</Link>
                <Link className='dropdown-item' to='/wealth_management'>Wealth Management</Link>
                <Link className='dropdown-item' to='/estate_planning'>Estate Planning</Link>
              </NavDropdown>
              <Link className='nav-item nav-link' to="/values">Our Values</Link>
              <Link className='nav-item nav-link' href='https://www.schwab.com/public/schwab/nn/login/login.html?seg=sac&lang=en'>Client Portal</Link>
              <Link className='nav-item nav-link' href='https://login.orionadvisor.com/login.html?s=portal&p=/portfolio/overview'>Orion Portal</Link>
              <Link className='nav-item nav-link' href='https://brokercheck.finra.org/'>Broker Check</Link>
            </Nav>
            <div className='ml-auto'>
              <Link className='btn btn-custom' to='/contact'>Get Appointment</Link>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  )
}
export default NavigationBar
