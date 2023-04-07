import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import Beers from './components/Beers'
import './App.css'

function App() {
	return (
		<Router>
			<div className='App bg-gray-200'>
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
				</Routes>
			</div>
		</Router>
	)
}

export default App
