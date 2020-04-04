import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class NewBeers extends Component {

    constructor() {
        super();

        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: '',
            contributed_by: ''
        }
    }

    handleFormSubmit = async (event) => {
        event.preventDefault()
        const {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state
            
        try {
            await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by})
            
                    this.setState({
                        name: '',
                        tagline: '',
                        description: '',
                        first_brewed: '',
                        brewers_tips: '',
                        attenuation_level: '',
                        contributed_by: ''
                    })
        } catch (error) {
            console.log(error)
        }

    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <Link to='/'> <img src='https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png' alt='' /> <header>Home</header></Link>

                <form style={{display:'flex', flexDirection:'column'}} onSubmit={this.handleFormSubmit}>

                    <label>Name:</label>
                    <input type='text' name='name' value={this.state.name} onChange={e => this.handleChange(e)} />
                    <label>Tagline:</label>
                    <input type='text' name='tagline' value={this.state.tagline} onChange={e => this.handleChange(e)} />
                    <label>Description:</label>
                    <input type='text' name='description' value={this.state.description} onChange={e => this.handleChange(e)} />
                    <label>First Brewed:</label>
                    <input type='text' name='first_brewed' value={this.state.first_brewed} onChange={e => this.handleChange(e)} />
                    <label>Brewer Tips:</label>
                    <input type='text' name='brewers_tips' value={this.state.brewers_tips} onChange={e => this.handleChange(e)} />
                    <label>Attenutation level:</label>
                    <input type='number' name='attenuation_level' value={this.state.attenuation_level} onChange={e => this.handleChange(e)} />
                    <label>Contributed By:</label>
                    <input type='text' name='contributed_by' value={this.state.contributed_by} onChange={e => this.handleChange(e)} />
                   <input type='submit' value='Submit'/>
                </form>
            </div>
        )
    }
}

export default NewBeers