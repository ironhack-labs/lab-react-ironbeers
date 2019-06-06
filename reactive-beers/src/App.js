import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router';

import BeerList from './components/BeerList';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import Home from './components/Home';
import BeerDetails from './components/BeerDetails';

class App extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/beers" exact component={BeerList} />
				<Route path="/random-beer" exact component={RandomBeer} />
				<Route path="/new-beer" exact component={NewBeer} />
				<Route path="/:id" exact component={BeerDetails} />
			</Switch>
		);
	}
}

export default App;
