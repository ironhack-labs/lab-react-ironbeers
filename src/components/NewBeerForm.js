import axios from 'axios'
import React, { Component } from 'react'

export default class NewBeerForm extends Component {

    state= {
        message: ''
    }

    handleSubmit = (event) => {

        event.preventDefault();

        const inputs = {}
        for (let field of event.target) {
            console.log(field.name);
            inputs[field.name]= field.value;
        }        
        
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', inputs)
       .then(response => {
           console.log(response);
           this.setState({
               message: response.data.message
           })
           
       })
    }


    render() {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="name" name="name"/>
                <input type="text" placeholder="tagline" name="tagline" />
                <input type="text" placeholder="description" name="description" />
                <input type="text" placeholder="first_brewed" name="first_brewed" />
                <input type="text" placeholder="brewers_tips" name="brewers_tips" />
                <input type="number" placeholder="attenuation_level" name="attenuation_level" />
                <input type="text" placeholder="contributed_by" name="contributed_by" />
                <button type="submit">Add your beer!</button>
            </form>
            {this.state.message && <h3>{this.state.message}</h3>}
            </>
        )
    }
}
