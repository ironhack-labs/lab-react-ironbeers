import React, { Component } from 'react';
import Card from './Card';

class Home extends Component {
	render() {
		return (
			<div className='container d-flex justify-content-center align-items-center flex-column'>
				<Card route='/beers' />
				<Card route='/random-beer' />
				<Card route='/new-beer' />
			</div>
		);
	}
}

export default Home;
