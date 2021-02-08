import React, {Component} from 'react';
import axios from 'axios';

class RandomBeer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			randomBeer: []
		};
	}

	componentDidMount() {
		axios
			.get('https://ih-beers-api2.herokuapp.com/beers/random')
			.then(beer => {
				this.setState({
					isLoaded: true,
					randomBeer: beer.data
				});
			}, error => {
				this.setState({
					isLoaded: false,
					error
				});
			});

	}

	render() {
		const {
			_id,
			image_url: image,
			name,
			tagline,
			first_brewed,
			attenuation_level,
			description,
			contributed_by
		} = this.state.randomBeer;

		return (
			<div>
				<div className="card"
					 style={{width: '18rem'}}
					 key={_id}>
					<img src={image} className="card-img-top" alt={name}/>
					<div className="card-body">
						<h5 className="card-title">{name}</h5>
						<p className="card-text">{description}</p>
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">{tagline}</li>
						<li className="list-group-item">{first_brewed}</li>
						<li className="list-group-item">{attenuation_level}</li>
					</ul>
					<p className="card-text">
						<small className="text-muted">{contributed_by}</small>
					</p>
				</div>
			</div>
		);
	}
}

export default RandomBeer;