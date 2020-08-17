import React, { Component } from 'react'
import "./NewBeer.css"
import axios from "axios"
import Header from "../Header/Header"

export class NewBeer extends Component {
    constructor (props) {
        super (props)
        this.state = {
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: 0,
            contributed_by: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
            .then((response) => {
                console.log(response.data)
            })
    }

    render() {
        return (
            <div>
            <Header/>
            <form className="formuario">
            <label>Name:</label>
            <input type="text" onChange={this.handleChange}></input>
            <label>Tagline:</label>
            <input type="text" onChange={this.handleChange}></input>
            <label>Description:</label>
            <input type="text" onChange={this.handleChange}></input>
            <label>First brewed</label>
            <input type="text" onChange={this.handleChange}></input>
            <label>Brewers tips:</label>
            <input type="text" onChange={this.handleChange}></input>
            <label>Attenuation Level:</label>
            <input type="number" onChange={this.handleChange}></input>
            <label>Contributed by:</label>
            <input type="text" onChange={this.handleChange}></input>
            <input type="submit" onSubmit={this.handleSubmit}></input>
                
            </form>       
            </div>
        )
    }
}

export default NewBeer
