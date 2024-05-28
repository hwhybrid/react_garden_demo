// import React from 'react'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';


export default function Plant(props) {

	const [fertilizer, setFertilizer] = useState('none');
	const [fertilizerDescription, setFertilizerDescription] = useState('');

	// This handler function will handle changes in the fertilizer selection. 
	// The selection is determined by the user in the setFertilixer methods input value: event.target.value
	const handleFertilizerChange = (event) => {
		setFertilizer(event.target.value);
	} 
// The useEffect hook will update the fertilizer description whenever the fertilizer state changes
	useEffect(
		// useEffect takes 2 parameters: a function , and an array of dependencies or a dependency array
		() => {
		if (fertilizer === 'none') {
			setFertilizerDescription('No fertilizer has been applied.')
		} else if (fertilizer === 'organic') {
			setFertilizerDescription('Organic fertilizer applied. The plant will grow naturally.')
		} else if (fertilizer === 'chemical') {
			setFertilizerDescription('Chemical fertilizer has been applied. The plant might grow faster but cancer is a risk.')
		}

	}, [fertilizer]) // This second parameter is called a DEPENDENCY ARRAY and it determines when the useEffect will run.
	// useEffect will only run when the `fertilizer` variable changes.

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
			<div>
				<label> 
					Choose Plant Fertilizer:
					<select value={fertilizer} onChange={handleFertilizerChange}>
						<option value="none">None</option>
						<option value="organic">Organic</option>
						<option value="chemical">Chemical</option>
					</select>
				</label>
			</div>
				<h4>{fertilizerDescription}</h4>


		</div>

	

	);
}


Plant.propTypes = {
	type: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	id: PropTypes.string
}

Plant.defaultProps = {
	type: 'Unknown Plant',
	color: 'Unknown Color',
	image: ''
}


