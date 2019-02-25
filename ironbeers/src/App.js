import React, { Component } from 'react';
import './App.css';
import AllBeers from './components/AllBeers';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetail from './components/BeerDetail';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/beers" component={AllBeers} />
					<Route exact path="/random-beer" component={RandomBeer} />
					<Route exact path="/new-beer" component={NewBeer} />
					<Route exact path="/beers/:_id" component={BeerDetail} />
				</Switch>
			</div>
		);
	}
}

export default App;
