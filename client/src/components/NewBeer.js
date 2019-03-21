import React, { Component } from 'react'
import Service from '../service/service.js'


export default class NewBeer extends Component {

    constructor() {

        super()

        this.service = new Service()

        this.state = {
            name : "",
            tagline : "",
            description : "",
            first_brewed : "",
            brewers_tips : "",
            attenuation_level : 1,
            contributed_by : ""
        }
    }



    handleChange = e => {
        let { name, value } = e.target;
        if (name === "attenuation_level") {
            value = parseInt(value);
        }
        this.setState({ [name]: value });
    }



    handleFormSubmit = e => {
        e.preventDefault()
        this.service.postBeer(this.state)
        this.setState({
            name : "",
            tagline : "",
            description : "",
            first_brewed : "",
            brewers_tips : "",
            attenuation_level : 1,
            contributed_by : ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleFormSubmit(e)}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} /><br></br><br></br>

                    <label>Tagline:</label>
                    <input type="text" name="tagline" value={this.state.tagline} onChange={(e) => this.handleChange(e)} /><br></br><br></br>

                    <label>Description</label>
                    <input type="text" name="description" checked={this.state.description} onChange={(e) => this.handleChange(e)} /><br></br><br></br>

                    <label>Brewed:</label>
                    <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={(e) => this.handleChange(e)} /><br></br><br></br>

                    <label>Tips:</label>
                    <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={(e) => this.handleChange(e)} /><br></br><br></br>

                    <label>Level:</label>
                    <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={(e) => this.handleChange(e)} /><br></br><br></br>

                    <label>contributed_by:</label>
                    <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={(e) => this.handleChange(e)} /><br></br><br></br>

                    
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
