import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import axios from 'axios';
const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import ListBeers from './pages/ListBeers';
import AddBeer from './pages/AddBeer';
import RandomBeer from './pages/RandomBeer';
import SingleBeer from './pages/SingleBeer';

function App() {
	const [beers, setBeers] = useState( null );
	useEffect( () => {
		axios.get( apiURL )
			.then( ( response ) => {
				setBeers( response.data );
			} )
			.catch( ( err ) => console.log( err ) );
	}, [] );

	if ( !beers ) return <h1>Loading...</h1>;
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path='/' element={ <Home /> } />
				<Route path='/beers' element={ <ListBeers beers={beers}/> } />
				<Route path='/beers/:beerId' element={ <SingleBeer beers={beers}/> } />
				<Route path='/random' element={ <RandomBeer beers={beers}/> } />
				<Route path='/new' element={ <AddBeer beers={beers}/> } />
			</Routes>
		</div>
	);
}

export default App;
