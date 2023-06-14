import './App.css'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import imgAllBeers from './assets/beers.png'
import imgRandomBeer from './assets/random-beer.png'
import imgNewBeer from './assets/new-beer.png'
import Navbar from './components/Navbar'
import Beers from './components/Beers'
import Beer from './components/Beer'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import { useEffect } from 'react'
import { useState } from 'react'

function PageLayout() {
	return (
		<div>
			<Navbar />
			<main>
				<Outlet />
			</main>
		</div>
	)
}

function Home() {
	return (
		<div>
			<Link to="/beers">
				<img src={imgAllBeers} alt="" />
				<h2>All Beers</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
					sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
					pellentesque eu, pretium quis, sem
				</p>
			</Link>
			<Link to="/random-beer">
				<img src={imgRandomBeer} alt="" />
				<h2>Random Beer</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
					sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
					pellentesque eu, pretium quis, sem
				</p>
			</Link>
			<Link to="/new-beer">
				<img src={imgNewBeer} alt="" />
				<h2>New Beer</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
					sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
					pellentesque eu, pretium quis, sem
				</p>
			</Link>
		</div>
	)
}

function App() {
	const [beers, setBeers] = useState([])
	useEffect(() => {
		async function fetchBeers() {
			const response = await fetch('https://ih-beers-api2.herokuapp.com/beers')
			const data = await response.json()
			setBeers([...data])
		}
		fetchBeers()
	}, [])

	const [randomBeer, setRandomBeer] = useState([])
	useEffect(() => {
		async function fetchRandomBeer() {
			const response = await fetch('https://ih-beers-api2.herokuapp.com/beers/random')
			const dataRandom = await response.json()
			setRandomBeer(dataRandom)
		}
		fetchRandomBeer()
	}, [])

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<PageLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/beers" element={<Beers beers={beers} />} />
					<Route path="/beers/:beerId" element={<Beer beers={beers} />} />
					<Route path="/random-beer" element={<RandomBeer randomBeer={randomBeer} />} />
					<Route path="/new-beer" element={<NewBeer />} />
					<Route path="*" element={<h1>This page does not exist</h1>} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
