import { useState } from 'react'
import './App.css'
import Garden from './Garden'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
		<h1>This is my React Digital Garden!</h1>
		<Garden />
		</div>
    </>
  )
}

export default App
