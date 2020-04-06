import React, { Component } from 'react'
import axios from "axios"
export default class Newbeer extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: 0,
            contributed_by: "",
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
        console.log(name, value)

    }

    handleFormSubmit = async event => {
        event.preventDefault()
        console.log(this.state)
        let response = await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
            name: this.state.name,
            tagline: this.state.tagline,
            description: this.state.description,
            first_brewed: this.state.first_brewed,
            brewers_tips: this.state.brewers_tips,
            attenuation_level: parseInt(this.state.attenuation_level),
            contributed_by: this.state.contributed_by,
        })
        if (response.status === 200) {
            console.log("beer created")
            console.log(response);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit} className="test">
                    <label >
                        Name:
                <input name="name" required value={this.state.name} onChange={e => this.handleChange(e)} type="text" />
                    </label><br></br>
                    <label >
                        Tagline:
                <input name="tagline" required value={this.state.tagline} onChange={e => this.handleChange(e)} type="text" />
                    </label><br></br>
                    <label >
                        description:
                <input name="description" required value={this.state.description} onChange={e => this.handleChange(e)} type="text" />
                    </label><br></br>
                    <label >
                        first brewed:
                <input name="fist_brewed" required value={this.state.fist_brewed} onChange={e => this.handleChange(e)} type="text" />
                    </label><br></br>
                    <label >
                        brewers tips:
                <input name="brewers_tips" required onChange={e => this.handleChange(e)} type="text" />
                    </label><br></br>
                    <label >
                        attenuation lvl:
                <input name="attenuation_level" required onChange={e => this.handleChange(e)} type="number" /><br></br>
                    </label><br></br>
                    <label >
                        contributed by:
                <input name="contributed_by" required value={this.state.contributed_by} onChange={e => this.handleChange(e)} type="text" /><br></br>
                    </label><br></br>
                    <button >Add New</button>
                </form>
            </div>


        )

    }
}
