import React from 'react';

import './App.css';
import { Route, Switch } from 'react-router-dom';
import CountryList from './components/CountryList';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails.js';

const App = () => {
	return (
		<div className='App'>
			<Navbar />
			<div className='container'>
				<div className='row'>
					<CountryList />

					<Switch>
						<Route exact path='/details/:countryId' component={CountryDetails} />
					</Switch>
				</div>
			</div>
		</div>
	);
};

/* <Route
    exact
    path="/details/:countryId"
    render={props => (
   <CountryDetails
    {...props}
    countryArr={this.state.countriesArray}
/> */

export default App;
