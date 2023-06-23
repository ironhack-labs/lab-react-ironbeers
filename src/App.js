import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ListBeers from './components/ListBeers';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
			</header>

			<Routes>
				<Route path="/" element={Home} />
				<Route path="/beer/list" element={ListBeers} />
				<Route path="/beer/:id" element={BeerDetails} />
				<Route path="/beer/random" element={RandomBeer} />
				<Route path="/beer/new" element={NewBeer} />
			</Routes>
		</div>
	);
}

export default App;
