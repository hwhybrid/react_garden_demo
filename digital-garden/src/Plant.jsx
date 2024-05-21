// import React from 'react'
import PropTypes from 'prop-types'

export default function Plant(props) {
// This is the alternate way to pass your
// export default function Plant( { type, color, image } ) {	
	return (
		<div>
			<h2>This is a {props.type} plant!</h2>
			<p>This plant is {props.color} in colour.</p>
			
			<p>This is what a {props.type} looks like: </p>
			{props.image && <img src={props.image} alt={`${props.type}`}/>}

			{/* This is the alternate way to define your props */}
			{/* <h2>This is a {type} plant!</h2>
			<p>This plant is {color} in colour.</p>
			
			<p>This is what a {type} looks like: </p>
			{image && <img src={image} alt={`${type}`}/>} */}

		</div>

		


	);
}


Plant.propTypes = {
	type: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired
}

Plant.defaultProps = {
	type: 'Unknown Plant',
	color: 'Unknown Color',
	image: ''
}


