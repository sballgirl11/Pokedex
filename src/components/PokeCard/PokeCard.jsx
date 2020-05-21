import React from 'react'
import './styles.css'

const PokeCard = ({ name, id, img }) => {
  return (
    <div className='card'>
      <img alt={name} src={img} id={id} />
      <h2>{name}</h2>
    </div>
  )
}

export default PokeCard
