import React from 'react'
import './styles.css'

const PokeCard = ({ name, id, img, number }) => {
  return (
    <div className='card'>
      <h6 className='number'>{number}</h6>
      <img alt={name} src={img} id={id} />
      <h2>{name}</h2>
    </div>
  )
}

export default PokeCard
