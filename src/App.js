import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BeersList from './components/BeersList';
import RandomBeer from './components/RandomBeer';
import BeerDetail from './components/BeerDetail';
import NewBeer from './components/NewBeer';

class App extends React.Component {

	render() {
		return (
			<>
			<div className='Navbar'>
				<Navbar />
			</div>
		  	<div className='App' >
				<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/beers" component={BeersList} />
				<Route exact path="/random-beer" component={RandomBeer} />
				<Route exact path="/:_id" component={BeerDetail} />
				<Route exact path="/beers/newbeer" component={NewBeer} />
				</Switch>
		   	</div>
			</>
		);
	}
}
	
export default App;
