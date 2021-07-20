import React, { Component } from 'react';
import axios from 'axios';

class NewBeer extends Component {
    state = { 
        name: '',
        tagline: '',
        attenuation_level: '',
        first_brewed: '',
        description: '',
        contributed_by: '',
        image_url: '',
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state)
      };

    handleFormSubmit = (event) => {
        event.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
        .then(this.props.history.push('/'))
        .catch(err => console.log(err))
    };

    render() { 
        const {
            name,
            tagline,
            attenuation_level,
            first_brewed,
            description,
            contributed_by,
            image_url
          } = this.state;
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="new-beer">
                    <label htmlFor="name">Name: </label><input type="text" name="name" id="name" onChange={this.handleChange} value={name}></input>
                    <label htmlFor="tagline">Tagline: </label><input type="text" name="tagline" id="tagline" onChange={this.handleChange} value={tagline}></input>
                    <label htmlFor="attenuation_level">Attenuation level: </label><input type="text" name="attenuation_level" id="attenuation_level" onChange={this.handleChange} value={attenuation_level}></input>
                    <label htmlFor="first_brewed">First_brewed: </label><input type="text" name="first_brewed" id="first_brewed" onChange={this.handleChange} value={first_brewed}></input>
                    <label htmlFor="description">Description: </label><input type="text" name="description" id="description" onChange={this.handleChange} value={description}></input>
                    <label htmlFor="contributed_by">Contributed_by: </label><input type="text" name="contributed_by" id="contributed_by" onChange={this.handleChange} value={contributed_by}></input>
                    <label htmlFor="image_url">Image: </label><input type="text" name="image_url" id="image_url" onChange={this.handleChange} value={image_url}></input>
                    <button type="submit">Add Beer</button>
                </div>
            </form>
                );
            }
}
 
export default NewBeer;