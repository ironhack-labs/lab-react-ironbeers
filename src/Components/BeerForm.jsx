import React, { Component } from 'react'
import axios from 'axios'
import '../Styles/BeerForm.css'

export class BeerForm extends Component {
    state = {
        name:"",
        tagline:"",
        description:"",
        first_brewed:"",
        brewers_tips:"",
        attenuation_level:"",
        contributed_by:"",
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log("coucou");
        console.log(this.state);
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", 
            {
                name: this.state.name,
                tagline: this.state.tagline,
                description: this.state.description,
                first_brewed: this.state.first_brewed,
                brewers_tips: this.state.brewers_tips,
                attenuation_level: this.state.attenuation_level,
                contributed_by: this.state.contributed_by
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    handleValue = (event) => {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="BeerForm">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleValue}/>

              <label htmlFor="tagline">Tagline</label>
              <input type="text" id="tagline" name="tagline"value={this.state.tagline}  onChange={this.handleValue}/>

              <label htmlFor="description">Description</label>
              <textarea type="text" id="description" name="description" value={this.state.description} onChange={this.handleValue}/>

              <label htmlFor="firstbrewed">First Brewed</label>
              <input type="text" id="firstbrewed" name="first_brewed" value={this.state.first_brewed} onChange={this.handleValue}/>

              <label htmlFor="brewertips">Brewer Tips</label>
              <input type="text" id="brewertips" name="brewers_tips" value={this.state.brewers_tips} onChange={this.handleValue}/>

              <label htmlFor="attenuation_level">Attenuation Level</label>
              <input type="number" id="attenuation_level" name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleValue}/>

              <label htmlFor="contributed_by">Contributed By</label>
              <input type="text" id="contributed_by" name="contributed_by" value={this.state.contributed_by} onChange={this.handleValue}/>

              <button>Send</button>
            </form>
        );
    }
}

export default BeerForm
