import React, { Component } from 'react';
import Header from './Header';
import axios from "axios";


// HERE I WILL DISPLAY A FORM TO CREATE A NEW BEER

export class NewBeer extends Component {

    state = {
        name: "",
        tagline: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        description: "",
        contributed_by: "",
    }

    handleSubmit = (event) => {
        let attenuationLevel = 0;

        event.preventDefault();
        if (typeof(event.target.attenuation_level.value) === 'number') {
            attenuationLevel = event.target.attenuation_level.value;
        };
        this.setState({
            name: event.target.name.value,
            tagline: event.target.tagline.value,
            first_brewed: event.target.first_brewed.value,
            brewers_tips: event.target.brewers_tips.value,
            attenuation_level: attenuationLevel,
            description: event.target.description.value,
            contributed_by: event.target.contributed_by.value,
        });
        console.log(this.state);

        axios
            .post(`https://ih-beers-api2.herokuapp.com/beers/new`, this.state)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        return (
            <div>
                <Header />
                <h1>Create a new beer</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label><br />
                    <input type="text" name="name" class="" id="name" /> <br />
                    <label htmlFor="tagline">Tagline</label><br />
                    <input type="text" name="tagline" class="" id="tagline" /><br />
                    <label htmlFor="description">Description</label><br />
                    <input type="text" name="description" class="" id="description" /><br />
                    <label htmlFor="first_brewed">First Brewed</label><br />
                    <input type="text" name="first_brewed" class="" id="first_brewed" /><br />
                    <label htmlFor="brewers_tips">Brewers tips</label><br />
                    <input type="text" name="brewers_tips" class="" id="brewers_tips" /><br />
                    <label htmlFor="attenuation_level">Attenuation level</label><br />
                    <input type="number" min="0" name="attenuation_level" class="" id="attenuation_level" /><br />
                    <label htmlFor="contributed_by">Contributed by</label><br />
                    <input type="text" name="contributed_by" class="" id="contributed_by" /><br />
                    {/* <label htmlFor="image_url">Image</label><br/>
                    <input type="file" name="image_ur" class="" id="image_ur"/><br/> */}

                    <button>Submit</button>
                </form>


            </div>
        )
    }
}

export default NewBeer;
