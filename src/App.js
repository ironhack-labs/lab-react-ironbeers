import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage';
import RandomBeer from './components/random';
import AddBeer from './components/add';
import Beers from './components/beers';
import BeerDetails from './components/details';

function App() {
	return (
		<div className="App">
			<h1>This is live</h1>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/beers" element={<Beers />} />
				<Route path="/beers/:id" element={<BeerDetails />} />
				<Route path="/random" element={<RandomBeer />} />
				<Route path="/add" element={<AddBeer />} />
			</Routes>
		</div>
	);
}

export default App;
