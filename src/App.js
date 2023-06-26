//react import
import { Route, Routes } from 'react-router-dom';

//style import
import './App.css';

// page import
import Home from './components/Home';
import ListBeers from './components/ListBeers';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import NavBar from './components/NavBar';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route element={<NavBar />}>
					<Route path="/beer/list" element={<ListBeers />} />
					<Route path="/beer/:id" element={<BeerDetails />} />
					<Route path="/beer/random" element={<RandomBeer />} />
					<Route path="/beer/new" element={<NewBeer />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
