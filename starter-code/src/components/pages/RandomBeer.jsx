import React, { Component } from 'react';
import { loadRandomBeer } from './../../services/beersApi';
import "./Styles.css"
import Navbar from "../Navbar"


export class SingleBeer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			beer: {}
		}
	}
	componentDidMount(){
		loadRandomBeer(this.props.match.params.beerId)
		.then(beer => {
			this.setState({
				beer
			})
		})
		.catch((error)=> {
            this.setState({
                error: error
                })
			})
		}
	render() {
		const aBeer = this.state.beer
		return (
		<div>
		<Navbar/>
		<div className="columns">
			<div className="column is-one-third is-offset-4 box is-vcentered is-centered has-margin-top-20 has-margin-bottom-10 ">
			<img src={aBeer.image_url} alt="" className="image-height-single-beer has-margin-bottom-40"/>

			<div className="columns">
			<p className="column is-7 is-size-4 has-text-left has-text-black">{aBeer.name}</p>
			<p className="column is-2 is-offset-2 has-text-right has-text-grey-light is-size-4 has-text-black">{aBeer.attenuation_level}</p>
			</div>

			<div className="columns">
			<p className="column is-7 has-text-left has-text-grey-light is-size-5">{aBeer.tagline}</p>
			<p className="column has-text-right column is-3 is-offset-1 has-text-weight-bold">{aBeer.first_brewed}</p>
			</div> 
		
			<div className="has-text-left">
			<p className="has-margin-bottom-20 has-text-black has-padding-right-40">{aBeer.description} </p>
			<p className="has-text-grey has-text-weight-bold is-size-7">{aBeer.contributed_by}</p>
			</div>
        </div>
		</div>
		</div>
		);
	}
}

export default SingleBeer;
