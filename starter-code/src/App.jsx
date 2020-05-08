import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ListBeers from './pages/ListBeers';
import RandomBeer from './pages/RandomBeer';
import CreateBeer from './pages/CreateBeer';
import OneBeer from './pages/OneBeer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/beers" component={ListBeers} />
					<Route path="/beers/:beerId" component={OneBeer} />
					<Route path="/random-beer" component={RandomBeer} />
					<Route path="/new-beer" component={CreateBeer} />
				</Switch>
			</div>
		);
	}
}

export default App;
