import React from 'react'

import LinkedInLogo from '../images/linkedin.png'

const TeamMemeber = (props) => {
  return (
    <div>
      <img src={props.avatar} alt="team member" />
      <h3>{props.name}</h3>
      <p>Financial advisor since 2012</p>
      <p>Responsibilities:</p>
      <ul>
      {props.responsibilities.map(item => <li>{item}</li>)}
      </ul>
      <div>
        <p>Office Phone Number: {props.phoneNumber}</p>
        <p>Email: <a href={`mailto:${props.email}`}>{props.email}</a></p>
        <a href={props.linkedInProfile}>
          <img src={LinkedInLogo} alt="Clickable linkedin logo to navigate to profile" />
        </a>
      </div>
    </div>
  )
}

export default TeamMemeber
