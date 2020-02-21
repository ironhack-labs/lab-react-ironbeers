import Header from "./../components/header"

import React, { Component } from 'react'

export default class NewBeer extends Component {
    render() {
        return (
            <div>
                <Header/>
                <h1>New Beer page</h1>
                <form method="POST" action="https://ih-beers-api2.herokuapp.com/beers/new">
                    <label for="name">Name</label>
                    <input type="text" name="name"/>
                    <label for="tagline">Tagline</label>
                    <input type="text" name="tagline"/>
                    <label for="description">Description</label>
                    <input type="text" name="description"/>
                    <label for="first_brewed">First Brewed</label>
                    <input type="text" name="first_brewed"/>
                    <label for="brewers_tips">Brewers Tips</label>
                    <input type="text" name="brewers_tips"/>
                    <label for="attenuation_level">Attenuation Level</label>
                    <input type="number" name="attenuation_level"/>
                    <label for="contributed_by">Contributed By</label>
                    <input type="text" name="contributed_by"/>
                    <input type="submit" value="Add New"/>
                </form>
            </div>
        )
    }
}
