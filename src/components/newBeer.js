import React, { Component } from 'react'
import axios from 'axios';

export default class newBeer extends Component {

    state = {
        name: '',
        description:'',
        first_brewed: '',
        food_pairing: '',
        contributedBy: ''
    }

    handleChange(event) {
        let { name, value, type } = event.target;

        this.setState({
            [name]: value
        }) 
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
        let {name, 
            description, 
            first_brewed, 
            food_pairing, 
            contributedBy 
        } = this.state;
    

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            name,
            description,
            first_brewed,
            food_pairing,
            contributedBy
        })
        .then((response) => {
            console.log(response);
        });
    };

    render() {
        return (
            
            <div>
                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="name">Name: </label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={(e) => this.handleChange(e)}
                        />
                    <label htmlFor="name">description: </label>
                        <input
                            type="text"
                            name="description"
                            value={this.state.description}
                            onChange={(e) => this.handleChange(e)}
                        />
                    <label htmlFor="name">first brewed: </label>
                        <input
                            type="text"
                            name="first_brewed"
                            value={this.state.first_brewed}
                            onChange={(e) => this.handleChange(e)}
                        />
                    <label htmlFor="name">food pairing: </label>
                        <input
                            type="text"
                            name="food_pairing"
                            value={this.state.food_pairing}
                            onChange={(e) => this.handleChange(e)}
                        />
                    <label htmlFor="name">contributedBy: </label>
                        <input
                            type="text"
                            name="contributedBy"
                            value={this.state.contributedBy}
                            onChange={(e) => this.handleChange(e)}
                        />
                    <button type="submit">Add this beer</button>

                </form>

            </div>
        )
    }
}
