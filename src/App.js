import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import './App.css'

function App() {
	return (
		<Router>
			<div className='App'>
				<NavBar />
				<Routes>
					<Route
						path='/'
						element={<HomePage />}
					/>
				</Routes>
			</div>
		</Router>
	)
}

export default App
