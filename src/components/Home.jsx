import React from 'react';
import '../App.css';
import BeersList from './BeersList';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';

class Home extends React.Component {
	render() {
		return (
		  <div className='App' >
			<BeersList />
            <RandomBeer />
            <NewBeer />			
		  </div>
		);
	}
}
	
export default Home;
