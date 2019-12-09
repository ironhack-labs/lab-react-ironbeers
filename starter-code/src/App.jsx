import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
// import { load } from './services/beers';

import HomePage from './Components/HomePage';
import ListBeers from './Components/ListBeers';
import NewBeer from './Components/NewBeer';
import RandomBeer from './Components/RandomBeer';
import SingleBeer from './Components/SingleBeer';
import Header from './Components/Header';

class App extends Component {
	constructor() {
		super();
		this.state = {
			beers: null
		};
	}

	// componentDidMount() {
	// 	load()
	// 		.then(name => {
	// 			this.setState({
	// 				name
	// 			});
	// 		})
	// 		.catch(error => {
	// 			console.log(error);
	// 			console.log('Error in service.');
	// 		});
	// }

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<div className="App">
						<Route exact path="/" component={HomePage} />
						<Route path="/beers" component={ListBeers} />
						<Route path="/new-beer" component={NewBeer} />
						<Route path="/random-beer" component={RandomBeer} />
						<Route path="/singleBeer/:beerId" component={SingleBeer} />
					</div>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
