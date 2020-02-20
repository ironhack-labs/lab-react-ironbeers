import React, { Component } from 'react'

export default class NewBeer extends Component {

    state = {
        APIurl: "https://ih-beers-api2.herokuapp.com/beers/new"
    }


    render() {
        return (
            <div>
                <form action={this.state.APIurl} method="post">

                    <div>
                        <label>Name</label>
                        <input type="text" name="name"></input>
                    </div>

                    <div>
                        <label>Tagline</label>
                        <input type="text" name="tagline"></input>
                    </div>

                    <div>
                        <label>Description</label>
                        <textarea name="description"></textarea>
                    </div>

                    <div>
                        <label>First Brewed</label>
                        <input type="text" name="first_brewed"></input>
                    </div>

                    <div>
                        <label>Brewers Tips</label>
                        <input type="text" name="brewers_tips"></input>
                    </div>

                    <div>
                        <label>Attenuation Level</label>
                        <input type="number" name="attenuation_level"></input>
                    </div>

                    <div>
                        <label>Contributed by</label>
                        <input type="text" name="contributed_by"></input>
                    </div>

                    <button type="submit">Add new beer</button>

                </form>
            </div>
        )
    }
}
