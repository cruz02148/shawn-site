import React from 'react'

// components
import { Link } from 'gatsby'
import NavigationBar from '../components/NavigationBar'

// assets
import testLogo from '../images/logo.png'

const Header = () => {
  return (
    <div>
      <div className='header_container'>
        <Link to='/'>
          <img className='header_logo' src={testLogo} alt='Company Logo' />
        </Link>
        <div className='header_text_container'>
          <h1>Birch Financial Partners</h1>
          <p>Life is short - Let us focus on the financials while you focus on the things you love</p>
        </div>
      </div>
      <NavigationBar />
    </div>
  )
}

export default Header