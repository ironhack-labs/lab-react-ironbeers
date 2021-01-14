import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';

export class New_Beer extends React.Component {

    state = {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
    };

    handleChange = (event) => {
        // let { name, value, type } = event.target;
            
        this.setState({ [event.target.name]: event.target.value });
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", this.state)
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <Navbar />

                <form onSubmit={this.handleFormSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />

                    <label>Tagline:</label>
                    <input type="text" name="tagline" value={this.state.tagline} onChange={this.handleChange} />

                    <label>Description:</label>
                    <input type="text" name="description" checked={this.state.description} onChange={this.handleChange} />

                    <label>Frist Brewed:</label>
                    <input type="text" name="first_brewed" checked={this.state.first_brewed} onChange={this.handleChange} />

                    <label>Brewers Tips:</label>
                    <input type="text" name="brewers_tips" checked={this.state.brewers_tips} onChange={this.handleChange} />

                    <label>Attenuation Level:</label>
                    <input type="number" name="attenuation_level" checked={this.state.attenuation_level} onChange={this.handleChange} />

                    <label>Contributed By:</label>
                    <input type="text" name="contributed_by" checked={this.state.contributed_by} onChange={this.handleChange} />


                    <button>Submit</button>

                </form>

            </div>
        );
    }
}

export default New_Beer;