import React, { Component } from 'react'
import HeaderHome from '../components/HeaderHome'
import apiHandler from '../api/api'

const api = new apiHandler()

export default class NewBeer extends Component {
state = {
    newBeer : null,
    name: null,
    tagline:null,
    description: null,
    first_brewed: null,
    brewers_tips:null,
    attenuation_level: null,
    contributed_by:null,
}
inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
}
formHandler = e => {
    e.preventDefault()
    const {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by} = this.state
    api.post('/beers/new', {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by})
    .then(apiRes => console.log(apiRes))
}
    render() {
        return (
            <div>
                <HeaderHome/>
                <form onChange={this.inputHandler} onSubmit={this.formHandler}>
                <label for="name">Name</label>
                <input type="text" name="name" id="name" />
                <label for="tagline">Tag line</label>
                <input type="text" name="tagline" id="tagline" />
                <label for="description">Description</label>
                <input type="text" name="description" id="description" />
                <label for="first_brewed">First Brewed :</label>
                <input type="text" name="first_brewed" id="first_brewed" />
                <label for="brewers_tips">Brewers tips:</label>
                <input type="text" name="brewers_tips" id="brewers_tips" />
                <label for="attenuation_level">Attenuation Level</label>
                <input type="number" name="attenuation_level" id="attenuation_level" />
                <label for="contributed_by">Contributed by : </label>
                <input type="text" name="contributed_by " id="contributed_by " />
                <button type="submit">Add</button>
            </form>
            </div>
        )
    }
}

