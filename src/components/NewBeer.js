import React, { Component } from 'react';
import Navbar from './Navbar';
const axios = require('axios');

export default class NewBeer extends Component {
    state = {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    submitForm = (event) => {
        event.preventDefault();
        console.log(this.state)
        const newBeer = this.state;
        axios
            .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            .then(responseFromApi => console.log({newBerr: responseFromApi.data}))
            .catch(err => console.log(err))

    }


    render() {
        return (
            <div>
                <Navbar />
                <form className="new-beer" onSubmit={this.submitForm} >
                    <label>Name: 
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </label>

                    <label>Tagline: 
                        <input type="text" name="tagline" value={this.state.tagline} onChange={this.handleChange} />
                    </label>

                    <label>Description: 
                        <textarea type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                    </label>

                    <label>First brewed: 
                        <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={this.handleChange} />
                    </label>

                    <label>Brewers tips: 
                        <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={this.handleChange} />
                    </label>

                    <label>Attenuation level: 
                        <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleChange} />
                    </label>

                    <label>contributed_by: 
                        <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={this.handleChange} />
                    </label>
                    <button>ADD NEW</button>
                </form>
            </div>
        )
    }
}
