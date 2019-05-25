import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import { Switch, Route } from 'react-router-dom';
import Beers from './Components/Beers';
import NewBeer from './Components/NewBeer';
import RandomBeer from './Components/RandomBeer';
import BeerDetail from './Components/BeerDetail';

class App extends Component {
	render() {
		return (
			<main className="container">
				<div className="App">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/beers/:beerId" component={BeerDetail} />
						<Route path="/beers" component={Beers} />
						<Route path="/new-beer" component={NewBeer} />
						<Route path="/random-beer" component={RandomBeer} />
					</Switch>
				</div>
			</main>
		);
	}
}

export default App;
