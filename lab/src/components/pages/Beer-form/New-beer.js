import React, { Component } from 'react'
import Header from "../Header"
import BeersService from '../../../service/beers.service'

class BeerForm extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            contributed_by: ''
        }
        this.beersService = new BeersService()
    }
    
    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {    

        this.beersService
            .saveBeer(this.state)
            .then(res => {
                // this.props.updateList()     
            })
            .catch(err => console.log(err))
    }

    render() {
        return (

            <>
                <Header />
                
                <form onSubmit={this.handleSubmit} className="text-center mt-4">
                        <label>Name:</label><br />
                        <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                        <br /><br />

                        <label>Tagline:</label><br />
                        <input type="text" name="tagline" value={this.state.tagline} onChange={this.handleInputChange} />
                        <br /><br />

                        <label>Description:</label><br />
                        <input type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                        <br /><br />

                        <label>First brewed:</label><br />
                        <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={this.handleInputChange} />
                        <br /><br />

                        <label>Brewers tips:</label><br />
                        <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={this.handleInputChange} />
                        <br /><br />

                        <label>Contributed by:</label><br />
                        <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={this.handleInputChange} />
                        <br /><br />

                        <button type="submit" className="btn btn-dark">Add New Beer</button>
                    </form>
            </>                  

        )
    }
}

export default BeerForm