import React from 'react'
import './styles.css'

const RobotCard = ({ name, id }) => {
	return (
		<div className='card'>
			<img
				alt={name}
				src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${id}.png`}
			/>
			<div>
				<h2>{name}</h2>
			</div>
		</div>
	)
}

export default RobotCard
