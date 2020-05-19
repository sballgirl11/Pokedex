import React from 'react'
import './styles.css'

const RobotCard = ({ name, email, id }) => {
  return (
    <div className='card'>
      <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default RobotCard
