import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Beers from './pages/Beers/index';
import Beer from './pages/Beer/index';
import RandomBeer from './pages/RandomBeer/index';
import NewBeer from './pages/NewBeer/index';

class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route path='/' component={Home} exact />
				<Route path='/beers' component={Beers} exact />
				<Route path='/beers/:id' component={Beer} exact />
				<Route path='/random-beer' component={RandomBeer} exact />
				<Route path='/new-beer' component={NewBeer} exact />
			</BrowserRouter>
		);
	}
}

export default Router;
