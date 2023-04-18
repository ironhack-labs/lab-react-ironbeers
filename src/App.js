import './App.css';
import HomePage from './pages/HomePage';
import AllBeers from './pages/AllBeers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import BeerDetailPage from './pages/BeerDetailPage';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<HomePage />}></Route>
				<Route path='/beers' element={<AllBeers />}></Route>
				<Route path='/beers/:beerId' element={<BeerDetailPage />}></Route>
				<Route path='/random-beer' element={<RandomBeer />}></Route>
				<Route path='/new-beer' element={<NewBeer />}></Route>
			</Routes>
		</div>
	);
}

export default App;
