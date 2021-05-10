import axios from 'axios';
import React, { Component } from 'react'
import Navbar from './Navbar'

export default class NewBeer extends Component {
    state = {
        name: '',
        tagline: '',
        description : '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    }

    handleSubmit = event => {
        event.preventDefault();
        const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;
        const newBeer = {
            name, 
            tagline, 
            description, 
            first_brewed, 
            brewers_tips, 
            attenuation_level, 
            contributed_by
        }
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
        .then(response => {
            console.log(response)
            this.setState({
                name: '',
                tagline: '',
                description : '',
                first_brewed: '',
                brewers_tips: '',
                attenuation_level: 0,
                contributed_by: ''
            })
        })
    }

    addBeer = event => {
        const name = event.target.name;
        this.setState({
            [name] : event.target.value
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    value={this.state.name}
                    onChange={this.addBeer}
                    />
                    <label htmlFor="tagline">Tagline</label>
                    <input
                    type="text"
                    name="tagline"
                    id="tagline"
                    value={this.state.tagline}
                    onChange={this.addBeer}
                    />
                    <label htmlFor="description">Description</label>
                    <input
                    type="text"
                    name="description"
                    id="description"
                    value={this.state.description}
                    onChange={this.addBeer}
                    />
                    <label htmlFor="first_brewed">First Brewed</label>
                    <input
                    type="text"
                    name="first_brewed"
                    id="first_brewed"
                    value={this.state.first_brewed}
                    onChange={this.addBeer}
                    />
                    <label htmlFor="brewers_tips">Brewer's Tips</label>
                    <input
                    type="text"
                    name="brewers_tips"
                    id="brewers_tips"
                    value={this.state.brewers_tips}
                    onChange={this.addBeer}
                    />
                    <label htmlFor="attenuation_level">Attenuation Level</label>
                    <input
                    type="number"
                    name="attenuation_level"
                    id="attenuation_level"
                    value={this.state.attenuation_level}
                    onChange={this.addBeer}
                    />
                    <label htmlFor="contributed_by">Contributed by</label>
                    <input
                    type="text"
                    name="contributed_by"
                    id="contributed_by"
                    value={this.state.contributed_by}
                    onChange={this.addBeer}
                    />
                    <button type='submit'>Add new beer beer</button>
                </form>
            </div>
        )
    }
}