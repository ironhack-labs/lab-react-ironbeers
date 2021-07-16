import { Component } from 'react'
import React from 'react'
import BeersService from './../../services/beers.service'

class NewBeer extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: '',
            contributed_by: ''
        }
        this.BeersService = new BeersService()
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleFormSubmit = e => {
        e.preventDefault()

        this.BeersService
            .newBeer(this.state)
            .then(() => {
                this.props.closeModal()
                this.props.refreshCoasters()
                this.setState({
                    name: '',
                    tagline: '',
                    description: '',
                    first_brewed: '',
                    brewers_tips: '',
                    attenuation_level: '',
                    contributed_by: ''
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>

                <form className="new-movie-form" onSubmit={this.handleFormSubmit}>

                    <label>
                        Nombre: <input type="text" value={this.state.name} onChange={this.handleInputChange} name="title" />
                    </label>

                    <label>
                        Tagline: <input type="text" value={this.state.tagline} onChange={this.handleInputChange} name="director" />
                    </label>

                    <label>
                        Descripción: <input type="text" value={this.state.description} onChange={this.handleInputChange} name="rating" />
                    </label>

                    <label>
                        First Brewed: <input type="text" value={this.state.first_brewed} onChange={this.handleInputChange} name="rating" />
                    </label>

                    <label>
                        Brewers Tips: <input type="text" value={this.state.brewers_tips} onChange={this.handleInputChange} name="rating" />
                    </label>

                    <label>
                        Attenuation Level: <input type="text" value={this.state.attenuation_level} onChange={this.handleInputChange} name="rating" />
                    </label>

                    <label>
                        Contributed By: <input type="text" value={this.state.contributed_by} onChange={this.handleInputChange} name="rating" />
                    </label>


                    <input type="submit" value="Crear película" />
                </form>

            </>
        )
    }
}

export default NewBeer