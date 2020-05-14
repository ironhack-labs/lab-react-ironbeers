import React, { Component } from 'react'
import Header from './Header'

export default class NewBeer extends Component {

    state = {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: "",
        contributed_by: ""
    }

    //how to define state type?

    handleChange(event) {
        let { name, value } = event.target;
        this.setState({[name]: value});
    }
    //Do I need handle change?

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);

        const url = 'https://ih-beers-api2.herokuapp.com/beers/new';
        const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: this.state.name,
            tagline: this.state.tagline,
            description: this.state.description,
            first_brewed: this.state.first_brewed,
            brewers_tips: this.state.brewers_tips,
            attenuation_level: this.state.attenuation_level,
            contributed_by: this.state.contributed_by
        })
        };

        fetch(url, options)
            .then(response => {
                console.log(response.status);
            });
    }

    render() {
        return (
            <div>
                <Header />
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} /> <br />
                    <label>tagline:</label>
                    <input type="text" name="tagline" value={this.state.tagline} onChange={(e) => this.handleChange(e)} /> <br />
                    <label>description:</label>
                    <input type="text" name="description" value={this.state.description} onChange={(e) => this.handleChange(e)} /> <br />
                    <label>first_brewed:</label>
                    <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={(e) => this.handleChange(e)} /> <br />
                    <label>brewers_tips:</label>
                    <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={(e) => this.handleChange(e)} /> <br />
                    <label>attenuation_level:</label>
                    <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={(e) => this.handleChange(e)} /> <br />
                    <label>contributed_by:</label>
                    <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={(e) => this.handleChange(e)} /> <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}




