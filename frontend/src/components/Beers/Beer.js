import React, { Component } from 'react'
import axios from 'axios'
import HomeComponent from '../common/HomeComponent'

import CardComponent from '../common/CardComponent'
class Beers extends Component {
	state = {
		beers: []
	}

	render() {
		const {beers} = this.state;
		return(
			<div>
				<HomeComponent />
				<div className="uk-section">
					<div className="uk-container">
						<div className="uk-grid-match uk-grid-small uk-child-width-1-4" uk-grid="true">
							{beers.map(
								(beer, index) =>
									<CardComponent key={index} {...beer} />
							)
							}
						</div>
						<div className="uk-margin uk-flex uk-flex-center">
						</div>
					</div>
				</div>
			</div>
		)
	};

	componentDidMount() {
		axios.get("https://ih-beer-api.herokuapp.com/beers")
			.then(res => {
				console.log(res)
				const { data: beers } = res;
				this.setState({beers})
			})
	}

}





export default Beers;