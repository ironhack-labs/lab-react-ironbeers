import React, {Component} from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import HomeMenu from './components/HomeMenu';
import AllBeers from './components/AllBeers';
import BeerDetails from './components/BeerDetails';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			allBeers: []
		};
	}

	componentDidMount() {
		axios
			.get('https://ih-beers-api2.herokuapp.com/beers')
			.then(beers => {
				this.setState({
					isLoaded: true,
					allBeers: beers.data
				});
			}, error => {
				this.setState({
					isLoaded: false,
					error
				});
			});
	}

	render() {
		return (
			<div className="App">
				<div className="container">
					{this.props.location.pathname === '/' ? null :
						<Header/>}

					<Switch>
						<Route exact path="/">
							<HomeMenu/>
						</Route>

						<Route exact path="/beers" render={props => {
							return <AllBeers {...props} beerList={this.state.allBeers}/>;
						}}/>

						<Route exact path="/random-beer">
							<RandomBeer/>
						</Route>

						<Route exact path="/new-beer">
							<NewBeer/>
						</Route>

						<Route exact path="/:id" render={props => {
							return <BeerDetails {...props} beerList={this.state.allBeers}/>;
						}}/>


					</Switch>
				</div>
			</div>
		);
	}
}

export default withRouter(App);