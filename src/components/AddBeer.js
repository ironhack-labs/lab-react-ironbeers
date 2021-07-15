import React, { Component } from 'react';
import './AddBeer.css'

class NewBeerForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: '',
            contributed_by: '',
            image: '',

        }
    }

    handleInputChange = e => {

        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]: value                   // computed property names
        })
    }


    handleFormSubmit = e => {
        e.preventDefault()
        this.props.addBeer(this.state)

        this.setState({
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: '',
            contributed_by: '',
            image: '',
        })
    }


    render() {
        return (

            <form className="new-beer-form" onSubmit={this.handleFormSubmit}>

                <label>
                    Name: <input type="text" value={this.state.name} onChange={this.handleInputChange} name="name" />
                </label>

                <label>
                    Tagline: <input type="text" value={this.state.tagline} onChange={this.handleInputChange} name="tagline" />
                </label>

                <label>
                    description: <input type="text" value={this.state.description} onChange={this.handleInputChange} name="description" />
                </label>

                <label>
                    image: <input type="text" value={this.state.image} onChange={this.handleInputChange} name="image" />
                </label>

                <label>
                    first_brewed: <input type="text" value={this.state.first_brewed} onChange={this.handleInputChange} name="first_brewed" />
                </label>

                <label>
                    brewers_tips: <input type="text" value={this.state.brewers_tips} onChange={this.handleInputChange} name="brewers_tips" />
                </label>

                <label>
                    attenuation_level: <input type="number" value={this.state.attenuation_level} onChange={this.handleInputChange} name="attenuation_level" />
                </label>

                <label>
                    contributed_by: <input type="text" value={this.state.contributed_by} onChange={this.handleInputChange} name="contributed_by" />
                </label>


                <input type="submit" value="New Beer" />
            </form>
        )
    }
}


export default NewBeerForm