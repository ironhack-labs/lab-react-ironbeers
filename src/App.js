import React from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home/Home';
import BeersList from './components/BeersList/BeersList';
import SingleBeer from './components/SingleBeer/SingleBeer';
import StatusScreen from './components/StatusScreen/StatusScreen';
import 'bulma/css/bulma.css';
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

class App extends React.Component {
  	state = {
		beers: [],
		filteredBeers: [],
		searchString: '',
    	singleBeer: {},
    	errorStatus: false,
  	};

	componentDidMount() {

		// commented solution bc Ironhacks API was down as of 11/11/2020
		// will be using the PunkAPI wrapper
    	/* axios
    		.get('https://ih-beers-api2.herokuapp.com/beers')
    		.then((res) => this.setState({ beers: res.data }))
    		.catch((err) => {
        		console.log(err);
        		this.setState({ errorStatus: !this.state.errorStatus });
			}); */

		punkAPI
			.getBeers()
			.then(beersFromAPI => this.setState({beers: beersFromAPI, filteredBeers: beersFromAPI}))
			.catch(err => { console.log(err);  })
	}

	handleSearch = event => {
		console.log(event.target.value)
		this.setState({searchString: event.target.value}, () => {
			const filtered = this.state.beers.filter(beer => beer.name.toLowerCase().includes(this.state.searchString.toLowerCase()));
			this.setState({filteredBeers: filtered});
		});
	}

  	render() {
    	if (this.state.errorStatus) { return (<StatusScreen error={true}/>) }
    	return (
      		<div className="App">
        		<Switch>
          			<Route exact path="/" component={Home} />
          			<Route
            			exact
            			path="/beers"
            			render={(routeProps) => (
              				<BeersList {...routeProps} beers={this.state.filteredBeers} searchMethod={this.handleSearch} inputValue={this.state.searchString} />
            			)}
          			/>
          			<Route
            			path="/beers/:id"
            			render={(routeProps) => <SingleBeer {...routeProps} random={false} />}
          			/>
					  <Route
					  	path="/random-beer"
						render={(routeProps) => <SingleBeer {...routeProps} random={true} />}
					/>
        		</Switch>
      		</div>
    	);
  	}
}

export default App;
