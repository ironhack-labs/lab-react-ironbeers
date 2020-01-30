import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class newBeer extends Component {
    constructor() {
        super();
        this.state = {
            newBeer: {
                name: "",
                tagline: "",
                description: "",
                first_brewed: "",
                brewers_tips: "",
                attenuation_level: 0,
                contributed_by: ""
            }
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", this.state.newBeer)
        .then(response => {
            console.log(response);
        })

    }

    changeHandler = (event) => {
        let { name, value } = event.target;
        let cacheBeer = this.state.newBeer;
        cacheBeer[name] = value;
        this.setState({ newBeer: cacheBeer })      
    }

    render() {
        return (
            <div>
                <header>
                    <Link to="/"> <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="home" /> </Link>
                </header>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label><br />
                    <input name="name" type="text" onChange={this.changeHandler} /><br />
                    <label htmlFor="tagline">Tagline</label><br />
                    <input name="tagline" type="text" onChange={this.changeHandler} /><br />
                    <label htmlFor="description">Description</label><br />
                    <input name="description" type="text" onChange={this.changeHandler} /><br />
                    <label htmlFor="first_brewed">First Brewed</label><br />
                    <input name="first_brewed" type="text" onChange={this.changeHandler} /><br />
                    <label htmlFor="brewers_tips">Brewers Tips</label><br />
                    <input name="brewers_tips" type="text" onChange={this.changeHandler} /><br />
                    <label htmlFor="attenuation_level">Attenuation Level</label><br />
                    <input name="attenuation_level" type="number" onChange={this.changeHandler} /><br />
                    <label htmlFor="contributed_by">Contributed By</label><br />
                    <input name="contributed_by" type="text" onChange={this.changeHandler} /><br />
                    <button type="submit">ADD NEW</button>
                </form>
            </div>
        )
    }
}
