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
			// listOfBeers: [],
		};
	}

	getAllBeers = async () => {
		try {
			return await axios.get('https://sample-api-ih.herokuapp.com');
		} catch (error) {
			console.log(error);
		}
	};

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
								// allTheProjects={this.getAllBeers}
							/>
						)}
					/>
					<Route
						exact
						path="/beers"
						render={(props) => (
							<BeersList {...props} getAllBeers={this.getAllBeers} />
						)}
					/>
					<Route
						exact
						path="/beers/:id"
						render={(props) => (
							<SingleBeer
								{...props}
								// allTheProjects={this.state.listOfProjects}
							/>
						)}
					/>
					<Route
						exact
						path="/random-beer"
						render={(props) => (
							<RandomBeer
								{...props}
								// allTheProjects={this.state.listOfProjects}
							/>
						)}
					/>
					<Route
						exact
						path="/new-beer"
						render={(props) => (
							<NewBeer
								{...props}
								// allTheProjects={this.state.listOfProjects}
							/>
						)}
					/>
				</Switch>
			</div>
		);
	}
}
