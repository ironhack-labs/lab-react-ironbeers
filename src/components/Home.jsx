import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import beers from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';

class Home extends React.Component {
	render() {
		return (
			<div className='App'>
				<div>
					<img src={beers} alt='Beers' />
					<h3><Link to="/beers" >All Beers</Link></h3>
					<p>Lorem ipsum</p>
			  	</div>
				<div>
					<img src={randomBeer} alt='Beers' />
					<h3><Link to="/random-beer">Random Beer</Link></h3>
					<p>Lorem ipsum</p>
			  	</div>
				<div>
					<img src={newBeer} alt='Beers' />
					<h3><Link to="/beers/newbeer">New Beer</Link></h3>
					<p>Lorem ipsum</p>
			  	</div>
		  </div>
		);
	}
}
	
export default Home;
