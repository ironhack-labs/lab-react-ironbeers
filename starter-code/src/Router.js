import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Beers from './pages/Beers/index';

class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route path='/' component={Home} exact />
				<Route path='/beers' component={Beers} exact />
				{/* <Route path='//random-beer' />
				<Route path='/new-beer' /> */}
			</BrowserRouter>
		);
	}
}

export default Router;
