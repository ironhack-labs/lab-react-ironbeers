import React from 'react';
import NavBar from './NavBar';
import axios from 'axios';

export default class NewBeer extends React.Component {

	state = {
		name: '',
        tagline: '',
        firstBrewed: '',
        attenuationLevel: 0,
        brewersTips: '',
        description: '',
        contributedBy: ''
	}

	handleSubmit = event => {
		event.preventDefault();
		console.log('submitting: ', this.state.name)
		axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            name: this.state.name,
            tagline: this.state.tagline,
            first_brewed: this.state.firstBrewed,
            attenuation_level: this.state.attenuationLevel,
            brewers_tips: this.state.brewersTips,
            description: this.state.description,
            contributed_by: this.state.contributedBy,
		})
			.then(() => {
				this.setState({
                    name: '',
                    tagline: '',
                    firstBrewed: '',
                    attenuationLevel: 0,
                    brewersTips: '',
                    description: '',
                    contributedBy: '',
				})
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
            <>
            <NavBar />
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
                    <label htmlFor="firstBrewed">First Brewed: </label>
                    <input
                        type="text"
                        id="firstBrewed"
                        name="firstBrewed"
                        value={this.state.firstBrewed}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="attenuationLevel">Attenuation Level: </label>
                    <input
                        type="text"
                        id="attenuationLevel"
                        name="attenuationLevel"
                        value={this.state.attenuationLevel}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="contributedBy">Contributed By: </label>
                    <input
                        type="text"
                        id="contributedBy"
                        name="contributedBy"
                        value={this.state.contributedBy}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Add this project</button>
                </form>
            </>
        )
	}
}

