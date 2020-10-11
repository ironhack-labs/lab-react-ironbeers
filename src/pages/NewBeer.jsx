import React, { Component } from 'react';
import BeerAPI from '../api/beerApi';

export default class NewBeer extends Component {

    constructor (props) {
        super(props);
        this.state = {
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: 0,
            contributed_by: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }


    handleChange = (event) => {
        const value = event.target.value;
        const key = event.target.name;
    
        this.setState({
          [key]: value,
        });
      };


    handleSubmit = (event) => {
        event.preventDefault();
        BeerAPI.newBeer(this.state)
        .then(apiResponse => {
            console.log(apiResponse);
            this.props.history.push('/beers/');
        })
        .catch(error => {
            console.log(error)
        })
    };

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Beer Name</label>
                <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange}/>

                <label htmlFor="tagline">Tagline</label>
                <input type="text" name="tagline" id="tagline" value={this.state.tagline} onChange={this.handleChange}/>

                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" value={this.state.description} onChange={this.handleChange}/>

                <label htmlFor="firstBrewed">First Brewed</label>
                <input type="text" name="first_brewed" id="firstBrewed" value={this.state.first_brewed} onChange={this.handleChange}/>

                <label htmlFor="brewers_tips">Brewers Tips</label>
                <input type="text" name="brewers_tips" id="brewers_tips" value={this.state.brewers_tips} onChange={this.handleChange}/>

                <label htmlFor="attenuationLevel">Attenuation Level</label>
                <input type="number" id="attenuationLevel" name="attenuation_level" min="0" max="1000" value={this.state.attenuation_level} onChange={this.handleChange}></input>

                <label htmlFor="contributedBy">Contributed By</label>
                <input type="text" name="contributed_by" id="contributedBy" value={this.state.contributed_by} onChange={this.handleChange}/>
                
                <button>Submit</button>
            </form>
                
            </div>
        )
    }
}

