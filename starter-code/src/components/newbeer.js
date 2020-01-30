import React, { Component } from 'react';
import axios from 'axios';

export default class newbeer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: '',
            contributed_by: ''
        }
    }

    handleFormSubmit = (event) => {
            axios.post("https://ih-beers-api2.herokuapp.com/beers/new", this.state)
            .then(
                response => {
                    console.log("some output", response)
                }
            ) 
    }

    handleChange = (event) => {
        let {name, value} = event.target;
        this.setState({[name]: value});
    }


    render() {

        const formular = 
        <form onSubmit={this.handleFormSubmit}>
            <p><label><b>Name: </b></label>
            <input type="text" name="name" value ={this.state.name} onChange={this.handleChange} />
            </p>

            <p>
            <label><b>tagline: </b></label>
            <input type="text" name="tagline" value ={this.state.tagline} onChange={this.handleChange} />
            </p>

            <p>
            <label><b>description: </b></label>
            <input type="text" name="description" value ={this.state.description} onChange={this.handleChange} />
            </p>
            
            <p>
            <label><b>first_brewed: </b></label>
            <input type="text" name="first_brewed" value ={this.state.first_brewed} onChange={this.handleChange} />
            </p>

            <p>
            <label><b>brewers_tips: </b></label>
            <input type="text" name="brewers_tips" value ={this.state.brewers_tips} onChange={this.handleChange} />
            </p>

            <p>
            <label><b>attenuation_level: </b></label>
            <input type="number" name="attenuation_level" value ={this.state.attenuation_level} onChange={this.handleChange} />
            </p>

            <p>
            <label><b>contributed_by: </b></label>
            <input type="text" name="contributed_by" value ={this.state.contributed_by} onChange={this.handleChange} />
            </p>
        </form>

        return (
            <div><br/>
                {formular}
                <button onClick={this.handleFormSubmit}>Add new Beerski!</button>
            </div>
        )
    }
}
