import React, { Component } from 'react'
import axios from 'axios'

export default class NewBeer extends Component {
    state={
        name:"",
        tagline:"",
        description:"",
        first_brewed:"",
        brewers_tips:"",
        attenuation:"",
        contributed_by:"", 
        _id:""
    }

    handleChange=(event)=>{
        const name = event.target.name;
        const value =event.target.value;
        this.setState({ [name]: value });
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {name: this.state.name,
        tagline:this.state.tagline,
        description:this.state.description,
        first_brewed:this.state.first_brewed,
        brewers_tips:this.state.brewers_tips,
        attenuation:this.state.attenuation,
        contributed_by:this.state.contributed_by})
        .then((info)=>console.log(info))
        .catch((err)=>console.log(err))

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p style={{margin: 15}}><label htmlFor="name">Name</label>
                    <input name="name" id="name" type="text" value={this.state.name} onChange={this.handleChange}/></p>

                <p style={{margin: 15}}>
                <label htmlFor="name">Tagline</label >
                <input name="tagline" id="tagline" type="text" value={this.state.tagline} onChange={this.handleChange}/></p>
                <p style={{margin: 15}}>
                <label htmlFor="description">Decription</label>
                <input name="description" id="description" type="text" value={this.state.description} onChange={this.handleChange}/></p>
                <p style={{margin: 15}}>
                <label htmlFor="first_brewed">First Brewed</label>
                <input name="first_brewed" id="first_brewed" type="text" value={this.state.first_brewed} onChange={this.handleChange}/></p>
                <p style={{margin: 15}}>
                <label htmlFor="brewers_tips">Brewers tips</label>
                <input name="brewers_tips" id="brewers_tips" type="text" value={this.state.brewers_tips} onChange={this.handleChange}/></p>
                <p style={{margin: 15}}>
                <label htmlFor="attenuation">Attenuation Level</label>
                <input name="attenuation" id="attenuation" type="number" value={this.state.attenuation} onChange={this.handleChange}/></p>
                <p style={{margin: 15}}>
                <label htmlFor="contributed_by">Contributed by</label>
                <input name="contributed_by" id="contributed_by" type="text" value={this.state.contributed_by} onChange={this.handleChange}/></p>
                <p style={{margin: 15}}>
                <button>Submit</button></p>
            </form>
        )
    }
}
