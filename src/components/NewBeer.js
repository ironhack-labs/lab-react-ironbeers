import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header'
import 'bulma/css/bulma.css';

export default class NewBeer extends Component {

    handleSubmit = () => {
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new')
        .then((response)=>{
            console.log(response)
        }).catch((err) => console.log(err));
    }

    render() {
        return (
            <div>
                <h1><Header/></h1>
                <h2 className='title'>Create a new beer</h2>
                <form action="/beers/new" method="POST" onSubmit={this.handleSubmit} className='form' style={{width:'50%'}}>
                    <label className='label'>Beer name</label>
                    <input className='input' type='text' name="name" id="name"></input>
                    <label className='label'>Tagline: </label>
                    <input className='input' type='text' name="tagline" id="tagline"></input>
                    <label className='label'>Beer description:</label>
                    <input className='input' type='text'  name="description" id="description"></input>
                    <label className='label'>First brewed:</label>
                    <input className='input' type='text' name="first_brewed" id="first_brewed"></input>
                    <label className='label'>Brewers tips:</label>
                    <input className='input' type='text' name="brewers_tips" id="brewers_tips"></input>
                    <label className='label'>Attenuation level:</label>
                    <input className='input'
                    type="number"
                    name="attenuation_level"
                    id="attenuation_level">
                    </input>
                    <label className='label'>Contributed by:</label>
                    <input className='input' type="text" name="contributed_by" id="contributed_by"></input>
                    <button className="button is-primary mt-3" type="submit">Add a new beer</button>
                </form>
            </div>
        )
    }
}

