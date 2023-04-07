import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import Beers from './components/Beers'
import SingleBeer from './components/SingleBeer'
import './App.css'
import RandomBeer from './components/RandomBeer'
import CreateBeer from './components/CreateBeer'

function App() {
	return (
		<Router>
			<div className='App bg-gray-200 '>
				<NavBar />
				<Routes>
					<Route
						path='/'
						element={<HomePage />}
					/>
					<Route
						path='/beers'
						element={<Beers />}
					/>
					<Route
						path='/new-beer'
						element={<CreateBeer />}
					/>
					<Route
						path='/random-beer'
						element={<RandomBeer />}
					/>

					<Route
						path='/beers/:id'
						element={<SingleBeer />}
					/>
				</Routes>
			</div>
		</Router>
	)
}

export default App
