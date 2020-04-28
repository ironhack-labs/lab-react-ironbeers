import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';

//IT.6
class NewBeer extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: '',
            contributed_by: ''
        }
    }
  

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

    handleSubmit = (event) => {
        event.preventDefault();

        axios
        .post("https://ih-beers-api2.herokuapp.com/beers/new", this.state)
        .then(response => {
        })
        .catch((error) => {
            this.setState({
                error: error,
            })
        })

        this.setState({
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: "",
            contributed_by: ""
        });
    }

    render() {
        const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;
        return (
            <div>
                <Nav />
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        name="name"
                        value={name}
                        placeholder="name"
                        onChange={this.handleChange} />   
                    <input type="text"
                        name="tagline"
                        value={tagline}
                        placeholder="tagline"
                        onChange={this.handleChange} />
                    <input type="text"
                        name="description"
                        value={description}
                        placeholder="description"
                        onChange={this.handleChange} />
                    <input type="text"
                        name="first_brewed"
                        value={first_brewed}
                        placeholder="first_brewed"
                        onChange={this.handleChange} />
                    <input type="text"
                        name="brewers_tips"
                        value={brewers_tips}
                        placeholder="brewers_tips"
                        onChange={this.handleChange} />
                    <input type="number"
                        name="attenuation_level"
                        value={attenuation_level}
                        placeholder="attenuation_level"
                        onChange={this.handleChange} />
                    <input type="text"
                        name="contributed_by"
                        value={contributed_by}
                        placeholder="contributed_by"
                        onChange={this.handleChange} /> 
                    <button type='submit'>ADD NEW</button>
                </form>
            </div>
        )
    }
}

export default NewBeer; 