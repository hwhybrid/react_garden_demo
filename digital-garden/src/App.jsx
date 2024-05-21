import './App.css'
import Garden from './Garden'
import { Route, Routes, Link } from 'react-router-dom'
import About from './About'
import Home from './Home'


function App() {

  return (
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />	
				</Routes>

				<Garden />
			</div>

  )
}

export default App
