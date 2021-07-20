import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class newBeers extends Component {

    state = {
        name: '',
		tagline: '',
        description: '',
		first_brewed: '',
		brewers_tips: '',
		attenuation_level: 0,
		contributed_by: ''

    }
   
    handleSubmit = event => {
		event.preventDefault();
		// make a post request to the server
		axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            name: this.state.name,
		    tagline: this.state.tagline,
            description: this.state.description,
		    first_brewed: this.state.first_brewed,
		    brewers_tips: this.state.brewers_tips,
		    attenuation_level: this.state.attenuation_level,
		    contributed_by: this.state.contributed_by
		})
			.then(() => {
				this.setState({
					name: '',
		            tagline: '',
                    description: '',
		            first_brewed: '',
		            brewers_tips: '',
		            attenuation_level: 0,
		            contributed_by: ''
				})
				// trigger getData() in beers.js to retrieve the current list
				// of beer from the api
				this.props.getData();
			})
			.catch(err => console.log(err))
	}
   
    handleChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		})
	}

    render() {
    return (
        <div>
            <header> <Link to="/">Home</Link></header>
            <form onSubmit={this.handleSubmit}>
				<label htmlFor="name">Name: </label>
				<input
					type="text"
					id="name"
					name="name"
					value={this.state.name}
					onChange={this.handleChange}
				/>
				<label htmlFor="tagline">Tagline: </label>
				<input
					type="text"
					id="tagline"
					name="tagline"
					value={this.state.tagline}
					onChange={this.handleChange}
				/>
                <label htmlFor="description">Description: </label>
				<input
					type="text"
					id="description"
					name="description"
					value={this.state.description}
					onChange={this.handleChange}
				/>
                <label htmlFor="first_brewed">First_brewed: </label>
				<input
					type="text"
					id="first_brewed"
					name="first_brewed"
					value={this.state.first_brewed}
					onChange={this.handleChange}
				/>
                <label htmlFor="brewers_tips">Brewers_tips: </label>
				<input
					type="text"
					id="brewers_tips"
					name="brewers_tips"
					value={this.state.brewers_tips}
					onChange={this.handleChange}
				/>
                <label htmlFor="attenuation_level">Attenuation_level: </label>
				<input
					type="number"
					id="attenuation_level"
					name="attenuation_level"
					value={this.state.attenuation_level}
					onChange={this.handleChange}
				/>
                <label htmlFor="contributed_by">Contributed_by: </label>
				<input
					type="text"
					id="contributed_by"
					name="contributed_by"
					value={this.state.contributed_by}
					onChange={this.handleChange}
				/>
				<button type="submit">Add New Beer</button>
			</form>
        </div>
    )
   }
}
