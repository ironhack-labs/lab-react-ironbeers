import React from 'react'
import axios from 'axios'
import Navbar from "./Navbar"
import qs from "qs"

class Newbeer extends React.Component {
    constructor() {
        super()

        this.state = {
         name: "",
         tagline: "",
         description: "",
         first_brewed: "",
         brewers_tips: "",
         attenuation_level: 0,
         contributed_by: ""
        }

        this.handleChange = this.handleChange.bind(this)
    } 
    // "https://ih-beers-api2.herokuapp.com/beers/new"
    handleFormSubmit = event => {
        event.preventDefault()
        axios({
            method: "POST",
            url: `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`,
            data: qs.stringify(this.state),
            headers: {"content-type": "application/x-www-form-urlencoded"}
        })
        .then(response => {
            this.props.history.push(`/beers/${response.data._id}`)
        })
        .catch(error => {
            console.log("Charles you fucked it!!!",error)
        })
    }

    handleChange(event) {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="newbeer">
                <div className="navbar">
                    <Navbar/>
                </div>

                <div className="newbeerpage">
                    <form onSubmit={this.handleFormSubmit}>
                        <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
                        <input type="text" name="tagline" value={this.state.tagline} onChange={(e) => this.handleChange(e)}/>
                        <input type="text" name="description" value={this.state.description} onChange={(e) => this.handleChange(e)}/>
                        <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={(e) => this.handleChange(e)}/>
                        <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={(e) => this.handleChange(e)}/>
                        <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={(e) => this.handleChange(e)}/>
                        <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={(e) => this.handleChange(e)}/>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Newbeer