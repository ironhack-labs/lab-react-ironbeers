import React, { Component } from 'react'
import axios from "axios"

export default class NewBeer extends Component {

    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: '',
    }
    
    handleChange = event => {
        console.log(event.target);
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    
    handleSubmit = event => {
        event.preventDefault();
        const {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by} = this.state
        let body = {
            name,
            tagline,
            description,
            first_brewed,
            brewers_tips,
            attenuation_level,
            contributed_by
        }
        
        axios({
            method: 'post',
            url: 'https://ih-beers-api2.herokuapp.com/beers/new',
            data: body
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="name">Tagline: </label>
                    <input
                        type="text"
                        name="tagline"
                        id="tagline"
                        value={this.state.tagline}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="name">Description: </label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="name">First Brewed: </label>
                    <input
                        type="text"
                        name="first_brewed"
                        id="first_brewed"
                        value={this.state.first_brewed}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="name">Brewers Tips: </label>
                    <input
                        type="text"
                        name="brewers_tips"
                        id="brewers_tips"
                        value={this.state.brewers_tips}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="name">Attenuation Level </label>
                    <input
                        type="number"
                        name="attenuation_level"
                        id="attenuation_level"
                        value={this.state.attenuation_level}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="name">Contributed By</label>
                    <input
                        type="text"
                        name="contributed_by"
                        id="contributed_by"
                        value={this.state.contributed_by}
                        onChange={this.handleChange}
                    />

                    <button type='submit'>Submit</button>

                </form>
            </div>
        )
    }
}
