import React, { Component } from 'react';
import axios from 'axios';


class NewBeer extends Component {
    state = {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
    }

    handleOnChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, tagline, description, first_brewed, brewers_tips,attenuation_level, contributed_by } = this.state;
        this.setState({
            name,
            tagline,
            description,
            first_brewed,
            brewers_tips,
            attenuation_level: Number(attenuation_level),
            contributed_by
        })
        axios
            .post(`https://ih-beers-api2.herokuapp.com/beers/new`, this.state)
            .then((response) => {
                this.setState({beer: response.data})
            })
    }

    render() {
        return (
            <div className="form-div">
                <form onSubmit={this.handleSubmit}>
                    <label> Name </label>
                    <input name="name" value={this.state.name} onChange={this.handleOnChange}></input>
                    
                    <label> Tagline </label>
                    <input name="tagline" value={this.state.tagline} onChange={this.handleOnChange}></input>
                    
                    <label> Description </label>
                    <input name="description" value={this.state.description} onChange={this.handleOnChange}></input>
                    
                    <label> First brewed </label>
                    <input name="first_brewed" value={this.state.first_brewed} onChange={this.handleOnChange}></input>
                    
                    <label> Brewers tips </label>
                    <input name="brewers_tips"  value={this.state.brewers_tips} onChange={this.handleOnChange}></input>
                    
                    <label> Attenuation level </label>
                    <input name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleOnChange}></input>
                    
                    <label> Contributed by </label>
                    <input name="contributed_by" value={this.state.contributed_by} onChange={this.handleOnChange}></input>
                    
                    <button> Create beer </button>
                </form>
            </div>
        )
    }

}



export default NewBeer;


