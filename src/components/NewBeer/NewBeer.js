import React, { Component } from 'react';
import axios from 'axios';
// import NavBar from '../NavBar/NavBar';


export default class NewBeer extends Component {

    postBeerData = () => {
        axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`)
        .then(response => {
            console.log(response.data)
        })
    }

    render() {
        return (
            <div>
                {/* <NavBar /> */}
                <form action="https://ih-beers-api2.herokuapp.com/beers/new" method="POST">
                    <label htmlFor="name">Name</label><br/>
                    <input id="name" name="name" type="text" /><br/><br/>
                    <label htmlFor="tagline">Tagline</label><br/>
                    <input id="tagline" name="tagline" type="text" /><br/><br/>
                    <label htmlFor="description">Description</label><br/>
                    <textarea id="description" name="description" type="text"></textarea><br/><br/>
                    <label htmlFor="first_brewed">First Brewed</label><br/>
                    <input id="first_brewed" name="first_brewed" type="text" /><br/><br/>
                    <label htmlFor="tips">Brewer's Tips</label><br/>
                    <input id="tips" name="tips" type="text" /><br/><br/>
                    <label htmlFor="attenuation">Attenuation Level</label><br/>
                    <input id="attenuation" name="attenuation" type="number" /><br/><br/>
                    <label htmlFor="creator">Contributed by</label><br/>
                    <input id="creator" name="creator" type="text" /><br/><br/>
                    <button type="submit">Add Beer</button>
                </form>
            </div>
        )
    }
}
