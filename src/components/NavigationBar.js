import React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { Link } from 'gatsby'

const NavigationBar = () => {
  return (
    <Nav variant="pills" activeKey='1'>
      <Nav.Item>
        <Link to="/team">Our Team</Link>
      </Nav.Item>
      <NavDropdown title='Our Services' id='nav-dropdown'>
        <NavDropdown.Item>
          <Link to='/services'>Financial Planning</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to='/services'>Risk Management</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to='/services'>Wealth Management</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to='/services'>Estate Planning</Link>
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Item>
        <Link to="/process">Our Process</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/contact">Contact Us</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/portal">Client Portals</Link>
      </Nav.Item>
    </Nav>
  )
}

export default NavigationBar
