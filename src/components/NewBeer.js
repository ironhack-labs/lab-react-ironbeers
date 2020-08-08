import React, { Component } from 'react'
import axios from 'axios'

export class NewBeer extends Component {

    constructor(props) {
        super(props)
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

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", this.state)
            .then(response => {
                this.props.history.push('/beers');
            })
    }



    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type="text" name="name"
                    value={this.state.name}
                    onChange={this.handleChange} />
                <label>Tagline</label>
                <input type="text" name="tagline"
                    value={this.state.tagline}
                    onChange={this.handleChange} />
                <label>Description</label>
                <input type="text" name="description"
                    value={this.state.description}
                    onChange={this.handleChange} />
                <label>First Brewed</label>
                <input type="text" name="first_brewed"
                    value={this.state.first_brewed}
                    onChange={this.handleChange} />
                <label>Brewers Tips</label>
                <input type="text" name="brewers_tips"
                    value={this.state.brewers_tips}
                    onChange={this.handleChange} />
                <label>Attenuation level</label>
                <input type="text" name="attenuation_level"
                    value={this.state.attenuation_level}
                    onChange={this.handleChange} />
                <label>contributed_by</label>
                <input type="text" name="contributed_by"
                    value={this.state.contributed_by}
                    onChange={this.handleChange} />
                <input type="submit" value="Add NEW" />
            </form>

        )
    }
}

export default NewBeer
