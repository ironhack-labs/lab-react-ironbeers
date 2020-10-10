import axios from 'axios';
import React, { Component } from 'react'
import Nav from './Nav'

export default class NewBeer extends Component {
    state = {
        name: null,
        tagline: null,
        description: null,
        first_brewed: null,
        brewers_tips: null,
        attenuation_level: null,
        contributed_by: null,
        message: null,
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by }).then((res) => {
            console.log(res)
            this.setState({ message: res.status === 200 ? res.data.message : `Something went wrong` })
        })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div>
                <Nav />

                <form>
                    <label>Name<br /><input type="text" name="name" onChange={this.handleChange}></input></label><br />
                    <label>Tagline<br /><input type="text" name="tagline" onChange={this.handleChange}></input></label><br />
                    <label>Description<br /><input type="text" name="description" onChange={this.handleChange}></input></label><br />
                    <label>First Brewed<br /><input type="text" name="first_brewed" onChange={this.handleChange}></input></label><br />
                    <label>Brewers Tips<br /><input type="text" name="brewers_tips" onChange={this.handleChange}></input></label><br />
                    <label>Attenuation Level<br /><input type="number" name="attenuation_level" onChange={this.handleChange}></input></label><br />
                    <label>Contributed By<br /><input type="text" name="contributed_by" onChange={this.handleChange}></input></label><br />
                    <button onClick={this.handleSubmit}>Submit</button>

                    {this.state.message && <div>{this.state.message}</div>}
                </form>
            </div>
        )
    }
}
