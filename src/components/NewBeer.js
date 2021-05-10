import axios from 'axios'
import React, { Component } from 'react'

export default class NewBeer extends Component {
    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    }
    handleChange = e => {
        const {name, value} = e.target;
          this.setState({
            [name] : value
          })
    }
    submitForm = e => {
        e.preventDefault();
        const {
            name,
            tagline,
            description,
            first_brewed,
            brewers_tips,
            attenuation_level,
            contributed_by
        } = this.state;
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by})
        .then(response => {
            // console.log(response.data);
            this.setState({
                name: '',
                tagline: '',
                description: '',
                first_brewed: '',
                brewers_tips: '',
                attenuation_level: 0,
                contributed_by: ''
            });
            this.props.history.push('/beers');
        })
    }
    render() {
        return (
            <form>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" value={this.state.title} onChange={this.handleChange} />

                <label htmlFor="tagline">Tagline: </label>
                <input type="text" name="tagline" id="tagline" value={this.state.tagline} onChange={this.handleChange}/>
                
                <label htmlFor="description">Description: </label>
                <textarea type="text" name="description" id="description" value={this.state.description} onChange={this.handleChange}/>
                
                <label htmlFor="first_brewed">First brewed: </label>
                <input type="text" name="first_brewed" id="first_brewed" value={this.state.first_brewed} onChange={this.handleChange}/>
                
                <label htmlFor="brewers_tips">Brewers tips: </label>
                <input type="text" name="brewers_tips" id="brewers_tips" value={this.state.brewers_tips} onChange={this.handleChange}/>
                
                <label htmlFor="attenuation_level">Attenuation level: </label>
                <input type="number" name="attenuation_level" id="attenuation_level" value={this.state.attenuation_level} onChange={this.handleChange}/>
                
                <label htmlFor="contributed_by">Contributed by: </label>
                <input type="text" name="contributed_by" id="contributed_by" value={this.state.contributed_by} onChange={this.handleChange}/>
                <button onClick={this.submitForm}>Add new</button>
            </form>
        )
    }
}
