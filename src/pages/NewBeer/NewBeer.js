import axios from 'axios';
import React, { Component } from 'react'

class NewBeer extends Component {
    state = {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
    }
    
    handleInput = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by} = this.state;

        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", 
        { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by})
        .then( () => {
            this.setState({ name: "", tagline: "", description: "", first_brewed: "", brewers_tips: "", attenuation_level: 0, contributed_by: ""})
        })
        .catch( (err) => console.log(err));
    }
  
    render() {
        return (
            <form onSubmit={(event) => this.handleFormSubmit(event)}>
                <label>Name:</label>
                <input type="text" name="name" 
                value={this.state.name} onChange={(event) => this.handleInput(event)} />

                <label>Tagline:</label>
                <input type="text" name="tagline" 
                value={this.state.tagline} onChange={(event) => this.handleInput(event)} />

                <label>Description:</label>
                <input type="textarea" name="description" 
                value={this.state.description} onChange={(event) => this.handleInput(event)} />

                <label>First brewed:</label>
                <input type="text" name="first_brewed" 
                value={this.state.first_brewed} onChange={(event) => this.handleInput(event)} />

                <label>Brewers tips:</label>
                <input type="textarea" name="brewers_tips" 
                value={this.state.brewers_tips} onChange={(event) => this.handleInput(event)} />

                <label>Attenuation level:</label>
                <input type="number" name="attenuation_level" 
                value={this.state.attenuation_level} onChange={(event) => this.handleInput(event)} />

                <label>Contributed by:</label>
                <input type="text" name="contributed_by" 
                value={this.state.contributed_by} onChange={(event) => this.handleInput(event)} />

                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default NewBeer;