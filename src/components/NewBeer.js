import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'


class NewBeer extends Component {

    constructor() {
        super()
        this.state = {
          name: '',
          tagline: '',
          description: '',
          first_brewed: '',
          brewers_tips: '',
          imageUrl: '',
          attenuation_level: '',
          contributed_by: ''         
        }
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault();
        const { 
            name, 
            tagline,
            description,
            first_brewed,
            brewers_tips,
            imageUrl,
            attenuation_level,
            contributed_by 
        } = this.state;

        axios 
            .post('https://ih-beers-api2.herokuapp.com/beers/new', { 
                name, 
                tagline,
                description,
                first_brewed,
                brewers_tips,
                imageUrl,
                attenuation_level,
                contributed_by 
            })
            .then( () => {
                this.setState({
                    name: '',
                    tagline: '',
                    description: '',
                    first_brewed: '',
                    brewers_tips: '',
                    imageUrl: '',
                    attenuation_level: '',
                    contributed_by: ''
                              
                })
            })
            .catch( error => console.log(error) )
    }

    toggleForm = () => {
        if(!this.state.isShowing){
            this.setState({isShowing: true});
        } else {
          this.setState({isShowing: false});
        }
    }

    render() {
        return (
            <>
                <h3>New Beer</h3>
                <hr></hr>
                <form onSubmit={this.handleFormSubmit}>
                    
                        <label>Name</label>
                        <input onChange={this.handleInputChange} value={this.state.name} name="name" type="text" />
                    
                        <label>Tagline</label>
                        <input onChange={this.handleInputChange} value={this.state.tagline} name="tagline" type="text" />
                    
                        <label>Description</label>
                        <input onChange={this.handleInputChange} value={this.state.description} name="description" type="textarea" />
                    
                        <label>First Brewed</label>
                        <input onChange={this.handleInputChange} value={this.state.first_brewed} name="first_brewed" type="text" />
                    
                        <label>Brewers Tips</label>
                        <input onChange={this.handleInputChange} value={this.state.brewers_tips} name="brewers_tips" type="text" />
                    
                        <label>Attenuation Level</label>
                        <input onChange={this.handleInputChange} value={this.state.attenuation_level} name="attenuation_level" type="number" />
                  
                        <label>Contributed By</label>
                        <input onChange={this.handleInputChange} value={this.state.contributed_by} name="contributed_by" type="text" />
                    
                    <button variant="dark" type="submit">Add new</button>
                    

                </form>
            </>
        )
    }

}

export default NewBeer;