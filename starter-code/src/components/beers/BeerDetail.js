import React, { Component } from 'react';
import Beers from '../../services/Beers';
import BeerInfo from './BeerInfo.js';
import './BeerDetail.css';

export default class BeerDetail extends Component {
	state = {};
	componentDidMount() {
		Beers.detail(this.props.match.params.id).then(
			beer => this.setState({ beer: beer, error: undefined })
		).catch(
			error => this.setState({ error: error })
		)
	}

	render() {
		if (this.state.beer) {
			return <BeerInfo {...this.state.beer} />
		} else {
			return <div className='beer-error'>Error :(</div>
		}
	}
}