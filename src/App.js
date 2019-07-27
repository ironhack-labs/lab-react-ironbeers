import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import Home from './components/Home';
import BeersList from './components/BeersList';
import RandomBeer from './components/RandomBeer';
import SingleBeer from './components/SingleBeer';
import NewBeer from './components/NewBeer/';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listOfBeers: [],
			ready: false,
		};
	}

	getAllBeers = async () => {
		try {
			const result = await axios.get('https://sample-api-ih.herokuapp.com');
			this.setState({ listOfBeers: result.data, ready: true });
		} catch (error) {
			console.log(error);
		}
	};

	componentDidMount() {
		this.getAllBeers();
	}

	render() {
		return (
			<div className="App">
				<Switch>
					<Route
						exact
						path="/"
						render={(props) => (
							<Home
								{...props}
								// beers={this.state.listOfBeers}
								// ready={this.state.ready}
							/>
						)}
					/>
					<Route
						exact
						path="/beers"
						render={(props) => (
							<BeersList
								{...props}
								beers={this.state.listOfBeers}
								ready={this.state.ready}
							/>
						)}
					/>
					<Route
						exact
						path="/beers/:id"
						render={(props) => (
							<SingleBeer
								{...props}
								beers={this.state.listOfBeers}
								ready={this.state.ready}
							/>
						)}
					/>
					<Route
						exact
						path="/random-beer"
						render={(props) => (
							<RandomBeer
								{...props}
								beers={this.state.listOfBeers}
								ready={this.state.ready}
							/>
						)}
					/>
					<Route
						exact
						path="/new-beer"
						render={(props) => (
							<NewBeer
								{...props}
								beers={this.state.listOfBeers}
								ready={this.state.ready}
							/>
						)}
					/>
				</Switch>
			</div>
		);
	}
}
