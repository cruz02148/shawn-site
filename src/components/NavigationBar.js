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
      <NavDropdown title='Our Services' id='nav-dropdown-services'>
        <NavDropdown.Item>
          <Link to='/financial_planning'>Financial Planning</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to='/risk_management'>Risk Management</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to='/wealth_management'>Wealth Management</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to='/estate_planning'>Estate Planning</Link>
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Item>
        <Link to="/process">Our Process</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/values">Our Values</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/contact">Contact Us</Link>
      </Nav.Item>
      <NavDropdown title='Third Party Portals' id='nav-dropdown-portals'>
        <NavDropdown.Item href='https://www.schwab.com/public/schwab/nn/login/login.html?seg=sac&lang=en'>
          Client Portal
        </NavDropdown.Item>
        <NavDropdown.Item href='https://login.orionadvisor.com/login.html?s=portal&p=/portfolio/overview'>
          Orion Portal
        </NavDropdown.Item>
        <NavDropdown.Item href='https://brokercheck.finra.org/'>
          Broker Check
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  )
}

export default NavigationBar
