// import React from 'react'
import Plant from './Plant';
import tulip from './assets/pink_tulip2.jpeg'
import rose from './assets/red_rose.jpeg'
import dying_rose from './assets/dying_rose.jpeg'
import dying_tulip from './assets/dying_tulip.jpeg'
import { useState, useEffect } from 'react';


function Garden() {
	// The following are different conditions or states that we are tracking in order to use in some meaningful way
	const [needsWater, setWatered] = useState(true)
    const [fertilizer, setFertilizer] = useState('none');
	const [fertilizerDescription, setFertilizerDescription] = useState('');
	const [fertilizerData, setFertilizerData] = useState(null) // State that will be used to store the fetched fertilizer data
	const [loading, setLoading] = useState(false) // State to manage your loading status

	const waterPlant = () => {setWatered(!needsWater)}

	// This handler function will handle changes in the fertilizer selection. 
	// The selection is determined by the user in the setFertilixer methods input value: event.target.value
	const handleFertilizerChange = (event) => {
		setFertilizer(event.target.value);
	} 

	const fetchFertilizerData = async () => {
		setLoading(true) // Sets loading to true while fetching your data
		try {
			await new Promise (resolve => setTimeout(resolve, 1000));
			const data = JSON.parse(localStorage.getItem('fertilizerData')) || [
				{id:1, name:'None', description: 'No fertilizer has been applied'},
				{id:2, name:'Organic', description: 'Organic fertilizer applied. The plant will grow naturally.'},
				{id:3, name: 'Chemical', description: 'Chemical fertilizer has been applied. The plant might grow faster but cancer is a risk.'}
			]
		;
		setFertilizerData(data)	
		} catch (error) {
			console.error('Error fetching fertilizer data...', error) 
		} finally {
			setLoading(false) // Sets loading to false after the data has been fetched

		}
	}

	useEffect(() => {
		fetchFertilizerData()
	}, []) //Empty dependency array to ensure the useEffect only tuns once when the component mounts

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
			{loading ? (
				<p>Loading fertilizer data....</p>
			) : (
				fertilizerData && (
				<div key={fertilizer.id}> 
					<h4>{fertilizer.name}</h4>
					<p>{fertilizer.description}</p>
				</div>
			)
			)}

		</div>
	
	)
}

export default Garden;