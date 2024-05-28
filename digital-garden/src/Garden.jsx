// import React from 'react'
import Plant from './Plant';
import tulip from './assets/pink_tulip2.jpeg'
import rose from './assets/red_rose.jpeg'
import dying_rose from './assets/dying_rose.jpeg'
import dying_tulip from './assets/dying_tulip.jpeg'
import { useState } from 'react';


function Garden() {
	// The following are different conditions or states that we are tracking in order to use in some meaningful way
	const [needsWater, setWatered] = useState(true)
    
	const waterPlant = () => {setWatered(!needsWater)}

	const plants = [
		{
			id: '1', type: 'Rose', color: 'Red', image: needsWater? dying_rose : rose
		}
		,
		{
			id: '2', type: 'Tulip', color: 'Pink', image: needsWater? dying_tulip : tulip
		}
	]

	return ( 
		<div>
			<h2>This is the garden component</h2>
			{plants.map((plant) => (
				<div key={plant.id}>
					<Plant type={plant.type} color={plant.color} image={plant.image}/>
					<button onClick={waterPlant}>Water the {plant.type} plant</button>
				</div>

			))}
    
      </div>


	);
}

export default Garden;