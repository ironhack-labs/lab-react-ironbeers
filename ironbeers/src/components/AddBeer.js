import React, {Component} from 'react'
import Navbar from "./NavBar"
import beersService from "../service/beersService"

class AddBeer extends Component {

    constructor (props) {
        super(props)

        this.state = {
        }

        this.service = new beersService()
    }

    addBeer = (e) => {
        e.preventDefault()
        const body = {
            name: e.target.name.value,
            tagline: e.target.tagline.value,
            description: e.target.description.value,
            first_brewed: e.target.first_brewed.value,
            brewers_tips: e.target.brewers_tips.value,
            attenuation_level: parseInt(e.target.attenuation_level.value),
            contributed_by: e.target.contributed_by.value,
        }
        this.service.addBeer(body)
        .then(info => console.log(info))
        .catch(err => console.log(err))
    }   

    render () {
        return (
            <main>
                <nav>
                    <Navbar />
                </nav>
                <form onSubmit={this.addBeer}>
                    <label>Name: <input type="text" name="name" /></label><br/><br/>
                    <label>Tagline: <input type="text" name="tagline" /></label><br/><br/>
                    <label>Description: <textarea name="description" /></label><br/><br/>
                    <label>First Brewed: <input type="text" name="first_brewed" /></label><br/><br/>
                    <label>Brewers tips: <input type="text" name="brewers_tips" /></label><br/><br/>
                    <label>Attenuation Level: <input type="number" name="attenuation_level" /></label><br/><br/>
                    <label>Contributed By: <input type="text" name="contributed_by" /></label><br/><br/>
                    <button type="submit">Add New</button>
                </form>
            </main>
        )
    }
}

export default AddBeer
