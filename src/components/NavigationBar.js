import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import { Link } from 'gatsby'

const NavigationBar = () => {
  useEffect(() => {
    const navBar = document.getElementById('navBar')

    const scrollHandler = () => {
      if (window.scrollY > 90) {
        navBar.classList.add('nav-sticky')
      } else {
        navBar.classList.remove('nav-sticky')
      }
    }

    window.addEventListener("scroll", scrollHandler);
    
    // Return effect cleanup function to remove listener
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [])

  return (
    <div className='nav-bar' id='navBar'>
      <Container>
        <Navbar bg='dark' expand='lg' variant='dark'>
          <a className='navbar-brand' href='#page-top'>MENU</a>
          <Navbar.Toggle aria-controls='navbarCollapse' />
          <Navbar.Collapse className='justify-content-between' id='navbarCollapse'>
            <Nav className='mr-auto'>
              <Link className='nav-item nav-link' to="/">Home</Link>
              <Link className='nav-item nav-link' to="/team">Our Team</Link>
              <Link className='nav-item nav-link' to="/services">Services</Link>
              <Link className='nav-item nav-link' to="/values">Our Values</Link>
              <Link className='nav-item nav-link' href='https://www.schwab.com/public/schwab/nn/login/login.html?seg=sac&lang=en'>Client Portal</Link>
              <Link className='nav-item nav-link' href='https://login.orionadvisor.com/login.html?s=portal&p=/portfolio/overview'>Orion Portal</Link>
              <Link className='nav-item nav-link' href='https://brokercheck.finra.org/'>Broker Check</Link>
            </Nav>
            <div className='ml-auto'>
              <Link className='btn btn-custom' to='/contact'>Contact Us</Link>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  )
}
export default NavigationBar
