import React, { Component } from 'react';
import axios from 'axios';
import Nav from '../../components/Navbar';

class Beer extends Component {
	state = {
		beer: {}
	};

	async componentDidMount() {
		const beer = await axios(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`);
		console.log(beer);
		this.setState({ beer: beer.data });
	}

	render() {
		const { beer } = this.state;
		console.log(beer);
		return (
			<div className='container' style={{ width: '100%' }}>
				<Nav />
				<div className='container d-flex justify-content-center align-items-center'>
					<div className='card'>
						<div className='d-flex justify-content-center'>
							<img className='card-img-top' alt='a pic' src={beer.image_url} style={{ width: '100px' }} />
						</div>
						<div className='card-body'>
							<div className='d-flex flex-row justify-content-between '>
								<h5 className='card-title'>{beer.name}</h5>
								<h6 className='card-attenuation'>{beer.attenuation_level}</h6>
							</div>
							<div className='d-flex flex-row justify-content-between '>
								<b className='card-tagline'>{beer.tagline}</b>
								<b className='card-brewed'>{beer.first_brewed}</b>
							</div>
							<br />
							<p className='card-text'>{beer.description}</p>
							<p className='card-author'>{beer.contributed_by}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Beer;
