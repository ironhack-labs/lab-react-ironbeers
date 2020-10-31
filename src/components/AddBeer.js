import React, { Component } from 'react'
import axios from 'axios'

class AddBeer extends Component {

    AddBeer = (e) => {
        e.preventDefault()
        const {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by} = e.target.name
        let newBeer = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: first_brewed,
            brewers_tips: brewers_tips,
            attenuation_level: attenuation_level,
            contributed_by: contributed_by
        }
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            .then((response)=>{
                console.log(response)
            })
    }


    render() {
        return (
            <form onSubmit={this.AddBeer} className="add-beer-form">
                <h2>Name</h2>
                <input name="name" type="text" placeholder="Beer Mc. Beerson"></input>
                <h2>Tagline</h2>
                <input name="tagline" type="text" placeholder="One more!"></input>
                <h2>Description</h2>
                <input name="description" type="text" placeholder="Made by monks! Kung-fu monks!" className="add-description"></input>
                <h2>First Brewed</h2>
                <input name="first_brewed" type="text" placeholder="05/1554"></input>
                <h2>Brewer's Tips</h2>
                <input name="brewers_tips" type="text" placeholder="Tastes best with friends!"></input>
                <h2>Attenuation Level</h2>
                <input name="attenuation_level" type="number" placeholder="Over 9000!"></input>
                <h2>Contributed By</h2>
                <input name="contributed_by" type="text" placeholder="John Doe or your name"></input>
                <button type="submit">ADD BEER</button>
            </form>
        )
    }
}

export default AddBeer