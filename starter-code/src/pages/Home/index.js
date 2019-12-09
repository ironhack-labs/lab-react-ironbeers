import React, { Component } from 'react';
import Card from './Card';

class Home extends Component {
	render() {
		return (
			<div className='container d-flex justify-content-center align-items-center flex-column'>
				<Card route='/beers' title='All beers' imgUrl='/images/beers.png' />
				<Card route='/random-beer' title='Random beer' imgUrl='/images/random-beer.png' />
				<Card route='/new-beer' title='New Beer' imgUrl='/images/new-beer.png' />
			</div>
		);
	}
}

export default Home;
