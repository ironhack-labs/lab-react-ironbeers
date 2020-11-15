import React, { Component } from 'react'
import axios from 'axios';

class NewBeer extends Component {

    handleSubmit = (event) =>{
        event.preventDefault();
        let createBeer={
            name:event.target[0].value,
            tagline :event.target[1].value,
            description:event.target[2].value,
            first_brewed:event.target[3].value,
            brewers_tips:event.target[4].value,
            attenuation_level:event.target[5].value,
            contributed_by:event.target[6].value
        }
        axios.post("https://api.punkapi.com/v2/beers/new",createBeer).then();


    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type="text"/>
                <label>Tagline</label>
                <input type="text"/>
                <label>Description</label>
                <textarea />
                <label>First Brewed </label>
                <input type="text"/>
                <label>Brewers Tips </label>
                <input type="text"/>
                <label>Attenuation Level </label>
                <input type="number"/>
                <label>Contributed By </label>
                <input type="text"/>
                <button>Add new</button>
            </form>
        )

    }
   
}

export default NewBeer
