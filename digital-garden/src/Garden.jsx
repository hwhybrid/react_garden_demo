// import React from 'react'
import Plant from './Plant';
import tulip from './assets/pink_tulip2.jpeg'
import rose from './assets/red_rose.jpeg'
import dying_rose from './assets/dying_rose.jpeg'
import dying_tulip from './assets/dying_tulip.jpeg'
import { useState, useEffect } from 'react';


function Garden() {
	const [needsWater, setWatered] = useState(true)
    const [fertilizer, setFertilizer] = useState('none');
	const [fertilizerDescription, setFertilizerDescription] = useState('');
	// const [sunlight, setSunlight] = useState('morning')
	
	const waterPlant = () => {setWatered(!needsWater)}

	const handleFertilizerChange = (event) => {
		setFertilizer(event.target.value);
	} 

	useEffect(() => {
		if (fertilizer === 'none') {
			setFertilizerDescription('No fertilizer has been applied.')
		} else if (fertilizer === 'organic') {
			setFertilizerDescription('Organic fertilizer applied. The plant will grow naturally.')
		} else if (fertilizer === 'chemical') {
			setFertilizerDescription('Chemical fertilizer has been applied. The plant might grow faster but cancer is a risk.')
		}

	}, [fertilizer]) // This second parameter is called a DEPENDENCY ARRAY and it determines if the useEffect will run.
	// useEffect will only run when the `fertilizer` variable changes.

	
	return ( 
		<div>
			<h2>This is the garden component</h2>
			<Plant type="Rose" color="Red" image={needsWater? dying_rose : rose}/>
			<button onClick={waterPlant}>Water the Rose Plant</button>
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
			<Plant type="Tulip" color="Pink" image={needsWater? dying_tulip : tulip} />
			<button onClick={waterPlant}>Water Tulip Plant</button>
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

		<div>
    
      </div>










			<Plant />



		</div>
	);
}

export default Garden;