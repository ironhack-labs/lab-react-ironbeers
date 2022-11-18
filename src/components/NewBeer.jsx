import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

class NewBeer extends Component {
    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    }
     navigate = useNavigate();

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
            .then(response => {
                console.log(response);
               
            })
    }

    render() {
        return (
            <div>
                <Header />


                <form className='NewBeer' onSubmit={this.handleSubmit}>
                    <h2> Create New Beer </h2>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
                    <label htmlFor="tagline">Tagline</label>
                    <input type="text" name="tagline" id="tagline" value={this.state.tagline} onChange={this.handleChange} />
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" value={this.state.description} onChange={this.handleChange} />
                    <label htmlFor="first_brewed">First Brewed</label>
                    <input type="text" name="first_brewed" id="first_brewed" value={this.state.first_brewed} onChange={this.handleChange} />
                    <label htmlFor="brewers_tips">Brewers Tips</label>
                    <input type="text" name="brewers_tips" id="brewers_tips" value={this.state.brewers_tips} onChange={this.handleChange} />
                    <label htmlFor="attenuation_level">Attenuation Level</label>
                    <input type="number" name="attenuation_level" id="attenuation_level" value={this.state.attenuation_level} onChange={this.handleChange} />
                    <label htmlFor="contributed_by">Contributed By</label>
                    <input type="text" name="contributed_by" id="contributed_by" value={this.state.contributed_by} onChange={this.handleChange} />
                    <br />
                    <button type="submit">Add New</button>
                </form>
            </div>
        );
    }
}

export default NewBeer;
