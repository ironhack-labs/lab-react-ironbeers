import React, { Component } from 'react';
import HomeBloc from '../components/HomeBloc';

class Home extends Component {
	render() {
		return (
			<div>
				<HomeBloc path="/beers" image="/images/beers.png" title="All Beers">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, culpa! Placeat, quo libero. Enim doloremque
					blanditiis tenetur perferendis, ad placeat, quas aspernatur deleniti nulla id officiis labore temporibus harum
					ipsam.
				</HomeBloc>
				<HomeBloc path="/random-beer" image="/images/random-beer.png" title="Random Beer">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, culpa! Placeat, quo libero. Enim doloremque
					blanditiis tenetur perferendis, ad placeat, quas aspernatur deleniti nulla id officiis labore temporibus harum
					ipsam.
				</HomeBloc>
				<HomeBloc path="/new-beer" image="/images/new-beer.png" title="New Beer">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, culpa! Placeat, quo libero. Enim doloremque
					blanditiis tenetur perferendis, ad placeat, quas aspernatur deleniti nulla id officiis labore temporibus harum
					ipsam.
				</HomeBloc>
			</div>
		);
	}
}

export default Home;
