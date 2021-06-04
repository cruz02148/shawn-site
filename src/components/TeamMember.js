import React from 'react'

import LinkedInLogo from '../images/linkedin.png'

const TeamMemeber = (props) => {
  return (
    <div className='team_member'>
      <div className='team_member__card'>
        <img className='team_member__image' src={props.avatar} alt="team member" />
        <div className='team_member__info--container'>
          <h2>{props.name}</h2>
          <p className='team_member__title'>Financial advisor since 2012</p>
          <p>Responsibilities:</p>
          <ul>
            {props.responsibilities.map(item => <li>{item}</li>)}
          </ul>
          <div>
            <p>Office Phone Number: {props.phoneNumber}</p>
            <p>Email: <a href={`mailto:${props.email}`}>{props.email}</a></p>
            <a href={props.linkedInProfile}>
              <img className='team_member__linkedin' src={LinkedInLogo} alt="Clickable linkedin logo to navigate to profile" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMemeber
